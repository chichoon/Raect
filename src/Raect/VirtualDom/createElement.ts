import { VirtualDOMNode } from './VirtualDOMNode';

interface AttributeObject {
  [key: string]: string;
}

export function e(type: string, attributes: AttributeObject, children: Array<VirtualDOMNode | string>) {
  return new VirtualDOMNode(type, attributes, children);
}
