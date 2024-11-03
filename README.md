# Bank Virtual Assistant Chatbot Frontend

This project is a React-based frontend for a virtual banking assistant chatbot. The chatbot helps users access banking services and information interactively. It includes a welcome page, a detailed page with app information, and a chat page for real-time communication with the chatbot.

<div align="center">
  <a href="https://youtu.be/K6prUbMt-_Q" target="_blank">
    <img src="https://img.youtube.com/vi/K6prUbMt-_Q/0.jpg" alt="Watch the video" width="560" height="315">
  </a>
  <p><em>Click the image above to watch the video</em></p>
</div>
## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Features
- **Welcome Page**: An introductory screen welcoming users and navigating to further sections.
- **Detail Page**: Provides a detailed description of the app's features and benefits.
- **Chat Page**: A chat interface for user interaction with the chatbot, which supports live message handling and bot responses.


## Usage
- **Navigation**: Use the navigation bar to switch between the welcome, detail, and chat pages.
- **Chat Functionality**:
  - Enter a message in the input field and submit to start a conversation.
  - Messages are processed and displayed with real-time responses from the chatbot.
  - The `chat` component handles user input, sends it to the backend API, and renders bot responses.

## Code Explanation

### `Navigationbar.js`
This component provides a navigation bar with links to different sections of the app using `react-scroll` for smooth scrolling.

<div align="center">
  <img src="https://github.com/user-attachments/assets/f3553aed-a111-4114-a6a1-30da48614b66" alt="Home Page">
  <p><em>Home Page</em></p>
</div>

### `Detail.js`
Contains detailed information about the banking assistant, including a `Link` button to navigate to the chat section.

<div align="center">
  <img src="https://github.com/user-attachments/assets/7d276f16-6369-45f1-9f12-63a116a198cc" alt="Detail Page">
  <p><em>Detail Page</em></p>
</div>

### `Chat.js`
Handles user input, renders messages, and calls the backend API for bot responses.

<div align="center">
  <img src="https://github.com/user-attachments/assets/5b377912-8ee9-4c1d-b3e6-21fcd7f3a136" alt="Chat Page">
  <p><em>Chat Page</em></p>
</div>

**Key Functions**:
- `handleSubmit(evt)`: Submits user input.
- `rasaAPI(name, msg)`: Sends the input to the Rasa backend and handles the bot's response.

**Hooks Used**:
- `useState` to manage chat state and input.
- `useEffect` for automatic scrolling of the chat area on new messages.


## Technologies Used
- **React.js**: Frontend library for building the user interface.
- **CSS**: Styling the components.
- **react-scroll**: Smooth scrolling for navigation links.
- **Rasa**: Backend chatbot API for handling user interactions (integration example shown in code).

## Installation
Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/chatbot-frontend.git
   cd chatbot-frontend

2. **Install dependencies: Make sure you have Node.js installed, then run:**
   ```bash
   npm install

3. **Start the development server:**
   ```bash
   npm start

## Backend Setup
The backend is built using [Rasa Open Source](https://rasa.com/), which handles natural language processing and response generation.
   ```bash
   git clone https://github.com/yourusername/chatbot-frontend.git
   cd chatbot-frontend

