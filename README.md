# Next.js Starter Kit

This is a starter template for building a SaaS application using **Next.js** with support for authentication and a dashboard for logged-in users.

## Features

- Marketing landing page (`/`) with animated Terminal element
- Dashboard pages with CRUD operations on users/teams
- Basic RBAC with Owner and Member roles
- Email/password authentication with JWTs stored to cookies
- Global middleware to protect logged-in routes
- Local middleware to protect Server Actions or validate Zod schemas
- Activity logging system for any user events

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://www.postgresql.org/)
- **ORM**: [Drizzle](https://orm.drizzle.team/)
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/)

## Getting Started

```bash
git clone https://github.com/hrsh22/nextjs-starter-kit
cd nextjs-starter-kit
pnpm install
```

## Running Locally

Use the included setup script to create your `.env` file:

```bash
pnpm db:setup
```

To use Supabase as PostgreSQL database, do the following:

1. Create a new project in Supabase
2. Click on the `Connect` button.
3. Go to `ORMs` tab and choose the tool as Drizzle and copy the Database URL.
4. Input the connection string while doing the setup.

```bash
pnpm db:migrate
pnpm db:seed
```

This will create the following user and team:

- User: `test@test.com`
- Password: `admin123`

You can, of course, create new users as well through `/sign-up`.

Finally, run the Next.js development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Going to Production

When you're ready to deploy your SaaS application to production, follow these steps:

### Deploy to Vercel

1. Push your code to a GitHub repository.
2. Connect your repository to [Vercel](https://vercel.com/) and deploy it.
3. Follow the Vercel deployment process, which will guide you through setting up your project.

### Add environment variables

In your Vercel project settings (or during deployment), add all the necessary environment variables. Make sure to update the values for the production environment, including:

1. `BASE_URL`: Set this to your production domain.
2. `POSTGRES_URL`: Set this to your production database URL.
3. `AUTH_SECRET`: Set this to a random string. `openssl rand -base64 32` will generate one.
