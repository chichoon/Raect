import { VirtualDOMNode } from '@raect/VirtualDom/VirtualDOMNode';

type VirtualDOMNodeType = VirtualDOMNode | null;

/**
 * @param {Element} parentNode - Parent Node in real DOM tree
 * @param {VirtualDOMNodeType} oldNode - Virtual DOM Node that is rendered before
 * @param {VirtualDOMNodeType} parentNode - Virtual DOM Node that will be updated and rendered
 * @param {number} index - Index of a child node
 * @return {void} This function returns nothing.
 */
export function updateEachNode(
  parentNode: Element,
  oldNode: VirtualDOMNodeType,
  newNode: VirtualDOMNodeType,
  index: number
): void {
  if (!oldNode && !newNode) return;
  if (!oldNode) parentNode.appendChild((newNode as VirtualDOMNode).createDOMElement());
  else if (!newNode) parentNode.removeChild(parentNode.childNodes[index]);
  else if (oldNode.getType() !== newNode.getType()) {
    parentNode.replaceChild(newNode.createDOMElement(), parentNode.childNodes[index]);
  } else updateEachAttributes(parentNode, oldNode, newNode, index);
  updateNextNode(parentNode, oldNode as VirtualDOMNode, newNode as VirtualDOMNode, index);
}

function updateNextNode(parentNode: Element, oldNode: VirtualDOMNode, newNode: VirtualDOMNode, index: number) {
  const oldNodeChild = oldNode.getChildren();
  const newNodeChild = newNode.getChildren();
  const parentNodeChild = parentNode.childNodes[index] as Element;
  for (let i = 0; i < newNodeChild.length || i < oldNodeChild.length; i += 1) {
    if (typeof oldNodeChild[i] === 'string') {
      oldNodeChild[i] = newNodeChild[i];
      parentNodeChild.replaceChild(
        typeof newNodeChild[i] === 'string'
          ? document.createTextNode(newNodeChild[i] as string)
          : (newNodeChild[i] as VirtualDOMNode).createDOMElement(),
        parentNodeChild.childNodes[i]
      );
    } else if (typeof newNodeChild[i] === 'string') {
      oldNodeChild[i] = newNodeChild[i];
      parentNodeChild.replaceChild(document.createTextNode(newNodeChild[i] as string), parentNodeChild.childNodes[i]);
    } else
      updateEachNode(
        parentNode.childNodes[index] as Element,
        oldNodeChild[i] as VirtualDOMNode,
        newNodeChild[i] as VirtualDOMNode,
        i
      );
  }
}

function updateEachAttributes(parentNode: Element, oldNode: VirtualDOMNode, newNode: VirtualDOMNode, index: number) {
  const oldAttributes = oldNode.getAttributes();
  const newAttributes = newNode.getAttributes();
  const attrKeys = new Set([...Object.keys(oldAttributes), ...Object.keys(newAttributes)]);
  attrKeys.forEach((key) => {
    if (!newAttributes[key]) {
      oldNode.removeAttributes(key);
      (parentNode.childNodes[index] as Element).removeAttribute(key);
    } else if (!oldAttributes[key] || oldAttributes[key] !== newAttributes[key]) {
      oldNode.setAttributes(key, newAttributes[key]);
      (parentNode.childNodes[index] as Element).setAttribute(key, newAttributes[key]);
    }
  });
}
