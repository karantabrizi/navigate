Clazz.page1contentwidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(config){
            this.templateUrl = "page1content.html";
            this.config = config.data;
        },
        
    
       bindUI: function() {
    
            var y = function() {
                
                document.Navigate("customerDetailsWidgetContainer","newWidgetContainer",newWidget,"newPage")
            };
            
    
            $("#forwardButton").click(y);
       }
        }
);