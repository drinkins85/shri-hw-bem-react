import React from 'react';
import { declMod, Bem } from 'bem-react-core';

import Title from 'b:Title m:size=s';
import 'b: FeedItem e:ImageContainer';
import 'b:FeedItem e:Description m:type=s';
import 'e:Footer';
import 'e:ChannelName';
import 'e:Share m:type=text'
import 'b:Icon m:size=s m:type=heart';
import 'e:Title m:type=s';
import Link from 'b:Link';

export default declMod({ type : 'text' }, {
  block: 'FeedItem',
  tag: 'article',
  content({ newsItem, size, type }) {
    return (
      <React.Fragment>
        <Bem elem="Title" mods={{ type: size}}>
          <Link href="#">
            <Title tag="h1" size={size} >{ newsItem.title }</Title>
          </Link>
        </Bem>
        <Bem elem="Description" mods={{ type: size }}>
          <Bem elem="Text">
            { newsItem.description }
          </Bem>
        </Bem>
        <Bem elem="Footer">
          <Bem elem="ChannelName">{ newsItem.channelName }</Bem>
          <Bem elem="Share" mods={{ type: type }}>
            <Bem block="Icon" tag="button" mods={{ size: 's', type: 'actions'}}></Bem>
            <Bem block="Icon" tag="button" mods={{ size: 's', type: 'heart'}}></Bem>
          </Bem>
        </Bem>
      </React.Fragment>
    )
  }
});
