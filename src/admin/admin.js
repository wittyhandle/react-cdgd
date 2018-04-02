import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Grid, Jumbotron } from 'react-bootstrap';
import AdminWorks from '../components/admin/works';

const Admin = ({ match }) => (
    <Jumbotron>
      <Grid>
        <h1>Admin</h1>
        <p><Link to={`${match.url}/works`}>Works</Link></p>
      </Grid>

      <Route exact path={`${match.path}/works`} component={AdminWorks} />
    </Jumbotron>
);

export default Admin;
