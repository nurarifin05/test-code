import React from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin'

const ModulList = (props) => {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='Id_modul' />
                <TextField source='Name' />
                <TextField source='Description' />
                <EditButton basePath='/Modul' />
                <DeleteButton basePath='/Modul' />
            </Datagrid>
        </List>
    )
}
export default ModulList