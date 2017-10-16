import React, { Component } from 'react';

export default (props) => {

  return (
    <div style={{margin: '10px', display: 'inline-block', maxWidth: '360px'}}>
    <div style={{display: 'flex'}}>
      <img height='100px' width='100px' src='https://icons.better-idea.org/icon?url=http://www.abc.net.au/news&size=70..120..200' />
      <div style={{flex: 1, paddingLeft: '10px'}}>
        <div> 
          <strong>{props.source.name}</strong>
          <p>{props.source.description}</p>
        </div>
        <div> 
            <small>{props.source.desc}</small>
        </div>
      </div>
      </div>
    </div>
  )
}
