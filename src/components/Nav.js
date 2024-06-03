import React,{useState}from 'react'
import './header.css'
import './Form.css'
function Nav(props) {
  const [name,setUsername]=useState('');
    const [password,setpassword]=useState('');
    const[nameerrormsg,setnameerrormsg]=useState('');
    const[passworderror,setpassworderror]=useState('');
    const handleclick=()=>{
        if (!name.trim()) {
            setnameerrormsg( 'Name is required');
          } else if (name.length < 6) {
            setnameerrormsg('Name should contain at least 6 characters');
          } else if(!/^[a-zA-Z@.]+$/.test(name)){
        setnameerrormsg('Name should only contain letters And @ . symbol');
          }else{
            setnameerrormsg('');
          }
      
          if (!password.trim()) {
            setpassworderror('Password is required');
          }
          else{
            setpassworderror('')
          }
          if(name!='' && password!='')
            {
              window.alert('login sucessfully')
            }
    }
  return (
    <div>
      <h2 id="login"><center>LOGINFORM</center></h2>
      <div className='container'>
        <div className='field'>
      <label htmlFor='name'>Username</label>
      <input type='text' id='name' value={name} onChange={(e)=>setUsername(e.target.value)}/>
       <p className='error'>{nameerrormsg}</p>
      </div>
      <div className='field'>
      <label htmlFor='password'>Password</label>
      <input type='password' id='psw' value={password} onChange={(e)=>setpassword(e.target.value)}/>
      <p className='error'>{passworderror}</p>
      </div>
      <button onClick={handleclick}>Login</button>
      </div>
     
    </div>
  )
}

export default Nav
