const Flashcard = ({ word, translation }) => {
    return (
        <div className="flashcard">
            <h2>{word}</h2>
            <p>{translation}</p>
        </div>
    );
};

export default Flashcard;