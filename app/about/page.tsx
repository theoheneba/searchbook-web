"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Target, 
  Users, 
  Globe, 
  Award, 
  Lightbulb, 
  ArrowLeft,
  CheckCircle2,
  Star,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
  const values = [
    {
      title: "Customer First",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      description: "Every decision we make puts our customers' needs and satisfaction at the center."
    },
    {
      title: "Quality Service",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
      description: "We maintain the highest standards by vetting all service providers on our platform."
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      color: "from-blue-500 to-purple-500",
      description: "We continuously innovate to make service booking easier and more efficient."
    },
    {
      title: "Trust & Safety",
      icon: Shield,
      color: "from-green-500 to-teal-500",
      description: "Building a secure platform where users can transact with complete confidence."
    }
  ];

  const stats = [
    { label: "Happy Customers", value: "10,000+", icon: Users },
    { label: "Service Providers", value: "500+", icon: Target },
    { label: "Cities Covered", value: "15+", icon: Globe },
    { label: "Average Rating", value: "4.8/5", icon: Star }
  ];

  const team = [
    {
      name: "Kwame Asante",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
      description: "Visionary leader with 10+ years in tech and service industries"
    },
    {
      name: "Ama Osei",
      role: "CTO",
      image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
      description: "Tech expert passionate about building scalable platforms"
    },
    {
      name: "Kofi Mensah",
      role: "Head of Operations",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
      description: "Operations specialist ensuring smooth service delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <Button variant="ghost" size="sm" className="group-hover:bg-indigo-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50 mb-6">
            <Heart className="w-3 h-3 mr-1" />
            Our Story
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About Searchbook
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're on a mission to make life easier for everyone in Ghana by connecting 
            people with reliable, quality services at the tap of a button.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
              <p className="text-xl text-gray-600">
                The driving force behind everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-xl overflow-hidden relative bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <CardContent className="p-10">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-lg">
                          <Target className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">Our Mission</h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xl leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    To revolutionize how Ghanaians access services by creating a seamless, 
                    trustworthy platform that connects customers with verified professionals, 
                    making quality services accessible to everyone, everywhere.
                  </p>
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 w-0 transition-all duration-500 group-hover:w-full"></div>
                </CardContent>
              </Card>

              {/* Vision Card */}
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-xl overflow-hidden relative bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <CardContent className="p-10">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-lg">
                          <Lightbulb className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Our Vision</h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xl leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    To become Ghana's leading service marketplace, empowering millions of 
                    people to live better lives through instant access to reliable, 
                    affordable, and high-quality services.
                  </p>
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 w-0 transition-all duration-500 group-hover:w-full"></div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">
                The passionate people behind Searchbook
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <Badge variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50 mb-4">
                      {member.role}
                    </Badge>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
            Be part of Ghana's service revolution. Whether you're a customer looking for services 
            or a professional wanting to grow your business, we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
              <Zap className="w-5 h-5 mr-2" />
              Download App
            </Button>
            <Button variant="secondary" size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
              <Users className="w-5 h-5 mr-2" />
              Become a Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}