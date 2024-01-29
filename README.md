# Fullstack Trello Clone

Welcome to the Fullstack Trello Clone! This project is an end-to-end implementation of a Trello-like application, featuring workspaces, boards, lists, cards, audit logs, member roles, and more.

## Key Features

- **Authentication:** User authentication to secure access to the application.
- **Organizations / Workspaces:** Creation of workspaces to organize boards and collaborate efficiently.
- **Board Management:**
  - Board creation with random beautiful cover images from Unsplash API.
  - Rename and delete boards.
  - Activity log tracking for the entire organization.
- **List Management:**
  - Creation of lists within boards.
  - Rename, delete, drag & drop reorder, and copy lists.
- **Card Management:**
  - Creation of cards within lists.
  - Description, rename, delete, drag & drop reorder, and copy cards.
  - Activity log tracking for each card.
- **Organization Features:**
  - Board limit for each organization.
  - Stripe subscription for organizations to unlock unlimited boards.
- **Landing Page:** A visually appealing landing page to introduce the application.
- **Database:** postgresql database used with Prisma ORM.
- **UI Frameworks:** shadcnUI & TailwindCSS for styling.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/fullstack-trello-clone.git
   cd fullstack-trello-clone

2. ``` bash
   npm install

3 # Note: Configure MySQL connection in the .env file before running the migrations.
# Make sure you have Prisma installed globally, or use npx prisma.
```bash
npx prisma migrate dev
npm run dev


Feel free to contribute to the project! Whether it's bug fixes, new features, or improvements, your contributions are welcome.
  
