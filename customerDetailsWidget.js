Clazz.customerDetailsWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(config){
            this.templateUrl = "customerDetailsWidgetContainer.html";
            this.config = config.data;
        },
    
        bindUI: function() {
    
            var y = function() {
                var newWidget = new Clazz.newWidget(document.config);
                document.Navigate("customerDetailsWidgetContainer","newWidgetContainer",newWidget,"newPage")};
            
    
            $("#forwardButton").click(y);
            }
        }
);