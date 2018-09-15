import { Meteor } from 'meteor/meteor';
import { Templating } from 'meteor/templating';

import './eit_data_form.html';

Template.Eit_data_form.helpers({
  cohorts(){
    var startYear =2009;
    var currentYear =(new Date()).getFullYear() + 1;
    var years = [];
    for(var i=startYear ; i<=(currentYear+2) ; i++){
      var year ={
        year: i
      };
      if(i == currentYear){
        year.current = true;

      }
      years.push(year);
    }
    return years;
  },
  countries(){
    return [
      {name:'Kenya'},
      {name:'Ghana',default:true},
      {name:'Cote de voire'},
      {name:'Tanzania'},
      {name:'Nigeria'},
      {name:'Zimbabwe'},
      {name:'Sudan'},
      {name:'Somalia'},
      {name:'Mali'},
      {name:'Gambia'},
      {name:'South Africa'},
      {name:'Cameroon'},
    ];
  }

});
Template.Eit_data_form.events({
'submit #eit_data_form' (event) {
  event.preventDefault() ;
var form= event.target;
  var data ={
    first_name: form.first_name.value,
    last_name: form.last_name.value,
    date_of_birth: form.date_of_birth,
    country: form.country.value,
    gender: form.gender.value,
    cohort: form.cohort.value,
  };

  Meteor.call('eits.insert',data);

}
});
