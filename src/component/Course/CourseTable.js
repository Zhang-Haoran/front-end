import React, {Component} from "react";
import {Loading} from "../UI/LoadingComponent";
import {Card, CardHeader, Table} from "reactstrap";

class CourseTable extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const course = this.props.courses.map((course)=>{
            return(
                <tbody>
                    <tr>
                        <td>{course.id}</td>
                        <td>{course.date}</td>
                        <td>{course.startTime}</td>
                        <td>{course.endTime}</td>
                        <td>{course.special}</td>
                        <td>{course.uniform}</td>
                        <td>{course.studio}</td>
                        <td>{course.topic}</td>
                        <td>{course.teacher}</td>
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
                                    <h3 className="mb-0">Course Table</h3>
                                </CardHeader>
                                <Table className="align-items-center" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Start Time</th>
                                            <th scope="col">End Time</th>
                                            <th scope="col">Special</th>
                                            <th scope="col">Uniform</th>
                                            <th scope="col">Studio</th>
                                            <th scope="col">Topic</th>
                                            <th scope="col">Teacher</th>
                                        </tr>
                                    </thead>
                                    {course}
                                </Table>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        }
    }

}
export default CourseTable;