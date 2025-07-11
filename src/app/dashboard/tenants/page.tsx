import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  DollarSign,
  Home,
  Calendar,
  CreditCard,
  MessageSquare,
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Plus,
  Search,
  Filter,
  Download
} from 'lucide-react';

export default function TenantDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tenant Management</h1>
          <p className="text-muted-foreground">
            Comprehensive tenant portal and rent collection management
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Tenant
          </Button>
        </div>
      </div>

      {/* Tenant Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              98.5% occupancy rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rent Collection</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">94.2%</div>
            <p className="text-xs text-muted-foreground">
              On-time payment rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding Balance</CardTitle>
            <CreditCard className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">$23,480</div>
            <p className="text-xs text-muted-foreground">
              2.8% of total rent roll
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Service Requests</CardTitle>
            <MessageSquare className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">23</div>
            <p className="text-xs text-muted-foreground">
              Open maintenance requests
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Rent Payment Processing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="w-5 h-5 mr-2" />
            Real-Time Rent Payment Processing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <div>
                  <h4 className="font-semibold">Sarah Johnson - Unit 4B</h4>
                  <p className="text-sm text-muted-foreground">ACH Payment Completed</p>
                  <p className="text-xs text-muted-foreground">Transaction ID: ACH_7d8f9e2a1b</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-500 text-lg">$2,850.00</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <div>
                  <h4 className="font-semibold">Michael Chen - Unit 7A</h4>
                  <p className="text-sm text-muted-foreground">Credit Card Payment Processed</p>
                  <p className="text-xs text-muted-foreground">Transaction ID: CC_4a5b6c7d8e</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-500 text-lg">$3,200.00</p>
                <p className="text-xs text-muted-foreground">15 minutes ago</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-500" />
                <div>
                  <h4 className="font-semibold">David Wilson - Unit 12C</h4>
                  <p className="text-sm text-muted-foreground">ACH Payment Processing</p>
                  <p className="text-xs text-muted-foreground">Expected completion: 3-5 business days</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-yellow-500 text-lg">$2,950.00</p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <div>
                  <h4 className="font-semibold">Jennifer Lopez - Unit 3F</h4>
                  <p className="text-sm text-muted-foreground">Payment Failed - Insufficient Funds</p>
                  <p className="text-xs text-muted-foreground">Auto-retry scheduled for tomorrow</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-red-500 text-lg">$2,750.00</p>
                <Button size="sm" variant="outline" className="mt-1">
                  Contact Tenant
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tenant Portal Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tenant Portal Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Active Portal Users</span>
                <span className="text-sm font-semibold">89.3%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '89.3%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Mobile App Usage</span>
                <span className="text-sm font-semibold">67.8%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '67.8%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Auto-Pay Enrollment</span>
                <span className="text-sm font-semibold">78.4%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{width: '78.4%'}}></div>
              </div>

              <div className="pt-4 border-t space-y-2">
                <h5 className="font-semibold">Recent Activity</h5>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Login sessions today:</span>
                    <span className="font-semibold">847</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payments processed:</span>
                    <span className="font-semibold text-green-500">124</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service requests submitted:</span>
                    <span className="font-semibold">17</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lease Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Active Leases</span>
              </div>
              <span className="font-semibold">1,247</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">Expiring in 30 days</span>
              </div>
              <span className="font-semibold text-yellow-500">23</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <span className="text-sm">Expiring in 7 days</span>
              </div>
              <span className="font-semibold text-red-500">7</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Pending Renewals</span>
              </div>
              <span className="font-semibold">12</span>
            </div>

            <div className="pt-4 border-t">
              <h5 className="font-semibold mb-2">Upcoming Actions</h5>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Send renewal notices</span>
                  <Button size="sm" variant="outline">Schedule</Button>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Update lease terms</span>
                  <Button size="sm" variant="outline">Review</Button>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Market rent analysis</span>
                  <Button size="sm" variant="outline">Generate</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Tenant Communications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Recent Communications & Service Requests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 border border-border rounded-lg">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-blue-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">Service Request - Unit 8B</h4>
                  <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                    In Progress
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  "HVAC not working properly - making loud noises"
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Users className="w-3 h-3 mr-1" />
                  Maria Rodriguez
                  <span className="mx-2">•</span>
                  <Clock className="w-3 h-3 mr-1" />
                  2 hours ago
                </div>
              </div>
              <Button size="sm" variant="outline">Respond</Button>
            </div>

            <div className="flex items-start space-x-3 p-3 border border-border rounded-lg">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">Payment Confirmation - Unit 5A</h4>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                    Resolved
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  "Thank you for the quick response regarding my payment issue"
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Users className="w-3 h-3 mr-1" />
                  Robert Kim
                  <span className="mx-2">•</span>
                  <Clock className="w-3 h-3 mr-1" />
                  4 hours ago
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 border border-border rounded-lg">
              <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-red-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">Emergency Maintenance - Unit 3C</h4>
                  <Badge variant="destructive">
                    Urgent
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  "Water leak in kitchen ceiling - spreading to living room"
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Users className="w-3 h-3 mr-1" />
                  Amanda Thompson
                  <span className="mx-2">•</span>
                  <Clock className="w-3 h-3 mr-1" />
                  6 hours ago
                </div>
              </div>
              <Button size="sm" className="bg-red-500 hover:bg-red-600">Dispatch</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tenant Directory */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Tenant Directory</span>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-accent/50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Unit 4B - Building 1</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  Current
                </Badge>
                <div className="text-right text-sm">
                  <p className="font-semibold">$2,850/month</p>
                  <p className="text-muted-foreground">Lease expires: Dec 2024</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-accent/50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-muted-foreground">Unit 7A - Building 7</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  Current
                </Badge>
                <div className="text-right text-sm">
                  <p className="font-semibold">$3,200/month</p>
                  <p className="text-muted-foreground">Lease expires: Mar 2025</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-accent/50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Jennifer Lopez</h4>
                  <p className="text-sm text-muted-foreground">Unit 3F - Building 3</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                  Late Payment
                </Badge>
                <div className="text-right text-sm">
                  <p className="font-semibold">$2,750/month</p>
                  <p className="text-muted-foreground text-red-500">Payment overdue</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button variant="outline" className="h-16 flex-col">
          <Mail className="w-5 h-5 mb-2" />
          Send Notices
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <FileText className="w-5 h-5 mb-2" />
          Generate Reports
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <CreditCard className="w-5 h-5 mb-2" />
          Payment Portal
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <Calendar className="w-5 h-5 mb-2" />
          Lease Calendar
        </Button>
      </div>
    </div>
  );
}
