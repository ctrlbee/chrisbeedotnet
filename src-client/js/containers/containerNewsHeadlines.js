import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionGetNewsHeadlines } from '../actions/index';
import Article from '../components/article';

class ContainerNewsHeadlines extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNewsHeadlines(this.props.match.params.newsid);
  }

  renderHeadlines() {
    if(!this.props.headlines.articles) {
     return null;
    }

    return this.props.headlines.articles.map((article) => {
      return (
          <Article article={article} key={article.title} />
        )
    })
  }

  render() {
    return (
      <div>
          <h2>Headlines</h2>
          {this.renderHeadlines()}
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({getNewsHeadlines: actionGetNewsHeadlines}, dispatch)
}

function mapStateToProps (state) {
  return {
    headlines: state.headlines
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerNewsHeadlines);
