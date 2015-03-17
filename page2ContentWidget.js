Clazz.page2ContentWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(config){
            this.templateUrl = "page2Content.html";
        },
        bindUI: function() {
            var y = function() {
                document.Navigate("page1")
            };
            $("#backButton").click(y);
       }
});