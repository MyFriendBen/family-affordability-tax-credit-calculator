# Family Affordability Tax Credit Calculator

A SvelteKit application that helps Colorado families estimate their eligibility for various state and federal tax credits, including the Family Affordability Tax Credit (FATC), Child Tax Credit, and Earned Income Tax Credit.

## Prerequisites

- Node.js 18+
- npm
- Access to the MyFriendBen backend API ([benefits-api](https://github.com/MyFriendBen/benefits-api))

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with the following variables:

```bash
# Public environment variables (accessible in browser)
PUBLIC_MFB_API_KEY=your_api_key_here
PUBLIC_MFB_DOMAIN=http://localhost:8000
PUBLIC_MFB_FRONTEND_DOMAIN=http://localhost:3000

# Private environment variables (server-side only)
# HubSpot API key for the sign-up form. Must be defined (any placeholder works
# locally) or `npm run dev`/`npm run build` fails to import it.
HUB_SPOT_API_KEY=your_hubspot_api_key_here
```

You can copy these values from the [benefits-calculator](https://github.com/MyFriendBen/benefits-calculator) `.env` file:

- `PUBLIC_MFB_API_KEY` = `REACT_APP_API_KEY`
- `PUBLIC_MFB_DOMAIN` = `REACT_APP_DOMAIN_URL`
- `PUBLIC_MFB_FRONTEND_DOMAIN` = URL where benefits-calculator is running (typically `http://localhost:3000`)

3. Ensure the backend API is running at the URL specified in `PUBLIC_MFB_DOMAIN`.

## Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

**Important:** This app uses dynamic routing with white labels. The root URL (`/`) will show a blank page. Navigate to a white label URL instead:

- http://localhost:5173/gac/en - Get Ahead Colorado (English)
- http://localhost:5173/gac/es - Get Ahead Colorado (Spanish)
- http://localhost:5173/pueblo_united_way/en - Pueblo United Way
- http://localhost:5173/dabc/en - DABC
- http://localhost:5173/alg/en - ALG
- http://localhost:5173/servicios/en - Servicios
- http://localhost:5173/jeffco/en - Jefferson County
- http://localhost:5173/adams/en - Adams County
- http://localhost:5173/arapahoe/en - Arapahoe County
- http://localhost:5173/211colorado/en - 211 Colorado

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run svelte-check for type validation
- `npm run lint` - Run linter and prettier checks
- `npm run format` - Format code with prettier
- `npm run translate` - Run typesafe-i18n for translation management

## Project Structure

```
src/
├── lib/
│   ├── i18n/           # Internationalization (English/Spanish)
│   ├── server/         # Server-side code (HubSpot integration)
│   ├── Form.svelte     # Main calculator form
│   ├── Results.svelte  # Tax credit results display
│   ├── mfbApi.ts       # MyFriendBen API client
│   └── whiteLabelData.ts # White label configuration
├── routes/
│   ├── [whiteLabel]/   # Dynamic white label routes
│   │   └── [lang]/     # Language-specific pages (en/es)
│   └── hubspot/        # HubSpot integration endpoint
└── app.html
```

## Building for Production

```bash
npm run build
```

The production build uses `@sveltejs/adapter-node`. You can start the production server with:

```bash
npm run start
```

## White Label Support

Each white label has custom colors and link configurations defined in `src/lib/whiteLabelData.ts`. The supported white labels are:

- gac (Get Ahead Colorado)
- pueblo_united_way
- dabc
- alg
- servicios
- jeffco
- adams
- arapahoe
- 211colorado

## Deployment

Deploys are manual; merging to `main` does not deploy. The app runs on Heroku (`heroku/nodejs` buildpack, `npm run start`):

- `baby-ben`: production, embedded as an iframe at https://www.getaheadcolorado.org/calculator
- `baby-ben-staging`: staging

Set the environment variables above as Heroku config vars, then push `main` to the app's Heroku git remote.
