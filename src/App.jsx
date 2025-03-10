import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import WordListContainer from './WordListContainer';
import TrainingMode from './TrainingMode';
import Header from './Header';
import Footer from './Footer';
import WordInput from './WordInput';
import Flashcard from './Flashcard';
import FlashcardCarousel from './FlashcardCarousel';
import './App.css';
import './styles.css';

const App = () => {
    const [words, setWords] = useState([]);
    const [newWord, setNewWord] = useState('');
    const [newTranslation, setNewTranslation] = useState('');
    const [isEditing, setIsEditing] = useState(null);
    const [showFlashcards, setShowFlashcards] = useState(false);
    const [wordsLearned, setWordsLearned] = useState(0); // Добавлено состояние для изученных слов

    const addWord = () => {
        if (newWord && newTranslation) {
            setWords([...words, { word: newWord, translation: newTranslation }]);
            setNewWord('');
            setNewTranslation('');
        }
    };

    const handleWordLearned = () => {
        setWordsLearned(prevCount => prevCount + 1); // Увеличиваем счетчик изученных слов
    };

    const editWord = (index) => {
        setIsEditing(index);
        setNewWord(words[index].word);
        setNewTranslation(words[index].translation);
    };

    const saveWord = () => {
        const updatedWords = [...words];
        updatedWords[isEditing] = { word: newWord, translation: newTranslation };
        setWords(updatedWords);
        setIsEditing(null);
        setNewWord('');
        setNewTranslation('');
    };

    const deleteWord = (index) => {
        setWords(words.filter((_, i) => i !== index));
    };

    const toggleFlashcards = () => {
        setShowFlashcards(prev => !prev);
    };

    return (
        <div className="app">
            <Menu />
            <Header />
            <h1>Изучение языков</h1>
            <h2>Изученные слова: {wordsLearned}</h2> {/* Отображаем количество изученных слов */}
            <WordInput
                newWord={newWord}
                setNewWord={setNewWord}
                newTranslation={newTranslation}
                setNewTranslation={setNewTranslation}
                addWord={addWord}
            />
            <button onClick={toggleFlashcards}>
                {showFlashcards ? 'Скрыть карточки' : 'Показать карточки'}
            </button>
            {showFlashcards && (
                <div className="flashcards-container">
                    {words.map((item, index) => (
                        <Flashcard key={index} word={item.word} translation={item.translation} 
                        onWordLearned={handleWordLearned} // Передаем функцию в пропсах
                        />
                    ))}
                </div>
            )}
            <WordListContainer words={words} />
            <Routes>
                <Route path="/" element={
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Слово</th>
                                <th>Перевод</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {words.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {isEditing === index ? (
                                            <input
                                                value={newWord}
                                                onChange={(e) => setNewWord(e.target.value)}
                                            />
                                        ) : (
                                            item.word
                                        )}
                                    </td>
                                    <td>
                                        {isEditing === index ? (
                                            <input
                                                value={newTranslation}
                                                onChange={(e) => setNewTranslation(e.target.value)}
                                            />
                                        ) : (
                                            item.translation
                                        )}
                                    </td>
                                    <td>
                                        {isEditing === index ? (
                                            <>
                                                <button onClick={saveWord}>Сохранить</button>
                                                <button onClick={() => setIsEditing(null)}>Отмена</button>
                                            </>
                                        ) : (
                                            <>
                                                <button onClick={() => editWord(index)}>Редактировать</button>
                                                <button onClick={() => deleteWord(index)}>Удалить</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                } />
                <Route path="/game" element={<TrainingMode />} />
            </Routes>
            <FlashcardCarousel words={words} />
            <Footer />
        </div>
    );
};

export default App;
