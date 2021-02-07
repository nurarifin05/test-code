import React from 'react'
import {Edit, SimpleForm, TextInput,DateInput} from 'react-admin'

const TransactionReceiveEdit = (props) => {
    return(
        <Edit title='Edit a User' {...props}>
            <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput label="Item_id" source='Device_ID' />
                <TextInput source='id_Account' />
                <TextInput source='id_location' />
                <TextInput source='item_id' />
                <TextInput source='UoM' />
                <TextInput source='Quantity' />
                <TextInput source='Line_number' />
                <TextInput source='Rack_number' />
                <TextInput source='Bin_number' />
                <TextInput source='Time_Enter' />
                <TextInput source='status' />

            </SimpleForm>
        </Edit>
    )
}

export default TransactionReceiveEdit