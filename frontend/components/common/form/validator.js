export const Validator = (type, name, value) => {
    let flag = false;
    switch(type) {
        case "url":
            let url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
            if(url.test(value)){
                flag = true
            }
          break;
        case "email":
            let email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(email.test(value)){
                flag = true;
            }
            break;
        case "tel":
            let tel = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
            if(tel.test(value)){
                flag = true;
            }
            break;
        case "password":
            flag=true
            break;
        case "number":
            let reg = /^\d+$/;
            if(reg.test(value)){
                flag = true;
            }
        default:
            let re = /[@_!#$%^&*()<>?/\|}{~:]/g;
            if(!re.test(value)){
                flag = true;
            }
      }
      return flag;
}