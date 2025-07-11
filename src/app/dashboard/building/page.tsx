import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Building,
  Thermometer,
  Wind,
  Droplets,
  Power,
  Lock,
  Camera,
  Wrench,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  Activity,
  Lightbulb,
  RefreshCw,
  Settings,
  Calendar
} from 'lucide-react';

export default function BuildingDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Building Automation</h1>
          <p className="text-muted-foreground">
            HVAC, access control, and predictive maintenance management
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Sync Systems
          </Button>
          <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            All Systems Online
          </Badge>
        </div>
      </div>

      {/* Building Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">HVAC Systems</CardTitle>
            <Thermometer className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">48/52</div>
            <p className="text-xs text-muted-foreground">
              Systems operational
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Energy Usage</CardTitle>
            <Power className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847 kWh</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingDown className="w-3 h-3 mr-1 text-green-500" />
              -8.2% vs yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Access Points</CardTitle>
            <Lock className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">267/270</div>
            <p className="text-xs text-muted-foreground">
              Active access points
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance Alerts</CardTitle>
            <Wrench className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">7</div>
            <p className="text-xs text-muted-foreground">
              Requiring attention
            </p>
          </CardContent>
        </Card>
      </div>

      {/* HVAC Control Center */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Thermometer className="w-5 h-5 mr-2" />
            HVAC Control Center
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Building 1 - Downtown</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Temperature</span>
                  </div>
                  <span className="font-semibold">72°F</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Droplets className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Humidity</span>
                  </div>
                  <span className="font-semibold">45%</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Wind className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Air Quality</span>
                  </div>
                  <span className="font-semibold">Good</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Building 7 - Midtown</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="w-4 h-4 text-red-500" />
                    <span className="text-sm">Temperature</span>
                  </div>
                  <span className="font-semibold text-red-500">78°F</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Droplets className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Humidity</span>
                  </div>
                  <span className="font-semibold">62%</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Wind className="w-4 h-4 text-red-500" />
                    <span className="text-sm">Air Quality</span>
                  </div>
                  <span className="font-semibold text-red-500">Poor</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Building 12 - Uptown</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Temperature</span>
                  </div>
                  <span className="font-semibold">71°F</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Droplets className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Humidity</span>
                  </div>
                  <span className="font-semibold">42%</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Wind className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Air Quality</span>
                  </div>
                  <span className="font-semibold">Excellent</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Predictive Maintenance Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Wrench className="w-5 h-5 mr-2" />
            Predictive Maintenance Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <div>
                  <h4 className="font-semibold text-red-500">HVAC Unit 7B-3 - Critical</h4>
                  <p className="text-sm text-muted-foreground">Compressor showing signs of failure - 3 days to predicted failure</p>
                  <p className="text-xs text-muted-foreground">AI Confidence: 94%</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="destructive">Critical</Badge>
                <Button size="sm">Schedule Service</Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-500" />
                <div>
                  <h4 className="font-semibold text-yellow-500">Elevator 1 - Maintenance Due</h4>
                  <p className="text-sm text-muted-foreground">Regular maintenance overdue by 2 weeks</p>
                  <p className="text-xs text-muted-foreground">Last service: March 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-yellow-500/20 text-yellow-500">Overdue</Badge>
                <Button size="sm" variant="outline">Schedule</Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <Lightbulb className="w-5 h-5 text-orange-500" />
                <div>
                  <h4 className="font-semibold text-orange-500">LED Lighting System - Building 12</h4>
                  <p className="text-sm text-muted-foreground">15 fixtures showing degraded performance</p>
                  <p className="text-xs text-muted-foreground">Expected failure within 30 days</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-orange-500/20 text-orange-500">Warning</Badge>
                <Button size="sm" variant="outline">Plan Replacement</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Access Control & Security */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Main Entrances (24)</span>
              </div>
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                All Secure
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Parking Garages (12)</span>
              </div>
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                Secure
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">Emergency Exits (8)</span>
              </div>
              <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                1 Alert
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Service Areas (16)</span>
              </div>
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                Restricted
              </Badge>
            </div>

            <div className="pt-4 border-t">
              <h5 className="font-semibold mb-2">Recent Activity</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Badge scans today:</span>
                  <span className="font-semibold">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span>Failed attempts:</span>
                  <span className="font-semibold text-red-500">12</span>
                </div>
                <div className="flex justify-between">
                  <span>After-hours access:</span>
                  <span className="font-semibold">156</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Camera className="w-5 h-5 mr-2" />
              Video Security System
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="text-2xl font-bold text-green-500">284</div>
                <div className="text-xs text-muted-foreground">Cameras Online</div>
              </div>

              <div className="text-center p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <div className="text-2xl font-bold text-red-500">3</div>
                <div className="text-xs text-muted-foreground">Cameras Offline</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">AI Motion Detection</span>
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  Active
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Facial Recognition</span>
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  Enabled
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">License Plate Recognition</span>
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  Active
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Recording Storage</span>
                <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                  78% Full
                </Badge>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h5 className="font-semibold mb-2">AI Alerts Today</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Unauthorized access attempts:</span>
                  <span className="font-semibold text-red-500">3</span>
                </div>
                <div className="flex justify-between">
                  <span>Suspicious behavior detected:</span>
                  <span className="font-semibold text-yellow-500">7</span>
                </div>
                <div className="flex justify-between">
                  <span>Motion in restricted areas:</span>
                  <span className="font-semibold text-orange-500">2</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Energy Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Power className="w-5 h-5 mr-2" />
            Energy Management Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold">Current Usage</h4>
              <div className="text-2xl font-bold">2,847 kWh</div>
              <div className="text-sm text-muted-foreground flex items-center">
                <TrendingDown className="w-3 h-3 mr-1 text-green-500" />
                8.2% below average
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Peak Demand</h4>
              <div className="text-2xl font-bold">3,245 kW</div>
              <div className="text-sm text-muted-foreground">
                At 2:30 PM today
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Cost Today</h4>
              <div className="text-2xl font-bold text-green-500">$342.15</div>
              <div className="text-sm text-muted-foreground flex items-center">
                <TrendingDown className="w-3 h-3 mr-1 text-green-500" />
                $28.50 savings
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Carbon Footprint</h4>
              <div className="text-2xl font-bold">1.4 tons CO₂</div>
              <div className="text-sm text-muted-foreground">
                Today's emissions
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button variant="outline" className="h-16 flex-col">
          <Settings className="w-5 h-5 mb-2" />
          System Controls
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <Calendar className="w-5 h-5 mb-2" />
          Maintenance Schedule
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <Activity className="w-5 h-5 mb-2" />
          Energy Reports
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <Camera className="w-5 h-5 mb-2" />
          Security Footage
        </Button>
      </div>
    </div>
  );
}
