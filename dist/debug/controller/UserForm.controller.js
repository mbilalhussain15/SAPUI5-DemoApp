sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageToast'
], function (jQuery, Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("SAPUI5-DemoApp.controller.UserForm", {

		onInit: function () {
			// JSON sample data
			// var data = {
			// 	"name": "Muhammad Bilal Hussain",
			// 	"email": "bilalhussain.199682@gmail.com",
			// 	"location": "Germany",
			// 	"portfolio": "https://mbilalhussain15.github.io/Portfolio/"
			// };
			// var oModel = new JSONModel(data);
			// set the data for the model
			// oModel.setData(data);
			// set the model to the core
			var oModel = new JSONModel("webapp/model/UserData.json");
			// this.getView().setModel(oModel);
			this.getView().setModel(oModel);
		},
		onPress: function(evt) {
			window.console.log(evt);
			MessageToast.show("Form submitted successfully!");
		}
	});

});