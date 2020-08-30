import {Form, Accordion, Card, Button, Table} from "react-bootstrap";
import DatePickerTool from "../../../components/common/datepicker";
import "../../../styles/forms.scss";

const HEADERS = {
    "":[],
    DEAL_HEADERS: ["Sl_no", "Date","Tag" ,"Value", "DeadLine", "Status"],
    TASK_HEADERS: ["Sl_no", "Date", "Tag", "Task", "Deadline"],
    APPOINTMENT_HEADERS: ["Sl_no", "Date", "Tag", "Agenda", "Scheduled Date"]
}

const dateFormat = (date) => {
    var x = new Date(date);
    var y = x.getFullYear().toString();
    var m = (x.getMonth() + 1).toString();
    var d = x.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    var yyyymmdd = d +"-" +m +"-" + y;
    return yyyymmdd;
}

const ClientOptions = ({btntxt="", value, disabled=false, startDate= new Date(), handleChange, handleSubmit, handleDate, fields=[], errMsg="", readonly, showDisabledMonthNavigation, mindate, HEADER_OPTION="", getClientTags=[]}) =>{

    let errCls =(errMsg == "Deal added")? "text-success": 
                (errMsg == "Task added")? "text-success":
                (errMsg == "Scheduled meeting") ?"text-success":"text-danger";

    return(
    <Accordion>
        <Card className="datepicker">
        <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
            {btntxt}
        </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
        <Card.Body>

        <Table responsive>
            <thead>
                <tr>
                    {
                        HEADERS[HEADER_OPTION].map((data)=>{
                            return(
                                <th>{data}</th>
                            );
                        })
                    }
                </tr>
            </thead>
            <tbody>
                    {
                        (HEADER_OPTION == "DEAL_HEADERS") && getClientTags.map((data, inx)=>{
                            let{
                                createdAt,
                                tag,
                                dealValue,
                                deadline
                            } = data;
                            return(
                                <>
                                    <tr>
                                        <td>{inx + 1}</td>
                                        <td>{dateFormat(createdAt)}</td>
                                        <td>{tag}</td>
                                        <td>{dealValue}</td>
                                        <td>{dateFormat(deadline)}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                    {
                        (HEADER_OPTION == "TASK_HEADERS") && getClientTags.map((data, inx)=>{
                            let{
                                createdAt,
                                tag,
                                taskDescription,
                                deadline
                            } = data;
                            return(
                                <>
                                    <tr>
                                        <td>{inx + 1}</td>
                                        <td>{dateFormat(createdAt)}</td>
                                        <td>{tag}</td>
                                        <td>{taskDescription}</td>
                                        <td>{dateFormat(deadline)}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                    {
                        (HEADER_OPTION == "APPOINTMENT_HEADERS") && getClientTags.map((data, inx)=>{
                            let{
                                createdAt,
                                tag,
                                agenda,
                                deadline
                            } = data;
                            return(
                                <>
                                    <tr>
                                        <td>{inx + 1}</td>
                                        <td>{dateFormat(createdAt)}</td>
                                        <td>{tag}</td>
                                        <td>{agenda}</td>
                                        <td>{dateFormat(deadline)}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                {/* <td>1</td>
                <td>29/03/2019</td>
                <td>10,000 rs</td>
                <td>10/06/2019</td>
                <td>Produce tubs.</td>
                <td>Active</td>
                <td>29</td> */}
                {/* {
                    tableDefination.map((data, inx)=>{
                        return null
                    })
                } */}
            </tbody>
        </Table><br />
        <Form>
            {
                fields.map((data, inx)=>{
                    let {
                        type,
                        name,
                        text,
                        required
                    } = data;
                if(type!="date"){
                    return(
                            <Form.Group key={inx} controlId="formBasicEmail">
                                <Form.Control type={type} placeholder={text} name={name} value={value} required={required} disabled={disabled} onChange={handleChange} />
                            </Form.Group>
                        );
                    }else{
                        return(
                            <Form.Group key={inx} controlId="formBasicEmail">
                                <DatePickerTool key={inx} name={name} required={required} value={value} disabled={disabled} startDate={startDate} handleChange={handleDate} readonly={readonly} showDisabledMonthNavigation={showDisabledMonthNavigation} mindate={mindate}/>
                            </Form.Group>
                        );
                    }
                })
            }
            <div className={errCls} role="alert">{errMsg}</div>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Add
            </Button>
        </Form>

        </Card.Body>
        </Accordion.Collapse>
        </Card>
    </Accordion>
    )
}

export default ClientOptions;