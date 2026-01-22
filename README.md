# Event Management App

A full-stack event management application built with React for the frontend and Node.js/Express for the backend. This app allows users to view, create, edit, and delete events, as well as subscribe to a newsletter.

## Features

- **View Events**: Browse a list of all available events with details like title, description, date, and image.
- **Event Details**: View detailed information about a specific event.
- **Create Events**: Add new events with validation for title, description, date, and image URL.
- **Edit Events**: Update existing event information.
- **Delete Events**: Remove events from the system.
- **Newsletter Subscription**: Subscribe to a newsletter for updates.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

### Frontend

- React 19
- React Router DOM for routing
- CSS Modules for styling
- React Testing Library for testing

### Backend

- Node.js
- Express.js
- Body-parser for parsing request bodies
- UUID for generating unique IDs
- File-based data storage (events.json)

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   npm start
   ```
   The backend will run on `http://localhost:8080`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Navigate through the app using the main navigation.
3. View events on the Events page.
4. Click on an event to see details.
5. Use the "New Event" page to add events (requires valid input).
6. Edit or delete events as needed.
7. Subscribe to the newsletter on the Newsletter page.

## API Endpoints

The backend provides the following REST API endpoints:

- `GET /events` - Retrieve all events
- `GET /events/:id` - Retrieve a specific event by ID
- `POST /events` - Create a new event
- `PATCH /events/:id` - Update an existing event
- `DELETE /events/:id` - Delete an event

### Request/Response Examples

#### Get All Events

```
GET http://localhost:8080/events
Response: { "events": [...] }
```

#### Create Event

```
POST http://localhost:8080/events
Content-Type: application/json

{
  "title": "Sample Event",
  "description": "This is a sample event",
  "date": "2023-12-31",
  "image": "https://example.com/image.jpg"
}
```

## Project Structure

```
event-management-app/
├── backend/
│   ├── app.js
│   ├── package.json
│   ├── events.json
│   ├── data/
│   │   └── event.js
│   ├── routes/
│   │   └── events.js
│   └── util/
│       ├── errors.js
│       └── validation.js
├── frontend/
│   ├── package.json
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       ├── index.js
│       └── index.css
├── .gitignore
├── how-to-use.txt
└── README.md
```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature.
3. Make your changes and test thoroughly.
4. Submit a pull request.

## License

This project is licensed under the ISC License.
