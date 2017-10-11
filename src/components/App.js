import React from 'react';

import UserList from '../containers/UserList';
import UserDetails from '../containers/UserDetails';

import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const App = () => (
    <div>
        <h3>User List</h3>
        <UserList />
        <hr />
        <h3>User Details</h3>
        <UserDetails />
    </div>
);

export default App;
