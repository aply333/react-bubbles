import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../api/axiosAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  
  const axiosFetch = () => {
    axiosWithAuth()
      .get('/colors')
      .then(res => setColorList(res.data))
      .catch(err => console.log(err))
  }

  useEffect(()=>{
    axiosWithAuth()
    .get('/colors')
    .then(res => setColorList(res.data))
    .catch(err => console.log(err))
  },[])

  // const pull = e => {
  //   e.preventDefault();
  //   axiosFetch()
  // }

  return (
    <>
   
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
