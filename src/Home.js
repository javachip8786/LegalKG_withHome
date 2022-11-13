import './App.css';
import './style.css'


import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


import vic from "./a.jpeg";
import ema from "./b.jpeg";
import aaa from "./c.jpeg";
import ppp from "./two.png";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Row } from 'react-bootstrap';

export default function Home() {
    const navigate = useNavigate();

    const [name, setName] = useState(vic);

    const changeName = (name) => {
        let value = name;

        if (value === 'abc') {
            setName(ema);
        } else if (value === 'def') {
            setName(vic);
        } else if (value === 'jkl') {
            setName(aaa);
        } else {
            setName(ppp);
        }

    };

    return (

        <div className="page" id="serviceBox" >

            <div className="serviceBox8" style={{ border: '1px solid black' }}>
                <div className="box6">
                    <h2>Legal KG</h2>
                    <p>Information</p>
                    <form>
                        <label>Enter your name: 
                            <input type="text" />
                        </label>
                        <label>Year:
                            <input type="text" />
                        </label>
                        <label>Number:
                            <input type="text" />
                        </label>
                    </form>
                </div>
            </div>

            <div className="serviceBox1" >
                <nav style={{ padding: 1, alignSelf: 'flex-start' }}>
                    <Row>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained">Home</Button>
                            <Button variant="contained">Browse Legislation</Button>
                            <Button variant="contained" onClick={() => {
                                navigate('/timeline');
                            }}>New Legislation</Button>
                            <Button variant="contained">Coronavirus Legislation</Button>
                            <Button variant="contained">Changes To Legislation</Button>
                        </Stack>
                    </Row>
                </nav>
            </div>
            <div className="box1" style={{ border: '1px solid black' }}>
                <img src={name} alt="img" width='100%' height='100%' />
            </div>
            <div className="serviceBox1">
                <nav style={{ padding: 1, alignSelf: 'flex-start' }}>
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
                </nav>
            </div>
            <div className="serviceBox5" style={{ border: '1px solid black' }}>
                <div className="box3">
                    <h2>New Legislation</h2>
                    <p>Stay up to date with newly enacted legislation for the UK, Scotland, Wales and Northern Ireland as it is published to this site using our free subscription feeds, or by browsing new legislation by publication date. All Bills currently before the UK Parliament are listed on the UK Parliament website in the Parliamentary Business, Bills & Legislation section. They are published on this site once they receive Royal Assent.</p>
                </div>
            </div>
            <div className="serviceBox6" style={{ border: '1px solid black' }}>
                <div className="box4">
                    <h2>Finding your way around legislation.gov.uk</h2>
                    <p>Legislation.gov.uk carries most (but not all) types of legislation and their accompanying explanatory documents. You can read about what legislation we publish, how we apply amendments, what legislation we update, where you can obtain copies of legislation we don’t hold and how legislation works. To find an item of legislation you can browse by legislation type and category or use our advanced search to explore by title or keyword in text.</p>
                </div>
            </div>
            <div className="serviceBox7" style={{ border: '1px solid black' }}>
                <div className="box5">
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
            <div className="serviceBox9" style={{ border: '1px solid black' }}>
                <div className="box6">
                    <h2></h2>
                    <p>Help     About Us    Site Map    Accessibility    Contact Us     Privacy Notice      Cookies</p>
                </div>
            </div>
        </div>
    );
}