import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    const { value, measurementUnit } = averageWeight;
    return (
      <li className="cardItem">
        <img src={ image } alt={ name } />
        <h3>{ name }</h3>
        <p>
          <span>Tipo: </span>
          {`${type}`}
        </p>
        <p>
          <span>Peso: </span>
          {`${value} ${measurementUnit}`}
        </p>
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: {
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    },
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }),
};

Pokemon.defaultProps = {
  pokemon: {},
};
export default Pokemon;