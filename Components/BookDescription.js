const BookDescrition = book => {
  let html =`<ul 
              id="bookDetail${book.id}" 
              class="rounded-md border-2 border-fuchsia-700 bg-fuchsia-100 "
             
              style="
              width:20vw;
              ">
            <img src="${book.coverImage}" alt="CoverImage"/>
            <li>Title: ${book.title}</li> 
            <li>Författare: ${book.author}</li>
            <li> Utgivningsår: ${book.title}</li> 
            <li> Sidor: ${book.pages}</li>         
           
            
            </ul> `

            
            
            
            
            ;
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