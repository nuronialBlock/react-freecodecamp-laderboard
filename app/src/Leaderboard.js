import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Table } from 'react-bootstrap';

import CustomNavbar from './CustomNavbar';

export default class Leaderboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <Panel header='Leaderboard'>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Camper Name</th>
                    <th>Points in past 30 Days</th>
                    <th>All time points</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.value}
                </tbody>

              </Table>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}
