function component() {
  const element = document.createElement('H1');

  element.innerHTML = 'Hello';

  return element;
}

document.body.appendChild(component());