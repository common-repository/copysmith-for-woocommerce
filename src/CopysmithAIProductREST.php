<?php

require_once(plugin_dir_path(__FILE__) . 'CopysmithAIAPI.php');

/**
 * A class used to register/extend the WP REST API.
 * We register end points for the use of products here. 
 */
class CopysmithAIProductREST {

  /**
   * Copysmith API interface
   * 
   * @var CopySmithAIAPI
   */
  protected $copysmithAPI;

  public function __construct() 
  {
    $this->copysmithAPI = new CopySmithAIAPI();

    add_action('rest_api_init', function() {
      register_rest_route('copysmith/v1', '/product/categories', [
        'methods' => WP_REST_Server::READABLE,
        'callback' => [$this, 'listCategories'],
        'permission_callback' => '__return_true',
      ]);
    });

    add_action('rest_api_init', function() {
      register_rest_route('copysmith/v1', '/product/tags', [
        'methods' => WP_REST_Server::READABLE,
        'callback' => [$this, 'listTags'],
        'permission_callback' => '__return_true',
      ]);
    });

    add_action('rest_api_init', function() {
      register_rest_route('copysmith/v1', '/products', [
        'methods' => WP_REST_Server::READABLE,
        'callback' => [$this, 'listProducts'],
        'permission_callback' => '__return_true',
      ]);
    });

    add_action('rest_api_init', function() {
      register_rest_route('copysmith/v1', '/product/update', [
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => [$this, 'updateProduct'],
        'permission_callback' => '__return_true',
      ]);
    });
  }

  /**
   * Updates the product type description
   * 
   * @param WP_REST_Request $request
   * @return WP_REST_Response
   */
  public function updateProduct( WP_REST_Request $request )
  {
    $body = json_decode($request->get_body(), true);

    if( is_null($body['content']) || is_null($body['ID']))
    {
      return new WP_REST_Response(['message' => 'must have id and content in request body'], 404);
    }

    $post = get_post($body['ID']);

    if(is_null($post))
    {
      return new WP_REST_Response(['message' => 'post not found'], 404);
    }

    $post->post_content = $body['content'];

    $results = wp_update_post($post);

    if(is_wp_error($results) || $request == 0) 
    {
      return new WP_REST_Response([], 500);
    }

    return new WP_REST_Response(['message' => 'updated product'], 200);
  }
  
  /**
   * List all products with a post type of product
   * 
   * @param WP_REST_Request $request
   * @return WP_REST_Response
   */
  public function listProducts( WP_REST_Request $request )
  {
    $args = [
      'post_type' => 'product',
      'post_per_page' => 10,
    ];

    if($request['category'] && is_category($request['category']))
    {
      $args['cat'] = $request['category'];
    }

    if($request['tag'] && is_tag($request['tag']))
    {
      $args['tag'] = $request['tag'];
    }

    if($request['search'])
    {
      $args['s'] = $request['search'];
    }

    $args['paged'] = !empty($request['page']) ? $request['page'] : 1;

    if($request['status'] && $request['status'] == 'all') {
      $args['post_status'] = ['draft', 'publish'];
    } else if($request['status']) {
      $args['post_status'] = $request['status'];
    }

    $data = new WP_Query($args);

    // Create the response object
    return new WP_REST_Response( $data ? $data : ['data' => []] );
  }

  /**
   * List all categories for products
   * 
   * @param WP_REST_Request $request
   * @return WP_REST_Response
   */
  public function listCategories( WP_REST_Request $request )
  {
    $categories = get_categories([
      'taxonomy' => 'product_cat',
      'post_type' => 'product',
    ]);

    // Create the response object
    return new WP_REST_Response( $categories );
  }

  /**
   * List all tags for a product
   * 
   * @param WP_REST_Request $request
   * @return WP_REST_Response
   */
  public function listTags()
  {
    $tagArs = [
      'post_type' => 'product',
    ];

    if(taxonomy_exists('product_cat'))
    {
      $tagArs['taxonomy'] = 'product_cat';
    }

    $tags = get_tags($tagArs);
  
    // Create the response object
    $response = new WP_REST_Response( $tags );

    return $response;
  }
  
}