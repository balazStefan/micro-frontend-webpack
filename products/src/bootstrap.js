import faker from 'faker';

const mount = (el) => {
  let products = '';
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
};

// Load the list for "scope/dev" in my project/index.html
if (process.env.NODE_ENV === 'development') {
  // I need to be sure that this is used only in dev mode
  const devEl = document.querySelector('#dev-products');
  if (devEl) {
    mount(devEl);
  }
}

export { mount };
