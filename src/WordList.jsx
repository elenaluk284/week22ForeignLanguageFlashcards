import React, { useState } from 'react';
import PropTypes from 'prop-types';

const WordList = ({ words, onWordClick }) => {
    return (
        <div className="word-list">
            {words.map((item, index) => (
                <div key={index} onClick={() => onWordClick(item)}>
                    <span>{item.word}</span> {/* Отображение слова */}
                </div>
            ))}
        </div>
    );
};

// Валидация пропсов
WordList.propTypes = {
    words: PropTypes.arrayOf(
        PropTypes.shape({
            word: PropTypes.string.isRequired,
            translation: PropTypes.string.isRequired,
        })
    ).isRequired,
    onWordClick: PropTypes.func.isRequired,
};

const App = () => {
    // Состояние для хранения слов и ввода нового слова с переводом
    const [words, setWords] = useState([]);
    const [newWord, setNewWord] = useState('');
    const [newTranslation, setNewTranslation] = useState('');

    const addWord = () => {
        if (newWord && newTranslation) {
            // Добавление нового слова в массив
            setWords((prevWords) => [...prevWords, { word: newWord, translation: newTranslation }]);
            setNewWord(''); // Очистка поля ввода слова
            setNewTranslation(''); // Очистка поля ввода перевода
        }
    };

    const handleWordClick = (item) => {
        // Обработка клика по слову
        alert(`Слово: ${item.word}, Перевод: ${item.translation}`);
    };

    return (
        <React.Fragment>
            <div className="App">
                <h1>Изучение языков</h1>
                <input
                    type="text"
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
                    placeholder="Введите новое слово"
                />
                <input
                    type="text"
                    value={newTranslation}
                    onChange={(e) => setNewTranslation(e.target.value)}
                    placeholder="Введите перевод"
                />
                <button onClick={addWord}>Добавить слово</button>
                <WordList words={words} onWordClick={handleWordClick} />
            </div>
        </React.Fragment>
    );
};

export default App;