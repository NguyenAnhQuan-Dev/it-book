// Mock data
let usersData = [
  {
    userId: "U001",
    name: "Alice Smith",
    phoneNumber: "987-654-3210",
    password: "1234567",
    email: "smith@example.com",
    status: true,
    address: "456 Elm St",
    createdAt: "2023-05-12",
    numberOfOrder: 3,
  },
  {
    userId: "U002",
    name: "Bob Johnson",
    phoneNumber: "321-654-9870",
    password: "1234567",
    email: "bob.johnson@example.com",
    status: true,
    address: "789 Pine St",
    createdAt: "2023-06-24",
    numberOfOrder: 7,
  },
  {
    userId: "U003",
    name: "Clara Liu",
    phoneNumber: "654-321-9876",
    password: "1234567",
    email: "clara.liu@example.com",
    status: true,
    address: "101 Oak St",
    createdAt: "2022-09-17",
    numberOfOrder: 2,
  },
  {
    userId: "U004",
    name: "David Brown",
    phoneNumber: "789-123-4560",
    password: "1234567",
    email: "david.brown@example.com",
    status: true,
    address: "234 Maple St",
    createdAt: "2021-12-30",
    numberOfOrder: 10,
  },
  {
    userId: "U005",
    name: "Emily Davis",
    phoneNumber: "456-789-1234",
    password: "1234567",
    email: "emily.davis@example.com",
    status: true,
    address: "567 Birch St",
    createdAt: "2022-04-15",
    numberOfOrder: 5,
  },
  {
    userId: "U006",
    name: "Frank White",
    phoneNumber: "234-567-8901",
    password: "1234567",
    email: "frank.white@example.com",
    status: true,
    address: "890 Cedar St",
    createdAt: "2023-02-11",
    numberOfOrder: 1,
  },
  {
    userId: "U007",
    name: "Grace Martinez",
    phoneNumber: "111-222-3333",
    password: "1234567",
    email: "grace.martinez@example.com",
    status: true,
    address: "123 Willow St",
    createdAt: "2023-03-29",
    numberOfOrder: 8,
  },
  {
    userId: "U008",
    name: "Henry Walker",
    phoneNumber: "222-333-4444",
    password: "1234567",
    email: "henry.walker@example.com",
    status: true,
    address: "456 Poplar St",
    createdAt: "2021-11-19",
    numberOfOrder: 0,
  },
  {
    userId: "U009",
    name: "Irene Scott",
    phoneNumber: "333-444-5555",
    password: "1234567",
    email: "irene.scott@example.com",
    status: true,
    address: "789 Sycamore St",
    createdAt: "2022-08-05",
    numberOfOrder: 12,
  },
  {
    userId: "U010",
    name: "Jack Lee",
    password: "1234567",
    phoneNumber: "444-555-6666",
    email: "jack.lee@example.com",
    status: true,
    address: "101 Palm St",
    createdAt: "2023-01-21",
    numberOfOrder: 4,
  },
];

let ordersData = [
  {
    orderID: "U001",
    userID: "U001",
    createdAt: "2024-11-04 10:30",
    fromVendor: "Hà Nội",
    status: "Pending",
    method: "OCD",
    products: [
      {
        id: "P001",
        quantity: 1,
      },
      {
        id: "P002",
        quantity: 13,
      },
      {
        id: "P003",
        quantity: 5,
      },
      {
        id: "P004",
        quantity: 1,
      },
      {
        id: "P005",
        quantity: 2,
      },
    ],
  },
  {
    orderID: "U002",
    userID: "U001",
    createdAt: "2024-11-04 10:30",
    fromVendor: "Hà Nội",
    status: "Pending",
    method: "OCD",
    products: [
      {
        id: "P001",
        quantity: 2,
      },
      {
        id: "P002",
        quantity: 5,
      },
      {
        id: "P003",
        quantity: 1,
      },
      {
        id: "P004",
        quantity: 10,
      },
      {
        id: "P005",
        quantity: 1,
      },
    ],
  },
  {
    orderID: "U004",
    userID: "U003",
    createdAt: "2024-12-04 10:30",
    fromVendor: "Hà Nội",
    status: "Pending",
    method: "OCD",
    products: [
      {
        id: "P001",
        quantity: 1,
      },
      {
        id: "P002",
        quantity: 13,
      },
      {
        id: "P003",
        quantity: 5,
      },
      {
        id: "P004",
        quantity: 1,
      },
      {
        id: "P005",
        quantity: 2,
      },
    ],
  },
  {
    orderID: "U005",
    userID: "U002",
    createdAt: "2024-11-04 10:30",
    fromVendor: "Hà Nội",
    status: "Pending",
    method: "OCD",
    products: [
      {
        id: "P001",
        quantity: 1,
      },
      {
        id: "P002",
        quantity: 13,
      },
      {
        id: "P003",
        quantity: 5,
      },
      {
        id: "P004",
        quantity: 1,
      },
      {
        id: "P005",
        quantity: 2,
      },
    ],
  },
];

let booksData = [
  {
    img: "https://www.dbooks.org/img/books/1098127463s.jpg",
    productID: "P001",
    title: "Security as Code",
    price: 450000,
    language: "English",
    tags: ["Security", "DevOps"],
    author: "John Doe",
    description:
      "A comprehensive guide to implementing security as code in your CI/CD pipelines.",
    pages: 250,
    subject: "Cybersecurity",
    publicationDate: "2023-10-01",
    genre: "Technical",
    createdAt: "2024-11-04",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/164200233Xs.jpg",
    productID: "P002",
    title: "ASP.NET Core 6 Succinctly",
    price: 300000,
    language: "English",
    tags: ["ASP.NET", "Web Development"],
    author: "Jane Smith",
    description:
      "A concise guide to developing web applications using ASP.NET Core 6.",
    pages: 150,
    subject: "Web Development",
    publicationDate: "2022-08-15",
    genre: "Technical",
    createdAt: "2024-11-04",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/5709901124s.jpg",
    productID: "P003",
    title: "Build a Raspberry Pi Media Player",
    price: 280000,
    language: "English",
    tags: ["Raspberry Pi", "DIY"],
    author: "Mark Johnson",
    description:
      "Learn how to turn your Raspberry Pi into a powerful media player.",
    pages: 100,
    subject: "DIY Projects",
    publicationDate: "2022-05-20",
    genre: "Technical",
    createdAt: "2024-11-01",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/191204742Xs.jpg",
    productID: "P004",
    title: "The Official Raspberry Pi Handbook 2023",
    price: 350000,
    language: "English",
    tags: ["Raspberry Pi", "Guide"],
    author: "Raspberry Pi Foundation",
    description:
      "The ultimate guide to getting the most out of your Raspberry Pi.",
    pages: 400,
    subject: "DIY Projects",
    publicationDate: "2023-01-10",
    genre: "Technical",
    createdAt: "2024-11-09",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/1642002275s.jpg",
    productID: "P005",
    title: "Azure Bot Service Succinctly",
    price: 250000,
    language: "English",
    tags: ["Azure", "Bots"],
    author: "Emily Davis",
    description:
      "A quick introduction to building bots using Azure Bot Service.",
    pages: 120,
    subject: "Cloud Computing",
    publicationDate: "2023-03-01",
    genre: "Technical",
    createdAt: "2024-11-20",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/1098111389s.jpg",
    productID: "P006",
    title: "Managing Cloud Native Data on Kubernetes",
    price: 400000,
    language: "English",
    tags: ["Kubernetes", "Cloud"],
    author: "David Brown",
    description:
      "Strategies for managing data in cloud-native applications on Kubernetes.",
    pages: 300,
    subject: "Cloud Computing",
    publicationDate: "2023-09-01",
    genre: "Technical",
    createdAt: "2024-11-19",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/1912047446s.jpg",
    productID: "P007",
    title: "An Introduction to C & GUI Programming",
    price: 320000,
    language: "English",
    tags: ["C", "GUI", "Programming"],
    author: "Sarah White",
    description:
      "A beginner's guide to programming in C and creating graphical user interfaces.",
    pages: 180,
    subject: "Programming",
    publicationDate: "2022-06-30",
    genre: "Technical",
    createdAt: "2024-11-30",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/5685527822s.jpg",
    productID: "P008",
    title: "HackSpace Magazine: Issue 65",
    price: 150000,
    language: "English",
    tags: ["Magazine", "Hacking"],
    author: "Various",
    description:
      "The latest issue of HackSpace Magazine covering exciting projects and tutorials.",
    pages: 70,
    subject: "Hacking",
    publicationDate: "2023-11-01",
    genre: "Magazine",
    createdAt: "2024-11-25",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/5685535457s.jpg",
    productID: "P009",
    title: "Intro to Social Media",
    price: 200000,
    language: "English",
    tags: ["Social Media", "Marketing"],
    author: "Lisa Green",
    description:
      "An introduction to the world of social media and its impact on marketing.",
    pages: 220,
    subject: "Marketing",
    publicationDate: "2023-05-15",
    genre: "Business",
    createdAt: "2024-11-08",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/5679752518s.jpg",
    productID: "P010",
    title: "HackSpace magazine: Issue 64",
    price: 150000,
    language: "English",
    tags: ["Magazine", "Hacking"],
    author: "Various",
    description:
      "Another exciting issue of HackSpace Magazine with new projects.",
    pages: 72,
    subject: "Hacking",
    publicationDate: "2023-09-01",
    genre: "Magazine",
    createdAt: "2024-11-21",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/1642002305s.jpg",
    productID: "P011",
    title: "Svelte Succinctly",
    price: 280000,
    language: "English",
    tags: ["Svelte", "Web Development"],
    author: "Tom Williams",
    description:
      "An introduction to building web applications using the Svelte framework.",
    pages: 140,
    subject: "Web Development",
    publicationDate: "2022-07-01",
    genre: "Technical",
    createdAt: "2024-11-03",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/111954601Xs.jpg",
    productID: "P012",
    title: "Blockchain For Dummies",
    price: 320000,
    language: "English",
    tags: ["Blockchain", "Finance"],
    author: "P. K. Mishra",
    description:
      "A beginner-friendly guide to understanding blockchain technology.",
    pages: 180,
    subject: "Finance",
    publicationDate: "2021-11-05",
    genre: "Business",
    createdAt: "2024-11-04",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/1642002283s.jpg",
    productID: "P013",
    title: "ASP.NET Core APIs Succinctly",
    price: 300000,
    language: "English",
    tags: ["ASP.NET", "Web Development"],
    author: "Jane Smith",
    description: "A concise guide to building APIs with ASP.NET Core.",
    pages: 160,
    subject: "Web Development",
    publicationDate: "2022-09-01",
    genre: "Technical",
    createdAt: "2024-11-04",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/1492095176s.jpg",
    productID: "P014",
    title: "A Practical Guide to Cloud Migration",
    price: 370000,
    language: "English",
    tags: ["Cloud", "Migration"],
    author: "Mark Smith",
    description:
      "Strategies for migrating your applications to the cloud effectively.",
    pages: 250,
    subject: "Cloud Computing",
    publicationDate: "2023-02-01",
    genre: "Technical",
    createdAt: "2024-11-04",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/5676984863s.jpg",
    productID: "P015",
    title: "HackSpace Magazine: Issue 63",
    price: 150000,
    language: "English",
    tags: ["Magazine", "Hacking"],
    author: "Various",
    description:
      "Explore new hacks and projects in this issue of HackSpace Magazine.",
    pages: 70,
    subject: "Hacking",
    publicationDate: "2023-07-01",
    genre: "Magazine",
    createdAt: "2024-11-04",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/1642002267s.jpg",
    productID: "P016",
    title: "Azure Maps Using Blazor Succinctly",
    price: 260000,
    language: "English",
    tags: ["Azure", "Blazor"],
    author: "Helen Carter",
    description: "Build interactive maps in Blazor using Azure Maps.",
    pages: 150,
    subject: "Web Development",
    publicationDate: "2023-05-01",
    genre: "Technical",
    createdAt: "2024-11-04",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/1491931663s.jpg",
    productID: "P017",
    title: "C++ Today",
    price: 350000,
    language: "English",
    tags: ["C++", "Programming"],
    author: "Sam Lee",
    description: "A modern guide to C++ programming and its applications.",
    pages: 280,
    subject: "Programming",
    publicationDate: "2022-03-01",
    genre: "Technical",
    createdAt: "2024-11-04",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/5672335136s.jpg",
    productID: "P018",
    title: "Clojure In Small Pieces",
    price: 400000,
    language: "English",
    tags: ["Clojure", "Functional Programming"],
    author: "William Brown",
    description: "A deep dive into Clojure and its practical applications.",
    pages: 300,
    subject: "Programming",
    publicationDate: "2022-12-01",
    genre: "Technical",
    createdAt: "2024-11-04",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/1119824281s.jpg",
    productID: "P019",
    title: "Redis For Dummies",
    price: 320000,
    language: "English",
    tags: ["Redis", "Databases"],
    author: "Jim Green",
    description:
      "An easy-to-understand introduction to Redis and its capabilities.",
    pages: 150,
    subject: "Databases",
    publicationDate: "2021-10-01",
    genre: "Technical",
    createdAt: "2024-11-04",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/1492038253s.jpg",
    productID: "P020",
    title: "Designing Event-Driven Systems",
    price: 400000,
    language: "English",
    tags: ["Event-Driven", "Architecture"],
    author: "Nina White",
    description: "Guidelines for building robust event-driven architectures.",
    pages: 350,
    subject: "Software Architecture",
    publicationDate: "2022-04-01",
    genre: "Technical",
    createdAt: "2024-11-04",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/1938616049s.jpg",
    productID: "P021",
    title: "Erlang Handbook",
    price: 280000,
    language: "English",
    tags: ["Erlang", "Programming"],
    author: "Alice Black",
    description: "A complete guide to Erlang programming.",
    pages: 200,
    subject: "Programming",
    publicationDate: "2021-12-15",
    genre: "Technical",
    createdAt: "2024-11-04",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
  {
    img: "https://www.dbooks.org/img/books/5671111456s.jpg",
    productID: "P022",
    title: "HackSpace Magazine: Issue 62",
    price: 150000,
    language: "English",
    tags: ["Magazine", "Hacking"],
    author: "Various",
    description:
      "The latest projects and tutorials from the HackSpace community.",
    pages: 75,
    subject: "Hacking",
    publicationDate: "2023-05-01",
    genre: "Magazine",
    createdAt: "2024-11-04",
    inStock: 10,
    ratting: 4.8,
    numberOfsale: 10,
  },
];

let salesData = [
  {
    saleId: "S001",
    orderId: "U001",
    userId: "U001",
    quantity: 1,
    productID: "P001",
    createdAt: "2024-11-04",
  },
  {
    saleId: "S002",
    orderId: "U001",
    userId: "U002",
    quantity: 2,
    productID: "P001",
    createdAt: "2024-11-04",
  },
  {
    saleId: "S003",
    orderId: "U001",
    userId: "U001",
    quantity: 3,
    productID: "P003",
    createdAt: "2024-11-04",
  },
  {
    saleId: "S004",
    orderId: "U001",
    userId: "U001",
    quantity: 4,
    productID: "P005",
    createdAt: "2024-11-04",
  },
  {
    saleId: "S005",
    orderId: "U001",
    userId: "U001",
    quantity: 5,
    productID: "P006",
    createdAt: "2024-11-04",
  },
];

// let books;
// let orders;
// let users;
// let sales;

// Define class global
const CLASSNAME = {
  CLOSESIDEBAR: "open__sidebar",
  SCALECONTENT: "open__content",
  ACTIVEMENU: "active__menu",
  CLASSDARKMODE: "dark",
  OPENFILTER: "open__filter",
};

const KEY = {
  BOOKS: "books",
  USERS: "users",
  ORDER: "orders",
  SALES: "sales",
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

// Init data
function initializeLocalStorage(key, defaultData) {
  if (!getLocalStorage(key)) {
    setLocalStorage(key, defaultData);
  }
  return getLocalStorage(key);
}

// function getFilePathAndPreview(inputId) {
//   const fileInput = document.getElementById(inputId); // Lấy phần tử input file
//   fileInput.addEventListener("change", function (event) {
//     const file = event.target.files[0];
//     if (file) {
//       const fileName = file.name; // Tên tệp
//       const fileType = file.type; // Loại tệp (ví dụ: image/jpeg)
//       const filePath = URL.createObjectURL(file); // Tạo Object URL từ tệp

//       console.log("File Name: ", fileName);
//       console.log("File Type: ", fileType);
//       console.log("File Path: ", filePath); // Đây là Object URL tạm thời

//       return { fileName, filePath };
//     }
//   });
// }

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
  console.log("File Path: ", filePath);
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

// function changePage() {
//   const listNavLink = document.querySelectorAll(".nav__link");
//   listNavLink.forEach((navLink) => {
//     navLink.addEventListener("click", (e) => {
//       listNavLink.forEach((item) => {
//         item.classList.remove("page__show"); // This should remove the class from all nav links
//       });

//       const idPage = navLink.getAttribute("data-page");
//       const page = document.getElementById(idPage);

//       // Only add 'page__show' if the page is found
//       if (page) {
//         page.classList.add("page__show");
//       } else {
//         console.error("Page not found with id:", idPage);
//       }
//     });
//   });
// }

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
    console.log(book.price);
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
        <td class="table__col" data-cell="Action">
          <button class="update-btn btn" onclick="handleOpenOrderDetail('${order.orderID}')">Detail</button>
          <button class="delete-btn btn" onclick="deleteOrder('${order.orderID}')">Delete</button>
        </td>
        <td class="table__col" data-cell="From Vendor">
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
  document.getElementById("total__money").innerHTML =
    calculatorPrice(order) + " VND";
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
}

function deleteOrder(orderID) {
  const isConfirm = window.confirm("ban cos muon xoa Order nay");
  if (isConfirm) {
    orders = orders.filter((order) => order.orderID !== orderID);
    setLocalStorage(KEY.ORDER, orders);
    orders = getLocalStorage(KEY.ORDER);
    updateTableOrder(orders);
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
  }
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
    const isWithinDateRange = orderDate >= startDate && orderDate <= endDate;
    const isAddressMatched = address.value
      ? item.fromVendor.includes(address.value)
      : true;
    const isStatusMatched = status.value ? item.status === status.value : true;
    return isWithinDateRange && isAddressMatched && isStatusMatched;
  });

  // Hiển thị kết quả lọc (có thể hiển thị hoặc xử lý tiếp tùy nhu cầu)
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
            <i class="uil uil-wrench body-1"></i>
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
}
function deleteProduct(productID) {
  const isConfirm = window.confirm("Ban co muon xoa san pham nay");
  if (isConfirm) {
    books = books.filter((book) => book.productID !== productID);
    setLocalStorage(KEY.BOOKS, books);
    books = getLocalStorage(KEY.BOOKS);
    updateTableProduct(books);
  }
}

const searchProductInput = document.querySelector("#warehouse__search input");
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
}

// Fetaure in Management User
function findUserByUserID(userID) {
  const users = getLocalStorage(KEY.USERS);
  const user = users.find((user) => user.userId === userID);
  return user;
}

function getIndexUser(userID) {
  const index = users.findIndex((user) => user.userId === userID);
  return index;
}

function handleOpenModalDetail(payload) {
  const index = getIndexUser(payload);
  const user = users[index];
  document.getElementById("user__id").innerText = user.userId;
  document.getElementById("user__name").value = user.name;
  document.getElementById("user__phone").value = user.phoneNumber;
  document.getElementById("user__email").value = user.email;
  document.getElementById("user__address").value = user.address;
  document.getElementById("user__created").innerText = user.createdAt;
  document.getElementById("user__orders").innerText = user.numberOfOrder;
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
      const status = user.status ? "ban" : "active";
      return `
            <tr class="table__row">
                <td class="table__col" data-cell="USER ID">${user.userId}</td>
                <td class="table__col" data-cell="NAME">${user.name}</td>
                <td class="table__col" data-cell="PHONE NUMBER">${user.phoneNumber}</td>
                <td class="table__col" data-cell="ADDRESS">${user.address}</td>
                <td class="table__col" data-cell="Status">${status}</td>
                <td class="table__col" data-cell="ACTION">
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
}

function deleteUser(userID) {
  const isConfirm = window.confirm("Ban co muon xoa nguoi dung nay");
  if (isConfirm) {
    let users = getLocalStorage(KEY.USERS);
    users = users.filter((user) => user.userId !== userID);
    setLocalStorage(KEY.USERS, users);
    updateUserTable(getLocalStorage(KEY.USERS));
  }
}

function banUser(userId) {
  const isConfirm = window.confirm("Ban co muon ban nguoi dung nay");
  if (isConfirm) {
    let users = getLocalStorage(KEY.USERS);
    const index = getIndexUser(userId);
    users[index].status = true;
    console.log(users[index]);
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
  console.log(newUser);
  let users = getLocalStorage(KEY.USERS);
  users.push(newUser);
  setLocalStorage(KEY.USERS, users);
  updateUserTable(getLocalStorage(KEY.USERS));
  handleCloseUserModalAdd();
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
    let total = calculatorPrice(order);
    return initValue + total;
  }, 0);
  injectValueIntoElement(
    document.querySelector("#stats__incom .quantity"),
    formatVND(income)
  );
}

function calculatorSumRecord(data, element) {
  const records = data.length;
  // return income;
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
        <td class="table__col" data-cell="UserName">${user.name}</td>
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
    console.log(e.target.value);
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
    console.log(e.target.value);
    switch (e.target.value) {
      case CONDITION__SORT__PRODUCT.BUY__MAX:
        const sortStatsAsc = listStatsUser.sort(
          (a, b) => b[1].amountSpent - a[1].amountSpent
        );
        console.log(sortStatsAsc);
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
        <td class="table__col" data-cell="ProductID">${order.id}</td>
        <td class="table__col" data-cell="UserID">${order.userID}</td>
        <td class="table__col" data-cell="Số lượng">${order.quantity}</td>
        <td class="table__col" data-cell="Thành tiền">${formatVND(total)}</td>
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
        <td class="table__col" data-cell="OrderID">${order.orderID}</td>
        <td class="table__col" data-cell="ProductID">${order.id}</td>
        <td class="table__col" data-cell="UserID">${order.userID}</td>
        <td class="table__col" data-cell="Số lượng">${quantity}</td>
        <td class="table__col" data-cell="Thành tiền">${formatVND(total)}</td>
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
const searchUserInput = document.querySelector("#users__search input");
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

// Get Elememt for feature Oreder Filter Modal
const btnOpenFilter = document.querySelector(".btn__filter");
const btnCloseFilter = document.querySelector("#filter__close");
const filterModal = document.querySelector("#filter__modal");

// Feature darkmode lightmode
const body = document.querySelector("body");
const btnTheme = document.querySelector("#btn__mode");

// Initial Website

function initialApp() {
  books = initializeLocalStorage(KEY.BOOKS, booksData);
  users = initializeLocalStorage(KEY.USERS, usersData);
  orders = initializeLocalStorage(KEY.ORDER, ordersData);
  sales = initializeLocalStorage(KEY.SALES, salesData);
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
// gmail admin@gmail.com
// password: 123456
