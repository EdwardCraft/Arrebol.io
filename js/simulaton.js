


var canvas;
var canvasContext;

var framesPerScond = 30;


var img;
var backgroundImgLoaded = false;

var groundImg;
var groundImgLoaded = false;

var trashBinImg;
var trashBinImgloaded = false;

var benchImg;
var benchImgloaded = false;

var factoryAssets = [
	'img/building/fabrikOut_00000.png',
	'img/building/fabrikOut_00001.png',
	'img/building/fabrikOut_00002.png',
	'img/building/fabrikOut_00003.png',
	'img/building/fabrikOut_00004.png',
	'img/building/fabrikOut_00005.png',	
	'img/building/fabrikOut_00006.png',
	'img/building/fabrikOut_00007.png',
	'img/building/fabrikOut_00008.png',
	'img/building/fabrikOut_00009.png',
	'img/building/fabrikOut_00010.png',
	'img/building/fabrikOut_00011.png',
	'img/building/fabrikOut_00012.png',
	'img/building/fabrikOut_00013.png',
	'img/building/fabrikOut_00014.png',
	'img/building/fabrikOut_00015.png',
	'img/building/fabrikOut_00016.png',
	'img/building/fabrikOut_00017.png',
	'img/building/fabrikOut_00018.png',
	'img/building/fabrikOut_00019.png',
	'img/building/fabrikOut_00020.png',
	'img/building/fabrikOut_00021.png',
	'img/building/fabrikOut_00022.png',
	'img/building/fabrikOut_00023.png',
	'img/building/fabrikOut_00024.png',
	'img/building/fabrikOut_00025.png',
	'img/building/fabrikOut_00026.png',
	'img/building/fabrikOut_00027.png',	
	'img/building/fabrikOut_00028.png',
	'img/building/fabrikOut_00029.png',
	'img/building/fabrikOut_00030.png',																													
];
var factoryAssetsLoaded = false;
var factoryFrames = [];
var factoryFrame = 0;

var computerAssets = [
	'img/trash/Putowalkcycle 3_00000.png',
	'img/trash/Putowalkcycle 3_00001.png',
	'img/trash/Putowalkcycle 3_00002.png',
	'img/trash/Putowalkcycle 3_00003.png',
	'img/trash/Putowalkcycle 3_00004.png',
	'img/trash/Putowalkcycle 3_00005.png',
	'img/trash/Putowalkcycle 3_00006.png',
	'img/trash/Putowalkcycle 3_00007.png',
	'img/trash/Putowalkcycle 3_00008.png',
	'img/trash/Putowalkcycle 3_00009.png',
	'img/trash/Putowalkcycle 3_00010.png',
	'img/trash/Putowalkcycle 3_00011.png',
	'img/trash/Putowalkcycle 3_00012.png',
	'img/trash/Putowalkcycle 3_00013.png',
	'img/trash/Putowalkcycle 3_00014.png'
];

var computerAssetsRight = [
	'img/trash/flip-0.png',
	'img/trash/flip-1.png',
	'img/trash/flip-2.png',
	'img/trash/flip-3.png',
	'img/trash/flip-4.png',
	'img/trash/flip-5.png',
	'img/trash/flip-6.png',
	'img/trash/flip-7.png',
	'img/trash/flip-8.png',
	'img/trash/flip-9.png',
	'img/trash/flip-10.png',
	'img/trash/flip-11.png',
	'img/trash/flip-12.png',
	'img/trash/flip-13.png',
	'img/trash/flip-14.png'
];



var computerAssetsLoaded = false;
var computerAssetsRightLoaded =false;
var computerFrames = [];
var computerFramesRight = [];

var computerFrame = 0;

var computerPositionX = 0;
var computerPositionY = 0;
var velocity = 20;

var left = false;



window.onload = function () {
	console.log("page loaded");
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	


	reizeCanvas();
	getAssets();
	simulationLoop();
	
	window.addEventListener('keydown', keyDownTextField, false);

}


function getAssets(){

	img = new Image();
	img.onload = function(){
		console.log(' image loaded ' + img);
		backgroundImgLoaded = true;
		
	}
	img.crossOrigin ='anonymous';
	img.src = 'https://dl.dropboxusercontent.com/s/trqdv0ze9ixwx3w/fondo-1.png';
	resample_single(canvas, 900, 500, true);

	groundImg = new Image();
	groundImg.onload = function(){
		console.log(' image ground loaded ' + groundImg);
		groundImgLoaded = true;
	}
	groundImg.src = 'img/tile 03.png';


	trashBinImg = new Image();
	trashBinImg.onload = function(){
		console.log('trashBinImg loaded' + trashBinImg);
		trashBinImgloaded = true;
	}
	trashBinImg.src = 'img/botesbasura.png';



	benchImg = new Image();
	benchImg.onload = function(){
		console.log('benchImg laoded'  + benchImg);
		benchImgloaded = true;
	}
	benchImg.src = 'img/banca.png';

	var i = 0;
	for( i = 0 ; i < factoryAssets.length; i++){
		factoryFrames.push(new Image());
		factoryFrames[i].onload = onImageLoad;
		factoryFrames[i].src = factoryAssets[i];
		
	}

	if(i === factoryAssets.length)
		factoryAssetsLoaded = true;


	i = 0;
	for( i = 0; i < computerAssets.length; i++){
		computerFrames.push(new Image());
		computerFrames[i].onload = onImageLoad;
		computerFrames[i].src = computerAssets[i];
	}

	if(i === computerAssets.length)
		computerAssetsLoaded = true;

	i = 0;
	for (i = 0; i < computerAssetsRight.length; i++) {
		computerFramesRight.push(new Image());
		computerFramesRight[i].onload = onImageLoad;
		computerFramesRight[i].src = computerAssetsRight[i];
	};

	if(i === computerAssetsRight.length)
		computerAssetsRightLoaded = true;

}

function keyDownTextField (e) {
  var keyCode = e.keyCode;

  if(keyCode === 39){
  		computerPositionX += velocity;
  		left = false;
  }

  if(keyCode === 37){
  		computerPositionX -= velocity;
  		left = true;
  }

}



onImageLoad = function(){

}

var animateFactory = function(){

}

function simulationLoop(){
	setInterval(function(){update();render()}, 1000 / framesPerScond);
}

function reizeCanvas(){

}



function update(){

	//factory frames
	factoryFrame = (factoryFrame + 1) % factoryFrames.length;

	//computer framess
	computerFrame = (computerFrame + 1) % computerFrames.length;

	playerMovement();

}

function playerMovement(){

	if(computerPositionX <= 0){
		computerPositionX = 0;
	}else if(computerPositionX >= canvas.width - 150){
		computerPositionX = canvas.width - 150;
	}



}



function render(){

	if(gameScreenReady())
		simulationScreen();
	else loadingScreen();


}


function gameScreenReady(){

	if(backgroundImgLoaded && trashBinImgloaded && benchImgloaded
			&& groundImgLoaded && factoryAssetsLoaded && computerAssetsLoaded
				&& computerAssetsRightLoaded){
		return true;
	}

	return false;
}


function loadingScreen(){

	colorRect( 0, 0, canvas.width, canvas.height, 'black');

	canvasContext.fillStyle = 'white';
	canvasContext.font="50px Arial";
	canvasContext.fillText('loading...' , (canvas.width / 2)  - 100, canvas.height / 2);

}


function simulationScreen(){
	//clear screen
	canvasContext.clearRect( 0, 0, canvas.width, canvas.height);
	colorRect( 0, 0, canvas.width, canvas.height, 'black');

	//background image
	 canvasContext.drawImage(img, 0, 0, );
	
	canvasContext.drawImage(trashBinImg, 30, canvas.height - 89, 140, 70);
	canvasContext.drawImage(trashBinImg, canvas.width / 2, canvas.height - 89, 140, 70);
	

	canvasContext.drawImage(benchImg, 200 , canvas.height - 109, 250, 90);
	

	for (var i = 0; i < canvas.width; i += 90) {
		canvasContext.drawImage(groundImg, i, canvas.height - 25, 100, 100);
	};
		

	canvasContext.drawImage(factoryFrames[factoryFrame], 
		canvas.width  - 300,  -19);
	

	if(!left){
		canvasContext.drawImage(computerFramesRight[computerFrame], 
			computerPositionX, canvas.height - 135, 
			150, 120);
			
	}else{
		canvasContext.drawImage(
			computerFrames[computerFrame], 
			computerPositionX, canvas.height - 135, 
			150, 120);
	}
		
	
}



function colorRect(leftX, topY, width, height, color){

	canvasContext.fillStyle = color;
	canvasContext.fillRect( leftX, topY, width, height);

}


function resample_single(canvas, width, height, resize_canvas) {
    var width_source = canvas.width;
    var height_source = canvas.height;
    width = Math.round(width);
    height = Math.round(height);

    var ratio_w = width_source / width;
    var ratio_h = height_source / height;
    var ratio_w_half = Math.ceil(ratio_w / 2);
    var ratio_h_half = Math.ceil(ratio_h / 2);

    var ctx = canvas.getContext("2d");
    var img = ctx.getImageData(0, 0, width_source, height_source);
    var img2 = ctx.createImageData(width, height);
    var data = img.data;
    var data2 = img2.data;

    for (var j = 0; j < height; j++) {
        for (var i = 0; i < width; i++) {
            var x2 = (i + j * width) * 4;
            var weight = 0;
            var weights = 0;
            var weights_alpha = 0;
            var gx_r = 0;
            var gx_g = 0;
            var gx_b = 0;
            var gx_a = 0;
            var center_y = (j + 0.5) * ratio_h;
            var yy_start = Math.floor(j * ratio_h);
            var yy_stop = Math.ceil((j + 1) * ratio_h);
            for (var yy = yy_start; yy < yy_stop; yy++) {
                var dy = Math.abs(center_y - (yy + 0.5)) / ratio_h_half;
                var center_x = (i + 0.5) * ratio_w;
                var w0 = dy * dy; //pre-calc part of w
                var xx_start = Math.floor(i * ratio_w);
                var xx_stop = Math.ceil((i + 1) * ratio_w);
                for (var xx = xx_start; xx < xx_stop; xx++) {
                    var dx = Math.abs(center_x - (xx + 0.5)) / ratio_w_half;
                    var w = Math.sqrt(w0 + dx * dx);
                    if (w >= 1) {
                        //pixel too far
                        continue;
                    }
                    //hermite filter
                    weight = 2 * w * w * w - 3 * w * w + 1;
                    var pos_x = 4 * (xx + yy * width_source);
                    //alpha
                    gx_a += weight * data[pos_x + 3];
                    weights_alpha += weight;
                    //colors
                    if (data[pos_x + 3] < 255)
                        weight = weight * data[pos_x + 3] / 250;
                    gx_r += weight * data[pos_x];
                    gx_g += weight * data[pos_x + 1];
                    gx_b += weight * data[pos_x + 2];
                    weights += weight;
                }
            }
            data2[x2] = gx_r / weights;
            data2[x2 + 1] = gx_g / weights;
            data2[x2 + 2] = gx_b / weights;
            data2[x2 + 3] = gx_a / weights_alpha;
        }
    }
    //clear and resize canvas
    if (resize_canvas === true) {
        canvas.width = width;
        canvas.height = height;
    } else {
        ctx.clearRect(0, 0, width_source, height_source);
    }

    //draw
    ctx.putImageData(img2, 0, 0);
}