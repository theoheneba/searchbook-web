import { NextResponse } from 'next/server';

// Mock Mobile Apps data - replace with database queries when backend is ready
const mockMobileApps = [
  {
    id: "user",
    title: "Book Any Service Instantly",
    subtitle: "For Customers",
    description: "Browse services, book instantly, pay securely, and track in real-time",
    features: ["Service browsing", "Instant booking", "Secure payments", "Real-time tracking"],
    discount: "Get 15% discount when you book on the app",
    icon: "Smartphone",
    color: "from-blue-500 to-blue-600",
    mockupImageUrl: "https://images.pexels.com/photos/39284/smartphone-screen-tech-internet-39284.jpeg?auto=compress&cs=tinysrgb&w=600",
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.searchbook.customer",
    appStoreLink: "https://apps.apple.com/us/app/searchbook-customer/id1234567890"
  },
  {
    id: "partner",
    title: "Grow Your Service Business",
    subtitle: "For Professionals",
    description: "Manage jobs, communicate with customers, generate invoices, and track earnings",
    features: ["Job management", "Customer communication", "Invoice generation", "Earnings tracking"],
    discount: "Join as a Partner",
    icon: "Users2",
    color: "from-green-500 to-green-600",
    mockupImageUrl: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.searchbook.professional",
    appStoreLink: "https://apps.apple.com/us/app/searchbook-professional/id0987654321"
  },
  {
    id: "courier",
    title: "Deliver & Earn Flexibly",
    subtitle: "For Riders",
    description: "Optimize routes, track deliveries, flexible scheduling, and instant payments",
    features: ["Route optimization", "Delivery tracking", "Flexible scheduling", "Instant payments"],
    discount: "Join as a Rider",
    icon: "Truck",
    color: "from-orange-500 to-orange-600",
    mockupImageUrl: "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600",
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.searchbook.courier",
    appStoreLink: "https://apps.apple.com/us/app/searchbook-courier/id1122334455"
  },
  {
    id: "vendor",
    title: "Manage Your Inventory Smart",
    subtitle: "For Vendors",
    description: "Control inventory, fulfill orders, access dashboard, and analyze sales",
    features: ["Inventory management", "Order fulfillment", "Vendor dashboard", "Sales analytics"],
    discount: "Become a Vendor",
    icon: "Package2",
    color: "from-purple-500 to-purple-600",
    mockupImageUrl: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=600",
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.searchbook.vendor",
    appStoreLink: "https://apps.apple.com/us/app/searchbook-vendor/id9988776655"
  }
];

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return NextResponse.json(mockMobileApps);
  } catch (error) {
    console.error('Error fetching mobile apps:', error);
    return NextResponse.json(
      { error: 'Failed to fetch mobile apps' },
      { status: 500 }
    );
  }
}