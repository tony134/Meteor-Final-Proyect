import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './anime.html';


 $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
     
	 


class Controlador {
	constructor($scope){



		 
	$scope.numale= function(){
	var x = Math.round(Math.random()*9);

	var z = '.jpg';
	var y = x+z;
	return y;
}

	  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
   // $('.tooltipped').tooltip('remove');
  });



		$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) {  }, // A function to be called when sideNav is opened
      onClose: function(el) {  }, // A function to be called when sideNav is closed
    }
  );
     
 $(document).ready(function(){
      $('.carousel').carousel();
    });

   $(document).ready(function(){
    $('.collapsible').collapsible();
  });


	  $(document).ready(function(){
      $('.slider').slider();
    });


       

		
	}
}


export default angular.module('animeMod', [angularMeteor]).component('animeMapu', {
	templateUrl : 'imports/components/anime/anime.html', controller : ["$scope",Controlador]
});