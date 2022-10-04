import { createRoot, VirtualDOMNode } from '@raect/VirtualDom';

const oldVirtualDOM = new VirtualDOMNode('div', { class: 'title-wrapper' }, [
  new VirtualDOMNode('h1', {}, ['환영합니다!']),
  new VirtualDOMNode('p', {}, ['이곳은 chichoon 블로그 입니다']),
]);

const newVirtualDOM = new VirtualDOMNode('div', { class: 'title-wrapper' }, [
  new VirtualDOMNode('h1', {}, ['안녕히 가세요!']),
  new VirtualDOMNode('p', {}, ['다음에도 또 방문해 주세요']),
]);

const root = createRoot(document.getElementById('root'));
root.render(oldVirtualDOM);

// setInterval(() => {
//   const temp = oldVirtualDOM;
//   oldVirtualDOM = newVirtualDOM;
//   newVirtualDOM = temp;
//   root.render(oldVirtualDOM);
// }, 1000);

const span1 = document.createElement('span');
const span2 = document.createElement('span');
document.getElementsByTagName('h1')[0].replaceChildren(span1, span2);
