import React, { Component } from 'react';
import _ from 'lodash';

export default class SearchItem extends Component {
  render() {
    return (
      <div className='col-xs-4' onClick={() => this.props.selectItem(this.props.item)}>
        <div className="module img-box">
          <img className="img-responsive" src={this.props.item.imageUrl}/>
        </div>
      </div>
    );
  }
}
