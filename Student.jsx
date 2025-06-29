import PropTypes from "prop-types"
function Student (props){

return (
<div className="student">
    <p>Your Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>Student {props.isStudent ? "yes" : "no"}</p>
</div>

)

}
Student.PropTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool,
}
export default Student
// we dont have proptypes in node modules