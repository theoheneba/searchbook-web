"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Scale, 
  AlertTriangle, 
  UserCheck, 
  CreditCard, 
  Shield, 
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Info
} from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: UserCheck,
      content: [
        "By using Searchbook, you agree to these terms and conditions",
        "You must be at least 18 years old to use our services",
        "You are responsible for maintaining account security",
        "These terms may be updated periodically with notice"
      ]
    },
    {
      title: "Service Usage",
      icon: FileText,
      content: [
        "Use services only for lawful purposes",
        "Provide accurate information when booking services",
        "Respect service providers and other users",
        "Do not misuse or attempt to hack the platform",
        "Report any issues or violations promptly"
      ]
    },
    {
      title: "Payment Terms",
      icon: CreditCard,
      content: [
        "All payments are processed securely through our platform",
        "Service fees are clearly displayed before booking",
        "Refunds are subject to our refund policy",
        "You are responsible for all charges on your account",
        "Disputed charges will be investigated fairly"
      ]
    },
    {
      title: "Liability & Disclaimers",
      icon: AlertTriangle,
      content: [
        "Services are provided by independent third-party providers",
        "We facilitate connections but don't directly provide services",
        "Service quality is the responsibility of individual providers",
        "We maintain insurance coverage for platform-related issues",
        "Users should exercise reasonable care and judgment"
      ]
    },
    {
      title: "Account Termination",
      icon: XCircle,
      content: [
        "Either party may terminate the account with notice",
        "We reserve the right to suspend accounts for violations",
        "Data will be retained according to our privacy policy",
        "Outstanding payments must be settled before termination",
        "Terminated users may appeal decisions through support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <Button variant="ghost" size="sm" className="group-hover:bg-green-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Terms of Service
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50 mb-6">
            <Scale className="w-3 h-3 mr-1" />
            Legal Terms
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            These terms govern your use of Searchbook's platform and services. 
            Please read them carefully to understand your rights and responsibilities.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>Last updated: January 2024</span>
            <span>•</span>
            <span>Effective: January 1, 2024</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Important Notice */}
          <Card className="mt-12 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-white mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Important Notice</h2>
                  <p className="text-amber-100 mb-4 text-lg leading-relaxed">
                    By continuing to use Searchbook, you acknowledge that you have read, understood, 
                    and agree to be bound by these Terms of Service. If you do not agree with any 
                    part of these terms, please discontinue use of our platform.
                  </p>
                  <p className="text-amber-100 text-sm">
                    For questions about these terms, contact our legal team at legal@searchbook.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}