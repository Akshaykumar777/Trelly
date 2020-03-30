import React, { Component } from "react";
import { Modal, Button, Input } from "antd";
import "./ModalBoard.css";

export default class ModalBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleOk = () => {
    this.props.handleOk({ title: this.state.title });
  };

  render() {
    return (
      <Modal
        visible={this.props.visible}
        onCancel={() => this.props.handleCancel()}
        footer={[
          <Button
            disabled={this.state.title === ""}
            type="primary"
            onClick={() => this.handleOk()}
          >
            Create Board
          </Button>
        ]}
      >
        <Input
          className="title"
          type="text"
          value={this.state.title}
          placeholder="Add board title"
          name="title"
          onChange={this.handleChange}
        ></Input>
      </Modal>
    );
  }
}
