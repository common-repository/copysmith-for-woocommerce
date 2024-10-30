<nav class="cs-ai-plugin-nav">
  <div class="cs-ai-nav-links">
    <div class="cs-ai-nav-brand">
      <a href="<?php echo admin_url('admin.php?page=copysmith-ai-plugin-home') ?>" >
        <img src="<?php echo CSAI_ASSET_PATH . '/images/copysmith_logo.png'; ?>" alt="Copysmith AI Logo" />
      </a>
    </div>
    <div class="cs-ai-link <?php echo $_GET['page'] == 'copysmith-ai-plugin-home' ? 'active' : ''  ?>">
      <a href="<?php echo admin_url('admin.php?page=copysmith-ai-plugin-home') ?>" >
          Home
      </a>
    </div>
    <div class="cs-ai-link <?php echo $_GET['page'] == 'copysmith-ai-plugin-account' ? 'active' : ''  ?>">
      <a href="<?php echo admin_url('admin.php?page=copysmith-ai-plugin-account') ?>">
          Account
      </a>
    </div>
    <?php /*<div class="cs-ai-link <?php echo $_GET['page'] == 'copysmith-ai-plugin-support' ? 'active' : ''  ?>">
      <a href="<?php echo admin_url('admin.php?page=copysmith-ai-plugin-support') ?>">
          Support
      </a>
    </div>
    */ ?>
  </div>

  <div class="cs-ai-right-nav">
    <?php if($hasKey): ?>
    <div id="cs-ai-limit">
    </div>
    <?php endif ?>
    <?php if( !!$company && $company['billing']['status'] !== 'customer' ): ?>
      <div class="cs-ai-nav-upgrade">
        <a href="https://app.copysmith.ai/profile/plans" target="_blanks">Upgrade Now</a>
      </div>
    <?php endif ?>
  </div>
</nav>