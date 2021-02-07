import React from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin'

const LocationsList = (props) => {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='id_location' />
                <TextField source='name' />
                <TextField source='description' />
                <TextField source='Id_Account' />
                <EditButton basePath='/Locations' />
                <DeleteButton basePath='/Locations' />
            </Datagrid>
        </List>
    )
}
export default LocationsList