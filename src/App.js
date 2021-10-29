
import './App.css';
import Book from './Book';

function App() {
  return (
    <div className="main">
       <h1 className="header"> 📚 Goodbooks</h1>
       <p className="text">Checkout my favorite books. Select a genre to get started.</p>
       <Book/>
    </div>
  );
}

export default App;
