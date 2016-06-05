import React, { Component } from 'react';
import _ from 'lodash';

export default class Part extends Component {
  getItem() {
    return this.props[this.props.part];
  }

  render() {
    var isSelected = this.props.selectedPart == this.props.part ? 'item-selected' : '';
    let item = this.getItem();
    if (item) {
      var itemClass = `collage-item collage-item-filled module ${isSelected}`;

      return (
        <div className={itemClass} style={{ backgroundImage: `url("${item.imageUrl}")` }} onClick={() => this.props.selectPart(this.props.part) }>
        </div>
      );
    } else {
      var itemClass = `collage-item module box-${this.props.part} ${isSelected}`;

      return (
        <div className={itemClass} onClick={() => this.props.selectPart(this.props.part) }>
          {this.props.part}
        </div>
      );
    }
  }
}
