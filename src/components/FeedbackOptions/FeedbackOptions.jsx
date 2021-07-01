import PropTypes from "prop-types";
import { Button } from './FeedbackOptions.styles.jsx';

const FeedbackOptions =({ options, onLeaveFeedback }) =>{
        return (
            <>
                {options.map((option) => (
                    <Button
                        key={option}
                        type="button"
                        name={option}
                        onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </Button>
                ))}
            </>
        )
}
    
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
