Clazz.page2ContentWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(config){
            this.templateUrl = "page2Content.html";
            $.getJSON("data.json",Function(data)){
                renderFunction(data,whereToRender);
            }
        },
        
        preRender: function(whereToRender, renderFunction) {
        	// default implementation just call renderFunction
        	renderFunction(this.data, whereToRender);
        },
        bindUI: function() {
            var y = function() {
                document.Navigate("page1")
            };
            $("#backButton").click(y);
       }
});