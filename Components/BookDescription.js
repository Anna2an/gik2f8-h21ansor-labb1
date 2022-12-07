const BookDescrition = BookDescription => {
  let html =`<ul 
              id="bookDetail rounded-md border-2 border-fuchsia-700 bg-fuchsia-100 w-full mx-auto">
            ${book.author} - ${book.title}
            </ul>`;
  return html;
};

/*const BookList = (bookList) => {
  let html = `<ul class="book-list rounded-md border-2 border-blue-400 bg-white w-full mx-auto">`;
  for (let i = 0; i < bookList.length; i++) {
    html += BookListItem(bookList[i]);
  }

  html += `</ul>`;

  return html;
};

const BookListItem = (book) => {
  let html = `<li
                class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
              ${book.author} - ${book.title}    
              </li>`;
  return html;
};*/