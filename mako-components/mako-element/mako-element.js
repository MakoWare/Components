Polymer('mako-element', {
    ready: function() {
        console.log(this.wPercent);
        console.log(this.hPercent);
        console.log(this.mode);
        console.log(this.relativeTo);
        console.log(this.scale);
        console.log(this.metrix);

        var self = this;
        setTimeout(function(){
            self.configure();
        }, 0);

        $( window ).resize(this.configure.bind(this));

        console.log("mako-element ready()");


    },

    configure: function(){
        console.log("configure()");
        if(this.mode == "relative"){
            switch (this.relativeTo){
            case "window":
                this.relativeToWindowHeight();
                break;
            case "windowWidth":
                this.relativeToWindowWidth();
                break;
            case "windowHeight":
                this.relativeToWindowHeight();
                break;
            case "parent":
                this.relativeToParent();
                break;
            }
        }
    },


    relativeToParent: function(){
        console.log("relativeToParent");

        var parentHeight = this.parentNode.height;
        var parentWidth =  this.parentNode.width;
        console.log($(this.parentNode)[0].style);

        var h = parentHeight * (this.hPercent * .01);
        var w = parentWidth * (this.wPercent * .01);

        this.height = h;
        this.width = w;

        console.log(h);
        console.log(w);
    },

    relativeToWindow: function(){
        console.log("relativeToWindow");

        var windowHeight = $( window ).height();
        var windowWidth = $( window ).width();

        var h = windowHeight * (this.hPercent * .01);
        var w = windowWidth * (this.wPercent * .01);

        this.height = h;
        this.width = w;
    },

    relativeToWindowWidth: function(){
        console.log("relativeToWindowWidth");

        var windowWidth = $( window ).width();
        var w = windowWidth * (this.wPercent * .01);

        this.height = "auto";
        this.width = w;
    },

    relativeToWindowHeight: function(){
        console.log("relativeToWindowHeight");
        var windowHeight = $( window ).height();
        var h = windowHeight * (this.hPercent * .01);

        this.height = h;
        this.width = "auto";
    }



});
