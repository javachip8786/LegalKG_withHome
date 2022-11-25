
import * as React from 'react';
import { Link } from 'react-router-dom';


const Intermediate = () => {

  return (
        <div>
        
            <div className="serviceBox7" style={{ border: '1px solid black' }}>
                
                <div className="box5">
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