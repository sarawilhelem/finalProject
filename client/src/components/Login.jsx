import React from "react";
import { useState } from "react";
import requests from "./tools/requests";
export default function Login() {
    const [details, setDetails] = useState({ email: "", password: "" });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [successLogin, setSuccessLogin] = useState("")
    const [isConnected, setIsConnected] = useState(localStorage.getItem("currentUser") ? true : false)
    const handleSubmit = async () => {
        try {

            const checkOrAddUser = await requests.post('users', details, 'POST');
            if (checkOrAddUser.message) {
                localStorage.setItem("currentUser", JSON.stringify(details.email));
                setSuccessLogin(checkOrAddUser.message)
                setIsConnected(true)
                setTimeout(() => {
                    setIsModalOpen(false);
                }, 3000);
            }

        }
        catch (e) {
            // setError(e)
        }
    };

    const logOut = () => {
        localStorage.clear("currentUser");
        setIsConnected(false);
    }
    return (
        <>
            {isConnected ?
                <button onClick={logOut}>התנתק</button> :
                <button onClick={() => { setIsModalOpen(true) }}>התחבר</button>

            }
            {isModalOpen &&
                (<div className="modal">
                    <button onClick={() => setIsModalOpen(false)}>סגור</button>
                    <h2>התחברות</h2>
                    <label>
                        כתובת מייל:
                        <input
                            type="email"
                            value={details.email}
                            onChange={(e) => setDetails({ ...details, email: e.target.value })}
                        />
                    </label>
                    <label>
                        סיסמה:
                        <input
                            type="password"
                            value={details.password}
                            onChange={(e) => setDetails({ ...details, password: e.target.value })}
                        />
                    </label>

                    <button onClick={handleSubmit}>שמור</button>
                    <div>{successLogin}</div>

                </div>)}
        </>
    )
}