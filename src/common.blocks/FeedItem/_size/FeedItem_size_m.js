import React from 'react';
import { declMod, Bem } from 'bem-react-core';

import 'b: FeedItem e:ImageContainer';
import 'e:Image';
import 'b:FeedItem e:Description m:type=m';
import 'b:FeedItem e:Text';
import 'e:Share m:type=m'
import 'b:Icon m:size=s m:type=actions m:type=heart';
import 'e:Title m:type=m';
import Image from 'b:Image';
import Link from 'b:Link m:type=img';
import addImgSet from '../../../utils/addImgSet';

export default declMod({ size : 'm' }, {
  block: 'FeedItem',
  content({ newsItem, size }){
    const imgUrl = newsItem.image;
    const imgUrl2x = addImgSet(imgUrl, '@2x');
    const imgUrl3x = addImgSet(imgUrl, '@3x');
    return (
      <React.Fragment>
        { this.__base(...arguments) }
        <Bem elem="ImageContainer">
          <Link href="#" type="img">
            <Image src={`media/${ newsItem.image }`} alt={ newsItem.title } srcset={[
              `media/${imgUrl} 172w`,
              `media/${imgUrl2x} 344w`,
              `media/${imgUrl3x} 516w`
            ]} />
          </Link>
        </Bem>
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

