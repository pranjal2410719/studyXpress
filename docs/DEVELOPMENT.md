# StudyXpress Development Guide

This guide helps you set up a local development environment for StudyXpress.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Code Style and Standards](#code-style-and-standards)
- [Testing](#testing)
- [Contributing](#contributing)

## Prerequisites

### Required Software

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (or pnpm/yarn)
- **Git**: Latest version
- **VS Code**: Recommended editor

### Recommended VS Code Extensions

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Bracket Pair Colorizer

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/pranjal2410719/studyXpress.git
   cd studyXpress
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your development configuration.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Development Workflow

### Branch Strategy

- `main`: Production-ready code
- `develop`: Development branch for integration
- `feature/*`: Feature branches
- `bugfix/*`: Bug fix branches
- `hotfix/*`: Critical fixes for production

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the code style guidelines
   - Add tests for new features
   - Update documentation as needed

3. **Test your changes**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and create a PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## Project Structure

```
studyXpress/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth route group
│   ├── dashboard/         # Dashboard pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── forms/            # Form components
│   └── layout/           # Layout components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   ├── utils.ts          # General utilities
│   ├── validations.ts    # Zod schemas
│   └── constants.ts      # App constants
├── public/               # Static assets
├── styles/               # Additional styles
├── types/                # TypeScript type definitions
├── docs/                 # Documentation
└── config files          # Various config files
```

### Key Directories

- **`app/`**: Next.js 13+ App Router pages and layouts
- **`components/`**: Reusable React components
- **`hooks/`**: Custom React hooks for shared logic
- **`lib/`**: Utility functions and configurations
- **`public/`**: Static assets (images, icons, etc.)

## Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run type-check` - Run TypeScript type checking

### Utilities
- `npm run clean` - Clean build artifacts
- `npm run preview` - Build and preview production build

## Code Style and Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible
- Use strict mode settings

### React

- Use functional components with hooks
- Follow React best practices
- Use proper component naming (PascalCase)
- Implement proper error boundaries

### Styling

- Use Tailwind CSS for styling
- Follow mobile-first responsive design
- Use CSS variables for theming
- Keep styles close to components

### File Naming

- Components: `PascalCase.tsx`
- Hooks: `use-kebab-case.ts`
- Utilities: `kebab-case.ts`
- Pages: `kebab-case/page.tsx`

### Import Organization

```typescript
// 1. React and Next.js imports
import React from 'react'
import { NextPage } from 'next'

// 2. Third-party libraries
import { Button } from '@/components/ui/button'

// 3. Internal imports
import { useAuth } from '@/hooks/use-auth'
import { validateEmail } from '@/lib/utils'

// 4. Relative imports
import './component.css'
```

## Testing

### Unit Testing (Future)

When implementing tests, use:
- **Jest**: Testing framework
- **React Testing Library**: Component testing
- **MSW**: API mocking

### E2E Testing (Future)

For end-to-end testing:
- **Playwright**: E2E testing framework
- **Cypress**: Alternative E2E option

### Running Tests

```bash
# Unit tests (when implemented)
npm test

# E2E tests (when implemented)
npm run test:e2e

# Coverage report (when implemented)
npm run test:coverage
```

## Contributing

### Before Contributing

1. Check existing issues and PRs
2. Discuss major changes in issues first
3. Follow the development workflow
4. Ensure all tests pass
5. Update documentation as needed

### Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
6. Address review feedback

### Code Review Guidelines

- Code should be self-documenting
- Include tests for new features
- Follow established patterns
- Consider performance implications
- Update documentation

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   ```

2. **Module not found errors**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript errors**
   ```bash
   # Check TypeScript configuration
   npm run type-check
   ```

4. **Build failures**
   ```bash
   # Clean and rebuild
   npm run clean
   npm run build
   ```

### Getting Help

- Check the [GitHub Issues](https://github.com/pranjal2410719/studyXpress/issues)
- Review the [Next.js Documentation](https://nextjs.org/docs)
- Ask questions in [GitHub Discussions](https://github.com/pranjal2410719/studyXpress/discussions)

---

Happy coding! 🚀
