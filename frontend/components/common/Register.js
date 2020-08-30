import {Form, Button} from "react-bootstrap";
import {register} from "./form/formelements";
import "../../styles/forms.scss";

const RegisterForm = ({handleChange, handleSubmit, actions}) => {
    return (
        <Form>
            {
                register.map((field, inx)=>{
                    let {
                        text,
                        type,
                        name,
                        placeholder,
                        required
                    } = field;

                    let{
                        nameValid,
                        showMsg,
                        errCls,
                        msg
                    } = actions;

                    return(
                        <Form.Group key={`Register_${inx}`} controlId={name}>
                            <Form.Label>{text}</Form.Label>
                            <Form.Control type={type} placeholder={placeholder} name={name} required={required} onChange={handleChange} className={(showMsg && (nameValid==name))?"border-danger":""}/>
                            {showMsg && (nameValid==name) && <div className={errCls} role="alert">{msg}</div>}
                        </Form.Group>
                        );
                    }
                )
            }
            <label>By creating an account you agree to our<a href="#"> Terms &amp; Privacy.</a>
            </label> <br />
            <div className="text-center">
                {actions.showMsg && (actions.nameValid=="submit") && <div className={actions.errCls} role="alert">{actions.msg}</div>}
                <Button variant="primary" type="submit" onClick={handleSubmit} >
                    Register
                </Button>
            </div>
        </Form>
        );
    }

export default RegisterForm;