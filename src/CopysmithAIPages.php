<?php

require_once(plugin_dir_path(__FILE__) . 'CopysmithAIAPI.php');

class CopysmithAIPages {

  public $template;

  public $company;

  public $csAPI;

  public $errors = [];

  public $banner = null;

  public function __construct() 
  {
    $this->csAPI = new CopySmithAIAPI();
    $this->initCompany();
    $this->setBanner();
    $this->template = new League\Plates\Engine(plugin_dir_path(__FILE__) . 'templates');
    $this->template->addFolder('home', plugin_dir_path(__FILE__) . 'templates/home');
    $this->template->addFolder('support', plugin_dir_path(__FILE__) . 'templates/support');
    $this->template->addFolder('account', plugin_dir_path(__FILE__) . 'templates/account');
    $this->template->addFolder('layout', plugin_dir_path(__FILE__) . 'templates/layout');
    $this->template->addData([
      'csAIToken' => get_option('copysmithaiapikey'),
      'company' => $this->company,
      'hasKey' => $this->csAPI->hasApiKey(),
      'errors' => $this->errors,
      'banner' => $this->banner,
    ]);

    add_action('admin_menu', [$this, 'menuItem']);
    add_action('admin_menu', [$this, 'homePage']);
    add_action('admin_menu', [$this, 'accountPage']);
   // add_action('admin_menu', [$this, 'supportPage']);
  }

  public function initCompany()
  {
    $copysmithAPI = new CopySmithAIAPI();
    $this->company = null;
    $company = null;

    if($this->csAPI->hasApiKey())
    {
      try {
        $company = $this->csAPI->company();

      } catch(Exception $e) {
        $this->errors = $company['errors'];
        $this->company = null;
        return;
      }

      if(gettype($company) == 'object' && get_class($company) == 'WP_Error') {
        $this->errors = $company->get_error_messages();
        $this->company = null;
        return;
      }

      $this->company = json_decode($company['body'], true);

      if(isset($this->company['errors'])) {
        $this->errors = $this->company['errors'];
        $this->company = null;
        return;
      }
    }
  }

  public function setBanner() 
  {
    if($this->company == null) {
      return;
    }

    if($this->company['billing']['status'] == 'cancelled') {
      $this->banner = 'cancelled';
    }

    if($this->company['billing']['status'] == 'trialExpired') {
      $this->banner = 'expired';
    }

    if($this->company['billing']['suspensionEnd'] !== null) {
      $this->banner = 'suspened';
    }

  }

  public function menuItem() 
  {
    add_menu_page(
      'Copysmith',
      'Copysmith AI',
      'manage_options',
      plugin_dir_path(__FILE__) . 'admin/account.php',
      [$this, 'renderHome'],
      plugin_dir_url(__file__) . 'images/copysmith.png',
      10,
    );
  }

  public function homePage() 
  {
    add_submenu_page(
      plugin_dir_path(__FILE__) . 'admin/account.php',
      'Copysmith Home',
      'Home',
      'manage_options',
      'copysmith-ai-plugin-home',
      [$this, 'renderHome'],
    );
  }

  public function accountPage() 
  {
    add_submenu_page(
      plugin_dir_path(__FILE__) . 'admin/account.php',
      'Copysmith Home',
      'Account',
      'manage_options',
      'copysmith-ai-plugin-account',
      [$this, 'renderAccount'],
    );
  }

  public function supportPage() 
  {
    add_submenu_page(
      plugin_dir_path(__FILE__) . 'admin/account.php',
      'Copysmith Home',
      'Support',
      'manage_options',
      'copysmith-ai-plugin-support',
      [$this, 'renderSupport'],
    );
  }

  public function renderHome() 
  {
    echo $this->template->render('home::home');
  }

  public function renderSupport() 
  {
    echo $this->template->render('support::support');
  }

  public function renderAccount() 
  {
    $user = [];
    $billing = [];

    if($this->csAPI->hasApiKey())
    {
      $user = json_decode(($this->csAPI->user())['body'], true);
      $billing = json_decode(($this->csAPI->billing())['body'], true);
    }

    echo $this->template->render('account::account', [
      'user' => $user,
      'billing' => $billing,
    ]);
  }
}