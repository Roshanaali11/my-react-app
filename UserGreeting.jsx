function UserGreeting(props){
if(props.isLoggedin){

    return <h2 className="welcome-message">Welcome {props.username}</h2>
}
else {
    return <h2>please log in continue</h2>
}
}
export default UserGreeting