
app.directive('datepicker', function () {
	  return {
        restrict: "A",
        link: function (scope, el, attr) {
            el.datepicker({
                            dateFormat: 'd M'
                        });
        }
    };
});