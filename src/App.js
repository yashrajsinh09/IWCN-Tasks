import './App.css';
import Form from './components/Form';
import Task from './components/Tasks';

function App() {
  return (
    <div className="App border-2 border-double" style={{ maxWidth: '100%', maxHeight: '100%', backgroundColor: '#ff4444' }}>
     
      <Form/>
      <Task/>
    
    </div>
  );
}

export default App;