Clazz.customerDetailsWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(config){
            this.templateUrl = "customerDetailsWidgetContainer.html";
            this.config = config;
        },
    
        bindUI: function() {
            //this = self;
    
            var y = function() {
                document.Navigate("customerDetailsWidgetContainer",
                                           "newWidgetContainer",config,"newWidget")};
            
    
            $("#forwardButton").click(y);
            }
        }
);