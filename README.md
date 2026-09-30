# Interactive Personal Blog Platform

This project is a client-side personal blog application created for the Per Scholas Skills-Based Assessment (SBA). It demonstrates DOM manipulation, event handling, form validation, semantic HTML, and data persistence using `localStorage`. Users can create, edit, delete, and save blog posts directly in the browser without any backend.

---

## 📌 Project Description

The Interactive Personal Blog Platform allows users to:

- Create new blog posts with a title and content.
- Display posts dynamically using semantic `<article>` elements.
- Edit existing posts with updated timestamps.
- Delete posts using event delegation.
- Persist posts using `localStorage` so they remain after refresh.
- Receive real-time validation feedback while typing.
- See a friendly message when no posts exist.

The project focuses on JavaScript functionality and DOM manipulation, following the SBA requirements.

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
I built the project step-by-step, starting with the HTML structure, then adding styling, and finally implementing all JavaScript functionality. I broke the logic into small functions such as loading posts, saving posts, rendering posts, validating the form, and handling edit/delete actions. Later, I improved the project by adding timestamps, event delegation, and real-time validation.

### **Challenges Faced**
I encountered a few issues during development:

1. **Form validation bug**  
   I mistakenly used `titleInput.Value` instead of `titleInput.value`. Because JavaScript is case-sensitive, this caused validation to fail and prevented posts from being saved.

2. **Incorrect element ID**  
   My JavaScript referenced an ID (`postContainer`) that didn’t match the HTML. This caused posts not to render until I corrected the mismatch.

3. **Understanding edit vs. create logic**  
   Managing the difference between creating a new post and editing an existing one required tracking the post ID. Implementing `editingPostId` helped solve this.

4. **Event delegation**  
   Switching from inline `onclick` attributes to event delegation required restructuring how buttons were detected and handled.

### **How I Overcame These Challenges**
- I used `console.log()` to trace values and identify where the logic was failing.
- I rechecked my HTML and JavaScript to ensure all IDs matched.
- I broke the code into smaller functions to isolate issues.
- I added `try/catch` to safely load JSON from `localStorage`.
- I asked for help and reviewed explanations to understand the mistakes clearly.

These steps helped me successfully complete the project and deepen my understanding of DOM manipulation and JavaScript event handling.

---

## ⚠️ Known Issues / Features Not Implemented

- Editing uses the same form instead of a modal popup.
- Styling is intentionally minimal per SBA instructions.
- No search or filter functionality for posts.
- Posts do not include categories or tags.
- No confirmation prompt before deleting a post.

---

## ✔️ Status

All required SBA features are fully implemented:
- Create  
- Read  
- Update  
- Delete  
- Validation  
- Real-time validation  
- LocalStorage persistence  
-Dynamic DOM rendering  
- Event delegation  
- Semantic HTML  