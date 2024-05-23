package com.example.librarymanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.librarymanagement.modal.Book;
import com.example.librarymanagement.service.BookService;

@RestController
@RequestMapping(value = "/inventory")
public class BookController {
	@Autowired
	BookService bookService;

	@GetMapping("/books")
	List<Book> all() {
		List<Book> bookList = bookService.getAllBook();
		return bookList;
	}

	@PostMapping("/books")
	@ResponseStatus(value = HttpStatus.CREATED)
	public Book createBook(@RequestBody Book bookIn) {
		System.out.println(bookIn.toString());
		Book bookOut = bookService.createBook(bookIn);
		return bookOut;
	}

	@PutMapping("/books")
	@ResponseStatus(value = HttpStatus.OK)
	public Book putMethodName(@RequestBody Book bookIn) {
		Book bookOut = bookService.updateBook(bookIn);
		if (bookOut != null) {
			return bookOut;
		} else {
			return null;
		}

	}

	@DeleteMapping("/books")
	@ResponseStatus(value = HttpStatus.OK)
	public Book deleteMethod(@RequestBody Book bookIn) {
		Book bookOut = bookService.deleteBook(bookIn);
		if (bookOut != null) {
			return bookOut;
		} else {
			return null;
		}
	}

}