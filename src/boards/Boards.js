import React, { Component } from "react";
import ModalBoard from "../modal/ModalBoard";
import "./Boards.css";
import { Card, Typography } from "antd";
import { withRouter } from "react-router-dom";

const { Text } = Typography;

class Boards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      cards: []
    };
  }

  componentDidMount() {
    let cards = JSON.parse(localStorage.getItem("boards"));
    if (cards) this.setState({ cards });
  }

  changeVisible = async () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  handleOk = async data => {
    await this.setState({
      cards: [...this.state.cards, data],
      visible: false
    });
    localStorage.setItem("boards", JSON.stringify(this.state.cards));
    this.props.history.push("/board/" + data.title);
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { visible } = this.state;

    return (
      <div>
        <div className="boards">
          {this.state.cards.map(card => (
            <Card
              onClick={e => this.props.history.push("/board/" + card.title)}
              className="boards-child"
              style={{ width: "11rem" }}
            >
              <Text strong>{card.title}</Text>
            </Card>
          ))}

          <Card
            className="boards-child"
            onClick={this.changeVisible}
            style={{ width: "11rem" }}
          >
            <Text strong>Create new Board</Text>
          </Card>
        </div>
        <ModalBoard
          visible={visible}
          handleOk={data => this.handleOk(data)}
          handleCancel={() => this.handleCancel()}
        ></ModalBoard>
      </div>
    );
  }
}

export default withRouter(Boards);
