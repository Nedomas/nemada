import React, { Component } from 'react';
import _ from 'lodash';
import 'whatwg-fetch';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: 'labas',
    }
  }

  changeSearch(e) {
    this.setState({ searchField: e.target.value });
  }

  search() {
    this.requestToBackend(this.state.searchField).then((result) => {
      this.setState({ items: result.items });
    });
  }

  requestToBackend(text) {
    return fetch('/users.json')
      .then(function(response) {
        return {
          items: [
            {
              imageUrl: 'http://www.glamorous.com/media/catalog/product//a/c/ac0176_bk_01.jpg',
              title: 'Black Crochet Bardot Crop Top',
              description: "Glamorous women's black crochet detail bardot crop top. Features bardot style, crochet material and button down fastening.Regular, cropped fit100% CottonLength: 26cmCrochet detailing is one of the biggest trends for the spring/summer season. Channel boho vibes and pair our black crochet bardot top with embroidered flares and wedges for a stylish day to night look or team with denim shorts and sandals for casual summer style.Â ",
              price: 23,
              affiliateLink: 'http://www.awin1.com/pclick.php?p=3546195677&a=264091&m=5741',
            },
            {
              imageUrl: 'http://www.glamorous.com/media/catalog/product//a/c/ac0176_bk_01.jpg',
              title: 'Black Crochet Bardot Crop Top',
              description: "Glamorous women's black crochet detail bardot crop top. Features bardot style, crochet material and button down fastening.Regular, cropped fit100% CottonLength: 26cmCrochet detailing is one of the biggest trends for the spring/summer season. Channel boho vibes and pair our black crochet bardot top with embroidered flares and wedges for a stylish day to night look or team with denim shorts and sandals for casual summer style.Â ",
              price: 23,
              affiliateLink: 'http://www.awin1.com/pclick.php?p=3546195677&a=264091&m=5741',
            },
          ],
        };
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <section className='col-xs-6'>
        <input value={this.state.searchField} onChange={(e) => this.changeSearch(e)}/>
        <button onClick={() => this.search()}>Search</button>

        {_.map(this.state.items, (item) => {
          return (
            <div>{item.title}</div>
          );
        })}
      </section>
    );
  }
}
