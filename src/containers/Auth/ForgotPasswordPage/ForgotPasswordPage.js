import React, { Component } from 'react';
import { Transition } from 'semantic-ui-react';

import ForgetPassword from '../../../components/Auth/ForgetPassword/ForgetPassword';
import { semanticUITransitionOptionsMap } from '../../../constants/SemanticsUI';

class ForgotPasswordPage extends Component {

  state = {
    progress: false,
    visible: false,
    animation: semanticUITransitionOptionsMap.fadeUp,
  };

  componentDidMount() {
    this.showComponent();
  }

  /**
   * Shows the forgot password component
   */
  showComponent = () => {

    setTimeout(() => {
      this.setState((prevState) => ({ visible: !prevState.visible}));
    }, 50);
  }

  /**
   * Hides the forgot password component
   */
  hideComponent = () => {
    
    this.setState((prevState) => ({ 
      visible: !prevState.visible, 
      animation: semanticUITransitionOptionsMap.fadeDown
    }));
  }

  /**
   * Forgot password click event handler.
   * 
   * @param {string} userId  
   */
  forgotPasswordHandler = (userId) => {
    
    // TODO: Implement forgot password
  } 

  render () {
    
    return (
      <Transition visible={this.state.visible} animation={this.state.animation} duration={400}>
        <div>
          <ForgetPassword 
            {...this.props}
            onSubmit={this.forgotPasswordHandler}
            progress={this.state.progress}
            />
        </div>
      </Transition>
    );
  }
}

export default ForgotPasswordPage;