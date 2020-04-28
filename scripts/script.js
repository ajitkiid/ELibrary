var booksData = {
    "books": [{
            "bookName": "Everyone Has A Story",
            "bookAuthor": "Savi Sharma",
            "bookID": "1",
            "bookPrice": "73",
            "bookDescription": "Meera, a fledgling writer who is in search of a story that can touch millions of lives Vivaan, assistant branch manager at Citibank, who dreams of travelling the world. ",
            "imageURL": "images/book1.jpg",
            "bookCategory": "Arts"

		}, {
            "bookName": "The Monk Who Sold His Ferrari",
            "bookAuthor": "Robin Sharma",
            "bookID": "2",
            "bookPrice": "77",
            "bookDescription": "A renowned inspirational fiction, The Monk Who Sold His Ferrari is a revealing story that offers the readers a simple yet profound way to live life.",
            "imageURL": "images/book2.jpg",
            "bookCategory": "Drama"
		}, {
            "bookName": "Who Will Cry When You Die?",
            "bookAuthor": "Robin Sharma",
            "bookID": "3",
            "bookPrice": "97",
            "bookDescription": "In yet another bestseller Grow 'Who Will Cry When You Die?' ",
            "imageURL": "images/book3.jpg",
            "bookCategory": "Physics"
		}, {
            "bookName": "Harry Potter",
            "bookAuthor": "JK Rowling",
            "bookID": "4",
            "bookPrice": "97",
            "bookDescription": "Think And Grow Rich has earned itself the reputation of being considered a textbook for actionable techniques that can help one get better at doing anything, not just by rich and wealthy, but also by people doing wonderful work in their respective fields.",
            "imageURL": "images/book4.jpg",
            "bookCategory": "Science"
		}, {
            "bookName": "Think and Grow Rich",
            "bookAuthor": "Robin Sharma",
            "bookID": "5",
            "bookPrice": "97",
            "bookDescription": "Think And Grow Rich has earned itself the reputation of being considered a textbook for actionable techniques that can help one get better at doing anything, not just by rich and wealthy, but also by people doing wonderful work in their respective fields.",
            "imageURL": "images/book5.jpg",
            "bookCategory": "Philosophy"
		},{
            "bookName": "Think and Grow Rich",
            "bookAuthor": "Robin Sharma",
            "bookID": "5",
            "bookPrice": "97",
            "bookDescription": "Think And Grow Rich has earned itself the reputation of being considered a textbook for actionable techniques that can help one get better at doing anything, not just by rich and wealthy, but also by people doing wonderful work in their respective fields.",
            "imageURL": "images/book5.jpg",
            "bookCategory": "Philosophy"
		}

	]


}
console.log("testing");

$(document).ready(function () {
    function showBooks(books) {

        var bookContainer = $("#bookContainer");

        $.each(books, function (i, book) {
            console.log(book.bookName);
            var divContent = "<div data-divType=\"book-div\" id=\"bookTile" + book.bookID + "\"class=\"col-md-4 reset-margin-padding padding-10\">" +
                "<div class=\"col-md-12 container-border\">" +
                "<div class=\"height-400\">" +
                "<div class=\"height-80-pc container-border\">" +
                "<img src=\"" + book.imageURL + "\" class=\"book-image\">" +
                "</div>" +
                "<div class=\"height-20-pc container-borders\">" +
                "<div class=\"book-name\">" +
                "<label for=\"bookName\"></label>" +
                "<p id=\"bookName\" >" + book.bookName + "\</p>" +
                "</div>" +

                "<div class=\"book-description\">" +
                "<p id=\"bookAuthor\" >" + book.bookAuthor + "</p>" +
                "<p id=\"bookID\" >ISBN:" + book.bookID + "</p>" +
                "<p id=\"bookCategory\" >" + book.bookCategory + "</p>" +
                "</div>" +

                "</div>" +
                "</div>" +
                "</div>" +
                "</div>";
            bookContainer.append(divContent);
        });

    }
    showBooks(booksData.books);

    function addNewBook() {
        var newBook = {
            "bookName": $("#newBookName").val(),
            "bookAuthor": $("#newBookAuthor").val(),
            "bookID": $("#newBookID").val(),
            "bookPrice": $("#newBookPrice").val(),
            "bookDescription": $("#newBookDescription").val(),
            "imageURL": $("#newBookImageURL").val(),
            "bookCategory": $("#newBookCategory").val()
        }
        booksData.books.push(newBook);

        showBooks([newBook]);

    }

    $("#btnAddBook").click(function (t) {
        addNewBook();
    });

    $("#searchQuery").keypress(function () {

        var searchQuery = $("#searchQuery").val();
        console.log(searchQuery);
        $.each(booksData.books, function (i, book) {

            if (JSON.stringify(book).toLocaleUpperCase().indexOf(searchQuery.toUpperCase()) == -1) {

                $("#bookTile" + book.bookID).hide(300);
                console.log("found in " + book.bookID);

            } else {

                $("#bookTile" + book.bookID).show(300);
            }

        });

    });

    $("div[data-divType='book-div']").click(function (event) {

        var selectedBookID=event.currentTarget.querySelector("#bookID").innerHTML.split(":")[1];
        var bookDetailDivContent;
        $.each(booksData.books, function (i, book) {

            if (selectedBookID==book.bookID) {

                bookDetailDivContent=   "<div><p class=\"text-primary h1\">"+book.bookName+"</p></div>"+
                                        "<div><p class=\"text-success text-right\">--By "+book.bookAuthor+"</p></div>"+
                                        "<div><kbd>ID:"+book.bookID+"</kbd></div>"+
                                        "<div><p class=\"text-muted text-justify\">"+book.bookDescription+"</p></div>"+
                                        "<div><p class=\"text-primary\">Category:"+book.bookCategory+"</p></div>"
                console.log("found in " + book.bookID);
                $("#bookDetailsModalBody").html(bookDetailDivContent);
                

            } else {

               bookDetailDivContent="";
            }
            
            
            
            
        });
        
        $("#bookDetailsModal").fadeIn(300);
        console.log(bookID);
 });
    
    $("#closeModal").click(function (){
        
        $("#bookDetailsModal").fadeOut(300);
        console.log("clicked on close");
        
    });
});