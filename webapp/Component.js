jQuery.sap.declare("i2d.eam.malfunction.manages1.EAM_MALF_MANS1Extension.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "i2d.eam.malfunction.manages1",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/EAM_MALF_MANS1"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.i2d.eam.malfunction.manages1.Component.extend("i2d.eam.malfunction.manages1.EAM_MALF_MANS1Extension.Component", {
	metadata: {
		manifest: "json"
	}
});