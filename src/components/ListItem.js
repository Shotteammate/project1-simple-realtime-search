import React, { Component } from 'react'

export class ListItem extends Component {
  render() {
    return (
      <li style={{fontSize: '18px'}}>
        {this.props.artist}
      </li>
    )
  }
}

export default ListItem
