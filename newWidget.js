Clazz.newWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(data){
            this.templateUrl = "newWidgetContainer.html";
            this.data = data;
        },
        
        bindUI: function() {
    
            var y = function() {
                var thirdWidget = new Clazz.thirdWidget(document.config);
                document.Navigate("newWidgetContainer","thirdWidgetContainer",thirdWidget,"thirdPage")};
            
    
            $("#forwardButton2").click(y);
            }
});