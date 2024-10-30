<div class="cs-ai-main-layout">

  <input type="hidden" value="<?php $errors && is_array($errors) ? '' : esc_html_e($csAIToken)  ?>" id="cs-ai-token" />

  <?php $this->insert('layout::nav') ?>

  <?php if($errors && is_array($errors)): ?>
    <div>
      <?php foreach($errors as $error): ?>
        <div class="error" style="padding: 0.5rem">
          <?php esc_html_e($error['message']) ?>
        </div>
      <?php endforeach ?>
    </div>
  <?php endif ?>
  
  <div class="cs-ai-content-area">
    <?php echo wp_kses(
      $this->section('_content'),
      [
        'a' => [
          'href' => [],
          'title' => [],
          'class' => [],
          'alt' => [],
        ],
        'h1' => [
          'class' => [],
        ],
        'h2' => [
          'class' => [],
        ],
        'h3' => [
          'class' => [],
        ],
        'form' => [
          'method' => [],
          'action' => [],
        ],
        'input' => [
          'type' => [],
          'value' => [],
          'class' => [],
          'name' => [],
          'id' => [],
          'disabled' => []
        ],
        'div' => [
          'class' => [],
          'id' => [],
        ],
        'button' => [
          'class' => [],
          'type' => []
        ],
        'table' =>[
          'class' => []
        ],
        'tr' => [
          'class' => []
        ],
        'td' => [
          'class' => []
        ],
        'th' => [
          'class' => []
        ],
        'tbody' => [
          'class' => []
        ],
        'thead' => [
          'class' => []
        ],
        'p' => [
          'class' => []
        ],
      ]
      ) ?>
  </div>

  <?php $this->insert('layout::banner') ?>
</div>
