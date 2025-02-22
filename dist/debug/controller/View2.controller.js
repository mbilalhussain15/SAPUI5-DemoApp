sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"], function (Controller, History) {
	"use strict";

	return Controller.extend("SAPUI5-DemoApp.controller.View2", {
		onInit: function () {
			// var sUrl = "#" + this.getOwnerComponent().getRouter().getURL("page1");
			// this.byId("link").setHref(sUrl);
		},

		onToPage1: function () {
			this.getOwnerComponent().getRouter().navTo("page1");
		},

		onBack: function () {
			var sPreviousHash = History.getInstance().getPreviousHash();

		
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				
				this.getOwnerComponent().getRouter().navTo("page1", null, true);
			}
		}
	});

}, /* bExport= */ true);