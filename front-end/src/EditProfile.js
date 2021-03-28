import React from 'react';

import './EditProfile.css';
import { Button } from "react-bootstrap";
import FileUploader from './FileUploader';

const EditProfile = (props) => {

    return (
    
    <div className="EditProfile">

        <section className="main-content">

            <section id="spacing">
                <h1></h1>
                <img alt="welcome!" src="https://picsum.photos/200?page=profile" />
                <br />
                <FileUploader />
                <br />
            </section>

            <section id="this-part">

                <h1>Settings</h1>

                <button id="button">
                    Edit Username 
                </button>
                <button id="side">
                    Change Password 
                </button>
                <br />
                <button id="button">
                    Edit Name 
                </button>
                <br />

                <button id="button">
                    Edit Bio 
                </button>
                <button id="side">
                    Edit Listings 
                </button>
                <br />
                <button id="button">
                    Edit Venmo 
                </button>
                <br />

                <button id="button">
                    Edit Email 
                </button>
                <button id="side">
                    Edit Browsing History
                </button>
                <button id="button">
                    Edit Phone Number
                </button>
            </section>

        </section >
        
        <button id="save">
            Save Changes
        </button>
        
    </div>

    )
}





export default EditProfile