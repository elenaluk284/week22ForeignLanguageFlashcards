import Header from "./Header";
import Footer from './Footer';
import WordList from './WordList';
import TrainingMode from './TrainingMode';

const App = () => {
    const words = [
        { word: 'Привет', translation: 'Hello' },
        { word: 'Спасибо', translation: 'Thank you' },
        // Добавьте больше слов по мере необходимости
    ];

    return (
        <div>
            <Header />
            <WordList words={words} />
            <TrainingMode />
            <Footer />
        </div>
    );
};

export default App;