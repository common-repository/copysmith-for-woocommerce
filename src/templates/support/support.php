<?php $this->layout('layout/layout') ?>

<?php $this->start('_content') ?>

<div class="cs-ai-support-page">

  <h1 class="cs-ai-page-title">Copysmith Help and Support</h1>

  <div class="cs-ai-support-page-content-wrapper">

    <h2 class="cs-ai-support-title">Copysmith Documentation and Resources</h2>

    <div class="cs-ai-support-page-content-flex">
      <div>
          <!-- video -->
          <div class="cs-ai-support-video-wrapper">
            <img src="<?php echo CSAI_ASSET_PATH . '/images/video_place_holder.png'; ?>" />
          </div>
          <div class="cs-ai-support-video-cta">
            Getting Started with Copysmith Wordpress Plugin
          </div>
      </div>
      <div class="cs-ai-support-page-links">
        <div class="cs-ai-support-page-link">
          <img src="<?php echo CSAI_ASSET_PATH . '/images/support_icon.png'; ?>" alt="purple support icon" />
          <a href="" target="_blank">eCommerce Product Descriptions & SEO</a>
        </div>
        <div class="cs-ai-support-page-link">
        <img src="<?php echo CSAI_ASSET_PATH . '/images/support_icon.png'; ?>" alt="purple support icon" />
          <a href="" target="_blank">Launching your eCommerce Brand Identity</a>
        </div>
        <div class="cs-ai-support-page-link">
        <img src="<?php echo CSAI_ASSET_PATH . '/images/support_icon.png'; ?>" alt="purple support icon" />
          <a href="" target="_blank">Template Tutorial: Product Descriptions</a>
        </div>
      </div>
    </div>
    <div class="cs-ai-support-page-cta-support">
      Having Trouble? <a href="mailto:supppor@copysmith.ai">Email Support</a>
    </div>
  </div>
</div>

<?php $this->stop() ?>