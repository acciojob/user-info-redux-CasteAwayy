import React from "react";
import "./../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setName } from "../userReducer";

const App = () => {
    const { name, email } = useSelector((state) => state);
    console.log(name, email);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <h1>User Information</h1>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => dispatch(setName(e.target.value))}
                />
                <br />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                />
            </div>
            <div className="output">
                <p>Current values in store: </p>
                <p>Name - {name}</p>
                <p>Email - {email}</p>
            </div>
        </>
    );
};

export default App;
