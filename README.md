
# Getting Started

## Installation

1. Clone the repository.

   ```sh
   git clone https://github.com/prd-tai-nguyen/ts-express-sequelize-starter.git
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Copy `.env.example` to `.env` and fill in your database credentials:

   ```sh
   cp .env.example .env
   ```

   Then edit `.env` with your database settings.

## Database Migration

Run migrations to create the database tables:

```sh
npm run db:create && npm run db:migrate
```

## Running the App

For development with TypeScript:

```sh
npm run dev
```

To build and run the compiled JavaScript:

```sh
npm run build
npm start
```

The server will run at [http://localhost:3000](http://localhost:3000).
