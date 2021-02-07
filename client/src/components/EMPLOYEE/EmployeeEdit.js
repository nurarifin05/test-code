import React from 'react'
import {Edit, SimpleForm, TextInput,DateInput} from 'react-admin'

const EmployeeEdit = (props) => {
    return(
        <Edit title='Edit a User' {...props}>
            <SimpleForm>
            <TextInput disabled source='id' />
                <TextInput label="EMP_ID" source='Emp_id' />
                <TextInput source='Emp_code' />
                <TextInput source='Name' />
                <DateInput label="Tanggal Lahir" source='Birthdate' />
                <TextInput source='Gender' />
                <TextInput source='Age' />
                <TextInput source='tag_number' />
                <TextInput source='id_Account' />

            </SimpleForm>
        </Edit>
    )
}

export default EmployeeEdit