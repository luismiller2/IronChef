import React from "react";


const TextInput = (props) => {


    return(
        <div>
            <form>
                <label>{props.name}</label>
                <input onChange={props.action} name={props.name} value={props.value}/>
            </form>


        </div>
    )
}

export default TextInput;
