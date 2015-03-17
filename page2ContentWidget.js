Clazz.page2ContentWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(data){
            this.templateUrl = "page2Content.html";
            this.data = data;
        },
        bindUI: function() {
            var y = function() {
                document.Navigate("page1")
            };
            $("#backButton").click(y);
       }
});