import React from 'react'
import {Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import DeviceUnknownIcon from '@material-ui/icons/DeviceUnknown'
import akun from '@material-ui/icons/SupervisorAccount'
import modul from '@material-ui/icons/ViewModule';
import entry from '@material-ui/icons/AssignmentReturned'
import lokasi from '@material-ui/icons/LocationOn';
import reader from '@material-ui/icons/Fingerprint';
import tag from '@material-ui/icons/Label';
import logdata from '@material-ui/icons/Storage'
import employeeicon from '@material-ui/icons/SupervisorAccountOutlined';
import authProvider from './components/LOGIN/authProvider'
import Dashboard from './components/DASHBOARD/Dashboard'

import PostList from './components/POST/PostList'
import PostCreate from './components/POST/PostCreate'
import PostEdit from './components/POST/PostEdit'

import AccountsList from './components/ACCOUNTS/AccountsList'
import AccountsCreate from './components/ACCOUNTS/AccountsCreate'
import AccountsEdit from './components/ACCOUNTS/AccountsEdit'

import ModulList from './components/MODUL/ModulList'
import ModulCreate from './components/MODUL/ModulCreate'
import ModulEdit from './components/MODUL/ModulEdit'

import ModulEntryList from './components/Modul_entry/ModulEntryList'
import ModulEntryCreate from './components/Modul_entry/ModulEntryCreate'
import ModulEntryEdit from './components/Modul_entry/ModulEntryEdit'

import LocationsList from './components/LOCATIONS/LocationsList'
import LocationsCreate from './components/LOCATIONS/LocationsCreate'
import LocationsEdit from './components/LOCATIONS/LocationsEdit'

import ReadersList from './components/READERS/ReadersList'
import ReadersCreate from './components/READERS/ReadersCreate'
import ReadersEdit from './components/READERS/ReadersEdit'

import TagsList from './components/TAGS/TagsList'
import TagsCreate from './components/TAGS/TagsCreate'
import TagsEdit from './components/TAGS/TagsEdit'

import LogDataList from './components/LOGDATA/LogDataList'
import LogDataCreate from './components/LOGDATA/LogDataCreate'
import LogDataEdit from './components/LOGDATA/LogDataEdit'

import EmployeeList from './components/EMPLOYEE/EmployeeList'
import EmployeeCreate from './components/EMPLOYEE/EmployeeCreate'
import EmployeeEdit from './components/EMPLOYEE/EmployeeEdit'

import UserList from './components/USER/UserList'
import UserCreate from './components/USER/UserCreate'
import UserEdit from './components/USER/UserEdit'

import ItemsList from './components/ITEMS/ItemsList'
import ItemsCreate from './components/ITEMS/ItemsCreate'
import ItemsEdit from './components/ITEMS/ItemsEdit'

import TransactionReceiveList from './components/TRANSACTION_RECEIVE/TransactionReceiveList'
import TransactionReceiveCreate from './components/TRANSACTION_RECEIVE/TransactionReceiveCreate'
import TransactionReceiveEdit from './components/TRANSACTION_RECEIVE/TransactionReceiveEdit'


function App() {
  return <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={restProvider('http://localhost:3000')}>
    <Resource 
    name='posts' 
    list={PostList} 
    create={PostCreate} 
    edit={PostEdit} 
    icon={DeviceUnknownIcon}
    />
        <Resource 
    name='Account' 
    list={AccountsList} 
    create={AccountsCreate} 
    edit={AccountsEdit} 
    icon={akun}
    />
    <Resource 
    name='Modul' 
    list={ModulList} 
    create={ModulCreate} 
    edit={ModulEdit} 
    icon= {modul}
    />
    <Resource 
    name='Modul_entri' 
    list={ModulEntryList} 
    create={ModulEntryCreate} 
    edit={ModulEntryEdit} 
    icon={entry}
    />
    <Resource 
    name='Locations' 
    list={LocationsList} 
    create={LocationsCreate} 
    edit={LocationsEdit} 
    icon={lokasi}
    />
    <Resource 
    name='Readers' 
    list={ReadersList} 
    create={ReadersCreate} 
    edit={ReadersEdit} 
    icon={reader}
    />
    <Resource 
    name='Tags' 
    list={TagsList} 
    create={TagsCreate} 
    edit={TagsEdit} 
    icon={tag}
    />
     <Resource 
    name='Log_Data' 
    list={LogDataList} 
    create={LogDataCreate} 
    edit={LogDataEdit} 
    icon={logdata}
    />
    <Resource 
    name='users' 
    list={UserList} 
    create={UserCreate} 
    edit={UserEdit} 
    
    />
    <Resource 
    name='employee' 
    list={EmployeeList} 
    create={EmployeeCreate} 
    edit={EmployeeEdit} 
    icon={employeeicon}
    />
    <Resource 
    name='items' 
    list={ItemsList} 
    create={ItemsCreate} 
    edit={ItemsEdit} 
    icon={employeeicon}
    />
    <Resource 
    name='Transaction_Receive' 
    list={TransactionReceiveList} 
    create={TransactionReceiveCreate} 
    edit={TransactionReceiveEdit} 
    icon={employeeicon}
    />
  </Admin>
}

export default App;