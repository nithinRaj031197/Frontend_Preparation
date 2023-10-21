# LocalStorage:

- Web storage feature in web browsers that allows you **_to store key-value pairs in user's web browser_**.

- This **_storage is persistent and remains available even when the user closes the browser_** or navigates away from your web application

1.  Storing Data:

- You can store data using the localStorage.setItem(key, value) method. Here's an example:

  ```js
  localStorage.setItem("username", "john_doe");
  localStorage.setItem("theme", "dark");
  ```

2.  Retrieving Data:

- You can retrieve data using the localStorage.getItem(key) method. For example:

      ```js
      const username = localStorage.getItem('username');
      const theme = localStorage.getItem('theme');

      ```

3.  Updating Data:

- To update a value, simply set a new value for an existing key. For example:

  ```js
  localStorage.setItem("theme", "light"); // Updating the 'theme' value
  ```

4.  Removing Data:

- You can remove a key-value pair using the localStorage.removeItem(key) method:

  ```js
  localStorage.removeItem("username"); // Removing the 'username' key and its value
  ```

5.  Clearing All Data:

- To clear all localStorage data, you can use the localStorage.clear() method:

  ```js
  localStorage.clear(); // Removes all stored data
  ```

6.  Data Limitations:

- Keep in mind that localStorage has limitations, including a storage size limit (usually around 5-10 MB), and it only stores data as strings.

# Session Storage:

- sessionStorage is commonly used for **_storing temporary session-specific data_**, such as user session information or data that is only relevant to the current page session.
- It's a good choice when you need data that is automatically cleared when the user leaves the page.

# Browser Cookie:

- Browser cookies are small pieces of data that websites store on a user's computer or device for various purposes, such as tracking user preferences, session management, and user analytics.

```js
// Setting a cookie
document.cookie = "username=johndoe; expires=Sun, 31 Dec 2023 12:00:00 UTC; path=/";

// Retrieving a cookie
const username = document.cookie;
```
