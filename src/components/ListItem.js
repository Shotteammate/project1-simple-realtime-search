import React, { Component } from 'react'

export class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.artist}
      </li>
    )
  }
}

export default ListItem
