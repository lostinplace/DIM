(function() {
  	'use strict';
	angular.module('app.directives')
		.directive('renderColOptions', ColOptionsDirective);

		function ColOptionsDirective() {
			return {
			  restrict: 'A',
			  controller: ColOptionsController,
			  controllerAs: 'vm',
			  bindToController: true
			};
		}

		function ColOptionsController() {
			let vm = this;

			vm.columns = {
				"inventory": {
				    3: "inv-col-3",
				    4: "inv-col-4",
				    5: "inv-col-5"
				},
				"vault": {
					4: "vault-col-4",
				    5: "vault-col-5",
				    6: "vault-col-6",
				    7: "vault-col-7",
				    8: "vault-col-8",
				    9: "vault-col-9"
				}
			};

			// initialize column setting defaults
			vm.invColumns = "inv-col-4";
			vm.vaultColumns = "vault-col-5";
		}

	// more directives for home page here
}());
