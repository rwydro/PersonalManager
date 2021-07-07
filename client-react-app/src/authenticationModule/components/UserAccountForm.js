import React, {useState,useRef} from 'react';
import {createIssueDto} from "api/issueModuleDtos";
import Button from "react-bootstrap/cjs/Button";
import InputGroup from "react-bootstrap/cjs/InputGroup";
import FormControl from "react-bootstrap/cjs/FormControl";
import Form from "react-bootstrap/cjs/Form";
import Collapse from "react-bootstrap/cjs/Collapse";

const UserAccountForm = ({children, click}) => {
    const [validated, setValidated] = useState(false);
    const [inputValues, setInputValues] = useState({});
    const [isAdminMode, seAdminMode] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (!form.checkValidity() || inputValues['r_password'] !==  inputValues['password'] ) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            click(inputValues)
        }
        setValidated(true);
    };

    const handleInputChange = (event) =>  {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if(name === 'admin_mode'){
            seAdminMode(value)
        }
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    return (
        <div className="d-flex align-items-center justify-content-center flex-column  w-100 p-5">
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="w-100">
            <InputGroup className="mb-3" hasValidation>
            <FormControl
                placeholder="Login"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                required
                onChange={handleInputChange}
                name="login"
            />
            <div className="invalid-feedback">
                Please enter the login.
            </div>
        </InputGroup>
            <InputGroup className="mb-3">
            <FormControl
                placeholder="Password"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                required
                onChange={handleInputChange}
                name="password"
                type="password"
            />
            <div className="invalid-feedback">
                Please enter the password.
            </div>
        </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Repeat password"
                    type="password"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    required
                    onChange={handleInputChange}
                    name="r_password"
                />
                <div className="invalid-feedback">
                    Please enter the password.
                </div>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Display name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    required
                    onChange={handleInputChange}
                    name="d_name"
                />
                <div className="invalid-feedback">
                    Please enter the display name.
                </div>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Email"
                    type="email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    required
                    onChange={handleInputChange}
                    name="email"
                />
                <div className="invalid-feedback">
                    Please enter the display email.
                </div>
            </InputGroup>
            {/*<Form.Group className="mb-3" id="formGridCheckbox" >*/}
            {/*    <Form.Check name="admin_mode" type="checkbox" label="Admin user" onChange={handleInputChange}/>*/}
            {/*</Form.Group>*/}
            {/*<Collapse in={isAdminMode}>*/}
            {/*    <InputGroup className="mb-3">*/}
            {/*        <FormControl*/}
            {/*            placeholder="Admin key"*/}
            {/*            aria-label="Recipient's username"*/}
            {/*            aria-describedby="basic-addon2"*/}
            {/*            required*/}
            {/*            onChange={handleInputChange}*/}
            {/*            name="admin_key"*/}
            {/*        />*/}
            {/*        <div className="invalid-feedback">*/}
            {/*            Please enter the display admin key.*/}
            {/*        </div>*/}
            {/*    </InputGroup>*/}
            {/*</Collapse>*/}
            {children}
        </Form>
        </div>
    )

};

export default UserAccountForm;