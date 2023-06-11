import './App.css';
import { GenerateLetters } from './components/generateletters/GenerateLetters';
import { GenerateNumbers } from './components/generatenumbers/GenerateNumbers';
import { Route,Routes } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GenerateNumbers/>}/>
        <Route path='/letters' element={<GenerateLetters/>}/>
      </Routes>
    </div>
  );
}

export default App;
