const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  // Add a book only if title, author, and year are valid
  addBook(book) {
    const { title, author, year } = book;

    if (
      typeof title !== "string" || title.trim() === "" ||
      typeof author !== "string" || author.trim() === "" ||
      typeof year !== "number" || isNaN(year)
    ) {
      console.log("❌ Book information is incomplete or invalid.");
      return;
    }

    // Prevent duplicate titles (optional enhancement)
    if (this.findBookByTitle(title)) {
      console.log("⚠️ Book with this title already exists.");
      return;
    }

    this.books.push({ title: title.trim(), author: author.trim(), year });
    console.log(`✅ Book '${title}' added successfully.`);
  },

  // Find book by title
  findBookByTitle(title) {
    return this.books.find(book => book.title === title.trim());
  },

  // Remove book by title
  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title.trim());

    if (index !== -1) {
      const removed = this.books.splice(index, 1);
      console.log(`🗑️ Book '${removed[0].title}' removed.`);
    } else {
      console.log("❌ Book not found.");
    }
  }
};

// 🧪 Test Cases

// 1. Invalid book (missing title)
library.addBook({ author: "George Orwell", year: 1949 });

// 2. Valid book
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

// 3. Duplicate book
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

// 4. Check total books
console.log("📚 Total books in library:", library.books.length);

// 5. Find a book
const found = library.findBookByTitle("1984");
console.log("🔎 Found book:", found);

// 6. Remove a book
library.removeBook("1984");

// 7. Try to remove again
library.removeBook("1984");

// 8. Final library state
console.log("📚 Final Library Books:", library.books);
