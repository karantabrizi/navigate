Clazz.Router = Clazz.extend(Clazz.Base,{
    initialize: function(config){
        this.config= config;
    },
    Navigate : function(key){
        location.hash = key;
        // get the widget name for a particular key
        var widgetTypeName  = this.config.map[key];
        console.log(widgetTypeName);
        // get the default container from the config
        var container = document.getElementById(this.config.container);
        // instantiate the widget from the widgetname
        eval("var widgetToRender = new " + widgetTypeName + "()");//takes a string and make it into a JS statement.
        // render the widget in the container
        widgetToRender.render(container);
     }  
});


/*
window.history.pushstate(navigateData)
var a = array.indexOf("widgetName")
window.onpopstate = function () {}
/*Req.:
- clear the template which needs to be switched (can be one of the inputs)
- call the template to replace the old one (the second input)
- an array to put the tamplates in order
- and give them a unique URL (keep track)
- change the URL in the defined order
- if the widget called is called before, search inside the array to avoid reinitialization.
*/