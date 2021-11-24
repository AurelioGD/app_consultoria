import React from 'react'
import { Button } from 'primereact/button'
const styleButtons = {
    width:"20rem", 
    height:"10rem",
    fontSize:"1.5rem",
    margin:"0 0 1rem 0"
}
const Groups = () => {
    return (
        <div className="ChoiceContainer p-d-flex p-flex-column p-ai-center p-jc-center">
            <Button label="102" style={styleButtons}/>
            <Button label="202" style={styleButtons}/>
            <Button label="302" style={styleButtons}/>
            <Button label="402" style={styleButtons}/>
            <Button label="502" style={styleButtons}/>
            <Button label="602" style={styleButtons}/>
        </div>
    )
}

export default Groups
