import { NextResponse } from 'next/server';

// Mock Privacy Policy data - replace with database queries when backend is ready
const mockPrivacyPolicy = {
  lastUpdated: "January 2024",
  effectiveDate: "January 1, 2024",
  sections: [
    {
      id: "info-collected",
      title: "Information We Collect",
      icon: "Database",
      content: [
        "Personal information (name, email, phone number)",
        "Location data for service delivery",
        "Payment information (processed securely)",
        "Service preferences and history",
        "Device information and usage analytics"
      ]
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      icon: "UserCheck",
      content: [
        "Provide and improve our services",
        "Process payments and transactions",
        "Send service updates and notifications",
        "Ensure platform security and safety",
        "Comply with legal requirements"
      ]
    },
    {
      id: "info-sharing",
      title: "Information Sharing",
      icon: "Eye",
      content: [
        "With service providers to fulfill your requests",
        "With payment processors for transactions",
        "With law enforcement when legally required",
        "We never sell your personal data to third parties",
        "Anonymous analytics data may be shared with partners"
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: "Lock",
      content: [
        "End-to-end encryption for sensitive data",
        "Regular security audits and updates",
        "Secure data centers with 24/7 monitoring",
        "Limited access to personal information",
        "Immediate breach notification procedures"
      ]
    }
  ]
};

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return NextResponse.json(mockPrivacyPolicy);
  } catch (error) {
    console.error('Error fetching privacy policy:', error);
    return NextResponse.json(
      { error: 'Failed to fetch privacy policy' },
      { status: 500 }
    );
  }
}