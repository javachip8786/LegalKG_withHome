
import * as React from 'react';
import { Link } from 'react-router-dom';


const Intermediate = () => {

  return (
        <div className="serviceBox7" style={{ border: '1px solid black' }}>
            <div className="box5">
                <h2>Table of Content</h2>
                <p>
                    <Link to={'/Timeline'}>Amendment 1</Link>
                </p>
                <p>
                    <Link to={'/Timeline'}>Amendment 2</Link>
                </p>
                <p>
                    <Link to={'/Timeline'}>Amendment 3</Link>
                </p>
                
            </div>
        </div>
    );
}


export default Intermediate;