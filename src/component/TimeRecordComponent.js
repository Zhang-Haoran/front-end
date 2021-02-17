import React, {Component} from "react";
import {Loading} from "./LoadingComponent";
import {Table} from "reactstrap";

class TimeRecord extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        const timeRecord = this.props.timeRecords.map((timeRecord)=>{
            return(
                <tbody>
                <tr key={timeRecord.id}>
                    <td>{timeRecord.startTime}</td>
                    <td>{timeRecord.endTime}</td>
                    <td>{timeRecord.batch_id}</td>
                    <td>{timeRecord.teacher}</td>
                    <td>{timeRecord.teacher_name}</td>
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
                            <div className="col-12">
                                <h3>TimeRecords Table</h3>
                            </div>
                            <div className="row">
                                <Table>
                                    <thead>
                                    <tr>
                                        <th>Start Time</th>
                                        <th>End Time</th>
                                        <th>Batch Id</th>
                                        <th>Teacher Id</th>
                                        <th>Teacher Name</th>
                                    </tr>
                                    </thead>
                                    {timeRecord}
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

}
export default TimeRecord;