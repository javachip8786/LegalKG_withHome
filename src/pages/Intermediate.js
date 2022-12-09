
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import './intermediate.css';
import styles from "./Desktop2.module.css";
import { useNavigate } from 'react-router-dom';

const Intermediate = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div >
                <Header />
            </div>
            <div className="serviceBox7">

                <div className="box">
                    <h2>Table of Content</h2>
                    <p>
                        <Link to={'/Chapters'}>PMLA</Link>
                    </p>
                    <p>
                        <Link to={'/Timeline'}>Dummy legislation</Link>
                    </p>
                    <p>
                        <Link to={'/Timeline'}>Dummy Legislations</Link>
                    </p>

                </div>
            </div>
        </div>
    );
}


export default Intermediate;