import React from 'react';
import { decl, Bem } from 'bem-react-core';

import 'b:FontYsText';
import 'b:Container';
import Header from 'b:Header';
import NewsFeed from 'b:NewsFeed';



export default decl({
  block: 'App',
  mix: {
    block:'FontYsText'
  },
  content({ news }) {
    return (
      <Bem block="Container">
        <Header></Header>
        <NewsFeed news={news}/>
      </Bem>
    );
  }
});
