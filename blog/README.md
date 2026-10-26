# Static blog pages

Each article is a standalone HTML file in this folder. No build step or package installation is needed.

To add a post:

1. Create a new HTML file by copying an existing article page.
2. Update the page title, description, heading, date, author, category tags, and article content.
3. Add a post card to `index.html`. Set its `data-date` to the post's ISO date and `data-categories` to its lowercase categories separated by commas. Include the title, summary, visible date, estimated reading time, and links to the new article page.
4. Insert the card in newest-first order. The category chips filter the cards using their `data-categories` values.

Keep the shared `<site-header>` and `<site-footer>` elements and their existing script and stylesheet references on every article page.
