jQuery(document).ready(function($) {
    $('.field-widget-text-textarea').each(function() {
        //$(this).attr('data-toggle', 'tooltip');
        //$(this).attr('data-placement', 'top');
        //$(this).attr('title', $(this).find('.description:first').text());
        //$(this).tooltip()
        
        // label = $(this).find('label:first');
        // $(label).attr('data-toggle', 'tooltip');
        // $(label).attr('data-placement', 'top');
        // $(label).attr('title', $(this).find('.description:first').text());
        // $(label).tooltip();
        
        
        label = $(this).find('.form-type-textarea:first');
        $(label).attr('data-toggle', 'tooltip');
        $(label).attr('data-placement', 'top');
        $(label).attr('title', $(this).find('.description:first').text());
        $(label).tooltip();
    });

    //$('').tooltip()
    //<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
});

