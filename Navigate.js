Clazz.Navigate = Clazz.extend(Clazz.Base,{

    initialize: function(config){
    this.config= config;
    },
    
	 Navigate : function(tamplateContainer,replacingTemplate,widget,widgetName){
		
		window.location.hash = widgetName
        
        
        if(document.history.indexOf(widgetName)===-1){
                document.history.push(widgetName);
                
                var tamplateContainer= document.getElementById(tamplateContainer);
                tamplateContainer.style.display= 'none';
        
                var replacingTemplate= document.getElementById(replacingTemplate);
                widget.render(replacingTemplate); 
        }
        else {
            var tamplateContainer= document.getElementById(tamplateContainer);
            tamplateContainer.style.display= 'none';
            
            var replacingTemplate= document.getElementById(replacingTemplate);
            replacingTemplate.style.display= 'block'}; 
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