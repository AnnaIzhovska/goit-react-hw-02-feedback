import {Button} from './FeedbackOptions.styles.jsx';

const FeedbackOptions =({ onButtonGood, onButtonNeutral, onButtonBad, onShow, onHide }) =>{

        return (
            <>
            <div>
            <Button  type="button" onClick= {onButtonGood} onMouseDown={onShow} onMouseEnter={onHide}>Good</Button>
            <Button  type="button" onClick= {onButtonNeutral} onMouseDown={onShow} onMouseEnter={onHide}>Neutral</Button>
            <Button  type="button" onClick= {onButtonBad} onMouseDown={onShow} onMouseEnter={onHide}>Bad</Button>
            </div> 
            </>
        )
    }

export default FeedbackOptions;
