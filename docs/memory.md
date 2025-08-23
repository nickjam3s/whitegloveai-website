# WhitegloveAI Project Memory System

## AI Instructions & Maintenance Protocol

### Custom Trigger
Use **"What's in the Memory Box?"** to load this complete project context.

### Memory Maintenance Protocol
**CRITICAL**: After any development session involving:
- New features or functionality
- Bug fixes and solutions  
- Architecture changes
- Database schema modifications
- Security updates
- Component refactoring

**Always update the memory system** when prompted with: "Update the memory with today's changes"

Update the relevant sections in:
- `memory.md` - Feature status, integrations, recent work
- `architecture.md` - Technical changes, new components, routing
- `development-notes.md` - Progress updates, new patterns, decisions
- `troubleshooting.md` - New issues found, solutions implemented

---

## Project Overview

**WhitegloveAI** is a comprehensive AI services platform consisting of three main components:

### 1. Main Website (Public)
Marketing and information site showcasing AI services:
- **MAISP** (Managed AI Service Platform) - AutomateAI, AvatarAI, HumanoidAI, TextAI, TranslateAI, VoiceAI
- **vCAIO** (Virtual Chief AI Officer) - AI strategy consulting and implementation
- **TextAI for Good Program** - Social impact AI initiatives
- **About/Strategic Advisors** - Company information and leadership
- **News/Blog** - Content management and thought leadership

### 2. Customer Portal (Secure)
Client dashboard for service management:
- Authentication system with magic links
- Client group management and assignments
- Service-specific interfaces
- Retell AI agent integration
- Document management and file storage

### 3. CMS Backend (Future)
Content management system for:
- Blog post creation and publishing
- Email campaign management
- Subscriber management
- Analytics and reporting

---

## Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui library
- **Routing**: React Router v6
- **State Management**: React hooks, React Query for server state
- **Animations**: Framer Motion
- **Build Tool**: Vite

### Backend & Database
- **BaaS**: Supabase (PostgreSQL)
- **Authentication**: Custom portal auth + Supabase Auth
- **File Storage**: Supabase Storage
- **Edge Functions**: TypeScript functions for email, AI integration
- **Security**: Row Level Security (RLS) policies

### Key Integrations
- **Email**: Resend for transactional emails
- **AI Services**: OpenAI API integration
- **Voice AI**: Retell AI platform
- **Analytics**: Built-in analytics system
- **File Processing**: Document extraction and management

---

## Database Schema (20 Tables)

### Core Tables
- `portal_users` - Customer portal authentication and user management
- `profiles` - User profile data and preferences
- `client_groups` - Customer organization and segmentation
- `client_group_memberships` - User-group relationships

### Content Management
- `posts` - Blog posts and articles with SEO optimization
- `tags` - Content categorization system
- `email_campaigns` - Email marketing campaigns
- `email_templates` - Reusable email templates
- `subscribers` - Newsletter and marketing subscribers

### AI & Testing
- `tests` - AI model testing framework
- `model_results` - AI model performance data
- `bias_scores` - AI bias detection and scoring
- `thresholds` - User-defined AI performance thresholds
- `documents` - File storage and document management

### System & Security
- `auth_audit_logs` - Security and access logging
- `magic_link_tokens` - Passwordless authentication tokens
- `email_rate_limits` - Email sending rate limiting
- `unsubscribe_requests` - Email unsubscribe management
- `portal_config` - System configuration settings
- `retell_agent_assignments` - Voice AI agent configurations

---

## Current Feature Status

### ✅ Completed Features
- **Homepage & Navigation** - Complete responsive design
- **MAISP Service Pages** - All 6 AI services documented
- **vCAIO Consulting Pages** - Full consulting platform pages
- **About Pages** - Company info, strategic advisors, apprenticeship
- **Blog System** - Full CMS with SEO optimization
- **Portal Authentication** - Magic link system with email confirmation
- **Database Architecture** - All 20 tables with RLS policies
- **Email System** - Campaign management and templates
- **Document Management** - File upload and storage system
- **AI Integration** - OpenAI API and conversation flow generation

### 🚧 In Development
- **CMS Admin Interface** - Blog management dashboard
- **Portal Dashboard** - Customer service interface
- **Analytics System** - Performance tracking and reporting
- **Advanced AI Features** - Model testing and bias detection

### 📋 Planned Features
- **Payment Integration** - Stripe/billing system
- **Advanced Portal Features** - Service-specific dashboards
- **Mobile App** - React Native companion app
- **Advanced Analytics** - Business intelligence dashboard

---

## Design System

### Color Palette (HSL)
- **Primary**: Purple/blue gradient theme
- **Semantic Tokens**: Defined in `index.css` and `tailwind.config.ts`
- **Dark/Light Mode**: Full theme support
- **Component Variants**: Extensive shadcn/ui customization

### Key Design Principles
- **Responsive**: Mobile-first approach
- **Accessibility**: WCAG compliance focus
- **Performance**: Optimized images and lazy loading
- **SEO**: Comprehensive meta tags and structured data

---

## Recent Development Activity
*This section updated after each development session*

**Last Updated**: [Current Date]
**Recent Changes**: Initial memory system implementation

---

## Quick Reference Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Database
```bash
supabase start       # Start local Supabase
supabase db reset    # Reset local database
supabase gen types   # Generate TypeScript types
```

### Memory System
- **Load Context**: "What's in the Memory Box?"
- **Update Memory**: "Update the memory with today's changes"