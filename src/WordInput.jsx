import PropTypes from 'prop-types';

const WordInput = ({ newWord, setNewWord, newTranslation, setNewTranslation, addWord }) => {
    return (
        <div className="word-input">
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
        </div>
    );
};

WordInput.propTypes = {
    newWord: PropTypes.string.isRequired,             // Текущий ввод слова
    setNewWord: PropTypes.func.isRequired,            // Функция для обновления слова
    newTranslation: PropTypes.string.isRequired,      // Текущий ввод перевода
    setNewTranslation: PropTypes.func.isRequired,     // Функция для обновления перевода
    addWord: PropTypes.func.isRequired,               // Функция для добавления нового слова
};

export default WordInput;