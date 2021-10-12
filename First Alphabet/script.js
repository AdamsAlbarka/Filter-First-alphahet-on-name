$("#search_The_Value").on('keyup', function(){
    var value = $(this).val().toLowerCase();
    $("#match_Value li").each(function () {
        //the "text()[0]" was added to filter with index 0 the values. i.e the
        // first letter in it is index 0.
        if ($(this).text()[0].toLowerCase().search(value) > -1) {
            $(this).show();
            $(this).prev('.v_Name').last().show();
            } else {
            $(this).hide();
        }
    });
})