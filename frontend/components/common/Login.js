import React from "react";
import {Form, Button} from "react-bootstrap";
import {login} from "./form/formelements";

const Login = ({handleChange, handleSubmit, actions}) => {
    return(
    <Form>
        {
        login.map((field, inx)=>{
            let {
                text,
                type,
                name,
                placeholder,
                required
            } = field;

            return(
            <Form.Group key={`login_${inx}`} controlId={(name=="email")?"formBasicEmail":"formBasicPassword"}>
                <Form.Label>{text}</Form.Label>
                <Form.Control type={type} name={name} placeholder={placeholder} required={required} onChange={handleChange} />
            </Form.Group>);
            })
        }
    {/* <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
    </Form.Group> */}
    <div className="text-center">
    {actions.showMsg && (actions.nameValid=="login") && <div className={actions.errCls} role="alert">{actions.msg}</div>}
        <Button variant="primary" type="submit" onClick={handleSubmit} >
            Login
        </Button>
    </div>
    </Form>
    );
}

export default Login;