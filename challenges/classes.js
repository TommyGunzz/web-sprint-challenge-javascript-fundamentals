// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
	constructor(sides) {
		this.length = sides.length;
    	this.width = sides.width;
  	    this.height = sides.height;
	};
	    volume() {
		    return this.length * this.width * this.height;
	};
        surfaceArea() {
		    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
	};
};

const cuboid2 = new CuboidMaker2({
  length: 4,
  width: 5,
  height: 5
}); 

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker2 extends CuboidMaker2 {
	constructor(cubeSides){
		super(cubeSides);
	};
	volumeCube() {
		return this.length * this.length * this.length;
	};
	surfaceAreaCube() {
		return this.length * this.length;
	};
};

const cube = new CubeMaker2({
  length: 4,
  width: 4,
  height: 4
}); 

console.log(cube.volumeCube()); // 64
console.log(cube.surfaceAreaCube()); // 16 

