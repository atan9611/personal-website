const Snowflake = (props) => {
    return(
        <span className="Snowflake" id={`item${props.id}`} style={props.style}>*</span>

    )
 }

 export default Snowflake;