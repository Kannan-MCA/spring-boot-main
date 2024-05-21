package com.example.librarymanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.librarymanagement.modal.Book;
import com.example.librarymanagement.repository.BookRepository;

@Service
public class BookService {
	@Autowired
	BookRepository bookRepository;

	public Book createBook(Book bookIn) {
		Book bookEntity = bookRepository.save(bookIn);
		return (bookEntity);
	}

	public List<Book> getAllBook() {
		List<Book> BookList = bookRepository.findAll();
		return BookList;
	}

	public Book updateBook(Book bookIn) {
		Optional<Book> book = bookRepository.findById(bookIn.getId());
		if (book.isPresent()) {
			book.get().setAuthor(bookIn.getAuthor());
			book.get().setDiscription(bookIn.getDiscription());
			book.get().setPages(bookIn.getPages());
			book.get().setPrice(bookIn.getPrice());
			book.get().setPublication(bookIn.getPublication());
			book.get().setTitle(bookIn.getTitle());
			Book bookEntity = bookRepository.save(book.get());
			return (bookEntity);
		} else {
			return null;
		}
	}

	public Book deleteBook(Book bookIn) {
		Optional<Book> book = bookRepository.findById(bookIn.getId());
		if (book.isPresent()) {
			bookRepository.deleteById(book.get().getId());
			return book.get();
		} else {
			return null;
		}
	}
}
