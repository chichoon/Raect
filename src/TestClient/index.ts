import { createRoot, VirtualDOMNode } from '@raect/VirtualDom';

let oldVirtualDOM = new VirtualDOMNode('div', { class: 'title-wrapper' }, [
  new VirtualDOMNode('h1', { class: 'title-header', id: 'header' }, [new VirtualDOMNode('i', {}, ['환영합니다!'])]),
  new VirtualDOMNode('p', { class: 'title-header', id: 'header-p' }, ['이곳은 chichoon 블로그 입니다']),
]);

let newVirtualDOM = new VirtualDOMNode('div', { class: 'title-wrapper' }, [
  new VirtualDOMNode('h1', { class: 'title-header', id: 'header' }, [new VirtualDOMNode('i', {}, ['안녕히 가세요!'])]),
  new VirtualDOMNode('p', { class: 'title-sub-header', id: 'header-p' }, ['다음에도 또 방문해 주세요']),
]);

const root = createRoot(document.getElementById('root'));
root.render(oldVirtualDOM);

setTimeout(() => {
  const temp = oldVirtualDOM;
  oldVirtualDOM = newVirtualDOM;
  newVirtualDOM = temp;
  root.update(oldVirtualDOM);
}, 1000);
