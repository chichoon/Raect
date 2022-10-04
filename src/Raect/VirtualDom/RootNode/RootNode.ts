import { VirtualDOMNode } from '@raect/VirtualDom/VirtualDOMNode';
import { updateEachNode } from './updateEachNode';

type VirtualDOMNodeType = VirtualDOMNode | null;

export class RootNode {
  #rootDOMNode: Element;
  #virtualDOMNode: VirtualDOMNodeType;
  constructor(rootNode: Element) {
    this.#rootDOMNode = rootNode;
    this.#virtualDOMNode = null;
  }

  render(childNode: VirtualDOMNode) {
    this.#rootDOMNode.replaceChildren(childNode.createDOMElement());
    this.#virtualDOMNode = childNode;
  }

  unmount() {
    this.#rootDOMNode.innerHTML = '';
    this.#virtualDOMNode = null;
  }

  update(newChildNode: VirtualDOMNodeType) {
    // 현재 Virtual DOM과 실제 DOM을 업데이트 하는 함수
    updateEachNode(this.#rootDOMNode, this.#virtualDOMNode, newChildNode, 0);
    this.#virtualDOMNode = newChildNode;
  }
}
