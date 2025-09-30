# Vegnar GFRP - Next.js Website

This is the Next.js version of the Vegnar GFRP website, converted from the original React application.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/ui** components
- **Framer Motion** for animations
- **React Query** for state management
- **Responsive Design** for all devices

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gfrp-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── benefits/          # Benefits page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── Header.tsx        # Site header
│   ├── Footer.tsx        # Site footer
│   └── ReactQueryProvider.tsx
├── lib/                  # Utility functions
│   └── utils.ts
└── hooks/                # Custom hooks
    └── use-toast.ts
```

## Key Changes from React Version

### Routing
- **Before**: React Router (`react-router-dom`)
- **After**: Next.js App Router with file-based routing

### Navigation
- **Before**: `<Link>` from `react-router-dom`
- **After**: `<Link>` from `next/link`

### Client Components
- Added `'use client'` directive for components using:
  - React hooks (`useState`, `useEffect`)
  - Event handlers
  - Browser APIs

### Image Optimization
- **Before**: Regular `<img>` tags
- **After**: Next.js `<Image>` component (where applicable)

### Environment Variables
- **Before**: `REACT_APP_` prefix
- **After**: `NEXT_PUBLIC_` prefix for client-side variables

## Pages

- **Home** (`/`) - Hero section with company overview
- **About** (`/about`) - Company information and manufacturing process
- **Benefits** (`/benefits`) - GFRP advantages and comparisons
- **Blog** (`/blog`) - Technical articles and insights
- **Contact** (`/contact`) - Contact form and information
- **Corporate Identity** (`/corporate-identity`) - Company branding
- **Privacy Policy** (`/privacy`) - Privacy information
- **Terms of Service** (`/terms`) - Terms and conditions

## Components

### UI Components (Shadcn/ui)
- Button, Card, Badge, Input, Textarea, Label
- Toast notifications
- Tooltip system

### Layout Components
- Header with navigation
- Footer with social links and certifications
- Responsive design for mobile/desktop

## Styling

- **Tailwind CSS** for utility-first styling
- **Custom CSS variables** for theme colors
- **Poppins font** from Google Fonts
- **Orange color scheme** (#9e5020) for branding

## Build and Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Static Export
```bash
npm run build
```

The project is configured for static export, generating static HTML files in the `out/` directory.

## Technologies Used

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Shadcn/ui
- Framer Motion
- React Query
- Heroicons
- React Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Vegnar GFRP.