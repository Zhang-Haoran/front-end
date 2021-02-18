import React,{Component} from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Teacher from "./Teacher/TeacherComponent";
import {connect} from "react-redux";
import {fetchTeachers, fetchTimeRecords, postTeacher} from "../redux/ActionCreators";
import TimeRecord from "./TimeRecord/TimeRecordComponent";
import Header from "./UI/HeaderComponent";
import Footer from "./UI/FooterComponent";

const mapStateToProps = state => {
    return{
        teachers: state.teachers,
        timeRecords: state.timeRecords
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchTeachers:()=>{dispatch(fetchTeachers())},
    fetchTimeRecords: ()=>{dispatch(fetchTimeRecords())},
    postTeacher:(teacherId,teacherName,expectedWorkHours,workBase)=>dispatch(postTeacher(teacherId,teacherName,expectedWorkHours,workBase))
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
                <Header/>
                <Switch>
                    <Route path="/teacher" component={()=><Teacher
                        teachers={this.props.teachers.teachers}
                        isLoading={this.props.teachers.isLoading}
                        errMess={this.props.teachers.errMess}
                        postTeacher = {this.props.postTeacher}
                    />}/>
                    <Route path="/timeRecord" component={()=><TimeRecord
                        timeRecords={this.props.timeRecords.timeRecords}
                        isLoading={this.props.timeRecords.isLoading}
                        errMess={this.props.timeRecords.errMess}
                    />}/>
                    <Redirect to="/teacher"/>
                </Switch>
                <Footer/>
            </div>
        );
    }

}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));