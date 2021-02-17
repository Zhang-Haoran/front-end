import React,{Component} from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Course from "./CourseComponent";
import Teacher from "./TeacherComponent";
import {connect} from "react-redux";
import {fetchTeachers} from "../redux/ActionCreators";

const mapStateToProps = state => {
    return{
        teachers: state.teachers,
        courses: state.courses
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchTeachers:()=>{dispatch(fetchTeachers())}
})

class Main extends Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchTeachers();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/course" component={()=><Course courses={this.props.courses}/>}/>
                    <Route path="/teacher" component={()=><Teacher
                        teachers={this.props.teachers.teachers}
                        isLoading={this.props.teachers.isLoading}
                        errMess={this.props.teachers.errMess}
                    />}/>
                    <Redirect to="/course"/>
                </Switch>
            </div>
        );
    }

}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));