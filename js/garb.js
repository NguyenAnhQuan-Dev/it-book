function sortBooks(books, sales) {
  const conditionOption = document.querySelector("#product__condition");
  const listSumBuy = sumBuyOfEachBook(sales);
  const listIcomeProduct = sumIncomeEachBook(sales);
  conditionOption.addEventListener("change", (e) => {
    e.preventDefault();
    let condition = e.target.value;
    switch (condition) {
      case CONDITION__SORT__PRODUCT.BUY__MAX:
        const listSumBuyAsc = listSumBuy.sort((a, b) => b.count - a.count);
        updateTopProduct(listSumBuyAsc, CONDITION__SORT__PRODUCT.TYPE__BUY);
        break;
      case CONDITION__SORT__PRODUCT.BUY__MIN:
        const listSumBuyDesc = listSumBuy.sort((b, a) => a.count - b.count);
        updateTopProduct(listSumBuyDesc, CONDITION__SORT__PRODUCT.TYPE__BUY);
        break;
      case CONDITION__SORT__PRODUCT.ICOME__MAX:
        const listIcomeProductAsc = listIcomeProduct.sort(
          (a, b) => b.income - a.income
        );
        updateTopProduct(
          listIcomeProductAsc,
          CONDITION__SORT__PRODUCT.TYPE__INCOME
        );
        break;
      case CONDITION__SORT__PRODUCT.ICOME__MIN:
        const listIcomeProductDesc = listIcomeProduct.sort(
          (b, a) => a.income - b.income
        );
        updateTopProduct(
          listIcomeProductDesc,
          CONDITION__SORT__PRODUCT.TYPE__INCOME
        );
        break;
      default:
        console.log("ERROR");
    }
  });
}

function sumIncomeEachBook(sales) {
  const incomeProduct = sales.reduce((income, sale) => {
    const book = findProductByID(sale.productID); // Lấy thông tin sách
    const productID = sale.productID;
    income[productID] = (income[productID] || 0) + sale.quantity * book.price;
    return income;
  }, {});

  // Chuyển đổi từ object sang mảng và định dạng kết quả
  return Object.entries(incomeProduct).map(([productID, income]) => ({
    productID,
    income,
  }));
}

function sumBuyOfEachBook(sales) {
  const productSalesCount = sales.reduce((counts, sale) => {
    const productID = sale.productID;
    counts[productID] = (counts[productID] || 0) + 1;
    return counts;
  }, {});

  return Object.entries(productSalesCount).map(([productID, count]) => ({
    productID,
    count,
  }));
}

function updateTopProduct(data, type) {
  const books = getLocalStorage(KEY.BOOKS);
  const tableTopProduct = document.querySelector("#top__product table");

  tableTopProduct.innerHTML = "";

  const thead = document.createElement("thead");
  thead.setAttribute("class", "table__head");

  const columnTitle =
    type === CONDITION__SORT__PRODUCT.TYPE__INCOME ? "Tổng thu" : "Số lượt mua";

  thead.innerHTML = `
    <tr class="table__row">
      <th class="table__col">Bìa sách</th>
      <th class="table__col">Tên sách</th>
      <th class="table__col">Tác giả</th>
      <th class="table__col">Giá</th>
      <th class="table__col">${columnTitle}</th>
      <th class="table__col">Create at</th>
    </tr>
  `;
  tableTopProduct.appendChild(thead);

  const tbody = document.createElement("tbody");
  tbody.setAttribute("class", "table__body");
  tbody.setAttribute("id", "list__top__product");

  const numberOFProduct =
    CONDITION__SORT__PRODUCT.QUANTITY < data.length
      ? CONDITION__SORT__PRODUCT.QUANTITY
      : data.length;

  let html = "";
  for (let i = 0; i < numberOFProduct; i++) {
    const index = getIndexProduct(data[i].productID);
    const book = books[index];

    const dynamicValue =
      type === CONDITION__SORT__PRODUCT.TYPE__INCOME
        ? data[i].income
        : data[i].count;

    html += `
      <tr class="table__row" id="product__row">
        <td class="table__col" data-cell="Ảnh bìa">
          <img src=${book.img} alt="thumnail" />
        </td>
        <td class="table__col" data-cell="Tên sách">${book.title}</td>
        <td class="table__col" data-cell="Tác giả">${book.author}</td>
        <td class="table__col" data-cell="Giá">${book.price}</td>
        <td class="table__col" data-cell="${columnTitle}">${dynamicValue}</td>
        <td class="table__col" data-cell="Action">
          <button
            class="submit-btn btn"
            onclick="completedOrder('${book.createdAt}')"
          >
            Submit
          </button>
        </td>
      </tr>
    `;
  }
  tbody.innerHTML = html;
  tableTopProduct.appendChild(tbody);
}
