import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.scss'
import axios from 'axios';

function Register() {

  const [inputs, setInputs] = useState({
    userName:'',
    email:'',
    password:'',
    name:''

  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) =>{
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleClick = async (e) => {
    e.preventDefault();

    try{
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate('/login')
    }
    catch(err){
      setError(err.response.data);
    }
  };


  return (
    <div className='register'>
        <div className="card">
            <div className="left">
                <h1>WELCOME TO MCA</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Explicabo consequuntur ratione molestias iusto nisi earum sint sapiente laborum!
                      A magni.
                </p>
                <span>Do You have an Account?</span>
                <Link to='/login'>
                  <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" name="userName" id="userName" placeholder='Username' onChange={handleChange} required/>
                    <input type="email" name="email" id="email" placeholder='E-mail' onChange={handleChange} required/>
                    <input type="text" name="name" id="name" placeholder='Name' onChange={handleChange} required/>
                    <input type="password" name="password" id="password" placeholder='Password'onChange={handleChange} required/>
                    {err && err}
                    <button onClick={handleClick}>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register