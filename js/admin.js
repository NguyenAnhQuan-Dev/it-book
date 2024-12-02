// Define class global
const CLASSNAME = {
  CLOSESIDEBAR: "open__sidebar",
  SCALECONTENT: "open__content",
  ACTIVEMENU: "active__menu",
  CLASSDARKMODE: "dark",
  OPENFILTER: "open__filter",
};

// Utils

function setCurrentDateToInput() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0, phải cộng thêm 1
  const day = String(currentDate.getDate()).padStart(2, "0"); // Đảm bảo ngày có 2 chữ số
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

function createErrorElement() {
  const messageElement = document.createElement("p");
  messageElement.classList.add("caption-2");
  messageElement.style.color = "red";
  return messageElement;
}

function checkEmpty(input) {
  if (input.value.trim() === "") {
    return false;
  }
  return true;
}

function injectValueIntoElement(element, data) {
  element.innerText = data;
}

function getLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

function setLocalStorage(key, value) {
  if (value !== undefined) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

function getDate() {
  const date = new Date();
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function handleResetInput(form) {
  form.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
}

function formatVND(amount) {
  return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

function renderNotFound(element, message) {
  const html = `<h1 id="message__not__found">${message}</h1>`;
  element.innerHTML = html;
}

// TOAST
const TYPE = {
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
};
const nofitication = document.querySelector(".nofitication");
function createToast(type, icon, content) {
  const toastElement = document.createElement("div");
  toastElement.innerHTML = `
          ${icon}
          <p>${content}</p>
        `;
  toastElement.classList.add("toast");
  toastElement.classList.add(type);
  nofitication.appendChild(toastElement);
  setTimeout(() => {
    toastElement.remove();
  }, 5000);
}

// Init data
function initializeLocalStorage(key, defaultData) {
  if (!getLocalStorage(key)) {
    setLocalStorage(key, defaultData);
  }
  return getLocalStorage(key);
}

function getFilePathAndPreview(inputId) {
  const fileInput = document.getElementById(inputId);
  fileInput.addEventListener("change", (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name;
      const filePath = URL.createObjectURL(file);
      console.log("File Name: ", fileName);
      console.log("File Path: ", filePath);
    }
  });
}

function convertFileImg(pathImg) {
  const filePath = URL.createObjectURL(pathImg);
  return filePath;
}

// Feature open menu
const btnOpenSideBar = document.querySelector("#btn__nav");
const sideBarElement = document.querySelector("#sidebar");
const contentElement = document.querySelector("#content");

btnOpenSideBar.addEventListener("click", () => {
  sideBarElement.classList.toggle(CLASSNAME.CLOSESIDEBAR);
  contentElement.classList.toggle(CLASSNAME.SCALECONTENT);
});

function handleChangeMode(body, btnSwitch) {
  btnSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
  });
}

function createIdGenerator() {
  const usedIds = new Set();

  return function generateUniqueId() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id;

    do {
      id = Array.from(
        { length: 4 },
        () => characters[Math.floor(Math.random() * characters.length)]
      ).join("");
    } while (usedIds.has(id));

    usedIds.add(id);
    return id;
  };
}

// Feate logout

function handleLogout() {
  window.location.replace("/index.html");
}

// Feature open menu on mobile
const btnOpenMenuMobile = document.querySelector("#header .menu__btn");
const btnCloseMenuMobile = document.querySelector("#app #sidebar .close__menu");
const bgOverlay = document.querySelector("#app .bg-overlay");

function openMenuMobile() {
  sideBarElement.style.left = "0px";
  bgOverlay.style.display = "block";
}

function closeMenuMobile() {
  sideBarElement.style.left = "-110%";
  bgOverlay.style.display = "none";
}

btnOpenMenuMobile.addEventListener("click", () => {
  openMenuMobile();
});

btnCloseMenuMobile.addEventListener("click", () => {
  closeMenuMobile();
});

// Feature active nav link
const navItems = document.querySelectorAll(".nav > .nav__link");
function removeClassAllItem(listitem, className) {
  listitem.forEach((item) => {
    item.classList.remove(className);
  });
}

function handleActiveNav(listNav) {
  const pages = document.querySelectorAll(".page");
  listNav.forEach((item) => {
    item.addEventListener("click", () => {
      removeClassAllItem(listNav, CLASSNAME.ACTIVEMENU);
      removeClassAllItem(pages, "page__show");
      item.classList.add(CLASSNAME.ACTIVEMENU);
      const idPage = item.getAttribute("data-page");
      const page = document.getElementById(idPage);
      page.classList.add("page__show");
      window.scroll({
        behavior: "smooth",
        top: 0,
      });
      if (window.innerWidth < 1024) {
        closeMenuMobile();
      }
    });
  });
}

// Handle open/close modal
function openModal(boxModel, className) {
  boxModel.classList.add(className);
}

function closeModal(boxModel, className) {
  boxModel.classList.remove(className);
}

function handeleBoxModel(btnOpen, btnClose, boxModel, className) {
  btnOpen.addEventListener("click", () => {
    openModal(boxModel, className);
  });

  btnClose.addEventListener("click", () => {
    closeModal(boxModel, className);
  });
}

// Feature in Mangement Order
function caculatorProduct(order) {
  const quantity = order.products.reduce((initValue, product) => {
    return initValue + parseInt(product.quantity);
  }, 0);
  return quantity;
}

function calculatorPrice(order) {
  let books = getLocalStorage(KEY.BOOKS);
  let total = order.products.reduce((initValue, product) => {
    const book = books[getIndexProduct(product.id)];
    return initValue + book.price * parseInt(product.quantity);
  }, 0);
  if (order.code < 1 && order.code > 0) {
    total = total - total * order.code;
    return total;
  } else if (order.code > 1) {
    total = total - order.code;
    return total;
  } else {
    return total;
  }
}

function getIndexOrder(orderID) {
  const index = orders.findIndex((order) => order.orderID === orderID);
  return index;
}

function updateTableOrder(data) {
  const tbodyOrder = document.querySelector("#order__table tbody");
  if (data.length === 0) {
    renderNotFound(tbodyOrder, "Not Found Order");
    return;
  }
  tbodyOrder.innerHTML = "";
  const html = data
    .map((order) => {
      const statusClassName = "status" + order.status;
      const numberOfProduct = caculatorProduct(order);
      const total = formatVND(calculatorPrice(order));
      return `
      <tr
        class="table__row"
      >
        <td class="table__col" data-cell="Order">
          ${order.orderID}<br />${numberOfProduct} items — ${total}
        </td>
        <td class="table__col" data-cell="Created">${order.createdAt}</td>
        <td class="table__col" data-cell="From Vendor">
          ${order.fromVendor}
        </td>
        <td class="table__col" data-cell="Status">
          <span class=${statusClassName}>${order.status}</span>
        </td>
        <td class="table__col" data-cell="Action" id="order__action">
          <button class="update-btn btn" onclick="handleOpenOrderDetail('${order.orderID}')">Detail</button>
          <button class="delete-btn btn" onclick="deleteOrder('${order.orderID}')">Delete</button>
        </td>
        <td class="table__col" data-cell="Submit/Reject">
          <button class="submit-btn btn" onclick="completedOrder('${order.orderID}')">Submit</button>
          <button class="cancel-btn btn" onclick="rejectOrder('${order.orderID}')">Cancel</button>
        </td>
      </tr>
    `;
    })
    .join("");
  tbodyOrder.innerHTML = html;
}

function handleCloseOrderModal() {
  const orderTable = document.querySelector("#order__modal");
  closeModal(orderTable, CLASSNAME.OPENFILTER);
}

function renderListProductOrder(listOrder) {
  const listProduct = document.querySelector("#order__form .list__product");
  listProduct.innerHTML = "";
  const html = listOrder
    .map((item) => {
      const book = findProductByID(item.id);
      const bookPrice = formatVND(book.price);
      return `
      <li class="product__item" data-id="${book.productID}">
        <img src=${book.img} alt="thumnail" />
        <div class="product__info">
          <p class="subtitle-1" data-lable="Tên sách:">${book.title}</p>
          <p class="subtitle-1" data-lable="Giá:">${bookPrice}</p>
          <p class="subtitle-1" data-lable="Số lượng:">${item.quantity}</p>
        </div>
      </li>
    `;
    })
    .join("");
  listProduct.innerHTML = html;
}

function handleOpenOrderDetail(orderID) {
  const index = getIndexOrder(orderID);
  const orders = getLocalStorage(KEY.ORDER);
  const order = orders[index];
  document.getElementById("order__id").innerText = order.orderID;
  document.getElementById("user__id").innerText = order.userID;
  document.getElementById("order__status").value = order.status;
  document.getElementById("from__vendor").innerText = order.fromVendor;
  document.getElementById("total__money").innerHTML = formatVND(
    calculatorPrice(order)
  );
  renderListProductOrder(order.products);
  const orderModal = document.querySelector("#order__modal");
  openModal(orderModal, CLASSNAME.OPENFILTER);
}

// function getListItem() {
//   const listItem = document.querySelectorAll("#order__modal .list__product li");
//   const newListItem = [...listItem].map((item) => {
//     return {
//       id: item.dataset.id,
//       quantity: item.querySelector("input").value,
//     };
//   });
//   return newListItem;
// }

function submitUpdateOrder() {
  const orderID = document.getElementById("order__id").innerText;
  const updateOrder = {
    status: document.getElementById("order__status").value,
  };
  orders = getLocalStorage(KEY.ORDER);
  const index = getIndexOrder(orderID);
  orders[index] = { ...orders[index], ...updateOrder };
  setLocalStorage(KEY.ORDER, orders);
  orders = getLocalStorage(KEY.ORDER);
  updateTableOrder(orders);
  handleCloseOrderModal();
  createToast(
    TYPE.SUCCESS,
    "<i class='fa-solid fa-check'></i>",
    "Cập nhật order thành công"
  );
}

function deleteOrder(orderID) {
  const isConfirm = window.confirm("ban cos muon xoa Order nay");
  if (isConfirm) {
    orders = orders.filter((order) => order.orderID !== orderID);
    setLocalStorage(KEY.ORDER, orders);
    orders = getLocalStorage(KEY.ORDER);
    updateTableOrder(orders);
    createToast(
      TYPE.SUCCESS,
      "<i class='fa-solid fa-check'></i>",
      "Xóa đơn hàng thành công"
    );
  }
}

function rejectOrder(orderID) {
  const isConfirm = window.confirm(`Bạn có muốn xác nhận hủy đơn ${orderID}`);
  if (isConfirm) {
    const index = getIndexOrder(orderID);
    orders[index] = { ...orders[index], status: "Reject" };
    setLocalStorage(KEY.ORDER, orders);
    orders = getLocalStorage(KEY.ORDER);
    updateTableOrder(orders);
  }
}

function completedOrder(orderID) {
  const isConfirm = window.confirm(
    `Bạn có muốn xác nhận đơn ${orderID} hoàn thành`
  );
  if (isConfirm) {
    const index = getIndexOrder(orderID);
    orders[index] = { ...orders[index], status: "Completed" };
    setLocalStorage(KEY.ORDER, orders);
    orders = getLocalStorage(KEY.ORDER);
    updateTableOrder(orders);
    createToast(
      TYPE.SUCCESS,
      "<i class='fa-solid fa-check'></i>",
      "Cập nhật tình trạng đơn hàng thành công"
    );
  }
  updateDataStats();
}

const searchOrderInput = document.querySelector("#order__search input");
function reactiveSearchOrder(searchInput, data) {
  searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value;
    if (!searchValue) {
      updateTableOrder(data);
    } else {
      dataFiltered = data.filter((item) => {
        return item.orderID.toLowerCase().includes(searchValue.toLowerCase());
      });
      updateTableOrder(dataFiltered);
    }
  });
}

function handleOrderFilter() {
  const orders = getLocalStorage(KEY.ORDER);

  const dateStart = document.querySelector("#filter__form #date__start");
  const dateEnd = document.querySelector("#filter__form #date__end");
  const address = document.querySelector("#filter__form #order__address");
  const status = document.querySelector("#filter__form #status__order");

  const startDate = new Date(dateStart.value);
  const endDate = new Date(dateEnd.value);

  const dataFiltered = orders.filter((item) => {
    const orderDate = new Date(item.createdAt.split(" ")[0]);

    const isWithinDateRange =
      (isNaN(startDate) && isNaN(endDate)) ||
      (orderDate >= startDate && orderDate <= endDate);

    const isAddressMatched =
      !address.value || item.fromVendor.includes(address.value);

    const isStatusMatched = !status.value || item.status === status.value;

    return isWithinDateRange && isAddressMatched && isStatusMatched;
  });

  // Update the table and close the filter modal
  updateTableOrder(dataFiltered);
  const filterModal = document.getElementById("filter__modal");
  closeModal(filterModal, CLASSNAME.OPENFILTER);
}
// Feature management Product
function findProductByID(productID) {
  let books = getLocalStorage(KEY.BOOKS);
  return books.find((book) => book.productID === productID);
}

function updateTableProduct(databook) {
  const tbodyProduct = document.querySelector("#warehouse__book");
  tbodyProduct.innerHTML = "";
  const html = databook
    .map((book) => {
      const status = book.inStock > 0 ? "in Stock" : "out Stock";
      return `
      <tr class="table__row">
        <td class="table__col" data-cell="Bìa sách">
          <img src=${book.img} alt="thumnail-book" />
        </td>
        <td class="table__col" data-cell="Tên sách">${book.title}</td>
        <td class="table__col" data-cell="Trạng thái">${status}</td>
        <td class="table__col" data-cell="Giá">${book.price}</td>
        <td class="table__col" data-cell="Ngày thêm">${book.createdAt}</td>
        <td class="table__col" data-cell="Hành động">
          <button class="btn__action" onclick="handleOpenProductModelDetail('${book.productID}')">
            <i class="uil uil-file-info-alt body-1"></i>
          </button>
          <button class="btn__action" onclick="deleteProduct('${book.productID}')">
            <i class="uil uil-trash body-1"></i>
          </button>
        </td>
      </tr>
    `;
    })
    .join("");
  tbodyProduct.innerHTML = html;
}

function getIndexProduct(productID) {
  const books = getLocalStorage(KEY.BOOKS);
  const index = books.findIndex((book) => book.productID === productID);
  return index;
}

function handleOpenProductModelDetail(productID) {
  const books = getLocalStorage(KEY.BOOKS);
  const productDetailModal = document.querySelector("#product__modal");
  openModal(productDetailModal, CLASSNAME.OPENFILTER);
  const book = books[getIndexProduct(productID)];
  document.getElementById("product__id").innerText = book.productID;
  document.getElementById("product__name").value = book.title;
  document.getElementById("product__price").value = book.price;
  document.getElementById("product__language").value = book.language;
  document.getElementById("product__description").value = book.description;
  document.getElementById("product__subject").value = book.subject;
  document.getElementById("product__publish").value = book.publicationDate;
  document.getElementById("product__stock").value = book.inStock;
  document.getElementById("product__created").innerText = book.createdAt;
}

function handleCloseProductModelDetail() {
  const productDetailModal = document.querySelector("#product__modal");
  closeModal(productDetailModal, CLASSNAME.OPENFILTER);
}

function submitUpdateProduct() {
  // Lấy productID từ giao diện
  const productID = document.getElementById("product__id").innerText;

  // Lấy dữ liệu cập nhật từ form
  const updateProduct = {
    title: document.getElementById("product__name").value,
    price: document.getElementById("product__price").value,
    language: document.getElementById("product__language").value,
    description: document.getElementById("product__description").value,
    subject: document.getElementById("product__subject").value,
    publicationDate: document.getElementById("product__publish").value,
    inStock: document.getElementById("product__stock").value,
  };

  books = getLocalStorage(KEY.BOOKS);
  const index = getIndexProduct(productID);
  books[index] = { ...books[index], ...updateProduct };
  setLocalStorage(KEY.BOOKS, books);
  books = getLocalStorage(KEY.BOOKS);
  updateTableProduct(books);
  handleCloseProductModelDetail();
  createToast(
    TYPE.SUCCESS,
    "<i class='fa-solid fa-check'></i>",
    "Cập nhật sách thành công"
  );
}

function deleteProduct(productID) {
  const isConfirm = window.confirm("Ban co muon xoa san pham nay");
  if (isConfirm) {
    books = books.filter((book) => book.productID !== productID);
    setLocalStorage(KEY.BOOKS, books);
    books = getLocalStorage(KEY.BOOKS);
    updateTableProduct(books);
    createToast(
      TYPE.SUCCESS,
      "<i class='fa-solid fa-check'></i>",
      "Xóa sách thành công"
    );
  }
}

function reactiveSearchProduct(searchInput, data) {
  searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value;
    if (!searchValue) {
      updateTableProduct(books);
    } else {
      dataFiltered = data.filter((item) => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      updateTableProduct(dataFiltered);
    }
  });
}

function handleOpenProductModalAdd() {
  const productDetailModal = document.querySelector("#product__modal--add");
  openModal(productDetailModal, CLASSNAME.OPENFILTER);
}

function handleCloseProductModalAdd() {
  const productDetailModal = document.querySelector("#product__modal--add");
  closeModal(productDetailModal, CLASSNAME.OPENFILTER);
}

function validateFormProduct() {
  const inputProduct = document.querySelectorAll("#product__modal--add input");
  inputProduct.forEach((item) => {
    const parent = item.parentNode;
    if (!checkEmpty(item)) {
      if (parent.querySelector("p")) {
        parent.querySelector("p").remove();
      }
      const message = document.createElement("p");
      message.style.color = "red";
      message.innerText = "Truong nay khong duoc de trong";
      item.style.border = "1px solid red";
      parent.appendChild(message);
    } else {
      if (parent.querySelector("p")) {
        parent.querySelector("p").remove();
      }
    }
  });
}

function submitNewProduct() {
  // validateFormProduct();
  const bookModalAdd = document.getElementById("product__modal--add");
  const createProductId = createIdGenerator();
  const newProduct = {
    productID: createProductId(),
    img: convertFileImg(document.getElementById("product__img--add").files[0]),
    title: document.getElementById("product__name--add").value,
    price: document.getElementById("product__price--add").value,
    language: document.getElementById("product__language--add").value,
    tags: ["Security", "DevOps"],
    author: document.getElementById("product__author--add").value,
    description: document.getElementById("product__description--add").value,
    pages: document.getElementById("product__pages--add").value,
    subject: document.getElementById("product__subject--add").value,
    publicationDate: document.getElementById("product__publish--add").value,
    genre: document.getElementById("product__genre--add").value,
    createdAt: setCurrentDateToInput(),
    inStock: document.getElementById("product__stock--add").value,
  };

  let books = getLocalStorage(KEY.BOOKS);
  books.unshift(newProduct);
  setLocalStorage(KEY.BOOKS, books);
  updateTableProduct(getLocalStorage(KEY.BOOKS));
  closeModal(bookModalAdd, CLASSNAME.OPENFILTER);
  bookModalAdd.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
  createToast(
    TYPE.SUCCESS,
    "<i class='fa-solid fa-check'></i>",
    "Thêm sách thành công"
  );
}

// Fetaure in Management User
function findUserByUserID(userID) {
  const users = getLocalStorage(KEY.USERS);
  const user = users.find((user) => user.userId === userID);
  return user;
}

function findUserByEmail(email) {
  const users = getLocalStorage(KEY.USERS);
  return users.find((user) => user.email === email);
}

function getIndexUser(userID) {
  const users = getLocalStorage(KEY.USERS);
  const index = users.findIndex((user) => user.userId === userID);
  return index;
}

function calculatorNumberOfOrder(userID) {
  const orders = getLocalStorage(KEY.ORDER);
  let numberOfOrder = orders.reduce((initCounter, order) => {
    if (order.userID === userID) {
      initCounter++;
    }
    return initCounter;
  }, 0);

  return numberOfOrder;
}

function handleOpenModalDetail(payload) {
  const users = getLocalStorage(KEY.USERS);
  const index = getIndexUser(payload);
  const user = users[index];
  const status = user.status ? "active" : "ban";
  document.getElementById("user__id").innerText = user.userId;
  document.getElementById("user__name").value = user.name;
  document.getElementById("user__phone").value = user.phoneNumber;
  document.getElementById("user__email").value = user.email;
  document.getElementById("user__address").value = user.address;
  document.getElementById("user__status").innerHTML = status;
  document.getElementById("user__created").innerText = user.createdAt;
  document.getElementById("user__orders").innerText = calculatorNumberOfOrder(
    user.userId
  );
  const userModal = document.getElementById("user__modal");
  openModal(userModal, CLASSNAME.OPENFILTER);
}

function handleCloseUserModal() {
  const userModal = document.getElementById("user__modal");
  closeModal(userModal, CLASSNAME.OPENFILTER);
}

function updateUserTable(data) {
  const tbody = document.querySelector("#user__table tbody");
  tbody.innerHTML = "";
  const html = data
    .map((user) => {
      const status = user.status ? "active" : "ban";
      return `
            <tr class="table__row">
                <td class="table__col" data-cell="ID người dùng">${user.userId}</td>
                <td class="table__col" data-cell="Tên">${user.name}</td>
                <td class="table__col" data-cell="SĐT">${user.phoneNumber}</td>
                <td class="table__col" data-cell="Địa chỉ">${user.address}</td>
                <td class="table__col" data-cell="Tình trạng">${status}</td>
                <td class="table__col" data-cell="Hành động">
                    <button class="update-btn" onclick="handleOpenModalDetail('${user.userId}')">Detail</button>
                    <button class="delete-btn" onclick="deleteUser('${user.userId}')">Delete</button>
                    <button class="delete-btn" onclick="banUser('${user.userId}')">Ban</button>
                </td>
            </tr>
        `;
    })
    .join("");
  tbody.innerHTML = html;
}

function submitUpdate() {
  const userId = document.getElementById("user__id").innerText;
  const updatedUser = {
    name: document.getElementById("user__name").value,
    phone: document.getElementById("user__phone").value,
    email: document.getElementById("user__email").value,
    address: document.getElementById("user__address").value,
  };
  let users = getLocalStorage(KEY.USERS);
  const index = getIndexUser(userId);
  users[index] = { ...users[index], ...updatedUser };
  setLocalStorage(KEY.USERS, users);

  handleCloseUserModal();
  updateUserTable(getLocalStorage(KEY.USERS));
  createToast(
    TYPE.SUCCESS,
    "<i class='fa-solid fa-check'></i>",
    "Cập nhật thông tin người dùng thành công"
  );
}

function deleteUser(userID) {
  const isConfirm = window.confirm("Ban co muon xoa nguoi dung nay");
  if (isConfirm) {
    let users = getLocalStorage(KEY.USERS);
    users = users.filter((user) => user.userId !== userID);
    setLocalStorage(KEY.USERS, users);
    updateUserTable(getLocalStorage(KEY.USERS));
    createToast(
      TYPE.SUCCESS,
      "<i class='fa-solid fa-check'></i>",
      "Xóa người dùng thành công"
    );
  }
}

function banUser(userId) {
  const isConfirm = window.confirm("Ban co muon ban nguoi dung nay");
  if (isConfirm) {
    let users = getLocalStorage(KEY.USERS);
    const index = getIndexUser(userId);
    users[index].status = false;
    setLocalStorage(KEY.USERS, users);
    handleCloseUserModal();
    updateUserTable(getLocalStorage(KEY.USERS));
  }
}

function handleOpenUserModalAdd() {
  const userModalAdd = document.getElementById("user__modal__add");
  openModal(userModalAdd, CLASSNAME.OPENFILTER);
}

function createNewUser() {
  const user = findUserByEmail(
    document.getElementById("user__email__add").value
  );
  if (user) {
    alert("Email đã được đăng kí!");
    return;
  }
  const createUserId = createIdGenerator();
  const newUser = {
    userId: createUserId(),
    name: document.getElementById("user__name__add").value,
    phoneNumber: document.getElementById("user__phone__add").value,
    password: document.getElementById("user__email__add").value,
    email: document.getElementById("user__email__add").value,
    address: document.getElementById("user__address__add").value,
    createdAt: getDate(),
    numberOfOrder: 0,
  };
  let users = getLocalStorage(KEY.USERS);
  users.push(newUser);
  setLocalStorage(KEY.USERS, users);
  updateUserTable(getLocalStorage(KEY.USERS));
  handleCloseUserModalAdd();
  createToast(
    TYPE.SUCCESS,
    "<i class='fa-solid fa-check'></i>",
    "Thêm người dùng thành công"
  );
}

function handleCloseUserModalAdd() {
  const userModalAdd = document.getElementById("user__modal__add");
  closeModal(userModalAdd, CLASSNAME.OPENFILTER);
}

// Feature in admin page

// Feature in home page

const CONDITION__SORT__PRODUCT = {
  BUY__MAX: "buy__max",
  BUY__MIN: "buy__min",
};

function getDateRangeStats() {
  const dateStartInput = document.getElementById("date__start");
  const dateEndInput = document.getElementById("date__end");
  const dateStart = new Date(dateStartInput.value);
  const dateEnd = new Date(dateEndInput.value);
  if (dateEnd - dateStart < 0) {
    alert("Ngày kết thúc phải lớn hơn ngày bắt đầu");
  } else if (dateEnd - dateStart >= 0) {
    return {
      dateStart,
      dateEnd,
    };
  } else {
    return null;
  }
}

function filterDataByDateRange(data, start, end) {
  return data.filter((record) => {
    const createdAt = new Date(record.createdAt);
    return createdAt >= start && createdAt <= end;
  });
}

function calculatorIncome(data) {
  let income = data.reduce((initValue, order) => {
    if (order.status === STATUSORDER.COMPLETED) {
      let total = calculatorPrice(order);
      return initValue + total;
    }
    return initValue;
  }, 0);
  injectValueIntoElement(
    document.querySelector("#stats__incom .quantity"),
    formatVND(income)
  );
}

function calculatorSumRecord(data, element) {
  const records = data.length;
  injectValueIntoElement(element, records);
}

function getStatisticsProduct(orders) {
  const statistics = orders.reduce((statistics, order) => {
    order.products.forEach((product) => {
      const book = findProductByID(product.id);
      if (!statistics[product.id]) {
        statistics[product.id] = {
          count: 0,
          income: 0,
        };
      }

      statistics[product.id].count += product.quantity;
      statistics[product.id].income += parseInt(product.quantity) * book.price;
    });
    return statistics;
  }, {});

  return statistics;
}

function getStatisticsUsers(orders) {
  const statistics = orders.reduce((stats, order) => {
    if (!stats[order.userID]) {
      stats[order.userID] = {
        numberOfBuy: 0,
        amountSpent: 0,
      };
    }
    stats[order.userID].numberOfBuy += 1;
    stats[order.userID].amountSpent += calculatorPrice(order);
    return stats;
  }, {});

  return statistics;
}

function updateStatisticsProduct(listState) {
  const tableStatisticsProduct = document.querySelector(
    "#statistics__product .table__body"
  );
  tableStatisticsProduct.innerHTML = "";
  const html = listState
    .map((stats) => {
      const book = findProductByID(stats[0]);
      const bookPrice = formatVND(book.price);
      const totalIncome = formatVND(stats[1].income);
      return `
      <tr class="table__row">
        <td class="table__col" data-cell="Bìa sách">
          <img src=${book.img} alt="thumnail-book" />
        </td>
        <td class="table__col" data-cell="Tên sách">${book.title}</td>
        <td class="table__col" data-cell="Giá">${bookPrice}</td>
        <td class="table__col" data-cell="Số lượng đã bán">${stats[1].count}</td>
        <td class="table__col" data-cell="Doanh thu">${totalIncome}</td>
        <td class="table__col" data-cell="Chi tiết">
          <button class="action__button" onclick="handleOpenProductStatsModal('${book.productID}')">Detail</button>
        </td>
      </tr>
    `;
    })
    .join("");
  tableStatisticsProduct.innerHTML = html;
}

function updateStatisticsUsers(listState) {
  const tableStatisticsProduct = document.querySelector(
    "#statistics__user .table__body"
  );
  tableStatisticsProduct.innerHTML = "";
  const html = listState
    .map((stats) => {
      const user = findUserByUserID(stats[0]);
      const totalAmount = formatVND(stats[1].amountSpent);
      return `
      <tr class="table__row">
        <td class="table__col" data-cell="UserID">${user.userId}</td>
        <td class="table__col" data-cell="Tên">${user.name}</td>
        <td class="table__col" data-cell="Email">${user.email}</td>
        <td class="table__col" data-cell="Số điện thoại">${user.phoneNumber}</td>
        <td class="table__col" data-cell="Số đơn">${stats[1].numberOfBuy}</td>
        <td class="table__col" data-cell="Số tiền đã chi">${totalAmount}</td>
        <td class="table__col" data-cell="Chi tiết">
          <button class="action__button" onclick="handleOpenUserStatsModal('${user.userId}')">Detail</button>
        </td>
      </tr>
    
    `;
    })
    .join("");
  tableStatisticsProduct.innerHTML = html;
}

function sortTopProductByBuy(listStateProduct) {
  const conditionOption = document.getElementById("product__condition");
  conditionOption.addEventListener("change", (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case CONDITION__SORT__PRODUCT.BUY__MAX:
        const sortStatsAsc = listStateProduct.sort(
          (a, b) => b[1].count - a[1].count
        );
        updateStatisticsProduct(sortStatsAsc);
        break;
      case CONDITION__SORT__PRODUCT.BUY__MIN:
        const sortStatsDesc = listStateProduct.sort(
          (a, b) => a[1].count - b[1].count
        );
        updateStatisticsProduct(sortStatsDesc);
        break;
      default:
        console.log("error");
    }
  });
}

function sortTopUserBuyAmount(listStatsUser) {
  const conditionOption = document.getElementById("user__condition");
  conditionOption.addEventListener("change", (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case CONDITION__SORT__PRODUCT.BUY__MAX:
        const sortStatsAsc = listStatsUser.sort(
          (a, b) => b[1].amountSpent - a[1].amountSpent
        );
        updateStatisticsUsers(sortStatsAsc);
        break;
      case CONDITION__SORT__PRODUCT.BUY__MIN:
        const sortStatsDesc = listStatsUser.sort(
          (a, b) => a[1].amountSpent - b[1].amountSpent
        );
        updateStatisticsUsers(sortStatsDesc);
        break;
      default:
        console.log("error");
    }
  });
}

function updateDataStats() {
  handleStats();
}

function handleStats() {
  const dateRange = getDateRangeStats();
  if (dateRange) {
    const filterBooks = filterDataByDateRange(
      getLocalStorage(KEY.BOOKS),
      dateRange.dateStart,
      dateRange.dateEnd
    );
    const filterOrders = filterDataByDateRange(
      getLocalStorage(KEY.ORDER),
      dateRange.dateStart,
      dateRange.dateEnd
    );
    const filterUser = filterDataByDateRange(
      getLocalStorage(KEY.USERS),
      dateRange.dateStart,
      dateRange.dateEnd
    );
    calculatorIncome(filterOrders);
    calculatorSumRecord(
      filterOrders,
      document.querySelector("#stats__order .quantity")
    );
    calculatorSumRecord(
      filterUser,
      document.querySelector("#stats__user .quantity")
    );
    calculatorSumRecord(
      filterBooks,
      document.querySelector("#stats__product .quantity")
    );
    const stats = getStatisticsProduct(filterOrders);
    const listState = Object.entries(stats);
    updateStatisticsProduct(listState);
    sortTopProductByBuy();
    const statsUser = getStatisticsUsers(filterOrders);
    const listStatsUser = Object.entries(statsUser);
    updateStatisticsUsers(listStatsUser);
    sortTopUserBuyAmount(listStatsUser);
  } else {
    let books = getLocalStorage(KEY.BOOKS);
    let users = getLocalStorage(KEY.USERS);
    let orders = getLocalStorage(KEY.ORDER);
    calculatorIncome(orders);
    calculatorSumRecord(
      orders,
      document.querySelector("#stats__order .quantity")
    );
    calculatorSumRecord(
      users,
      document.querySelector("#stats__user .quantity")
    );
    calculatorSumRecord(
      books,
      document.querySelector("#stats__product .quantity")
    );
    const stats = getStatisticsProduct(orders);
    const listStateProduct = Object.entries(stats);
    updateStatisticsProduct(listStateProduct);
    sortTopProductByBuy(listStateProduct);
    const statsUser = getStatisticsUsers(orders);
    const listStatsUser = Object.entries(statsUser);
    updateStatisticsUsers(listStatsUser);
    sortTopUserBuyAmount(listStatsUser);
  }
}

function getDetailOrderOfProduct(productID) {
  const orders = getLocalStorage(KEY.ORDER);
  const listOrder = orders.filter((order) =>
    order.products.some((product) => product.id === productID)
  );
  const orderOfProduct = listOrder.reduce((list, order) => {
    const detail = order.products.find((product) => product.id === productID);

    list.push({
      userID: order.userID,
      orderID: order.orderID,
      ...detail,
    });
    return list;
  }, []);

  return orderOfProduct;
}

function renderListOrderOfProduct(productID) {
  const ordersOfProduct = getDetailOrderOfProduct(productID);
  const listOrder = document.querySelector("#order__product__table");
  listOrder.innerHTML = "";
  const html = ordersOfProduct
    .map((order) => {
      const book = findProductByID(order.id);
      const total = order.quantity * parseInt(book.price);
      return `
      <tr class="table__row">
        <td class="table__col" data-cell="OrderID">${order.orderID}</td>
        <td class="table__col" data-cell="ProductID">${order.userID}</td>
        <td class="table__col" data-cell="Số lượng">${order.quantity}</td>
        <td class="table__col" data-cell="Thành tiền">${formatVND(total)}</td>
        <td class="table__col" data-cell="Chi tiết">
          <button class="action__button" onclick="handleOpenOrderDetail('${
            order.orderID
          }')">Detail</button>
        </td>
      </tr>
    `;
    })
    .join("");
  listOrder.innerHTML = html;
}

function renderListOrderOfUser(userID) {
  const tableOrderOfUser = document.getElementById("order__user__table");
  tableOrderOfUser.innerHTML = "";
  const orders = getLocalStorage(KEY.ORDER);
  const listOrder = orders.filter((order) => order.userID === userID);
  const html = listOrder.map((order) => {
    const total = calculatorPrice(order);
    const quantity = caculatorProduct(order);
    return `
      <tr class="table__row">
        <td class="table__col" data-cell="ID đơn hàng">${order.orderID}</td>
        <td class="table__col" data-cell="Ngày tạo">${order.createdAt}</td>
        <td class="table__col" data-cell="Số lượng">${quantity}</td>
        <td class="table__col" data-cell="Thành tiền">${formatVND(total)}</td>
        <td class="table__col" data-cell="Chi tiết">
          <button class="action__button" onclick="handleOpenOrderDetail('${
            order.orderID
          }')">Detail</button>
        </td>
      </tr>
    `;
  });
  tableOrderOfUser.innerHTML = html;
}

function handleCloseProductStatsModal() {
  const productStatsModal = document.getElementById("product__stats__detail");
  closeModal(productStatsModal, CLASSNAME.OPENFILTER);
}

function handleOpenProductStatsModal(productID) {
  const productStatsModal = document.getElementById("product__stats__detail");
  openModal(productStatsModal, CLASSNAME.OPENFILTER);
  const book = findProductByID(productID);
  const ordersOfProduct = getDetailOrderOfProduct(productID);
  const totalOrder = ordersOfProduct.reduce(
    (data, order) => {
      data.quantity += order.quantity;
      data.income += order.quantity * parseInt(book.price);
      return data;
    },
    {
      quantity: 0,
      income: 0,
    }
  );
  document.getElementById("product__stats__id").innerHTML = book.productID;
  document.getElementById("product__stats__title").innerHTML = book.title;
  document.getElementById("product__stats__bought").innerHTML =
    totalOrder.quantity;
  document.getElementById("product__stats__income").innerHTML = formatVND(
    totalOrder.income
  );
  renderListOrderOfProduct(productID);
}

function handleCloseUserStatsModal() {
  const userStatsModal = document.getElementById("user__stats__detail");
  closeModal(userStatsModal, CLASSNAME.OPENFILTER);
}

function handleOpenUserStatsModal(userID) {
  const userStatsModal = document.getElementById("user__stats__detail");
  openModal(userStatsModal, CLASSNAME.OPENFILTER);
  renderListOrderOfUser(userID);
}

function reactiveSearchUser(searchInput, data) {
  searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value;
    if (!searchValue) {
      updateUserTable(users);
    } else {
      dataFiltered = data.filter((item) => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      updateUserTable(dataFiltered);
    }
  });
}

// Feature OF Admin
function intializeInfoAdmin() {
  const admin = getLocalStorage("admin");
  document.getElementById("admin__id").textContent = admin.adminID;
  document.getElementById("admin__name").textContent = admin.name;
  document.getElementById("admin__email").textContent = admin.email;
  document.getElementById("admin__address").textContent = admin.address;
  document.getElementById("admin__phone").textContent = admin.phoneNumber;
  document.getElementById("admin__created").textContent = admin.createdAt;
}

function handleOpenAdminUpdateModal() {
  const adminUpdateModal = document.getElementById("admin__modal");
  openModal(adminUpdateModal, CLASSNAME.OPENFILTER);
  const admin = getLocalStorage("admin");
  document.getElementById("admin__name__update").value = admin.name;
  document.getElementById("admin__email__update").value = admin.email;
  document.getElementById("admin__address__update").value = admin.address;
  document.getElementById("admin__password__update").value = admin.password;
  document.getElementById("admin__phone__update").value = admin.phoneNumber;
}

function submitUpdateAdmin() {
  let admin = getLocalStorage("admin");
  const updateAdmin = {
    name: document.getElementById("admin__name__update").value,
    email: document.getElementById("admin__email__update").value,
    address: document.getElementById("admin__address__update").value,
    password: document.getElementById("admin__password__update").value,
    phoneNumber: document.getElementById("admin__phone__update").value,
  };

  admin = { ...admin, ...updateAdmin };
  let admins = getLocalStorage(KEY.ADMINS);
  const indexAdminInDB = admins.findIndex(
    (adminDB) => adminDB.adminID === admin.adminID
  );
  admins[indexAdminInDB] = admin;
  setLocalStorage("admin", admin);
  setLocalStorage(KEY.ADMINS, admins);
  intializeInfoAdmin();
  handleCloseAdminUpdateModal();
  createToast(
    TYPE.SUCCESS,
    "<i class='fa-solid fa-check'></i>",
    "Cập nhật thông tin admin thành công"
  );
}

function handleCloseAdminUpdateModal() {
  const adminUpdateModal = document.getElementById("admin__modal");
  closeModal(adminUpdateModal, CLASSNAME.OPENFILTER);
}

// Get Elememt for feature Oreder Filter Modal
const btnOpenFilter = document.querySelector(".btn__filter");
const btnCloseFilter = document.querySelector("#filter__close");
const filterModal = document.querySelector("#filter__modal");

// Feature darkmode lightmode
const body = document.querySelector("body");
const btnTheme = document.querySelector("#btn__mode");

const searchUserInput = document.querySelector("#users__search input");
const searchProductInput = document.querySelector("#warehouse__search input");

// Initial Website

function initialApp() {
  intializeInfoAdmin();
  updateDataStats();
  handleChangeMode(body, btnTheme);
  handleActiveNav(navItems);
  handeleBoxModel(
    btnOpenFilter,
    btnCloseFilter,
    filterModal,
    CLASSNAME.OPENFILTER
  );
  updateUserTable(users);
  updateTableOrder(orders);
  updateTableProduct(books);
  reactiveSearchProduct(searchProductInput, books);
  reactiveSearchOrder(searchOrderInput, orders);
  reactiveSearchUser(searchUserInput, users);
  getFilePathAndPreview("product__img--add");
}

initialApp();
