import PropTypes from 'prop-types';

const WordListContainer = ({ words, onWordClick }) => {
    return (
        <div>
            {words.map((wordObj) => (
                <div key={wordObj.word} onClick={() => onWordClick(wordObj)}>
                    {wordObj.word} - {wordObj.translation}
                </div>
            ))}
        </div>
    );
};

WordListContainer.propTypes = {
    words: PropTypes.arrayOf(
        PropTypes.shape({
            word: PropTypes.string.isRequired,
            translation: PropTypes.string.isRequired,
        })
    ).isRequired,
    onWordClick: PropTypes.func.isRequired,
};

export default WordListContainer;