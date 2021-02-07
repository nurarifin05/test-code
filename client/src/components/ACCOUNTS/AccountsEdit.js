import React from 'react'
import {Edit, SimpleForm, TextInput,DateInput} from 'react-admin'

const AccountsEdit = (props) => {
    return(
        <Edit title='Edit a User' {...props}>
            <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='id_Account' />
                <TextInput source='name' />
                <TextInput source='description' />
                <TextInput source='email' />
                <TextInput source='telepon' />
                <TextInput source='status' />
                <DateInput label='Publish' source='register_date' />
                <DateInput label='Publish' source='expired_date' />
                <TextInput source='clean_data' />
                <TextInput source='Modul_Name' />
                
            </SimpleForm>
        </Edit>
    )
}

export default AccountsEdit