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

AppController.$inject = ['$interval'];

function AppController($interval){
  var vm = this;

  vm.selectedDate = 'Дата не выбрана';

  vm.changeMonthCount = changeMonthCount;

  vm.datepicker = {
    handleDateSelect: handleDateSelect,
    numberOfMonths: 1
  };

  

  ///////////////////////

  function handleDateSelect(date){
    vm.selectedDate = date.toLocaleDateString('ru-RU');
  }

  function changeMonthCount(){
    vm.datepicker.numberOfMonths = Math.ceil(Math.random()*5);
    console.log('set new date', vm.datepicker.numberOfMonths);
  }
}



