Polymer('mako-element', {
    ready: function() {
        console.log(this.width);
        console.log(this.height);
        console.log(this.relativeTo);
        console.log(this.scale);
        console.log(this.metrix);

        console.log("mako-element ready()");
    },

    onResize: function(){


    }

});
