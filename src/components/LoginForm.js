import React, {useState} from 'react'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name : "", email: "", password: ""});

    const submitHandler = e => {
        e.prevenDefault();

        Login(details);
    }

    return (
        <form onSubmit = {submitHandler}>
            <div className = "form-innner">
                <h2>Login</h2>
                {/* Error! */}
                <div className='form-group'>
                    <label htmlFor = "name">Name:</label>
                    <input type = "text" name = "name" id = "name" onChange={e => setDetails({...findRenderedDOMComponentWithClass, name: e.target.value})} value = {details.name}/>
                </div>
                <div className = "form-group">
                    <label htmlFor = "email">Eamil :</label>
                    <input type = "email" name = "email" id = "email" onChange={e => setDetails({...findRenderedDOMComponentWithClass, email: e.target.value})} value = {details.email} />
                </div>
                <div className='form-group'>
                    <label htmlFor = "password">Password: </label>
                    <input type = "password" name = "password" id = "password" onChange={e => setDetails({...findRenderedDOMComponentWithClass, password: e.target.value})} value = {details.password}/>
                </div>
                <input type = "submit" value = "LOGIN" />
            </div>
        </form>
    )
}

export default LoginForm;