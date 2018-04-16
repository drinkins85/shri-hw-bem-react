import React from 'react';
import { declMod, Bem } from 'bem-react-core';

import 'b: FeedItem e:ImageContainer';
import 'e:Image';
import 'e:Share m:type=s'
import 'b:Icon m:size=s m:type=heart';
import 'e:Title m:type=s';


export default declMod({ size : 's' }, {
  block: 'FeedItem',
  tag: 'article',
  content({ newsItem, size }) {
    return (
      <React.Fragment>
        { this.__base(...arguments) }
        <Bem elem="Share" mods={{ type: size }}>
          <Bem block="Icon" tag="button" mods={{ size: 's', type: 'heart'}}></Bem>
        </Bem>
      </React.Fragment>
    )
  }
});
