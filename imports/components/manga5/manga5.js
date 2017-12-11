import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './manga5.html';


$(document).ready(function() {
    $('.materialboxed').materialbox();
});




class Controlador {
    constructor($scope) {

        $(document).ready(function() {
            $('.tooltipped').tooltip({ delay: 50 });
            //$('.tooltipped').tooltip('remove');
        });


        $(document).ready(function() {
            $('.collapsible').collapsible();
        });


        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true, // Choose whether you can drag to open on touch screens,
            onOpen: function(el) {}, // A function to be called when sideNav is opened
            onClose: function(el) {}, // A function to be called when sideNav is closed
        });

        $(document).ready(function() {
            $('.carousel').carousel();
        });




        $(document).ready(function() {
            $('.slider').slider();
        });





    }
}


export default angular.module('manga5Mod', [angularMeteor]).component('manga5Mapu', {
    templateUrl: 'imports/components/manga5/manga5.html',
    controller: ["$scope", Controlador]
});