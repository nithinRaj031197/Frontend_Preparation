- [Resetting and normalizing in CSS](#resetting-and-normalizing-in-css)
- [CSS Specificity](#css-specificity)
- [CSS Preprocessors](#css-preprocessors)
- [CSS Architecture BEM](#css-architecture-bem)
- [Image Sprites](#image-sprites)
- [Browser Caching](#browser-caching)
- [Pseudo Classes](#pseudo-classes)
- [Pseudo Elements](#pseudo-elements)
- [CSS Display Properties](#css-display-properties)

# Resetting and normalizing in CSS:

- Used to establish a consistent and predictable **_baseline styling_** for web pages.

- These techniques help address differences in default browser styles and ensure that your CSS styles are applied consistently across different browsers and platforms
- Used to establish a consistent and predictable **_baseline styling_** for web pages.

- These techniques help address differences in default browser styles and ensure that your CSS styles are applied consistently across different browsers and platforms](#introduction)

# Resetting and normalizing in CSS:

- Used to establish a consistent and predictable **_baseline styling_** for web pages.

- These techniques help address differences in default browser styles and ensure that your CSS styles are applied consistently across different browsers and platforms

1. ### **CSS Reset:**

- It is a set of CSS rules to remove or reset the default styling provided by web browsers to HTML elements.

- Here's an example of a simple CSS reset:
  ```css
  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
  ```
- Keep in mind that CSS resets can be quite aggressive, so you may need to reapply default styles for certain elements that you want to retain some browser-specific styling for.

2. ### **CSS Normalize:**

- It is a set of CSS rules that aims to make default styles consistent and predictable across diffferent browsers.

- It doesn't remove all default styles like a reset does. Instead, it brings a level of consistency by establishing a common baseline for elements

- A popular CSS normalize library is "normalize.css" by Nicolas Gallagher and Jonathan Neal. It addresses common inconsistencies in browser styling, making elements like headings, lists, and form elements more consistent while preserving some default styles for readability and usability.

- Here's an example of how you might include the normalize.css library in your project:

  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
  ```

# CSS Specificity :

- Its is a set of rules where CSS styles are applied to HTML elements when there is a conflicting or competing styles are present.

- Specificity is essentially for browser to understand and decide which rue=le to be applied if there are multiple rules.

- Specificity is calculated based on the selectors in your CSS rules.

- ### The concept of specificity is often represented using a four-part notation, as follows:

1. ## **Inline Styles** :

   - Inline styles are the most specific. They are applied directly to an HTML element using the style attribute, and they override any other CSS rules. For example:
     ```css
     <p style="color: red;">This is a red paragraph.</p>
     ```
   - Inline styles have the highest specificity.

2. ## **ID Selectors** :

   - Selectors that target an HTML element by its `id` attribute have a high specificity. For example:

   ```css
   #myElement {
     color: blue;
   }
   ```

   - In this case, the #myElement selector has a higher specificity than most other selectors.

3. ## **Class Selectors, Attribute Selectors, and Pseudo-Classes** :

   - These selectors have a moderate level of specificity. For example:

   ```css
   .myClass {
     font-size: 16px;
   }

   [type="submit"] {
     background-color: green;
   }

   a:hover {
     text-decoration: underline;
   }
   ```

   - Class selectors (.myClass), attribute selectors ([type="submit"]), and pseudo-classes (:hover) fall into this category.

4. ## **Element (Type) Selectors and Pseudo-Elements** :

   - These selectors have the lowest specificity and apply to all elements of a particular type. For example:

   ```css
   p {
     font-family: Arial, sans-serif;
   }

   ::before {
     content: "Before content";
   }
   ```

   - Element selectors (p) and pseudo-elements (::before) have the lowest specificity.

### Order of Specificity:

1. Inline styles
2. ID selectors
3. Class selectors, Attribute selectors, and Pseudo classes
4. Pseudo elements and Element selector

# CSS Preprocessors:

- They are scripting langages **_that provide extra capabilities to regular CSS_**.
- Helps developer to write **_more efficient and organized code_** by providing features which are not available natively in CSS.
- Some features are Variables, nesting, mixins etc...
- Preprocessors help make CSS code **_more maintainable, reusable_**, and easier to work with.
- Some popular CSS preprocessors include **_Sass, Less, and Stylus_**.

1.  ### **Variables**:

    - CSS preprocessors **_allow you to declare and use variables_**.
    - This can store values such as colors, font sizes, and more. This makes it easy to maintain a consistent look and feel throughout your stylesheets. For example, in Sass:

      ```scss
      $primary-color: #3498db;

      .button {
        background-color: $primary-color;
      }
      ```

2.  ### **Nesting**:

    - Preprocessors **_support nesting of selectors_** within each other, making the CSS code structure more visually intuitive. This helps in organizing related styles. For example, in Sass:

      ```scss
      .nav {
        ul {
          list-style: none;

          li {
            display: inline-block;
          }
        }
      }
      ```

3.  ### **Mixins**:

    - Mixins are **_reusable blocks of CSS_** that can be included in multiple selectors. This promotes code reusability and reduces redundancy. For example, in Sass:

      ```scss
      @mixin border-radius($radius) {
        border-radius: $radius;
      }

      .button {
        @include border-radius(5px);
      }
      ```

4.  ### **Functions**:

    - Preprocessors provide **_built-in functions and allow you to create custom functions_**. These functions can be used to calculate values, manipulate colors, and perform other tasks. For example, in Sass:

      ```scss
      @function double-margin($margin) {
        @return $margin * 2;
      }

      .box {
        margin: double-margin(10px);
      }
      ```

5.  ### **Operators**:

    - Preprocessors **_support mathematical operators, which can be used for calculations_** within your styles. For example, in Sass:

      ```scss
      .container {
        width: 100% / 3;
      }
      ```

6.  ### **Conditional Statements**:

    - Conditional statements in Sass allow you **_to create dynamic styles based on conditions_**. For example, you can change the style of an element based on a specific condition. Here's an example of using @if, @else if, and @else in Sass:

      ```scss
      $theme: dark;

      .button {
        @if $theme == light {
          background-color: #fff;
          color: #333;
        } @else if $theme == dark {
          background-color: #333;
          color: #fff;
        } @else {
          background-color: #777;
          color: #000;
        }
      }
      ```

7.  ### **Extending and Inheritance**:

    - Sass allows you to extend styles from one selector to another, which is similar to inheritance. This reduces redundancy in your CSS code. Here's an example of extending styles in Sass:

      ```scss
      %common-styles {
        font-weight: bold;
        text-decoration: underline;
      }

      .button {
        @extend %common-styles;
        background-color: #3498db;
        color: #fff;
      }

      .link {
        @extend %common-styles;
        color: #3498db;
      }
      ```

8.  ### **Partials and Imports**:

    - Preprocessors allow you **_to split your CSS into smaller, modular files called "partials"_** and then **_import these files into a main stylesheet_**. This makes your code more organized and easier to maintain.

    - Suppose you have a project structure like this:

      ```bash
          project/
          │
          ├── styles/
          │   ├── main.scss
          │   ├── _variables.scss
          │   ├── _buttons.scss
          │   └── _typography.scss
          │
          └── index.html
      ```

    - In this structure, we have a styles directory that contains different partial Sass files, each starting with an underscore (e.g., \_variables.scss, \_buttons.scss, and \_typography.scss).
    - The **_underscores_** indicate that these files are partials and are not meant to be compiled into standalone CSS files. Instead, they will be imported into the main stylesheet.

    - **\_variables.scss (Partial for variables):**

      ```scss
      // _variables.scss
      $primary-color: #3498db;
      $secondary-color: #e74c3c;
      ```

    - **\_buttons.scss (Partial for button styles):**

      ```scss
      // _buttons.scss
      .button {
        background-color: $primary-color;
        color: #fff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
      }
      ```

    - **\_typography.scss (Partial for typography styles):**

      ```scss
      // _typography.scss
      body {
        font-family: Arial, sans-serif;
        font-size: 16px;
      }

      h1 {
        font-size: 24px;
      }
      ```

    - **main.scss (Main stylesheet that imports the partials):**

      ```scss
      // main.scss
      @import "variables";
      @import "buttons";
      @import "typography";

      // Additional styles for your project
      ```

    - **Note**:

      - In the main.scss file, we use the @import rule to bring in the partials. When you compile main.scss using your Sass compiler, it will merge the contents of the partials into a single CSS file, resulting in a well-organized and maintainable stylesheet.

      - This approach allows you to segment your CSS code into manageable pieces, making it easier to find and update specific styles. It's especially useful for larger projects where maintaining a monolithic CSS file can become challenging.

9.  ### **Compilation**:

    - To use a CSS preprocessor, you need a compiler or transpiler that converts your preprocessed code into regular CSS.
    - Popular tools for Sass compilation include node-sass and sass-loader for JavaScript-based projects.
    - Less has its compiler, and Stylus has its transpiler as well.

    - To compile Sass using node-sass, you can run a command like this:

      ```lua
      node-sass input.scss output.css
      ```

    - This will take the Sass code in input.scss and generate regular CSS in output.css. Similarly, other preprocessors have their own compilation methods and tools.

# CSS Architecture BEM

- BEM (Block, Element, Modifier) is a **CSS naming convention** that promotes **_modularity and maintainability_** in web development:

1.  ### **Block(B):**

    - A "Block" in BEM is a standalone, reusable component or element on a web page. Blocks can be thought of as the top-level containers for your content.

      ```css
      .button {
        /* Styles for the button block */
      }
      ```

2.  ### **Element (E):**

    - An "Element" in BEM is a part of a block and cannot exist independently. Elements are always children of a block.
    - Element names are added to the block name using two underscores \*\* to separate them.

      ```css
      .card {
        /* Styles for the card block */

        &__title {
          /* Styles for the card title element */
        }
      }
      ```

3.  ### **Modifier (M):**

    - A "Modifier" in BEM is used to change the style or behavior of either a block or an element. Modifiers are optional and can be applied to blocks or elements.
    - Modifier names are added to the block or element name using two hyphens -- to separate them.
    - For example, if you want to create a modifier for a button block that changes its color to red, you might define it as .button--red:

      ```css
      .button {
        /* Styles for the button block */
      }

      .button--red {
        /* Modifier styles for a red button */
      }
      ```

- Example of BEM:

  ```html
  <div class="button">
    <span class="button__text">Click Me</span>
  </div>
  ```

  ```css
  .button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .button--red {
    background-color: #e74c3c;
  }

  .button__text {
    font-size: 16px;
  }
  ```

- ### **Benefits**:

1. Modularity and reusability.
2. Readable and self-explanatory class names.
3. Scalable for small and large projects.
4. Low specificity to reduce CSS conflicts.
5. Encourages collaboration and works well with preprocessor languages like Sass.

# Image Sprites:

- CSS sprites are a technique **_used to optimize web page loading by reducing the number of HTTP requests_** made to a server.
- It involves **_combining multiple small images into a single larger image and then using CSS to display specific parts of that image_** for different elements on a web page

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        #home {
          width: 46px;
          height: 44px;
          background: url(https://www.w3schools.com/css/img_navsprites.gif) 0 0;
        }

        #next {
          width: 43px;
          height: 44px;
          background: url(https://www.w3schools.com/css/img_navsprites.gif) -91px 0;
        }
        #prev {
          width: 43px;
          height: 43px;
          background: url(https://www.w3schools.com/css/img_navsprites.gif) -47px 0;
        }
      </style>
    </head>
    <body>
      <img id="prev" src="img_trans.gif" width="1" height="1" />
      <img id="home" src="img_trans.gif" width="1" height="1" />
      <img id="next" src="img_trans.gif" width="1" height="1" />
    </body>
  </html>
  ```

# Browser Caching:

- Browser caching is a **_technique used to store web page resources (e.g., HTML, CSS, JavaScript, images) locally on a user's device_**, so that when they revisit the same webpage, the browser can load these resources from the local cache instead of re-downloading them from the web server. This improves page loading speed and reduces server load.

- ### **Note:**

  - **HTTP Caching Headers**:

    When a user's browser first requests a resource from a web server, the server typically responds with HTTP headers that instruct the browser on how to handle caching for that resource.

    The two most commonly used caching headers are Cache-Control and Expires (or max-age).

    The Cache-Control header specifies caching rules for a resource, such as the maximum time it can be cached and whether it can be cached at all. Common directives include:

    no-cache: The browser must revalidate the resource with the server before using it.
    public: The resource can be cached by both the browser and any intermediary caches (e.g., CDNs).
    private: The resource can be cached by the browser but not by intermediary caches.
    max-age: Specifies the maximum time a resource can be cached in seconds.
    The Expires (or max-age) header provides an absolute date and time at which the resource is considered stale and should be revalidated.

  - **Cache Purging**:

    Caches may be automatically cleared or purged by the browser if they become too large or if the user manually clears their cache.

# Pseudo Classes:

- Pseudo-classes in CSS are used to define the **_special state of an HTML element that cannot be targeted using regular selectors_**

- They allow you to style elements based on user interaction, document structure, or other dynamic conditions.
- Pseudo-classes are denoted by a colon (:) followed by their name

1. ## **:hover**

- The :hover pseudo-class targets an element when a user hovers their mouse over it. It is commonly used to change the appearance of links, buttons, or other interactive elements when they are in the hover state.

- Example:

  ```css
  a:hover {
    color: red;
  }
  ```

2. ## **:active**

- The :active pseudo-class targets an element when it is being activated or clicked by the user. It is often used to create visual feedback for buttons when they are clicked.

- Example:

  ```css
  button:active {
    background-color: green;
  }
  ```

3. ## **:focus**

- The :focus pseudo-class targets an element when it gains focus. This is commonly used for form input fields, making it clear which field the user is currently interacting with.

- Example:

  ```css
  input:focus {
    border: 2px solid blue;
  }
  ```

4. ## **:first-child**

- The :first-child pseudo-class targets the first child element of its parent. It is used to apply styles to the first child element within a container.

- Example:

  ```css
  li:first-child {
    font-weight: bold;
  }
  ```

5. ## **:last-child**

- The :last-child pseudo-class targets the last child element of its parent. It is used to style the last child element within a container.

- Example:
  ```css
  p:last-child {
    margin-bottom: 0;
  }
  ```

6. ## **:nth-child(n)**

- The :nth-child(n) pseudo-class allows you to select elements based on their position within their parent container. You can specify the exact position or use formulas.

- Example:

  ```css
  li:nth-child(odd) {
    background-color: #f2f2f2;
  }
  ```

7. ## **:not(selector)**

- The :not(selector) pseudo-class excludes elements that match the specified selector. It is useful for selecting elements that don't meet certain criteria.

- Example:
  ```css
  input:not([type="text"]) {
    display: none;
  }
  ```

8. ## **:nth-of-type(n)**

- Similar to :nth-child, the :nth-of-type(n) pseudo-class selects elements based on their position within their parent, but only considering elements of the same type.

- Example:

  ```css
  div:nth-of-type(2n) {
    background-color: #ececec;
  }
  ```

8. ## **:enabled and :disabled**

- These pseudo-classes target form elements (like input fields, buttons, etc.) that are either enabled or disabled. They are used to style elements based on their user-interaction state.

- Example:

  ```css
  input:enabled {
    background-color: #fff;
  }

  input:disabled {
    background-color: #ccc;
  }
  ```

# Pseudo Elements

- Pseudo-elements are **_a powerful way to create additional content, style specific parts of elements, and enhance the visual presentation of a web page without altering the actual HTML structure_**.

- They are denoted by a double colon (::) followed by the name of the pseudo-element.

1. ## ::before and ::after

- ::before and ::after pseudo-elements are used to insert content before and after the content of an element, respectively.
- They are often used for decorative elements, icons, or to create custom content.

  ```css
  p::before {
    content: "Start: ";
    font-weight: bold;
  }

  p::after {
    content: " :End";
    font-weight: bold;
  }
  ```

2. ## ::first-line and ::first-letter

- ::first-line selects and styles the first line of text within an element, such as a paragraph.
- ::first-letter selects and styles the first letter or character of a block-level element.

  ```css
  p::first-line {
    font-weight: bold;
  }

  p::first-letter {
    font-size: 150%;
  }
  ```

3. ## ::selection

- The ::selection pseudo-element is used to style the selected text when a user highlights content on the page.
- You can apply styles to the background color, text color, and other properties of the selected text.

  ```css
  ::selection {
    background-color: #ffcc00;
    color: #333;
  }
  ```

4. ## ::placeholder

- The ::placeholder pseudo-element is used to style the placeholder text in input fields and text areas.
- It's commonly used to change the color or font properties of the placeholder text.

  ```css
  input::placeholder {
    color: #999;
    font-style: italic;
  }
  ```

5. ## **::marker**

- The ::marker pseudo-element is used to style the list marker (e.g., bullet or number) of list items.

- It allows you to apply styles to list markers without affecting the content of list items.

  ```css
  li::marker {
    color: red;
  }
  ```

# CSS Display Properties

- In CSS, the display property is used to control how an HTML element is displayed in the browser.
- It specifies the rendering behavior of an element, affecting its layout and visibility.

  1. **display: block;**: Elements start on a new line, expand to full width.

  2. **display: inline;**: Elements don't start a new line, take minimal width.

  3. **display: inline-block;**: Combines block and inline behavior.

  4. **display: none;**: Element is hidden, doesn't occupy space.

  5. **display: flex;**: Enables flexible box layout for alignment.

  6. **display: grid;**: Creates a grid for precise layout control.

  7. **display: table;**, table-row;, table-cell;: Mimic table behavior.

  8. **display: list-item;**: Styles elements like list items.

  9. **display: inline-flex;**, inline-grid;: Inline versions of flex/grid.

  10. **display: initial;**: Resets display property to default.

  11. **display: inherit;**: Inherits display property from parent.
