sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageToast'
], function (jQuery, Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("SAPUI5-DemoApp.controller.Home", {

		onInit: function () {
			var oModel = new JSONModel({
				tasks: []
			});
			this.getView().setModel(oModel);
		},

		onAddTask: function () {
			var oView = this.getView();
			var oInput = oView.byId("newTaskInput");
			var sTask = oInput.getValue();

			if (sTask) {
				var oModel = oView.getModel();
				var aTasks = oModel.getProperty("/tasks");
				var oNewTask = {
					id: new Date().getTime(),  
					task: sTask
				};
				aTasks.push(oNewTask);
				oModel.setProperty("/tasks", aTasks);
				oInput.setValue(""); 
			}
		},

		onDeleteTask: function (oEvent) {
			var sTaskId = oEvent.getSource().getCustomData()[0].getValue();
			console.log("Deleting task with ID: " + sTaskId);

			var oModel = this.getView().getModel();
			var aTasks = oModel.getProperty("/tasks");
			var iIndex = aTasks.findIndex(task => task.id === sTaskId);

			if (iIndex !== -1) {
				aTasks.splice(iIndex, 1); 
				oModel.setProperty("/tasks", aTasks);
				MessageToast.show("Task deleted successfully!");
			} else {
				MessageToast.show("Task not found!");
			}
		},

		onEditTask: function (oEvent) {
			var sTaskId = oEvent.getSource().getCustomData()[0].getValue(); 
			console.log("Editing task with ID: " + sTaskId);

			var oModel = this.getView().getModel();
			var aTasks = oModel.getProperty("/tasks");
			var oTaskToEdit = aTasks.find(task => task.id === sTaskId);

			if (oTaskToEdit) {
				
				var oInput = this.getView().byId("newTaskInput");
				oInput.setValue(oTaskToEdit.task);

				
				this.getView().byId("saveTaskBtn").setVisible(true);
				this.getView().byId("newTaskInput").data("taskId", oTaskToEdit.id); 
			}
		},

		onSaveTask: function () {
			var oInput = this.getView().byId("newTaskInput");
			var sTask = oInput.getValue();
			var sTaskId = oInput.data("taskId");

			if (sTask && sTaskId) {
				var oModel = this.getView().getModel();
				var aTasks = oModel.getProperty("/tasks");
				var oTaskToEdit = aTasks.find(task => task.id === sTaskId);

				if (oTaskToEdit) {
					
					oTaskToEdit.task = sTask;
					oModel.setProperty("/tasks", aTasks);
					MessageToast.show("Task updated successfully!");
				}

				oInput.setValue(""); 
				this.getView().byId("saveTaskBtn").setVisible(false); 
			}
		}

	});
});
