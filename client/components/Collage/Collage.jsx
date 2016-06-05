import React, { Component } from 'react';
import _ from 'lodash';

import Part from 'components/Part/Part';

export default class Collage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saved: null,
    }
  }

  save() {
    this.setState({ saved: true });
  }

  render() {
    if (this.props.selectedPart) {
      return (<div/>);
    }

    return (
      <section className='collage' id="box-collage">
        <div className='logo-container row'>
          <div className='logo-text col-xs-6 col-xs-offset-3'>
            IFITYOU,
            <br/>
            BABE
          </div>
        </div>

        <div className='question'>
          Choose a part of your outfit
        </div>

        <Part {...this.props} part='top'/>
        <Part {...this.props} part='skirt'/>
        <Part {...this.props} part='shoes'/>

        <div className='add-container'>
          <button className='add-to-blog' onClick={() => this.save()}>
            {this.state.saved ? 'Saved!' : 'Add to blog'}
          </button>
        </div>
      </section>
    );
  }
}
        // <div className='logo'/>
