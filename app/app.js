var app = angular.module('myApp', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.controller('MenuController', function($scope) {
    $scope.name = 'Menu Controller';
});

//Database management
app.controller('dataBindingController', function($scope, $http) {

  getTask(); // Load all available tasks 
  
  function getTask(){  
	$http.post("php/readDB.php").success(function(data){
        $scope.tasks = data;
    });
  };

  $scope.addTask = function (task) {
    $http.post("php/createDB.php?task0="+task[0]+"&task1="+task[1]).success(function(data){
        getTask();
        $scope.taskInput = "";
    });
  };

  $scope.deleteTask = function (task) {
    if(confirm("Confirm to delete this data?")){
		$http.post("php/deleteDB.php?taskID="+task).success(function(data){
			getTask();
		});
    }
  };

  $scope.toggleStatus = function(item, status, task) {
		if(status=='2'){
			status='0';
		}else{
			status='2';
		}
		$http.post("php/updateDB.php?taskID="+item+"&status="+status).success(function(data){
			getTask();
		});
  };

});


//AngularJS Bootstrape Sliding Pictures function
app.controller('SlidingPictures', function ($scope) {
	$scope.SlideInterval = 5000;
	$scope.noWrapSlides = false;
	$scope.active = 0;

	var slides = $scope.slides = [];
	var currIndex = 0;
	var slideImages = [
		"image_1.jpg",
		"image_2.jpg",
		"image_3.jpg",
		"image_4.jpg",
		"image_5.jpg",
	];
	var slideTexts = [
		"Top rate",
		"Awesome",
		"Must read",
		"Don't miss",
		"Great"
	];
	var slideCount = 5;

	$scope.addSlide = function() {

	slides.push({
		image: "images/"+slideImages[currIndex],
		text: slideTexts[slides.length % slideTexts.length],
		id: currIndex++
	});

	};

	for (var i = 0; i < slideCount; i++) {
		$scope.addSlide();
	}

	function assignNewIndexesToSlides(indexes) {
		for (var i = 0, l = slides.length; i < l; i++) {
		  slides[i].id = indexes.pop();
		}
	}

});
