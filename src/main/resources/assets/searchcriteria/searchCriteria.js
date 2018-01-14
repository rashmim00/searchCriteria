/******* search criteria *********/

var app = angular.module("searchCriteria",['ui.bootstrap','ngRoute']);

app.controller("MainCtrl",["$http","$q","$uibModal", function($http, $q, $uibModal){
	var ctrl = this;

	var dept = "";

	var departments = [{dept_num:57, dept_name:"Public Works(57)"}];

		//open add contact modal dialog
		ctrl.addDept = function() {
		//	console.log("add contact clicked");
			var modalInstance = $uibModal.open({
			animation : true,
			backdrop : "static",
			templateUrl : "addDept.html",
			controller : "AddDeptController",
			controllerAs : "ctrl",
			bindToController : true,
			size : "sm"
			});
			modalInstance.result.then(function(selectedDept) {
				console.log("returned value from dialog" + selectedDept);
				ctrl.dept = selectedDept;
				ctrl.load();
				});
	}

	//Initialize and load all contacts and groups
	ctrl.load = function(){
	//	console.log("loading" + );

	}



	ctrl.load();
	}]);