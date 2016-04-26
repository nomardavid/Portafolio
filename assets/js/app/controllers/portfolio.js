var app = angular.module( 'Portafolio' , [ ]);

app.directive("services", function() {
  return {
    restrict: "E",
    templateUrl: "./templates/services.html",
    controller: function() {
    },
    controllerAs: "service"
  };
});

app.directive("contact", function() {
  return {
    restrict: "E",
    templateUrl: "./templates/contact.html",
    controller: function() {
    },
    controllerAs: "contact"
  };
});

app.directive("googlemap", function() {
  return {
    restrict: "E",
    templateUrl: "./templates/map.html",
    controller: function() {
    },
    controllerAs: "map"
  };
});

app.directive("about", function() {
  return {
    restrict: "E",
    templateUrl: "./templates/about.html",
    controller: function() {
    },
    controllerAs: "about"
  };
});

app.controller('techsController', [ '$scope' , function($scope){

	$scope.logos = [
	
	{ logoImg: 'assets/images/google.png'},
	{ logoImg: 'assets/images/google.png'},
	{ logoImg: 'assets/images/google.png'},
	{ logoImg: 'assets/images/google.png'},
	{ logoImg: 'assets/images/google.png'},
	{ logoImg: 'assets/images/google.png'},
	{ logoImg: 'assets/images/google.png'},
	{ logoImg: 'assets/images/google.png'},
	{ logoImg: 'assets/images/google.png'},
	{ logoImg: 'assets/images/google.png'}

	]
	
}]);

app.controller('portfolioController', [ '$scope' , function($scope){
	$scope.proyects = [
	{
		image:'assets/images/proyects/alphatile-contactus.png',
		gallery:'assets/images/proyects/alphatile-contactus.png',
		modal:'http://alphatilerestoration.com',
		title: 'AlphaTile Restoration',
		type:'Desarrollo Web en Wordpress & AngularJs'
	},

	{
		image: 'assets/images/proyects/montana-slider.png',
		gallery:'assets/images/proyects/montana-slider.png',
		modal:'http://grupo-montana.com',
		title: 'Grupo Montana',
		type:'Desarrollo Web en Wordpress & AngularJs'
	},

        {
		image: 'assets/images/proyects/antoniohuizi.png',
		gallery:'assets/images/proyects/antoniohuizi.png',
		modal:'http://antoniohuizi.com',
		title: 'Antonio Huizi',
		type:'Desarrollo Web en Wordpress'
	},

        {
		image: 'assets/images/proyects/apetoi.png',
		gallery:'assets/images/proyects/apetoi.png',
		modal:'http://apetoi.com',
		title: 'Apetoi',
		type:'App web en Symfony 2 & AngularJs'
	},

        {
		image: 'assets/images/proyects/compraka.png',
		gallery:'assets/images/proyects/compraka.png',
		modal:'http://keypanelservices.com/test-proyecto4.com.ve/',
		title: 'Compraka',
		type:'App web en Laravel & AngularJs'
	},

        {
		image: 'assets/images/proyects/socialh4ck.png',
		gallery:'assets/images/proyects/socialh4ck.png',
		modal:'http://socialh4ck.com',
		title: 'Social h4ck',
		type:'App web en Laravel AngularJs'
	},
        
        {
		image: 'assets/images/proyects/odontomorr.png',
		gallery:'assets/images/proyects/odontomorr.png',
		modal:'http://odontomorr.com',
		title: 'Odontomorr',
		type:'Desarrollo Web en Wordpress & AngularJs'
	},

        {
		image: 'assets/images/proyects/ablu.png',
		gallery:'assets/images/proyects/ablu.png',
		modal:'http://https://ablu-corp.myshopify.com/',
		title: 'Ablu Corp',
		type:'Desarrollo Ecommerce con Shopify'
	}
	]
}]);
 	