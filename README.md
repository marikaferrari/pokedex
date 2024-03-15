# Pokedex App

## Overview

This documentation outlines the development process and architecture of the Pokedex app, designed to display a list of Pokemon, but also individual Pokemon and their abilities, in an intuitive interface.

## Technology Stack

- **Next.js**
- **TailwindCSS**
- **Radix-UI**
- **Shadcn/ui**: Employed for the Progress component, enhancing feedback on data loading.
- **Vercel**

## Features

- **List View with Lazy Loading**: Enhances performance and user experience by loading Pokemon data as needed.
- **Detailed Pokemon View**: Click on a Pokemon to view its abilities, stats, and more.
- **Search Functionality**: Easily find Pokemon with a dynamic search feature.
- **Responsive Design**: TailwindCSS ensures the app looks great on all devices.
- **Pagination**: For enhanced user experience.

## Project Structure

- **Assets**: Static files such as the application logo.
- **Components**: Reusable UI components like `navbar`, `pagination`, `loading`, `pokemon-card`, `pokemon-grid`, `pokemon-image`, and `theme-provider`.
- **Dynamic Pokemon Stats Page**: Implemented a dynamic Next.js page (`[page.tsx]`) to provide detailed statistics and abilities of each Pokemon, enhancing user engagement.
- **Lib**: Utility library, including the API call to PokeAPI.
- **Pages**: Custom error handling (`error.tsx` and `not-found.tsx`) as per Next.js documentation.

## Deployment

This app is deployed on Vercel for optimal performance and scalability. Check it out live here: [Pokedex](https://pokedex-rho-gold.vercel.app/).

## Future Enhancements

- **UI Interactivity**: Implementing more interactive elements for an engaging user experience.
- **Performance Optimization**: Further optimization of lazy loading and image rendering.
- **Light Mode Theme**: The groundwork has been laid with `ThemeProvider` for implementing a light mode as a stretch goal, enhancing accessibility and user preference options.
- **Pokemon Card Background**: As a fun stretch goal, I'm considering transforming the cards' background into a dynamic Pokemon card theme. This would add a playful element to the user interface.
- **Further Refactoring**: It never hurts.
