import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, DollarSign, Building, Users, Brain, BarChart3, Lock, Zap } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ABO</span>
              </div>
              <span className="font-sora font-bold text-xl text-foreground">Active Back Office</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#integrations" className="text-muted-foreground hover:text-foreground transition-colors">Integrations</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost">Login</Button>
              <Button asChild>
                <a href="/dashboard">Enter Portal</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh tech-grid"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Zap className="w-4 h-4 mr-2" />
              New: AI-Powered Property Management
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Transform Your Business with{" "}
              <span className="text-primary">AI-Driven Solutions</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              The modern way to power your business operations. Unlock Business Potential with Comprehensive AI-Driven Solutions and Industry-Leading Partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="/dashboard">
                  Enter Portal
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Properties Managed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">AI Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
                <div className="text-sm text-muted-foreground">Transactions Processed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Business Operations Platform</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All the business tools your team needs, powered by AI automation and seamless integrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Network Security</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time network analytics, threat detection, and multi-tenant security monitoring with WatchGuard and Unifi integration.
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Threat detection alerts</li>
                  <li>• Device monitoring</li>
                  <li>• Multi-tenant support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Financial Back Office</h3>
                <p className="text-muted-foreground mb-4">
                  AI-powered accounting with QuickBooks, Dwolla ACH processing, and real-time financial dashboards.
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• QuickBooks sync</li>
                  <li>• ACH transactions</li>
                  <li>• AI reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Building Automation</h3>
                <p className="text-muted-foreground mb-4">
                  HVAC, access control, video security, and maintenance scheduling with predictive AI analytics.
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Video security AI</li>
                  <li>• Access control</li>
                  <li>• Predictive maintenance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tenant & Rent Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Automated rent collection, tenant portals, and AI-generated reports for occupancy management.
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• ACH rent payments</li>
                  <li>• Tenant dashboards</li>
                  <li>• Delinquency AI</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Intelligence
              </Badge>
              <h2 className="text-4xl font-bold mb-6">Revolutionary AI-Powered Automation for Smart Business Operations</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Streamline Financial Management with Intelligent AI Solutions that predict, automate, and optimize your business operations.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <BarChart3 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Forecasting Dashboards</h4>
                    <p className="text-muted-foreground">AI predictions for energy, financials, and rent collection</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Brain className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Natural Language Queries</h4>
                    <p className="text-muted-foreground">Ask questions about your data in plain English</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Lock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Risk Scoring</h4>
                    <p className="text-muted-foreground">Automated risk assessment for network, rent, and maintenance</p>
                  </div>
                </div>
              </div>

              <Button className="mt-8" size="lg">
                Explore AI Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                    <span className="text-sm">Network Threat Detection</span>
                    <Badge variant="destructive">High Risk</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                    <span className="text-sm">Rent Collection Forecast</span>
                    <Badge variant="default" className="bg-green-600">98.5%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                    <span className="text-sm">HVAC Maintenance Alert</span>
                    <Badge variant="secondary">Due Soon</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                    <span className="text-sm">Financial Sync Status</span>
                    <Badge className="bg-primary text-primary-foreground">Active</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with industry-leading platforms and tools your team already uses
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">WatchGuard</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">QuickBooks</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Dwolla</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Plaid</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Unifi</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Fiix</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">And many more enterprise-grade integrations</p>
            <Button variant="outline">View All Integrations</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "Active Back Office has been a game-changer for our business. Their dedication to providing top-notch services and their deep understanding of our needs have made a significant impact. The personalized approach and commitment to excellence set them apart."
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Property Management Client</div>
                    <div className="text-sm text-muted-foreground">Commercial Real Estate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore Cutting-Edge AI Solutions for Business and Living Environment Enhancement with Active Back Office
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/dashboard">
                  Enter Portal
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>

            <p className="text-muted-foreground">
              <span className="font-semibold">Contact:</span> hello@activebackoffice.com | 212-300-5142
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">ABO</span>
                </div>
                <span className="font-sora font-bold text-lg">Active Back Office</span>
              </div>
              <p className="text-muted-foreground">
                Transform your business with AI-driven solutions and comprehensive automation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Network Security</li>
                <li>Financial Back Office</li>
                <li>Building Automation</li>
                <li>Tenant Management</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>AI Analytics</li>
                <li>Real-time Monitoring</li>
                <li>Predictive Maintenance</li>
                <li>Risk Assessment</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Active Back Office. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
