class Products {
  render() {
    let product = "";
    CATALOG.forEach(({ name, price, img }) => {
      product += `
        <li>
            <span>${name}</span>
            <img src="${img}"/>
            <span>${price}</span>
            <button>Додати у кошик</button>
        </li>
      `;
    });

    let catalog = "";
    catalog += `<ul>${product}</ul>`;

    ROOT_PRODUCTS.innerHTML = catalog;
  }
}

const products = new Products();
products.render();
