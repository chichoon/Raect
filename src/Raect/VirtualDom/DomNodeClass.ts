interface AttributeObject {
  [key: string]: string;
}

export class DomNodeClass {
  #type;
  #attributes;
  #children;
  constructor(type: string, attributes: AttributeObject, children: Array<DomNodeClass | string>) {
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
