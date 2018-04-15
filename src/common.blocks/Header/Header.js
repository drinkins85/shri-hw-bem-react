import React from 'react';
import { decl } from 'bem-react-core';

import Logo from 'b:Logo m:link';

export default decl({
  block: 'Header',
  tag: 'header',
  content({ src }){
    return (<React.Fragment>
              <Logo src="media/img/logo.svg" link="#"></Logo>
            </React.Fragment>)
  }
})
