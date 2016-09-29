
var app = angular.module('ABMangularPHP', ['ui.router','ngPassword','satellizer']);

app.config(function($stateProvider, $urlRouterProvider,$authProvider) {
  

$authProvider.loginUrl = '/template_laboratorio4/php/jwt/php/auth.php';
$authProvider.tokenName = 'MiTokenGeneradoEnPHP';
$authProvider.tokenPrefix = 'Aplicacion';
$authProvider.tokenHeader = 'data';

  $stateProvider

      .state('inicio', {
                url : '/inicio',
                templateUrl : 'vistas/inicio.html',
                controller : 'controlInicio'
            })
      .state('persona', {
                url : '/persona',
                abstract:true,
                templateUrl : 'vistas/abstractaPersona.html',
                controller : 'controlPersona'
            })
  
      .state('persona.menu', {
                url: '/menu',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/personaMenu.html',
                        controller : 'controlPersonaMenu'
                    }
                }
            })
      .state('persona.alta', {
                url: '/alta',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/personaAlta.html',
                        controller : 'controlPersonaAlta'
                    }
                }
            })
      .state('persona.grilla', {
                url: '/grilla',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/personaGrilla.html',
                        controller : 'controlPersonaGrilla'
                    }
                }
            })

      .state('persona.login', {
          url: '/login',
          views: {
              'contenido': {
                  templateUrl: 'vistas/login.html',
                  controller : 'loginController'
              }
          }
      })


   
   $urlRouterProvider.otherwise('/inicio');
});

app.controller('loginController', function($scope, $http, $auth) {
  $scope.DatoTest="**Login**";


  $scope.usuario = {};
  /*$scope.usuario.correo = "usuario";
  $scope.usuario.clave = "clave";*/

  console.info("autenticated", $auth.getPayload());

  if($auth.isAuthenticated()){
    console.info("autenticated", $auth.getPayload());
  } else
  {
    console.info("is not autenticated", $auth.getPayload());
  }

  $scope.actionLogin = function(){
      $auth.login($scope.usuario)
    .then(function(response) {
      // Redirect user here after a successful log in.
      console.info("correcto",response);

      if($auth.isAuthenticated())
      {
      console.info("autenticated", $auth.getPayload());
    }else
    {
      console.info("is not autenticated", $auth.getPayload());
    }

    })
    .catch(function(response) {
      // Handle errors here, such as displaying a notification
      // for invalid email and/or password.
      console.info("error",response);


    });
  };
});

app.controller('controlPersonaMenu', function($scope, $http) {
  $scope.DatoTest="**Menu**";
});

app.controller('controlMenu', function($scope, $http) {
  $scope.DatoTest="**Menu**";
});
app.controller('controlInicio', function($scope, $http) {
  $scope.DatoTest="**Menu**";
  $scope.titulo="Inicio y presentacion de la WEB"
});


app.controller('controlPersona', function($scope, $http) {
  $scope.DatoTest="**Menu**";
  $scope.titulo="Inicio y presentacion de la WEB"
});


app.controller('controlPersonaAlta', function($scope, $http) {
  $scope.DatoTest="**alta**";

//inicio las variables
  $scope.persona={};
  $scope.persona.nombre= "natalia" ;
 $scope.persona.dni= "444412312" ;
  $scope.persona.apellido= "natalia" ;
  $scope.persona.foto="sinfoto";


  $scope.Guardar=function(){


  	console.log("persona a guardar:");
    console.log($scope.persona);

    /*
    $http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
 	  .then(function(respuesta) {     	
 		     //aca se ejetuca si retorno sin errores      	
      	 console.log(respuesta.data);

    },function errorCallback(response) {     		
     		//aca se ejecuta cuando hay errores
     		console.log( response);     			
 	  });

  */

  }
});


app.controller('controlGrilla', function($scope, $http) {
  	$scope.DatoTest="**grilla**";
 	

  $http.get(' http://www.mocky.io/v2/57c82b3a1200008404e769ad')
  .then(function(respuesta) {       

         $scope.ListadoPersonas = respuesta.data;
         console.log(respuesta.data);

    },function (error) {
         $scope.ListadoPersonas= [];
        console.log( error);
        
   });
 /*	$http.get('PHP/nexo.php', { params: {accion :"traer"}})
 	.then(function(respuesta) {     	

      	 $scope.ListadoPersonas = respuesta.data.listado;
      	 console.log(respuesta.data);

    },function errorCallback(response) {
     		 $scope.ListadoPersonas= [];
     		console.log( response);
     		
 	 });*/




  /*

          https://docs.angularjs.org/api/ng/service/$http

          the response object has these properties:

        data – {string|Object} – The response body transformed with the transform functions.
        status – {number} – HTTP status code of the response.
        headers – {function([headerName])} – Header getter function.
        config – {Object} – The configuration object that was used to generate the request.
        statusText – {string} – HTTP status text of the response.
            A response status code between 200 and 299 is considered a success
             status and will result in the success callback being called. 
             Note that if the response is a redirect, XMLHttpRequest will 
             transparently follow it, meaning that 
             the error callback will not be called for such responses.
   */
 	$scope.Borrar=function(persona){
		console.log("borrar"+persona);



/*$http.post("PHP/nexo.php",{accion :"borrar",persona:persona},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
.success(function(data, status, headers, config) {
    console.log("bien"+data);
  }).error(function(data, status, headers, config) {
     console.log("mal"+data);
});*/


/*
     $http.post('PHP/nexo.php', 
      headers: 'Content-Type': 'application/x-www-form-urlencoded',
      params: {accion :"borrar",persona:persona})
    .then(function(respuesta) {       
         //aca se ejetuca si retorno sin errores        
         console.log(respuesta.data);

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });

*/
 	}




 	$scope.Modificar=function(id){
 		
 		console.log("Modificar"+id);
 	}





});


