Clazz.newWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(data){
            this.templateUrl = "newWidgetContainer.html";
            this.data = data;
        },
});