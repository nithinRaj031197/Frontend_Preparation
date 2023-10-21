# SEMANTIC HTML:

- Semantic HTML refres to **_using HTML elements to create structured and meaningful representation of the content on webpage_**.

- Pros:

1. Improve accessiblity.
2. Improve Search Engine Optimization(SEO).
3. Helps both Human and machine to understand the purpose and meaning of different parts of a webpage.

## Here are some examples of semantic HTML elements:

1. **_`<header>`_** :

   - This element represents the **_introductory content_** and it's often used for a site's logo, site title, and main navigation menu.

2. **_`<nav>`_** :

   - This element is used to define a **_section of navigation links_**. This typically includes menus, navigation bars, or links that guide users to different parts of a website.

3. **_`<main>`_** :

   - This element contains the **_primary content of a web page_**. Each page should have only one `<main>` element, and it should exclude content like headers, footers, and sidebars.

4. **_`<article`_**> :

   - This element is used to represent a **_self-contained composition in a document_**, such as a blog post, news article, or forum post. It should make sense on its own, even if it's removed from the rest of the page.

5. **_`<section>`_** :

   - This element defines a thematic grouping of content. It can be used to **_organize related content within a page_**, and it should have a heading to describe its purpose.

6. **_`<footer>`_**:

   - This element represents the **_footer of a web page or a section_**. It typically includes information such as copyright notices, contact details, and links to related documents.

7. **_`<figure>`_** and **_`<figcaption>`_**:

   - These elements are used to **_embed multimedia content_** like images, videos, and illustrations. The **_`<figcaption>`_** element is used to provide a caption or description for the **_`<figure>`_** content.

8. **_`<aside>`_** :
   - This element is used for **_content that is tangentially related to the surrounding content_**. It's often used for sidebars, pull quotes, or advertising.

## Example to use all these semantic elements:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Semantic HTML Example</title>
    </head>
    <body>
        <header>
            <h1>Welcome to Semantic HTML</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <section>
                <h2>About Us</h2>
                <p>We are a company dedicated to promoting the use of semantic HTML for better web development.</p>
            </section>

            <section>
                <h2>Our Services</h2>
                <article>
                    <h3>Web Design</h3>
                    <p>We create beautiful and user-friendly websites.</p>
                </article>
                <article>
                    <h3>SEO Optimization</h3>
                    <p>We help websites rank higher in search engine results.</p>
                </article>
            </section>
        </main>

        <aside>
            <h2>Latest News</h2>
            <ul>
                <li><a href="#">New Study Reveals Benefits of Semantic HTML</a></li>
                <li><a href="#">Web Accessibility: Why It Matters</a></li>
            </ul>
        </aside>

        <footer>
            <p>&copy; 2023 Semantic HTML Example</p>
            <address>
                Contact us at <a href="mailto:info@example.com">info@example.com</a>
            </address>
        </footer>
    </body>
    </html>
    ```
