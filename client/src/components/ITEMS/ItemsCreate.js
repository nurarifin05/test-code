import React from 'react'
import {Create, SimpleForm, TextInput,DateInput} from 'react-admin'

const ItemsCreate = (props) => {
    return(
        <Create title='Create a Post' {...props}>
            <SimpleForm>
            <TextInput source='id' />
                <TextInput label="Item_id" source='Item_id' />
                <TextInput source='Item_code' />
                <TextInput source='Item_category' />
                <TextInput source='Item_Type' />
                <TextInput source='SKU' />
                <TextInput source='Name' />
                <TextInput source='Decription' />
                <TextInput source='Uom' />
                <TextInput source='Quantity' />
                <TextInput source='tag_number' />
                <TextInput source='id_Account' />

            </SimpleForm>
        </Create>
    )
}

export default ItemsCreate