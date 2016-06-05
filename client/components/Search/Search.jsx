import React, { Component } from 'react';
import _ from 'lodash';
import 'whatwg-fetch';

import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';

import SearchItem from 'components/SearchItem/SearchItem';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
    }
  }

  changeSearch(e) {
    this.setState({ searchField: e.target.value });
  }

  search() {
    var client = algoliasearch('UEUR0SJM1R', '34444257c29a257d876c94f369f49fcc');
    var helper = algoliasearchHelper(client, 'nemada');

    helper.on('result', (content) => {
      const result = _.map(content.hits, (item) => {
        return {
         imageUrl: item['merchant_image_url'],
         title: item['product_name'],
         description: item['description'],
         price: item['display_price'],
         affiliateLink: item['_highlightResult']['aw_deep_link']['value']
        };
      });
      // debugger;
      // console.log(content);

      this.setState({ items: result });
    });

    // helper.on('error', function(content) {
    //   debugger;
    // });

    // debugger;
    helper.setQuery(this.state.searchField).search();

    // this.requestToBackend(this.state.searchField).then((result) => {
    //   this.setState({ items: result.items });
    // });
  }

  urlWithParams(urlString, params={}) {
    var url = new URL(urlString);
    var searchParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      searchParams.append(key, params[key]);
    });
    url.search = searchParams.toString();
    return url.toString();
  }

  requestToBackend(text) {
    return fetch(this.urlWithParams('http://backenderis.96.lt/api.php', { query: text }))
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        return json;
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
    if (!this.props.selectedPart) {
      return (<div/>);
    }

    return (
      <div className='search-box'>
        <div className='logo-container'>
          IFITYOU,
          <br/>
          BABE
        </div>

        <div className='question'>
          Find you {this.props.selectedPart}
        </div>

        <div className='search-container row'>
          <input className='col-xs-12 search-field' placeholder='Search for an item...' className='search-input col-xs-8' value={this.state.searchField} onChange={(e) => this.changeSearch(e)}/>
          <button className='search-button col-xs-12' onClick={() => this.search()}>Find it</button>
        </div>
            {_.map(this.state.items, (item) => {
              return (
                <figure key={item.title} className="effect">
                  <SearchItem {...this.props} item={item} />
                  <figcaption>
                  <p>Price: {item.price}</p>
                  </figcaption>
                </figure>
              );
            })}
      </div>
    );
  }
}
