package com.codingdojo.updatedelete.services;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.updatedelete.models.Book;
import com.codingdojo.updatedelete.repositories.BookRepository;

@Service
public class BookService {
    // adding the book repository as a dependency
    private final BookRepository bookRepository;
    
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    // returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
    // updates a book
    public Book updateBook(Long id, String title, String desc, String lang, Integer numOfPages) {
    	if (bookRepository.existsById(id)) { // If book is found with this id
    		Book thisBook = findBook(id); // Get the book 
    		thisBook.setTitle(title);
    		thisBook.setDescription(desc);
    		thisBook.setLanguage(lang);
    		thisBook.setNumberOfPages(numOfPages);
    		bookRepository.save(thisBook); // Save changes
    		return thisBook;
    	} else {
    		return null;
    	}
    }

    public void deleteBook(Long id) {
    	if (bookRepository.existsById(id)) {
    		bookRepository.deleteById(id);
    	}
	}
    
}