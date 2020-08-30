// import {BACKEND_URL} from "../config"
import axios from "axios";
import qs from 'qs';
import getConfig from 'next/config';
import fetch from "isomorphic-fetch";
import Cookies from "js-cookie";

export const addClient = async(data) => {
  let {publicRuntimeConfig} = await getConfig();
  let Token = Cookies.get("Token")
  data["accountId"] = Token;
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: qs.stringify(data),
    // url: (publicRuntimeConfig.BACKEND+"/client/addclient"),
  };

  let resData = "";
    await fetch(publicRuntimeConfig.BACKEND+"/client/addclient", options)
      .then(function (response) {
        if(response.body.Data.Token){
          resData = response.body.Data.Token;
        }else{
          resData = "Failed to add client";
        }
      }).catch(function (error) {
        resData = "Something went wrong";
      });
      return resData;
}

export const getClients = async() => {
  let {publicRuntimeConfig} = await getConfig();
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({"accountId": Cookies.get("Token")}),
      url: (publicRuntimeConfig.BACKEND+"/client/getClients")
    };
    
    let resData = "";
    await axios(options)
      .then(function (response) {
        let{
          Status,
          Data
        } = response.data;
        
        if(Status==200){
          resData = Data;
        }else{
          resData = "Something went wrong";
        }
      })
      .catch(function (error) {
        resData = "Network error!!!";
      });
      return resData;
    }