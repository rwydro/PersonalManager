import React, {useState,useRef} from 'react';
import Button from "react-bootstrap/cjs/Button";
import InputGroup from "react-bootstrap/cjs/InputGroup";
import FormControl from "react-bootstrap/cjs/FormControl";
import Form from "react-bootstrap/cjs/Form";


const IssueNavBar = ({createIssue, currentUser, users}) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [validated, setValidated] = useState(false);
    const [inputValues, setInputValues] = useState({});


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            setShow(!show);
            createIssue({...inputValues,accessToken: currentUser.accessToken});
        }

        setValidated(true);

    };

    const handleInputChange = (event) =>  {
        const target = event.target;

        const value = target.type === 'select-one' ? users.find(el=> el.displayName === target.value).userIdentifier : target.value;
        const name = target.name;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };


    const renderCreateIssueOverlay = () => {
        return(
            <div className="m-lg-4 position-absolute p-lg-3 " style={{background: "#495057", top: "7vh", width: "540px", zIndex: 10 }}>
                    <div className="d-flex align-items-center justify-content-center flex-column p-lg-3"  style={{background: "white"}}>
                        <h5>Issue creator</h5>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="w-100">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Tittle"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            required
                            onChange={handleInputChange}
                            name="tittle"
                        />
                        <div className="invalid-feedback">
                            Please enter the tittle.
                        </div>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Description"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            required
                            onChange={handleInputChange}
                            name="description"
                        />
                        <div className="invalid-feedback">
                            Please enter description.
                        </div>
                    </InputGroup>
                    <InputGroup className="mb-3" hasValidation>
                        <FormControl
                            as="select"
                            placeholder="AssignedUser"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            id="validationServer03"
                            className="form-control is-invalid"
                            required
                            onChange={handleInputChange}
                            name="assignedUser"
                            size="sm"
                        >
                            {users.map(el =>
                                <option key={el.userIdentifier}>
                                    {el.displayName}
                            </option>)}
                        </FormControl>
                        <div className="invalid-feedback">
                            Please provide a valid user.
                        </div>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Dead line</Form.Label>
                            <FormControl
                                type="date"
                                placeholder="DeadLine"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                required
                                onChange={handleInputChange}
                                name="deadLine"
                            />
                            <div className="invalid-feedback">
                                Please provide a valid date.
                            </div>
                        </Form.Group>
                    </InputGroup>
                        <Button className="btn btn-primary" type="submit">Create issue</Button>
                    </Form>
                </div>
            </div>
        )
    }

    return(
      <>
              <div className="d-flex justify-content-end w-100">
                  {
                      show ? renderCreateIssueOverlay() : null
                  }
                  <Button class="position-relative" variant="outline-info" onClick={() => setShow(!show)}>Create issue</Button>
              </div>
        {/*<Button onClick={()=> props.createIssue()}>*/}

        {/*</Button>*/}
      </>
  )
};

export default IssueNavBar;