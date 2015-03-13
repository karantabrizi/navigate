Clazz.newWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(data){
            this.templateUrl = "thirdWidgetContainer.html";
            this.data = data;
        },
        
        bindUI: function() {
    
            var yy = function() {
                var addToCartWidget = new Clazz.addToCartWidget(document.config);
                document.Navigate("thirdWidgetContainer","customerDetailsWidgetContainer",addToCartWidget,"firstPage")};
            
    
            $("#forwardButton3").click(yy);
            }
});