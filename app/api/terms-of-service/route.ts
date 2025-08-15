import { NextResponse } from 'next/server';

// Mock Terms of Service data - replace with database queries when backend is ready
const mockTermsOfService = {
  lastUpdated: "January 2024",
  effectiveDate: "January 1, 2024",
  sections: [
    {
      id: "acceptance-terms",
      title: "Acceptance of Terms",
      icon: "UserCheck",
      content: [
        "By using Searchbook, you agree to these terms and conditions",
        "You must be at least 18 years old to use our services",
        "You are responsible for maintaining account security",
        "These terms may be updated periodically with notice"
      ]
    },
    {
      id: "service-usage",
      title: "Service Usage",
      icon: "FileText",
      content: [
        "Use services only for lawful purposes",
        "Provide accurate information when booking services",
        "Respect service providers and other users",
        "Do not misuse or attempt to hack the platform",
        "Report any issues or violations promptly"
      ]
    },
    {
      id: "payment-terms",
      title: "Payment Terms",
      icon: "CreditCard",
      content: [
        "All payments are processed securely through our platform",
        "Service fees are clearly displayed before booking",
        "Refunds are subject to our refund policy",
        "You are responsible for all charges on your account",
        "Disputed charges will be investigated fairly"
      ]
    },
    {
      id: "liability-disclaimers",
      title: "Liability & Disclaimers",
      icon: "AlertTriangle",
      content: [
        "Services are provided by independent third-party providers",
        "We facilitate connections but don't directly provide services",
        "Service quality is the responsibility of individual providers",
        "We maintain insurance coverage for platform-related issues",
        "Users should exercise reasonable care and judgment"
      ]
    },
    {
      id: "account-termination",
      title: "Account Termination",
      icon: "XCircle",
      content: [
        "Either party may terminate the account with notice",
        "We reserve the right to suspend accounts for violations",
        "Data will be retained according to our privacy policy",
        "Outstanding payments must be settled before termination",
        "Terminated users may appeal decisions through support"
      ]
    }
  ]
};

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return NextResponse.json(mockTermsOfService);
  } catch (error) {
    console.error('Error fetching terms of service:', error);
    return NextResponse.json(
      { error: 'Failed to fetch terms of service' },
      { status: 500 }
    );
  }
}