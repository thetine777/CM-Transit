import React, { Component } from "react";
import {
  Grid,
  Col,
  Row
} from "react-bootstrap";
import styled from "styled-components"

export const UserCardStyled = styled.div.attrs({

})`
  .Row_style {
    font-weight: 200;
    font-size: 17px;
  }  
`
export class UserCard extends Component {
  render() {
    const {
      idcard,
      status,
      carid,
      type,
      fast,
      latitude,
      longitude,
      station,
      estimate
    } = this.props
    return (
      <UserCardStyled>
        <div className="card card-user">
          <div className="image">
            {/* <img src={this.props.bgImage} alt="..." /> */}
          </div>
          <div className="content">
            <div className="author">
              <a href="#pablo">
                <img
                  className="avatar border-gray"
                  src={this.props.avatar}
                  alt="..."
                />
                <h4 className="title">
                  {this.props.name}
                  <br />
                  <small>{this.props.userName}</small>
                </h4>
              </a>
            </div>
            <p className="description text-center">{this.props.description}</p>
            <Row className="Row_style">
              <Col xs={6} sm={6}>
                ID Card :
            </Col>
              <Col xs={6} sm={6}>
                {idcard}
            </Col>
            </Row>
            <Row className="Row_style">
              <Col xs={6} sm={6}>
                Status :
            </Col>
              <Col xs={6} sm={6}>
                {status}
            </Col>
            </Row>
            <Row className="Row_style">
              <Col xs={6} sm={6}>
                Car ID :
            </Col>
              <Col xs={6} sm={6}>
                {carid}
            </Col>
            </Row>
            <Row className="Row_style">
              <Col xs={6} sm={6}>
                Type :
            </Col>
              <Col xs={6} sm={6}>
                {type}
            </Col>
            </Row>
            <Row className="Row_style">
              <Col xs={6} sm={6}>
                Fast :
            </Col>
              <Col xs={6} sm={6}>
                {fast}
            </Col>
            </Row>
            <Row className="Row_style">
              <Col xs={6} sm={6}>
                Latitude :
            </Col>
              <Col xs={6} sm={6}>
                {latitude}
            </Col>
            </Row>
            <Row className="Row_style">
              <Col xs={6} sm={6}>
                Longitude :
            </Col>
              <Col xs={6} sm={6}>
                {longitude}
            </Col>
            </Row>
            <Row className="Row_style">
              <Col xs={6} sm={6}>
                Next Station :
            </Col>
              <Col xs={6} sm={6}>
                {station}
            </Col>
            </Row>
            <Row className="Row_style">
              <Col xs={6} sm={6}>
                Estimate Time :
            </Col>
              <Col xs={6} sm={6}>
                {estimate}
            </Col>
            </Row>
          </div>
          <hr />
          <div className="text-center">{this.props.socials}</div>
        </div>
      </UserCardStyled>
    );
  }
}

export default UserCard;
