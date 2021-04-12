// Import HTMLElement here
import HTMLElement from './HTMLElement';

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

const renderedDiv = new DivElement('What a wonderful world');
console.log(renderedDiv.render());

// Export class here
export default DivElement;
