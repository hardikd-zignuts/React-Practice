import './App.css';
import ButtonCounter from './components/ButtonCounter';
import HoverButton from './components/HoverButton';
import Counter from './components/Counter.jsx'

function App() {
  return (
    <>
      <div className='App'>
        <Counter render={(count, handleCount) => <ButtonCounter count={count} handleCount={handleCount} />} />
        <Counter render={(count, handleCount) => <HoverButton count={count} handleCount={handleCount} />} />
      </div>
    </>
  );
}

export default App;
