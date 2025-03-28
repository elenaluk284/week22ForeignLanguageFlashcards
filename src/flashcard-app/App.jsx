// src/flashcard-app/App.jsx

import Header from './Header';
import Footer from './Footer';
import WordsTable from './WordsTable';
import WordsProvider from './context/WordsProvider'; // Обновляем импорт на WordsProvider
import './styles/App.css';

const App = () => {
    return (
        <WordsProvider>
            <div className="app">
                <Header />
                <main>
                    <WordsTable />
                </main>
                <Footer />
            </div>
        </WordsProvider>
    );
};

export default App;
