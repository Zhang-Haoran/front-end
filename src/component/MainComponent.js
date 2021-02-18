import React,{Component} from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Teacher from "./Teacher/TeacherTable";
import {connect} from "react-redux";
import {fetchCourses, fetchTeachers, fetchTimeRecords, postTeacher} from "../redux/ActionCreators";
import TimeRecord from "./TimeRecord/TimeRecordTable";
import Header from "./UI/HeaderComponent";
import Footer from "./UI/FooterComponent";
import CourseTable from "./Course/CourseTable";

const mapStateToProps = state => {
    return{
        teachers: state.teachers,
        timeRecords: state.timeRecords,
        courses: state.courses
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchTeachers:()=>{dispatch(fetchTeachers())},
    fetchTimeRecords: ()=>{dispatch(fetchTimeRecords())},
    postTeacher:(teacherId,teacherName,expectedWorkHours,workBase)=>dispatch(postTeacher(teacherId,teacherName,expectedWorkHours,workBase)),
    fetchCourses:()=>{dispatch(fetchCourses())}
})

class Main extends Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchTeachers();
        this.props.fetchTimeRecords();
        this.props.fetchCourses();
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
                    <Route path="/course" component={()=><CourseTable
                        courses = {this.props.courses.courses}
                        isLoading={this.props.courses.isLoading}
                        errMess={this.props.courses.errMess}
                    />}/>
                    <Redirect to="/teacher"/>
                </Switch>
                <Footer/>
            </div>
        );
    }

}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));