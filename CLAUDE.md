# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Architecture Overview

This is a Next.js application that serves as a personal resume website with a GraphQL API backend. The architecture follows a hybrid approach with static data and GraphQL schema generation.

### Core Components

**Data Layer (`src/data.ts`)**
- Contains all resume data as a single exported object
- Includes bio, experience, projects, talks, and other experience sections
- Serves as the single source of truth for all content

**GraphQL Schema (`src/schema.ts` and `src/allTypes/`)**
- Uses Nexus to generate GraphQL schema from TypeScript types
- Schema types are defined in `src/allTypes/` directory
- Generates `schema.graphql` and `src/generated/nexus.ts` automatically

**API Layer (`pages/api/graphql.ts`)**
- Apollo Server implementation serving GraphQL API
- Enables GraphQL playground at `/api/graphql`
- Uses micro framework for serverless deployment

**Frontend Architecture**
- Component-based architecture with styled-components and Tailwind CSS
- Apollo Client for GraphQL data fetching (`src/apolloClient.ts`)
- Custom hooks in `src/hooks/` for reusable functionality
- Pages follow Next.js routing convention with both `/` and `/v2` versions

### Key Patterns

**Component Structure**
- Each component has its own directory with TypeScript interfaces
- Styled-components mixed with Tailwind for styling
- Component-specific styles in `styles.ts` files

**Data Flow**
- Static data from `data.ts` → GraphQL resolvers → Apollo Client → React components
- Type safety maintained through generated Nexus types

**Styling Approach**
- Combination of styled-components and Tailwind CSS
- `tailwind-styled-components` for bridging the two approaches

### Important Files

- `src/data.ts` - All resume content and data
- `src/schema.ts` - GraphQL schema configuration
- `pages/api/graphql.ts` - GraphQL API endpoint
- `src/apolloClient.ts` - Apollo Client setup
- `components/` - Reusable UI components

### Development Notes

- The application generates GraphQL schema and types automatically during build
- Two page versions exist: main (`pages/index.tsx`) and v2 (`pages/v2/index.tsx`)
- All content changes should be made in `src/data.ts`
- Component interfaces are defined alongside components for type safety