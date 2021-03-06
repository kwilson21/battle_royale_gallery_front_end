import React, { Component } from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import arrayBufferToBase64 from "../utilities/imgDecoder";

class GameCard extends Component {
  state = {
    img: null
  };

  static getDerivedStateFromProps(props, state) {
    if (props.gameImg !== null) {
      let base64Flag = "data:" + props.gameImgType + ";base64,";
      let imageStr = arrayBufferToBase64(props.gameImg.data);

      return { img: base64Flag + imageStr };
    }
  }

  render() {
    return (
      <Grid.Column
        width="5"
        style={{
          minWidth: "367px",
          paddingRight: '75px',
          paddingLeft: '75px',
          marginLeft: "-60px",
          marginRight: "-60px"
        }}
      >
        <Card
          as={Link}
          raised
          centered
          color="red"
          onClick={() =>
            this.props.addToNavBar(
              `/game/${this.props.gameId}`,
              this.props.name
            )
          }
          to={{
            pathname: `/game/${this.props.gameId}`
          }}
        >
          <Image src={this.state.img} />
          <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
          </Card.Content>
          <Card.Content textAlign="right" extra>
            <Icon name="thumbs up" />
            {this.props.likes !== undefined ? this.props.likes : null} &nbsp;
            <Icon name="thumbs down" />
            {this.props.dislikes !== undefined ? this.props.dislikes : null}
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default GameCard;
