import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './actions/mahjong';
import './App.css';
import { Board } from './components/board/Board';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className='app'>
      <h1 className='app__header'>Mahjong</h1>
      <Board/>
    </div>
  )
}

export default App;
