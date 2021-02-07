import React from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin'

const ModulEntryList = (props) => {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='id_modul_entri' />
                <TextField source='Name' />
                <TextField source='Description' />
                <TextField source='Id_modul' />
                <EditButton basePath='/Modul_entri' />
                <DeleteButton basePath='/Modul_entri' />
            </Datagrid>
        </List>
    )
}
export default ModulEntryList