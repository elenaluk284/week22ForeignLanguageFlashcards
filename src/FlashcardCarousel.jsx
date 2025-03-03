import { useState } from 'react';
import PropTypes from 'prop-types';
import Flashcard from './Flashcard';

const FlashcardCarousel = ({ words, initialIndex = 0 }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex < words.length ? initialIndex : 0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
    };

    if (!words.length) {
        return <p>Слов нет в массиве.</p>;
    }

    return (
        <div className="flashcard-carousel">
            <Flashcard word={words[currentIndex].word} translation={words[currentIndex].translation} />
            <div className="carousel-controls">
                <button onClick={handlePrev} disabled={words.length <= 1}>
                    ❮ Предыдущее
                </button>
                <button onClick={handleNext} disabled={words.length <= 1}>
                    Следующее ❯
                </button>
            </div>
        </div>
    );
};

FlashcardCarousel.propTypes = {
    words: PropTypes.arrayOf(
        PropTypes.shape({
            word: PropTypes.string.isRequired,
            translation: PropTypes.string.isRequired,
        })
    ).isRequired,
    initialIndex: PropTypes.number,
};

FlashcardCarousel.defaultProps = {
    initialIndex: 0,
};

export default FlashcardCarousel;