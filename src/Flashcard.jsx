import PropTypes from 'prop-types';
const Flashcard = ({ word, translation }) => {
    return (
        <div className="flashcard">
            <h2>{word}</h2>
            <p>{translation}</p>
        </div>
    );
};
Flashcard.propTypes = {
    word: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
};

export default Flashcard;