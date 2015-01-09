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
    
    // Check template php for the first bit of this. Horrible way to do it but I can't find any other.
    $('.page-user-edit h1.page-header').append('. <small>Thanks for logging in. You can now <a class="btn btn-primary" href="/admin/seakeys" title="Find seakeys" role="button">Find and edit uploaded seakeys</a> or <a class="btn btn-danger" href="/node/add/seakey" title="Add seakeys" role="button">Add seakeys to the site</a>. Alternatively, edit your account details below.</small>');
    //$('').tooltip()
    //<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
});

