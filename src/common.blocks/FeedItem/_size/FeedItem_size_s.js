import React from 'react';
import { declMod, Bem } from 'bem-react-core';

import 'b: FeedItem e:ImageContainer';
import 'e:Image';
import 'e:Share m:type=s'
import 'b:Icon m:size=s m:type=heart';
import 'e:Title m:type=s';
import Image from 'b:Image';
import Link from 'b:Link m:type=img';

export default declMod({ size : 's' }, {
  block: 'FeedItem',
  tag: 'article',
  content({ newsItem, size }) {
    return (
      <React.Fragment>
        { this.__base(...arguments) }
        <Bem elem="ImageContainer">
          <Link href="#" type="img">
            <Image src={`media/${ newsItem.image }`} alt={ newsItem.title } srcset={[
              'media/img/1.png 172w',
              'media/img/1@2x.png 344w',
              'media/img/1@3x.png 516w'
            ]} />
          </Link>
        </Bem>
        <Bem elem="Share" mods={{ type: size }}>
          <Bem block="Icon" tag="button" mods={{ size: 's', type: 'heart'}}></Bem>
        </Bem>
      </React.Fragment>
    )
  }
});
