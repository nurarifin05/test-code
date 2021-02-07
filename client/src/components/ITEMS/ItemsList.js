import React from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton,DateField} from 'react-admin'

const ItemsList = (props) => {
    return(
        <List {...props}>
            <Datagrid>
            <TextField source='id' />
                <TextField source='Item_id' />
                <TextField source='Item_code' />
                <TextField source='Item_category' />
                <TextField source='Item_Type' />
                <TextField source='SKU' />
                <TextField source='Name' />
                <TextField source='Decription' />
                <TextField source='Uom' />
                <TextField source='Quantity' />
                <TextField source='tag_number' />
                <TextField source='id_Account' />
                <EditButton basePath='/items' />
                <DeleteButton basePath='/items' />
                </Datagrid>
        </List>
    )
}
export default ItemsList