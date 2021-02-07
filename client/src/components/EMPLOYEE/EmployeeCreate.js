import React from 'react'
import {Create, SimpleForm, TextInput,DateInput} from 'react-admin'

const EmployeeCreate = (props) => {
    return(
        <Create title='Create a Post' {...props}>
            <SimpleForm>
                <TextInput source='id' />
                <TextInput label="EMP_ID" source='Emp_id' />
                <TextInput source='Emp_code' />
                <TextInput source='Name' />
                <DateInput label="Tanggal Lahir" source='Birthdate' />
                <TextInput source='Gender' />
                <TextInput source='Age' />
                <TextInput source='tag_number' />
                <TextInput source='id_Account' />

            </SimpleForm>
        </Create>
    )
}

export default EmployeeCreate