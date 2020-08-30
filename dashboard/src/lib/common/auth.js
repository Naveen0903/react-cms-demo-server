
import Cookies from "js-cookie";
import history from "./hist";

export const Logout = () => {
    const Token = Cookies.get("Token");
    console.log(Token);
    if(Token){
        Cookies.remove('Token');
        history.push("/");
        window.location.reload();
    }
}

export const withAuth = (view) => {
    const Token = Cookies.get("Token");
    if(Token){
        return view;
    }else{
        history.push("/");
        // window.location.reload();                                 
    }
}