# Installation Instructions

Follow these steps to install and run the Instagram Content Calendar Schedule React App on your local machine.

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js and npm (Node Package Manager)
- A text editor (e.g., Visual Studio Code)

## Steps

1. Clone the repository to your local machine using the following command in your terminal:

```bash
git clone https://github.com/your-repo/instagram-content-calendar.git
```

2. Navigate into the project directory:

```bash
cd instagram-content-calendar
```

3. Install the project dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory of the project and add your Firebase configuration:

```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

5. Start the development server:

```bash
npm start
```

The app should now be running on [http://localhost:3000](http://localhost:3000).

## Building for Production

To create a production build, use:

```bash
npm run build
```

This will create a `build` directory in the root of the project with the compiled assets ready for deployment.

## Deploying to Google Cloud Server

Follow the instructions provided by Google Cloud Platform to deploy the build directory to your server.