Clazz.page1MainWidget = Clazz.extend(  //extend will add the two together
	Clazz.WidgetWithTemplate, {
        
        initialize : function (config) {  //first function to be called, get the parameteres passed
           this.data = config.data;
            this.templateUrl = "page1MainContainer.html";
            //document.Router("customerDetailsWidgetContainer","newWidgetContainer",newWidget,"newPage")

        },
        
        postRender : function(){
        var page1contentwidget = new Clazz.page1contentwidget (this.data);
        var page1content = document.getElementById("page1content");
            page1contentwidget.render(page1content);
            
        var headerWidget = new Clazz.headerWidget (this.data);
        var header = document.getElementById("header");
            headerWidget.render(header);
    
        }
    });