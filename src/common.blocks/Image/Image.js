import { decl } from 'bem-react-core';

export default decl({
  block: "Image",
  tag: "img",
  mix: {
    block: 'FeedItem',
    elem: 'Image'
  },
  mods({ type }) {
    return { type };
  },
  attrs({ src, srcset }) {
    return {
      src,
      srcSet: srcset.toString()
    };
  }
})
