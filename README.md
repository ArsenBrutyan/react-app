# React Web Application

This is a Single Page Application (SPA) built using React that showcases various React skills, including hooks, lifecycles, state management, Webpack optimization, and web performance.

## Features

-   **Home Page**: Fetches dynamic content from an external API and allows users to add, delete, and list items (e.g., tasks, notes).

-   **User List Page**: Displays a paginated list of users with sorting and searching options.

-   **User Details Page**: Displays detailed information of a selected user.

-   **Theme Switcher**: Implements a light/dark mode theme switcher.

-   **Performance Optimizations**: Utilizes code-splitting, useMemo, and other techniques for improved performance.

## Technologies Used

-   React
-   TypeScript
-   React Router
-   Framer Motion for animations
-   State management tool (Redux)
-   Webpack for bundling
-   Styled-components

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/ArsenBrutyan/react-app.git

    ```

2. Do install

    npm install

3. Run project

    npm run start

### Technical part

Used Lighthouse, bundle-analyzer... for checking performence

## Ensuring Application Performance

Performance optimization is a crucial aspect of our React web application. To deliver a fast and efficient user experience, I've employed various tools and techniques.

### Lighthouse Audits

![Lighthouse Logo](https://developers.google.com/web/images/contributors/lighthouse-logo.png)

[Lighthouse](https://developers.google.com/web/tools/lighthouse) is our go-to tool for auditing and optimizing web application performance. It provides insights into loading speed, accessibility, best practices, and SEO. We regularly run Lighthouse audits to:

-   **Loading Performance**: Measure and enhance the application's loading speed.
-   **Accessibility**: Ensure our app is accessible to all users.
-   **Best Practices**: Validate that we adhere to web development best practices.
-   **SEO**: Optimize our app's search engine visibility.

### Bundle Analyzer

![Webpack Bundle Analyzer Logo](https://raw.githubusercontent.com/webpack-contrib/webpack-bundle-analyzer/master/docs/logo.png)

We utilize the [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) to visualize our application's JavaScript bundle sizes. This tool helps us:

-   **Bundle Size Analysis**: Examine the sizes of generated bundles.
-   **Code Splitting**: Identify opportunities for code splitting to reduce the initial bundle size.
-   **Asset Delivery Optimization**: Optimize the delivery of assets to the client.

### Code Splitting

Code splitting is a fundamental technique that allows us to split our application into smaller, more manageable chunks. This significantly improves the initial load performance and user experience.
