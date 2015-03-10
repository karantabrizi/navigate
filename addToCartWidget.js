Clazz.addToCartWidget = Clazz.extend(  //extend will add the two together
	Clazz.WidgetWithTemplate, {
        
        initialize : function (config) {  //first function to be called, get the parameteres passed
           this.data = config.data;
            this.templateUrl = "addToCartWidgetContainer.html";
        },
        
        
        postRender : function(){
        var customerDetailsWidget = new Clazz.customerDetailsWidget (this.data);
                var customerDetailsWidgetContainer = document.getElementById("customerDetailsWidgetContainer");
                customerDetailsWidget.render(customerDetailsWidgetContainer);
            customerDetailsWidget.myFunction(function(tamplateContainer,replacingTemplate,config,widget){
            window.location.hash = widget
            });
        var headerWidget = new Clazz.headerWidget (this.data);
                var headerWidgetContainer = document.getElementById("headerWidgetContainer");
                headerWidget.render(headerWidgetContainer);
        var Navigate = new Clazz.Navigate(this.data);
    
        }
    });