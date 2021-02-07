import React from 'react'
import {Create, SimpleForm, TextInput} from 'react-admin'

const ModulCreate = (props) => {
    return(
        <Create title='Create a Post' {...props}>
            <SimpleForm>
            <TextInput source='id' />
            <TextInput source='Id_modul' />
            <TextInput source='Name' />
            <TextInput source='Description' />
            </SimpleForm>
        </Create>
    )
}

export default ModulCreate