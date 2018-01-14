angular.module("searchCriteria").controller("AddDeptController",["$http","$q", "$uibModalInstance", function($http, $q, $uibModalInstance){
	var ctrl = this;

	ctrl.departments = [{dept_num:"1", dept_name:"Library (1)", checked : false}];

	ctrl.selectedDept = "";

	ctrl.$onInit = onInit;

	function onInit() {

	}
	
	ctrl.updateDept = function(n){
		console.log("on update dialog " + JSON.stringify(n));
		ctrl.departments.forEach(function(o) {
			if (o.dept_num == n) ctrl.selectedDept = o.dept_name;
		});
		
	}

	ctrl.cancel = function() {
		$uibModalInstance.dismiss("cancel");
	}

	ctrl.save = function() {
		console.log("on add dialog " + JSON.stringify(ctrl.selectedDept));
		$uibModalInstance.close(ctrl.selectedDept);
	}

}]);