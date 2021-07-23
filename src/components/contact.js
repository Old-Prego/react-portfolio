import React from 'react';

export function Contact(props) {

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="name" name="contactName"></input>
                <input type="email" placeholder="email" name="contactEmail"></input>
                <input type="text" placeholder="message" name="contactMessage"></input>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}