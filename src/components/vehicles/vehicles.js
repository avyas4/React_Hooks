import React, { useState } from 'react';
import PropTypes from "prop-types";
import LABELS from "../../constants/AppConstants";
import Avatar from '../avatar/avatar';
import Properties from '../properties/Properties';
import "./Vehicles-style.scss";
import Header from '../header/Header';
import JsonObject from "../../__mocks__/vehicle.data.json";

/**
 *  Render Vehicles Info component
 */
const Vehicles = props => {
    const { match } = props;
    const { year } = match.params;

    const RenderVehicles = () => {
        const [carInfo] = useState({
            data: JsonObject
        });
        return (
            <div className="vehiclesComponent">
                <Avatar />
                <h1>{LABELS.VEHICLES_HEADER_TEXT}</h1>
                {Object.keys(carInfo.data).map((object) => (
                    <div key={object} className="vehiclesComponent__properties">
                        <Properties data={carInfo.data[object]} year={year} />
                    </div>
                ))}
                <p className="vehiclesComponent__footer">
                    *Excludes on road and government costs
                </p>
            </div>
        );
    };

    return (
        <div className="container">
            <Header />
            <RenderVehicles year={year} />
        </div>
    );

};

Vehicles.propTypes = {
    match: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
};

export default Vehicles;
