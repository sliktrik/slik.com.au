(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 400,
	fps: 24,
	color: "#000000",
	manifest: []
};



// symbols:



(lib.Shape04 = function() {
	this.initialize();

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AheKyIAAqrIp2AAIAAq4IWpAAIAAVjg");
	mask.setTransform(1.5,-0.2);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al/GAQififAAjhQAAjfCfifQCgigDfAAQDhAACfCgQCfCfAADfQAADhifCfQifCfjhAAQjfAAigifg");

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.3,-54.3,108.7,108.7);


(lib.Shape03 = function() {
	this.initialize();

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AloH/QjSjRAAkoQAAkmDSjSQDRjREmAAQDzAAC5CNIo5T6QjNgnidieg");
	mask.setTransform(-17.7,3.1);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al/GAQififAAjhQAAjfCfifQCgigDfAAQDhAACfCgQCfCfAADfQAADhifCfQifCfjhAAQjfAAigifg");

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.3,-54.3,93.7,108.7);


(lib.Shape02 = function() {
	this.initialize();

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApUIQQj3jbAAk1QAAk0D3jbQD3jbFdAAQA+AAA3AGIgCLlILaAAIAAACQAAEyj4DbQj4DbldAAQldAAj3jbg");
	mask.setTransform(-3.3,0.5);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al/GAQififAAjhQAAjfCfifQCgigDfAAQDhAACfCgQCfCfAADfQAADhifCfQifCfjhAAQjfAAigifg");

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.3,-54.3,108.7,108.7);


(lib.Shape01 = function() {
	this.initialize();

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApTHxIH6x5IHbBaIDSErQg3JUgHARQgIASlyEVg");
	mask.setTransform(19,8);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al/GAQififAAjhQAAjfCfifQCgigDfAAQDhAACfCgQCfCfAADfQAADhifCfQifCfjhAAQjfAAigifg");

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.6,-54.3,95,108.7);


(lib.Ani01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_122 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(122).call(this.frame_122).wait(663));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al9G5QhSinAAi8QAAlJDrjrQDojrFMAAQA/AABBALIpvWIQiOhwhQihg");
	mask.setTransform(-36.3,-41.9);

	// Part 01
	this.instance = new lib.Shape01();
	this.instance.setTransform(-2.4,-33.1,1.48,1.48);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:151},13,cjs.Ease.get(-1)).wait(772));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_13 = new cjs.Graphics().p("AkfDkIAEsUQEeAvC+DeQDCDgAAEng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_1_graphics_13,x:38.7,y:-56.2}).wait(772));

	// Part 02
	this.instance_1 = new lib.Shape02();
	this.instance_1.setTransform(9.9,-33.2,1.48,1.48,0,0,0,8.3,-0.1);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({rotation:94,y:-33.4},10,cjs.Ease.get(1)).wait(762));

	// Mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AnPK/IJv2IQCOBxBPCgQBTCoAAC7QgBFKjqDqQjpDrlMAAQg+AAhBgLg");
	mask_2.setTransform(32,50.5);

	// Part 03
	this.instance_2 = new lib.Shape03();
	this.instance_2.setTransform(-2.4,40.9,1.48,1.48);

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:153},13,cjs.Ease.get(-1)).wait(772));

	// Mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_13 = new cjs.Graphics().p("AjWFOQjBjgAAknIKhAAIgDMVQkegvi/jfg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_3_graphics_13,x:-40.9,y:60.4}).wait(772));

	// Layer 4
	this.instance_3 = new lib.Shape04();
	this.instance_3.setTransform(-14.2,41.8,1.48,1.48,0,0,0,-8,0.6);
	this.instance_3._off = true;

	this.instance_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({regY:0.7,rotation:102,x:-14.3},10,cjs.Ease.get(1)).wait(762));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-113.3,160.8,235.2);


// stage content:



(lib.logo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Ani01();
	this.instance.setTransform(200,200,1.5,1.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(230.3,223.8,340.9,401.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;