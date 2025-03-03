import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import WordInput from './WordInput';
import './App.css';
import './styles.css'; // Подключаем новый файл стилей
import Flashcard from './Flashcard';

const App = () => {
    const [words, setWords] = useState([]);
    const [newWord, setNewWord] = useState('');
    const [newTranslation, setNewTranslation] = useState('');
    const [isEditing, setIsEditing] = useState(null);
    const [showFlashcards, setShowFlashcards] = useState(false);

    const addWord = () => {
        if (newWord && newTranslation) {
            setWords([...words, { word: newWord, translation: newTranslation }]);
            setNewWord('');
            setNewTranslation('');
        }
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
        <div className="App">
            <Header />
            <h1>Изучение языков</h1>
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
                        <Flashcard key={index} word={item.word} translation={item.translation} />
                    ))}
                </div>
            )}
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
            <Footer />
        </div>
    );
};

export default App;