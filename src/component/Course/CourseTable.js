import React, { Component } from "react";
import { Loading } from "../UI/LoadingComponent";
import { Card, CardHeader, Input, Table } from "reactstrap";
import checkTimeRange from "../../utils/checkTimeRange";
import processData from "../../utils/processData";

class CourseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeFilter: "",
      dateFilter: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(date, startTime, endTime) {
    const paramDate = date.replaceAll("/", "-");
    const parameterList = [{ name: "date", value: paramDate }];

    processData(
      process.env.REACT_APP_URL + "/timerecords",
      "get",
      parameterList
    ).then((response) => {
      response.forEach((course) => {
        checkTimeRange(startTime, course.startTime, course.endTime) &&
          checkTimeRange(endTime, course.startTime, course.endTime) &&
          console.log(course);
      });
    });
    //console.log(date, startTime, endTime);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.errMess}</h4>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="container">
            <div className="row">
              <Card>
                <CardHeader className="border-0">
                  <h3 className="mb-0">Course Table</h3>
                  <div className="row">
                    <div className="col-12">
                      <Input
                        type="text"
                        id="timeFilter"
                        name="timeFilter"
                        placeholder="Enter time"
                        value={this.state.timeFilter}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col-12">
                      <Input
                        type="text"
                        id="dateFilter"
                        name="dateFilter"
                        placeholder="Enter date"
                        value={this.state.dateFilter}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
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
                  {this.props.courses.map((course) => {
                    if (
                      (checkTimeRange(
                        this.state.timeFilter,
                        course.startTime,
                        course.endTime
                      ) ||
                        this.state.timeFilter === "") &&
                      (course.date === this.state.dateFilter ||
                        this.state.dateFilter === "")
                    ) {
                      return (
                        <tbody>
                          <tr
                            onClick={() =>
                              this.handleOnClick(
                                course.date,
                                course.startTime,
                                course.endTime
                              )
                            }
                          >
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
                      );
                    } else {
                      return null;
                    }
                  })}
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
