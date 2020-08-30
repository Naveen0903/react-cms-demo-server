import { Form } from "react-bootstrap";
import Popup from "../../../components/common/popup/popup";


const AddClientForm = ({text, name, type, placeholder, required, handleChange, actions}) => {
    let {
        showMsg,
        nameValid,
        errCls,
        msg
    }= actions
    return(
        <Form.Group controlId={name}>
            <Form.Label>{text}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} name={name} required={required} onChange={handleChange}/>
            {showMsg && (nameValid==name) && <div className={errCls} role="alert">{msg}</div>}
        </Form.Group>
    );
}

const ClientForm = ({showPopup=false, clientInfo=[], handleChange, popupAction, showMsg, errCls, msg, handleClose, handleSubmit, nameValid=""}) =>{

    return(
        <>
        {
            showPopup && <Popup 
                            popupTitle="Add a client"
                            popupBody={
                                <Form>
                                {clientInfo.map((field, inx)=>{
                                    let {
                                        text,
                                        name,
                                        type,
                                        placeholder,
                                        required
                                    }=field;
                                    return(
                                        <AddClientForm 
                                            key={`${inx}_client`}
                                            text={text} 
                                            name={name}
                                            type={type}
                                            placeholder={placeholder}
                                            required={required}
                                            handleChange={handleChange}
                                            actions = {popupAction}
                                            />
                                    )}
                                )}
                                {showMsg && (nameValid=="submit") && <div className={errCls} role="alert">{msg}</div>}
                                </Form>
                            }
                            showPopup={showPopup}
                            handleClose={handleClose}
                            handleSubmit={handleSubmit}
                            />
        }
    </>
    )
}

export default ClientForm;