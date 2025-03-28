// src/flashcard-app/WordCard.jsx
import PropTypes from 'prop-types';

const WordCard = ({ word }) => {
    return (
        <div className="word-card">
            <h2>{word.value}</h2>
            <p>Transcription: {word.transcription}</p>
            <p>Translation: {word.translation}</p>
            <p>Theme: {word.theme}</p>
        </div>
    );
};

// Добавляем валидацию пропсов
WordCard.propTypes = {
    word: PropTypes.shape({
        value: PropTypes.string.isRequired,
        transcription: PropTypes.string.isRequired,
        translation: PropTypes.string.isRequired,
        theme: PropTypes.string.isRequired,
    }).isRequired, // Указываем, что word - это обязательный пропс
};

export default WordCard;
