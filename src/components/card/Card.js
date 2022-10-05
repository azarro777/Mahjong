import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setClickedNums, setVisibility } from "../../reducer/mahjongReducer";
import "./Card.css";

export const Card = (props) => {
  const clickedNum = useSelector(state => state.mahjong.clickedNum);
  const prevClickedNum = useSelector(state => state.mahjong.prevClickedNum);
  const dispatch = useDispatch();
  const [state, setState] = useState({ visibility: "inherit" });
  const [cardStyle, setCardStyle] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setState({});
    }, 5000);
  }, []);

  const handleNumber = () => {
    if(prevClickedNum === clickedNum) {
      setState({visibility: 'inherit'});
      setCardStyle({border: "0.5px solid #0A0A0C"});
    } else {
      setTimeout(() => {
        setState({ visibility: "hidden"});
        setCardStyle({border: "0.5px solid #ED5517"});
        setTimeout(() => {
          setCardStyle({border: "0.5px solid #CDCDCD"});
        }, 2000);
        
      }, 2000);
    }
  };

  const handle =() => {
    setState({ visibility: "inherit" });
    dispatch(setClickedNums(props.number));
  };
  
  return (
    <div style={cardStyle} onClick={handleNumber} onClickCapture={handle} className='card'>
      <h1 style={state} >
        {props.number}
      </h1>
    </div>
  );
};
