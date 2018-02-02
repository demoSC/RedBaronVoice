let Alexa = require('alexa-sdk');

let introClip = "<audio src='https://s3.amazonaws.com/audiocliptestdump/drumFin.mp3'/>";
let baronClip = "<audio src='https://s3.amazonaws.com/audiocliptestdump/baronFin.mp3'/>";

let states = {
	INTROMODE: '_INTROMODE',
	COOKMODE: '_COOKMODE',
	MENUMODE: '_MENUMODE'
};

let newSession = {

	'LaunchRequest' : function(){
		let output = introClip + "Welcome to the Red Baron! Would you like to cook a pizza or do you already have one in the oven?";
		let repromt = "Would you like to cook a pizza or do you already have one in the oven?";
		this.handler.state = states.MENUMODE;
		this.response.speak(output).listen(repromt);
		this.emit(':responseReady');

	},

	'Cook' : function(){
		let output = introClip + "Great! Crust perfection in every bite. Is it a classic crust, brick oven, thin crust, or french bread pizza.";
		let repromt = "Is the pizza a classic crust, brick oven, thin scrut, or french bread pizza?";
		this.handler.state = states.MENUMODE
		this.response.speak(output).listen(repromt);
		this.emit(':responseReady');

	},

	'Oven' : function(){
		let output = "Fantastic. A classic crust pepperoni pizza takes on average 17-20 minutes.  Would you like to learn with the Baroness for 17 minutes?";
		let repromt = "Would you like to learn with the Baroness for 17 minutes?";
		this.handler.state = states.COOKMODE;
		this.response.speak(output).listen(repromt);
		this.emit(':responseReady');
	},

	'AMAZON.StopIntent' : function(){
		let output = "Thanks for cooking with us today! We hope you return soon!";
		this.handler.state = states.INTROMODE;
		this.response.speak(output).shouldEndSession(true);
		this.emit(':responseReady');

	},

	'AMAZON.CancelIntent' : function(){
		let output = "Thanks for cooking with us today! We hope you return soon!";
		this.handler.state = states.INTROMODE;
		this.response.speak(output).shouldEndSession(true);
		this.emit(':responseReady');
	}


};

let introMode = Alexa.CreateStateHandler(states.INTROMODE, {

	'LaunchRequest' : function(){
		let output = introClip + "Welcome to the Red Baron! Would you like to cook a pizza or do you already have one in the oven?";
		let repromt = "Would you like to cook a pizza or do you already have one in the oven?";
		this.handler.state = states.MENUMODE;
		this.response.speak(output).listen(repromt);
		this.emit(':responseReady');

	},

	'Cook' : function(){
		let output = introClip + "Great! Crust perfection in every bite. Is it a classic crust, brick oven, thin crust, or french bread pizza.";
		let repromt = "Is the pizza a classic crust, brick oven, thin scrut, or french bread pizza?";
		this.handler.state = states.MENUMODE
		this.response.speak(output).listen(repromt);
		this.emit(':responseReady');

	},

	'Oven' : function(){
		let output = introClip + "Fantastic. A classic crust pepperoni pizza takes on average 17-20 minutes.  Would you like to learn with the Baroness for 17 minutes?";
		let repromt = "Would you like to learn with the Baroness for 17 minutes?";
		this.handler.state = states.COOKMODE;
		this.response.speak(output).listen(repromt);
		this.emit(':responseReady');
	},

	'AMAZON.StopIntent' : function(){
		let output = "Thanks for cooking with us today! We hope you return soon!";
		this.handler.state = states.INTROMODE;
		this.response.speak(output).shouldEndSession(true);
		this.emit(':responseReady');

	},

	'AMAZON.CancelIntent' : function(){
		let output = "Thanks for cooking with us today! We hope you return soon!";
		this.handler.state = states.INTROMODE;
		this.response.speak(output).shouldEndSession(true);
		this.emit(':responseReady');
	}

});

let menuMode = Alexa.CreateStateHandler(states.MENUMODE, {

	'Classic' : function(){
		let output = "Great choice, the classic that everyone enjoys:  I am preheating your oven to four hundred degrees.  Your smart oven takes an average 5 minutes to Pre-Heat.  Would you like me to set a timer?";
		let repromt = "Would you like me to set a timer while your oven pre-heats?";
		this.response.speak(output).listen(repromt);
		this.emit(':responseReady');
	},

	'AMAZON.YesIntent' : function(){
		let output = "Your oven is preheating and the timer is set.  Remember, when you put the pizza in, just say Alexa, tell Red Baron I put in the pizza";
		this.handler.state = states.INTRODE;
		this.response.speak(output).shouldEndSession(true);
		this.emit(':responseReady');
	},

	'Cook' : function(){
		let output = "Great! Crust perfection in every bite. Is it a classic crust, brick oven, thin crust, or french bread pizza.";
		let repromt = "Is the pizza a classic crust, brick oven, thin scrut, or french bread pizza?";
		this.response.speak(output).listen(repromt);
		this.emit(':responseReady');

	},

	'Oven' : function(){
		let output = "Great. A classic crust pepperoni pizza takes on average 17-20 minutes.  Would you like to learn with the Baroness for 17 minutes?";
		let repromt = "Would you like to learn with the Baroness for 17 minutes?";
		this.handler.state = states.COOKMODE;
		this.response.speak(output).listen(repromt);
		this.emit(':responseReady');
	},

	'AMAZON.StopIntent' : function(){
		let output = "Thanks for cooking with us today! We hope you return soon!";
		this.handler.state = states.INTROMODE;
		this.response.speak(output).shouldEndSession(true);
		this.emit(':responseReady');

	},

	'AMAZON.CancelIntent' : function(){
		let output = "Thanks for cooking with us today! We hope you return soon!";
		this.handler.state = states.INTROMODE;
		this.response.speak(output).shouldEndSession(true);
		this.emit(':responseReady');
	}


});

let cookMode = Alexa.CreateStateHandler(states.COOKMODE, {

	'AMAZON.YesIntent' : function() {

		let output = "Would you like to learn cell phone shortcuts, how to speak in italian, or learn a few negotiation tactics, maybe for the kids.";
		this.response.speak(output).listen(output);
		this.emit(':responseReady');
	},

	'Negotiation' : function(){

		let output = baronClip;
		this.handler.state = states.INTROMODE;
		this.response.speak(output).shouldEndSession(true);
		this.emit(':responseReady');
	},

	'AMAZON.StopIntent' : function(){
		let output = "Thanks for cooking with us today! We hope you return soon!";
		this.handler.state = states.INTROMODE;
		this.response.speak(output).shouldEndSession(true);
		this.emit(':responseReady');

	},

	'AMAZON.CancelIntent' : function(){
		let output = "Thanks for cooking with us today! We hope you return soon!";
		this.handler.state = states.INTROMODE;
		this.response.speak(output).shouldEndSession(true);
		this.emit(':responseReady');
	}




});






exports.handler = function(event, context, callback){
    let alexa = Alexa.handler(event, context, callback);

	//var APP_ID = "testingPureLeafApp";
    alexa.registerHandlers(newSession, introMode, cookMode, menuMode); 
    alexa.execute();

};