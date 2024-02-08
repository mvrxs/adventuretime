import React from 'react';
import { createRoot } from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.css';
import Nav from './components/nav.jsx';
import Start from './components/start.jsx';
import End from './components/end.jsx';
import AdventureStory from './components/AdventureStory.jsx';

const App = () => {
    const [showHistory, setShowHistory] = React.useState(false);

    const toggleHistory = () => {
        setShowHistory(!showHistory);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            {showHistory ? <AdventureStory /> : <Start toggleHistory={toggleHistory} />}
        </DndProvider>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
