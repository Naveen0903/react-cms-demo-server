import axios from "axios";
import qs from "querystring";
import {BACKEND_URL} from "../../config";
import Cookies from "js-cookie";

export const getAccount = async () => {
    const Token = Cookies.get("Token");
    let res;
    if(Token){
        let options = {
            url: (BACKEND_URL + "/profile/getAccount"),
            method: "POST",
            data: qs.stringify({id: Token}),
            headers : {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
        
        await axios(options)
            .then((response) => {
                let {
                    Data
                } = response.data
                if(Data){
                    res = Data;
                }else{
                    res = "Account doesn't exist."
                }
            }).catch((err) =>{
                res= "Something went wrong."
            })
        }else{
            res = null;
        }
    return res;
}

export const dashboard = async () => {
    const Token = Cookies.get("Token");
    let res;
    if(Token){
        let options = {
            url: (BACKEND_URL + "/dashboard/getPerformance"),
            method: "POST",
            data: qs.stringify({id: Token}),
            headers : {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
        
        await axios(options)
            .then((response) => {
                let {
                    Data
                } = response.data
                if(Data){
                    res = Data;
                }else{
                    res = "Empty"
                }
            }).catch((err) =>{
                res= "Something went wrong."
            })
    } else {
            res = null;
        }
    return res;
}