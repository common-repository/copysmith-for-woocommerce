<?php if($banner): ?>
    <div class="cs-ai-banner">
      <p>
        <?php if( $banner == 'cancelled' ): ?>
          Your subscription has been canceled.
        <?php elseif( $banner == 'expired' ): ?>
          Your free trial has expired.
        <?php else: ?>
          Your subscription is currently suspended.
        <?php endif ?>
      </p>
      <p>
        <?php if( $banner == 'expired' ): ?>
          <a href="http://app.copysmith.ai/profile/plans" target="_blank">Subscribe now</a>
        <?php else: ?>
          <a href="http://app.copysmith.ai/profile/plans" target="_blank">Reactivate your plan</a>
        <?php endif ?>
        &nbsp;to continue working.
      </p>
    </div>
<?php endif ?>