import React,{Component} from "react";
import {Table} from "reactstrap";
import {Loading} from "./LoadingComponent";

class Teacher extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const teacher = this.props.teachers.map((teacher)=>{
            return(
                <tbody>
                <tr key={teacher.foreign_teacher_id}>
                    <td>{teacher.foreign_teacher_name}</td>
                    <td>{teacher.weekly_expected_hours}</td>
                    <td>{teacher.start_time}</td>
                    <td>{teacher.end_time}</td>
                    <td>{teacher.work_base}</td>
                    <td>{teacher.gmt_modified}</td>
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
                        <h4>{this.props.teachers.errMess}</h4>
                    </div>
                </div>
            )
        }else {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3>Teacher Table</h3>
                            </div>
                            <div className="row">
                                <Table>
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Expected Work Hours(weekly)</th>
                                        <th>Start Time</th>
                                        <th>End Time</th>
                                        <th>Work Base</th>
                                        <th>Confirm Date</th>
                                    </tr>
                                    </thead>
                                    {teacher}
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

}
export default Teacher;