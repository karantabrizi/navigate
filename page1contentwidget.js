Clazz.page1ContentWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        initialize : function(config){
            this.templateUrl = "page1Content.html";
        },
        bindUI: function() {
            var y = function() {
                document.Navigate("page2")
            };
            $("#forwardButton").click(y);
       }
    }
);