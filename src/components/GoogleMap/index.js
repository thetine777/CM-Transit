import React from 'react'
import { GoogleMapStyled } from './styled'
import GoogleMapReact from 'google-map-react';
import cx from "classnames";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export class GoogleMap extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    render() {
        const { theme_standard } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <GoogleMapStyled>
                <div className={customClass}>
                    <div style={{ height: '100vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyA0qlncRwkQEXcGbqD5zROU8gYw4TaiDVU' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </GoogleMapStyled>
        )
    }
}