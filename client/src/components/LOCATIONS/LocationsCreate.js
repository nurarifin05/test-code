import React from 'react'
import {Create, SimpleForm, TextInput} from 'react-admin'

const LocationsCreate = (props) => {
    return(
        <Create title='Create a Post' {...props}>
            <SimpleForm>
                <TextInput source='id' />
                <TextInput source='id_location' />
                <TextInput source='name' />
                <TextInput source='description' />
                <TextInput source='Id_Account' />
                
                
            </SimpleForm>
        </Create>
    )
}

export default LocationsCreate