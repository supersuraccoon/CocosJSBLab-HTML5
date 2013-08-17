//
// MainScene class
//
var MainScene = function(){};

MainScene.prototype.onDidLoadFromCCB = function() {
	
	// close fps display
    cc.Director.getInstance().setDisplayStats(false);
	
	var winSize = cc.Director.getInstance().getWinSize();
	cc.MenuItemFont.setFontSize(40);
    cc.MenuItemFont.setFontName("Arial Black");
	var item1 = cc.MenuItemFont.create("<<", this.onPreWork, this);	
	var item2 = cc.MenuItemFont.create(">>", this.onNextWork, this);
	item1.setColor(cc.BLACK);
	item2.setColor(cc.BLACK);	
	var menu = cc.Menu.create(item1, item2);
	menu.setPosition(cc.p(winSize.width / 2, winSize.height * 6 / 10));
    menu.alignItemsHorizontallyWithPadding(winSize.width / 1.5);
    this.rootNode.addChild(menu, 999);
    
    cc.MenuItemFont.setFontSize(16);
    var liveDemoItem = cc.MenuItemFont.create("LIVE DEMO", this.liveDemo, this);	
    var menu2 = cc.Menu.create(liveDemoItem);
	menu2.setPosition(this.liveDemoLabel.getPosition());
    this.liveDemoArea.addChild(menu2, 999);
    
    var githubItem = cc.MenuItemFont.create("GITHUB", this.github, this);	
    var menu3 = cc.Menu.create(githubItem);
	menu3.setPosition(this.githubLabel.getPosition());
    this.githubArea.addChild(menu3, 999);
    
    this.siteTitleLabel.setFontName("Arial Black");
	this.siteSubTitleLabel.setFontName("Arial Black");
	this.introTitleLabel.setFontName("Arial Black");
	this.footerLabel.setFontName("Arial Black");
	
    // mouse
    this.rootNode.setMouseEnabled(true);
    this.rootNode.onMouseMoved = function (event) {
        var location = event.getLocation();
        this.controller.handleMouseMove(location);
    }
    this.hoverLiveDemoArea = false;
    this.hoverGithubArea = false;
    this.hoverImageArea = false;
    this.hoverFaceImageArea = false;
    this.faceImage.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.ScaleTo.create(2.0, 0.8), cc.ScaleTo.create(2.0, 0.6))));
	
	// data
	this.preWork = 1;
    this.currentWork = 1;
	this.workCount = 12;
	this.workSpriteArray = new Array(
		this.work1, 
		this.work2, 
		this.work3, 
		this.work4, 
		this.work5, 
		this.work6, 
		this.work7, 
		this.work8,
		this.work9,
		this.work10,
		this.work11,
		this.work12);
		
	this.workTitleArray = new Array(
		"CircleTTFLabel - UI Component ", 
		"TimeLine - UI Component ", 
		"Calendar - UI Component ",
		"Unistroke Recognizer - 3rd Party Lib ", 
		"Resume - Site ",
		"Cocos CLI - Tool ",
		"Clear Five Stages - Game ",
		"Cocos2d-HTML5 Guidance - Book ",
		"Cocos News Center - Service ",
		"SpiderMonkey Mix - Cocos2d-x project",
		"Cocos2d-x + JSB Guidance - Book ",
		"Cocos JSB Lab - Site ");
		
	this.workSubTitleArray = new Array(
		"Expanding/Shrinking LabelTTF in a Circle ", 
		"A Simple Timeline Control Written in Cocos2d-HTML5 ", 
		"A Calendar Control Written Cocos2d-HTML5 ", 
		"1$ Unistroke Recognizer used in Cocos2d-HTML5 ", 
		"My Resume Written in Cocos2d-HTML5 + Cocosbuilder ",
		"A Command Line Interface for Cocos2d",
		"A Complete Game Wirtten in Cocos2d-HTML5 + Cocosbuilder ",
		"A trip from cocos2d-iphone to Cocos2d-HTML5 ",
		"News Center for Cocos2d Fans Wirtten in Cocos2d-HTML5 + Cocosbuilder + python ",
		"Cocos2d-x + SpiderMonkey Mix Demo ",
		"Cocos2d-x + JSB - Explore a New Way of Game Development ",
		"A Site introducing my works related to Cocos2d-HTML5 + JSB ");
		
	this.workInfoTitleArray = new Array(
		".Support expanding LabelTTF in a Circle with animation\n\n" +
		".Support shrinking LabelTTF in a Circle with animation\n\n" +
		".Support JSB -- can be used in cocos2d-x project\n\n", 
		
		".Support vertical/horizontal both direction\n\n" +
		".Support custom timeline node content\n\n" +
		".Support timeline node change notification\n\n" +
		".Support timeline node moving animation \n\n" +
		".Support JSB -- can be used in cocos2d-x project\n\n", 
		
		".Support custom calendar outlook \n\n" +
		".Support day sprite access \n\n" + 
		".Support day change notification \n\n" +
		".Support JSB -- can be used in cocos2d-x project\n\n", 
		
		".Use $1 Unistroke Recognizer: http://depts.washington.edu/aimgroup/proj/dollar/ \n\n " +
		".Support custom gesture using: http://lucalaiho.altervista.org/joomla/shape-editor \n\n " +
		".Support loading gestures from specified json file \n\n ", 
		
		".My Resume made with Cocos2d-HTML5 + CocosBuilder\n\n" +
		".Support multi-language \n\n",
		
		".Live Log output\n\n" +
		".Live Obj Property Query\n\n" +
		".Live Cocos2d API editor\n\n" +
		".Live Logic Controller\n\n" +
		".Support JSB -- can be used in cocos2d-x project\n\n",
		
		".A simple board game original made with Cocos2d-iphone\n\n" +
		".Using Heroku for hosting\n\n" +
		".Using SinaAppEngine for hosting\n\n" +
		".Was publish to Facebook" +
		".Was publish to SinaWeibo",
		
		".Contents extraction\n\n" + 
		".Watch out for traps -what we should notoverlook when using cocosbuilder\n\n" + 
		".cocosbuilder in-depth – MVC in cocos2dhtml5\n\n" + 
		".Play with cocos2d-html5 – Various IDE and debug tools\n\n" + 
		".Welcome Facebook – Connect our game to Facebook\n\n" +
		".Welcome SinaAppEngine -Prepare forSina Weibo release\n\n" +
		".The magic of HTML5 – Embedding the game into iBook\n\n",
		
		".Grabbing all the news related to Cocos2d everyday\n\n" +
		".Client: Cocos2d-HTML5 / Server: Python / DB: Mysql\n\n" + 
		".Using persona.js for login authentication\n\n" + 
		".Using json2.js for http response parse\n\n" +
		".Still in beta version",
		
		".Demo including how to use SpiderMonkey in Cocos2d-x project\n\n" +
		".Demo including how to use call c++ function from JS\n\n" +
		".Demo including how to use call JS function from c++\n\n" +
		".Demo including how to use passing/receiving cocos2d object bwtween c++ and JS\n\n" +
		".Demo including how to bind JS component into Cocos2d-x project",
		
		".Contents extraction\n\n" +
		".How to take advantage of JS Binding\n\n" +
		".SpiderMonkey ABC’s in depth\n\n" +
		".JS Binding in cocos2d-x — Binding\n\n" +
		".cocos2d-x && JS Mix — Object && Class\n\n" +
		".cocos2d-x && JS Mix — Callbacks\n\n" +
		".cocos2d-x && JS Mix — Custom binding",
		
		".The site your're visiting :)\n\n"
		);

	this.liveDemoURLArray = new Array(
		"http://www.supersuraccoon-cocos2d.com/CocosJSBLab/CircleLabelTTFDemo-HTML5/", 
		"http://www.supersuraccoon-cocos2d.com/CocosJSBLab/TimeLineDemo-HTML5/", 
		"http://www.supersuraccoon-cocos2d.com/CocosJSBLab/CalendarDemo-HTML5/", 
		"http://www.supersuraccoon-cocos2d.com/CocosJSBLab/DollarRecognizerDemo-HTML5/", 
		"http://www.supersuraccoon-cocos2d.com/CocosJSBLab/ResumeDemo-HTML5/",
		"Later",
		"Later",
		"Later",
		"Later",
		"Later",
		"Later",
		"Your are visiting it :)");

	this.githubURLArray = new Array(
		"https://github.com/supersuraccoon/CircleLabelTTFDemo-HTML5/", 
		"https://github.com/supersuraccoon/TimeLineDemo-HTML5/", 
		"https://github.com/supersuraccoon/CalendarDemo-HTML5/", 
		"https://github.com/supersuraccoon/DollarRecognizerDemo-HTML5/", 
		"https://github.com/supersuraccoon/ResumeDemo-HTML5/",
		"Later",
		"Later",
		"Later",
		"Later",
		"Later",
		"Later",
		"");
		
	this.updateWork();
};

MainScene.prototype.liveDemo = function() {
	if(this.liveDemoURLArray[this.currentWork - 1].indexOf("http") == -1)
		alert(this.liveDemoURLArray[this.currentWork - 1]);
	else
		window.open(this.liveDemoURLArray[this.currentWork - 1]);
};

MainScene.prototype.github = function() {	
	if(this.githubURLArray[this.currentWork - 1].indexOf("http") == -1)
		alert(this.githubURLArray[this.currentWork - 1]);
	else
		window.open(this.githubURLArray[this.currentWork - 1]);
};

MainScene.prototype.onPreWork = function() {	
	this.preWork = this.currentWork; 
	if (this.currentWork - 1 < 1) 
		this.currentWork = this.workCount;
	else
		this.currentWork --;
	this.updateWork();
};

MainScene.prototype.onNextWork = function() {	
	this.preWork = this.currentWork;
	if (this.currentWork + 1 > this.workCount) 
		this.currentWork = 1;
	else
		this.currentWork ++;
	this.updateWork();
};

MainScene.prototype.updateWork = function() {
	
	if (this.preWork != this.currentWork) {
		this.workSpriteArray[this.preWork - 1].runAction(cc.FadeOut.create(1.0));
		this.workSpriteArray[this.currentWork - 1].runAction(cc.FadeIn.create(1.0));
	}
	this.pageInfoLabel.setString(this.currentWork + "/" + this.workCount);
    this.workTitleLabel.setString(this.workTitleArray[this.currentWork - 1]);
    this.workSubTitleLabel.setString(this.workSubTitleArray[this.currentWork - 1]);
	this.workInfoTitleLabel.setString(this.workInfoTitleArray[this.currentWork - 1]);
};

MainScene.prototype.handleMouseMove = function (location) {
    var winSize = cc.Director.getInstance().getWinSize();
	if (cc.Rect.CCRectContainsPoint(this.liveDemoArea.getBoundingBox(), location)) {
		if (!this.hoverLiveDemoArea) {
			this.liveDemoArea.setColor(cc.ORANGE);
			this.hoverLiveDemoArea = true;
		}
    }
	else {
		if (this.hoverLiveDemoArea) {
			this.liveDemoArea.setColor(cc.BLUE);
			this.hoverLiveDemoArea = false;
		}
	}
	
	if (cc.Rect.CCRectContainsPoint(this.githubArea.getBoundingBox(), location)) {
		if (!this.hoverGithubArea) {
			this.githubArea.setColor(cc.ORANGE);
			this.hoverGithubArea = true;
		}
    }
	else {
		if (this.hoverGithubArea) {
			this.githubArea.setColor(cc.BLUE);
			this.hoverGithubArea = false;
		}
	}
	
	if (cc.Rect.CCRectContainsPoint(this.imageArea.getBoundingBox(), location)) {
		if (!this.hoverImageArea) {
			this.workSpriteArray[this.currentWork - 1].runAction(cc.ScaleBy.create(0.5, 1.5));
			this.hoverImageArea = true;
		}
    }
	else {
		if (this.hoverImageArea) {
			this.workSpriteArray[this.currentWork - 1].stopAllActions();
			this.workSpriteArray[this.currentWork - 1].setScale(1.0);
			this.hoverImageArea = false;
		}
	}
	
	if (cc.Rect.CCRectContainsPoint(this.faceImage.getBoundingBox(), location)) {
		if (!this.hoverFaceImageArea) {
			this.bubbleSprite.setOpacity(255);
			cc.MenuItemFont.setFontSize(14);
			var checkMyBolgItem = cc.MenuItemFont.create("To My Blog", this.github, this);	
		    checkMyBolgItem.setColor(cc.BLACK);
		    var menu4 = cc.Menu.create(checkMyBolgItem);
			menu4.setPosition(this.bubbleLabel.getPosition());
		    this.bubbleSprite.addChild(menu4, 999);
			this.hoverFaceImageArea = true;
		}
    }
	else {
		if (this.hoverFaceImageArea) {
			this.faceImage.stopAllActions();
			this.hoverFaceImageArea = false;
		}
	}
};