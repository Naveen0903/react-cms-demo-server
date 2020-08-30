import React, { useState, useEffect } from "react";
import "../../../styles/tools/clients.scss";
import Navbar from "../../../components/common/Navbar";
import Layout from "../../../components/sections/Layout";
import Sidebar from "../../../components/common/sidebar/sidebar";
import { Form, Button, FormControl, Container, Row} from "react-bootstrap";
import { clientInfo } from "../../../components/common/form/formelements";
import {Validator} from '../../../components/common/form/validator';
import { addClient, getClients } from "../../../components/common/API/client/client";
import ClientForm from "./clientForm";
import ShowClients from "./showClients"

const ERROR_MSG_MAP = {
    text: 'Special characters Not allowed',
    email: 'invalid email format',
    tel: 'Invalid mobile number',
    url: 'Invalid url format',
    password: '(Minimum 8 characters)'
  };

const ClientsTools = () => {
    const [popupAction, setPopup] = useState({
        showPopup: false,
        nameValid:"",
        errCls: "",
        showMsg: "",
        msg: "",
        formData: {},
        clients: [],
        view: false
    });

    let {
        showPopup,
        showMsg,
        msg,
        nameValid,
        errCls,
        clients
    } = popupAction;


    const handleClick = e => {
        let popupValues = {...popupAction};
        popupValues["showPopup"] = true;
        setPopup(popupValues);
    }

    const handleClose = () => {
        let popupValues = {...popupAction};
        popupValues["showPopup"] = false;
        setPopup(popupValues);
    }

    const handleChange = event =>{
        let {type, name, value} = event.target;
        let popupValues = {...popupAction};
    
        popupValues["nameValid"]= name
        popupValues["errCls"] = "text-danger";
        popupValues["showMsg"]= false;
    
        if(value){
          if(Validator(type, name, value)) {
            popupValues["formData"][name] = value;
          }else{
            popupValues["showMsg"]= true;
            popupValues["msg"] = ERROR_MSG_MAP[type];
          }
        }else{
          popupValues["showMsg"]= true;
          popupValues["msg"] = "Field cannot be empty!";
        }
        setPopup(popupValues);
      }

    const handleSubmit = async e => {
        e.preventDefault();
        let popupValues = {...popupAction};
        let {formData} = popupValues ;
        let {
            company,
            companyURL,
            email,
            mobile,
            name,
            role
        } = formData;

        if(company && companyURL && email && mobile && name && role){
            let res = await addClient(formData);
            if(res){
                
                popupValues["showPopup"] = false;
            }else{
                
                popupValues["nameValid"]= "submit"
                popupValues["errCls"] = "text-danger";
                popupValues["showMsg"]= true;
                popupValues["msg"] = "Something went wrong!";
            }
        }else{
            popupValues["nameValid"]= "submit"
            popupValues["errCls"] = "text-danger";
            popupValues["showMsg"]= true;
            popupValues["msg"] = "Fields cannot be empty";

        }
        popupValues["clients"] = await getClients();
        setPopup(popupValues);
    }

    const getClient = async () => {
        let actionValues = {...popupAction};
        actionValues["clients"] = await getClients();
        setPopup(actionValues);
    }

    useEffect(() =>{
        getClient()
    }, []);

    return(
        <>
            <Navbar pageFrom="home"/>
            <Layout>
            <div id="viewport">
                <Sidebar itemName={["Add client", "Remove client"]} iconName={["zmdi zmdi-account-add","zmdi zmdi-minus-circle-outline"]} handleChange={[handleClick,()=>{alert("empty")}]} />
                    <ClientForm 
                        showPopup= {showPopup} 
                        clientInfo= {clientInfo}
                        handleChange= {handleChange}
                        popupAction= {popupAction}
                        showPopup= {showPopup}
                        errCls= {errCls}
                        msg= {msg}
                        handleClose= {handleClose}
                        handleSubmit= {handleSubmit}
                        nameValid= {nameValid}
                        showMsg= {showMsg} />
                    <div id="content">
                        <div className="container-fluid">
                            <Form inline>
                                <FormControl type="text" placeholder="Client/ Company Name" className="mr-sm-2 w-75" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                            <Container>
                                <Row>
                                    {clients.map((data,inx)=>{
                                        return(
                                            <ShowClients key={`${data._id}${inx}${data.mobile}`} client={data} inx={inx}/>
                                            );
                                        })
                                    }
                                    
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );    
}

export default ClientsTools;