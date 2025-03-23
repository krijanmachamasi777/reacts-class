import React, { useState, createContext, useContext } from 'react';

const phonenocontext = createContext();
const myage=createContext();

const Component1 = () => {
    const [username, setUsername] = useState('krijan ');
    const [phone, setphone] = useState(9742828982);
    const [age,setage]=useState(20);

    return < phonenocontext.Provider value={phone}>   
        <myage.Provider value={age}>
        <h1>Component 1 {username}</h1>
        <Component2 user2={username} />
        </myage.Provider>

    </phonenocontext.Provider>

};
const Component2 = ({ user2 }) => {
    const phoney= useContext(phonenocontext);
    const agee=useContext(myage);

    return <div><h1>Component 2 {phoney}</h1>
            <h1>this is my age {agee}</h1>

        <Component3 user3={user2} />
    </div>
};
const Component3 = ({ user3 }) => {
    const phone= useContext(phonenocontext);
    return <div><h1>Component 3 {user3} {phone}</h1>

    </div>
};

export default Component1;