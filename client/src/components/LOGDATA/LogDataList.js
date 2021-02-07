import React from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin'

const LogDataList = (props) => {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='tag_number' />
                <TextField source='timestamp' />
                <TextField source='Device_ID' />
                <TextField source='id_Account' />
                <TextField source='id_location' />
                <TextField source='Inventory_trx_type' />
                <EditButton basePath='/Log_Data' />
                <DeleteButton basePath='/Log_Data' />
            </Datagrid>
        </List>
    )
}
export default LogDataList