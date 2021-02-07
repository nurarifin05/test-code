import React from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin'

const ReadersList = (props) => {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='name' />
                <TextField source='description' />
                <TextField source='Device_ID' />
                <TextField source='id_Account' />
                <TextField source='id_location' />
                <TextField source='Inventory_trx_type' />
                <EditButton basePath='/Readers' />
                <DeleteButton basePath='/Readers' />
            </Datagrid>
        </List>
    )
}
export default ReadersList