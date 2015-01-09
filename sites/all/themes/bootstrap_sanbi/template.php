<?php

/**
 * @file
 * template.php
 */

 /**
 * hook_form_FORM_ID_alter()
 * Modify the User Login Block Form
 
function bootstrap_sanbi_form_user_login_block_alter(&$form, &$form_state, $form_id) {
   dpr($form);
   print_r($form); // output in Krumo with the Devel module
}*/


/**
 * Implements hook_preprocess_page().
 *
 * @see page.tpl.php
 */
function bootstrap_sanbi_preprocess_page(&$variables) {
    $variables['navbar_classes_array'] = [];
    if(isset($variables['node']->type)) {
        // If the content type's machine name is "my_machine_name" the file
        // name will be "page--my-machine-name.tpl.php".
        $variables['theme_hook_suggestions'][] = 'page__' . $variables['node']->type;
        if($variables['node']->type == 'seakey') {
            $classification = $variables['page']['content']['system_main']['nodes'];
            $classification = array_shift($classification);
            $classification = $classification['field_biological_classification'];
            $labelparts = explode(' > ', $classification['#title']);
            $fieldparts = array();
            $terms = taxonomy_get_parents_all($classification['#items'][0]['tid']);
            foreach($terms as $delta => $term) {
                $fieldparts[] = $term->name;
            }
            $fieldparts = array_reverse($fieldparts);
            $genus = '';
            $species = '';
            $output = '<ul class="classification">';
            foreach($labelparts as $delta => $item) {
                if($delta == 5)
                    $genus =  $fieldparts[$delta];
                else if($delta == 6)
                    $species = $fieldparts[$delta];
                else
                    $output .= '<li><strong>' . $item . '</strong>: ' . $fieldparts[$delta] . '</li>';
            }
            $output .=  '</ul>';
            $link = ' <a role="button" class="btn btn-primary" href="/node/' . $classification['#object']->nid . '/edit">Edit</a>';
            if(!user_access("edit any seakey content"))
                $link = '';
            $output = '<h1>' . $genus . ' ' . $species . $link .'</h1>' . $output;
            $variables['page']['output'] = $output;
        }
    }
}

function bootstrap_sanbi_form_search_form_alter(&$form, &$form_state, $form_id) {
    $form['basic']['keys']['#prefix'] = '<div class="row"><div class="col-md-10"><div class="input-group-wrapper"><p>Search by keywords or phrase: </p>';
    $form['basic']['keys']['#suffix'] = '</div></div><div class="col-md-2"><button type="submit" class="btn btn-primary">Search</button></div></div>';
    //print_r($form);
    
}

function bootstrap_sanbi_bootstrap_search_form_wrapper($variables) {
  $output = '<div class="input-group">';
  $output .= $variables['element']['#children'];
  //$output .= '<span class="input-group-btn">';
  //$output .= '<button type="submit" class="btn btn-primary btn-lg">';
  // We can be sure that the font icons exist in CDN.
  /*if (theme_get_setting('bootstrap_cdn')) {
    $output .= _bootstrap_icon('search');
  }
  else {*/
    //$output .= t('Search');
  //}
  //$output .= '</button>';
  //$output .= '</span>';
  $output .= '</div>';
  return $output;
}

function bootstrap_sanbi_preprocess_field(&$variables) {
    if($variables['element']['#object']->type == 'seakey') {
        $temp = $variables;
        $field = $variables['element']['#field_name'];
        //$variables['element']['#object']->$field;
        //$variables['label']
    }
}
