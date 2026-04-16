# KeenKeeper

KeenKeeper is a friendship management web app that helps users stay in touch with the people who matter most. It lets users track friends, view relationship details, log interactions like calls or texts, and review those activities through a timeline and analytics dashboard.

## Project Description

The goal of KeenKeeper is to make relationship maintenance more intentional. Users can browse their friends, open a detailed profile page, check important relationship stats, update contact goals, and quickly log interactions. Those interactions are then reflected in the Timeline page and the Friendship Analytics page.

## Technologies Used

- Next.js 16
- React 19
- Tailwind CSS 4
- DaisyUI
- Lucide React
- React Toastify
- Recharts

## Features

- View a list of friends loaded from `public/friends.json`
- Open a dedicated Friend Details page for each friend
- See relationship stats such as:
  - Days since contact
  - Goal in days
  - Next due date
- Edit the relationship goal directly from the Friend Details page
- Log quick interactions with `Call`, `Text`, and `Video` actions
- Show toast notifications with `react-toastify`
- Save timeline entries in browser storage
- View interaction history on the Timeline page
- Filter timeline entries by `Call`, `Text`, or `Video`
- View a pie chart on the Friendship Analytics page showing interaction breakdown

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```bash
http://localhost:3000
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Data Handling

- Friend data is loaded from `public/friends.json`
- Timeline logs and updated contact goals are stored in browser `localStorage`

## Future Improvements

- Add backend/database persistence
- Add authentication for personal accounts
- Support editing and deleting timeline logs
- Add more advanced analytics and charts

