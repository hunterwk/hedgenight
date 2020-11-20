import React, { useState, useEffect } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const notes = () => {
    //will be the save to database functionality
    function save() {

    }

    return (
        // <div className="header">
        //   <h1>Weclome Back {data.username}</h1>
        // </div>
        <div className="container mx-auto">
            <div className="row">
                <form method="post">
                    <label for="name header">Session Title:</label><br />
                    <div className="col-3 col-s-12">
                        <div className="aside">
                            <input type="text"></input><br />
                            <label for="notes">Session Notes:</label><br />
                            <input type="text"></input><br />
                            <button className={`button button-secondary`} onClick={save}> Save </button>
                            <br />
                        </div>
                    </div>
                </form>           
            </div>
        </div>
        );
};

export default notes;