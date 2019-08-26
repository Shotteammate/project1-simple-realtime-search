import React, { Component } from 'react'
import ListItem from './ListItem';

export class DataList extends Component {

  render() {
    let list = [];

    this.props.data.forEach((item, index) => {
      // indexOf search case is case-sensitive
      if (item.indexOf(this.props.title) !== -1) {
        list.push(<ListItem key={index} artist={item} />);
      }
    });

    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default DataList
