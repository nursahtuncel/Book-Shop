let bookList = [];

const toggleModal = () => {
  const basketModalEl = document.querySelector(".basket_modal");
  basketModalEl.classList.toggle("active");
};

const getBooks = () => {
  fetch("./products.json")
    .then((res) => res.json())
    .then((books) => {
      bookList = books;
      createBookItemsHtml();
    });
};

const createBookItemsHtml = () => {
  const bookListEl = document.querySelector(".book_list"); // NOT: class olduğu için . ile seçiyoruz
  let bookListHtml = "";

  bookList.forEach((book) => {
    const stars = Math.round(book.starRate);
    const starHtml = '<i class="bi bi-star-fill"></i>'.repeat(stars);

    bookListHtml += `
      <div class="col-5 mt-5 offset-2">
        <div class="row book_card">
          <div class="col-6">
            <img
              class="img-fluid shadow"
              src="${book.imgSource}"
              alt="${book.name}" />
          </div>

          <div class="col-6">
            <div class="book_detail">
              <span class="fos gray fs-5">${book.author}</span><br />
              <span class="fs-4 fw-bold">${book.name}</span><br />
              <span class="book_star_rate">
                ${starHtml}
                <span class="gray">${book.reviewCount} reviews</span>
              </span>
              <p class="book_description fos gray">${book.description}</p>
              <div>
                <span class="black fs-5 fw-bold">${book.price}$</span>
                ${
                  book.oldPrice
                    ? `<span class="gray fs-5 text-decoration-line-through">${book.oldPrice}$</span>`
                    : ""
                }
              </div>
              <button class="btn_purple">ADD BASKET</button>
            </div>
          </div>
        </div>
      </div>`;
  });

  bookListEl.innerHTML = bookListHtml;
};

getBooks();
