import React from 'react'
import {Create, SimpleForm, TextInput} from 'react-admin'

const ModulEntryCreate = (props) => {
    return(
        <Create title='Create a Post' {...props}>
            <SimpleForm>
                <TextInput source='id' />
                <TextInput source='id_modul_entri' />
                <TextInput source='Name' />
                <TextInput source='Description' />
                <TextInput source='Id_modul' />
                
                
            </SimpleForm>
        </Create>
    )
}

export default ModulEntryCreate