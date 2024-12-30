import PropTypes from 'prop-types';
const SectionHeading = ({subHeading, heading}) => {
    return (
        <div className="text-center">
            <p className="text-[#D99904] text-xl border-b-4 py-4  w-80 mx-auto">---{subHeading}---</p>
            <h2 className="text-3xl font-semibold text-white border-b-4 py-4 w-80 mx-auto">{heading}</h2>
        </div>
    );
};
SectionHeading.propTypes = {
    subHeading: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
};

export default SectionHeading;