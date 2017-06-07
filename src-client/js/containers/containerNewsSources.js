import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionGetNewsSources } from '../actions/index';

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
        <ul>
         <li>{source.name}</li>
         <li>{source.description}</li>
        </ul>
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
