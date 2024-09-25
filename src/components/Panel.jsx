import PropTypes from 'prop-types';
import Button from './Button';
import Display from './Display';

function Panel({ displayValue, buttons, onButtonClick, recallButton, handleRecall }) {
  return (
    <div className="panel">
      <Display value={displayValue} />
      <div className="numbers">
        {buttons.map((label, index) => (
          <Button key={index} label={label} onClick={onButtonClick} />
        ))}
        {recallButton &&
        <Button label={recallButton} onClick={handleRecall} />
        }
      </div>
    </div>
  );
}

Panel.propTypes = {
  displayValue: PropTypes.string,
  buttons: PropTypes.array,
  onButtonClick: PropTypes.func,
};

export default Panel;