import React, { ReactNode } from "react";

import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap } from "react-google-maps";

interface IMapController {
  children: ReactNode;
}

const MapController = (props: IMapController) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

const GoogleMapControlled = compose<IMapController, IMapController>(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDb5xOZiLOJAtKJWj4spvQf3UEQvE-3sc4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%`, width: "100%" }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
);

export default GoogleMapControlled(MapController);
