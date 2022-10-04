import { createRoot, e } from '@raect/VirtualDom';

let oldVirtualDOM = e('div', { class: 'title-wrapper' }, [
  e('h1', { class: 'title-header', id: 'header' }, [e('i', {}, ['환영합니다!'])]),
  e('p', { class: 'title-header', id: 'header-p' }, ['이곳은 chichoon 블로그 입니다']),
]);

let newVirtualDOM = e('div', { class: 'title-wrapper' }, [
  e('h1', { class: 'title-header', id: 'header' }, [e('i', {}, ['안녕히 가세요!'])]),
  e('p', { class: 'title-sub-header', id: 'header-p' }, ['다음에도 또 방문해 주세요']),
]);

const root = createRoot(document.getElementById('root'));
root.render(oldVirtualDOM);

setInterval(() => {
  const temp = oldVirtualDOM;
  oldVirtualDOM = newVirtualDOM;
  newVirtualDOM = temp;
  root.update(oldVirtualDOM);
}, 1000);
