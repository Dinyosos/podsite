# Contributing to Podsite

Thank you for your interest in contributing to Podsite! This document provides guidelines for contributing to the project.

## 🐛 Reporting Bugs

If you find a bug, please create an issue with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser/device information

## 💡 Suggesting Features

Feature suggestions are welcome! Please create an issue with:
- Clear description of the feature
- Use case and benefits
- Any relevant examples or mockups

## 🔧 Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/podsite.git
   cd podsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Make your changes**
   - Follow the existing code style
   - Use TypeScript for type safety
   - Follow React best practices
   - Ensure accessibility standards

5. **Test your changes**
   - Test on multiple screen sizes
   - Test keyboard navigation
   - Run Lighthouse audit
   - Check console for errors

6. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Code Style

### TypeScript
- Use explicit types where beneficial
- Avoid `any` types
- Use interfaces for component props

### React
- Use functional components with hooks
- Keep components focused and reusable
- Use meaningful prop names
- Include proper TypeScript types

### CSS/Tailwind
- Follow mobile-first approach
- Use Tailwind utility classes
- Keep custom CSS minimal
- Ensure responsive design

### Accessibility
- Include proper ARIA labels
- Ensure keyboard navigation works
- Use semantic HTML
- Maintain proper heading hierarchy
- Test with screen readers

## 🧪 Testing Checklist

Before submitting a PR, verify:

- [ ] Code builds without errors (`npm run build`)
- [ ] No ESLint warnings
- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Mobile menu functions properly
- [ ] Audio players work
- [ ] Images display correctly
- [ ] Lighthouse SEO score ≥ 95
- [ ] Lighthouse Accessibility score ≥ 90
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Keyboard navigation works

## 📤 Submitting Pull Requests

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```
   
   Use conventional commit messages:
   - `feat:` new feature
   - `fix:` bug fix
   - `docs:` documentation changes
   - `style:` formatting, missing semi colons, etc.
   - `refactor:` code refactoring
   - `test:` adding tests
   - `chore:` maintenance

3. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create Pull Request**
   - Provide clear description of changes
   - Reference any related issues
   - Include screenshots for UI changes
   - Ensure all tests pass

## 🎨 Design Guidelines

- **Colors**: Use the existing color palette (grays, blues)
- **Typography**: Maintain consistent font sizes and hierarchy
- **Spacing**: Follow existing spacing patterns
- **Icons**: Use SVG for icons
- **Images**: Optimize images (SVG preferred, WebP for photos)

## 📚 Documentation

- Update README.md if adding features
- Add JSDoc comments for functions
- Update DEPLOYMENT.md if changing build process
- Include inline comments for complex logic

## 🤝 Code Review Process

- All PRs require review before merging
- Address review feedback promptly
- Keep PRs focused and reasonably sized
- Squash commits if requested

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 💬 Questions?

Feel free to:
- Open an issue for questions
- Join discussions in existing issues
- Reach out to maintainers

Thank you for contributing! 🎉

