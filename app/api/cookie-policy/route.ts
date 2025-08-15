import { NextResponse } from 'next/server';

// Mock Cookie Policy data - replace with database queries when backend is ready
const mockCookiePolicy = {
  lastUpdated: "January 2024",
  effectiveDate: "January 1, 2024",
  cookieTypes: [
    {
      title: "Essential Cookies",
      icon: "Shield",
      color: "from-green-500 to-emerald-500",
      description: "Required for basic website functionality",
      examples: [
        "Authentication and login sessions",
        "Shopping cart and booking information",
        "Security and fraud prevention",
        "Basic website navigation"
      ],
      canDisable: false
    },
    {
      title: "Analytics Cookies",
      icon: "BarChart3",
      color: "from-blue-500 to-cyan-500",
      description: "Help us understand how you use our website",
      examples: [
        "Page views and user interactions",
        "Popular features and content",
        "Website performance metrics",
        "Error tracking and debugging"
      ],
      canDisable: true
    },
    {
      title: "Functional Cookies",
      icon: "Settings",
      color: "from-purple-500 to-pink-500",
      description: "Remember your preferences and settings",
      examples: [
        "Language and region preferences",
        "Theme and display settings",
        "Recently viewed services",
        "Saved search filters"
      ],
      canDisable: true
    },
    {
      title: "Marketing Cookies",
      icon: "Eye",
      color: "from-orange-500 to-red-500",
      description: "Used to show relevant advertisements",
      examples: [
        "Personalized service recommendations",
        "Targeted advertising campaigns",
        "Social media integration",
        "Cross-platform tracking"
      ],
      canDisable: true
    }
  ]
};

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return NextResponse.json(mockCookiePolicy);
  } catch (error) {
    console.error('Error fetching cookie policy:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cookie policy' },
      { status: 500 }
    );
  }
}