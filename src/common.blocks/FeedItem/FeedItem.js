import React from 'react';
import { decl, Bem } from 'bem-react-core';

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
    return (
      <Bem elem="Title" mods={{ type: size}}>
        <Link href="#" type="text">
          <Title tag="h1" size={size} >{ newsItem.title }</Title>
        </Link>
      </Bem>
    );
  }
})

