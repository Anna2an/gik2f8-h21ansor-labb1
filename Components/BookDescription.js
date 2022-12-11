const BookDescrition = book => {
  let html =`<div  id="bookDetail${book.id}" class=" w-96 h-48 m-2 bg-pink-100/90 flex justify-between px-2 py-2 absolut top-10 right-10 rounded">
  
          <ul>
            <li>Title: ${book.title}</li> 
            <li>Författare: ${book.author}</li>
            <li> Utgivningsår: ${book.title}</li> 
            <li> Sidor: ${book.pages}</li>         
          </ul>
          <img src="${book.coverImage}" alt="CoverImage"/>
          </div> ` ;
  return html;
};


  