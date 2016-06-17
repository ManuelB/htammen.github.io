sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"de/tammenit/ui5/homepage/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("de.tammenit.ui5.homepage.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// load a json file into a JSON model
			//var sModelPath = jQuery.sap.getModulePath("de.tammenit.ui5.homepage.model", "/profile.json");
			//var model = new sap.ui.model.json.JSONModel(sModelPath);
			var model = new sap.ui.model.json.JSONModel();
			model.loadData('./webapp/model/profile.json');
			this.setModel(model);

			// create the views based on the url/hash
			this.getRouter().initialize();
		}
	});

});