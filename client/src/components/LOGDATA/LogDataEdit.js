import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin'

const LogDataEdit = (props) => {
    return(
        <Edit title='Edit a User' {...props}>
            <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='tag_number' />
                <TextInput source='timestamp' />
                <TextInput source='Device_ID' />
                <TextInput source='id_Account' />
                <TextInput source='id_location' />
                <TextInput source='Inventory_trx_type' />

            </SimpleForm>
        </Edit>
    )
}

export default LogDataEdit