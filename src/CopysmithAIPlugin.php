<?php

include(plugin_dir_path(__FILE__) . 'CopysmithAIProductREST.php');
include(plugin_dir_path(__FILE__) . 'CopysmithAIPages.php');
include(plugin_dir_path(__FILE__) . 'CopysmithAIRequirements.php');

class CopysmithAIPlugin {

  /**
   * Reference to pages
   * 
   * @var CopysmithAiPages
   */
  public $template;

  /**
   * Refernce to the Product API
   * 
   * @var CopysmithAIProductREST
   */
  public $productsRest;

  /**
   * Refernce to the Product API
   * 
   * @var CopysmithAIRequirements
   */
  public $requirements;

  /**
   * Main entry point into the CopySmith AI eCom plugin
   */
  public function __construct() 
  {
    add_action('admin_init', [$this, 'settings']);
    add_action( 'admin_print_styles', [$this, 'loadStyles']);
    add_action( 'admin_enqueue_scripts', [$this, 'loadScrips']);

    $this->requirements = new CopysmithAIRequirements();
    $this->productsRest = new CopysmithAIProductREST();
    $this->template = new CopysmithAIPages();
  }

  /**
   * Registers all of CopySmith AI Product Settings
   */
  public function settings() 
  {
    // 1 - Add settings sections
    add_settings_section(
      'copysmithplugin_settings',
      'Copysmith AI Settings',
      '',
      'copysmith-ai-plugin-account'
    );

    // Register input field
    register_setting(
      'copysmith-ai-plugin-account',
      'copysmithaiapikey',
      [
        'type' => 'string',
        'sanitize_callback' => 'sanitize_text_field',
        'default' => '',
      ],
    );

    add_settings_field(
      'copysmithaiapikey',
      'Copysmith API Key',
      [$this, 'settingsInputField'],
      'copysmith-ai-plugin-account',
      'copysmithplugin_settings',
    );
  }

  /**
   * Inputfield
   */
  public function settingsInputField()
  {
    $optionName = 'copysmithaiapikey';
    $optionValue = get_option('copysmithaiapikey');
    $class = '';

    if(isset($optionValue) && $optionValue != '') {
      printf(
        '<input class="%1$s" type="text" name="%2$s" id="%2$s" value="%3$s" disabled />', 
        esc_attr( $class ), 
        esc_attr( $optionName ), 
        ''
      );
    } else {
      printf(
        '<input class="%1$s" type="text" name="%2$s" id="%2$s" value="%3$s" />', 
        esc_attr( $class ), 
        esc_attr( $optionName ), 
        isset($optionValue) ? esc_attr($optionValue) : ''
      );
    }
  }

  /**
   * Loads/Enqueues Styles
   */
  public function loadStyles()
  {
    $rand = time();
    wp_enqueue_style('copysmith-ai-style-layout', plugins_url('static/styles/layout.css', __FILE__), '', $rand);
    wp_enqueue_style('copysmith-ai-style-support', plugins_url('static/styles/support.css', __FILE__), '', $rand);
    wp_enqueue_style('copysmith-ai-style-account', plugins_url('static/styles/account.css', __FILE__), '', $rand);
    wp_enqueue_style('copysmith-ai-style-home', plugins_url('static/styles/home.css', __FILE__), '', $rand);
  }

  /**
   * Loads/Enqueues Scripts
   */
  public function loadScrips()
  {
    wp_enqueue_script('copysmith-ai-javascript', plugins_url('dist/main.js', CSAI_JS_BUILD), [], '0.0.1', true);
  }
}
