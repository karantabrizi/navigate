Clazz.Navigate = Clazz.extend(Clazz.Base,{

    initialize: function(config){
    this.config= config;
    },
    
	 Navigate : function(tamplateContainer,replacingTemplate,widget,widgetName){
		
		window.location.hash = widgetName
        
        console.log(tamplateContainer);
        console.log(replacingTemplate);
        console.log(widget);
         
		var tamplateContainer= document.getElementById(tamplateContainer);
		tamplateContainer.style.display= 'none';

		var replacingTemplate= document.getElementById(replacingTemplate);
		widget.render(replacingTemplate); 

		

		},
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