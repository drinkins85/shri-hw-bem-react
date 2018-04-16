import { decl } from 'bem-react-core';


export default decl({
  block: "Title",
  tag( { tag }){
    return tag;
  },
  mods({ size }) {
    return { size };
  },
  content({ tag }){
    return this.props.children;
  }
})
