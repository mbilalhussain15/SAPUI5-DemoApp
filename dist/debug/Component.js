sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"SAPUI5-DemoApp/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("SAPUI5-DemoApp.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			UIComponent.prototype.init.apply(this, arguments);

			this.getRouter().initialize();

			// set the device model
			// this.setModel(models.createDeviceModel(), "device");
		}
	});
});