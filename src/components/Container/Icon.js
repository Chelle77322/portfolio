import PropTypes from 'prop-types';
const Icon = ({ source, alt }) => (
    <img className = "Icon" src = {source} alt = {alt}/>
);
Icon.propTypes = {
    source: PropTypes.string,
    alt: PropTypes.string,
};

Icon.defaultProps = {
    source: "",
    alt: "",
};
export default Icon;