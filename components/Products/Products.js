class Products {
  constructor() {
    this.classNameActive = "products-element__button_active";
    this.labelAdd = "Додати у кошик";
    this.labelRemove = "Видалити з кошика";
  }

  handleSetLocationStorage(el, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);

    if (pushProduct) {
      el.classList.add(this.classNameActive);
      el.innerHTML = this.labelRemove;
    } else {
      el.classList.remove(this.classNameActive);
      el.innerHTML = this.labelAdd;
    }

    headerPage.render(products.length);
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let product = "";

    CATALOG.forEach(({ id, name, price, img }) => {
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = this.classNameActive;
        activeText = this.labelRemove;
      }

      product += `
        <li class="products-element">
            <span class="products-element__name">${name}</span>
            <img src="${img}" class="products-element__img"/>
            <span class="products-element__price">
              💰 ${price.toLocaleString()} грн
            </span>
            <button class="products-element__button ${activeClass}" onclick="productPage.handleSetLocationStorage(this, '${id}')">
              ${activeText}
            </button>
        </li>
      `;
    });

    let catalog = "";
    catalog += `
      <ul class="products-container">
        ${product}
      </ul>`;

    ROOT_PRODUCTS.innerHTML = catalog;
  }
}

const productPage = new Products();
productPage.render();
