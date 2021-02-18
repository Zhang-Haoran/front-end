import React, {Component} from "react";
import {Loading} from "../UI/LoadingComponent";
import {Button, Card, CardHeader, Form, Input, Label, Table} from "reactstrap";

class TimeRecord extends Component{
    constructor(props) {
        super(props);
        this.state={
            nameFilter: "",
            startTimeFilter: "",
            endTimeFilter:""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    render() {
        const timeRecord = this.props.timeRecords.map((timeRecord)=>{
            return(
                <tbody>
                    <tr key={timeRecord.id}>
                        <td>{timeRecord.teacher_name}</td>
                        <td>{new Intl.DateTimeFormat('en-AU',{year:'numeric',month:'short',day:'2-digit',hour:'2-digit',minute:'2-digit'}).format(new Date(Date.parse(timeRecord.startTime)))}</td>
                        <td>{new Intl.DateTimeFormat('en-AU',{year:'numeric',month:'short',day:'2-digit',hour:'2-digit',minute:'2-digit'}).format(new Date(Date.parse(timeRecord.endTime)))}</td>
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
                                    <h3 className="mb-0">Time Record Table</h3>
                                    <div className="row">
                                        <div className="col-12">
                                            <Label htmlFor="nameFilter" md={2}>Name</Label>
                                        </div>
                                        <div className="col-12">
                                            <Input type="text" id="nameFilter" name="nameFilter" placeholder="Enter name" value={this.state.nameFilter} onChange={this.handleInputChange}/>
                                        </div>
                                        <div className="col-12">
                                            <Button>Filter</Button>
                                        </div>
                                    </div>


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