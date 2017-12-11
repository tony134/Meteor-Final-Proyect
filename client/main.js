import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import homeMapu from '../imports/components/home/home';
import animeMapu from '../imports/components/anime/anime';
import angularMaterialize from 'angular-materialize';
import partiMapu from '../imports/components/parti/parti';
import partiiMapu from '../imports/components/partii/partii';
import mangaMapu from '../imports/components/manga/manga';
import manga1Mapu from '../imports/components/manga1/manga1';
import manga2Mapu from '../imports/components/manga2/manga2';
import manga3Mapu from '../imports/components/manga3/manga3';
import manga4Mapu from '../imports/components/manga4/manga4';
import manga5Mapu from '../imports/components/manga5/manga5';
import manga6Mapu from '../imports/components/manga6/manga6';
import galleryMapu from '../imports/components/gallery/gallery';
import partiiiMapu from '../imports/components/partiii/partiii';
// OR commonjs style 

	/**/

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });
  

var app = angular.module('mapu', [angularMeteor,uiRouter,homeMapu.name, animeMapu.name,angularMaterialize, partiMapu.name, partiiMapu.name,mangaMapu.name, manga2Mapu.name, manga3Mapu.name,manga1Mapu.name, manga4Mapu.name, manga5Mapu.name, manga6Mapu.name, galleryMapu.name, partiiiMapu.name]);

app.controller('contr', ["$scope", function($scope){

	

	//$scope.shw = 2;
 	//$state.go('.', null, { reload: true });
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
      $('.slider').slider();
    });

       
 $('.carousel.carousel-slider').carousel({fullWidth: true});

   $(document).ready(function(){
    $('.collapsible').collapsible();
  });
   $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
   // $('.tooltipped').tooltip('remove');
  });


 

}]);

app.config(function($stateProvider, $urlRouterProvider){
	

	$urlRouterProvider.otherwise("/");
	
	$stateProvider.state('home', {
		url : "/",
		template : "<home-mapu></home-mapu>",

		})
	.state('anime',{
		url : "/anime",
		template : "<anime-mapu></anime-mapu>"
	})
	.state('parti',{
		url : "/anime/phantom-blood",
		template : "<parti-mapu></parti-mapu>"
	})
	.state('partii',{
		url : "/anime/stardust-crusaders",
		template : "<partii-mapu></partii-mapu>"
	})
	.state('manga',{
		url : "/manga",
		template : "<manga-mapu></manga-mapu>"
	})
	.state('manga1',{
		url : "/manga/phantom-blood",
		template : "<manga1-mapu></manga1-mapu>"
	})
	.state('manga2',{
		url : "/manga/battle-tendency",
		template : "<manga2-mapu></manga2-mapu>"
	})
	.state('manga3',{
		url : "/manga/stardust-crusaders",
		template : "<manga3-mapu></manga3-mapu>"
	})
	.state('manga4',{
		url : "/manga/diamon-is-unbreakable",
		template : "<manga4-mapu></manga4-mapu>"
	})
	.state('manga5',{
		url : "/manga/vento-aureo",
		template : "<manga5-mapu></manga5-mapu>"
	})
	.state('manga6',{
		url : "/manga/stone-ocean",
		template : "<manga6-mapu></manga6-mapu>"
	})
	.state('gallery',{
		url : "/gallery",
		template : "<gallery-mapu></gallery-mapu>"
	})
	.state('partiii',{
		url : "/anime/diamond-is-unbreakable",
		template : "<partiii-mapu></partiii-mapu>"
	})
	
});