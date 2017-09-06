import React, { Component } from 'react';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import axios from 'axios';
import Avatar from 'react-avatar';

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
    axios.get(thirtyDaysURL)
      .then(res => {
        let num = 0;
        const data = res.data.map(obj => {
            num = num + 1;
            return (
              <tr key={obj.username}>
                <td>{num}</td>
                <td><Avatar size={50} src={obj.img} />  {obj.username}</td>
                <td>{obj.alltime}</td>
                <td>{obj.recent}</td>
              </tr>
            );
        });
        this.setState({ data });
      });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            <CustomNavbar name={'FreeCodeCamp Leaderboard'} />
          </Col>
        </Row>
        <Leaderboard
          data={this.state.data}
        />
      </Grid>
    );
  }
}
