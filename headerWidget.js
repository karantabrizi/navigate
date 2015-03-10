Clazz.headerWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(data){
            this.templateUrl = "headerWidgetContainer.html";
            this.data = data;
        },
});