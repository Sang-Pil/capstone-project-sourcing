
# ASU MS-AIB Capstone Project Sourcing Website Blueprint

## 1. Overview

This document outlines the plan, design, and features for the ASU MS-AIB Capstone Project Sourcing website. The goal is to create a central hub for students to find capstone projects and for industry sponsors to submit project proposals. The site will be professional, visually appealing, and easy to navigate.

## 2. Style, Design, and Features

### a. Visual Design

*   **Color Palette:**
    *   Primary: ASU Maroon (`#8C1D40`) and Gold (`#FFC627`).
    *   Background: A very light gray (`#F9F9F9`) with a subtle noise texture for a premium feel.
    *   Text: Dark gray (`#333333`) for readability.
    *   Accent: A modern blue (`#007BFF`) for links and call-to-action buttons to create a vibrant, energetic look.
*   **Typography:**
    *   Headings: 'Georgia', a serif font to convey a classic, academic feel.
    *   Body Text: 'Lato', a clean and modern sans-serif font for high readability.
    *   Font sizes will be varied to create a clear hierarchy (large hero titles, smaller section heads, etc.).
*   **Layout:**
    *   A clean, spacious, and responsive layout that adapts to all screen sizes (mobile-first approach).
    *   A clear header with the university logo and navigation.
    *   Distinct sections for different content areas.
    *   A footer with contact information and relevant links.
*   **Visual Effects & Interactivity:**
    *   **Shadows:** Cards and interactive elements will have soft, multi-layered drop shadows to create a sense of depth and a "lifted" feel.
    *   **Glow Effects:** Buttons and active elements will have a subtle glow effect on hover to guide the user.
    *   **Icons:** Use of modern, intuitive icons to support navigation and content understanding.

### b. Features

*   **Navigation:** An intuitive navigation bar with links to "For Students," "For Sponsors," and "Available Projects."
*   **Hero Section:** A prominent "hero" section with a compelling headline and a call-to-action.
*   **Project Listings:** A dynamic section to display available capstone projects. Each project will be displayed on a "card" using a Web Component for encapsulation and reusability.
*   **Sponsor Submission Form:** A simple and clear form for sponsors to submit project proposals.
*   **Student Application/Interest Form:** A form for students to express interest in a project.

## 3. Current Implementation Plan

1.  **HTML (`index.html`):**
    *   Set up the basic HTML structure with a header, main content area, and footer.
    *   Include sections for the hero message, project listings, and sponsor/student information.
    *   Link the `style.css` and `main.js` files.
    *   Add placeholder content for each section.
2.  **CSS (`style.css`):**
    *   Implement the full visual design as described above.
    *   Define CSS variables for the color palette.
    *   Add styles for typography, layout, cards, forms, and interactive effects.
    *   Include media queries to ensure the site is fully responsive.
3.  **JavaScript (`main.js`):**
    *   Create a custom Web Component (`<project-card>`) to display project information in a structured and reusable way.
    *   Use an array of JavaScript objects to store placeholder project data.
    *   Dynamically create and inject `<project-card>` elements into the DOM based on the data.

This plan establishes a solid foundation for a modern, feature-rich, and visually engaging web application.
