import './contactus.css';
import { useState } from 'react';


const Contactus = () => {
    const initialFormState = {
        name: "",
        phonenumber: "",
        subject: "",
        email: "",
        message: "",
    };
    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }))

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    }


    return (
       
            <div className="contactus">

                <div className="container" >
                    Enter your name <input type="text" id="name" value={formData.name} placeholder="enter your name" onChange={handleChange} />
                    Enter your email <input type="email" id="email" value={formData.email} placeholder="enter your email" onChange={handleChange} />
                    Subject <input type="text" id="subject" value={formData.subject} placeholder="Subject" onChange={handleChange} />
                    Enter your phone-number <input type="number" id="phonenumber" value={formData.phonenumber} placeholder="enter your number" onChange={handleChange} />

                    Enter your message <input type="text" id="message" value={formData.message} placeholder="enter your message" onChange={handleChange} />
                    <button>Submit</button>

                </div>



            </div>
        
    )
}
export default Contactus;