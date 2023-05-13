require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Search"
  ], function(esriConfig, WebMap, MapView, ScaleBar, Legend, Home, LayerList, BasemapGallery, BasemapToggle, Search) {
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

      const legend = new Legend ({
        view: view
      });

      view.ui.add(legend, "bottom-left");

      const scaleBar = new ScaleBar({
        view: view,
        unit: "metric",
        style: "ruler"
      });

      view.ui.add(scaleBar, "bottom-right");

      view.ui.add("layerList-btn", "top-right");

      const layerList = new LayerList({
        view: view 
      })

      const searchWidget = new Search({
        view:view
      })

      view.ui.add(searchWidget, "top-left");

      const basemapToggle = new BasemapToggle({
        view: view,
        nextbasemap: "arcgis-imagery"
      })
      
      const BasemapGallery = new BasemapGallery({
        view: view,
        source: {
            query: {

            }
        },
      })

      view.ui.add(BasemapGallery, "top-right");

      view.ui.add(basemapToggle, "bottom-right");

      view.ui.add(layerList-btn, "top-right");
      view.ui.add(basemap-btn, "top-right")

      document
      .getElementById("layerList-btn")
    .addEventListener("click", function() {
        toggleButton("layerLiat")
    })

    function toggleButton (item){
        const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
        const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
        let currentProp;

        

        if(item == "layerlist"){
            currentProp = layerListEl.style.getPropertyValue("display");
            layerListEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
            galleryEl.style.setProperty("display", "none");
        }else if(item == "gallery"){
            currentProp = galleryEl.style.getPropertyValue("display");
            galleryEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
            layerListEl.style.setProperty("display", "none");
        }
    }

    document
    .getElementById("basemap-btn")
    .addEventListener("click",function() {
        toggleButton("gallery")
    } )

   })