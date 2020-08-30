import React,{useState} from "react";
import Nav from '../components/common/Navbar';
import Layout from "../components/sections/Layout";
import RegisterForm from "../components/common/Register";
import LoginForm from "../components/common/Login";
import { registerDetails, login } from "../components/common/API/user/RegisterClient";
import {Validator} from "../components/common/form/validator"
import "../styles/forms.scss";

const ERROR_MSG_MAP = {
  text: 'Special characters Not allowed',
  email: 'invalid email format',
  tel: 'Invalid mobile number',
  url: 'Invalid url format',
  password: '(Minimum 8 characters)'
};

const Home = () => {
  const [actions, setActions] = useState({
    nameValid:"",
    showMsg: false,
    errCls: "",
    msg:"",
    resData:"",
    formData:{}
  });

  const handleChange = event =>{
    let {type, name, value} = event.target;
    let actionValues = {...actions};

    actionValues["nameValid"]= name
    actionValues["errCls"] = "text-danger";
    actionValues["showMsg"]= false;

    if(value){
      if(Validator(type, name, value)) {
        actionValues["formData"][name] = value;
      }else{
        actionValues["showMsg"]= true;
        actionValues["msg"] = ERROR_MSG_MAP[type];
      }
    }else{
      actionValues["showMsg"]= true;
      actionValues["msg"] = "Field cannot be empty!";
    }
    setActions(actionValues);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    let actionValues = {...actions};
    actionValues["errCls"] = "text-danger";

    let{
      formData
    } = actionValues;

    let{
      name,
      company,
      companyURL,
      email,
      mobile,
      password,
      retypePassword 
    } = formData;

    if(name &&
      company &&
      companyURL &&
      email &&
      mobile &&
      password &&
      retypePassword){

      if(formData["password"]!=formData["retypePassword"]){
          actionValues["nameValid"]= "submit"
          actionValues["msg"] = "Passwords doesn't match!";
          actionValues["showMsg"]= true;
        }else{
          actionValues["nameValid"]= "submit"
          actionValues["resData"] = await registerDetails(formData);
          if(actionValues["resData"]){
            (actionValues["resData"]=="Registration succesfull!")?actionValues["errCls"] = "text-success":"";
            actionValues["msg"] = actionValues["resData"];
          }else{
            actionValues["msg"] = "Something went wrong!!!";
          }
          actionValues["showMsg"]= true;  
        }

    }else{
      actionValues["nameValid"]= "submit"
      actionValues["msg"] = "Fields cannot be empty";
      actionValues["showMsg"]= true;
    }
    
    setActions(actionValues);
  }

  const finalSubmit = async e =>{
    e.preventDefault();
    let actionValues = {...actions};
    actionValues["errCls"] = "text-danger";

    let{
      formData
    } = actionValues;

    let{
      email,
      password
    } = formData;
    if(email && password){
      let res = await login(formData);
      if(res=="Email/password is incorrect" || res=="Something went wrong!"){
        actionValues["nameValid"]="login";
        actionValues["msg"] = res;
        actionValues["showMsg"]= true;
      }
    }else{
      actionValues["nameValid"]= "login";
      actionValues["msg"] = "Fields cannot be empty";
      actionValues["showMsg"]= true;
    }
    setActions(actionValues);
  }

  return(
    <>
      <Nav pageFrom="home"/>
      <Layout>
      <div className="d-flex flex-row mb-3">
        <div className="p-5 bd-highlight">
          <div className="d-flex flex-column mb-3 form">
            <div className="p-2 main">Sign up</div>
            <div className="p-2">
              <RegisterForm handleChange={handleChange} handleSubmit={handleSubmit} actions={actions} />
            </div>
          </div>
        </div>
        <div className="p-5 m-5">
          <div className="d-flex flex-column mb-3 form">
            <div className="p-2 main">Login</div>
            <div className="p-2">
              <LoginForm handleChange={handleChange} handleSubmit={finalSubmit} actions={actions}/>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}
export default Home
