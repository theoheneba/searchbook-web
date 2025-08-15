import { NextResponse } from 'next/server';

// Mock FAQ data - replace with database queries when backend is ready
const mockFAQs = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: "HelpCircle",
    color: "from-blue-500 to-cyan-500",
    faqs: [
      {
        id: "create-account",
        question: "How do I create an account on Searchbook?",
        answer: "Download our app from Google Play Store or App Store, tap 'Sign Up', enter your phone number and email, verify with the OTP sent to your phone, and complete your profile. It's that simple!"
      },
      {
        id: "availability",
        question: "Is Searchbook available in my area?",
        answer: "We currently operate in 15+ cities across Ghana including Accra, Kumasi, Tamale, Cape Coast, and more. Check our app to see if we're available in your specific location."
      },
      {
        id: "first-booking",
        question: "How do I book my first service?",
        answer: "Open the app, browse service categories, select your needed service, choose a provider based on ratings and reviews, pick your preferred time slot, and make payment. You'll receive instant confirmation!"
      }
    ]
  },
  {
    id: "payments-pricing",
    title: "Payments & Pricing",
    icon: "CreditCard",
    color: "from-green-500 to-emerald-500",
    faqs: [
      {
        id: "payment-methods",
        question: "What payment methods do you accept?",
        answer: "We accept Mobile Money (MTN, Vodafone, AirtelTigo), Visa/Mastercard, bank transfers, and cash payments. All digital payments are processed securely with encryption."
      },
      {
        id: "hidden-fees",
        question: "Are there any hidden fees?",
        answer: "No hidden fees! All costs are displayed upfront before booking. You'll see the service fee, any applicable taxes, and total amount before confirming your booking."
      },
      {
        id: "escrow-system",
        question: "How does the escrow system work?",
        answer: "Your payment is held securely until service completion. Once you confirm satisfaction, payment is released to the provider. If there's an issue, we'll help resolve it before releasing funds."
      },
      {
        id: "refunds",
        question: "Can I get a refund if I'm not satisfied?",
        answer: "Yes! We have a satisfaction guarantee. If you're not happy with the service, contact us within 24 hours. We'll investigate and may provide a full refund or free re-service."
      }
    ]
  },
  {
    id: "service-providers",
    title: "Service Providers",
    icon: "Users",
    color: "from-purple-500 to-pink-500",
    faqs: [
      {
        id: "provider-verification",
        question: "How are service providers verified?",
        answer: "All providers undergo thorough background checks, identity verification, skill assessments, and reference checks. We also continuously monitor performance through customer reviews."
      },
      {
        id: "provider-no-show",
        question: "What if a provider doesn't show up?",
        answer: "If a provider is more than 15 minutes late without notice, you can cancel and get a full refund. We'll also help you rebook with another available provider immediately."
      },
      {
        id: "rating-review",
        question: "How do I rate and review a service provider?",
        answer: "After service completion, you'll receive a prompt to rate (1-5 stars) and write a review. Your feedback helps other customers and helps us maintain quality standards."
      }
    ]
  },
  {
    id: "safety-security",
    title: "Safety & Security",
    icon: "Shield",
    color: "from-orange-500 to-red-500",
    faqs: [
      {
        id: "data-safety",
        question: "Is my personal information safe?",
        answer: "Absolutely! We use bank-level encryption to protect your data. We never share personal information with third parties without your consent. Read our Privacy Policy for full details."
      },
      {
        id: "safety-measures",
        question: "What safety measures are in place?",
        answer: "All providers are background-checked, GPS tracking is enabled during services, we have 24/7 support, emergency contact features, and comprehensive insurance coverage."
      },
      {
        id: "emergency-support",
        question: "What if there's an emergency during service?",
        answer: "Use the emergency button in the app to contact our 24/7 support team immediately. We also have direct integration with local emergency services when needed."
      }
    ]
  }
];

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return NextResponse.json(mockFAQs);
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch FAQs' },
      { status: 500 }
    );
  }
}