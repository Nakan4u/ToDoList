angular.
    module('toDoList').
    component('itemsList', {
        bindings: {
            list: '<'
        },
        templateUrl: 'main-component/items-list/items-list.component.html',
        controller: ('CreateItemsList', ['$scope', CreateItemsList]),
        controllerAs: 'vm'
    });


function CreateItemsList($scope) {

    var vm = this;
    vm.updatedList = vm.list;

    $scope.$on('eventBroadcastedName', function (event, data) { // please rename this eventName in all places;
        vm.updatedList = data;
        $scope.$apply();
    });

    vm.sortBy = function (propertyName) {
        vm.reverse = (vm.propertyName === propertyName) ? !vm.reverse : false;
        vm.propertyName = propertyName;
    };

    vm.removeData = function (x) { // this is parent responsebility to remove or change data, so please use callback there on move logic to the parent;
        vm.updatedList.splice(x, 1);
        localStorage.clear(); 
        localStorage.setItem('todoList', JSON.stringify(vm.updatedList));
    };
}




