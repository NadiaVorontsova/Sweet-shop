class Shopping {
  handleClear() {
    ROOT_SHOPPING.innerHTML = "";
  }

  render() {
    const productsStore = localStorageUtil.getProducts();

    let htmlCatalog = "";
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) === -1) {
        console.log(name);
        htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">⚡️ ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} грн</td>
                    </tr>
                `;
        sumCatalog += price;
      }
    });

    const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">💥 Сума:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} грн</td>
                    </tr>
                </table>
            </div>
        `;
    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
