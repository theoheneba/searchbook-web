"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cookie, 
  Settings, 
  BarChart3, 
  Shield, 
  Eye, 
  Trash2, 
  ArrowLeft,
  CheckCircle2,
  Info,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export default function CookiePolicy() {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: Shield,
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
      icon: BarChart3,
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
      icon: Settings,
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
      icon: Eye,
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <Button variant="ghost" size="sm" className="group-hover:bg-amber-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center">
                <Cookie className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Cookie Policy
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="border-amber-200 text-amber-700 bg-amber-50 mb-6">
            <Cookie className="w-3 h-3 mr-1" />
            Cookie Information
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We use cookies to enhance your experience on Searchbook. This policy explains 
            what cookies we use, why we use them, and how you can manage your preferences.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>Last updated: January 2024</span>
            <span>•</span>
            <span>Effective: January 1, 2024</span>
          </div>
        </div>
      </section>

      {/* What are Cookies */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What are Cookies?</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us remember your preferences, understand how you use our site, and provide 
                you with a better, more personalized experience. Cookies cannot harm your device or files.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
            <p className="text-xl text-gray-600">
              Different cookies serve different purposes on our platform
            </p>
          </div>

          <div className="grid gap-8">
            {cookieTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <type.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                        <p className="text-gray-600">{type.description}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={type.canDisable ? "outline" : "default"}
                      className={type.canDisable ? "border-amber-200 text-amber-700 bg-amber-50" : "bg-green-100 text-green-700 border-green-200"}
                    >
                      {type.canDisable ? "Optional" : "Required"}
                    </Badge>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {type.canDisable && (
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">
                        You can disable these cookies in your browser settings
                      </span>
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4 mr-2" />
                        Manage
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cookie Management */}
          <Card className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Manage Your Cookie Preferences</h2>
                <p className="text-purple-100 mb-6 text-lg">
                  You have control over which cookies you accept. You can change your preferences at any time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50">
                    <Settings className="w-4 h-4 mr-2" />
                    Cookie Settings
                  </Button>
                  <Button variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear All Cookies
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Browser Instructions */}
          <Card className="mt-8 border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">Browser Cookie Controls</h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Most browsers allow you to control cookies through their settings. You can usually find 
                    these options in the "Privacy" or "Security" section of your browser preferences. 
                    Note that disabling certain cookies may affect website functionality.
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