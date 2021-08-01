console.log('this is ES6 version of library project ');

class Book{
    constructor(name, author, type) {
                this.name = name;
                this.author = author;
                this.type = type;
               }   
}

class Display{
     add(book) {
        console.log('adding to UI');
        let tablebody = document.getElementById('tableBody')
        let uistring = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tablebody.innerHTML += uistring;
    
    }

     clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if(book.name.length < 3 || book.author.lenght < 3)
        {
            return false;
        }
        else{
            return true;
        }
    }
    show(type,displayMessage){
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                    <strong>Message:</strong> ${displayMessage}
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>`;
                setTimeout(function() {
                    message.innerHTML=''
                },2000);
        }
}
//add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormsubmit);

function libraryFormsubmit(e) {
    console.log('you have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;


    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let astrology = document.getElementById('astrology');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (astrology.checked) {
        type = astrology.value;

    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show ('success', 'your book is successfully added');
    } 
    else {
        display.show('danger', 'sorry you cannot add this book');
    }
    e.preventDefault();
} 