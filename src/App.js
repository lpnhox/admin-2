import React from 'react';
import { Container } from '@mui/material';
import { useState } from 'react';

//chlid components

import Navbar from "./components/navbar/index.js";
import NavLeft, {ExpandButton} from './components/navleft/index.js';

const navLeftItems = [{
  name: 'Home'
}, {
  name: 'About'
}, {
  name: 'Contact'
}]


const App = () => {

  const [isExpanded, setExpanded] = useState(false);
  const handleOnClick = () => {
    setExpanded(!isExpanded);
  }
  return (
    <Container disableGutters={true} maxWidth="fixed" className="App">
      <Navbar onClick={handleOnClick}/>
      {isExpanded?<NavLeft item={navLeftItems}/>:<ExpandButton onClick={handleOnClick}/>}
    </Container>
  );
}

export default App;
