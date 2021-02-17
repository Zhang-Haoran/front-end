import React, {Component} from "react";
import {Button, Col, Label, Modal, ModalBody, ModalHeader, Row} from "reactstrap";
import {Control, Form,Errors} from "react-redux-form";

const required = (val)=> val && val.length;
const isNumber = (val) => !isNaN(Number(val));

class TeacherForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            teacherName:"",
            expectedWorkHours: "",
            workBase: "Home",
            touched:{
                teacherName:false,
                expectedWorkHours: false,
                workBase: false
            }

        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values){
        alert('Current State is: ' + JSON.stringify(values));
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal} color="success">
                    <span className="fa fa-pencil fa-lg"/> Add Teacher
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add Teacher</ModalHeader>
                    <ModalBody>
                        <Form model="addTeacher" onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="teacherName" md={12}>Teacher Name</Label>
                                <Col md={12}>
                                    <Control.text className="form-control"
                                                  model=".teacherName"
                                                  id="teacherName"
                                                  name="teacherName"
                                                  placeholder="Teacher Name"
                                                  validators={{required}}>
                                    </Control.text>
                                    <Errors className="text-danger" model=".teacherName" show="touched" messages={{
                                        required: "* Required"
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="expectedWorkHours" md={12}>Expected Work Hours</Label>
                                <Col md={12}>
                                    <Control.text className="form-control"
                                                  model=".expectedWorkHours"
                                                  id="expectedWorkHours"
                                                  name="expectedWorkHours"
                                                  placeholder="Expected Work Hours"
                                                  validators={{isNumber}}>
                                    </Control.text>
                                    <Errors className="text-danger" model=".expectedWorkHours" show="touched" messages={{
                                        isNumber: "Must be a number"
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="workBase" md={12}>Work Base</Label>
                                <Col md={12}>
                                    <Control.select className="form-control" model=".workBase" name="workBase">
                                        <option>Home</option>
                                        <option>Onsite</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default TeacherForm;