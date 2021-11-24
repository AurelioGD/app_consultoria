import React from 'react'
import { Button } from "primereact/button"
import { useNavigate } from 'react-router'
import "./Choice.css"

const styleButtons = {
    width:"20rem", 
    height:"10rem",
    fontSize:"1.5rem",
    margin:"0 0 1rem 0"
}


const Choice = () => {
    const navigator = useNavigate()

    const handlerTeachersButton = () => {
        navigator("/teachers")
    }
    const handlerStudentsButton = () => {
        navigator("/groups")
    }


    return (
        <div className="ChoiceContainer p-d-flex p-flex-column p-ai-center p-jc-center">
            <Button onClick={handlerTeachersButton} label="Maestros" style={styleButtons}/>
            <Button onClick={handlerStudentsButton} label="Alumnos" style={styleButtons}/>
        </div>
    )
}

export default Choice
