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
//eventlyssnare för mouseenter
function handleMouseEnter(li){

 //funktionen getOne hämtar 
  getOne(li.id).then((book) => {
  
  li.insertAdjacentHTML('beforeend', BookDescrition(book));
  }
  );
}
//eventlyssnare för mouseleave
function handleMouseLeave(li){
  const removebookDetail = document.getElementById(`bookDetail${li.id}`);
  console.log(`bookDetail${li.id}`);
 
  removebookDetail.remove();
  
  
  
}


