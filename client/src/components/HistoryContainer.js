import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import WorkoutHistory from "./WorkoutHistory";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HistoryContainer() {
  return (
    <div className="historyContainerDiv">
      <Container>
        <Row>
          <Col xs={6}>
            <Card body className="historyContainer" border="secondary">
              <WorkoutHistory />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HistoryContainer;
