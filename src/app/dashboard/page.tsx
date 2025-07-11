import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Shield,
  DollarSign,
  Building,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowRight,
  Brain,
  Zap
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Real-time insights across all your business operations
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Brain className="w-4 h-4 mr-2" />
          AI Insights
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52</div>
            <p className="text-xs text-muted-foreground">
              +3 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$847K</div>
            <p className="text-xs text-muted-foreground">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tenants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
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
            <CardTitle className="text-sm font-medium">Security Score</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">
              +2% improvement
            </p>
          </CardContent>
        </Card>
      </div>

      {/* AI-Powered Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="w-5 h-5 text-primary mr-2" />
            AI-Powered Alerts & Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold text-red-500">Network Security Alert</h4>
              <p className="text-sm text-muted-foreground">
                Unusual traffic detected from Building 7 - Potential security threat identified
              </p>
              <Button size="sm" variant="outline" className="mt-2">
                Investigate <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold text-green-500">Rent Collection Optimization</h4>
              <p className="text-sm text-muted-foreground">
                AI predicts 98.7% collection rate this month - 3% above target
              </p>
              <Button size="sm" variant="outline" className="mt-2">
                View Details <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <Clock className="w-5 h-5 text-yellow-500 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold text-yellow-500">Predictive Maintenance</h4>
              <p className="text-sm text-muted-foreground">
                HVAC system in Building 3 requires attention within 7 days to prevent failure
              </p>
              <Button size="sm" variant="outline" className="mt-2">
                Schedule Service <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Access Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">New tenant application approved - Unit 4B</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">ACH payment processed - $2,850</p>
                <p className="text-xs text-muted-foreground">15 minutes ago</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">Security system armed - Building 12</p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">Maintenance request submitted - Unit 7A</p>
                <p className="text-xs text-muted-foreground">3 hours ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm">Network Security</span>
              </div>
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                Online
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-green-500" />
                <span className="text-sm">Financial Systems</span>
              </div>
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                Synced
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">Building Automation</span>
              </div>
              <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                Maintenance
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-green-500" />
                <span className="text-sm">Tenant Portal</span>
              </div>
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                Active
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button variant="outline" className="h-20 flex-col" asChild>
          <a href="/dashboard/security">
            <Shield className="w-6 h-6 mb-2" />
            Security Dashboard
          </a>
        </Button>

        <Button variant="outline" className="h-20 flex-col" asChild>
          <a href="/dashboard/finance">
            <DollarSign className="w-6 h-6 mb-2" />
            Financial Reports
          </a>
        </Button>

        <Button variant="outline" className="h-20 flex-col" asChild>
          <a href="/dashboard/building">
            <Building className="w-6 h-6 mb-2" />
            Building Controls
          </a>
        </Button>

        <Button variant="outline" className="h-20 flex-col" asChild>
          <a href="/dashboard/tenants">
            <Users className="w-6 h-6 mb-2" />
            Tenant Management
          </a>
        </Button>
      </div>
    </div>
  );
}
