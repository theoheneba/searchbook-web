// API utility functions for fetching dynamic content

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  faqs: FAQ[];
}

export interface PrivacyPolicySection {
  id: string;
  title: string;
  icon: string;
  content: string[];
}

export interface PrivacyPolicy {
  lastUpdated: string;
  effectiveDate: string;
  sections: PrivacyPolicySection[];
}

export interface TermsSection {
  id: string;
  title: string;
  icon: string;
  content: string[];
}

export interface TermsOfService {
  lastUpdated: string;
  effectiveDate: string;
  sections: TermsSection[];
}

export interface MobileApp {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  discount: string;
  icon: string;
  color: string;
  mockupImageUrl: string;
  googlePlayLink: string;
  appStoreLink: string;
}

// Base API URL - change this when your backend is ready
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// Generic API fetch function with error handling
async function apiRequest<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache control for better performance
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}

// FAQ API functions
export async function getFAQs(): Promise<FAQCategory[]> {
  return apiRequest<FAQCategory[]>('/faqs');
}

// Privacy Policy API functions
export async function getPrivacyPolicy(): Promise<PrivacyPolicy> {
  return apiRequest<PrivacyPolicy>('/privacy-policy');
}

// Terms of Service API functions
export async function getTermsOfService(): Promise<TermsOfService> {
  return apiRequest<TermsOfService>('/terms-of-service');
}

// Mobile Apps API functions
export async function getMobileApps(): Promise<MobileApp[]> {
  return apiRequest<MobileApp[]>('/mobile-apps');
}

// Cookie Policy API functions (if needed)
export interface CookiePolicy {
  lastUpdated: string;
  effectiveDate: string;
  cookieTypes: {
    title: string;
    icon: string;
    color: string;
    description: string;
    examples: string[];
    canDisable: boolean;
  }[];
}

export async function getCookiePolicy(): Promise<CookiePolicy> {
  return apiRequest<CookiePolicy>('/cookie-policy');
}