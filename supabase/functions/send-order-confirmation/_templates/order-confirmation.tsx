import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from 'npm:@react-email/components@0.0.22';
import * as React from 'npm:react@18.3.1';

interface OrderConfirmationEmailProps {
  orderNumber: string;
  customerEmail: string;
  courses: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  currency: string;
  orderDate: string;
}

export const OrderConfirmationEmail = ({
  orderNumber,
  customerEmail,
  courses,
  totalAmount,
  currency,
  orderDate,
}: OrderConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>Your WhitegloveAI Training Order Confirmation - {orderNumber}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={purpleBar} />
        <Section style={logoSection}>
          <Img
            src="https://84d297c6-114c-4cb6-a6bc-83e359f1d6cb.lovableproject.com/lovable-uploads/cbc85045-41f1-434b-a70d-69aca08e4e66.png"
            width="300"
            alt="WhitegloveAI"
            style={logo}
          />
        </Section>
        <Heading style={h1}>Order Confirmation</Heading>
        
        <Text style={text}>
          Thank you for your order! We're excited to help you on your AI training journey.
        </Text>

        <Section style={orderBox}>
          <Text style={orderLabel}>Order Number</Text>
          <Text style={orderNumber}>{orderNumber}</Text>
          <Text style={orderDate}>Order Date: {orderDate}</Text>
        </Section>

        <Section style={section}>
          <Heading style={h2}>Order Details</Heading>
          {courses.map((course, index) => (
            <div key={index} style={courseItem}>
              <Text style={courseName}>{course.name}</Text>
              <Text style={courseDetails}>
                Quantity: {course.quantity} × ${(course.price / 100).toFixed(2)}
              </Text>
            </div>
          ))}
          <Hr style={hr} />
          <Text style={total}>
            Total: ${(totalAmount / 100).toFixed(2)} {currency}
          </Text>
        </Section>

        <Section style={section}>
          <Heading style={h2}>What's Next?</Heading>
          <Text style={text}>
            ✓ You will receive a confirmation email at: <strong>{customerEmail}</strong>
          </Text>
          <Text style={text}>
            ✓ Our training team will contact you within 24 hours
          </Text>
          <Text style={text}>
            ✓ You'll receive access instructions for your course materials
          </Text>
          <Text style={text}>
            ✓ Your AICerts training portal credentials will be sent via email by a WhitegloveAI team member
          </Text>
        </Section>

        <Hr style={hr} />

        <Text style={footer}>
          This is an automated order confirmation. Your AICerts portal access will be provided separately by our training team.
        </Text>

        <Text style={footer}>
          <Link href="https://whitegloveai.com" style={link}>
            WhitegloveAI
          </Link>
          {' '}- Transforming Organizations Through AI Excellence
        </Text>
      </Container>
    </Body>
  </Html>
);

export default OrderConfirmationEmail;

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

const h1 = {
  color: '#333',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0 40px',
};

const h2 = {
  color: '#333',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '20px 0 10px',
};

const text = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '16px 0',
};

const orderBox = {
  backgroundColor: '#f0f4ff',
  border: '2px solid #6366f1',
  borderRadius: '8px',
  padding: '24px',
  margin: '32px 40px',
};

const orderLabel = {
  color: '#6366f1',
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'uppercase' as const,
  margin: '0 0 8px 0',
};

const orderNumber = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 8px 0',
};

const orderDate = {
  color: '#666',
  fontSize: '14px',
  margin: '0',
};

const section = {
  padding: '0 40px',
};

const courseItem = {
  marginBottom: '16px',
};

const courseName = {
  color: '#333',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0 0 4px 0',
};

const courseDetails = {
  color: '#666',
  fontSize: '14px',
  margin: '0',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const total = {
  color: '#333',
  fontSize: '18px',
  fontWeight: 'bold',
  textAlign: 'right' as const,
  margin: '16px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0 40px',
  margin: '16px 0',
};

const link = {
  color: '#6366f1',
  textDecoration: 'underline',
};

const purpleBar = {
  backgroundColor: '#8B5CF6',
  height: '8px',
  width: '100%',
};

const logoSection = {
  padding: '20px 40px',
  textAlign: 'center' as const,
};

const logo = {
  margin: '0 auto',
};
