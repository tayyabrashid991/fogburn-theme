/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3 & 4
Version: 4.2.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v4.2/admin/angularjs/
*/

/* Prevent Global Link Click
------------------------------------------------ */

colorAdminApp.directive('a', function() {
	return {
		restrict: 'E',
		link: function(scope, elem, attrs) {
			if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
				elem.on('click', function(e) {
					e.preventDefault();
				});
			}
		}
	};
});
