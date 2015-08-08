import React from "react";
import DayPickerExample from './javascripts/daypicker';
import angular from 'angular';
import ngReact from 'ngreact';

import './stylesheets/daypicker.scss';


///////////////////////////////
angular.module('app', ['react'])
  .controller('AppController', AppController)
  .value('DayPickerExample', DayPickerExample)
  .run(function(){
    React.render(<DayPickerExample />, document.getElementById('range-date-picker'));
  });

function AppController(){
  var vm = this;

  vm.selectedDate = 'Дата не выбрана';

  vm.datepicker = {
    handleDateSelect: handleDateSelect
  };

  ///////////////////////

  function handleDateSelect(date){
    vm.selectedDate = date.toLocaleDateString('ru-RU');
  }
}



