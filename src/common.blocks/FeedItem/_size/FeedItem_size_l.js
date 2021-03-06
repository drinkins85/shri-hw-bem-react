import React from 'react';
import { declMod, Bem } from 'bem-react-core';

import 'b: FeedItem e:ImageContainer';
import 'b:FeedItem e:Description m:type=l';
import 'e:Image';
import 'e:Share m:type=l'
import 'b:Icon m:size=s m:type=heart';
import 'e:Title m:type=l';


export default declMod({ size : 'l' }, {
  block: 'FeedItem',
  tag: 'article',
  content({ newsItem, size }) {
    return (
      <React.Fragment>
          { this.__base(...arguments) }
          <Bem elem="Description" mods={{ type: size }}>
            <Bem elem="Text">
              { newsItem.description }
            </Bem>
            <Bem elem="Share" mods={{ type: size }}>
              <Bem block="Icon" tag="button" mods={{ size: 's', type: 'actions'}}></Bem>
              <Bem block="Icon" tag="button" mods={{ size: 's', type: 'heart'}}></Bem>
            </Bem>
          </Bem>
      </React.Fragment>
    )
  }
});


