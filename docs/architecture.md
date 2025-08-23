# WhitegloveAI Architecture Documentation

## Project Structure Overview

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui base components
│   ├── navigation/     # Header, footer, navigation
│   ├── home/          # Homepage-specific components
│   ├── portal/        # Portal-specific components
│   └── common/        # Shared components
├── pages/             # Route components
│   ├── maisp/         # MAISP service pages
│   ├── vcaio/         # vCAIO consulting pages
│   └── portal/        # Portal application pages
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── integrations/      # External service integrations
│   └── supabase/      # Supabase client and types
└── styles/            # Global styles and themes
```

---

## Routing Architecture

### Public Routes (Main Website)
```typescript
/ - Homepage with hero and service overview
/aboutus - Company information
/aboutus/strategic-advisors - Leadership team
/about/apprentice - Apprenticeship program

/maisp - Managed AI Services Platform overview
/maisp/automateai - Automation AI services
/maisp/avatarai - Avatar AI services  
/maisp/humanoid-ai - Humanoid AI services
/maisp/textai - Text AI services
/maisp/textai/textaiforgood - TextAI for Good program
/maisp/translateai - Translation AI services
/maisp/voiceai - Voice AI services

/vcaio - Virtual Chief AI Officer overview
/vcaio/chiefaiofficer - vCAIO platform details
/vcaio/launch - AI implementation launchpad
/vcaio/adopt - AI adoption consulting
/vcaio/enable - AI enablement services
/traiga - TRAIGA Triage Center

/blog - Blog listing page
/blog/:slug - Individual blog posts
/contact - Contact form (HubSpot integration)
```

### Portal Routes (Authenticated)
```typescript
/portal - Portal dashboard (future)
/portal/login - Authentication interface
/portal/documents - Document management
/portal/settings - User settings and preferences
```

### External Links
- `/products/ai-amf` → http://www.aiamf.ai
- `/products/lucidis` → https://lucidis.ai  
- `/news` → https://news.whitegloveai.com

---

## Component Architecture

### Design System Components (`/components/ui/`)
- **Form Controls**: Button, Input, Select, Checkbox, RadioGroup
- **Layout**: Card, Sheet, Dialog, Accordion, Tabs
- **Navigation**: Dropdown, Menubar, NavigationMenu
- **Feedback**: Toast, Alert, Progress, Skeleton
- **Data Display**: Badge, Avatar, Separator, ScrollArea

### Feature Components

#### Navigation (`/components/navigation/`)
- `Header.tsx` - Main site header with mega menu
- `Footer.tsx` - Site footer with links and branding
- `MobileMenu.tsx` - Responsive mobile navigation
- `navigationData.ts` - Centralized navigation configuration

#### Homepage (`/components/home/`)
- `Hero.tsx` - Main hero section with CTA
- `ManagedAIServices.tsx` - MAISP services overview
- `vCAIOSection.tsx` - Consulting services highlight
- `NewsSection.tsx` - Latest blog posts display
- `ContactSection.tsx` - Contact form integration

#### Portal (`/components/portal/`)
- `AuthForm.tsx` - Magic link authentication
- `DocumentUpload.tsx` - File upload interface
- `PortalLayout.tsx` - Portal-specific layout wrapper

---

## Database Architecture

### Authentication & Users
```sql
portal_users (id, email, role, is_active, email_confirmed)
├── client_group_memberships (user_id → portal_users.id)
├── client_groups (id, name, description)
└── auth_audit_logs (user_email, event_type, success)

profiles (id, email, role) -- Supabase Auth integration
magic_link_tokens (email, token, expires_at)
```

### Content Management
```sql
posts (id, author_id, title, content, status, published_at)
├── tags (id, name, usage_count)
└── email_campaigns (id, post_id, subject, status)

email_templates (id, name, html_template, subject_template)
subscribers (id, email, status, preferences)
unsubscribe_requests (id, subscriber_id, reason)
```

### AI & Analytics
```sql
tests (id, user_id, prompt)
├── model_results (test_id, model_name, response, tokens)
├── bias_scores (test_id, gender, race, toxicity)
└── thresholds (user_id, bias_max, toxicity_max)

documents (id, user_id, filename, storage_path)
retell_agent_assignments (id, group_id, retell_agent_id)
```

### System Configuration
```sql
portal_config (id, key_name, encrypted_value)
email_rate_limits (email, email_type, send_count)
```

---

## Security Architecture

### Row Level Security (RLS) Policies

#### User Data Protection
- **portal_users**: Users can view own record, admins manage all
- **profiles**: Users can CRUD own profile only
- **documents**: Users can CRUD own documents only
- **tests/results**: Users can CRUD own test data only

#### Content Management
- **posts**: Public can view published, authenticated can manage
- **subscribers**: Public can insert, admins can manage
- **email_campaigns**: Authenticated users can manage

#### Admin-Only Tables
- **portal_config**: Only admin role access
- **auth_audit_logs**: Admin view, system insert
- **client_groups**: Admin manage, users view assigned groups

### Authentication Flow
1. **Magic Link Request** → Generate token in `magic_link_tokens`
2. **Email Verification** → Validate token, create/update `portal_users`
3. **Session Management** → Use Supabase Auth with custom claims
4. **Audit Logging** → Track all auth events in `auth_audit_logs`

---

## Integration Architecture

### Supabase Integration (`/integrations/supabase/`)
- **Client**: Configured with RLS and custom policies
- **Types**: Auto-generated TypeScript definitions
- **Edge Functions**: Email campaigns, AI agent generation
- **Storage**: Document and image management

### Email System (Resend)
- **Transactional**: Magic links, confirmations
- **Marketing**: Newsletter campaigns, blog notifications
- **Templates**: Reusable HTML/text templates
- **Rate Limiting**: Prevent abuse and spam

### AI Integrations
- **OpenAI API**: Conversation flow generation, content analysis
- **Retell AI**: Voice agent management and assignment
- **Custom Models**: Bias detection and performance testing

### External Services
- **HubSpot**: Contact form integration
- **Analytics**: Custom tracking and reporting
- **CDN**: Image optimization and delivery

---

## Performance Considerations

### Frontend Optimization
- **Code Splitting**: Route-based lazy loading
- **Image Optimization**: WebP format, lazy loading
- **Bundle Size**: Tree shaking, minimal dependencies
- **Caching**: Service worker for static assets

### Database Optimization
- **Indexing**: Strategic indexes on frequently queried columns
- **Connection Pooling**: Supabase managed connections
- **Query Optimization**: Efficient RLS policy design
- **Data Types**: Appropriate column types and constraints

### API Performance
- **Edge Functions**: Geographically distributed processing
- **Rate Limiting**: Prevent abuse and ensure availability
- **Caching**: Strategic caching of frequently accessed data
- **Monitoring**: Performance tracking and alerting

---

## Development Patterns

### State Management
- **Local State**: useState for component-specific data
- **Server State**: React Query for API interactions
- **Form State**: React Hook Form with Zod validation
- **Global State**: Context API for theme, auth status

### Error Handling
- **Frontend**: Error boundaries and toast notifications
- **Backend**: Comprehensive try/catch with logging
- **Validation**: Zod schemas for type-safe data validation
- **Monitoring**: Error tracking and alerting

### Testing Strategy
- **Unit Tests**: Component and utility function testing
- **Integration Tests**: API and database interaction testing
- **E2E Tests**: User workflow testing
- **Performance Tests**: Load testing for critical paths