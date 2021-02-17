import React,{Component} from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Teacher from "./TeacherComponent";
import {connect} from "react-redux";
import {fetchTeachers, fetchTimeRecords} from "../redux/ActionCreators";
import TimeRecord from "./TimeRecordComponent";

const mapStateToProps = state => {
    return{
        teachers: state.teachers,
        timeRecords: state.timeRecords
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchTeachers:()=>{dispatch(fetchTeachers())},
    fetchTimeRecords: ()=>{dispatch(fetchTimeRecords())}
})

class Main extends Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchTeachers();
        this.props.fetchTimeRecords();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/teacher" component={()=><Teacher
                        teachers={this.props.teachers.teachers}
                        isLoading={this.props.teachers.isLoading}
                        errMess={this.props.teachers.errMess}
                    />}/>
                    <Route path="/timeRecord" component={()=><TimeRecord
                        timeRecords={this.props.timeRecords.timeRecords}
                        isLoading={this.props.timeRecords.isLoading}
                        errMess={this.props.timeRecords.errMess}
                    />}/>
                    <Redirect to="/teacher"/>
                </Switch>
            </div>
        );
    }

}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));