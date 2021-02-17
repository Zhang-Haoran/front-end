import React, {Component} from "react";
import {Loading} from "./LoadingComponent";
import {Card, CardHeader, Table} from "reactstrap";

class TimeRecord extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        const timeRecord = this.props.timeRecords.map((timeRecord)=>{
            return(
                <tbody>
                    <tr key={timeRecord.id}>
                        <td>{timeRecord.teacher_name}</td>
                        <td>{timeRecord.startTime}</td>
                        <td>{timeRecord.endTime}</td>
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
                        <h4>{this.props.timeRecords.errMess}</h4>
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
                                    <h3 className="mb-0">Time Record Table</h3>
                                </CardHeader>
                                <Table className="align-items-center" responsive>
                                    <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Teacher Name</th>
                                        <th scope="col">Start Time</th>
                                        <th scope="col">End Time</th>
                                    </tr>
                                    </thead>
                                    {timeRecord}
                                </Table>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        }
    }

}
export default TimeRecord;