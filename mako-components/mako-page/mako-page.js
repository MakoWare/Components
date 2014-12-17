Polymer('mako-page', {
    ready: function() {
        this.onResize();
        $( window ).resize(this.onResize.bind(this));
        console.log("mako-page ready()");


    },

    onResize: function(){
        var page = this.$.page;
        var windowHeight = $(window).innerHeight();
        console.log(page);
        console.log(windowHeight - 64);
        page.style.height = windowHeight - 64 + "px";
    },

    fadeIn: function(){
        var pageContent = this.$.page;

        var opacity = 0;
        var fadeInterval = setInterval(function(){
            if(pageContent.style.opacity < 1){
                opacity += .05;
                pageContent.style.opacity =  opacity;
            } else {
                clearInterval(fadeInterval);
            }
        }, 50);
    },

    backToCube: function(){
        console.log("back to cube");
        document.querySelector('app-router').go("/");

    }


});
