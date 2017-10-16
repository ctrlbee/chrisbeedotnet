import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionGetNewsSources } from '../actions/index';
import NewsSourceComponent from '../components/newsSource';
import { BrowserRouter } from 'react-router-dom';

class ContainerNewsSources extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNewsSources();
  }

  renderSources() {
    return this.props.newsSources.map((source) => {
      return (
        <NewsSourceComponent source={source} key={source.name} />
      )
    })
  }

  render() {
    return (
      <div>
          {this.renderSources()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getNewsSources: actionGetNewsSources}, dispatch)
}

function mapStateToProps(state) {
  return {
    newsSources: state.newsSources
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerNewsSources);
