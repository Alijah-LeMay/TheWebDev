import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
// Redux
import { connect } from 'react-redux';
import { setCaptcha } from '../../../store/actions/captchaActions';

import { SET_CAPTCHA_RESET } from '../../../constants/captchaConstants';
import MyButton from '../Button';

const TEST_SITE_KEY = '6LfjTuAZAAAAAODtU1CfMXETuWYjrWks0atG91fv';
const DELAY = 1500;

class MyReCaptcha extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      callback: 'not fired',
      value: '[empty]',
      load: false,
      expired: 'false',
    };
    this._reCaptchaRef = React.createRef();
  }
  onSubmitWithReCAPTCHA = async (e) => {
    e.preventDefault();
    // const recaptchaValue = this._reCaptchaRef.current.getValue();
    // console.log(recaptchaValue);
    // this.setCap();
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
    console.log('didMount - reCaptcha Ref-', this._reCaptchaRef);
  }

  handleChange = (value) => {
    console.log('Captcha value:', value);
    // console.log(this.state);
    this.props.setCaptcha(this.state);

    // if value is null recaptcha expired
    if (value === null) this.setState({ expired: 'true' });
    this.props.setCaptcha(this.state);
  };
  setCap = () => {};
  asyncScriptOnLoad = () => {
    this.setState({ callback: 'called!' });
    console.log('scriptLoad - reCaptcha Ref-', this._reCaptchaRef);
  };

  render() {
    const { value, callback, load, expired } = this.state || {};
    return (
      <div>
        <form onSubmit={this.onSubmitWithReCAPTCHA}>
          {load && (
            <ReCAPTCHA
              style={{ display: 'inline-block' }}
              theme='dark'
              ref={this._reCaptchaRef}
              sitekey={TEST_SITE_KEY}
              onChange={this.handleChange}
              asyncScriptOnLoad={this.asyncScriptOnLoad}
            />
          )}
          <MyButton variant='submit' content='submit' />
        </form>
      </div>
    );
  }
}

export default connect(null, { setCaptcha })(MyReCaptcha);
