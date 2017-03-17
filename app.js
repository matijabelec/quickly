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
      vm.lastStep = 4;
      vm.prevStep = prevStep;
      vm.nextStep = nextStep;
      vm.days = [
        { id: 'monday', label: 'Monday' },
        { id: 'tuesday', label: 'Tuesday' },
        { id: 'wednesday', label: 'Wednesday' },
        { id: 'thursday', label: 'Thursday' },
        { id: 'friday', label: 'Friday' },
        { id: 'saturday', label: 'Saturday' },
        { id: 'sunday', label: 'Sunday' },
      ];
      vm.timesheet = [
        { id: 'monday', label: 'Monday', notes: [] },
        { id: 'tuesday', label: 'Tuesday', notes: [] },
        {
          id: 'wednesday',
          label: 'Wednesday',
          notes: [
            { day: 'wednesday', hour: 8, title: 'App', description: '"developanje"' },
            { day: 'wednesday', hour: 12, title: 'Hrkanje', description: 'spavanje' },
          ]
        },
        {
          id: 'thursday',
          label: 'Thursday',
          notes: [
            { day: 'thursday', hour: 8, title: 'App', description: '"developan aerfesgtje"' },
            { day: 'thursday', hour: 12, title: 'Hrkanje', description: 'spavanje' },
            { day: 'thursday', hour: 9, title: 'Hrk', description: 'test' },
          ]
        },
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

      function prevStep(step){
        vm.step = (step-1<1 ? 1 : step-1);
      }

      function nextStep(step){
        vm.step = (step+1>vm.lastStep ? vm.lastStep : step+1);
      }

      function showAddNoteDialog(){
        vm.step = 1;
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
