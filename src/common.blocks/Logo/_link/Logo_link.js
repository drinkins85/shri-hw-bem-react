import React from 'react';
import { declMod } from 'bem-react-core';


export default declMod(({ link }) => !!link, {
  block: 'Logo',
  mods({ link }) {
    return { ...this.__base(...arguments), link: true };
  },
  content({ link }){
    return (
      <a href={link} >
        {this.__base(...arguments)}
      </a>
    )
  }
})
