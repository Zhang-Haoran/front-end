import React,{Component} from "react";
import {Card, CardFooter, CardHeader, PaginationItem, Table} from "reactstrap";
import {Loading} from "./LoadingComponent";

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
                            <Card>
                                <CardHeader className="border-0">
                                    <h3 className="mb-0">Teachers Table</h3>
                                </CardHeader>
                                    <Table className="align-items-center" responsive>
                                        <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Expected Work Hours(weekly)</th>
                                            <th scope="col">Work Base</th>
                                            <th scope="col">Confirm Date</th>
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