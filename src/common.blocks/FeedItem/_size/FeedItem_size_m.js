import React from 'react';
import { declMod, Bem } from 'bem-react-core';

import 'b: FeedItem e:ImageContainer';
import 'e:Image';
import 'b:FeedItem e:Description m:type=m';
import 'b:FeedItem e:Text';
import 'e:Share m:type=m'
import 'b:Icon m:size=s m:type=actions m:type=heart';
import 'e:Title m:type=m';


export default declMod({ size : 'm' }, {
  block: 'FeedItem',
  content({ newsItem, size }){
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
})

