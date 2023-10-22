// var cardDrop = document.getElementById("card-dropdown");
// var activeDropdown;
// cardDrop.addEventListener("click", function () {
//   var node;
//   for (var i = 0; i < this.childNodes.length - 1; i++)
//     node = this.childNodes[i];
//   if (node.className === "dropdown-select") {
//     node.classList.add("visible");
//     activeDropdown = node;
//   }
// });

// // JavaScript for product page image //

// function changeImage(image, newImage) {
//   image.src = newImage;
// }
//----------------------------------------------------------------------------------------//

// Storage: Users

if (!sessionStorage.getItem("users")) {
  const users = [
    {
      username: "Default",
      email: "default@gmail.com",
      password: "12345",
    },
  ];
  sessionStorage.setItem("users", JSON.stringify(users));
}
const users = JSON.parse(sessionStorage.getItem("users"));
//----------------------------------------------------------------------------------------//

// Storage: User

if (!sessionStorage.getItem("currentUser")) {
  let currentUser = "";
  sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
}
let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
//----------------------------------------------------------------------------------------//

// Storage: Gender

if (!sessionStorage.getItem("gender")) {
  let gender = "";
  sessionStorage.setItem("gender", JSON.stringify(gender));
}
let gender = JSON.parse(sessionStorage.getItem("gender"));
//----------------------------------------------------------------------------------------//

// Storage: Order

if (!sessionStorage.getItem("orderSummary")) {
  let orderSummary = "";
  sessionStorage.setItem("order", JSON.stringify(orderSummary));
}
let orderSummary = JSON.parse(sessionStorage.getItem("orderSummary"));
//----------------------------------------------------------------------------------------//

// Storage: Invoice

if (!sessionStorage.getItem("invoice")) {
  let invoice = "";
  sessionStorage.setItem("invoice", JSON.stringify(invoice));
}
let invoice = JSON.parse(sessionStorage.getItem("invoice"));
//----------------------------------------------------------------------------------------//

// Storage: Search Product

if (!sessionStorage.getItem("searchKeyword")) {
  let searchKeyword = "";
  sessionStorage.setItem("searchKeyword", JSON.stringify(searchKeyword));
}
let searchKeyword = JSON.parse(sessionStorage.getItem("searchKeyword"));
//----------------------------------------------------------------------------------------//

// Storage: Current Product

if (!sessionStorage.getItem("current")) {
  let current = "";
  sessionStorage.setItem("current", JSON.stringify(current));
}
let current = JSON.parse(sessionStorage.getItem("current"));
//----------------------------------------------------------------------------------------//

// Storage: Wish List

if (!sessionStorage.getItem("wishlistItems")) {
  const wishlistItems = [];
  sessionStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
}
const wishlistItems = JSON.parse(sessionStorage.getItem("wishlistItems"));
//----------------------------------------------------------------------------------------//

//List: Products

const womanProducts = [
  {
    id: 1,
    title: "Mickey Mouse Sweatshirt",
    price: 35000,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "shirt",
    image: {
      image1: "./Image/sweat-shirt.png",
      image2: "./Image/sweat-shirt.png",
      image3: "./Image/sweat-shirt.png",
    },
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Bleddy Jacket",
    price: 22000,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "jackets",
    image: {
      image1: "./Image/jacket.png",
      image2: "./Image/jacket.png",
      image3: "./Image/jacket.png",
    },
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Double-breasted boucle coat",
    price: 40000,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "coat",
    image: {
      image1: "./Image/green.png",
      image2: "./Image/green.png",
      image3: "./Image/green.png",
    },
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Purple fit jacket",
    price: 30000,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "jackets",
    image: {
      image1: "./Image/jacket1.png",
      image2: "./Image/jacket1.png",
      image3: "./Image/jacket1.png",
    },
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "Double-breasted reddy coat",
    price: 40000,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "coat",
    image: {
      image1: "./Image/red.png",
      image2: "./Image/red.png",
      image3: "./Image/red.png",
    },
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Floral Jacket",
    price: 28000,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jackets",
    image: {
      image1: "./Image/jacket2.png",
      image2: "./Image/jacket2.png",
      image3: "./Image/jacket2.png",
    },
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Dress",
    price: 50000,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "dress",
    image: {
      image1: "./Image/dress1.png",
      image2: "./Image/dress1.png",
      image3: "./Image/dress1.png",
    },
    rating: {
      rate: 3,
      count: 400,
    },
  },
];

const manProducts = [
  {
    id: 8,
    title: "Hoodie",
    price: 35000,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "hoodie",
    image: {
      image1: "./Image/Hoodie.png",
      image2: "./Image/Hoodie.png",
      image3: "./Image/Hoodie.png",
    },
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "Pyjama-shirt ",
    price: 25000,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "t-shirt",
    image: {
      image1: "./Image/T-shirt.png",
      image2: "./Image/T-shirt.png",
      image3: "./Image/T-shirt.png",
    },
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "Wheat Shirt",
    price: 20000,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "shirt",
    image: {
      image1: "./Image/shirt.png",
      image2: "./Image/shirt.png",
      image3: "./Image/shirt.png",
    },
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title: "Pullover jean",
    price: 36000,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "jean",
    image: {
      image1: "./Image/jean.png",
      image2: "./Image/jean.png",
      image3: "./Image/jean.png",
    },
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title: "Streetlist Shirt",
    price: 30000,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "t-shirt",
    image: {
      image1: "./Image/T-shirt1.png",
      image2: "./Image/T-shirt1.png",
      image3: "./Image/T-shirt1.png",
    },
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Blue Jean",
    price: 35000,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "jean",
    image: {
      image1: "./Image/jean1.png",
      image2: "./Image/jean1.png",
      image3: "./Image/jean1.png",
    },
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 14,
    title: "Sambling Shirt",
    price: 20000,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "shirt",
    image: {
      image1: "./Image/shirt1.png",
      image2: "./Image/shirt1.png",
      image3: "./Image/shirt1.png",
    },
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
];
//----------------------------------------------------------------------------------------//

// List: Categories

const categoriesWomen = ["all", "shirt", "dress", "coat", "jackets"];

const categoriesMen = ["all", "hoodie", "shirt", "t-shirt", "jean"];
//----------------------------------------------------------------------------------------//

//List: Item Quantity

const config = {
  min: 1,
  max: 5,
  defaultItemQuantity: 1,
};
//----------------------------------------------------------------------------------------//

// Function: Log In

function login() {
  const email = document.getElementById("logInEmail").value;
  const password = document.getElementById("logInPassword").value;
  const user = users.filter(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    currentUser = user;
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password.");
  }
}
//----------------------------------------------------------------------------------------//

// Function: Register

function register() {
  const username = document.getElementById("signUpUsername").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;

  const existingUsername = users.find((user) => user.username === username);
  const existingEmail = users.find((user) => user.email === email);

  if (existingUsername) {
    alert("Username already exists.");
  }

  if (existingEmail) {
    alert("Email already registered! Try loggin in.");
  }
  if (!existingUsername && !existingEmail) {
    const newUser = {
      username: username,
      email: email,
      password: password,
    };

    users.push(newUser);
    sessionStorage.setItem("users", JSON.stringify(users));

    window.location.href = "index.html";
  }
}
//----------------------------------------------------------------------------------------//

// Function: Handle Men's Category

const addGenderMan = function () {
  gender = "man";
  sessionStorage.setItem("gender", JSON.stringify(gender));
  window.location.href = "product_page.html";
};
//----------------------------------------------------------------------------------------//

//Function: Handle Women's Category

const addGenderWoman = function () {
  gender = "woman";
  sessionStorage.setItem("gender", JSON.stringify(gender));
  window.location.href = "product_page.html";
};
//----------------------------------------------------------------------------------------//

// Function: Calculate Total Cost

const calculateTotalCost = () => {
  totalCost.innerText = [
    ...document.querySelectorAll(".item-in-cart-cost"),
  ].reduce((pv, cv) => pv + parseFloat(cv.innerHTML), 0);
};
//----------------------------------------------------------------------------------------//

// Function: Cart Counter

const cartCounter = () => {
  cartCounterBadge.forEach((el) => (el.innerText = carts.children.length));
};
//----------------------------------------------------------------------------------------//

// Function: Create Item in Cart

const createItemInCart = ({ id, title, image, price }) => {
  const itemInCart = document.createElement("div");
  itemInCart.classList.add("item-in-cart");
  itemInCart.setAttribute("item-in-cart-id", id);
  itemInCart.setAttribute("item-in-cart-title", title);
  itemInCart.setAttribute("item-in-cart-cost", price);
  itemInCart.setAttribute("item-in-cart-img", image.image1);
  itemInCart.innerHTML = `
      <div class="mb-3">
        <img class="item-in-cart-img ms-2" src="${image.image1}" alt="">
        <div class="border border-primary bg-white overflow-hidden p-3">
          <div class="text-end">
            <div class="item-in-cart-delete " >
              <i class=" bi bi-trash3 text-danger "></i>
            </div>
          </div>
          <p class=" mb-0 text-truncate mb-2">${title}</p>
          <div class=" d-flex justify-content-between align-items-end">
            <p class=" text-black-50 mb-0">
              <span class="item-in-cart-cost fs-5">${
                price * config.defaultItemQuantity
              }</span> MMK
            </p>
            <div class="input-group item-in-cart-control" >
              <button class="btn btn-sm btn-primary item-decrement">
                <i class=" bi bi-dash"></i>
              </button>
              <input type="number" class=" form-control form-control-sm text-end item-quantity"  value="${
                config.defaultItemQuantity
              }" min="1">
              <button class="btn btn-sm btn-primary item-increment">
                <i class=" bi bi-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

  const itemInCartDelete = itemInCart.querySelector(".item-in-cart-delete");

  itemInCartDelete.addEventListener("click", removeFromCart.bind(null, id));

  const itemIncrement = itemInCart.querySelector(".item-increment");
  const itemDecrement = itemInCart.querySelector(".item-decrement");
  const itemQuantity = itemInCart.querySelector(".item-quantity");
  const itemInCartCost = itemInCart.querySelector(".item-in-cart-cost");

  const updateCost = () => {
    itemInCartCost.innerText = itemQuantity.valueAsNumber * price;
    calculateTotalCost();
  };

  itemIncrement.addEventListener("click", () => {
    itemQuantity.valueAsNumber < config.max &&
      (itemQuantity.valueAsNumber += 1);
    updateCost();
  });

  itemDecrement.addEventListener("click", () => {
    itemQuantity.valueAsNumber > config.min &&
      (itemQuantity.valueAsNumber -= 1);
    updateCost();
  });

  return itemInCart;
};
//----------------------------------------------------------------------------------------//

// Function: Categorize

const categorize = (title, li) => {
  document.querySelector(".category-item.active")?.classList.remove("active");
  document
    .querySelectorAll(".category-item")
    .forEach((el) => el.classList.add("border", "border-primary"));
  li.classList.add("active");
  li.classList.remove("border", "border-primary");

  productRender(
    (gender === "man" ? manProducts : womanProducts).filter(
      (product) => title === "all" || product.category === title
    )
  );
};
//----------------------------------------------------------------------------------------//

// Function: Create Category Item

const createCategoryItem = (title) => {
  const li = document.createElement("li");
  li.className = "category-item border border-primary p-2 me-2 text-capitalize";
  li.innerText = title;

  li.addEventListener("click", categorize.bind(null, title, li));

  return li;
};
//----------------------------------------------------------------------------------------//

// Function: Add Current Product

const addCurrentProduct = function (productId) {
  const combinedProducts = [...womanProducts, ...manProducts];
  current = combinedProducts.filter((product) => product.id === productId)[0];
  sessionStorage.setItem("current", JSON.stringify(current));
  window.location.href = "customize.html";
};
//----------------------------------------------------------------------------------------//

// Function: Add to Cart

const addToCart = (productId) => {
  const currentProductCard = document.querySelector(
    `[product-id='${productId}']`
  );

  const currentProductImg = currentProductCard.querySelector(".product-img");

  const currentAddToCartBtn =
    currentProductCard.querySelector(".add-to-cart-btn");

  currentAddToCartBtn.innerText = "Added";
  currentAddToCartBtn.classList.add("active");

  carts.append(
    createItemInCart(
      (gender === "man" ? manProducts : womanProducts).find(
        (product) => product.id === productId
      )
    )
  );

  cartCounter();
  calculateTotalCost();

  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Item is added",
  });
};
// //----------------------------------------------------------------------------------------//

// // Function: Remove from Cart

const removeFromCart = (productId) => {
  // element
  const currentItemInCart = document.querySelector(
    `[item-in-cart-id = '${productId}']`
  );

  const currentProductCard = document.querySelector(
    `[product-id='${productId}']`
  );

  const currentAddToCartBtn =
    currentProductCard.querySelector(".add-to-cart-btn");

  Swal.fire({
    title: "Are you sure?",
    text: "It will remove Item from cart",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Remove",
  }).then((result) => {
    if (result.isConfirmed) {
      currentItemInCart.classList.add("animate__animated", "animate__hinge");

      currentItemInCart.addEventListener("animationend", () => {
        currentItemInCart.remove();

        cartCounter();
        calculateTotalCost();

        currentAddToCartBtn.innerText = "Add to Cart";
        currentAddToCartBtn.classList.remove("active");

        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-start",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Your item has been removed.",
        });
      });
    }
  });
};
//----------------------------------------------------------------------------------------//

// Function: Handle Add to Cart

const handleAddToCart = (productId) => {
  const currentProductCard = document.querySelector(
    `[product-id='${productId}']`
  );

  const currentAddToCartBtn =
    currentProductCard.querySelector(".add-to-cart-btn");

  currentAddToCartBtn.classList.contains("active")
    ? removeFromCart(productId)
    : addToCart(productId);
};
//----------------------------------------------------------------------------------------//

// Function: Create Product

const createProduct = (product) => {
  const productDiv = document.createElement("div");
  productDiv.className = "col-12 col-md-6 col-lg-4";
  productDiv.setAttribute("product-id", product.id);

  const isInCart = [...document.querySelectorAll("[item-in-cart-id]")].find(
    (el) => el.getAttribute("item-in-cart-id") == product.id
  );

  const normalBtn = `<button class=" btn btn-outline-primary d-block w-100 add-to-cart-btn">Add to Cart</button>`;
  const activeBtn = `<button class="active btn btn-outline-primary d-block w-100 add-to-cart-btn">Added</button>`;

  // console.log(isInCart ? true : false);

  productDiv.innerHTML = `
    <div class="product-item">
        <img src="${product.image.image1}" class="product-img ms-3"  alt="" />
        <div class="border border-primary p-3">
            <p class="product-title fw-bold text-truncate">${product.title}</p>
            <p class="product-description small text-black-50">${product.description.substring(
              0,
              120
            )}</p>
            <hr>
            <p class="product-price fw-bold">
                 <span class="price">${product.price}</span> MMK
            </p>

            ${isInCart ? activeBtn : normalBtn}
        </div>
    </div>
    `;

  const productImg = productDiv.querySelector(".product-img");
  productImg.addEventListener(
    "click",
    addCurrentProduct.bind(null, product.id)
  );

  const addToCartBtn = productDiv.querySelector(".add-to-cart-btn");
  addToCartBtn.addEventListener(
    "click",
    handleAddToCart.bind(null, product.id)
  );

  return productDiv;
};
//----------------------------------------------------------------------------------------//

// Function: Place Order

const placeOrder = () => {
  const itemInCart = document.querySelectorAll(".item-in-cart");
  if (itemInCart.length === 0) {
    Swal.fire(
      "Please add any item to cart",
      "You don't have any item selected",
      "warning"
    );
  } else {
    Swal.fire({
      title: "Are you ready to place Order ?",
      text: "It will send order items' information to sellers",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm",
    }).then((result) => {
      const allItemInCart = carts.querySelectorAll(".item-in-cart");
      const items = [];
      const myOrder = {};

      allItemInCart.forEach((el) => {
        const item = {};
        item.productId = el.getAttribute("item-in-cart-id");
        item.productTitle = el.getAttribute("item-in-cart-title");
        item.productCost = el.getAttribute("item-in-cart-cost");
        item.productImage = el.getAttribute("item-in-cart-img");
        item.quantity = el.querySelector(".item-quantity").valueAsNumber;

        items.push(item);
      });

      // add ordered items to myOrder Object
      myOrder.items = items;
      myOrder.total = totalCost.innerText;
      // myOrder.user_id = 5;
      // myOrder.user_name = "Hein Htet Zan";
      // myOrder.order_id = "XG35223DF39";

      console.log(myOrder);
      orderSummary = myOrder;
      sessionStorage.setItem("orderSummary", JSON.stringify(orderSummary));

      carts.innerHTML = null;
      cartCounter();
      calculateTotalCost();

      myCart.hide();
      window.location.href = "check_out.html";
    });
  }
};
//----------------------------------------------------------------------------------------//

// Generate Order items

const generateOrderItems = function () {
  const orderItemsContainer = document.getElementById("order-items");
  orderItemsContainer.innerHTML = "";

  orderSummary.items.forEach((el) => {
    const orderItem = document.createElement("div");
    orderItem.classList.add("row", "gx-5");
    orderItem.innerHTML = `<div class="row gx-5">
    <div class="col">
      <div class="p-3 flex-column">
        <div class="d-flex align-items-center">
          <img src= ${el.productImage} alt=""/>
          <span class="ml-2">x ${el.quantity}</span>
        </div>
      </div>
    </div>
    <div class="col text-center">
      <div class="p-3 fs-5 money" id="price">${
        el.productCost * el.quantity
      } MMK</div>
    </div>
  </div>`;

    orderItemsContainer.appendChild(orderItem);
  });

  document.getElementById("total").textContent = `${orderSummary.total} MMK`;
};
//----------------------------------------------------------------------------------------//

// Function: Add Search Product

const addSearchProduct = function (keyword) {
  searchKeyword = keyword;
  sessionStorage.setItem("searchKeyword", JSON.stringify(searchKeyword));
  window.location.href = "product_page_search.html";
};
//----------------------------------------------------------------------------------------//

// Function: Search Product

const searchProduct = function () {
  const combinedProducts = [...womanProducts, ...manProducts];
  productRender(
    combinedProducts.filter((product) => {
      return (
        product.title.search(searchKeyword) != -1 ||
        product.description.search(searchKeyword) != -1
      );
    })
  );
};
//----------------------------------------------------------------------------------------//

// Function: Search Bar Handler

const handleSearch = function (event) {
  if (event.key === "Enter") {
    addSearchProduct(document.getElementById("search-input").value);
  }
};

//----------------------------------------------------------------------------------------//

// Function: Product Render

const productRender = (productsToRender) => {
  productList.innerHTML = null;
  productsToRender.forEach((product) =>
    productList.append(createProduct(product))
  );
};
//----------------------------------------------------------------------------------------//

// Function: Category Render

const categoryRender = () => {
  (gender === "man" ? categoriesMen : categoriesWomen).forEach((category) => {
    categoriesList.append(createCategoryItem(category));
  });
};
//----------------------------------------------------------------------------------------//

// Function: Generate Transaction Number

const generateTransactionNumber = function () {
  return Math.floor(Math.random() * 1000000000);
};
//----------------------------------------------------------------------------------------//

// Function: Create Invoice

const generateInvoice = function (account, payment, note, address) {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  const transactionNumber = generateTransactionNumber();

  invoice = {
    account: account,
    note: note,
    payment: payment,
    date: currentDate,
    time: currentTime,
    transactionNumber: transactionNumber,
    address: address,
  };

  sessionStorage.setItem("invoice", JSON.stringify(invoice));
  window.location.href = "invoice.html";
};
//----------------------------------------------------------------------------------------//

// Function: Display Invoice

const displayInvoice = function () {
  const tax = (orderSummary.total / 100) * 0.5;
  const total = Number(orderSummary.total) + tax;

  document.getElementById("account").textContent = invoice.account;
  document.getElementById(
    "time"
  ).textContent = `${invoice.date}, ${invoice.time}`;
  document.getElementById("name").textContent = currentUser[0].username;
  document.getElementById("number").textContent = invoice.transactionNumber;
  document.getElementById("amount").textContent = `${orderSummary.total} MMK`;
  document.getElementById("payment").textContent = invoice.payment;
  document.getElementById("note").textContent = invoice.note;
  document.getElementById("address").textContent = invoice.address;
  document.getElementById("tax").textContent = `${tax} MMK`;
  document.getElementById("total").textContent = `${total} MMK`;

  const invoiceItemsContainer = document.getElementById(
    "invoice-items-container"
  );
  invoiceItemsContainer.innerHTML = "";

  orderSummary.items.forEach((el) => {
    const invoiceItem = document.createElement("tr");
    invoiceItem.innerHTML = `<td>
    <div class="media">
      <div class="media-body">
        <p class="mt-0 title" id="title">${el.productTitle}</p>
      </div>
    </div>
  </td>
  <td>${el.productCost} MMK</td>
  <td>${el.quantity}</td>
  <td>${el.productCost * el.quantity} MMK</td>`;

    invoiceItemsContainer.appendChild(invoiceItem);
  });
};
//----------------------------------------------------------------------------------------//

// Function: Add Wish List Items

const addWishListItem = function () {
  wishlistItems.push(current);
  sessionStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  alert("Item Added to the Wishlist!");
};
//----------------------------------------------------------------------------------------//

// Function: Display Product Customization

const displayProductCustomization = function (product) {
  const productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = "";

  productContainer.innerHTML = `<div class="detialMainRow row container">

  <div class="col-6 text-center m-2">
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
      <div class="carousel-inner">
        <div class="carousel-item active" id="carouselItem1">
          <a href="#">
            <img src=${product.image.image1} alt="" class="carouselImage object-fit-cover  rounded">
          </a>
        </div>
        <div class="carousel-item" id="carouselItem2">
          <a href="#">
            <img src=${product.image.image2} alt="" class="carouselImage object-fit-cover  rounded">
          </a>
        </div>

        <div class="carousel-item" id="carouselItem3">
          <a href="#">
            <img src=${product.image.image3} alt="" class="carouselImage object-fit-cover  rounded">
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="col p-0 thirdColCarousel" style="width: 39%;">
    <div class="mb-3">
      <p class="price-through text-capitalize">${product.category}</p>
      <div class="d-flex">
        <p href="#" class="description">${product.title}</p>
        <p class="description ms-auto">${product.price} MMK</p>
      </div>

    </div>
    <div class="mb-4">
      <p class="description-faint d-flex ">Other Editon</p>
      <div class="my-2">
        <a href="#" class="circle-image-link" data-target="carouselItem1">
          <img src=${product.image.image1} alt="Image Description">
        </a>
        <a href="#" class="circle-image-link" data-target="carouselItem2">
          <img src=${product.image.image2} " alt="Image Description">
        </a>
        <a href="#" class="circle-image-link active" data-target="carouselItem3">
          <img src=${product.image.image3} " alt="Image Description">
        </a>
      </div>
    </div>

    <div class="mb-3">
      <div class="d-flex">
        <p class="description-faint">Size</p>
      </div>
      <div class="my-3 size-input">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
        <label class="btn btn-outline-dark btn-size mb-2" for="btnradio1">XXS</label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
        <label class="btn btn-outline-dark btn-size mb-2" for="btnradio2">XS</label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
        <label class="btn btn-outline-dark btn-size mb-2" for="btnradio3">S</label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
        <label class="btn btn-outline-dark btn-size mb-2" for="btnradio4">M</label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
        <label class="btn btn-outline-dark btn-size mb-2" for="btnradio5">L</label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off">
        <label class="btn btn-outline-dark btn-size mb-2" for="btnradio6">XL</label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio7" autocomplete="off">
        <label class="btn btn-outline-dark btn-size mb-2" for="btnradio7">2XL</label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio8" autocomplete="off">
        <label class="btn btn-outline-dark btn-size mb-2" for="btnradio8">3XL</label>
      </div>
      <div class="d-flex">
      <button class="btn btn-dark addToCart_Detail">Add to Cart</button>
        <a href="#heart" class="ms-auto my-auto">
          <button type="button" class="btn btn-outline-dark btn-size" data-bs-toggle="tooltip"
            data-bs-placement="right" title="Click on the heart on the Navigation!" onclick="addWishListItem();">
            <i class="fa-regular fa-heart"></i>
          </button>
        </a>
        <div id="toastContainer" class="toast-container position-fixed bottom-0 end-0 p-3"></div>
      </div>
      <div class="my-4">
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne">
                Details
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
              <div class="accordion-body">
                ${product.description}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo">
                Shipping & Retruns
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
              <div class="accordion-body">
                <p>We offer free shipping on all orders over $75 in the U.S.</p>
                <p>We have the following shipping options available in the U.S.</p>
                <p>
                  Economy - Delivery in 5 to 8 Business Days via UPS or DHL eCommerce
                  <br>
                  Ground - Delivery in 4 to 6 Business Days via UPS
                  <br>
                  Express - Order by Noon ET. Processing begins that same day. Delivery in 2 to 3 Business Days
                  via
                  UPS
                  <br>
                  Priority - Order by Noon ET. Processing begins that same day. Delivery in 1 to 2 Business Days
                  via
                  UPS
                </p>
                Please allow up to 1-2 business days for processing before orders ship from our warehouse.
                If shipping to a P.O. Box or APO/FPO address, you must select Economy. Please note transit times
                will vary.
                Please note we do not ship to freight forwarding address.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree">
                About Us
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
              <div class="accordion-body">
                Welcome to <strong>FashionGit</strong>, where we celebrate individuality and encourage you to
                embrace your unique style. Our mission is simple: to provide a platform where fashion isn't just
                about following trends, but about expressing your true self.
                <a href="./aboutUs.html">For more information.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
};
//----------------------------------------------------------------------------------------//

// Function: Delete Wish List Items
const deleteWishlistItems = function (productId) {
  const productToRemove = wishlistItems.findIndex(
    (product) => product.id === productId
  );
  wishlistItems.splice(productToRemove, 1);
  sessionStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  generateWishlistItems(wishlistItems);
};
//----------------------------------------------------------------------------------------//

// Function: Generate Wish List Items

const generateWishlistItems = function (wishlistItems) {
  const wishlistItemsContainer = document.getElementById(
    "wishlistItemsContainer"
  );
  wishlistItemsContainer.innerHTML = "";

  wishlistItems.forEach((product) => {
    const wishlistItemRow = document.createElement("div");
    wishlistItemRow.classList.add("card", "rounded-3", "mb-4");
    wishlistItemRow.setAttribute("product-id", product.id);

    wishlistItemRow.innerHTML = `
    <div class="card-body p-4">
    <div
      class="row d-flex justify-content-between align-items-center"
    >
      <div class="col-md-2">
        <img
          src="${product.image.image1}"
          class="img-fluid rounded-3 wish-list-img"
          alt="T Shirt 1"
        />
      </div>
      <div class="col-md-3">
        <p class="lead fw-normal mb-2">
          ${product.title}
        </p>
      </div>

      <div class="col-md-3 text-center">
        <h5 class="mb-0 cart-item-price">${product.price} MMK</h5>
      </div>

      <div class="col-md-1 text-end">
        <a href="#" " class="text-danger trash-can delete-wish-list-item"
          ><i class="fas fa-trash fa-lg"></i
        ></a>
      </div>
    </div>
  </div>
    `;

    const wishListImg = wishlistItemRow.querySelector(".wish-list-img");
    wishListImg.addEventListener(
      "click",
      addCurrentProduct.bind(null, product.id)
    );

    const deleteWishlistItemBtn = wishlistItemRow.querySelector(
      ".delete-wish-list-item"
    );

    deleteWishlistItemBtn.addEventListener(
      "click",
      deleteWishlistItems.bind(null, product.id)
    );

    wishlistItemsContainer.appendChild(wishlistItemRow);
  });
};
//----------------------------------------------------------------------------------------//
