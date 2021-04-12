// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

const renderedText = new HTMLElement('p', 'Hello');
console.log(renderedText.render());

// Export class here
export default HTMLElement;
