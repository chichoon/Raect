import { VirtualDOMNode } from '@raect/VirtualDom/VirtualDOMNode';

export class RootNode {
  #rootDOMNode;
  constructor(rootNode: Element) {
    this.#rootDOMNode = rootNode;
  }

  render(childNode: VirtualDOMNode) {
    if (this.#rootDOMNode.innerHTML !== '')
      console.error("Raect couldn't render child elements if root element is not empty.");
    else this.#rootDOMNode.appendChild(childNode.createDOMElement());
  }

  unmount() {
    this.#rootDOMNode.innerHTML = '';
  }
}
