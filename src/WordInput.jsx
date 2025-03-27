import PropTypes from 'prop-types';

const WordInput = ({ newWord, setNewWord, newTranslation, setNewTranslation, addWord }) => {
  const handleAddWord = () => {
    if (!newWord || !newTranslation) {
      // Добавляем обработку пустых полей
      alert('Пожалуйста, заполните все поля');
      return;
    }
    addWord();
  };

  return (
    <>
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
      <button onClick={handleAddWord}>Добавить слово</button>
    </>
  );
};

WordInput.propTypes = {
  newWord: PropTypes.string.isRequired,
  setNewWord: PropTypes.func.isRequired,
  newTranslation: PropTypes.string.isRequired,
  setNewTranslation: PropTypes.func.isRequired,
  addWord: PropTypes.func.isRequired,
};

export default WordInput;
