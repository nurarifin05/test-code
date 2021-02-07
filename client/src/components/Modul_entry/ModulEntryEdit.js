import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin'

const ModulEntryEdit = (props) => {
    return(
        <Edit title='Edit a User' {...props}>
            <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='id_modul_entri' />
                <TextInput source='Name' />
                <TextInput source='Description' />
                <TextInput source='Id_modul' />
            </SimpleForm>
        </Edit>
    )
}

export default ModulEntryEdit