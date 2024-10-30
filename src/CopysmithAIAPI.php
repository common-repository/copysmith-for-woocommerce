<?php

class CopySmithAIAPI {
  
  /**
   * API URI String
   * 
   * @var string
   */
  public $apiUri;

  /**
   * API Key for CopySmith
   * 
   * @var string
   */
  protected $APIKEY;
  
  public function __construct()
  {
    $this->setURI();
    $this->setAPIKey();
  }

  /**
   * Sets the Copysmith API request URI based on runtime env type.
   */
  protected function setURI()
  {
    $envType = getenv('WORDPRESS_ENV_TYPE');

    switch ( $envType ) {
      case 'local':
      case 'development':
          $this->apiUri = 'http://api:3000';
          break;
      case 'staging':
          $this->apiUri = 'https://staging-new-api.copysmith.ai';
          break;
      default:
          $this->apiUri = 'https://new-api.copysmith.ai';
          break;
    }
  }

  /**
   * Sets the API key for request using the WP Options
   */
  protected function setAPIKey()
  {
    $key = get_option('copysmithaiapikey');

    if(!isset($key) || $key == '') 
    {
      $key = null;
    }

    $this->APIKEY = $key;
  }

  /**
   * Checks to see if we have an API key
   * 
   * @return bool
   */
  public function hasApiKey()
  {
    return isset($this->APIKEY) && $this->APIKEY !== '';
  }

  /**
   * Gets company info for a Copysmith user;
   * 
   * @return array
   */
  public function company()
  {
    $request = new WP_Http();
    $response = $request->get(
      $this->apiUri . '/company',
      [
        'headers' => [
          'Authorization' => 'Bearer ' . $this->APIKEY,
        ],
      ]
    );

    return $response;
  }

  /**
   * Gets user info from Copysmith API
   * 
   * @return array
   */
  public function user()
  {
    $request = new WP_Http();
    $response = $request->get(
      $this->apiUri . '/users/currentUser',
      [
        'headers' => [
          'Authorization' => 'Bearer ' . $this->APIKEY,
        ],
      ]
    );

    return $response;
  }

  /**
   * Gets user info from Copysmith API
   * 
   * @return array
   */
  public function billing()
  {
    $request = new WP_Http();
    $response = $request->get(
      $this->apiUri . '/billing/subscription/info',
      [
        'headers' => [
          'Authorization' => 'Bearer ' . $this->APIKEY,
        ],
      ]
    );

    return $response;
  }

}

