# StudyXpress 🎓

**Your Ultimate Student Companion**

StudyXpress is a comprehensive learning platform designed to help students excel academically while managing their daily life efficiently. Built with modern web technologies, it provides a seamless experience for studying, tracking expenses, monitoring health, and finding opportunities.

![StudyXpress Banner](https://via.placeholder.com/800x200/FF6B6B/FFFFFF?text=StudyXpress+-+Your+Ultimate+Student+Companion)

## ✨ Features

### 📚 Academic Excellence
- **Notes Feed**: Share and discover study materials with the community
- **Interactive Quizzes**: Test your knowledge with engaging quizzes
- **Study Marathon**: Track your study sessions and progress
- **Resource Library**: Access categorized study materials (CBSE, ICSE, NEET, JEE)

### 💰 Smart Finance Management
- **Expense Tracker**: Monitor your spending and budget effectively
- **Financial Insights**: Get detailed analytics of your expenses
- **Budget Planning**: Set and track financial goals

### 🏥 Health & Wellness
- **Health Tracker**: Monitor your physical and mental well-being
- **Period Calculator**: Health tracking tools for female students
- **Wellness Tips**: Get personalized health recommendations

### 🏠 Student Life
- **PG Accommodation**: Find suitable accommodation near your institution
- **Transport**: Discover transportation options and routes
- **StudyXpert Jobs**: Find part-time jobs and internship opportunities

### 🤝 Community Features
- **StudyXpress Seva**: Community service and volunteer opportunities
- **Discussion Forums**: Connect with fellow students
- **Study Groups**: Collaborate with peers

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher (or pnpm/yarn)

### Installation

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

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Charts**: [Recharts](https://recharts.org/)
- **Package Manager**: [pnpm](https://pnpm.io/) (recommended)

## 📁 Project Structure

```
studyXpress/
├── app/                    # Next.js App Router pages
│   ├── community/         # Community features
│   ├── courses/           # Course management
│   ├── dashboard/         # User dashboard
│   ├── expense-tracker/   # Expense tracking
│   ├── login/             # Authentication
│   ├── register/          # User registration
│   └── ...               # Other feature pages
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   └── ...               # Feature-specific components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Global styles
└── ...                   # Configuration files
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pranjal2410719/studyXpress)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pranjal2410719/studyXpress)

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Deploy with Docker

```bash
# Build the Docker image
docker build -t studyxpress .

# Run the container
docker run -p 3000:3000 studyxpress
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Add database URLs, API keys, etc.
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build artifacts

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [v0.dev](https://v0.dev) for rapid prototyping
- UI components powered by [Radix UI](https://www.radix-ui.com/)
- Icons by [Lucide](https://lucide.dev/)

## 📞 Support

- 📧 Email: support@studyxpress.com
- 🐛 Issues: [GitHub Issues](https://github.com/pranjal2410719/studyXpress/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/pranjal2410719/studyXpress/discussions)

---

<div align="center">
  <p>Made with ❤️ for students, by students</p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div>
