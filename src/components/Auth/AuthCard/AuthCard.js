import propTypes from 'prop-types';
import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

import classes from './AuthCard.module.scss';

/**
 * 
 * @param {{
 *  className: string;
 *  icon: import('semantic-ui-react/dist/commonjs/generic').SemanticICONS;
 *  iconSize: import('semantic-ui-react/dist/commonjs/elements/Icon/Icon').IconSizeProp,
 *  iconColor: import('semantic-ui-react/dist/commonjs/generic').SemanticCOLORS;
 *  headerTitle: string;
 * }} props 
 */
const AuthCard = props => {

  const propsClasses = props.className || '';

  return (
    <Card className={[classes.AuthCard, propsClasses].join(' ')}>
      <Card.Content>
        <div className={classes.HeaderIcon}>
          <Icon name={props.icon} size={props.iconSize} color={props.iconColor} />
        </div>

        <h2 className="mt-12 mb-28">{props.headerTitle}</h2>

        {props.children}

      </Card.Content>
    </Card>
  );
};


AuthCard.propTypes = {
  icon: propTypes.string,
  iconSize: propTypes.string,
  iconColor: propTypes.string,
  headerTitle: propTypes.string,
};

export default AuthCard;