<?php $this->layout('layout/layout') ?>

<?php $this->start('_content') ?>

<div class="cs-ai-account-page">
  <h1 class="cs-ai-page-title">Account Information</h1>

  <div class="cs-ai-account-info">
    <?php if(!$hasKey || !$company): ?>

      <div class="cs-ai-account-info-detail">  
        <div>
          Account Name:
        </div>
        <div>
          
        </div>
      </div>
      <div class="cs-ai-account-info-detail">  
        <div>
          Account Email:
        </div>
        <div>
          
        </div>
      </div>
      <div class="cs-ai-account-info-detail">  
        <div>
          Current Plan:
        </div>
        <div>
          
        </div>
      </div>

    <?php else: ?>
      <div class="cs-ai-account-info-detail">  
        <div>
          Account Name:
        </div>
        <div>
          <?php esc_html_e($user['displayName']) ?>
        </div>
      </div>
      <div class="cs-ai-account-info-detail">  
        <div>
          Account Email:
        </div>
        <div>
        <?php esc_html_e($user['email']) ?>
        </div>
      </div>
      <div class="cs-ai-account-info-detail">  
        <div>
          Current Plan:
        </div>
        <div>
        <?php  esc_html_e(ucfirst($billing['plan'])) ?>
        <?php if($billing['status'] === 'trialExpired'): ?>
          (Expired)
        <?php endif ?>
        </div>
      </div>
    <?php endif ?>
  </div>
  <form action="options.php" method="post" style="max-width: 50%">

    <?php settings_fields('copysmith-ai-plugin-account') ?>
    <?php do_settings_sections('copysmith-ai-plugin-account') ?>

    <div class="cs-ai-account-buttons">
      <?php if( !!$company && $company['billing']['status'] !== 'customer' ): ?>
        <a href="http://app.copysmith.ai/profile/plans" class="cs-ai-account-cta" target="_blank">Upgrade Plan</a>
      <?php endif ?>

      <?php if($hasKey): ?>

        <button class="cs-ai-account-link-button" type="submit">Unlink Account</button>

      <?php else: ?>

        <button class="cs-ai-account-link-button" type="submit">Link Account</button>

      <?php endif ?>
        
    </div>
  </form>
</div>

<?php $this->stop() ?>