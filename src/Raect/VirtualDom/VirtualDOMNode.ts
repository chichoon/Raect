interface AttributeObject {
  [key: string]: string;
}

export class VirtualDOMNode {
  #type;
  #attributes;
  #children;

  constructor(type: string, attributes: AttributeObject, children: Array<VirtualDOMNode | string>) {
    this.#type = type;
    this.#attributes = attributes;
    this.#children = children;
  }

  getType() {
    return this.#type;
  }

  getAttributes() {
    return this.#attributes;
  }

  getChildren() {
    return this.#children;
  }

  setAttributes(key: string, value: string) {
    this.#attributes[key] = value;
  }

  removeAttributes(key: string) {
    delete this.#attributes[key];
  }

  createDOMElement() {
    const element = document.createElement(this.#type);

    const attributeKeys = Object.keys(this.#attributes);
    attributeKeys.forEach((key) => element.setAttribute(key, this.#attributes[key]));

    this.#children.forEach((child) =>
      typeof child === 'string'
        ? element.appendChild(document.createTextNode(child))
        : element.appendChild(child.createDOMElement())
    );
    return element;
  }
}
