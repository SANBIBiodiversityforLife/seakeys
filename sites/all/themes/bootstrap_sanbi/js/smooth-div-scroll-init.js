
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
    $('.field-name-field-ecology-other h2.field-label').replaceWith('<h3>Other</h3>');
    $('.field-name-field-sk-habitat-other h2.field-label').replaceWith('<h3>Other</h3>');
    $('.field-name-field-sk-biome-other h2.field-label').replaceWith('<h3>Other</h3>');
     
    $('.field-name-field-name-published-in h2.field-label a').html('Names');
    $('.field-name-field-name-published-in h2.field-label a').attr('name', 'field_names');
    $('.field-name-field-name-published-in h2.field-label').after('<h3>Names published in</h3>');
    $('.field-name-field-common-names h2.field-label').replaceWith('<h3>Common names</h3>');
    $('.field-name-field-synonyms h2.field-label').replaceWith('<h3>Synonyms</h3>');
    
    // This is actually for the image gallery
    $("div#smoothdivscroll").smoothDivScroll({});    
    $('.fancybox').fancybox();
    
    
    var species = $('#seakey-title').text();
    species = species.replace(' ','-');
    $.ajax({
      dataType: "jsonp",
      url: 'http://api.iucnredlist.org/index/species/'+species+".js",
      success: function (row) {
        if(row.length > 0) {
            var txt = row[0].category + " (Last assessed: " + row[0].modified_year + ")<br><br>"+ row[0].rationale;
            $("p#iucn-status").html(txt);
        /* see https://www.assembla.com/spaces/sis/wiki/Red_List_API?version=3
            var id = row[0].species_id;
            $.ajax({
              dataType: "jsonp",
              url: 'http://api.iucnredlist.org/details/'+id+"/0.js",
              success: function (data) {
                var blob = data[0].species_account;
                var txt = data;
                console.log(txt);
                  var blob = data[0].species_account;
                  $("#full_result").get(0).innerHTML = blob;
                  var cat = $('#red_list_category_title').get(0).innerHTML;
                  var code = $('#red_list_category_code').get(0).innerHTML;
                  var year = $('#modified_year').get(0).innerHTML;
                  var summary = ""+code+" - "+cat+" (updated "+year+")";
                  $('#full_result').hide()
                  $("#summary").get(0).innerHTML = summary;
                  $("#summary_justification").get(0).innerHTML = $('#justification').get(0).innerHTML;
                  $('#full_button').show()
              }
            });*/
        }
        else {
            var txt = 'Not assessed';
            $("p#iucn-status").html(txt);
        }
      },
      failure: function () {
        var txt = 'IUCN lookup service is temporarily down';
        $("p#iucn-status").html(txt);
      }
    });
});

