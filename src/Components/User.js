const User = (props) => {
  return(
    <div className="userContainer">
      <h2>Name : {props.name}</h2>
      <h3>Location : {props.location}</h3>
      <h4>email : vlnikitha2006@gmail.com</h4>
    </div>
  )
}

export default User;