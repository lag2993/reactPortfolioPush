import React, { useState } from "react";

function Contact( ){
// Create State to let Viewers contact me
    const [contactState, setContact] = useState({
        name:'',
        email:'',
        message:''
    });

    const [name,email,message] = contactState;

    const handleSubmit = 
    (e)=>{
        e.preventDeafault();

    };
    const handleChange = (e)=>{
        setContact({...contactState,[e.target.name]:e.target.value});
    }
    return (
       <section>
        <form id = "contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name}/>
            </div>
            <div>
                <label htmlFor="email"> Email:</label>
                <input type = "email" name="email" defaultValue={email}/>
            </div>
              <div>
                <label htmlFor="name">Message:</label>
                <input type="text" name="message" defaultValue={name}/>
            </div>
        </form>
       </section> 
    )

}
export default Contact
