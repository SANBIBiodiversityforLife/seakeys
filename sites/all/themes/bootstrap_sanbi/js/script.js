jQuery(document).ready(function($) {
    $('.region-sidebar-first').affix({
      offset: {
        top: 250,
        bottom: function () {
          return (this.bottom = $('.footer').outerHeight(true) - 200)
        }
      }
    })
    
    // This next bit is horribly hacky but it will take ages to do any other way and I'm out of time...
    $('.field-name-field-ecology-movement h2.field-label a').html('Ecology');
    $('.field-name-field-ecology-movement h2.field-label a').attr('name', 'field_ecology');
    $('.field-name-field-ecology-movement h2.field-label').after('<h3>Movement</h3>');
    $('.field-name-field-ecology-reproduction h2.field-label').replaceWith('<h3>Reproduction</h3>');
    $('.field-name-field-ecology-trophic-strategy h2.field-label').replaceWith('<h3>Trophic strategy</h3>');
     
    $('.field-name-field-name-published-in h2.field-label a').html('Names');
    $('.field-name-field-name-published-in h2.field-label a').attr('name', 'field_names');
    $('.field-name-field-name-published-in h2.field-label').after('<h3>Names published in</h3>');
    $('.field-name-field-common-names h2.field-label').replaceWith('<h3>Common names</h3>');
    $('.field-name-field-synonyms h2.field-label').replaceWith('<h3>Synonyms</h3>');
});

