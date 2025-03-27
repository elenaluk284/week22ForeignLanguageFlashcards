import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

const Flashcard = ({ word, translation, onWordLearned }) => {
    const [isTranslationVisible, setIsTranslationVisible] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const buttonRef = useRef(null); // Ссылка на кнопку

    const handleToggleTranslation = () => {
        setIsTranslationVisible(!isTranslationVisible);
    };

    const handleFlipCard = () => {
        setFlipped(!flipped);
    };

    const handleButtonClick = () => {
        handleToggleTranslation();
        onWordLearned(); // Вызываем функцию для увеличения счетчика изученных слов
    };

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.focus(); // Устанавливаем фокус на кнопку при рендере карточки
        }
    }, []); // Пустой массив зависимостей, чтобы сработало только при первом рендере

    return (
        <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlipCard}>
            <h2>{flipped ? translation : word}</h2>
            {!isTranslationVisible && !flipped && (
                <button ref={buttonRef} onClick={handleButtonClick}>Показать перевод</button>
            )}
        </div>
    );
};

Flashcard.propTypes = {
    word: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    onWordLearned: PropTypes.func.isRequired,
};

export default Flashcard;
