import { createRoot } from '@raect/VirtualDom/createRoot';
import { VirtualDOMNode } from '@raect/VirtualDom/VirtualDOMNode';

const root = createRoot(document.getElementById('root'));
root.render(
  new VirtualDOMNode('div', { class: 'title-wrapper' }, [
    new VirtualDOMNode('h1', {}, ['환영합니다!']),
    new VirtualDOMNode('p', {}, ['이곳은 chichoon 블로그 입니다']),
  ])
);
