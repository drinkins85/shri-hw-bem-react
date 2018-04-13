import React from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Link',
  tag: 'a',
  attrs({ href }) {
    return { href };
  },
  mods( { type }){
    return { type };
  },
  content(){
    return this.props.children;
  }
})
