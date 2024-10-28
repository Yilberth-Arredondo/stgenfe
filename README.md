# E-commerce Frontend Application

This project is a frontend-only e-commerce application built with **React 18**, showcasing advanced component architecture, complex hook usage, and state management tailored for e-commerce.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Code Standards](#code-standards)
- [Future Enhancements](#future-enhancements)

## Overview
This project is developed with **React 18** and styled using **TailwindCSS** for a utility-first CSS approach. Key libraries like **Swiper** (carousel management) and **Heroicons** (icon handling) enhance the visual interactivity of the UI. The application is organized following **SCREAM architecture** and **SOLID principles**, promoting scalability and maintainability.

## Features
- **Responsive UI** with TailwindCSS for utility-based styling
- **Custom Hooks** for managing shopping cart and other complex interactions
- **Swiper Integration** for seamless carousel experience in product and news sections
- **Heroicons** for consistent, clean iconography across the application
- **Shopping Cart** management using `useContext` and custom hooks for state encapsulation
- **Form Validation** in the payment modal
- **Mock Data** setup for news articles to demonstrate data display without backend integration

## Project Structure
The project follows a SCREAM-based component architecture to organize components by utility and accessibility. The SOLID principles ensure a structured, modular codebase that supports scalability and ease of maintenance.


## Technologies Used
- **React 18**: Main framework for building the UI
- **TailwindCSS**: Utility-first CSS framework for styling
- **ESLint** & **Prettier**: Linting and formatting for maintaining code quality and readability
- **Swiper**: Carousel library for dynamic and interactive carousels in product and news sections
- **Heroicons**: Icon library for consistent icon usage with clean, minimal designs
- **SCREAM Architecture**: Component organization based on utility and modularity
- **SOLID Principles**: Structuring components with maintainability and scalability in mind

## Installation

1. Clone the repository (ssh):
    ```bash
    git clone git@github.com:Yilberth-Arredondo/stgenfe.git
    cd stgenfe
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the application:
    ```bash
    npm run dev
    ```

## Usage

This application provides a basic e-commerce frontend experience with an emphasis on:
- Displaying product listings in a structured layout
- Adding items to the shopping cart, with state managed through `useContext`
- Interactive Swiper carousels in sections like the news and product displays
- Custom modal interactions, such as the checkout modal with simple data validation
- A mock news section created using mock data, stored within the `/data` directory as sample content

## Code Standards

The project adheres to a strict set of standards to ensure code quality and consistency:
- **ESLint and Prettier** are used for linting and formatting, enforcing code standards across the project.
- **SOLID Principles**: Components are built to ensure single responsibility, open-closed design, and dependency inversion, aiding in scalability.
- **SCREAM-based Structure**: Emphasis on component organization by utility, accessibility, and maintenance to streamline component discovery and updates.

## Hooks Usage

The application leverages **React hooks** to manage component logic:
- **useContext**: Manages the global cart state for the entire application, providing easy access to cart functionalities across components.
- **Custom Hooks**: Includes a custom `useCart` hook to encapsulate cart-specific logic, demonstrating advanced usage and modularity in React.

## Future Enhancements
- **Backend Integration**: Extend the app with backend capabilities for real-time data handling and user interactions.
- **Additional Validation**: Enhance form validations and add more secure data handling.
- **Accessibility Improvements**: Ensure all components are fully accessible following ARIA standards.
- **Testing**: Incorporate unit tests and integration tests to validate component functionality.
- **Responsive**: The views are not fully developed to work on every screen size, although some adjustments have been made for certain mobile device

