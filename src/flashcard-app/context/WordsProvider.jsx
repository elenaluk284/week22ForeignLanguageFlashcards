// src/flashcard-app/context/WordsProvider.jsx
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { WordsContext } from './WordsContext'; // Импортируем контекст

const WordsProvider = ({ children }) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchWords = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
            if (!response.ok) throw new Error('Ошибка загрузки слов');
            const data = await response.json();
            setWords(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const addWord = async (newWord) => {
        setWords((prevWords) => [...prevWords, { ...newWord, id: Date.now() }]);
    };

    const updateWord = async (updatedWord) => {
        setWords((prevWords) =>
            prevWords.map((word) => (word.id === updatedWord.id ? updatedWord : word))
        );
    };

    const deleteWord = async (id) => {
        setWords((prevWords) => prevWords.filter((word) => word.id !== id));
    };

    useEffect(() => {
        fetchWords();
    }, []);

    return (
        <WordsContext.Provider value={{ words, loading, error, addWord, updateWord, deleteWord }}>
            {children}
        </WordsContext.Provider>
    );
};

// Добавляем валидацию пропсов
WordsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default WordsProvider;
