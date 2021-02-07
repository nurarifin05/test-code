import React from 'react'
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton} from 'react-admin'

const AccountsList = (props) => {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='id_Account' />
                <TextField source='name' />
                <TextField source='description' />
                <TextField source='email' />
                <TextField source='telepon' />
                <TextField source='status' />
                <DateField label='Publish' source='register_date' />
                <DateField label='Publish' source='expired_date' />
                <TextField source='clean_data' />
                <TextField source='Modul_Name' />
                <EditButton basePath='/Account' />
                <DeleteButton basePath='/Account' />
            </Datagrid>
        </List>
    )
}
export default AccountsList