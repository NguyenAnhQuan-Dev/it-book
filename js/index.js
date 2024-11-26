const KEY = {
  BOOKS: "books",
  USERS: "users",
  ORDER: "orders",
};

let currentUserEmail = "";

function findUserByEmail(email) {
  const users = getLocalStorage("users");
  const user = users.find((user) => user.email === email);
  return user;
}

function addUserIntoDataBase(user) {
  const users = getLocalStorage(KEY.USERS);
  users.push(user);
  setLocalStorage(KEY.USERS, users);
}

function addOrderIntoDataBase(order) {
  const orders = getLocalStorage(KEY.ORDER);
  orders.push(order);
  setLocalStorage(KEY.ORDER, orders);
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

function getDate() {
  const date = new Date();
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function getDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0, nên cộng thêm 1
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// Phan bo sung
function getLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}
function setLocalStorage(key, value) {
  if (value !== undefined) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

const products = getLocalStorage(KEY.BOOKS);

// Init data
function initializeLocalStorage(key, defaultData) {
  if (!getLocalStorage(key)) {
    setLocalStorage(key, defaultData);
  }
  return getLocalStorage(key);
}

// Show menu mobile
function showMenuMobile() {
  const menuHeaderMobile = document.querySelector(".header-mobile__menu");
  const bgOverlay = document.querySelector(".bg-overlay-app");
  if (menuHeaderMobile.classList.contains("open__menu__mobile")) {
    bgOverlay.style.display = "none";
  } else {
    bgOverlay.style.display = "block";
  }
  menuHeaderMobile.classList.toggle("open__menu__mobile");
}
function showCategoryMobile() {
  const categoryMobile = document.querySelector("#show-category-mobile");
  categoryMobile.classList.toggle("active");
}
//Phan icon header
const dropdownUser = document.getElementById("dropdown-user");
const dropdownMenu = document.getElementById("dropdown-menu-user");

dropdownUser.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", (event) => {
  if (
    !dropdownUser.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.style.display = "none";
  }
});
//phan banner
let currentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  slides[currentIndex].classList.remove("active");

  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  slides[currentIndex].classList.add("active");
  updateSlidePosition();
  updateDots();
}

function setCurrentSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides[currentIndex].classList.remove("active");

  currentIndex = index;
  slides[currentIndex].classList.add("active");
  updateSlidePosition();
  updateDots();
}

function updateSlidePosition() {
  const slidesContainer = document.querySelector(".slides");
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

setInterval(() => changeSlide(1), 5000);
updateDots();

//Phan List item
document.addEventListener("DOMContentLoaded", function () {
  const popularSections = document.querySelectorAll(".popular");
  const listItem = document.querySelector(".list-item");
  const scrollSmoothly = (itemList, direction) => {
    console.log(listItem.offsetWidth);
    const distance = listItem.offsetWidth; // Điều chỉnh khoảng cách cuộn
    const duration = 100; // Điều chỉnh thời gian cuộn
    const start = itemList.scrollLeft;
    const end = start + direction * distance;
    const change = end - start;
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      itemList.scrollLeft = start + change * easeInOutQuad(progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  popularSections.forEach((section) => {
    const listBtn = section.querySelector(".title-popular-btn");
    const nextBtn = listBtn.querySelector(".nextbtn");
    const prevBtn = listBtn.querySelector(".prevbtn");
    const itemList = section.querySelector(".list-item");

    nextBtn.addEventListener("click", () => {
      scrollSmoothly(itemList, 1);
    });

    prevBtn.addEventListener("click", () => {
      scrollSmoothly(itemList, -1);
    });
  });
});
//danh sach sp trang chu
const productTemplate = document.querySelector(".product-template");

function createProductList(products, targetId, startIndex) {
  const list = document.getElementById(targetId);
  const endIndex = startIndex + 5;
  const selectedProducts = products.slice(startIndex, endIndex);
  selectedProducts.forEach((product) => {
    const clone = document.importNode(productTemplate.content, true); // Sử dụng 'content'
    clone
      .querySelector(".item")
      .setAttribute("data-id", `${product.productID}`);
    clone.querySelector(".name-item").textContent = product.title;
    clone.querySelector(".div").textContent = product.author; // Có thể điều chỉnh theo nhu cầu
    clone.querySelector(".star").textContent = product.ratting;
    clone.querySelector(
      ".cost-item"
    ).innerHTML = `${product.price} <span>đ</span>`;
    clone.querySelector(".img-item img").src = product.img;
    list.appendChild(clone);
  });
}
// Tạo danh sách sản phẩm cho cả hai list
createProductList(products, "list1", 0);
createProductList(products, "list2", 5);
//Them data-index cho cac san pham trang chu
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");

  items.forEach((item, index) => {
    item.setAttribute("data-index", index);
  });
});
//Phan darkmode
const body = document.querySelector("body");
const btnTheme = document.querySelector("#btn-theme");
btnTheme.addEventListener("click", () => {
  body.classList.toggle("dark");
  btnTheme.classList.toggle("status");
});
// Gio hangmy
//Show gio hang
document.getElementById("showcart").style.display = "none";
function showcart() {
  if (currentUserEmail == "") {
    alert("Để mua hàng, xin vui lòng đăng nhập");
  } else {
    var x = document.getElementById("showcart");
    if (x.classList.contains("visible")) {
      x.classList.remove("visible"); // Xóa lớp nếu giỏ hàng đang mở
      setTimeout(() => {
        x.style.display = "none"; // Ẩn giỏ hàng sau khi hiệu ứng hoàn tất
      }, 300); // Thời gian khớp với thời gian CSS transition
    } else {
      x.style.display = "block"; // Hiển thị giỏ hàng
      setTimeout(() => {
        x.classList.add("visible"); // Thêm lớp để hiển thị hiệu ứng
      }, 10); // Thêm một độ trễ nhỏ để hiệu ứng chạy
    }
    showmycart(); // Cập nhật nội dung giỏ hàng
  }
}

//submit len admin
var hoadon = [];
var email;
console.log(email);
var pttt;
// lat dat
var giohang = []; // Khởi tạo giỏ hàng
var hoadon = [];
var cartCount = 0;
function themvaogiohang(x) {
  var itemDiv = x.closest(".item");
  var hinh = itemDiv.querySelector(".img-item img").src;
  var tensp = itemDiv.querySelector(".name-item").innerText;
  var giaTienText = itemDiv.querySelector(".cost-item").innerText;
  var giaTien = parseFloat(giaTienText.replace(/[^0-9.-]+/g, ""));
  var idsp = itemDiv.getAttribute("data-id");

  // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
  var kt = false;
  for (let i = 0; i < giohang.length; i++) {
    if (giohang[i][0] === tensp) {
      kt = true;
      break;
    }
  }
  if (!kt) {
    // Thêm sản phẩm vào giỏ hàng
    var sp = [tensp, hinh, giaTien, idsp];

    // Thêm sản phẩm vào giỏ hàng và hoá đơn
    giohang.push(sp);
    hoadon.push({ id: idsp, quantity: 1 }); // Lưu thông tin vào hoadon

    // Cập nhật số lượng giỏ hàng
    cartCount++;
    updateCartCount();
  }

  showmycart(); // Cập nhật giỏ hàng ngay sau khi thêm sản phẩm
}

//dem so luong san pham
function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.innerText = cartCount;

  // Hiển thị số nếu lớn hơn 0
  if (cartCount > 0) {
    cartCountElement.style.display = "inline";
  } else {
    cartCountElement.style.display = "none";
  }
}
function showmycart() {
  var ttgh = "";
  var ttghmb = "";
  var tong = 0; // Tạo biến tổng

  for (let i = 0; i < giohang.length; i++) {
    // Lấy số lượng từ mảng hoặc mặc định là 1
    var soLuong = giohang[i][4] || 1;
    var giaTien = giohang[i][2];
    var thanhTien = soLuong * giaTien;

    tong += thanhTien;

    // Render giỏ hàng desktop
    ttgh += `<tr>
        <td>${i + 1}</td>
        <td>${giohang[i][0]}</td>
        <td><img src="${giohang[i][1]}" alt="" /></td>
        <td><input type="number" value="${soLuong}" min="1" onchange="updateTotal(this, ${giaTien}, ${i})" data-id="${
      giohang[i][3]
    }" /></td>
        <td class="thanh-tien">${thanhTien}</td>
        <td><button onclick="xoasp(${i})">Xoá</button></td>
      </tr>`;

    // Render giỏ hàng mobile
    ttghmb += `<tr>
        <td>${i + 1}</td>
        <td>${giohang[i][0]}</td>
        <td><img src="${giohang[i][1]}" alt="" /></td>
        <td><input type="number" value="${soLuong}" min="1" onchange="updateTotal(this, ${giaTien}, ${i})" data-id="${
      giohang[i][3]
    }" /></td>
        <td class="thanh-tien-mobile">${thanhTien}</td>
        <td><button onclick="xoasp(${i})">Xoá</button></td>
      </tr>`;
  }

  ttgh += `<tfoot>
      <tr>
        <td colspan="2" style="border-bottom:none;">Giảm giá <span id="value-discount">${getDiscountValue()}</span></td>
        <td colspan="2" style="text-align: right;border-bottom:none;">Tổng :</td>
        <td id="tong-tien" colspan="2" style="border-bottom:none;">${tong}</td>
      </tr>
    </tfoot>`;

  ttghmb += `<tfoot>
      <tr>
        <td colspan="2" style="border-bottom:none;">Giảm giá <span id="value-discount">${getDiscountValue()}</span></td>
        <td colspan="2" style="text-align: right;border-bottom:none;">Tổng :</td>
        <td id="tong-tien-mobile" colspan="2" style="border-bottom:none;">${tong}</td>
      </tr>
    </tfoot>`;

  document.getElementById("mycart").innerHTML = ttgh; // Cập nhật giỏ hàng desktop
  document.getElementById("mycart-mobile").innerHTML = ttghmb; // Cập nhật giỏ hàng mobile
  updateGrandTotal(); // Cập nhật tổng ban đầu
}
function updateTotal(input, giaTien, index) {
  var soLuong = parseInt(input.value); // Lấy số lượng từ input
  if (soLuong <= 0) {
    soLuong = 1; // Nếu số lượng nhỏ hơn 1, đặt lại là 1
    input.value = 1;
  }

  // Tính lại thành tiền
  var thanhTien = soLuong * giaTien;

  // Cập nhật số lượng vào mảng giohang
  giohang[index][4] = soLuong; // Cập nhật số lượng mới
  // Gọi lại hàm showmycart để cập nhật toàn bộ giao diện
  giohang[index].push(soLuong); // Cập nhật số lượng trong giỏ hàng

  // Cập nhật lại số lượng trong hoadon
  hoadon[index].quantity = soLuong; // Cập nhật số lượng sản phẩm trong hoá đơn
  showmycart();
}

function updateGrandTotal() {
  var tong = 0;
  var thanhTienCells = document.querySelectorAll(".thanh-tien");

  // Tính tổng tất cả thành tiền
  thanhTienCells.forEach(function (cell) {
    tong += parseFloat(cell.innerText) || 0; // Chuyển đổi thành số và cộng vào tổng
  });

  // Lấy giá trị giảm giá
  var discountValue = getDiscountValue();

  // Kiểm tra giá trị giảm giá là số hay phần trăm
  if (
    typeof discountValue === "number" &&
    discountValue > 0 &&
    discountValue <= 1
  ) {
    // Nếu giá trị giảm giá là phần trăm (giảm theo tỷ lệ)
    tong = tong - tong * discountValue; // Trừ phần trăm giảm giá
  } else {
    // Nếu giá trị giảm giá là số (tiền giảm)
    tong -= discountValue; // Trừ đi tiền giảm giá
  }

  // Cập nhật tổng vào footer
  document.getElementById("tong-tien").innerText = tong.toFixed(2); // Đảm bảo làm tròn đến 2 chữ số thập phân
  document.getElementById("tong-tien-mobile").innerText = tong.toFixed(2);
}
function xoasp(index) {
  // Xóa sản phẩm trong giỏ hàng
  giohang.splice(index, 1); // Xóa sản phẩm tại chỉ số index
  showmycart(); // Cập nhật giỏ hàng
  cartCount--; // Giảm số lượng sản phẩm
  updateCartCount();
}

function xoatatca() {
  giohang = []; // Xóa tất cả sản phẩm trong giỏ hàng
  showmycart(); // Cập nhật giỏ hàng
  cartCount = 0;
  updateCartCount();
}
let productsPerPage = 8;
let currentPage = 1;
let filteredProducts = [...products];
console.log("run");

console.log("run");
// Hiển thị sản phẩm
function displayProducts(books) {
  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = ""; // Xóa sản phẩm cũ

  books.forEach((product) => {
    const productItem = document.createElement("div");

    productItem.className = "product-item";
    productItem.innerHTML = `
    <div class="item" data-index="0" data-id=${product.productID}>
      <div class="img-item">
          <img src="${product.img}" alt="${product.title}"></div>
          <div class="product-info">
              <div class="name-item" >${product.title}</div>
              <div class="cost-item">${product.price} </div>
              <div>${product.publicationDate}</div>
             <button class="btn-show-details" onclick="showProductDetails('${product.productID}')">Xem chi tiết</button>
              <button  onclick="themvaogiohang(this)">them vao gio</button>
          </div>
          
      </div>
          
      `;
    productGrid.appendChild(productItem);
  });
}

// Hiển thị modal sản phẩm
function showProductDetails(productId) {
  const product = products.find((p) => p.productID === productId);
  document.getElementById("modalImage").src = product.img;
  document.getElementById("modalTitle").textContent = product.title;
  document.getElementById("modalPrice").textContent = "Giá: " + product.price;
  document.getElementById("modalrating").textContent =
    "Số sao:" + product.ratting;
  document.getElementById("modalHashTags").textContent =
    "Thể loại:" + product.subject;
  document.getElementById("modalLanguage").textContent =
    "Ngôn ngữ :" + product.language;
  document.getElementById("modal Page").textContent =
    "Số trang:" + product.pages;
  document.getElementById("eDescription").textContent = product.description;
  document.getElementById("tagz").textContent = product.tags;
  document.getElementById("modalOverlay").style.display = "flex";
}

// Ẩn modal
function hideModal() {
  document.getElementById("modalOverlay").style.display = "none";
}

// Chuyển đổi tab
function switchTab(event, tabId) {
  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((content) => content.classList.remove("active"));

  event.currentTarget.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}
// Hàm xem chi tiết sản phẩm

let selectedFilters = new Set();

function toggleFilter(button) {
  if (selectedFilters.has(button.value)) {
    selectedFilters.delete(button.value);
    button.classList.remove("active");
  } else {
    selectedFilters.add(button.value);
    button.classList.add("active");
  }
  filterProducts();
}

// Tìm kiếm sản phẩm và lọc theo nhiều tiêu chí
function filterProducts() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  const priceMin = parseInt(document.getElementById("price-min").value) || 0;
  const priceMax =
    parseInt(document.getElementById("price-max").value) || Infinity;
  const rating = parseInt(document.getElementById("ratting").value) || 0;
  const selectedtags = document.getElementById("tags").value;

  // Lọc sản phẩm theo tên, giá, đánh giá và thể loại
  filteredProducts = products.filter((product) => {
    const matchesName = product.title.toLowerCase().includes(searchInput);
    const withinPriceRange =
      product.price >= priceMin && product.price <= priceMax;
    const meetsRating = rating === 0 || product.ratting >= rating;
    const matchesTags =
      selectedtags === "" || product.tags.includes(selectedtags);

    return matchesName && withinPriceRange && meetsRating && matchesTags;
  });

  // Kiểm tra nếu không có sản phẩm nào phù hợp
  if (filteredProducts.length === 0) {
    document.getElementById("no-products-message").style.display = "block";
    document.getElementById("product-grid").innerHTML = "";
  } else {
    document.getElementById("no-products-message").style.display = "none";
    currentPage = 1;
    changePage(currentPage); // Hiển thị sản phẩm phù hợp
  }
}
// Sự kiện khi người dùng nhập vào ô tìm kiếm và các bộ lọc
document
  .getElementById("search-input")
  .addEventListener("input", filterProducts);
document.getElementById("price-min").addEventListener("input", filterProducts);
document.getElementById("price-max").addEventListener("input", filterProducts);
document.getElementById("ratting").addEventListener("input", filterProducts);
document.getElementById("tags").addEventListener("input", filterProducts);

// Gọi hàm khởi tạo khi trang được tải
// Hàm để reset các bộ lọc về trạng thái mặc định
function resetFilters() {
  hideAllProducts();
  document.getElementById("price-min").value = "";
  document.getElementById("price-max").value = "";
  document.getElementById("rating").value = "";
  document.getElementById("category").value = "";
  selectedFilters.clear(); // Xóa các bộ lọc đã chọn trước đó nếu có
  document
    .querySelectorAll(".filter-button.active")
    .forEach((button) => button.classList.remove("active")); // Xóa lớp 'active' của nút lọc
}
// Hàm ẩn toàn bộ sản phẩm
function hideAllProducts() {
  const productElements = document.querySelectorAll(".products");
  productElements.forEach((productid) => {
    productid.classList.add("hidden");
  });
}
// Hàm hiển thị sản phẩm sau khi lọc
function displayFilteredProducts(filteredProducts) {
  hideAllProducts(); // Đảm bảo tất cả sản phẩm đều ẩn trước
  filteredProducts.forEach((product) => {
    const productElement = document.getElementById(
      `product${product.productID}`
    );
    if (productElement) {
      productElement.classList.remove("hidden"); // Hiển thị các sản phẩm phù hợp
    }
  });
}
function applyFilters() {
  filterProducts();
  // Thực hiện các thao tác áp dụng bộ lọc ở đây
  resetFilters();
  closeFilterModal(); // Đóng modal sau khi áp dụng bộ lọc
}
function closeFilterModal() {
  document.getElementById("filter-modal").style.display = "none";
}

// Hàm mở modal
function openFilterModal() {
  document.getElementById("filter-modal").style.display = "block";
}

// Hàm đóng modal
function closeFilterModal() {
  document.getElementById("filter-modal").style.display = "none";
}

// Mở và đóng giao diện tìm kiếm
function openSearch() {
  document.getElementById("search-box").style.display = "block";
  document.getElementById("search-overlay").style.display = "block";
  currentPage = 1;
  changePage(currentPage);
  resetFilters();
}

function closeSearch() {
  document.getElementById("search-box").style.display = "none";
  document.getElementById("search-overlay").style.display = "none";
}
// Cập nhật phân trang
function updatePagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.onclick = () => changePage(i);
    pageButton.className = i === currentPage ? "active" : "";
    pagination.appendChild(pageButton);
  }
}

// Thay đổi trang
function changePage(page) {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  if (page < 1 || page > totalPages) return;

  currentPage = page;
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const productsToShow = filteredProducts.slice(start, end);

  displayProducts(productsToShow);
  updatePagination();
}
// Hàm khởi tạo
function init() {
  filteredProducts = [...products]; // Đảm bảo danh sách sản phẩm không thay đổi
  changePage(1);
}
//Xem chi tiet
function SeeDetail() {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const buttons = item.querySelectorAll(".menu-right-product button");
    const tabContents = item.querySelectorAll(".tab-content-right-product");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // Xóa lớp 'active' trên tất cả các nút và nội dung tab
        buttons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // Thêm lớp 'active' cho nút và nội dung tab được nhấp
        button.classList.add("active");
        const targetTab = button.getAttribute("data-target");
        item.querySelector(`#${targetTab}`).classList.add("active");
      });
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  // Lấy tất cả các tab nút trong spe-product-item
  SeeDetail();
});
//An hien
// Hàm mở chi tiết sản phẩm Cho trang chủ và danh mục sách
function xemchitiet(button) {
  const item = button.closest(".item"); // Tìm phần tử cha gần nhất
  const detailSection = item.querySelector(".spe-product-item");
  const overlay = document.getElementById("spe-overlay");
  const Language_overlay = document.getElementById("languages-spe-overlay");
  const AI_overlay = document.getElementById("AI-spe-overlay");
  const DATA_overlay = document.getElementById("DATA-spe-overlay");
  const ACCHITECTURE_overlay = document.getElementById(
    "ACCHITECTURE-spe-overlay"
  );
  const list = button.getAttribute("data-list");
  const index = item.getAttribute("data-index");
  const form = item.getAttribute("data-form");
  selectedProductID = item.getAttribute("product_ID");
  if (list === "Home_page") {
    const product = products[index]; // Lấy thông tin sản phẩm tương ứng
    // Tìm phần tử chi tiết sản phẩm trong item
    const speProductItem = item.querySelector(".spe-product-item");

    // Cập nhật thông tin sản phẩm
    speProductItem.querySelector(".product-img").src = product.img;
    speProductItem.querySelector(".product-title").innerText =
      "Tên :" + product.title;
    speProductItem.querySelector(".product-rating").innerText =
      "Số sao :" + product.rating;
    speProductItem.querySelector(".product-category").innerText =
      "Thể loại :" + product.subject;
    speProductItem.querySelector(".product-language").innerText =
      "Ngôn ngữ :" + product.language;
    speProductItem.querySelector(".product-pages").innerText =
      "Số trang :" + product.pages;
    speProductItem.querySelector(".cost").innerText = "Giá :" + product.price;
    speProductItem.querySelector(".product-des").innerText =
      product.description;
    speProductItem.querySelector(".product-tag").href = product.tags;

    // Hiện chi tiết và overlay
    detailSection.style.display = "block";
    overlay.style.display = "block"; // Hiện overlay
  }
  // Cập nhật danh sách cho Phần Languages
  else if (list === "Languages_page") {
    const filterdProducts = products.filter(
      (product) =>
        product.subject === "Programming" || product.subject === "Hacking"
    );
    const product_1 = filterdProducts.find(
      (p) => p.productID == selectedProductID
    ); // Lấy thông tin sản phẩm từ mảng
    const speProductItem = item.querySelector(".spe-product-item");

    // Cập nhật thông tin sản phẩm
    speProductItem.querySelector(".product-img").src = product_1.img;
    speProductItem.querySelector(".product-title").innerText =
      "Tên :" + product_1.title;
    speProductItem.querySelector(".product-rating").innerText =
      "Số sao :" + product_1.rating;
    speProductItem.querySelector(".product-category").innerText =
      "Thể loại :" + product_1.subject;
    speProductItem.querySelector(".product-language").innerText =
      "Ngôn ngữ :" + product_1.language;
    speProductItem.querySelector(".product-pages").innerText =
      "Số trang :" + product_1.page;
    speProductItem.querySelector(".cost").innerText = "Giá :" + product_1.price;
    speProductItem.querySelector(".product-des").innerText =
      product_1.description;
    speProductItem.querySelector(".product-tag").href = product_1.tags;

    // Hiện chi tiết và overlay
    detailSection.style.display = "block";
    Language_overlay.style.display = "block"; // Hiện overlay
    console.log(".", form);
  }
  // Cập nhật danh sách cho phần AI
  else if (list === "AI_page") {
    const filterdProducts = products.filter(
      (product) =>
        product.subject === "Software Architecture" ||
        product.subject === "Cybersecurity"
    );
    const product_1 = filterdProducts.find(
      (p) => p.productID == selectedProductID
    ); // Lấy thông tin sản phẩm từ mảng
    const speProductItem = item.querySelector(".spe-product-item");

    // Cập nhật thông tin sản phẩm
    speProductItem.querySelector(".product-img").src = product_1.img;
    speProductItem.querySelector(".product-title").innerText =
      "Tên :" + product_1.title;
    speProductItem.querySelector(".product-rating").innerText =
      "Số sao :" + product_1.rating;
    speProductItem.querySelector(".product-category").innerText =
      "Thể loại :" + product_1.subject;
    speProductItem.querySelector(".product-language").innerText =
      "Ngôn ngữ :" + product_1.language;
    speProductItem.querySelector(".product-pages").innerText =
      "Số trang :" + product_1.page;
    speProductItem.querySelector(".cost").innerText = "Giá :" + product_1.price;
    speProductItem.querySelector(".product-des").innerText =
      product_1.description;
    speProductItem.querySelector(".product-tag").href = product_1.tags;

    // Hiện chi tiết và overlay
    detailSection.style.display = "block";
    AI_overlay.style.display = "block"; // Hiện overlay
    console.log(".", form);
  } else if (list === "DATA_page") {
    const filterdProducts = products.filter(
      (product) =>
        product.subject === "DIY Projects" ||
        product.subject === "Cloud Computing"
    );
    const product_1 = filterdProducts.find(
      (p) => p.productID == selectedProductID
    ); // Lấy thông tin sản phẩm từ mảng
    const speProductItem = item.querySelector(".spe-product-item");

    // Cập nhật thông tin sản phẩm
    speProductItem.querySelector(".product-img").src = product_1.img;
    speProductItem.querySelector(".product-title").innerText =
      "Tên :" + product_1.title;
    speProductItem.querySelector(".product-rating").innerText =
      "Số sao :" + product_1.rating;
    speProductItem.querySelector(".product-category").innerText =
      "Thể loại :" + product_1.subject;
    speProductItem.querySelector(".product-language").innerText =
      "Ngôn ngữ :" + product_1.language;
    speProductItem.querySelector(".product-pages").innerText =
      "Số trang :" + product_1.page;
    speProductItem.querySelector(".cost").innerText = "Giá :" + product_1.price;
    speProductItem.querySelector(".product-des").innerText =
      product_1.description;
    speProductItem.querySelector(".product-tag").href = product_1.tags;

    // Hiện chi tiết và overlay
    detailSection.style.display = "block";
    DATA_overlay.style.display = "block"; // Hiện overlay
    console.log(".", form);
  } else if (list === "ACCHITECTURE_page") {
    const filterdProducts = products.filter(
      (product) =>
        product.subject === "Web Development" || product.subject === "Marketing"
    );
    const product_1 = filterdProducts.find(
      (p) => p.productID == selectedProductID
    ); // Lấy thông tin sản phẩm từ mảng
    const speProductItem = item.querySelector(".spe-product-item");

    // Cập nhật thông tin sản phẩm
    speProductItem.querySelector(".product-img").src = product_1.img;
    speProductItem.querySelector(".product-title").innerText =
      "Tên :" + product_1.title;
    speProductItem.querySelector(".product-rating").innerText =
      "Số sao :" + product_1.rating;
    speProductItem.querySelector(".product-category").innerText =
      "Thể loại :" + product_1.subject;
    speProductItem.querySelector(".product-language").innerText =
      "Ngôn ngữ :" + product_1.language;
    speProductItem.querySelector(".product-pages").innerText =
      "Số trang :" + product_1.page;
    speProductItem.querySelector(".cost").innerText = "Giá :" + product_1.price;
    speProductItem.querySelector(".product-des").innerText =
      product_1.description;
    speProductItem.querySelector(".product-tag").href = product_1.tags;

    // Hiện chi tiết và overlay
    detailSection.style.display = "block";
    ACCHITECTURE_overlay.style.display = "block"; // Hiện overlay
    console.log(".", form);
  }
}

// Hàm để ẩn phần chi tiết khi click vào overlay
function hideDetail() {
  const detailSections = document.querySelectorAll(".spe-product-item");
  const overlay = document.getElementById("spe-overlay");
  const Language_overlay = document.getElementById("languages-spe-overlay");
  const AI_overlay = document.getElementById("AI-spe-overlay");
  const DATA_overlay = document.getElementById("DATA-spe-overlay");
  const ACCHITECTURE_overlay = document.getElementById(
    "ACCHITECTURE-spe-overlay"
  );
  detailSections.forEach((detail) => {
    detail.style.display = "none"; // Ẩn tất cả chi tiết sản phẩm
  });
  overlay.style.display = "none"; // Ẩn overlay
  Language_overlay.style.display = "none"; // Ẩn overlay phần Languages
  AI_overlay.style.display = "none"; // Ẩn overlay phần AI
  DATA_overlay.style.display = "none"; // Ẩn overlay phần DATA
  ACCHITECTURE_overlay.style.display = "none"; // Ẩn overlay phẩn ACCHITECTURE
}

// Thêm sự kiện click cho overlay
document.getElementById("spe-overlay").addEventListener("click", hideDetail);
document
  .getElementById("languages-spe-overlay")
  .addEventListener("click", hideDetail);
document.getElementById("AI-spe-overlay").addEventListener("click", hideDetail);
document
  .getElementById("DATA-spe-overlay")
  .addEventListener("click", hideDetail);
document
  .getElementById("ACCHITECTURE-spe-overlay")
  .addEventListener("click", hideDetail);

//Phan order
// Mở modal khi nhấn vào nút "Đặt hàng"
function openOrderModal() {
  document.getElementById("orderModal").style.display = "block";
  document.getElementById("order-overlay").style.display = "block";
}

// Đóng modal khi nhấn vào nút đóng hoặc overlay
function closeOrderModal() {
  document.getElementById("orderModal").style.display = "none";
  document.getElementById("order-overlay").style.display = "none";
}
// Hiển thị form nhập địa chỉ mới và thêm thuộc tính 'required' nếu chọn "Nhập địa chỉ mới"
function toggleAddressForm() {
  const inputAddress = document.querySelector("#input__address");
  const inputAddressNew = document.querySelector("#input__address--new");
  const addressForm = document.getElementById("newAddressForm");
  const fullName = document.getElementById("fullName");
  const phoneNumber = document.getElementById("phoneNumber");
  const address = document.getElementById("address");
  let diachi;
  console.log("Dia chi moi");
  if (inputAddressNew.checked) {
    addressForm.style.display = "block";
    fullName.setAttribute("required", true);
    phoneNumber.setAttribute("required", true);
    address.setAttribute("required", true);
    diachi = address.value;
  }
  if (inputAddress.checked) {
    console.log("Dia chi cu");
    addressForm.style.display = "none";
    fullName.removeAttribute("required");
    phoneNumber.removeAttribute("required");
    address.removeAttribute("required");
    diachi = document.querySelector(".addressUP").textContent;
    return diachi;
  }
  console.log(diachi);
  return diachi;
}

// Hiển thị form thanh toán tùy theo phương thức

// function togglePaymentForm(paymentType) {
//   const paymentForm = document.getElementById("paymentForm");
//   paymentForm.innerHTML = ""; // Reset nội dung cũ

//   if (paymentType === "cash") {
//     paymentForm.innerHTML = "<p>Bạn sẽ thanh toán khi nhận hàng.</p>";
//     pttt = "OCD";
//   } else if (paymentType === "bankTransfer") {
//     paymentForm.innerHTML =
//       "<p>Thông tin tài khoản ngân hàng: ...</p><p>Vui lòng ghi rõ mã đơn hàng khi chuyển khoản.</p>";
//     pttt = "BANK";
//   } else if (paymentType === "card") {
//     paymentForm.innerHTML = `
//       <div><input class="order-card" type="text" placeholder="Tên trên thẻ" required></div>
//       <div> <input class="order-card" type="text" placeholder="Số thẻ" required></div>
//       <div><input class="order-card" type="text" placeholder="Ngày hết hạn (MM/YY)" required></div>
//       <div><input class="order-card" type="text" placeholder="CVV" required></div>
//     `;
//     pttt = "CARD";
//     return pttt
//   }
// }

// VERSION FIX
function togglePaymentForm() {
  const paymentForm = document.getElementById("paymentForm");
  const methodPay = document.getElementById("method-pay");
  let method = "OCD";
  paymentForm.innerHTML = "";

  if (methodPay.value === "OCD") {
    paymentForm.innerHTML = `<p>Bạn sẽ thanh toán khi nhận hàng.</p>`;
    method = "OCD";
  } else if (methodPay.value === "BANK") {
    paymentForm.innerHTML = `<p>Thông tin tài khoản ngân hàng: ...</p><p>Vui lòng ghi rõ mã đơn hàng khi chuyển khoản.</p>`;
    method = "BANK";
  } else if (methodPay.value === "VISA") {
    paymentForm.innerHTML = `<div> <input class="order-card" type="text" placeholder="Số thẻ" required></div>`;
    method = "VISA";
  }
  return method;
}

// Kiểm tra và xử lý đơn hàng khi người dùng nhấn "Xác nhận"
function submitOrder(event) {
  event.preventDefault(); // Ngừng hành động gửi form mặc định
  console.log("'submit");
  // Kiểm tra các trường bắt buộc trong form
  const addressOption = document.querySelector(
    'input[name="addressOption"]:checked'
  ).checked;

  // Kiểm tra nếu người dùng chọn "Nhập địa chỉ mới" và các trường đó đã được điền đầy đủ
  if (
    addressOption === "new" &&
    !document.querySelector('#newAddressForm input[placeholder="Địa chỉ"]')
      .value
  ) {
    alert("Vui lòng nhập địa chỉ.");
    return false;
  }

  // Kiểm tra thông tin thanh toán
  // if (paymentOption === "card") {
  //   const cardName = document.querySelector(
  //     '.order-card[placeholder="Tên trên thẻ"]'
  //   ).value;
  //   const cardNumber = document.querySelector(
  //     '.order-card[placeholder="Số thẻ"]'
  //   ).value;
  //   const expiryDate = document.querySelector(
  //     '.order-card[placeholder="Ngày hết hạn (MM/YY)"]'
  //   ).value;
  //   const cvv = document.querySelector('.order-card[placeholder="CVV"]').value;

  //   if (!cardName || !cardNumber || !expiryDate || !cvv) {
  //     alert("Vui lòng điền đầy đủ thông tin thẻ.");
  //     return false;
  //   }
  // }
  email = document.querySelector(".emailUP").textContent;
  // Tiến hành gửi dữ liệu (hoặc làm hành động khác)
  alert("Đơn hàng của bạn đã được xác nhận!");
  closeOrderModal(); // Đóng modal sau khi gửi đơn
  // FIX
  const generateID = createIdGenerator();
  const orders = getLocalStorage(KEY.ORDER);
  const order = {
    orderID: generateID(),
    userID: getLocalStorage("user").userId,
    createdAt: getDateTime(),
    fromVendor: toggleAddressForm(),
    status: "Pending",
    method: togglePaymentForm(),
    products: hoadon,
  };
  addOrderIntoDataBase(order);
  console.log(getLocalStorage(KEY.ORDER));
  hoadon = [];
  xoatatca();
  addInvoice();
  return true; // Đảm bảo gửi form nếu không có lỗi
}

// Phần Danh mục sách (Thành)

// Hiển thị từng Page

function showPage(pageId) {
  const Pages = document.querySelectorAll(".page");
  Pages.forEach((page) => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// Thêm danh sách cho phần Languages,AI,DATA,ACCHITECTURE
const languages_productTemplate = document.querySelector(
  ".product-template-languages"
);
const AI_productTemplate = document.querySelector(".product-template-AI");
const DATA_productTemplate = document.querySelector(".product-template-DATA");
const ACCHITECTURE_productTemplate = document.querySelector(
  ".product-template-ACCHITECTURE"
);

function Language_createProductList(products, targetId, startIndex) {
  const list = document.getElementById(targetId);
  const endIndex = startIndex + 16;
  const filterdProducts = products.filter(
    (product) =>
      product.subject === "Programming" || product.subject === "Hacking"
  );
  const selectedProducts = filterdProducts.slice(startIndex, endIndex);
  list.innerHTML = "";
  selectedProducts.forEach((product, form) => {
    const clone = document.importNode(languages_productTemplate.content, true); // Sử dụng 'content'
    clone.querySelector(".name-item").textContent = product.title;
    clone.querySelector(".div").textContent = product.author; // Có thể điều chỉnh theo nhu cầu
    clone.querySelector(".star").textContent = product.ratting;
    clone.querySelector(
      ".cost-item"
    ).innerHTML = `${product.price} <span>đ</span>`;
    clone.querySelector(".img-item img").src = product.img;

    const items_ID = clone.querySelector(".item");
    items_ID.setAttribute("data-form", startIndex + form);
    items_ID.setAttribute("product_ID", product.productID);

    list.appendChild(clone);
  });
}
// Thêm sách cho AI
function AI_createProductList(products, targetId, startIndex) {
  const list = document.getElementById(targetId);
  const endIndex = startIndex + 16;
  const filterdProducts = products.filter(
    (product) =>
      product.subject === "Cloud Computing" ||
      product.subject === "Database" ||
      product.subject === "Programming"
  );
  const selectedProducts = filterdProducts.slice(startIndex, endIndex);
  list.innerHTML = "";
  selectedProducts.forEach((product, form) => {
    const clone = document.importNode(AI_productTemplate.content, true); // Sử dụng 'content'
    clone.querySelector(".name-item").textContent = product.title;
    clone.querySelector(".div").textContent = product.author; // Có thể điều chỉnh theo nhu cầu
    clone.querySelector(".star").textContent = product.ratting;
    clone.querySelector(
      ".cost-item"
    ).innerHTML = `${product.price} <span>đ</span>`;
    clone.querySelector(".img-item img").src = product.img;

    const items_ID = clone.querySelector(".item");
    items_ID.setAttribute("data-form", startIndex + form);
    items_ID.setAttribute("product_ID", product.productID);

    list.appendChild(clone);
  });
}
// Thêm sách cho DATA
function DATA_createProductList(products, targetId, startIndex) {
  const list = document.getElementById(targetId);
  const endIndex = startIndex + 16;
  const filterdProducts = products.filter(
    (product) =>
      product.subject === "Database" || product.subject === "Cloud Computing"
  );
  const selectedProducts = filterdProducts.slice(startIndex, endIndex);
  list.innerHTML = "";
  selectedProducts.forEach((product, form) => {
    const clone = document.importNode(DATA_productTemplate.content, true); // Sử dụng 'content'
    clone.querySelector(".name-item").textContent = product.title;
    clone.querySelector(".div").textContent = product.author; // Có thể điều chỉnh theo nhu cầu
    clone.querySelector(".star").textContent = product.ratting;
    clone.querySelector(
      ".cost-item"
    ).innerHTML = `${product.price} <span>đ</span>`;
    clone.querySelector(".img-item img").src = product.img;

    const items_ID = clone.querySelector(".item");
    items_ID.setAttribute("data-form", startIndex + form);
    items_ID.setAttribute("product_ID", product.productID);

    list.appendChild(clone);
  });
}
// Thêm sách cho ACCHITECTURE
function ACCHITECTURE_createProductList(products, targetId, startIndex) {
  const list = document.getElementById(targetId);
  const endIndex = startIndex + 16;
  const filterdProducts = products.filter(
    (product) =>
      product.subject === "DIY Projects" ||
      product.subject === "Software Architecture"
  );
  const selectedProducts = filterdProducts.slice(startIndex, endIndex);
  list.innerHTML = "";
  selectedProducts.forEach((product, form) => {
    const clone = document.importNode(
      ACCHITECTURE_productTemplate.content,
      true
    ); // Sử dụng 'content'
    clone.querySelector(".name-item").textContent = product.title;
    clone.querySelector(".div").textContent = product.author; // Có thể điều chỉnh theo nhu cầu
    clone.querySelector(".star").textContent = product.ratting;
    clone.querySelector(
      ".cost-item"
    ).innerHTML = `${product.price} <span>đ</span>`;
    clone.querySelector(".img-item img").src = product.img;

    const items_ID = clone.querySelector(".item");
    items_ID.setAttribute("data-form", startIndex + form);
    items_ID.setAttribute("product_ID", product.productID);

    list.appendChild(clone);
  });
}

Language_createProductList(getLocalStorage(KEY.BOOKS), "languages-list", 0);
AI_createProductList(getLocalStorage(KEY.BOOKS), "AI-list", 0);
DATA_createProductList(getLocalStorage(KEY.BOOKS), "DATA-list", 0);
ACCHITECTURE_createProductList(
  getLocalStorage(KEY.BOOKS),
  "ACCHITECTURE-list",
  0
);

document.addEventListener("DOMContentLoaded", () => {
  // Lấy phần tử chứa danh sách sản phẩm của Languages
  const languagesList = document.getElementById("languages-list");
  const AIList = document.getElementById("AI-list");
  const DATAList = document.getElementById("DATA-list");
  const ACCHITECTUREList = document.getElementById("ACCHITECTURE-list");
  function assignDataForm(list) {
    const items = list.querySelectorAll(".item");
    items.forEach((item, form) => {
      item.setAttribute("data-form", form);
    });
  }
  if (languagesList) assignDataForm(languagesList);
  else if (AIList) assignDataForm(AIList);
  else if (DATAList) assignDataForm(DATAList);
  else if (ACCHITECTUREList) assignDataForm(ACCHITECTUREList);
  SeeDetail();
});

// Thêm Phân trang
function setupPagination(products) {
  const totalPages = Math.ceil(
    products.filter(
      (product) =>
        product.subject === "Programming" || product.subject === "Hacking"
    ).length / 16
  );
  const paginationList = document.querySelector(".Languages-pagination");
  // Làm sạch danh sách phân trang Languages hiện tại
  paginationList.innerHTML = "";
  // tạo phần phân trang cho Languages
  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("li");
    pageItem.classList.add("pagination-items");
    pageItem.textContent = i;
    pageItem.setAttribute("data-target", i);
    paginationList.appendChild(pageItem);
  }
  //. Tạo số lượng sách trong từng trang Languages
  paginationList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("pagination-items")) {
      const page = parseInt(target.getAttribute("data-target"));
      const startIndex = (page - 1) * 16;
      Language_createProductList(products, "languages-list", startIndex);

      // Nổi bật trang hiện tại
      document.querySelectorAll(".pagination-items").forEach((item) => {
        item.classList.remove("action");
      });
      target.classList.add("action");

      SeeDetail();
    }
  });
}

function setupPagination_AI(products) {
  const totalPages_AI = Math.ceil(
    products.filter(
      (product) =>
        product.subject === "Software Architecture" ||
        product.subject === "Cybersecurity"
    ).length / 16
  );
  const paginationList_AI = document.querySelector(".AI-pagination");
  // Làm sạch danh sách phân trang AI hiện tại
  paginationList_AI.innerHTML = "";
  // tạo phần phân trang cho AI
  for (let i = 1; i <= totalPages_AI; i++) {
    const pageItem = document.createElement("li");
    pageItem.classList.add("pagination-items");
    pageItem.textContent = i;
    pageItem.setAttribute("data-target", i);
    paginationList_AI.appendChild(pageItem);
  }

  // Tạo số lượng sách trong từng trang AI
  paginationList_AI.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("pagination-items")) {
      const page = parseInt(target.getAttribute("data-target"));
      const startIndex = (page - 1) * 16;
      AI_createProductList(products, "AI-list", startIndex);

      // Nổi bật trang hiện tại
      document.querySelectorAll(".pagination-items").forEach((item) => {
        item.classList.remove("action");
      });
      target.classList.add("action");

      SeeDetail();
    }
  });
}

function setupPagination_DATA(products) {
  const totalPages_DATA = Math.ceil(
    products.filter(
      (product) =>
        product.subject === "DIY Projects" ||
        product.subject === "Cloud Computing"
    ).length / 16
  );
  const paginationList_DATA = document.querySelector(".DATA-pagination");
  // Làm sạch danh sách phân trang DATA hiện tại
  paginationList_DATA.innerHTML = "";
  // tạo phần phân trang cho DATA
  for (let i = 1; i <= totalPages_DATA; i++) {
    const pageItem = document.createElement("li");
    pageItem.classList.add("pagination-items");
    pageItem.textContent = i;
    pageItem.setAttribute("data-target", i);
    paginationList_DATA.appendChild(pageItem);
  }

  // Tạo số lượng sách trong từng trang DATA
  paginationList_DATA.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("pagination-items")) {
      const page = parseInt(target.getAttribute("data-target"));
      const startIndex = (page - 1) * 16;
      DATA_createProductList(products, "DATA-list", startIndex);

      // Nổi bật trang hiện tại
      document.querySelectorAll(".pagination-items").forEach((item) => {
        item.classList.remove("action");
      });
      target.classList.add("action");

      SeeDetail();
    }
  });
}

function setupPagination_ACCHITECTURE(products) {
  const totalPages_ACCHITECTURE = Math.ceil(
    products.filter(
      (product) =>
        product.subject === "Web Development" || product.subject === "Marketing"
    ).length / 16
  );
  const paginationList_ACCHITECTURE = document.querySelector(
    ".ACCHITECTURE-pagination"
  );
  // Làm sạch danh sách phân trang ACCHITECTURE hiện tại
  paginationList_ACCHITECTURE.innerHTML = "";
  // tạo phần phân trang cho ACCHITECTURE
  for (let i = 1; i <= totalPages_ACCHITECTURE; i++) {
    const pageItem = document.createElement("li");
    pageItem.classList.add("pagination-items");
    pageItem.textContent = i;
    pageItem.setAttribute("data-target", i);
    paginationList_ACCHITECTURE.appendChild(pageItem);
  }

  // Tạo số lượng sách trong từng trang ACCHITECTURE
  paginationList_ACCHITECTURE.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("pagination-items")) {
      const page = parseInt(target.getAttribute("data-target"));
      const startIndex = (page - 1) * 16;
      ACCHITECTURE_createProductList(products, "ACCHITECTURE-list", startIndex);

      // Nổi bật trang hiện tại
      document.querySelectorAll(".pagination-items").forEach((item) => {
        item.classList.remove("action");
      });
      target.classList.add("action");

      SeeDetail();
    }
  });
}
setupPagination(products);
setupPagination_AI(products);
setupPagination_DATA(products);
setupPagination_ACCHITECTURE(products);
// Phần sắp xếp

let sortedProducts = [];
let sortedProducts_AI = [];
let sortedProducts_DATA = [];
let sortedProducts_ACCHITECTURE = [];
function sortProducts(products, sortType) {
  sortedProducts = products.filter(
    (product) =>
      product.subject === "Programming" || product.subject === "Hacking"
  );
  // sortedProducts_DATA =
  if (sortType === "up-cost") {
    sortedProducts.sort((a, b) => a.price - b.price); // Giá thấp đến cao Languages
  } else if (sortType === "down-cost") {
    sortedProducts.sort((a, b) => b.price - a.price); // Giá cao đến thấp Languages
  } else if (sortType === "review") {
    sortedProducts.sort((a, b) => b.rating - a.rating); // Điểm đánh giá cao đến thấp Languages
  }
  Language_createProductList(sortedProducts, "languages-list", 0);
  setupPagination(sortedProducts);
  SeeDetail();
}

function sortProducts_AI(products, sortType) {
  sortedProducts_AI = products.filter(
    (product) =>
      product.subject === "Software Architecture" ||
      product.subject === "Cybersecurity"
  );
  if (sortType === "up-cost") {
    sortedProducts_AI.sort((a, b) => a.price - b.price); // Giá thấp đến cao AI
  } else if (sortType === "down-cost") {
    sortedProducts_AI.sort((a, b) => b.price - a.price); // Giá cao đến thấp AI
  } else if (sortType === "review") {
    sortedProducts_AI.sort((a, b) => b.rating - a.rating); // Điểm đánh giá cao đến thấp AI
  }
  AI_createProductList(sortedProducts_AI, "AI-list", 0);
  setupPagination_AI(sortedProducts_AI);
  SeeDetail();
}

function sortProducts_DATA(products, sortType) {
  sortedProducts_DATA = products.filter(
    (product) =>
      product.subject === "DIY Projects" ||
      product.subject === "Cloud Computing"
  );
  if (sortType === "up-cost") {
    sortedProducts_DATA.sort((a, b) => a.price - b.price); // Giá thấp đến cao DATA
  } else if (sortType === "down-cost") {
    sortedProducts_DATA.sort((a, b) => b.price - a.price); // Giá cao đến thấp DATA
  } else if (sortType === "review") {
    sortedProducts_DATA.sort((a, b) => b.rating - a.rating); // Điểm đánh giá cao đến thấp DATA
  }
  DATA_createProductList(sortedProducts_DATA, "DATA-list", 0);
  setupPagination_DATA(sortedProducts_DATA);
  SeeDetail();
}

function sortProducts_ACCHITECTURE(products, sortType) {
  sortedProducts_ACCHITECTURE = products.filter(
    (product) =>
      product.subject === "Web Development" || product.subject === "Marketing"
  );
  if (sortType === "up-cost") {
    sortedProducts_ACCHITECTURE.sort((a, b) => a.price - b.price); // Giá thấp đến cao ACCHITECTURE
  } else if (sortType === "down-cost") {
    sortedProducts_ACCHITECTURE.sort((a, b) => b.price - a.price); // Giá cao đến thấp ACCHITECTURE
  } else if (sortType === "review") {
    sortedProducts_ACCHITECTURE.sort((a, b) => b.rating - a.rating); // Điểm đánh giá cao đến thấp ACCHITECTURE
  }
  ACCHITECTURE_createProductList(
    sortedProducts_ACCHITECTURE,
    "ACCHITECTURE-list",
    0
  );
  setupPagination_ACCHITECTURE(sortedProducts_ACCHITECTURE);
  SeeDetail();
}
// click Sắp xếp cho Languages
document
  .querySelector(".order_Languages")
  .addEventListener("change", (event) => {
    const sortType = event.target.value;
    sortProducts(products, sortType);
  });
// click Sắp xếp cho AI
document.querySelector(".order_AI").addEventListener("change", (event) => {
  const sortType = event.target.value;
  sortProducts_AI(products, sortType);
});
// click Sắp xếp cho DATA
document.querySelector(".order_DATA").addEventListener("change", (event) => {
  const sortType = event.target.value;
  sortProducts_DATA(products, sortType);
});
// click Sắp xếp cho ACCHITECTURE
document
  .querySelector(".order_ACCHITECTURE")
  .addEventListener("change", (event) => {
    const sortType = event.target.value;
    sortProducts_ACCHITECTURE(products, sortType);
  });

let selectedProductID = null;

//Rank
let rank = [];

// Hàm để ẩn tất cả các form
function hideAllForms() {
  const forms = document.querySelectorAll(".formContainer");
  forms.forEach((form) => {
    form.style.display = "none";
  });
}
function cancelButton(cancel) {
  document.getElementById(cancel).style.display = "none";
}
// Hàm để hiện form

// Lắng nghe sự kiện khi thêm xếp hạng sách

// Đăng ký

document.addEventListener("DOMContentLoaded", (event) => {
  const inputUsernameRegister = document.querySelector(
    ".input-signup-username"
  );
  const inputEmailRegister = document.querySelector(".input-signup-email");
  const inputPasswordRegister = document.querySelector(
    ".input-signup-password"
  );
  const btnRegister = document.getElementById("signup__signInButton");

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  // FixBug
  btnRegister.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      inputUsernameRegister.value === "" ||
      inputEmailRegister.value === "" ||
      inputPasswordRegister.value === ""
    ) {
      alert("Vui lòng điền thông tin");
    } else if (!isValidEmail(inputEmailRegister.value)) {
      alert("Vui lòng nhập email hợp lệ");
    } else {
      const index = findUserByEmail(inputEmailRegister.value);
      if (index >= 0) {
        alert("Email da duoc dang ki");
        return;
      }
      const generateId = createIdGenerator();
      const user = {
        userId: generateId(),
        name: inputUsernameRegister.value,
        phoneNumber: "",
        password: inputPasswordRegister.value,
        email: inputEmailRegister.value,
        address: "",
        createdAt: getDate(),
        numberOfOrder: 0,
      };
      console.log(user);

      addUserIntoDataBase(user);

      alert("Đăng ký thành công!");
      currentUserEmail = inputEmailRegister.value; // Lưu email sau khi đăng ký thành công
      showPage("UpinfoFormContainer"); // Chuyển đến form nhập thông tin
    }
  });
});

// input information
document.addEventListener("DOMContentLoaded", (event) => {
  const HotenInput = document.querySelector(".HotenInput");
  const SDTInput = document.querySelector(".SDTInput");
  const addressInput = document.querySelector(".AddressInput");
  const Inputinformation = document.getElementById("Inputinformation");

  Inputinformation.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      HotenInput.value === "" ||
      SDTInput.value === "" ||
      addressInput.value === ""
    ) {
      alert("Vui lòng điền thông tin");
    } else {
      const users = getLocalStorage(KEY.USERS);
      const index = findIndexUserByEmail(currentUserEmail);
      const user = users[index];
      console.log(currentUserEmail);
      console.log(user);
      if (user) {
        user.phoneNumber = SDTInput.value;
        user.address = addressInput.value;
        setLocalStorage(KEY.USERS, users);
        alert("Đăng ký thông tin thành công!");
        showPage("LoginFormContainer");
      } else {
        alert("Không tìm thấy người dùng với email này.");
      }
    }
  });
});

//Đăng Nhập
const inputEmailLogin = document.querySelector(".input-login-email");
const inputPasswordLogin = document.querySelector(".input-login-password");
const btnLogin = document.getElementById("login__signInButton");
const showLoginForm = document.getElementById("showLoginForm");
const showSigninForm = document.getElementById("showSigninForm");
const showinfoForm = document.getElementById("showinfoForm");
const btnhistory = document.querySelector(".btn-history");
const logoutItem = document.getElementById("logoutItem");
const logoutButton = document.getElementById("logoutButton");

// Bo sung phân nay
function findIndexUserByEmail(email) {
  let users = getLocalStorage(KEY.USERS);
  const index = users.findIndex((user) => user.email === email);
  return index;
}

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  const email = inputEmailLogin.value;
  const password = inputPasswordLogin.value;

  if (email === "" || password === "") {
    alert("Vui lòng điền email và mật khẩu");
    return;
  }

  // Kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Vui lòng nhập email hợp lệ");
    return;
  }
  // Dang nhap Admin
  const isAdmin = email === "admin@gmail.com" && password === "123456";
  if (isAdmin) {
    window.location.replace("/admin/admin.html");
    return;
  }
  //

  // Dang user
  const users = getLocalStorage(KEY.USERS);
  const index = findIndexUserByEmail(email);
  if (index < 0) {
    alert("Tai khoan khong ton tai vui long tao tai khoan");
    return;
  }
  if (users[index].password !== password) {
    alert("Mật khẩu không đúng. Vui lòng thử lại.");
    return;
  }

  setLocalStorage("user", users[index]);
  alert("Đăng nhập thành công!");

  const user = getLocalStorage("user");
  currentUserEmail = user.email; // cập nhập biến toàn cục
  // Ẩn các liên kết Đăng nhập và Đăng ký, hiển thị Đăng xuất
  showLoginForm.style.display = "none";
  showSigninForm.style.display = "none";

  showPage("home");
  logoutItem.style.display = "block"; // hiển thị nút Đăng xuất
  showinfoForm.style.display = "block";
  btnhistory.style.display = "block";

  const div1 = document.querySelector("#infotable .usernameUP");
  if (div1) {
    div1.textContent = user.name;
  }

  const div2 = document.querySelector("#infotable .fullnameUP");
  if (div2) {
    div2.textContent = user.Hoten;
  }

  const div4 = document.querySelector("#infotable .emailUP");
  if (div4) {
    div4.textContent = user.email;
  }

  const div5 = document.querySelector("#infotable .SDTUP");
  if (div5) {
    div5.textContent = user.phoneNumber;
  }

  const div6 = document.querySelector("#infotable .addressUP");
  if (div6) {
    div6.textContent = user.address;
  }
  // Thêm tên người dùng vào danh sách
});

// Xử lý sự kiện khi nhấn nút đăng xuất
logoutButton.addEventListener("click", () => {
  alert("Đăng xuất thành công!");
  showPage("home");

  // Hiện lại Đăng nhập và Đăng ký, ẩn Đăng xuất
  showLoginForm.style.display = "block";
  showSigninForm.style.display = "block";
  logoutItem.style.display = "none"; // Ẩn nút Đăng xuất
  btnhistory.style.display = "none";
  showinfoForm.style.display = "none";

  currentUserEmail = "";
  localStorage.clear();
  sessionStorage.clear();

  // const liItem = document.querySelector("#userList .username");
  // if (liItem) {
  //   liItem.textContent = ""; // Chèn nội dung văn bản mới vào <li>
  //   // Hoặc: liItem.innerHTML = '<strong>Nội dung mới</strong>'; // Nếu bạn muốn chèn HTML
  // }

  // Nếu cần, bạn có thể xóa dữ liệu phiên hoặc localStorage tại đây
});
// Hàm hiển thị/ẩn popup hóa đơn
function toggleInvoice() {
  const invoicePopup = document.getElementById("invoicePopup");
  invoicePopup.style.display =
    invoicePopup.style.display === "none" || invoicePopup.style.display === ""
      ? "block"
      : "none";
}
// Hàm thêm hóa đơn vào bảng lịch sử hóa đơn
function addInvoice() {
  console.log("run invoice");
  const tableBody = document.querySelector("#invoiceTable tbody");
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString("vi-VN");
  const time = currentDate.toLocaleTimeString("vi-VN");

  // Duyệt qua giỏ hàng và thêm vào bảng hóa đơn
  giohang.forEach((item, index) => {
    const row = document.createElement("tr");

    const quantity = hoadon[index].soLuong;
    const totalPrice = item[2] * quantity;

    row.innerHTML = `
      <td class="td-invoiceTable">${item[0]}</td>
      <td class="td-invoiceTable">${totalPrice.toLocaleString()}</td>
      <td class="td-invoiceTable">${quantity}</td>
      <td class="td-invoiceTable">${date}</td>
      <td class="td-invoiceTable">${time}</td>
    `;
    tableBody.appendChild(row);
  });

  // Xóa giỏ hàng sau khi thêm vào lịch sử hóa đơn
  giohang = [];
  cartCount = 0;
  updateCartCount();
  showmycart();
}
function updateQuantity(index, newQuantity) {
  newQuantity = parseInt(newQuantity); // Chuyển đổi giá trị từ input sang số nguyên
  if (newQuantity < 1 || isNaN(newQuantity)) {
    newQuantity = 1; // Đảm bảo số lượng không nhỏ hơn 1
  }

  // Cập nhật số lượng trong mảng giỏ hàng
  giohang[index][3] = newQuantity;
  // Cập nhật lại giỏ hàng sau khi thay đổi số lượng
  showmycart();
}
//Phan giam gia
var giatrigiamgia; // Biến toàn cục để lưu trữ giá trị giảm giá
let maxTurns = 3; // Số lượt quay tối đa
let turnsLeft = maxTurns; // Số lượt quay còn lại
const $ = document.querySelector.bind(document);

let timeRotate = 7000; // 7 giây
let currentRotate = 0;
let isRotating = false;
const wheel = $(".wheel");
const btnWheel = $(".btn--wheel");
const showMsg = $(".msg");

//=====< Danh sách phần thưởng >=====
const listGift = [
  { text: "Giảm 20%", value: 0.2, percent: 20 / 100 },
  { text: "Giảm 200k", value: 200000, percent: 10 / 100 },
  { text: "Giảm 50%", value: 0.5, percent: 10 / 100 },
  { text: "Free ship", value: 0, percent: 10 / 100 },
  { text: "Giảm 20k", value: 20000, percent: 40 / 100 },
  { text: "Chúc bạn may mắn lần sau", value: 0, percent: 10 / 100 },
];

//=====< Số lượt quay >=====
const size = listGift.length;
const rotate = 360 / size;
const skewY = 90 - rotate;

listGift.map((item, index) => {
  const elm = document.createElement("li");
  elm.style.transform = `rotate(${rotate * index}deg) skewY(-${skewY}deg)`;

  if (index % 2 == 0) {
    elm.innerHTML = `<p style="transform: skewY(${skewY}deg) rotate(${
      rotate / 2
    }deg);" class="spin-text spin-text-1"><b>${item.text}</b></p>`;
  } else {
    elm.innerHTML = `<p style="transform: skewY(${skewY}deg) rotate(${
      rotate / 2
    }deg);" class="spin-text spin-text-2"><b>${item.text}</b></p>`;
  }
  console.log(elm);
  wheel.appendChild(elm);
});

//********** Hàm bắt đầu **********
const start = () => {
  if (turnsLeft <= 0) {
    showMsg.innerHTML = "Bạn đã hết lượt quay. Vui lòng quay lại sau.";
    return;
  }

  turnsLeft--;
  showMsg.innerHTML = `Số lượt quay còn lại: ${turnsLeft}`;
  isRotating = true;
  const random = Math.random();

  const gift = getGift(random);
  currentRotate += 360 * 10;
  rotateWheel(currentRotate, gift.index);
  showGift(gift);
};

//********** Hàm quay vòng quay **********
const rotateWheel = (currentRotate, index) => {
  $(".wheel").style.transform = `rotate(${
    currentRotate - index * rotate - rotate / 2
  }deg)`;
};

//********** Hàm lấy phần thưởng **********
const getGift = (randomNumber) => {
  let currentPercent = 0;
  for (let i = 0; i < listGift.length; i++) {
    currentPercent += listGift[i].percent;
    if (randomNumber <= currentPercent) {
      return { ...listGift[i], index: i };
    }
  }
  return { text: "Chúc bạn may mắn lần sau", value: 0, percent: 0, index: 5 };
};

//********** Hàm in phần thưởng ra màn hình **********
const showGift = (gift) => {
  let timer = setTimeout(() => {
    isRotating = false;

    // Lưu giá trị giảm giá vào biến toàn cục
    giatrigiamgia = gift.value;

    // Hiển thị thông báo phần thưởng
    showMsg.innerHTML = `Chúc mừng bạn đã nhận được "${gift.text}"`;
    giatrigiamgia = getDiscountValue();
    document.getElementById("value-discount").textContent = `${giatrigiamgia}`;
    clearTimeout(timer);
  }, timeRotate);
};

//********** Hàm trả về giá trị giảm giá **********
function getDiscountValue() {
  return giatrigiamgia || 0; // Nếu không có giá trị giảm giá, trả về 0
}

//********** Sự kiện click button start **********
btnWheel.addEventListener("click", () => {
  !isRotating && start();
});
