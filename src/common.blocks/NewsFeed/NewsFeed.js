import React from 'react';
import { decl } from 'bem-react-core';

import Item from 'b:FeedItem m:size=m m:size=s m:size=l m:type=text';


export default decl({
  block: 'NewsFeed',
  tag: 'main',
  content({ news }){
    return (
    <React.Fragment>
      {
        news.map((item, index) => <Item newsItem={ item } size={item.size} type={ item.image? '' : 'text'} key={index} />)
      }
    </React.Fragment>)
  }
})
