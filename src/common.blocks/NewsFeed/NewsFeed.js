import React from 'react';
import { decl } from 'bem-react-core';

import Item from 'b:FeedItem m:size=m m:size=s m:size=l m:type=text';


export default decl({
  block: 'NewsFeed',
  tag: 'main',
  content({ news }){
    return (
    <React.Fragment>
      <Item newsItem={ news[0] } size="m"/>
      <Item newsItem={ news[1] } size="m"/>
      <Item newsItem={ news[2] } size="s"/>
      <Item newsItem={ news[3] } size="s"/>
      <Item newsItem={ news[4] } size="s"/>
      <Item newsItem={ news[5] } size="l"/>
      <Item newsItem={ news[6] } size="m"/>
      <Item newsItem={ news[7] } size="m"/>
      <Item newsItem={ news[8] } size="l"/>
      <Item newsItem={ news[9] } size="s"/>
      <Item newsItem={ news[10] } size="s" type="text"/>
      <Item newsItem={ news[11] } size="s"/>
      <Item newsItem={ news[12] } size="m"/>
      <Item newsItem={ news[13] } size="m"/>
      <Item newsItem={ news[14] } size="s"/>
      <Item newsItem={ news[15] } size="s"/>
      <Item newsItem={ news[16] } size="s" type="text"/>
    </React.Fragment>)
  }
})
