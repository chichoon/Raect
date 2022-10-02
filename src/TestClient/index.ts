import { DomNodeClass } from '@raect/VirtualDom/DomNodeClass';

function App() {
  const virtualDOM = new DomNodeClass('div', { class: 'title-wrapper' }, [
    new DomNodeClass('h1', {}, ['환영합니다!']),
    new DomNodeClass('p', {}, ['이곳은 chichoon 블로그 입니다']),
  ]);

  document.querySelector('#root')?.appendChild(virtualDOM.createDOMElement());
}

App();
