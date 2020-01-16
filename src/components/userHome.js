import React from 'react';
import app from "../firebase";

export default function(){
    return (
        <div>
            This is the user home page after signning up.
            <br></br>
            <button onClick={()=> app.auth().signOut()}>Log out</button>
        </div>
    )
}