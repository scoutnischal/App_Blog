import { useState } from "react";

import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { textAlign } from "@mui/system";

const Component = styled(Box)`
  width: 350px;
  margin: auto;
  box-shadow: 5px 3px 5px 3px rgb(0 0 0/0.7);
`;

const Image = styled("img")({
  width: 250,
  margin: "auto",
  display: "flex",
  padding: "25px 0 0",
});

const Wrapper = styled(Box)`
  padding: 15px 25px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
    text-transform : none;
    background : #FB641B;
    color : #FFF;
    height :  50px
    border-radius : 2px;
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 18Textpx;
`;


const signupInitialValues = {
  name:'',
  username:'',
  password:''
}

const Login = () => {
  const [account, toggleAccout] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);

  const toggleSignup =()=>{
    account === 'signup' ? toggleAccout('login'):toggleAccout('signup');
  }
  
  const onInputChange = (event) =>{
    setSignup({...signup,[event.target.name]:event.target.value});
  }

  const  signupUser = ()=>{
//call api 
    
  }

  return (
    <Component>
      <Box>
        <Image src="./images/Blog.png" alt="image not found" />
        {account === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter username" />
            <TextField variant="standard" type={"password"} label="Enter password" />
            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <Button
              variant="outlined"
              style={{
                marginTop: "10px",
                background: "#fff",
                color: "#2874f0",
                height: "38px",
                borderRadius: "3px",
                boxShadow: " 0 2px 4px 0 rgb(0 0 0/ 20%",
              }} onClick={()=>toggleSignup()}>
              Create an account
            </Button>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField variant="standard" onChange={(event)=> onInputChange(event)} name="name" label="Enter Name" />
            <TextField variant="standard" onChange={(event)=> onInputChange(event)} name="username" label="Enter Username" />
            <TextField variant="standard" onChange={(event)=> onInputChange(event)} name="password" label="Enter Password" />
            <Button
              variant="outlined"
              style={{
                marginTop: "20px",
                background: "#fff",
                color: "#2874f0",
                height: "38px",
                borderRadius: "3px",
                boxShadow: " 0 2px 4px 0 rgb(0 0 0/ 20%",
              }}
            onClick ={()=>signupUser()}>
              Create an account
            </Button>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={()=> toggleSignup()}>Already have an account</LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
