import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Globe,
  Wifi,
  Monitor,
  Users,
  Activity,
  Eye,
  Lock,
  Unlock,
  AlertCircle,
  TrendingUp,
  RefreshCw
} from 'lucide-react';

export default function SecurityDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Network Security Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time monitoring with WatchGuard & Unifi integration
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            WatchGuard Connected
          </Badge>
        </div>
      </div>

      {/* Security Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Threat Level</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">Medium</div>
            <p className="text-xs text-muted-foreground">
              3 active threats detected
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blocked Attempts</CardTitle>
            <Shield className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">
              Last 24 hours
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Devices</CardTitle>
            <Monitor className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,847</div>
            <p className="text-xs text-muted-foreground">
              Across all properties
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network Uptime</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.8%</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Active Threats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
            Active Security Threats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <div>
                  <h4 className="font-semibold text-red-500">DDoS Attack Detected</h4>
                  <p className="text-sm text-muted-foreground">Building 7 - 192.168.7.0/24</p>
                  <p className="text-xs text-muted-foreground">Started: 2:34 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="destructive">High</Badge>
                <Button size="sm">Block IP</Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <div>
                  <h4 className="font-semibold text-yellow-500">Suspicious Login Activity</h4>
                  <p className="text-sm text-muted-foreground">Building 3 - Multiple failed attempts</p>
                  <p className="text-xs text-muted-foreground">Started: 1:15 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-yellow-500/20 text-yellow-500">Medium</Badge>
                <Button size="sm" variant="outline">Monitor</Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <Eye className="w-5 h-5 text-orange-500" />
                <div>
                  <h4 className="font-semibold text-orange-500">Malware Scan Alert</h4>
                  <p className="text-sm text-muted-foreground">Building 12 - Potentially infected device</p>
                  <p className="text-xs text-muted-foreground">Started: 12:45 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-orange-500/20 text-orange-500">Medium</Badge>
                <Button size="sm" variant="outline">Quarantine</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Network Traffic */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Network Traffic Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Inbound Traffic</span>
                <span className="text-sm font-semibold">847 GB/day</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Outbound Traffic</span>
                <span className="text-sm font-semibold">1.2 TB/day</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Blocked Traffic</span>
                <span className="text-sm font-semibold">23 GB/day</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{width: '15%'}}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Access Control */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="w-5 h-5 mr-2" />
              Access Control Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-green-500" />
                <span className="text-sm">Building Main Entrance</span>
              </div>
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                Secured
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Unlock className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">Parking Garage</span>
              </div>
              <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                Open Hours
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-green-500" />
                <span className="text-sm">Rooftop Access</span>
              </div>
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                Restricted
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-green-500" />
                <span className="text-sm">Server Room</span>
              </div>
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                Secured
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Property-Level Security Status */}
      <Card>
        <CardHeader>
          <CardTitle>Property Security Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">Building 1 - Downtown</h4>
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  Secure
                </Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cameras Active:</span>
                  <span className="text-green-500">24/24</span>
                </div>
                <div className="flex justify-between">
                  <span>Access Points:</span>
                  <span className="text-green-500">8/8</span>
                </div>
                <div className="flex justify-between">
                  <span>Network Health:</span>
                  <span className="text-green-500">98%</span>
                </div>
              </div>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">Building 7 - Midtown</h4>
                <Badge className="bg-red-500/10 text-red-500 border-red-500/20">
                  Alert
                </Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cameras Active:</span>
                  <span className="text-red-500">18/20</span>
                </div>
                <div className="flex justify-between">
                  <span>Access Points:</span>
                  <span className="text-green-500">6/6</span>
                </div>
                <div className="flex justify-between">
                  <span>Network Health:</span>
                  <span className="text-yellow-500">76%</span>
                </div>
              </div>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">Building 12 - Uptown</h4>
                <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                  Warning
                </Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cameras Active:</span>
                  <span className="text-green-500">16/16</span>
                </div>
                <div className="flex justify-between">
                  <span>Access Points:</span>
                  <span className="text-yellow-500">4/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Network Health:</span>
                  <span className="text-green-500">92%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button variant="outline" className="h-16 flex-col">
          <Shield className="w-5 h-5 mb-2" />
          View All Cameras
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <Lock className="w-5 h-5 mb-2" />
          Access Logs
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <AlertTriangle className="w-5 h-5 mb-2" />
          Security Reports
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <Activity className="w-5 h-5 mb-2" />
          Network Analysis
        </Button>
      </div>
    </div>
  );
}
