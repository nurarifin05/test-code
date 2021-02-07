import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin'

const ModulEdit = (props) => {
    return(
        <Edit title='Edit a User' {...props}>
            <SimpleForm>
            <TextInput source='id' />
            <TextInput source='Id_modul' />
            <TextInput source='Name' />
            <TextInput source='Description' />
            </SimpleForm>
        </Edit>
    )
}

export default ModulEdit