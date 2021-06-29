import {Text} from './Statistics.styles';

const Statistics = ({good, neutral, bad, total, positivePercentage="100"}) => {
        return(
            <>
            <div>
            <Text>Good: {good}</Text>
            <Text>Neutral: {neutral}</Text>
            <Text>Bad: {bad}</Text>
            <Text>Total: {total}</Text>
            <Text>Positive feedback: {positivePercentage}%</Text>   
            </div>
            </>
        )
    }

export default Statistics;