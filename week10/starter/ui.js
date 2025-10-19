// Lesson 3 - Events Starter

import { addQuote, deleteQuote, updateQuote, getAllQuotes } from "./quote.js";

let quotes = []

// Select DOM elements
const quoteList = document.getElementById("quote-list");
const form = document.getElementById("quoteForm");
const contentInput = document.getElementById("content");
const authorInput = document.getElementById("author");
const idInput = document.getElementById("quoteId");
const randomBtn = document.getElementById("randomBtn");
const randomDisplay = document.getElementById("randomQuoteDisplay");


function createQuoteElement(quote) {
  const quoteDiv = document.createElement("div");
  quoteDiv.setAttribute("data-id", quote.id);

  const contentParagraph = document.createElement("p");
  contentParagraph.textContent = quote.content;

  const authorParagraph = document.createElement("p");
  authorParagraph.textContent = quote.author;
  const editButton = document.createElement("button");
  editButton.className = "edit-btn";
  editButton.setAttribute("data-id", quote.id);
  editButton.textContent = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.setAttribute("data-id", quote.id);
  deleteButton.textContent = "Delete";

  quoteDiv.appendChild(contentParagraph);
  quoteDiv.appendChild(authorParagraph);
  quoteDiv.appendChild(editButton);
  quoteDiv.appendChild(deleteButton);

  return quoteDiv;
}


// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
  const quoteElement = createQuoteElement(quote);
  quoteList.appendChild(quoteElement);
}

function updateQuoteInDOM(quote) {
  const existingQuoteDiv = quoteList.querySelector(`div[data-id="${quote.id}"]`);
  if (existingQuoteDiv) {
    existingQuoteDiv.children[0].textContent = quote.content;
    existingQuoteDiv.children[1].textContent = quote.author;
  }
}

function deleteQuoteFromDOM(id) {
  const quoteDivToRemove = quoteList.querySelector(`div[data-id="${id}"]`);
  if (quoteDivToRemove) {
    quoteList.removeChild(quoteDivToRemove);
  }
}

function renderQuotes() {
  quoteList.innerHTML = "";
  quotes = getAllQuotes();
  quotes.forEach((quote) => addQuoteToDOM(quote));
}

function showRandomQuote() {
  if (quotes.length === 0) {
    randomDisplay.textContent = "No quotes available.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  randomDisplay.innerHTML = `<p>${randomQuote.content}</p><p>- ${randomQuote.author}</p>`;
}
// Event listeners for form submission, edit, and delete clicks

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const content = contentInput.value;
  const author = authorInput.value;
  const id = idInput.value;

  if (id) {


    updateQuote(parseInt(id), content, author);
  } else {

    addQuote(content, author);
  }
  renderQuotes();
  form.reset();
  idInput.value = "";
});

quoteList.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const id = parseInt(e.target.dataset.id);
    const quoteToEdit = quotes.find((q) => q.id === id);
    if (quoteToEdit) {
      contentInput.value = quoteToEdit.content;
      authorInput.value = quoteToEdit.author;
      idInput.value = quoteToEdit.id;
    }
  } else if (e.target.classList.contains("delete-btn")) {
    const id = parseInt(e.target.dataset.id);
    deleteQuote(id);
    renderQuotes();
  }
});

randomBtn.addEventListener("click", showRandomQuote);

renderQuotes();
