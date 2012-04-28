/*
 * Colossus is a new library that aims to provide optimized,
 * simple colision control for MMO's, providing a JS api that may
 * be used both back and front end with low memory footprint.
 * 
 * Colossus space is composed of 1 ColidableSpace that may hold several
 * BaseObject. Those being composed by a poligon.
 * 
 * 
 * 
 * SAT resources:
 * - look deeper: https://github.com/jriecken/sat-js
 * - nice theory: http://www.metanetsoftware.com/technique/tutorialA.html
 * - code example: http://www.allegro.cc/forums/thread/594324
 * - crafty: http://craftyjs.com/api/Collision.html
 * - look really poor: https://github.com/CarlQLange/SATCollisionDetectionjs
 */

(function() {
	
function BaseObject(id,x,y,w,h,g,r) {
	this.id = id;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.rotation = r || 0; // 0-359deg, considered around boundaries center
	this.group = g;
};


// oriented as <canvas>
function ColidableSpace (w,h, boundaries) {
  this.table = [];
  
};





function Colossus (width, height, minObjDimension) {
  this.tick = 0;
  this.stopped = true;
  this.minDimension = minObjDimension;
  this.objects = {};
};

//Colossus.prototype.start = function(stepsPerSecond) {
	//this.startTime = new Date();
	//this.stepLength = 1000/(stepsPerSecond||2);
	//this.step();
//};


Colossus.prototype.step = function() {
	var self = this;
	console.log('tick', this.tick, new Date)
	// FIXME figure the time remaining for the next step to keepup with stepLength
	//setTimeout(function(){return self.step()},this.stepLength)
	this.tick++
	// TODO return all colisions
	return []
};

Colossus.prototype.addObject = function(obj, group) {
	
};


window.Colossus = Colossus;
	
})()



(function() { //game loop
	
function noop (argument) { }

var GameLoop = {
	start: noop,
	
}

})()

var c = new Colossus(700,500,10);
c.start(1)


