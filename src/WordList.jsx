import Flashcard from './Flashcard';

const WordList = ({ words }) => {
    return (
        <div className="word-list">
            {words.map((item, index) => (
                <Flashcard key={index} word={item.word} translation={item.translation} />
            ))}
        </div>
    );
};

export default WordList;
