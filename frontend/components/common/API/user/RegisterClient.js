import axios from "axios";
import qs from 'qs';
import Router from 'next/router';
import getConfig from "next/config";
import Cookies from "js-cookie";

export const registerDetails = async(data) => {
  let {publicRuntimeConfig} = await getConfig();
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url: (publicRuntimeConfig.BACKEND+"/profile/register"),
  };
  let resData = "";
  await axios(options)
    .then(function (response) {
      let{
        Status,
        Data
      } = response.data;
      
      if(Status==200){
        if((Data.code) && (Data.code == 11000)){
          resData = "Email id already exist!";
        }else if(Data.code){
          resData =  "Error!!!";
        }else{
          resData = "Registration succesfull!";
        }
      }else{
        resData = "Something went wrong";
      }
    })
    .catch(function (error) {
      resData = "Something went wrong";
    });
    return resData;
  }

export const login = async(data) =>{
  let {publicRuntimeConfig} = await getConfig();
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url: (publicRuntimeConfig.BACKEND+"/profile/login"),
  };

  let res;
  await axios(options)
  .then(function (response) {
    if(response.data.Token){
      let {
        Token
      } = response.data;
      if(Token){
        Cookies.set("Token",Token);
        Router.push("/admin");
        // Router.push("/tools/clients")
      }else{
        res = "Invalid user"
      }
    }else{
      res = "Email/password is incorrect"
    }
  })
  .catch(function (error) {
    if(error){
      res = "Something went wrong!";
    }
  });
  // console.log("Login Successful");
  return res;
}

