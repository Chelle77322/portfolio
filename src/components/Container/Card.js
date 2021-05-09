import PropTypes from 'prop-types';
import Icon from './Icon' ;

const Card = ({ source, alt, text}) => (
    <div className = "card">
        <Icon source = {source} alt = {alt}/>
        <div className = "card-body text center">
            <p className = "card-text">{text}</p>
        </div>
    </div>

);
Card.propTypes = {
    source: PropTypes.string,
    alt: PropTypes.string,
    text:PropTypes.oneOfType([PropTypes.string, PropTypes.shape({}),]),
};
Card.defaultProps = {
    source: "",
    alt : "",
    text: "",
};
export default Card;