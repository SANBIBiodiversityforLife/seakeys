<?php

/**
 * @file
 * template.php
 */
function bootstrap_admin_preprocess_html(&$variables) {
  if ($variables['user']) {
    foreach($variables['user']->roles as $key => $role) {
      $variables['classes_array'][] = 'role-' . drupal_html_class($role);
    }
  }
}