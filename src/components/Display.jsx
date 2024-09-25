import PropTypes from 'prop-types';

function Display({ value }) {
  return <p>{value}</p>;
}

Display.propTypes = {
    value: PropTypes.string,
    };

export default Display;