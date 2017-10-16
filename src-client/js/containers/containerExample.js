import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionGetExample } from '../actions/index';
import ExampleComponent from '../components/componentExample';
import { BrowserRouter } from 'react-router-dom';

class ContainerNewsSources extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getExampleData();
  }

  renderSources() {
    return this.props.newsSources.map((source) => {
      return (
        <ExampleComponent source={source} key={source.name} />
      )
    })
  }

  render() {
    return (
      <div>
          <h2>The News Sources</h2>
          {this.renderSources()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getExampleData: actionGetExample}, dispatch)
}

function mapStateToProps(state) {
  return {
    newsSources: state.exampleData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerNewsSources);
