import React from 'react';
import { useEffect } from 'react';
import { fetchData } from './actions/mahjong';
import './App.css';
import { Board } from './components/board/Board';
import { useAppDispatch } from './hooks/hooks';

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

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