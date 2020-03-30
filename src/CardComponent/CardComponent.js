import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, Input, Button, Typography, Icon } from "antd";
import "./CardComponent.css";
import Text from "antd/lib/typography/Text";

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.match.params.name,
      lists: [{}]
    };
  }

  addList = index => {
    let { lists } = this.state;
    lists[index].title = lists[index].tempTitle;
    lists[index].items = [{}];
    delete lists[index].tempTitle;
    lists.push({});
    this.setState({ lists });
  };

  addItem = (index, itr) => {
    let { lists } = this.state;
    lists[index].items[itr].title = lists[index].items[itr].tempTitle;
    delete lists[index].items[itr].tempTitle;
    lists[index].items.push({});
    this.setState({ lists });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "green",
          height: "100vh",
          display: "flex",
          flexDirection: "row"
        }}
      >
        {this.state.lists.map((list, index) => (
          <div>
            {list.title ? (
              <Card style={{ width: "15rem", margin: "2%" }}>
                <Typography.Text strong>{list.title}</Typography.Text>
                {list.items.map((item, itr) => (
                  <div>
                    {item.title ? (
                      <div className="title">{item.title}</div>
                    ) : (
                      <div>
                        {item.addItem ? (
                          <div>
                            <Input
                              onChange={e => {
                                this.state.lists[index].items[itr].tempTitle =
                                  e.target.value;
                                this.setState(this.state.lists);
                              }}
                            />
                            <Button
                              onClick={e => {
                                this.addItem(index, itr);
                              }}
                            >
                              Add Item
                            </Button>
                          </div>
                        ) : (
                          <div
                            onClick={e => {
                              this.state.lists[index].items[itr].addItem = true;
                              this.setState({ lists: this.state.lists });
                            }}
                          >
                            <Icon type="plus" />
                            Add item
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </Card>
            ) : (
              <div style={{ width: "15rem" }}>
                {list.addTitle ? (
                  <div>
                    <Input
                      onChange={e => {
                        this.state.lists[index].tempTitle = e.target.value;
                        this.setState({
                          lists: this.state.lists
                        });
                      }}
                      placeholder="Enter Title"
                    />
                    <Button
                      onClick={e => this.addList(index)}
                      disabled={
                        !this.state.lists[index].tempTitle ||
                        this.state.lists[index].tempTitle === ""
                      }
                    >
                      Add
                    </Button>
                  </div>
                ) : (
                  <Card
                    style={{ width: "100%", cursor: "pointer", margin: "2%"  }}
                    onClick={e => {
                      this.state.lists[index].addTitle = true;
                      this.setState({ lists: this.state.lists });
                    }}
                  >
                    <Icon type="plus" /> &nbsp;
                    <Text>Add New List</Text>
                  </Card>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(CardComponent);
