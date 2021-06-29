import {Text} from './Statistics.styles';
import {CgSmile, CgSmileNone, CgSmileSad } from 'react-icons/cg'

const Statistics = ({good, neutral, bad, total, positivePercentage="100"}) => {
        return(
            <>
            <div>
            <Text><CgSmile/> Good: {good}</Text>
            <Text><CgSmileNone/> Neutral: {neutral}</Text>
            <Text><CgSmileSad/> Bad: {bad}</Text>
            <Text>Total: {total}</Text>
            <Text>Positive feedback: {positivePercentage}%</Text>   
            </div>
            </>
        )
    }

export default Statistics;