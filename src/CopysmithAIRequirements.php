<?php

class CopysmithAIRequirements {
  
  /**
   * Checks for requirements and displays errors if not met.
   */
  public function __construct()
  {
    $this->checkForProductPlugin();
    $this->checkForAPIKey();
  }

  /**
   * Checks to see if API key is present and displays error if not present
   */
  public function checkForAPIKey()
  {
    $option = get_option('copysmithaiapikey');
    
    if ($option == false || $option == '')
    { 
      add_action( 'admin_notices', [$this, 'reportNoAPIKeyError'] );
    }
  }

  /**
   * Checks to see if wooCommerce is active and calls error code if not active
   */
  public function checkForProductPlugin()
  {
    
    if ( !in_array( 
        'woocommerce/woocommerce.php', 
        apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) 
      )
    )
    { 
      add_action( 'admin_notices', [$this, 'reportNoWooCommerceError'] );
    }
  }

  /**
   * Display code for no active woo commerce
   */
  public function reportNoWooCommerceError()
  {
    $class = 'notice notice-error';
    $message = __( 'WooCommerce not found: WooCommerce is a required plugin for the CopySmith AI eCommerce Plugin', 'sample-text-domain' );
 
    printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), esc_html( $message ) );
  }

  /**
   * Displayed code for no API Key
   */
  public function reportNoAPIKeyError()
  {
    $class = 'notice notice-error';
    $message = __( 'CopySmith AI API Key not found!', 'sample-text-domain' );
 
    printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), esc_html( $message ) );
  }
}
