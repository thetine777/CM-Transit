import React, { Component } from "react";
import { toast } from 'react-toastify';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import * as firebase from 'firebase'
import Card from "components/Card/Card.jsx";
import { NavLink, Redirect } from "react-router-dom";
import Button from "components/CustomButton/CustomButton.jsx";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardHidden: true,
      email: '',
      password: '',
      user_error: ''
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      this.props.history.push('/admin/callcenter')
      // return <Redirect to='/admin/calcenter' />
    }).catch((error) => {
      if (error) {
        this.setState({
          user_error: '*** อีเมลหรือรหัสผ่านไม่ถูกต้อง'

        });
      }
    });
  }
  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ cardHidden: false });
      }.bind(this),
      700
    );
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col md={4} sm={6} mdOffset={4} smOffset={3}>
            <form>
              <Card
                hidden={this.state.cardHidden}
                textCenter
                title="Login"
                content={
                  <div>
                    <small className="text-danger"> {this.state.user_error}</small>
                    <FormGroup>
                      <ControlLabel>Email address</ControlLabel>
                      <FormControl placeholder="Enter email" type="email" name='email' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Password</ControlLabel>
                      <FormControl placeholder="Password" type="password" name='password' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Checkbox number="1" label="Subscribe to newsletter" />
                    </FormGroup>
                  </div>
                }
                legend={
                  <NavLink to={"/admin/callcenter"}>
                    <Button
                      bsStyle="info"
                      fill
                      wd
                      onClick={this.login}
                      type='submit'>
                      Login
                  </Button>
                  </NavLink>
                }
                ftTextCenter
              />
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default LoginPage;
