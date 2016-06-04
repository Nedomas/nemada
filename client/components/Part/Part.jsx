import React, { Component } from 'react';
import _ from 'lodash';

export default class Part extends Component {
  getItem() {
    return this.props[this.props.part];
  }

  render() {
    let item = this.getItem();
    var look = `module box-${this.props.part}`;
    if (item) {
      return (
        <div className="module img-box" onClick={() => this.props.selectPart(this.props.part) }>
                <img className="img-responsive" src={item.imageUrl}/>
        </div>
      );
    } else {
      return (
        <div className={look} onClick={() => this.props.selectPart(this.props.part) }>
          {this.props.part}
        </div>
      );
    }
  }
}
