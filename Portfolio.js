(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Portfolio_atlas_1", frames: [[1104,344,302,122],[0,0,1102,602],[1104,0,338,342]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_80 = function() {
	this.initialize(ss["Portfolio_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["Portfolio_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(img.CachedBmp_78);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2402,202);


(lib._1 = function() {
	this.initialize(ss["Portfolio_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.viewmyworks_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("View My Work", "24px 'Times'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 196;
	this.text.parent = this;
	this.text.setTransform(100,28);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AvnmPIfPAAIAAMfI/PAAg");
	this.shape.setTransform(100,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C8770").s().p("AvnGQIAAsfIfPAAIAAMfg");
	this.shape_1.setTransform(100,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,202,82);


(lib.projects_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Projects", "20px 'Times'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 66;
	this.text.parent = this;
	this.text.setTransform(50,10.25,1.0002,0.978);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3F3F3F").ss(1,1,1).p("Aq7krIV3AAIAAJXI13AAg");
	this.shape.setTransform(49.9942,19.99,0.7141,0.6669);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F0ED").s().p("Aq7EsIAApXIV3AAIAAJXg");
	this.shape_1.setTransform(49.9942,19.99,0.7141,0.6669);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,42);


(lib.more_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text(" More", "24px 'Times'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 96;
	this.text.parent = this;
	this.text.setTransform(50,31.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnzjHIPnAAIAAGPIvnAAg");
	this.shape.setTransform(50,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C8770").s().p("AnzDIIAAmPIPnAAIAAGPg");
	this.shape_1.setTransform(50,43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,22.9,102,42.00000000000001);


(lib.home_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Home", "20px 'Times'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 66;
	this.text.parent = this;
	this.text.setTransform(50,10.25,1.0002,0.978);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3F3F3F").ss(1,1,1).p("Aq7krIV3AAIAAJXI13AAg");
	this.shape.setTransform(49.9942,19.99,0.7141,0.6669);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F0ED").s().p("Aq7EsIAApXIV3AAIAAJXg");
	this.shape_1.setTransform(49.9942,19.99,0.7141,0.6669);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,42);


(lib.getintouch_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Get in Touch", "24px 'Times'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 196;
	this.text.parent = this;
	this.text.setTransform(100,28);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AvnmPIfPAAIAAMfI/PAAg");
	this.shape.setTransform(100,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C8770").s().p("AvnGQIAAsfIfPAAIAAMfg");
	this.shape_1.setTransform(100,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,202,82);


(lib.farnoosh_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Farnoosh Ariyanfar", "24px 'Times'", "#F5F0ED");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 196;
	this.text.parent = this;
	this.text.setTransform(100,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,28);


(lib.contact_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Contact", "20px 'Times'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 66;
	this.text.parent = this;
	this.text.setTransform(50,10.25,1.0002,0.978);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3F3F3F").ss(1,1,1).p("Aq7krIV3AAIAAJXI13AAg");
	this.shape.setTransform(49.9942,19.99,0.7141,0.6669);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F0ED").s().p("Aq7EsIAApXIV3AAIAAJXg");
	this.shape_1.setTransform(49.9942,19.99,0.7141,0.6669);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,42);


(lib.about_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("About", "20px 'Times'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 66;
	this.text.parent = this;
	this.text.setTransform(50,10.25,1.0002,0.978);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3F3F3F").ss(1,1,1).p("Aq7krIV3AAIAAJXI13AAg");
	this.shape.setTransform(49.9942,19.99,0.7141,0.6669);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F0ED").s().p("Aq7EsIAApXIV3AAIAAJXg");
	this.shape_1.setTransform(49.9942,19.99,0.7141,0.6669);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,42);


// stage content:
(lib.Portfolio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {home:0,about:19,projects:39,contact:59};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,19,39,59];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.home_btn.addEventListener("click", () => {
		    this.gotoAndStop("home");
		});
		
		// ABOUT
		this.about_btn.addEventListener("click", () => {
		    this.gotoAndStop("about");
		});
		
		// PROJECTS
		this.projects_btn.addEventListener("click", () => {
		    this.gotoAndStop("projects");
		});
		
		// CONTACT
		this.contact_btn.addEventListener("click", () => {
		    this.gotoAndStop("contact");
		});
		
		// FARNOOSH
		this.farnoosh_btn.addEventListener("click", () => {
		    this.gotoAndStop("home");
		});
		
		// MORE
		this.more_btn.addEventListener("click", () => {
		    this.gotoAndStop("about");
		});
		
		// VIEW MY WORK
		this.viewmywork_btn.addEventListener("click", () => {
		    this.gotoAndStop("projects");
		});
		
		// GET IN TOUCH
		this.getintouch_btn.addEventListener("click", () => {
		    this.gotoAndStop("contact");
		});
	}
	this.frame_19 = function() {
		this.home_btn.addEventListener("click", () => {
		    this.gotoAndStop("home");
		});
		
		// FARNOOSH
		this.farnoosh_btn.addEventListener("click", () => {
		    this.gotoAndStop("home");
		});
	}
	this.frame_39 = function() {
		this.home_btn.addEventListener("click", () => {
		    this.gotoAndStop("home");
		});
	}
	this.frame_59 = function() {
		this.home_btn.addEventListener("click", () => {
		    this.gotoAndStop("home");
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(20).call(this.frame_59).wait(1));

	// Layer_1
	this.contact_btn = new lib.contact_btn();
	this.contact_btn.name = "contact_btn";
	this.contact_btn.setTransform(1060,50,1,1,0,0,0,50,20);
	new cjs.ButtonHelper(this.contact_btn, 0, 1, 1);

	this.projects_btn = new lib.projects_btn();
	this.projects_btn.name = "projects_btn";
	this.projects_btn.setTransform(950,50,1,1,0,0,0,50,20);
	new cjs.ButtonHelper(this.projects_btn, 0, 1, 1);

	this.about_btn = new lib.about_btn();
	this.about_btn.name = "about_btn";
	this.about_btn.setTransform(840,50,1,1,0,0,0,50,20);
	new cjs.ButtonHelper(this.about_btn, 0, 1, 1);

	this.home_btn = new lib.home_btn();
	this.home_btn.name = "home_btn";
	this.home_btn.setTransform(730,50,1,1,0,0,0,50,20);
	new cjs.ButtonHelper(this.home_btn, 0, 1, 1);

	this.instance = new lib._1();
	this.instance.setTransform(700,200,1.4201,1.4202);

	this.farnoosh_btn = new lib.farnoosh_btn();
	this.farnoosh_btn.name = "farnoosh_btn";
	this.farnoosh_btn.setTransform(150,50,1,1,0,0,0,100,14);
	new cjs.ButtonHelper(this.farnoosh_btn, 0, 1, 1);

	this.text = new cjs.Text("I'm a Digital Media Arts student at Duquesne University, passionate about creating intuitive and meaningful digital experiences. I combine creativity with user-centered design to solve real-world problems through thoughtful UI/UX and visual design.", "24px 'Times'", "#9C8770");
	this.text.lineHeight = 26;
	this.text.lineWidth = 553;
	this.text.parent = this;
	this.text.setTransform(102,355.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3F3F3F").ss(1,1,1).p("EhdQgIhMC6hAAAIAARDMi6hAAAg");
	this.shape.setTransform(599.9789,50.0054,1.0052,0.916);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C8770").s().p("EhdQAIiIAAxDMC6hAAAIAARDg");
	this.shape_1.setTransform(599.9789,50.0054,1.0052,0.916);

	this.getintouch_btn = new lib.getintouch_btn();
	this.getintouch_btn.name = "getintouch_btn";
	this.getintouch_btn.setTransform(450,636.55,1,1,0,0,0,100,40);
	new cjs.ButtonHelper(this.getintouch_btn, 0, 1, 1);

	this.viewmywork_btn = new lib.viewmyworks_btn();
	this.viewmywork_btn.name = "viewmywork_btn";
	this.viewmywork_btn.setTransform(200,636.55,1,1,0,0,0,100,40);
	new cjs.ButtonHelper(this.viewmywork_btn, 0, 1, 1);

	this.more_btn = new lib.more_btn();
	this.more_btn.name = "more_btn";
	this.more_btn.setTransform(200,511.35,1,1,0,0,0,100,40);
	new cjs.ButtonHelper(this.more_btn, 0, 1, 1);

	this.text_1 = new cjs.Text("UX/UI Designer", "35px 'Times'", "#9C8770");
	this.text_1.lineHeight = 37;
	this.text_1.lineWidth = 246;
	this.text_1.parent = this;
	this.text_1.setTransform(102,262);

	this.text_2 = new cjs.Text("Hi, I'm Farnoosh Ariyanfar.", "bold 44px 'Times'", "#9C8770");
	this.text_2.lineHeight = 46;
	this.text_2.lineWidth = 546;
	this.text_2.parent = this;
	this.text_2.setTransform(102,186.9);

	this.instance_1 = new lib.CachedBmp_80();
	this.instance_1.setTransform(524.5,699.5,0.5,0.5);

	this.text_3 = new cjs.Text("Last Name", "bold 20px 'Times'", "#9C8770");
	this.text_3.lineHeight = 22;
	this.text_3.lineWidth = 126;
	this.text_3.parent = this;
	this.text_3.setTransform(627,322);

	this.text_4 = new cjs.Text("First Name", "bold 20px 'Times'", "#9C8770");
	this.text_4.lineHeight = 22;
	this.text_4.lineWidth = 126;
	this.text_4.parent = this;
	this.text_4.setTransform(327,322);

	this.instance_2 = new lib.CachedBmp_79();
	this.instance_2.setTransform(324.45,359.45,0.5,0.5);

	this.text_5 = new cjs.Text("I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!", "24px 'Times'", "#9C8770");
	this.text_5.lineHeight = 26;
	this.text_5.lineWidth = 996;
	this.text_5.parent = this;
	this.text_5.setTransform(102,222);

	this.text_6 = new cjs.Text("Get in touch.", "bold 40px 'Times'", "#9C8770");
	this.text_6.lineHeight = 42;
	this.text_6.lineWidth = 232;
	this.text_6.parent = this;
	this.text_6.setTransform(102,142);

	this.instance_3 = new lib.CachedBmp_78();
	this.instance_3.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2,p:{x:102,y:186.9,text:"Hi, I'm Farnoosh Ariyanfar.",font:"bold 44px 'Times'",lineHeight:46,lineWidth:546}},{t:this.text_1,p:{y:262,text:"UX/UI Designer",font:"35px 'Times'",lineHeight:37,lineWidth:246,x:102}},{t:this.more_btn},{t:this.viewmywork_btn},{t:this.getintouch_btn},{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:355.25,text:"I'm a Digital Media Arts student at Duquesne University, passionate about creating intuitive and meaningful digital experiences. I combine creativity with user-centered design to solve real-world problems through thoughtful UI/UX and visual design.",font:"24px 'Times'",lineHeight:26,lineWidth:553,x:102,color:"#9C8770",textAlign:""}},{t:this.farnoosh_btn},{t:this.instance},{t:this.home_btn},{t:this.about_btn},{t:this.projects_btn},{t:this.contact_btn}]}).to({state:[{t:this.text_1,p:{y:302,text:"Hi, I’m Farnoosh, a UI/UX design student at Duquesne University with a focus on creating intuitive and visually compelling digital experiences. My design philosophy centers on understanding user needs through research and translating those insights into elegant, functional solutions.\n\nWith a background in interaction design and digital design principles, I've developed a strong foundation in design thinking, wireframing, prototyping, and user testing. I'm particularly interested in how thoughtful design can bridge the gap between user expectations and product goals. ",font:"24px 'Times'",lineHeight:26,lineWidth:996,x:102}},{t:this.text,p:{y:202,text:"About Me",font:"bold 40px 'Times'",lineHeight:42,lineWidth:196,x:102,color:"#9C8770",textAlign:""}},{t:this.shape_1},{t:this.shape},{t:this.farnoosh_btn},{t:this.home_btn},{t:this.about_btn},{t:this.projects_btn},{t:this.contact_btn}]},19).to({state:[{t:this.shape_1},{t:this.shape},{t:this.farnoosh_btn},{t:this.home_btn},{t:this.about_btn},{t:this.projects_btn},{t:this.contact_btn},{t:this.text,p:{y:142,text:"Projects",font:"bold 40px 'Times'",lineHeight:42,lineWidth:196,x:102,color:"#9C8770",textAlign:""}}]},20).to({state:[{t:this.instance_3},{t:this.farnoosh_btn},{t:this.home_btn},{t:this.about_btn},{t:this.projects_btn},{t:this.contact_btn},{t:this.text_6},{t:this.text_5},{t:this.instance_2},{t:this.text_4},{t:this.text_3},{t:this.text_2,p:{x:327,y:422,text:"Email",font:"bold 20px 'Times'",lineHeight:22,lineWidth:126}},{t:this.text_1,p:{y:522,text:"Message",font:"bold 20px 'Times'",lineHeight:22,lineWidth:126,x:327}},{t:this.instance_1},{t:this.text,p:{y:718,text:"Submit",font:"24px 'Times'",lineHeight:26,lineWidth:96,x:600,color:"#000000",textAlign:"center"}}]},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(599,399,602,361.5);
// library properties:
lib.properties = {
	id: '8C54CFF9D7F04D829E9448AFD9FACA36',
	width: 1200,
	height: 800,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_78.png?1778100763036", id:"CachedBmp_78"},
		{src:"images/Portfolio_atlas_1.png?1778100763021", id:"Portfolio_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8C54CFF9D7F04D829E9448AFD9FACA36'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;