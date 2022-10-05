import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../card/Card';
import './Board.css';

export const Board = () => {
  const numbers = useSelector(state => state.mahjong.numbers);
  
  return (
    <div className='board'>
      {numbers.map((item, index) => {
        return <Card key={index} number={item} id={index}/>
      })}
    </div>
  );
};