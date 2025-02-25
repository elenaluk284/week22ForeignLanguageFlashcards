import React, { useState } from 'react';
import Flashcard from './Flashcard'; // Импорт компонента Flashcard
import WordList from './WordList'; // Импорт компонента WordList

const TrainingMode = () => {
    const [currentWord, setCurrentWord] = useState(null);
    const words = [
        { word: 'Привет', translation: 'Hello' },
        { word: 'Спасибо', translation: 'Thank you' },
    ];

    const handleWordClick = (word) => {
        setCurrentWord(word);
    };

    return (
        <React.Fragment>
            <h2>Режим тренировки</h2>
            {currentWord ? (
                <Flashcard word={currentWord.word} translation={currentWord.translation} />
            ) : (
                <WordList words={words} onWordClick={handleWordClick} />
            )}
        </React.Fragment>
    );
};

export default TrainingMode;
