# The Wild Oasis Website

The Wild Oasis is a small boutique hotel with 8 luxurious wooden cabins.
This is the customer-facing website where guests can explore cabins, sign in with Google, and book their stay.
Bookings made here are mirrored into the separate admin dashboard used by the hotel staff.

## [Live Demo](https://the-wild-oasis-website-tadayoni.vercel.app/)

## Features:

- Authentication with Google via NextAuth (Auth.js v5)
- Browse and filter cabins by guest capacity
- Interactive date range picker for reservations
- Create, update, and delete reservations
- Guest profile management (nationality, national ID)
- Server Components and Server Actions for data mutations
- Optimistic UI updates for a snappy experience
- Dynamic routing and SEO-friendly metadata
- Suspense-based loading states and streaming
- Caching and revalidation with Next.js
- Protected routes via middleware
- Fully responsive design with Tailwind CSS
- Production backend powered by Supabase

## Technologies Used:

- Next.js 14 (App Router, Server Components, Server Actions)
- React 18
- NextAuth.js v5
- Supabase (PostgreSQL, Storage)
- Tailwind CSS
- Heroicons
- react-day-picker
- date-fns

## Architecture

This project is part of a two-application system:

- **Customer Website (this repo)** — built with Next.js, allows guests to browse cabins and manage bookings.
- **Admin Dashboard** — a separate React SPA used internally by hotel staff to manage cabins, bookings, guests, and settings.

Both apps share the same Supabase backend, so every action taken on the customer site is reflected in real time on the admin dashboard.

## Usage

Feel free to explore the app. Sign in with Google to reserve a cabin, view your reservations, update your profile, or cancel a booking.

## Installation:

You can also run the project locally on your computer, just follow the steps below

1. Clone the repository:

   ```
   git clone https://github.com/Ali-Tadayoni/the-wild-oasis-website.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Add your environment variables (`.env.local`) for Supabase and NextAuth.

4. Run the development server:
   ```
   npm run dev
   ```

### Project Status:

This project is currently complete but will be updated regularly with new features.

### Contact:

For any inquiries, feel free to reach out to me at [tadayoni.ali.enayat@gmail.com](mailto:tadayoni.ali.enayat@gmail.com).
