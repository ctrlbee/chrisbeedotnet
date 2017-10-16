import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  const link = `/headlines/${props.source.id}`

  return (
    <div style={{margin: '10px', display: 'inline-block', maxWidth: '360px'}}>
    <div style={{display: 'flex'}}>
      <Link to={link}>
      <img height='100px' width='100px' src='https://icons.better-idea.org/icon?url=http://www.abc.net.au/news&size=70..120..200' />
      </Link>
      <div style={{flex: 1, paddingLeft: '10px'}}>
        <div> 
          <strong> <Link to={link} style={{textDecoration: 'none'}}>{props.source.name}</Link></strong>
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
