import React, {Component} from "react";
import {Loading} from "../UI/LoadingComponent";
import {Button, Card, CardHeader, Input, Label, Table} from "reactstrap";

class CourseTable extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const course = this.props.timeRecords.map((course)=>{
            return(
                <tbody>

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