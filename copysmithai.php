<?php
/**
 * Copysmith for WooCommerce 
 * 
 * @package   Copysmith AI
 * 
 * @wordpress-plugin
 * Plugin Name: Copysmith AI
 * Plugin URI: https://copysmith.ai
 * Description: Harness the power of AI to quickly create optimized and engaging descriptions for all your WooCommerce products.
 * Version: 1.0.1
*/

// Exit if accessed directly
if( ! defined('ABSPATH') ) exit;

require plugin_dir_path(__FILE__) . 'vendor/autoload.php';

// define variables for paths
define( 'CSAI_ASSET_PATH', plugin_dir_url(__FILE__) . 'src/static');
define( 'CSAI_JS_BUILD', plugin_dir_path(__FILE__) . 'dist/');

include( plugin_dir_path(__FILE__) . './src/CopysmithAIPlugin.php' );

$copysmithAIPlugin = new CopysmithAIPlugin();