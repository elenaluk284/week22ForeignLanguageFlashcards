import PropTypes from 'prop-types';
import { useState } from 'react';

const Flashcard = ({ word, translation }) => {
    const [isTranslationVisible, setIsTranslationVisible] = useState(false);
    const [flipped, setFlipped] = useState(false);

    const handleToggleTranslation = () => {
        setIsTranslationVisible(!isTranslationVisible);
    };

    const handleFlipCard = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlipCard}>
            <h2>{flipped ? translation : word}</h2>
            {!isTranslationVisible && !flipped && (
                <button onClick={handleToggleTranslation}>Показать перевод</button>
            )}
        </div>
    );
};

Flashcard.propTypes = {
    word: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
};

export default Flashcard;