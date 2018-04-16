import React from 'react';
import { decl, Bem } from 'bem-react-core';
import addImgSet from '../../utils/addImgSet';

import Image from 'b:Image';
import Title from 'b:Title m:size=m';
import 'e:Title m:type=m';
import Link from 'b:Link m:type=text';


export default decl({
  block: 'FeedItem',
  tag: 'article',
  mods( { size }){
    return { size };
  },
  content({ newsItem, size }){
    const imgUrl = newsItem.image;
    let imgUrl2x;
    let imgUrl3x;
    if (imgUrl) {
      imgUrl2x = addImgSet(imgUrl, '@2x');
      imgUrl3x = addImgSet(imgUrl, '@3x');
    }
    return (
      <React.Fragment>
        <Bem elem="Title" mods={{ type: size}}>
          <Link href="#" type="text">
            <Title tag="h1" size={size} >{ newsItem.title }</Title>
          </Link>
        </Bem>
        {
          newsItem.image?
            <Bem elem="ImageContainer">
              <Link href="#" type="img">
                <Image src={`media/${ newsItem.image }`} alt={ newsItem.title } srcset={[
                  `media/${imgUrl} 172w`,
                  `media/${imgUrl2x} 344w`,
                  `media/${imgUrl3x} 516w`
                ]} />
              </Link>
            </Bem>
          : ''
        }
      </React.Fragment>

    );
  }
})

