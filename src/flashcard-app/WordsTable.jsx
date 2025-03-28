// src/flashcard-app/WordsTable.jsx
import { useContext, useState } from 'react';
import { WordsContext } from './context/WordsContext';

const WordsTable = () => {
    const { words, loading, error, updateWord, deleteWord, addWord } = useContext(WordsContext);
    const [editingWord, setEditingWord] = useState(null);
    const [newWord, setNewWord] = useState({ value: '', transcription: '', translation: '', theme: '' });

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div style={{ color: 'red' }}>{error}</div>;

    const handleEdit = (word) => {
        setEditingWord(word);
    };

    const handleSave = async (word) => {
        await updateWord(word);
        setEditingWord(null);
    };

    const handleDelete = async (id) => {
        await deleteWord(id);
    };

    const handleAdd = async () => {
        await addWord(newWord);
        setNewWord({ value: '', transcription: '', translation: '', theme: '' });
    };

    return (
        <div>
            <h2>Список слов</h2>
            <table>
                <thead>
                    <tr>
                        <th>Слово</th>
                        <th>Транскрипция</th>
                        <th>Перевод</th>
                        <th>Тема</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map((word) => (
                        <tr key={word.id}>
                            {editingWord && editingWord.id === word.id ? (
                                <>
                                    <td><input type="text" defaultValue={word.value} /></td>
                                    <td><input type="text" defaultValue={word.transcription} /></td>
                                    <td><input type="text" defaultValue={word.translation} /></td>
                                    <td><input type="text" defaultValue={word.theme} /></td>
                                    <td>
                                        <button onClick={() => handleSave(word)}>Сохранить</button>
                                        <button onClick={() => setEditingWord(null)}>Отмена</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{word.value}</td>
                                    <td>{word.transcription}</td>
                                    <td>{word.translation}</td>
                                    <td>{word.theme}</td>
                                    <td>
                                        <button onClick={() => handleEdit(word)}>Редактировать</button>
                                        <button onClick={() => handleDelete(word.id)}>Удалить</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Добавить новое слово</h3>
            <div>
                <input
                    type="text"
                    placeholder="Слово"
                    value={newWord.value}
                    onChange={(e) => setNewWord({ ...newWord, value: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Транскрипция"
                    value={newWord.transcription}
                    onChange={(e) => setNewWord({ ...newWord, transcription: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Перевод"
                    value={newWord                    .translation}
                    onChange={(e) => setNewWord({ ...newWord, translation: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Тема"
                    value={newWord.theme}
                    onChange={(e) => setNewWord({ ...newWord, theme: e.target.value })}
                />
                <button onClick={handleAdd}>Добавить</button>
            </div>
        </div>
    );
};

export default WordsTable;

