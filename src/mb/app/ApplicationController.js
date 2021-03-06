import AdaptiveApplicationController from "sap/a/app/ApplicationController";

import ServiceClient from "gd/service/ServiceClient";

import Application from "./Application";
import MapViewController from "../map/MapViewController";
import Model from "../model/Model";
import PoiSearchViewController from "../view/PoiSearchViewController";



export default class ApplicationController extends AdaptiveApplicationController
{

    init()
    {
        super.init();

    }

    createView(options)
    {
        return new Application(options);
    }

    initView()
    {
        super.initView();
    }

    afterInit()
    {
        super.afterInit();
        this._initControllers();
        this._initModel();
    }

    run()
    {
        console.log("ApplicationController is running.");
        ServiceClient.getInstance().attachReady(() => {

            //gaode service started
            console.log("init gaode service ready");

            //search route between two locations
            // this.mapViewController.searchRoute([ 31.9790247, 118.7548084 ], [ 32.04389, 118.77881 ]);
            // this.view.mapView.searchPoi("丰盛");
        });
    }

    _initControllers()
    {
        this._initMapViewController();
        this._initPoiSearchViewController();
    }

    _initMapViewController()
    {
        this.mapViewController = new MapViewController("map-view");
        this.addChildViewController(this.mapViewController);
    }

    _initPoiSearchViewController()
    {
        this.poiSearchViewController = new PoiSearchViewController("poi-search-view");
        this.addChildViewController(this.poiSearchViewController);
    }


    _initModel()
    {
        const model = new Model();
        sap.ui.getCore().setModel(model);

        this.setModel(model);
    }

}
