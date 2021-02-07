import React from 'react'
import {Create, SimpleForm, TextInput} from 'react-admin'

const LogDataCreate = (props) => {
    return(
        <Create title='Create a Post' {...props}>
            <SimpleForm>
                <TextInput source='id' />
                <TextInput source='tag_number' />
                <TextInput source='timestamp' />
                <TextInput source='Device_ID' />
                <TextInput source='id_Account' />
                <TextInput source='id_location' />
                <TextInput source='Inventory_trx_type' />

            </SimpleForm>
        </Create>
    )
}

export default LogDataCreate