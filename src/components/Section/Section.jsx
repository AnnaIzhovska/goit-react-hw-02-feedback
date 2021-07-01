import PropTypes from "prop-types";
import { Title } from './Section.styles';

const Section = ({title}) => {
        return(
            <>
                <Title>{title}</Title>
            </>
        )
    }

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
  

