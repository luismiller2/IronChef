import React from "react"
import TextInput from "./TextInput"

function SignUp () {

    //HOOKS
  const [username, setUsername] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [errorMessage, setErrorMessage] = React.useState("")


function checkFields(e) {
        e.preventDefault(); 

        if (username.length < 4) {
            setErrorMessage("Username must be at least 4 characters")
        } else if (!email.includes("@")) {
            setErrorMessage("Must enter a valid email")
        }
            else if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters")
        } else if (password === "password") {
            setErrorMessage(`You can't call the password "password", bozo`)
        } else if (confirmPassword !== password) {
            setErrorMessage("Password does not match")
        } else {
                //success
                setErrorMessage(`Welcome, ${username}`)
            }
        

  }

  return (
      <div>
        <p>Signup Form</p>
        <form onSubmit={checkFields} >
            <TextInput action={(e)=> setUsername(e.target.value)} name="username" value={username}/>
            <TextInput action={(e)=> setEmail(e.target.value)} name="email" value={email}/>
            <TextInput action={(e)=> setPassword(e.target.value)} name="password" type="password" value={password}/>
            <TextInput action={(e)=> setConfirmPassword(e.target.value)} name="confirm password" type="password" value={confirmPassword}/>
            <button type="submit">Sign Up</button>
        </form>
        <p>{errorMessage}</p>
      </div>
  )
}

export default SignUp;