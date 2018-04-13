import React from 'react';
import { decl, Bem } from 'bem-react-core';

import 'e:Image';

export default decl({
  block: "Logo",
  content({ src }){
    return <Bem elem="Image" tag="img" src={ src } />
  }
})
