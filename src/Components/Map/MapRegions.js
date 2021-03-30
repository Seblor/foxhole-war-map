import React from 'react';
import {Polygon, Marker, LayerGroup} from 'react-leaflet';

import * as mapData from './MapData.js';

class MapRegions extends React.Component{

    render() {
        console.log('Drawing Map Regions..');
        const regionBorders = mapData.regionBorders.map((regionBorder, index) => 
            <Polygon color='black' opacity={0.1} fillOpacity={0} positions={regionBorder} key={index} />
        );
        const regionLabels = mapData.regionLabels.map((regionName, index) =>
            <Marker icon={regionName.divIcon} position={regionName.position} pane='regionLabelsPane' key={index} />
        );

        return(
            <div>
                <LayerGroup>{regionBorders}</LayerGroup>
                <LayerGroup>{regionLabels}</LayerGroup>
            </div>
        );
    }
}

export default MapRegions;
