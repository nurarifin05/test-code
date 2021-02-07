import React from 'react'
import {Create, SimpleForm, TextInput,DateInput} from 'react-admin'

const AccountsCreate = (props) => {
    return(
        <Create title='Create a Post' {...props}>
            <SimpleForm>
                <TextInput source='id_Account' />
                <TextInput source='name' />
                <TextInput source='description' />
                <TextInput source='email' />
                <TextInput source='telepon' />
                <TextInput source='status' />
                <DateInput label='Register' source='register_date' />
                <DateInput label='Expired' source='expired_date' />
                <TextInput source='clean_data' />
                <TextInput source='Modul_Name' />
                
            </SimpleForm>
        </Create>
    )
}

export default AccountsCreate