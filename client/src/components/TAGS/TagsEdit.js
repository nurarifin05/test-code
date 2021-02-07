import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin'

const TagsEdit = (props) => {
    return(
        <Edit title='Edit a User' {...props}>
            <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='tag_number' />
                <TextInput source='description' />
                <TextInput source='asignt type' />
                <TextInput source='asignment' />
                <TextInput source='id_location' />
                <TextInput source='id_Account' />

            </SimpleForm>
        </Edit>
    )
}

export default TagsEdit