# Web Development Course: Todo App Exercise

Welcome, Students! 🎉

In this exercise, you will create a **Todo App** using the [DummyJSON Todos API](https://dummyjson.com/docs/todos). The goal is to practice CRUD (Create, Read, Update, Delete) operations and sharpen your front-end development skills. Follow the instructions below carefully and submit your work **before midnight**, as the repository will lock at that time.

---

## 🚀 Objectives
- Fetch and display todos from the API.
- Add new todos to the API.
- Update existing todos using the API.
- Delete todos via the API.

---

## 📚 Instructions

### 1. **Setup**
1. Clone the repository provided to you for this exercise.
2. Read through the [DummyJSON Todos API Documentation](https://dummyjson.com/docs/todos) to understand how to interact with the endpoints.
---

### 2. **Functional Requirements**
Your Todo App must include the following features:

#### 1. **Display Todos**
- Fetch the list of todos from the API: `GET /todos`
- Display the todos in a visually appealing way (e.g., in a list or card format).
- Include the following fields for each todo:
  - `id`
  - `todo` (description)
  - `completed` (status)

#### 2. **Add a Todo**
- Allow users to add a new todo using a form.
- Use the `POST /todos/add` endpoint.
- Update the displayed list of todos after successfully adding a new item.

#### 3. **Update a Todo**
- Provide an option for users to mark a todo as "completed" or edit its description.
- Use the `PUT /todos/{id}` endpoint.
- Update the UI to reflect changes.

#### 4. **Delete a Todo**
- Allow users to delete a todo item.
- Use the `DELETE /todos/{id}` endpoint.
- Remove the deleted todo from the UI.

---

### 3. **Technical Requirements**
- Use **JavaScript** to interact with the API (or the assigned framework).
- Include loading indicators when fetching data from the API.

---

### 4. **Submission Guidelines**
1. Push your code to the repository before **11:59 PM**.
---

## 💡 Tips and Best Practices
- **Write reusable code**: Create functions/classes for repeated actions like fetching data or updating the DOM.
- **Keep it clean**: Use meaningful variable names and format your code for readability.
- **Debug as you go**: Check the console for errors frequently to catch issues early.
- **Commit frequently**: Commit regurlarly and use descriptive commit messages

---

## 🌟 Bonus Challenges
- Add filters (e.g., show only completed todos).
- Implement a search bar to find specific todos.
---

### 🔗 Resources
- [DummyJSON Todos API Documentation](https://dummyjson.com/docs/todos)
- [MDN Web Docs: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

**Good luck, and happy coding!** 🧑‍💻💻  
If you have any questions, reach out to your me.
