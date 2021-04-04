import React, {useState} from "react"

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.presentDefault();
        const newUser = { firstname, lastname, email, password };
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        
    };

    return (
        <div>
            <form class="text-left" onSubmit= { createUser }>
                <div class="my-2">
                    <label htmlFor="firstname">First name</label>
                    <input type = "text" onChange= { (e) => setFirstname(e.target.value)} value= { firstname } />
                </div>
                <div class="my-2">
                    <label htmlFor="lastname">Last name</label>
                    <input type = "text" onChange= { (e) => setLastname(e.target.value)} value= { lastname } />
                </div>
                <div class="my-2">
                    <label htmlFor="email">Email</label>
                    <input class="my-2" type = "text" onChange= { (e) => setEmail(e.target.value)} value= { email } />
                </div>
                <div class="my-2">
                    <label htmlFor="password">Password</label>
                    <input type = "text" onChange= { (e) => setPassword(e.target.value)} value= { password } />
                </div>
                <div class="my-2">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type = "text" onChange= { (e) => setConfirmPassword(e.target.value)} value= { password } />
                </div>
                <input class="my-2" type="submit" value="Create User" />
            </form>
            <div>
                <h4>Your Form Data </h4></div>
                <div>
                <p>First Name: { firstname }</p>
                <p>Last Name: { lastname }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { password }</p>
            </div>
        </div>

    );
};
export default UserForm;