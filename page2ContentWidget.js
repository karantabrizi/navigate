Clazz.page2ContentWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(data){
            this.templateUrl = "page2Content.html";
            this.data = data;
        },
        
        bindUI: function() {
    
            var y = function() {
                var page1widget = new Clazz.page1MainWidget(document.config);
                //document.Navigate("newWidgetContainer","customerDetailsWidgetContainer",addToCartWidget,"firstPage")
            };
            
    
            $("#forwardButton2").click(y);
            }
});