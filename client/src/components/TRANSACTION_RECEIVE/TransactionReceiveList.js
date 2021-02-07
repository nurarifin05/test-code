import React from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin'

const TransactionReceiveList = (props) => {
    return(
        <List {...props}>
            <Datagrid>
            <TextField source='id' />
                <TextField source='Device_ID' />
                <TextField source='id_Account' />
                <TextField source='id_location' />
                <TextField source='item_id' />
                <TextField source='UoM' />
                <TextField source='Quantity' />
                <TextField source='Line_number' />
                <TextField source='Rack_number' />
                <TextField source='Bin_number' />
                <TextField source='Time_Enter' />
                <TextField source='status' />
                <EditButton basePath='/Transaction_Receive' />
                <DeleteButton basePath='/Transaction_Receive' />
                </Datagrid>
        </List>
    )
}
export default TransactionReceiveList