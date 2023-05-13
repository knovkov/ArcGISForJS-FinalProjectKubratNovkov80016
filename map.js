require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
  ], function(esriConfig, WebMap, MapView, ScaleBar, Legend, Home) {
    esriConfig.ariKey = "AAPK7b185bfbfd6649c6b7c7f2be20b7f9c45vp0RIxhE9-cmNKlLn8Aq8YsEG5gdEQh8poOkNPnEi8xD090fh8ogv8fAAfBG3f-";

    const webMap = new WebMap ({
        portalItem: {
            id: "04ae1a687e874bf0a4b4a014c5582acb"
        } 
      })

      const view = new MapView({
        container: "viewDiv",
        map: WebMap
      });

      const homeBtn = Home({
        view: view
      })
 
      view.ui.add(homeBtn, "top-left");

   })