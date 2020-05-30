import React from 'react';

import RaisedButton from '../../../components/UI/Buttons/RaisedButton/RaisedButton';
import classes from './LoginPage.module.scss';

export default (props) => {
  
  return (
    <div className={classes.LoginPage}>
      Login works

      <br />
      <br />
      
      <RaisedButton type="button" title="Click to login" color="accent">
        Click me {/* <i className="fa fa-users"></i> */}
      </RaisedButton>
      <br />
      <br />
      
      <RaisedButton type="button" title="Click to login" color="warn">
        Click me {/* <i className="fa fa-users"></i> */}
      </RaisedButton>
      <br />
      <br />
      
      <RaisedButton type="button" title="Click to login" color="primary">
        Click me {/* <i className="fa fa-users"></i> */}
      </RaisedButton>
    </div>
  );
}
