import { GeolocationControl, Map, Placemark, RulerControl, TrafficControl, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
import styled from "styled-components";

/**
 * Repository: https://github.com/R1ZEN/react-yandex-maps
 * Documentation: https://pbe-react-yandex-maps.vercel.app/
 * 
 */
export const MapComponent = () => {
    const defaultState = {
        center: [59.921006, 30.413847],
        zoom: 14,
      };
    
      return (
        <MapWrapper>
            <YMaps>
            <Map width={'100%'} height={'100%'} defaultState={defaultState}>
                <ZoomControl options={{ size: 'small'}}/>
                <RulerControl />
                <TrafficControl />
                <GeolocationControl />
                <Placemark geometry={[59.921006, 30.41384]} />
            </Map>
            </YMaps>
        </MapWrapper>
      );
}

const MapWrapper = styled.div`
    height: 100%;
`