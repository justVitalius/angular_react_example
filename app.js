import React from "react";
import DayPickerExample from './javascripts/daypicker';
import SelectExample from './javascripts/select';
import angular from 'angular';
import ngReact from 'ngreact';

import './stylesheets/daypicker.scss';
import 'react-select/dist/default.css';


///////////////////////////////
angular.module('app', ['react'])
  .controller('AppController', AppController)
  .value('DayPickerExample', DayPickerExample)
  .value('SelectExample', SelectExample)
  .run(function(){
    React.render(<DayPickerExample />, document.getElementById('range-date-picker'));
  });

AppController.$inject = ['$interval'];

function AppController($interval){
  var vm = this;

  vm.selectedDate = 'Дата не выбрана';


  // React properties
  vm.datepicker = {
    handleDateSelect: handleDateSelect,
    numberOfMonths: 1
  };

  vm.select = {
    options: generateRandomData()
  }

  // funcs
  vm.changeMonthCount = changeMonthCount;
  vm.generateSelectData = generateSelectData;

  activate();
  

  ///////////////////////

  function activate(){
    $interval(function(){
      generateSelectData();
      changeMonthCount();
    }, 5000);
  }

  function handleDateSelect(date){
    vm.selectedDate = date.toLocaleDateString('ru-RU');
  }

  function changeMonthCount(){
    vm.datepicker.numberOfMonths = Math.ceil(Math.random()*5);
  }

  function generateRandomData(){
    var count = Math.ceil(Math.random()*10),
        data = [];
    for(var i=0; i <= count; i++){
      data.push({value: `value-${i}-${count}`, label: `label ${i} of ${count}`});
    }

    return data;
  }

  function generateSelectData(){
    vm.select.options = generateRandomData();
  }

}



