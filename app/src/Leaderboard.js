import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Table } from 'react-bootstrap';

import CustomNavbar from './CustomNavbar';

export default class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.sortByPast30 = this.sortByPast30.bind(this);
    this.sortByAllTime = this.sortByAllTime.bind(this);
  }

  sortByPast30(e) {
    this.props.onSortByPast30(e);
  }

  sortByAllTime(e) {
    this.props.onSortByAllTime(e);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <Panel header='Leaderboard'>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Camper Name</th>
                    <th onClick={this.sortByPast30}>
                        Points in past 30 Days
                    </th>
                    <th onClick={this.sortByAllTime}>
                        All time points
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.data}
                </tbody>
              </Table>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}
