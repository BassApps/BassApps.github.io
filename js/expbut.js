$('.xclouds-button-expand').click(function(){
    if ( this.value === 'collapse' ) {
        // if it's open close it
        open = false;
        this.value = 'expand';
        $(this).next("div.expandContainer").hide("slow");
    }
    else {
        // if it's close open it
        open = true;
        this.value = 'collapse';
        $(this).siblings("[value='collapse']").click();
        $(this).next("div.expandContainer").show("slow");
    }
});


$('.clouds-button-expand').click(function(){
    if ( this.xstate === '1' ) {
        // if it's open close it
        open = false;
       // this.value = 'expand';
        this.xstate='0';
        $(this).next("div.xcontent").hide("slow");
    }
    else {
        // if it's close open it
        open = true;
       // this.value = 'collapse';
        this.xstate='1';
        $(this).siblings("[value='collapse']").click();
        $(this).next("div.xcontent").show("slow");
    }
});


$(".xheader").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
    
   
    
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
           // return $content.is(":visible") ? "Collapse" : "Expand";
        });
    });

});


    $(".xxheader").click(function () {
     $header = $(this);
    //getting the next element
    $content = $header.next();
        $content.animate({
            opacity: "toggle"
        }, "slow");
    });
