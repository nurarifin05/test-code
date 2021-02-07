import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin'

const LocationsEdit = (props) => {
    return(
        <Edit title='Edit a User' {...props}>
            <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='id_location' />
                <TextInput source='name' />
                <TextInput source='description' />
                <TextInput source='Id_Account' />
            </SimpleForm>
        </Edit>
    )
}

export default LocationsEdit