
//används ej-kod fungerar ej. Uppdelad kod.
searchField.addEventListener('keyup', handleKeyPress);

function handleKeyPress(event) {
 /* Ta emot/läsa av värdet i inputfältet. 
    Skicka värdet till searchBooks.
    SearchBooks returnerar en filtrerad lista,
    filtrerade listan skickas till renderBooklist
 */
  searchBooks(event.target.value);
}

function searchBooks(searchTerm) {
  console.log(searchTerm)
 /* Loopa igenom bookList
    För varje varv i loopen, ta det aktuella elementet (boken)
    Jämför titeln med söktermen
    Om söktärmen finns någonstans i titeln, lägg till elementet i ny lista (filteresList)
    Returnerar filteredList eller anropar renderBookList? 
 */
 
  const filteredList = [];
  for (let i = 0; i < bookList.length; i++) {
    console.log(bookList[i].title)
    const title = bookList[i].title.toLowerCase();
    console.log(title.indexOf(searchTerm.toLowerCase()))
    if (title.indexOf(searchTerm.toLowerCase()) >= 0) {
        filteredList.push(bookList[i]);
    }
  }
  renderBookList(filteredList);
}