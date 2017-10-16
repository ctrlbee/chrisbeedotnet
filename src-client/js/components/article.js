import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  return (
    <div style={{margin: '10px', display: 'block', alignItems: 'center', alignContent: 'center'}}>
    <div style={{display: 'flex'}}>
      <a href={props.article.url} target='_blank'>
        <img height='200px' width='300px' src={props.article.urlToImage} />
      </a>
      <div style={{flex: 1, paddingLeft: '10px'}}>
        <div> 
          <strong> <a href={props.article.url} target='_blank'>{props.article.title}</a></strong>
          <p>{props.article.description}</p>
        </div>
      </div>
      </div>
    </div>
  )
}
