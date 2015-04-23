'use strict';

/**
 * @ngdoc function
 * @name redreamApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the redreamApp
 */
angular.module('redreamApp')
  .controller('ResultsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

//     // standard global variables
// 	var container, scene, camera, renderer, controls, stats;
// 	var keyboard = new THREEx.KeyboardState();
// 	// custom global variables
// 	var video, videoImage, videoImageContext, videoTexture;
// 	init();
// 	animate();
// 	// FUNCTIONS 		
// 	function init() 
// 	{
// 	// SCENE
// 	scene = new THREE.Scene();
// 	// CAMERA
// 	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
// 	var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 10000;
// 	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
// 	scene.add(camera);
// 	camera.position.set(0,150,400);
// 	camera.lookAt(scene.position);	
// 	// RENDERER
// 	if ( Detector.webgl )
// 	{
// 		renderer = new THREE.WebGLRenderer( {antialias:true} );
// 	}
// 	else
// 	{
// 		renderer = new THREE.CanvasRenderer(); 
// 	}
// 	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
// 	container = document.getElementById( 'ThreeJS' );
// 	container.appendChild( renderer.domElement );
// 	// CONTROLS
// 	// controls = new THREE.OrbitControls( camera, renderer.domElement );
// 	controls = new DeviceOrientationController( camera, renderer.domElement );
// 	controls.connect();
// 	setupControllerEventHandlers( controls );
// 	// EVENTS
// 	THREEx.WindowResize(renderer, camera);
// 	THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });
// 	// SKYBOX
// 	// panoramas background
// 	var panoramasArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg"];
// 	var panoramaNumber = Math.floor(Math.random()*panoramasArray.length);
// 	// creation of a big sphere geometry
// 	var sphere = new THREE.SphereGeometry(400, 400, 160);
// 	sphere.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));
// 	// creation of the sphere material
// 	var sphereMaterial = new THREE.MeshBasicMaterial();
// 	sphereMaterial.map = THREE.ImageUtils.loadTexture(panoramasArray[panoramaNumber]);
// 	// geometry + material = mesh (actual object)
// 	var sphereMesh = new THREE.Mesh(sphere, sphereMaterial);
// 	scene.add(sphereMesh);
	
// 	///////////
// 	// VIDEO //
// 	///////////
	
// 	// create the video element
// 	video = document.createElement( 'video' );
// 	// video.id = 'video';
// 	// video.type = ' video/ogg; codecs="theora, vorbis" ';
// 	video.src = "videos/sintel.ogv";
// 	video.load(); // must call after setting/changing source
// 	video.play();
	
// 	// alternative method -- 
// 	// create DIV in HTML:
// 	// <video id="myVideo" autoplay style="display:none">
// 	//		<source src="videos/sintel.ogv" type='video/ogg; codecs="theora, vorbis"'>
// 	// </video>
// 	// and set JS variable:
	
// 	videoImage = document.createElement( 'canvas' );
// 	videoImage.width = 480;
// 	videoImage.height = 204;
// 	videoImageContext = videoImage.getContext( '2d' );
// 	// background color if no video present
// 	videoImageContext.fillStyle = '#000000';
// 	videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );
// 	videoTexture = new THREE.Texture( videoImage );
// 	videoTexture.minFilter = THREE.LinearFilter;
// 	videoTexture.magFilter = THREE.LinearFilter;
	
// 	var movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true, side:THREE.DoubleSide } );
// 	// the geometry on which the movie will be displayed;
// 	// 		movie image will be scaled to fit these dimensions.
// 	var movieGeometry = new THREE.PlaneGeometry( 120, 50, 4, 4 );
// 	var movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
// 	movieScreen.position.set(0,50,0);
// 	scene.add(movieScreen);
	
// 	camera.position.set(0,150,300);
// 	camera.lookAt(movieScreen.position);
				
	
// }
// function animate() 
// {
//     requestAnimationFrame( animate );
// 	render();		
// 	update();
// }
// function update()
// {
// 	if ( keyboard.pressed("p") )
// 		video.play();
		
// 	if ( keyboard.pressed("space") )
// 		video.pause();
// 	if ( keyboard.pressed("s") ) // stop video
// 	{
// 		video.pause();
// 		video.currentTime = 0;
// 	}
	
// 	if ( keyboard.pressed("r") ) // rewind video
// 		video.currentTime = 0;
	
// 	controls.update();
// }
// function render() 
// {	
// 	if ( video.readyState === video.HAVE_ENOUGH_DATA ) 
// 	{
// 		videoImageContext.drawImage( video, 0, 0 );
// 		if ( videoTexture ) 
// 			videoTexture.needsUpdate = true;
// 	}
// 	renderer.render( scene, camera );
// }

// function setupControllerEventHandlers( controls ) {

// 				var controllerEl = document.querySelector( '#controllername' );
// 				var controllerDefaultText = controllerEl.textContent;
// 				var controllerSelectorEl = document.querySelector( '#controllertype' );

// 				var compassCalibrationPopupEl = document.querySelector( '#calibrate-compass-popup' );
// 				var compassCalibratedEl = compassCalibrationPopupEl.querySelector( 'button' );

// 				// Listen for manual interaction (zoom OR rotate)

// 				controls.addEventListener( 'userinteractionstart', function () {
// 					renderer.domElement.style.cursor = 'move';
// 					controllerSelectorEl.style.display = 'none';
// 				});

// 				controls.addEventListener( 'userinteractionend', function () {
// 					renderer.domElement.style.cursor = 'default';
// 					controllerSelectorEl.style.display = 'inline-block';
// 				});

// 				// Listen for manual rotate interaction

// 				controls.addEventListener( 'rotatestart', function () {
// 					// controllerEl.innerText = 'Manual Rotate';
// 				});

// 				controls.addEventListener( 'rotateend', function () {
// 					controllerEl.innerText = controllerDefaultText;
// 				});

// 				// Listen for manual zoom interaction

// 				controls.addEventListener( 'zoomstart', function () {
// 					controllerEl.innerText = 'Manual Zoom';
// 				});

// 				controls.addEventListener( 'zoomend', function () {
// 					controllerEl.innerText = controllerDefaultText;
// 				});

// 				//

// 				// Show a simple 'canvas calibration required' dialog to user
// 				controls.addEventListener( 'compassneedscalibration', function () {
// 					compassCalibrationPopupEl.style.visibility = 'visible';

// 					compassCalibratedEl.addEventListener( 'click', function () {

// 						compassCalibrationPopupEl.style.visibility = 'hidden';

// 					});
// 				});

// 				// Allow advanced switching between 'Quaternions' and 'Rotation Matrix' calculations
// 				controllerSelectorEl.addEventListener( 'click', function ( event ) {
// 					event.preventDefault();

// 					if ( controls.useQuaternions === true ) {
// 						controllerSelectorEl.textContent = 'Rotation Matrix';
// 						controls.useQuaternions = false;
// 					} else {
// 						controllerSelectorEl.textContent = 'Quaternions';
// 						controls.useQuaternions = true;
// 					}
// 				}, false);
// 			}

			var camera, scene, renderer, renderer2, controls, controls2;
			var video, videoImage, videoImageContext, videoTexture;
			var tags = [];

			// Setup
			function init() {

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.set( 60, 20, 200 );

				// Render three.js world
				scene = new THREE.Scene();

				// Choose a random cuebmap ('2' or '3')
				// var mapId = Math.floor( Math.random() * ( 3 - 2 + 1 ) ) + 2;

				var cube = generateCubeMap( 'Park2Small', 512 );
				scene.add( cube );

				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				// document.body.appendChild( renderer.domElement );
				// document.getElementById('vrEnv').appendChild(renderer.domElement);

				controls2 = new THREE.TrackballControls( camera );
				controls2.rotateSpeed = 1.0;
				controls2.zoomSpeed = 0.5;
				controls2.panSpeed = 0.8;
				controls2.noZoom = false;
				controls2.noPan = false;
				controls2.staticMoving = false;
				controls2.dynamicDampingFactor = 0.3;
				controls2.keys = [ 65, 83, 68 ];

				var urls = [
					[ 'http://tv.giphy.com/' + tags[0], 0, 0, 62.5, 0, 0, 0 ],
					[ 'http://tv.giphy.com/' + tags[1], 62.5, 0, 0, 0, 1.57, 0 ],
					[ 'http://tv.giphy.com/' + tags[2], 0, 0, -62.5, 0, 3.14, 0 ],
					[ 'http://tv.giphy.com/' + tags[3], -62.5, 0, 0, 0, 4.71, 0 ],
					[ 'http://tv.giphy.com/' + tags[4], 0, 62.5, 0, 4.71, 0, 0 ],
					[ 'http://tv.giphy.com/' + tags[5], 0, -62.5, 0, 1.57, 0, 0 ]
				];
				
				for ( var i = 0; i < urls.length; i ++ ) {

					var element = document.createElement( 'iframe' );
					element.src = urls[ i ][ 0 ];
					element.style.width = '500px';
					element.style.height = '500px';
					element.style.border = '0px';

					var object = new THREE.CSS3DObject( element );
					object.position.x = urls[ i ][ 1 ];
					object.position.y = urls[ i ][ 2 ];
					object.position.z = urls[ i ][ 3 ];
					object.rotation.x = urls[ i ][ 4 ];
					object.rotation.y = urls[ i ][ 5 ];
					object.rotation.z = urls[ i ][ 6 ];
					object.scale.x = 0.25;
					object.scale.y = 0.25;
					scene.add( object );

				}

				renderer.domElement.style.position = 'absolute';
				renderer.domElement.style.top = 0;
				document.getElementById('vrEnv').appendChild(renderer.domElement);

				window.addEventListener( 'resize', onWindowResize, false );

			}

			// Render loop
			function animate() {

				// controls.update();
				controls2.update();

				renderer.render( scene, camera );
				// renderer2.render( scene, camera );

				requestAnimationFrame( animate );

			}

			function generateCubeMap( folderName, tileWidth ) {

				var flipAngle  = Math.PI;       // 180 degrees
				var rightAngle = flipAngle / 2; //  90 degrees

				tileWidth = tileWidth || 512;

				var sides = [
					{
						url: 'images/Park2Small' + '/pos_x.png',
						position: [ - tileWidth, 0, 0 ],
						rotation: [ 0, rightAngle, 0 ]
					},
					{
						url: 'images/Park2Small' +  '/neg_x.png',
						position: [ tileWidth, 0, 0 ],
						rotation: [ 0, - rightAngle, 0 ]
					},
					{
						url: 'images/Park2Small' + '/pos_y.png',
						position: [ 0, tileWidth, 0 ],
						rotation: [ rightAngle, 0, flipAngle ]
					},
					{
						url: 'images/Park2Small' + '/neg_y.png',
						position: [ 0, - tileWidth, 0 ],
						rotation: [ - rightAngle, 0, flipAngle ]
					},
					{
						url: 'images/Park2Small' + '/pos_z.png',
						position: [ 0, 0, tileWidth ],
						rotation: [ 0, flipAngle, 0 ]
					},
					{
						url: 'images/Park2Small' + '/neg_z.png',
						position: [ 0, 0, - tileWidth ],
						rotation: [ 0, 0, 0 ]
					}
				];

				var cube = new THREE.Object3D();

				for ( var i = 0; i < sides.length; i ++ ) {

					var side = sides[ i ];

					var element = document.createElement( 'img' );
					element.width = tileWidth * 2 + 2; // 2 pixels extra to close the gap.
					element.src = side.url;

					var object = new THREE.CSS3DObject( element );
					object.position.fromArray( side.position );
					object.rotation.fromArray( side.rotation );
					cube.add( object );

				}

				return cube;

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;

				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			init();

			animate();
    
  });
