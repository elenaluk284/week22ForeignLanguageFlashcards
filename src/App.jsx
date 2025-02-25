import { useState } from 'react'; // Импортируется только useState
import Header from './Header';
import Footer from './Footer';
import WordInput from './WordInput';
import WordListContainer from './WordListContainer';
import './App.css';
import './index.css';

const App = () => {
    const [words, setWords] = useState([]);
    const [newWord, setNewWord] = useState('');
    const [newTranslation, setNewTranslation] = useState('');

    const addWord = () => {
        if (newWord && newTranslation) {
            setWords([...words, { word: newWord, translation: newTranslation }]);
            setNewWord('');
            setNewTranslation('');
        }
    };

    const handleWordClick = (item) => {
        alert(`Слово: ${item.word}, Перевод: ${item.translation}`);
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
            <WordListContainer words={words} onWordClick={handleWordClick} />
            <Footer />
        </div>
    );
};

export default App;