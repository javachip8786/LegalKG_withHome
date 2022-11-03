import logo from './logo.svg';
import './App.css';
import './style.css'
import {useNavigate} from "react-router-dom"

import React, { useState } from "react";
import "./App.css";

import vic from "./a.jpeg";
import ema from "./b.jpeg";
import aaa from "./c.jpeg";
import ppp from "./two.png";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Container, Row, Col, Tab, Tabs, Spinner } from 'react-bootstrap';

const App = () => {



  const [name, setName] = useState(vic);

  const changeName = (name) => {
    let value = name;

    if (value === 'abc') {
      setName(ema);
    } else if(value === 'def'){
      setName(vic);
    } else if(value === 'jkl'){
      setName(aaa);
    } else{
      setName(ppp);
    }

  };


  return (

    <div class="page" id="serviceBox"> 

      <div class="serviceBox8" style={{border: '1px solid black'}}>
          <div class="box6">
            <h2>Legal KG</h2>
            <p>Information</p>
          </div>
      </div>

      <div class="serviceBox1" >
          <div class="box" >
            <nav style={{padding: 1, alignSelf: 'flex-start'}}>
              {/* <ul> */}
                <Row>
                <Stack spacing={2} direction="row">
                  <Button variant="contained">Home</Button>
                  <Button variant="contained">Browse Legislation</Button>
                  <Button variant="contained">New Legislation</Button>
                  <Button variant="contained">Coronavirus Legislation</Button>
                  <Button variant="contained">Changes To Legislation</Button>
                </Stack>
                </Row>
              {/* </ul> */}
            </nav>
          </div>
      </div>
      <div class="serviceBox2">
         <div class="box1" style={{border: '1px solid black'}}>
            <img src={name} width= '1000px' height= '600px' class='center' style={{ alignSelf: 'center' }}/>
         </div>
      </div>
      <div class="serviceBox3">
        <div class="box">
          <nav style={{padding: 1, alignSelf: 'flex-start'}}>
            {/* <ul> */}
              <Row>
              <Stack spacing={5} direction="row">
                <Button variant="contained" onClick={() => changeName('abc')}>Welcome</Button>
                <Button variant="contained" onClick={() => changeName('def')}>Delhi</Button>
                <Button variant="contained" onClick={() => changeName('jkl')}>Mumbai</Button>
                <Button variant="contained" onClick={() => changeName('mno')}>Pune</Button>
                <Button variant="contained" onClick={() => changeName('def')}>Goa</Button>
                <Button variant="contained" onClick={() => changeName('jkl')}>Jammu</Button>
              </Stack>
              </Row>
            {/* </ul> */}
          </nav>
        </div>
      </div>
      <div class="serviceBox5"  style={{border: '1px solid black'}}>
        <div class="box3">
          <h2>New Legislation</h2>
          <p>Stay up to date with newly enacted legislation for the UK, Scotland, Wales and Northern Ireland as it is published to this site using our free subscription feeds, or by browsing new legislation by publication date. All Bills currently before the UK Parliament are listed on the UK Parliament website in the Parliamentary Business, Bills & Legislation section. They are published on this site once they receive Royal Assent.</p>
        </div>
      </div>
      <div class="serviceBox6"  style={{border: '1px solid black'}}>
        <div class="box4">
          <h2>Finding your way around legislation.gov.uk</h2>
          <p>Legislation.gov.uk carries most (but not all) types of legislation and their accompanying explanatory documents. You can read about what legislation we publish, how we apply amendments, what legislation we update, where you can obtain copies of legislation we don’t hold and how legislation works. To find an item of legislation you can browse by legislation type and category or use our advanced search to explore by title or keyword in text.</p>
        </div>
      </div>
      <div class="serviceBox7" style={{border: '1px solid black'}}>
        <div class="box5">
          <h2>Understanding Legislation</h2>
          <p>How legislation works</p>
          <p>How parliaments have changed over time and created different legislation types</p>
          <p>How legislation is numbered and cited</p>
          <p>How legislation can extend and apply to different parts of the UK</p>
          <p>How legislation comes into force</p>
          <p>Our editorial practice and timescales for incorporating changes</p>
          <p>Legislation originating from the EU</p>
        </div>
      </div>
    </div>
  );
}

export default App;
