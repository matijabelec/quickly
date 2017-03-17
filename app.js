(function(){

  angular
    .module('app', [])
    .controller('appController', appController)
    ;

    function appController(){
      var vm = this;
      vm.showAddNoteDialog = showAddNoteDialog;
      vm.closeDialog = closeDialog;
      vm.addNote = addNote;
      vm.removeNote = removeNote;
      vm.note = {};
      vm.days = [
        { id: 'monday', label: 'Monday' },
        { id: 'tuesday', label: 'Tuesday' },
        { id: 'wednesday', label: 'Wednesday' },
        { id: 'thursday', label: 'Thursday' },
        { id: 'friday', label: 'Friday' },
        { id: 'saturday', label: 'Saturday' },
        { id: 'sunday', label: 'Sunday' },
      ];
      vm.hours = [];
      vm.timesheet = [
        { id: 'monday', label: 'Monday', notes: [] },
        { id: 'tuesday', label: 'Tuesday', notes: [] },
        { id: 'wednesday', label: 'Wednesday', notes: [] },
        { id: 'thursday', label: 'Thursday', notes: [] },
        { id: 'friday', label: 'Friday', notes: [] },
        { id: 'saturday', label: 'Saturday', notes: [] },
        { id: 'sunday', label: 'Sunday', notes: [] },
      ];

      var noteDefault = {
        day: 'monday',
        hour: 0,
        title: '',
        description: ''
      };

      for(var i=0; i<24; i++){
        vm.hours.push(i);
      }

      function showAddNoteDialog(){
        vm.note = angular.copy(noteDefault);
        vm.isDialogOpen = true;
      }

      function closeDialog(){
        vm.isDialogOpen = false;
      }

      function addNote(note){
        vm.isDialogOpen = false;
        for(var d in vm.timesheet){
          if(vm.timesheet[d].id == note.day){
            vm.timesheet[d].notes.push(angular.copy(note));
            return;
          }
        }
      }

      function removeNote(note){
        for(var d in vm.timesheet){
          if(vm.timesheet[d].id == note.day){
            var ind = vm.timesheet[d].notes.indexOf(note);
            if(ind > -1){
                vm.timesheet[d].notes.splice(ind, 1);
            }
          }
        }
      }

    }

})();
