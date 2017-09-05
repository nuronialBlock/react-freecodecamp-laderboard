import React, { Component } from 'react';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import axios from 'axios';

import Leaderboard from './Leaderboard';

const thirtyDaysURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const allTimeURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

export function CustomNavbar(props) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          {props.name}
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(res => {
        const data = res.data;
        const posts = res.data.map(obj => obj);
        this.setState({ data: posts});
      });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            <CustomNavbar name={'FreeCodeCamp Leaderboard'} />
            {this.state.data}
          </Col>
        </Row>
        <Leaderboard />
      </Grid>
    );
  }
}
