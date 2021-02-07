import React from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin'

const TagsList = (props) => {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='tag_number' />
                <TextField source='description' />
                <TextField source='asignt type' />
                <TextField source='asignment' />
                <TextField source='id_Account' />
                <EditButton basePath='/Tags' />
                <DeleteButton basePath='/Tags' />
            </Datagrid>
        </List>
    )
}
export default TagsList