import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const a = [
    {
        name:"Hila",
        username:"hilary"
    },
    {
        name:"Aurelio",
        username:"AurelioGD"
    }
]

const Students = () => {
    return (
        <div>
            <div className="card">
                <DataTable value={a} responsiveLayout="scroll">
                    <Column field="name" header="Name"></Column>
                    <Column field="username" header="Username"></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default Students
