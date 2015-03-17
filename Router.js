Clazz.Router = Clazz.extend(Clazz.Base,{

    initialize: function(config){
    this.config= config;
    },
    
	 Navigate : function(key){
         var widgetName  = document.map.get(key);
         console.log(widgetName.valueOf());
         var page1MainWidget = new Clazz.document.map.get(key)  ();
            var container = document.getElementById("page1content");
            page1MainWidget.render(container);
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