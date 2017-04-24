sap.ui.controller("eventbus.mybus", {
	
	goNext:function(){
		sap.ui.getCore().byId("myid").to("idmybus2");
		
	},
	onClick:function(channel,evt,data){
		var show = null;
		if(evt== "press"){
			show = "message from channel one" + channel + "event" + evt + "data" + data; 
			
		}
		else{
		   show = "message from main view";	
		}
		alert(show);
	},

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf eventbus.mybus
*/
	onInit: function() {
		var evBus = sap.ui.getCore().getEventBus();
		evBus.subscribe("mychnl","press",this.onClick,this);

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf eventbus.mybus
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf eventbus.mybus
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf eventbus.mybus
*/
//	onExit: function() {
//
//	}

});