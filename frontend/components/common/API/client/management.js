import axios from "axios";
import qs from 'qs';
import getConfig from 'next/config';
import fetch from "isomorphic-fetch";
import Cookies from "js-cookie";

export const addDeal = async(data) => {
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
      await fetch(publicRuntimeConfig.BACKEND+"/management/adddeal", options)
        .then(async (response) => {
          let res = await response.json()
          let {
            Status,
            Data
          } = res;
          if(Status == 200){
            if(typeof(Data)=='object' && Data.Token){
              resData = "Deal added";
            }else if(Data == "Tag name already exist!"){
              resData = Data
            }else{
              resData = "Failed to add client!";
            }
          }else{
            resData="Network error!"
          }
        }).catch(function (error) {
          resData = "Something went wrong!";
        });
        return resData;
  }

export const addTask = async(data) => {
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
    await fetch(publicRuntimeConfig.BACKEND+"/management/addtask", options)
      .then(async (response) => {
        let res = await response.json()
        let {
          Status,
          Data
        } = res;
        if(Status == 200){
          if(typeof(Data)=='object' && Data.Token){
            resData = "Task added";
          }else if(Data == "Tag name already exist!"){
            resData = Data
          }else{
            resData = "Failed to add task!";
          }
        }else{
          resData="Network error!"
        }
      }).catch(function (error) {
        resData = "Something went wrong!";
      });
      return resData;
}

export const addAppointment = async(data) => {
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
    await fetch(publicRuntimeConfig.BACKEND+"/management/addappointment", options)
      .then(async (response) => {
        let res = await response.json()
        let {
          Status,
          Data
        } = res;
        if(Status == 200){
          if(typeof(Data)=='object' && Data.Token){
            resData = "Scheduled meeting";
          }else if(Data == "Tag name already exist!"){
            resData = Data
          }else{
            resData = "Failed to schedule meeting!";
          }
        }else{
          resData="Network error!"
        }
      }).catch(function (error) {
        resData = "Something went wrong!";
      });
      return resData;
}

export const getDeals = async(data) => {
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
    await fetch(publicRuntimeConfig.BACKEND+"/management/getDeals", options)
      .then(async (response) => {
        let res = await response.json()
        let {
          Status,
          Data
        } = res;
        if(Status == 200){
          resData = Data;
        }else{
          resData="Network error!"
        }
      }).catch(function (error) {
        resData = "Something went wrong!";
      });
      return resData;
}

export const getTasks = async(data) => {
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
    await fetch(publicRuntimeConfig.BACKEND+"/management/getTasks", options)
      .then(async (response) => {
        let res = await response.json()
        let {
          Status,
          Data
        } = res;
        if(Status == 200){
          resData = Data;
        }else{
          resData="Network error!"
        }
      }).catch(function (error) {
        resData = "Something went wrong!";
      });
      return resData;
}

export const getSchedules = async(data) => {
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
    await fetch(publicRuntimeConfig.BACKEND+"/management/getSchedules", options)
      .then(async (response) => {
        let res = await response.json()
        let {
          Status,
          Data
        } = res;
        if(Status == 200){
          resData = Data;
        }else{
          resData="Network error!"
        }
      }).catch(function (error) {
        resData = "Something went wrong!";
      });
      return resData;
}