<?php
function platte_preprocess_page(&$variables) {
  if (!empty($variables['node'])) {
    $variables['theme_hook_suggestions'][] = 'page__node__' . $variables['node']->type;
  }
}
?>