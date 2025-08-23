# WhitegloveAI Troubleshooting Guide

## Authentication & Portal Issues

### Magic Link Authentication Problems

**Issue**: Magic link emails not being received
**Symptoms**: User requests magic link but email never arrives
**Solutions**:
1. Check email rate limits in `email_rate_limits` table
2. Verify Resend API key configuration
3. Check spam/junk folder
4. Verify email address format validation
5. Review edge function logs for send-email errors

**Issue**: Magic link token expired or invalid
**Symptoms**: "Invalid token" error when clicking magic link
**Solutions**:
1. Check token expiration in `magic_link_tokens` table
2. Verify token hasn't been used already (`used_at` field)
3. Ensure proper token generation in edge function
4. Check URL encoding issues in email template

**Issue**: Portal user not being created after successful magic link
**Symptoms**: User can authenticate but has no portal access
**Solutions**:
1. Verify `portal_users` table RLS policies
2. Check if user email confirmation is required
3. Review `auth_audit_logs` for creation events
4. Ensure proper user creation in authentication flow

### Role-Based Access Issues

**Issue**: Admin users can't access admin functions
**Symptoms**: 403 errors or missing admin UI elements
**Solutions**:
1. Verify user role in `portal_users` table
2. Check RLS policies for admin-specific tables
3. Confirm `current_setting('portal.current_user_email')` is set
4. Review admin role assignment process

**Issue**: Client group access problems
**Symptoms**: Users can't see assigned group resources
**Solutions**:
1. Check `client_group_memberships` table for user assignments
2. Verify group-specific RLS policies
3. Ensure proper group creation and assignment
4. Review `retell_agent_assignments` for group-specific agents

---

## Database & RLS Policy Issues

### Connection Problems

**Issue**: Database connection timeouts
**Symptoms**: Slow queries or connection errors
**Solutions**:
1. Check Supabase connection pool status
2. Review query performance and optimization
3. Monitor concurrent connection limits
4. Consider connection pooling configuration

**Issue**: RLS policy blocking legitimate access
**Symptoms**: Unexpected 403 errors on valid operations
**Solutions**:
1. Test policies in Supabase SQL editor
2. Review policy logic for edge cases
3. Check `auth.uid()` availability in context
4. Verify policy order and conflicts

### Data Integrity Issues

**Issue**: Foreign key constraint violations
**Symptoms**: Insert/update operations failing
**Solutions**:
1. Verify referenced records exist
2. Check cascade delete configurations
3. Review data migration scripts
4. Ensure proper transaction handling

**Issue**: Duplicate key violations
**Symptoms**: Unique constraint errors
**Solutions**:
1. Review unique index configurations
2. Check data import processes
3. Implement proper conflict resolution
4. Consider using `ON CONFLICT` clauses

---

## Frontend Component Issues

### Navigation Problems

**Issue**: Mobile menu not displaying correctly
**Symptoms**: Menu items missing or incorrectly styled
**Solutions**:
1. Check responsive breakpoint configurations
2. Verify mobile navigation component state
3. Review Tailwind CSS classes for mobile
4. Test across different device sizes

**Issue**: External links not working
**Symptoms**: Links to products or news not opening
**Solutions**:
1. Verify `navigationData.ts` external link configuration
2. Check `target="_blank"` and `rel="noopener"` attributes
3. Test link URLs manually
4. Review security policies blocking external navigation

### Form & Input Issues

**Issue**: Form validation not working
**Symptoms**: Invalid data being submitted
**Solutions**:
1. Check Zod schema definitions
2. Verify React Hook Form configuration
3. Review form submission handlers
4. Test validation rules individually

**Issue**: File upload failures
**Symptoms**: Documents not uploading to Supabase Storage
**Solutions**:
1. Check file size limits and MIME type restrictions
2. Verify Supabase Storage bucket policies
3. Review storage path configuration
4. Check user permissions for file operations

---

## Email & Campaign Issues

### Email Delivery Problems

**Issue**: Campaign emails not being sent
**Symptoms**: Campaigns show as sent but recipients don't receive emails
**Solutions**:
1. Check Resend API rate limits and quotas
2. Verify email template compilation
3. Review subscriber status (`active` vs `unsubscribed`)
4. Check email campaign edge function logs

**Issue**: Email templates rendering incorrectly
**Symptoms**: Broken layouts or missing content in emails
**Solutions**:
1. Test template compilation with sample data
2. Verify variable substitution in templates
3. Check HTML compatibility across email clients
4. Review CSS inline styling for email

### Subscription Management Issues

**Issue**: Unsubscribe process not working
**Symptoms**: Users still receiving emails after unsubscribing
**Solutions**:
1. Verify unsubscribe token generation and validation
2. Check `unsubscribe_requests` processing
3. Review subscriber status update logic
4. Test unsubscribe link generation

**Issue**: Double opt-in confirmation not working
**Symptoms**: Subscribers not getting confirmation emails
**Solutions**:
1. Check confirmation token generation
2. Verify email template for confirmation
3. Review confirmation link URL construction
4. Check subscriber status workflow

---

## AI Integration Issues

### OpenAI API Problems

**Issue**: Conversation flow generation failing
**Symptoms**: 500 errors from generate-agent-flow edge function
**Solutions**:
1. Verify OpenAI API key configuration
2. Check API rate limits and quotas
3. Review prompt construction and validation
4. Test with simplified prompts

**Issue**: Model testing interface not working
**Symptoms**: Test results not being saved or displayed
**Solutions**:
1. Check `tests` and `model_results` table permissions
2. Verify test execution edge function
3. Review bias score calculation logic
4. Check threshold comparison algorithms

### Retell AI Integration Issues

**Issue**: Agent assignments not working
**Symptoms**: Users can't access assigned voice agents
**Solutions**:
1. Verify `retell_agent_assignments` table data
2. Check Retell API integration configuration
3. Review group-based agent assignment logic
4. Test agent creation and assignment flow

---

## Performance Issues

### Slow Page Load Times

**Issue**: Homepage loading slowly
**Symptoms**: Long time to first contentful paint
**Solutions**:
1. Optimize image sizes and formats (WebP)
2. Implement lazy loading for images
3. Review component rendering performance
4. Check for unnecessary API calls on mount

**Issue**: Database queries taking too long
**Symptoms**: API responses slow or timing out
**Solutions**:
1. Review query execution plans
2. Add appropriate database indexes
3. Optimize RLS policy performance
4. Consider query result caching

### Memory Usage Issues

**Issue**: High memory usage in browser
**Symptoms**: Browser becomes unresponsive
**Solutions**:
1. Check for memory leaks in useEffect hooks
2. Review component unmounting and cleanup
3. Optimize large data set rendering
4. Implement virtual scrolling for long lists

---

## Security Issues

### Authentication Bypass Attempts

**Issue**: Suspicious authentication activity
**Symptoms**: Multiple failed login attempts or unusual patterns
**Solutions**:
1. Review `auth_audit_logs` for patterns
2. Implement additional rate limiting
3. Consider IP-based blocking
4. Review magic link token security

**Issue**: Data exposure through RLS bypass
**Symptoms**: Users accessing unauthorized data
**Solutions**:
1. Audit all RLS policies thoroughly
2. Test policies with different user roles
3. Review policy logic for edge cases
4. Implement additional logging for sensitive operations

---

## Development Environment Issues

### Local Development Problems

**Issue**: Supabase local instance not starting
**Symptoms**: Docker containers failing to start
**Solutions**:
1. Check Docker daemon status
2. Verify port availability (54321, 54322, etc.)
3. Review Supabase CLI version compatibility
4. Clear Docker containers and restart

**Issue**: Type generation failing
**Symptoms**: TypeScript errors after schema changes
**Solutions**:
1. Run `supabase gen types` manually
2. Check database connectivity
3. Verify schema changes are applied
4. Restart TypeScript language server

### Build and Deployment Issues

**Issue**: Production build failing
**Symptoms**: Build process errors or warnings
**Solutions**:
1. Check for TypeScript errors
2. Verify all imports are correct
3. Review environment variable availability
4. Test build locally before deployment

**Issue**: Environment variable not accessible
**Symptoms**: Undefined values for configuration
**Solutions**:
1. Verify variable names start with `VITE_`
2. Check environment file configuration
3. Review variable usage in components
4. Confirm deployment environment setup

---

## Monitoring & Debugging Tools

### Supabase Dashboard
- **Auth**: Monitor user sessions and authentication events
- **Database**: Query performance and table statistics  
- **Storage**: File upload and access monitoring
- **Edge Functions**: Function logs and performance metrics

### Browser Developer Tools
- **Console**: JavaScript errors and warnings
- **Network**: API request/response monitoring
- **Performance**: Page load and rendering analysis
- **Application**: Local storage and session data

### Database Monitoring
```sql
-- Check RLS policy performance
EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM table_name;

-- Monitor connection usage
SELECT COUNT(*) FROM pg_stat_activity;

-- Review slow queries
SELECT query, mean_exec_time, calls 
FROM pg_stat_statements 
ORDER BY mean_exec_time DESC;
```

### Error Logging
- **Frontend**: Console errors and user feedback
- **Backend**: Edge function logs and database errors
- **Email**: Resend delivery status and bounce tracking
- **Authentication**: Audit log review and pattern analysis