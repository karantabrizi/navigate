Clazz.newWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(data){
            this.templateUrl = "newWidgetContainer.html";
            this.data = data;
        },
        
        bindUI: function() {
    
            var y = function() {
                var addToCartWidget = new Clazz.addToCartWidget(document.config);
                document.Navigate("newWidgetContainer","customerDetailsWidgetContainer",addToCartWidget,"firstPage")};
            
    
            $("#forwardButton2").click(y);
            }
});