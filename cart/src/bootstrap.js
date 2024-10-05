import faker from 'faker';

const mount = (el) => {
  console.log('stevo',el)
  el.innerHTML = `<div>You have ${faker.random.number()} items in your cart</div>`;
};

// Load the list for "scope/dev" in my project/index.html
if (process.env.NODE_ENV === 'development') {
  // I need to be sure that this is used only in dev mode
  const devEl = document.querySelector('#dev-cart');
  if (devEl) {
    mount(devEl);
  }
}

export { mount };
