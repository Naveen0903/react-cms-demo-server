import {Nav} from "react-bootstrap";
import RegisterForm from './Register';

const loginSignup = () => {

  return(
  <Nav defaultActiveKey="/home" as="ul">
    <Nav.Item as="li">
      <Nav.Link href="/home">
        <RegisterForm />
      </Nav.Link>
    </Nav.Item>
  </Nav>
  );
}

export default loginSignup;