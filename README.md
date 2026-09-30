# Interactive Personal Blog Platform

This project is a client-side personal blog application created for the Per Scholas Skills-Based Assessment (SBA). The goal of the project is to demonstrate DOM manipulation, event handling, form validation, and data persistence using `localStorage`. Users can create, edit, delete, and save blog posts directly in the browser without any backend.

---

## 📌 Project Description

The Interactive Personal Blog Platform allows users to:

- Create new blog posts with a title and content.
- Display all posts dynamically on the page.
- Edit existing posts by loading them back into the form.
- Delete posts from both the page and `localStorage`.
- Persist posts even after refreshing or closing the browser.

The project focuses on JavaScript functionality rather than styling, following the SBA requirements.

---

## ▶️ How to Run the Application

No installation or server is required.

1. Download or clone the repository.
2. Open **index.html** in any modern web browser (Chrome, Firefox, Edge).
3. Start creating posts — everything runs directly in the browser.

There are no additional dependencies or setup steps.

---

## 🧠 Reflection

### **Development Process**
I built the project step-by-step, starting with the HTML structure, then adding basic styling, and finally implementing all JavaScript functionality. I focused on breaking the logic into small, manageable functions such as loading posts, saving posts, rendering posts, validating the form, and handling edit/delete actions.

### **Challenges Faced**
I encountered a few issues during development:

1. **Form validation bug**  
   I mistakenly used `titleInput.Value` instead of `titleInput.value`. Because JavaScript is case-sensitive, this caused validation to fail and prevented posts from being saved. Debugging this taught me how small typos can break the entire workflow.

2. **Incorrect element ID**  
   My JavaScript was referencing an ID (`postContainer`) that didn’t match the HTML. This caused posts not to render. I fixed it by ensuring the HTML and JS IDs matched exactly.

3. **Understanding edit vs. create logic**  
   Managing the difference between creating a new post and editing an existing one required tracking the post ID. Once I implemented `editingPostId`, the logic became clear.

### **How I Overcame These Challenges**
- I used `console.log()` to trace values and identify where the logic was failing.
- I carefully rechecked my HTML and JavaScript to ensure all IDs matched.
- I broke the code into smaller functions to isolate issues.
- I asked for help and reviewed explanations to understand the mistakes clearly.

These steps helped me successfully complete the project and understand DOM manipulation more deeply.

---

## ⚠️ Known Issues / Features Not Implemented

- Editing uses the same form instead of a modal popup.
- Posts do not display timestamps (although the ID is based on `Date.now()`).
- Styling is intentionally minimal per SBA instructions.
- There is no search or filter functionality for posts.
