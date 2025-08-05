# Geremiaco Landing Page

A clean, scalable Next.js landing page structure with a black initial screen, ready for future development.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Stylus for component-specific styles
- Zustand for state management
- Shadcn UI / Radix UI components

## Project Structure

```
/src
  /app             # Next.js App Router pages
  /components      # Reusable React components
    /landing-page  # Landing page sections
      /hero        # Hero section
      /problem     # Problem section
      /solution    # Solution section
      /difference  # Difference section
      /social-proof # Social proof section
      /thought-leadership # Thought leadership section
      /final-cta   # Final call to action section
    /ui            # UI components (buttons, cards, etc.)
  /lib             # Utilities and shared code
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Landing Page Structure

The landing page is organized into seven strategic sections:

1. **Hero** - Main introduction and value proposition
2. **Problem** - Pain points the product/service addresses
3. **Solution** - How the product/service solves these problems
4. **Difference** - Unique selling points and competitive advantages
5. **Social Proof** - Testimonials, reviews, and client logos
6. **Thought Leadership** - Expertise demonstration and industry insights
7. **Final CTA** - Clear call to action for conversion

## Development Guidelines

- Follow Standard.js rules
- Use functional components and hooks
- Implement Tailwind for layout and common utilities
- Use Stylus modules for component-specific styles
- Minimize client-side JavaScript with React Server Components