import React,{Component} from "react";
import {Button, Card, CardFooter, CardHeader, PaginationItem, Table} from "reactstrap";
import {Loading} from "../UI/LoadingComponent";
import TeacherForm from "./TeacherForm";

class Teacher extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const teacher = this.props.teachers.map((teacher)=>{
            return(

                <tbody>
                    <tr key={teacher.id}>
                        <td>{teacher.name}</td>
                        <td>{teacher.weekly_expected_hours}</td>
                        <td>{teacher.work_base}</td>
                        <td>
                            <Button className="btn-outline-info mr-1">View</Button>
                            <Button className="btn-outline-warning mr-1">Edit</Button>
                            <Button className="btn-outline-danger">Delete</Button>
                        </td>
                    </tr>
                </tbody>
            )
        })

        if(this.props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            )
        }else if(this.props.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            )
        }else {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <Card>
                                <CardHeader className="border-0">
                                        <h3 className="mb-0 d-flex justify-content-between align-items-center">Teachers Table
                                            <TeacherForm postTeacher={this.props.postTeacher}/>
                                        </h3>

                                </CardHeader>
                                    <Table className="align-items-center" responsive>
                                        <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Expected Work Hours(weekly)</th>
                                            <th scope="col">Work Base</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                        </thead>
                                        {teacher}
                                    </Table>
                            </Card>
                    </div>
                    </div>
                </div>
            );
        }
    }

}
export default Teacher;