import React from 'npm:react@18.3.1';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Button,
  Section,
  Hr,
} from 'npm:@react-email/components@0.0.22';

// Common styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const heading = {
  color: '#525f7f',
  fontSize: '28px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '30px 0',
};

const paragraph = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const button = {
  backgroundColor: '#8b5cf6',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
  padding: '12px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};

// Email Confirmation Template
interface ConfirmationEmailProps {
  supabase_url: string;
  email_action_type: string;
  redirect_to: string;
  token_hash: string;
  token: string;
}

export const ConfirmationEmail = ({
  token,
  supabase_url,
  email_action_type,
  redirect_to,
  token_hash,
}: ConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>Confirm your WhiteGlove AI Portal account</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Heading style={heading}>Welcome to WhiteGlove AI Portal</Heading>
          <Text style={paragraph}>
            Thank you for signing up! Please confirm your email address to activate your account.
          </Text>
          <Section style={{ textAlign: 'center', margin: '32px 0' }}>
            <Button
              href={`${supabase_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`}
              style={button}
            >
              Confirm Email Address
            </Button>
          </Section>
          <Text style={paragraph}>
            Or copy and paste this link in your browser:
          </Text>
          <Text style={{ ...paragraph, fontSize: '14px', wordBreak: 'break-all' }}>
            {`${supabase_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`}
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            If you didn't create an account with WhiteGlove AI Portal, you can safely ignore this email.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Magic Link Template
interface MagicLinkEmailProps {
  supabase_url: string;
  email_action_type: string;
  redirect_to: string;
  token_hash: string;
  token: string;
}

export const MagicLinkEmail = ({
  token,
  supabase_url,
  email_action_type,
  redirect_to,
  token_hash,
}: MagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>Your WhiteGlove AI Portal magic link</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Heading style={heading}>Sign in to WhiteGlove AI Portal</Heading>
          <Text style={paragraph}>
            Click the button below to securely sign in to your account. This link will expire in 24 hours.
          </Text>
          <Section style={{ textAlign: 'center', margin: '32px 0' }}>
            <Button
              href={`${supabase_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`}
              style={button}
            >
              Sign In to Portal
            </Button>
          </Section>
          <Text style={paragraph}>
            Or copy and paste this link in your browser:
          </Text>
          <Text style={{ ...paragraph, fontSize: '14px', wordBreak: 'break-all' }}>
            {`${supabase_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`}
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            If you didn't request this sign-in link, you can safely ignore this email.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Welcome Email Template
interface WelcomeEmailProps {
  email: string;
}

export const WelcomeEmail = ({ email }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to WhiteGlove AI Portal!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Heading style={heading}>Welcome to WhiteGlove AI Portal!</Heading>
          <Text style={paragraph}>
            Congratulations! Your account has been successfully confirmed and you're now part of the WhiteGlove AI community.
          </Text>
          <Text style={paragraph}>
            Your account ({email}) is now active and ready to use. You can access your portal at any time to:
          </Text>
          <Text style={paragraph}>
            • Access your personalized dashboard<br />
            • Manage your account settings<br />
            • Connect with our AI-powered services<br />
            • Get premium support when you need it
          </Text>
          <Section style={{ textAlign: 'center', margin: '32px 0' }}>
            <Button
              href={`${Deno.env.get('SUPABASE_URL')?.replace('/auth', '')}/portal`}
              style={button}
            >
              Access Your Portal
            </Button>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            Welcome aboard! We're excited to have you with us.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Password Reset Template
interface PasswordResetEmailProps {
  supabase_url: string;
  email_action_type: string;
  redirect_to: string;
  token_hash: string;
  token: string;
}

export const PasswordResetEmail = ({
  token,
  supabase_url,
  email_action_type,
  redirect_to,
  token_hash,
}: PasswordResetEmailProps) => (
  <Html>
    <Head />
    <Preview>Reset your WhiteGlove AI Portal password</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Heading style={heading}>Reset Your Password</Heading>
          <Text style={paragraph}>
            You've requested to reset your password for your WhiteGlove AI Portal account.
          </Text>
          <Section style={{ textAlign: 'center', margin: '32px 0' }}>
            <Button
              href={`${supabase_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`}
              style={button}
            >
              Reset Password
            </Button>
          </Section>
          <Text style={paragraph}>
            Or copy and paste this link in your browser:
          </Text>
          <Text style={{ ...paragraph, fontSize: '14px', wordBreak: 'break-all' }}>
            {`${supabase_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`}
          </Text>
          <Text style={paragraph}>
            This password reset link will expire in 1 hour for security reasons.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            If you didn't request a password reset, you can safely ignore this email.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);