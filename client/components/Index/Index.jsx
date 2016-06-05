import React, { Component } from 'react';
import _ from 'lodash';

import Collage from 'components/Collage/Collage';
import Search from 'components/Search/Search';

class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPart: null,
      top: null,
      skirt: null,
      shoes: null,
    }
  }

  selectPart(part) {
    this.setState({ selectedPart: part });
  }

  selectItem(item) {
    var newState = _.cloneDeep(this.state);
    newState[this.state.selectedPart] = item;
    newState.selectedPart = null;
    this.setState(newState);
  }

  render() {
    // if (this.props.items.length === 0) {
    //   return (
    //     <p ref="empty">Index is empty.</p>
    //   );
    // }

    return (
      <section className=''>
        <Collage
          {...this.state}
          selectPart={(part) => this.selectPart(part)}
        />
        <Search
          {...this.state}
          selectItem={(item) => this.selectItem(item)}/>
      </section>
    );
  }
}
        // <h2>react-webpack-boilerplate HAHA</h2>
        // {this.props.color}
        // <ul ref="indexList" className="index-list">
        //   {_.map(this.props.items, (item, index) => {
        //     return (<li key={index}>item {item}</li>);
        //   })}
        // </ul>

export default IndexComponent;
