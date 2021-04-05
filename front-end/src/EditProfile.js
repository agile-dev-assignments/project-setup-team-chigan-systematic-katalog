import React from 'react';

import './EditProfile.css';
import { Button } from "react-bootstrap";
import FileUploader from './FileUploader';

import PopupModalUsername from './PopupUsername';
import PopupModalName from './PopupName';
import PopupModalBio from './PopupBio';
import PopupModalVenmo from './PopupVenmo';
import PopupModalEmail from './PopupEmail';
import PopupModalNumber from './PopupNumber';
import PopupModalPassword from './PopupPassword';

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
                <section>
                <h1>Settings</h1>

                <PopupModalUsername />
                <PopupModalPassword />
                {/* <button id="side">
                    Change Password 
                </button>
                <br /> */}
                <PopupModalName />

                <PopupModalBio />
                {/* <button id="side">
                    Edit Listings 
                </button>
                <br /> */}
                <PopupModalVenmo />

                <PopupModalEmail />
                {/* <button id="side">
                    Edit Browsing History
                </button> */}
                <PopupModalNumber />
                </section>
                
            </section>

        </section >
        
        
    </div>

    )
}





export default EditProfile