package com.example.librarymanagement.modal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity

@Table(name = "book")
public class Book extends BaseEntity {
	@Column(name = "price")
	private int price;

	@Column(name = "page")
	private int pages;

	@Column(name = "title")
	private String title;

	@Column(name = "author")
	private String author;

	@Column(name = "discription")
	private String discription;

	@Column(name = "publication")
	private String publication;

	public void setPrice(int price) {
		this.price = price;
	}

	public void setPages(int pages) {
		this.pages = pages;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public void setDiscription(String discription) {
		this.discription = discription;
	}

	public void setPublication(String publication) {
		this.publication = publication;
	}

	public int getPrice() {
		return this.price;
	}

	public int getPages() {
		return this.pages;
	}

	public String getTitle() {
		return this.title;
	}

	public String getAuthor() {
		return this.author;
	}

	public String getDiscription() {
		return this.discription;
	}

	public String getPublication() {
		return this.publication;
	}

	public String toString() {
		return "\n Author :" + this.author + "\n Price : " + this.price + "\n pages : " + this.pages + "\n title :"
				+ this.title + "\n Discription : " + this.discription + "\n publication : " + this.publication;
	}
}