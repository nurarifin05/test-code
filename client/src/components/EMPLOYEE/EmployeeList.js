import React from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton,DateField} from 'react-admin'

const EmployeeList = (props) => {
    return(
        <List {...props}>
            <Datagrid>
            <TextField source='id' />
                <TextField source='Emp_id' />
                <TextField source='Emp_code' />
                <TextField source='Name' />
                <DateField source='Birthdate' />
                <TextField source='Gender' />
                <TextField source='Age' />
                <TextField source='tag_number' />
                <TextField source='id_Account' />
                <EditButton basePath='/employee' />
                <DeleteButton basePath='/employee' />
            </Datagrid>
        </List>
    )
}
export default EmployeeList