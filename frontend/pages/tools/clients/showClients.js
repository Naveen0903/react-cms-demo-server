import React, {useState, useEffect} from "react";
import { Container, Image  ,Row, Col} from "react-bootstrap";
import ClientCard from "../../../components/tools/card";
import PopupLarge from "../../../components/common/popup/popuplarge";
import { deal, task, appointment } from "../../../components/common/form/formelements";
import "../../../styles/tools/sidebar.scss";
import Sidebar from "react-sidebar";
import ClientOptions from "./clientOptions";
import {
    addDeal,
    addTask,
    addAppointment,
    getDeals,
    getTasks,
    getSchedules
    }from "../../../components/common/API/client/management";

const ViewProfile = ({sidebar="",children=""}) =>{
    return(
        <Sidebar
            sidebar={sidebar}
            children={children}
            open={true}
            docked={true}
            styles={{sidebar:{background: "#f7f7f7","textAlign": "center","padding": "5px 50px"}}}
        >
        </Sidebar>
    )
}

const ShowClients = ({ client={}, inx}) => {
    let {
        _id,
        name,
        company,
        address,
        emailId,
        mobile
    } = client;

    const [showClientInfo, setClientInfo] = useState({
        showInfo: false,
        formData: {
            clientId: _id},
        startDate: "",
        errMsg:{
            dealMsg: "",
            taskMsg: "",
            appointmentMsg: ""
        },
        clientTags:{
            deals: [],
            tasks: [],
            schedules: []
        }
    });

    const handlepopup = () =>{
        let clientInfoValues = {...showClientInfo};
        clientInfoValues.showInfo = true;
        setClientInfo(clientInfoValues);
    }

    const handleChange = e => {
        let {name, value} = e.target;
        let clientInfoValues = {...showClientInfo};
        clientInfoValues["formData"][name] = value;
        setClientInfo(clientInfoValues);
    }

    const handleDate = (date,e) => {
        e.preventDefault();
        let clientInfoValues = {...showClientInfo};
        clientInfoValues["startDate"] = date;
        clientInfoValues["formData"]["deadline"] = date;
        setClientInfo(clientInfoValues);
    }

    const handleClose = () => {
        let clientInfoValues = {...showClientInfo};
        clientInfoValues.showInfo = false;
        setClientInfo(clientInfoValues);
    }

    const handleDeals = async e => {
        e.preventDefault();
        let dealValues = {...showClientInfo};
        let{
            formData
        } = dealValues
        if("dealValue" in formData && "tag" in formData && "deadline" in formData){
            if(formData.dealValue != "" && formData.tag != "" && formData.deadline != ""){
                dealValues.errMsg.dealMsg = await addDeal(dealValues.formData);
                if(dealValues.errMsg.dealMsg == 'Deal added'){
                    dealValues.formData = {clientId: _id};
                }
            }else {
                dealValues.errMsg.dealMsg = "Fields cannot be empty";
            }
        }else {
            dealValues.errMsg.dealMsg = "Fields cannot be empty";
        }
        setClientInfo(dealValues);
    }

    const handleTask = async e =>{
        e.preventDefault();
        let dealValues = {...showClientInfo};
        let{
            formData
        } = dealValues
        if("task" in formData && "tag" in formData && "deadline" in formData){
            if(formData.dealValue != "" && formData.tag != "" && formData.deadline != ""){
                dealValues.errMsg.taskMsg = await addTask(dealValues.formData);
                if(dealValues.errMsg.taskMsg == 'Task added'){
                    dealValues.formData = {clientId: _id};
                }
            }else {
                dealValues.errMsg.taskMsg = "Fields cannot be empty";
            }
        }else {
            dealValues.errMsg.taskMsg = "Fields cannot be empty";
        }
        setClientInfo(dealValues);
    }

    const handleAppointment = async e =>{
        e.preventDefault();
        let dealValues = {...showClientInfo};
        let{
            formData
        } = dealValues
        if("agenda" in formData && "tag" in formData && "deadline" in formData){
            if(formData.dealValue != "" && formData.tag != "" && formData.deadline != ""){
                dealValues.errMsg.appointmentMsg = await addAppointment(dealValues.formData);
                if(dealValues.errMsg.appointmentMsg == "Scheduled meeting."){
                    dealValues.formData = {clientId: _id};
                }
            }else {
                dealValues.errMsg.appointmentMsg = "Fields cannot be empty";
            }
        }else {
            dealValues.errMsg.appointmentMsg = "Fields cannot be empty";
        }
        setClientInfo(dealValues);
    }

    const getClientTags = async () => {
        let deals, tasks, schedules;
        let data = {clientId: _id}
        deals = await getDeals(data);
        tasks = await getTasks(data);
        schedules = await getSchedules(data);
        return {deals: deals, tasks: tasks, schedules: schedules}
    }

    useEffect(
        async ()=>{
        let clientValues = {...showClientInfo};
        clientValues.clientTags = await getClientTags();
        setClientInfo(clientValues);
    },[])

    let {
        showInfo,
        startDate,
        errMsg,
        clientTags
    } = showClientInfo;

    return(     
            <Col xs={4}>
                <ClientCard 
                    clientName={name} 
                    company={company} 
                    address={address} 
                    email={emailId}
                    contact={mobile}
                    redirect = {handlepopup}
                />
                {showInfo && <PopupLarge
                    lgShow={showInfo}
                    title="Client Profile"
                    handleClose = {handleClose}
                    body={<>
                            <Container>
                                <Row>
                                    <Col xs={6} md={4}>
                                        <ViewProfile
                                            sidebar={
                                                <>
                                                    <Image src="#" alt="Profile" className="profile-image" roundedCircle /><br />
                                                    <b>{name}</b>
                                                </>
                                                } 
                                            />
                                    </Col>
                                    <Col>
                                        <ClientOptions 
                                            key="1"
                                            btntxt="Add/View deals"
                                            fields={deal} 
                                            handleChange={handleChange}
                                            handleDate={handleDate}
                                            handleSubmit={handleDeals}
                                            errMsg={errMsg.dealMsg}
                                            startDate={startDate}
                                            mindate={new Date()}
                                            HEADER_OPTION="DEAL_HEADERS"
                                            getClientTags={clientTags.deals}
                                        />
                                        <ClientOptions 
                                            key="2"
                                            btntxt="Add/View task"
                                            fields={task}
                                            handleChange={handleChange}
                                            handleDate={handleDate}
                                            handleSubmit={handleTask}
                                            errMsg={errMsg.taskMsg}
                                            startDate={startDate}
                                            mindate={new Date()}
                                            HEADER_OPTION="TASK_HEADERS"
                                            getClientTags={clientTags.tasks}
                                        />
                                        <ClientOptions 
                                            key="3"
                                            btntxt="Schedule Appointment" 
                                            fields={appointment}
                                            handleChange={handleChange}
                                            handleDate={handleDate}
                                            handleSubmit={handleAppointment}
                                            errMsg={errMsg.appointmentMsg}
                                            showTimeInput={true}
                                            startDate={startDate}
                                            mindate={new Date()}
                                            HEADER_OPTION="APPOINTMENT_HEADERS"
                                            getClientTags={clientTags.schedules}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </>}
                    />}
            </Col>
        );
}

export default ShowClients;