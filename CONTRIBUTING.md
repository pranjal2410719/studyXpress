# Contributing to StudyXpress

Thank you for your interest in contributing to StudyXpress! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences
- Show empathy towards other community members

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/studyXpress.git
   cd studyXpress
   ```
3. **Set up the development environment** following the [Development Guide](docs/DEVELOPMENT.md)
4. **Create a branch** for your contribution:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## How to Contribute

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug fixes**
- ✨ **New features**
- 📚 **Documentation improvements**
- 🎨 **UI/UX enhancements**
- ⚡ **Performance optimizations**
- 🧪 **Tests**
- 🔧 **Tooling and infrastructure**

### Areas Where Help is Needed

- **Frontend Development**: React/Next.js components and pages
- **UI/UX Design**: Improving user interface and experience
- **Documentation**: Writing guides, tutorials, and API docs
- **Testing**: Unit tests, integration tests, and E2E tests
- **Accessibility**: Making the app more accessible
- **Performance**: Optimizing load times and user experience
- **Mobile Responsiveness**: Ensuring great mobile experience

## Development Process

### Before You Start

1. **Check existing issues** to see if someone is already working on it
2. **Create an issue** for new features or significant changes
3. **Discuss your approach** in the issue before starting work
4. **Keep changes focused** - one feature/fix per PR

### Development Workflow

1. **Set up your environment**:
   ```bash
   npm install
   cp .env.example .env.local
   npm run dev
   ```

2. **Make your changes**:
   - Follow the [Style Guidelines](#style-guidelines)
   - Write tests for new functionality
   - Update documentation as needed

3. **Test your changes**:
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

## Pull Request Process

### Before Submitting

- [ ] Code follows the style guidelines
- [ ] Self-review of the code
- [ ] Tests pass locally
- [ ] Documentation updated (if applicable)
- [ ] No merge conflicts with main branch

### PR Title and Description

**Title Format**: `type: brief description`

Examples:
- `feat: add expense tracking dashboard`
- `fix: resolve login form validation issue`
- `docs: update deployment guide`

**Description Template**:
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Other (please describe)

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] All tests pass

## Screenshots (if applicable)
Add screenshots for UI changes

## Additional Notes
Any additional information or context
```

### Review Process

1. **Automated checks** must pass (CI/CD pipeline)
2. **Code review** by maintainers
3. **Address feedback** if requested
4. **Approval and merge** by maintainers

## Issue Guidelines

### Bug Reports

When reporting bugs, please include:

- **Clear title** describing the issue
- **Steps to reproduce** the bug
- **Expected behavior**
- **Actual behavior**
- **Environment details** (browser, OS, etc.)
- **Screenshots** if applicable

### Feature Requests

For new features, please include:

- **Clear description** of the feature
- **Use case** and motivation
- **Proposed solution** (if you have one)
- **Alternative solutions** considered
- **Additional context**

### Issue Labels

We use labels to categorize issues:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Documentation improvements
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention needed
- `priority: high/medium/low`: Priority levels

## Style Guidelines

### Code Style

- **TypeScript**: Use TypeScript for all new code
- **ESLint**: Follow the configured ESLint rules
- **Prettier**: Code formatting is handled by Prettier
- **Naming**: Use descriptive names for variables and functions

### Component Guidelines

```typescript
// Good component structure
interface ComponentProps {
  title: string
  isVisible?: boolean
}

export function Component({ title, isVisible = true }: ComponentProps) {
  // Component logic here
  
  return (
    <div className="component-container">
      {isVisible && <h1>{title}</h1>}
    </div>
  )
}
```

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation
- `style:` Formatting changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance

### CSS/Styling

- Use **Tailwind CSS** classes
- Follow **mobile-first** responsive design
- Use **semantic HTML** elements
- Ensure **accessibility** standards

## Community

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General discussions and questions
- **Pull Requests**: Code review and collaboration

### Getting Help

- Check the [Development Guide](docs/DEVELOPMENT.md)
- Search existing issues and discussions
- Ask questions in GitHub Discussions
- Tag maintainers if needed (but be patient!)

### Recognition

Contributors will be:
- Listed in the project's contributors
- Mentioned in release notes for significant contributions
- Invited to join the core team for outstanding contributions

## License

By contributing to StudyXpress, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to StudyXpress! Your efforts help make education more accessible for students everywhere. 🎓✨
