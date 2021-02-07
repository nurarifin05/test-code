import React from 'react'
import {Create, SimpleForm, TextInput,DateTimeInput} from 'react-admin'

const TransactionReceiveCreate = (props) => {
    return(
        <Create title='Create a Post' {...props}>
            <SimpleForm>
            <TextInput source='id' />
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
        </Create>
    )
}

export default TransactionReceiveCreate