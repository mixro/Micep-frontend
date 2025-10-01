# MICEP TECH Frontend

![React](https://img.shields.io/badge/React-v19.x-blue)
![Material-UI](https://img.shields.io/badge/Material--UI-v7.x-purple)
![React Router](https://img.shields.io/badge/React_Router-v7.x-green)
![Vite](https://img.shields.io/badge/Vite-v7.x-yellow)

The **MICEP TECH Frontend** is a React-based web application designed to showcase the services and capabilities of MICEP TECH, a nearshore software development and staff augmentation company originating from Tanzania. Built with a modern, responsive design, this platform integrates with various technologies to provide an engaging user interface for clients and talent alike.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Component Structure](#component-structure)
- [Pages and Components](#pages-and-components)
- [Authentication](#authentication)
- [State Management](#state-management)
- [Testing](#testing)
- [Deployment](#deployment)
- [Error Handling](#error-handling)
- [Security](#security)
- [Future Improvements](#future-improvements)
- [Support](#support)

## Overview

This frontend serves as the digital storefront for MICEP TECH, enabling users to explore services, success stories, and career opportunities. Utilizing **React** for the UI, **Material-UI** for components, **React Router** for navigation, and **Vite** for development, the platform highlights key features such as:

- Dynamic service showcases with interactive elements.
- Animated success story displays.
- Role-based content access for clients and job seekers.
- Seamless integration with backend APIs for real-time updates.

## Architecture

### Components

- **React Application**: Constructs a single-page application with a modular design.
- **Material-UI (MUI)**: Offers styled components, icons, and layout tools.
- **React Router**: Handles client-side routing for various pages.
- **Custom Hooks**: Manages state and API interactions.
- **API Integration**: Utilizes `axios` for backend communication.
- **Animations**: Incorporates `framer-motion` for smooth transitions.
- **Styling**: Leverages CSS modules and MUI themes for consistency.

### Directory Structure

```plaintext
Micep-frontend/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── expertise/     # Expertise-related components
│   │   ├── footer/        # Footer component
│   │   ├── layout/        # Layout wrappers
│   │   ├── process/       # Process section components
│   │   ├── topbar/        # Navigation/topbar
│   │   └── wrapper/       # Wrapper components
│   ├── pages/             # Page components
│   │   ├── about/         # About page
│   │   ├── call/          # Call-to-action or contact page
│   │   ├── home/          # Home page
│   │   ├── industries/    # Industries page
│   │   ├── notFound/      # 404 page
│   │   ├── solutions/     # Solutions page
│   │   ├── success/       # Success stories page
│   │   ├── technologies/  # Technologies page
│   │   └── works/         # Works/portfolio page
│   ├── static/            # Static files (images, etc.)
│   ├── DummyData.js       # Dummy data for development
│   ├── App.css            # Main app styles
│   ├── App.jsx            # Main app component
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── .gitignore             # Git ignore file
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package-lock.json      # Dependency lock file
├── package.json           # Project metadata and dependencies
├── README.md              # This file
└── vite.config.js         # Vite configuration
```

## Technologies

- **React**: v19.1.1 - Core library for building the UI.
- **Material-UI (MUI)**: v7.3.2 - UI components and icons.
- **React Router DOM**: v7.9.1 - Routing solution.
- **Axios**: v1.12.2 - HTTP client.
- **Framer Motion**: v12.23.13 - Animation library.
- **Vite**: v7.1.2 - Build tool and development server.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/mixro/micep-frontend.git
    cd micep-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set environment variables in `.env`:
    ```bash
    VITE_API_URL=http://localhost:3000
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

    - Access at http://localhost:5173.

## Component Structure

The frontend follows a component-based architecture:

- **Reusable Components**: Header, Footer, ServiceCard for displays.
- **Custom Hooks**: Manage authentication and API calls.
- **Pages**: Home for overview, About for company details.
- **State Management**: Local state with potential Redux integration.
- **Styles**: CSS files and MUI theme for design consistency.

## Pages and Components

- **Home.jsx**: Showcases services, success stories, and calls-to-action.
- **About.jsx**: Details company mission and team.
- **Contact.jsx**: Provides contact forms and support.
- **Careers.jsx**: Lists job opportunities.
- **NotFound.jsx**: Custom 404 page.

## Authentication

- **Custom Hooks**: Handles user sessions and token management.
- **JWT Integration**: Tokens are used for secure API requests.
- **Route Protection**: Redirects unauthenticated users to login (if implemented).

## State Management

- **Local State**: Manages UI state within components.
- **Potential Redux**: Can be integrated for global state (not currently used).
- **API Data**: Fetches and stores data from backend services.

## Testing

### Setup

Install testing dependencies (if not included):
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

Run tests:
```bash
npm test
```

- Tests focus on component rendering and state changes.

## Deployment

### Local Build
```bash
npm run build
```

Outputs to **dist/**.

### Preview
```bash
npm run preview
```

### Deployment

- Deploy `dist/` to platforms like Netlify or Vercel.
- Update `VITE_API_URL` to the production backend.

## Error Handling

- **API Errors**: Displayed via MUI Alert components.
- **Authentication Errors**: Redirects on invalid sessions.
- **Global Errors**: Managed with React Error Boundaries.

## Security

- **JWT**: Secures API calls with token authentication.
- **Input Validation**: Frontend sanitizes inputs.
- **CORS**: Configured on backend for frontend origin.
- **Storage**: Uses secure local storage for tokens.

## Future Improvements

- Add real-time updates with WebSockets.
- Implement lazy loading for performance.
- Enhance accessibility with ARIA support.
- Expand testing coverage.

## Support

For issues, review browser console logs or contact the team. Include screenshots, error details, and reproduction steps.