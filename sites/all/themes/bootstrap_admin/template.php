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


function bootstrap_admin_preprocess_page(&$variables) {

  
}

function bootstrap_admin_form_user_profile_form_alter(&$form, &$form_state, $form_id) {
    
    //print_r($form);
    drupal_set_title('Hello ' . ucfirst($form['#user']->name)); // . ' - <a class="btn btn-primary" href="/admin/seakeys" title="Find seakeys" role="button">Find seakeys</a><a class="btn btn-danger" href="/node/add" title="Add seakeys" role="button">Add seakeys</a>');
    
}

function bootstrap_admin_preprocess_user_profile(&$variables) {
    
}


function bootstrap_admin_preprocess_node(&$variables, $hook) {
    
}

