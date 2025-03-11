import './contactus.css';
const contactUs = () => {
    return (

        <div className="contactus">
            
            <div className="container">
                Enter your name <input type="text" placeholder="enter your name" />
                Enter your email <input type="email" placeholder="enter your email" />
                Subject <input type="text" placeholder="Subject" />
                Enter your phone-number <input type="number" placeholder="enter your number" />
                
                Enter your message <input type="text" placeholder="enter your message" />
                <button>Submit</button>

            </div>



        </div>
    )
}
export default contactUs;