import React from 'react'
import {Create, SimpleForm, TextInput} from 'react-admin'

const TagsCreate = (props) => {
    return(
        <Create title='Create a Post' {...props}>
            <SimpleForm>
                <TextInput source='id' />
                <TextInput source='tag_number' />
                <TextInput source='description' />
                <TextInput source='asignt type' />
                <TextInput source='asignment' />
                <TextInput source='id_Account' />

            </SimpleForm>
        </Create>
    )
}

export default TagsCreate