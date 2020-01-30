import * as React from "react";
import "./Properties-style.scss";
import PropTypes from "prop-types";
import carImage from "../../assets/images/car.jpg";

/**
 *  Render Properties component to display vehicles properties
 */
const Properties = ({ data, year }) => {
    return (
        <section className="Properties">
            <div className="Properties__row">
                <div className="Properties__columnImage">
                    <img src={carImage} alt="car"></img>
                </div>
                <div className="Properties__column">
                    <article>
                        <h4>{`${year} ${data.model} ${data.series}`}</h4>
                        <p>{data.variant}</p>
                        <span className="Properties__price">
                            NEW <span>{`$${data.new_price}`}</span> RRP*
                        </span>
                        <span className="Properties__price Properties__priceFrom">
                            FROM <span>{`$${data.from}`}</span> PER MONTH*
                        </span>
                    </article>
                </div>
            </div>
        </section>
    );
};

Properties.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        model: PropTypes.string,
        series: PropTypes.string,
        new_price: PropTypes.new_price,
        from: PropTypes.from,
    })).isRequired,
    year: PropTypes.string.isRequired,
};

export default Properties; 