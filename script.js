'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});


searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);


function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');
  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
}
//eventlyssnare för mouseover
function handleMouseEnter(li){

  //getOne(li.id).then((apiBooks) => (bookList = apiBooks));
  getOne(li.id).then((book) => {
  
  li.insertAdjacentHTML('beforeend', BookDescrition(book));
  }
  );
}

function handleMouseLeave(li){
  const removebookDetail = document.getElementById('bookDetail');
  console.log('bookDetail');
  //getOne(li.id).then((apiBooks) => (bookList = apiBooks));
  removebookDetail.remove();
  
  
  
}


/* document.onmouseover('handle').addEventListener('mouseover', (e) => console.log(e)) */
/* function renderBookDescription(bookDescription) {
  
} */

/* document.getElementById('outer').addEventListener('mouseover', (e) => {
  console.log('Lyssnare för outer div', e);  
}); */