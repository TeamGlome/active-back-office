import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Building,
  PieChart,
  LineChart,
  Calendar,
  Download,
  RefreshCw,
  Target,
  Award,
  AlertCircle,
  CheckCircle,
  Clock,
  Activity
} from 'lucide-react';

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics & Reports</h1>
          <p className="text-muted-foreground">
            Comprehensive business intelligence and performance metrics
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Data
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Reports
          </Button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">$10.2M</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              +15.3% from last year
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Occupancy</CardTitle>
            <Building className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">98.5%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              +2.1% from last quarter
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Operating Income</CardTitle>
            <Target className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-500">$7.35M</div>
            <p className="text-xs text-muted-foreground">
              72.1% NOI margin
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tenant Satisfaction</CardTitle>
            <Award className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">4.7/5</div>
            <p className="text-xs text-muted-foreground">
              Based on 847 surveys
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Financial Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <LineChart className="w-5 h-5 mr-2" />
              Revenue Trend (Last 12 Months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between space-x-2">
              {[820, 890, 945, 980, 1020, 1150, 1080, 1200, 1350, 1280, 1420, 1680].map((value, index) => (
                <div key={index} className="flex-1 bg-gradient-to-t from-blue-500/20 to-blue-500 rounded-t"
                     style={{ height: `${(value / 1680) * 100}%` }}>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm">
                <span className="font-semibold text-green-500">+18.7%</span>
                <span className="text-muted-foreground"> growth YoY</span>
              </div>
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                Above Target
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChart className="w-5 h-5 mr-2" />
              Revenue Distribution by Property
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Building 1 - Downtown</span>
                </div>
                <span className="text-sm font-semibold">$3.2M (31%)</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '31%'}}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Building 7 - Midtown</span>
                </div>
                <span className="text-sm font-semibold">$2.8M (27%)</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '27%'}}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Building 12 - Uptown</span>
                </div>
                <span className="text-sm font-semibold">$2.4M (23%)</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{width: '23%'}}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Other Properties</span>
                </div>
                <span className="text-sm font-semibold">$1.8M (19%)</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '19%'}}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Operational Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            Operational Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Rent Collection
              </h4>
              <div className="text-2xl font-bold text-green-500">94.2%</div>
              <div className="text-sm text-muted-foreground">On-time collection rate</div>
              <div className="flex items-center space-x-2">
                <div className="w-full bg-muted rounded-full h-1">
                  <div className="bg-green-500 h-1 rounded-full" style={{width: '94.2%'}}></div>
                </div>
                <span className="text-xs">Target: 92%</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold flex items-center">
                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                Maintenance Response
              </h4>
              <div className="text-2xl font-bold text-blue-500">2.3 hrs</div>
              <div className="text-sm text-muted-foreground">Average response time</div>
              <div className="flex items-center space-x-2">
                <div className="w-full bg-muted rounded-full h-1">
                  <div className="bg-blue-500 h-1 rounded-full" style={{width: '76%'}}></div>
                </div>
                <span className="text-xs">Target: 4 hrs</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold flex items-center">
                <Users className="w-4 h-4 mr-2 text-purple-500" />
                Tenant Turnover
              </h4>
              <div className="text-2xl font-bold text-purple-500">8.5%</div>
              <div className="text-sm text-muted-foreground">Annual turnover rate</div>
              <div className="flex items-center space-x-2">
                <div className="w-full bg-muted rounded-full h-1">
                  <div className="bg-purple-500 h-1 rounded-full" style={{width: '85%'}}></div>
                </div>
                <span className="text-xs">Target: 10%</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-yellow-500" />
                Energy Efficiency
              </h4>
              <div className="text-2xl font-bold text-yellow-500">87%</div>
              <div className="text-sm text-muted-foreground">Efficiency score</div>
              <div className="flex items-center space-x-2">
                <div className="w-full bg-muted rounded-full h-1">
                  <div className="bg-yellow-500 h-1 rounded-full" style={{width: '87%'}}></div>
                </div>
                <span className="text-xs">Target: 85%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Insights & Predictions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="w-5 h-5 mr-2" />
            AI-Powered Business Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Revenue Forecast</h4>
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Next Quarter Projection</span>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                    +12.5%
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-green-500">$2.8M</div>
                <p className="text-sm text-muted-foreground">
                  Based on current trends and seasonal patterns
                </p>
              </div>

              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Occupancy Forecast</span>
                  <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                    Stable
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-blue-500">98.1%</div>
                <p className="text-sm text-muted-foreground">
                  Expected slight decrease due to seasonal moves
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Risk Analysis</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Market Rent Gap</span>
                  </div>
                  <span className="text-sm font-semibold">Medium Risk</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Collection Risk</span>
                  </div>
                  <span className="text-sm font-semibold">Low Risk</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span className="text-sm">Maintenance Backlog</span>
                  </div>
                  <span className="text-sm font-semibold">High Risk</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analytics Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <h4 className="font-semibold">Building 1 - Downtown</h4>
                  <p className="text-sm text-muted-foreground">99.2% occupancy • $3.2M revenue</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-500">ROI: 14.2%</div>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                    Excellent
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <h4 className="font-semibold">Building 12 - Uptown</h4>
                  <p className="text-sm text-muted-foreground">98.8% occupancy • $2.4M revenue</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-500">ROI: 12.8%</div>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                    Very Good
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <h4 className="font-semibold">Building 7 - Midtown</h4>
                  <p className="text-sm text-muted-foreground">97.5% occupancy • $2.8M revenue</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-500">ROI: 11.4%</div>
                  <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                    Good
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Expense Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Maintenance & Repairs</span>
                <div className="text-right">
                  <span className="text-sm font-semibold">$89,450</span>
                  <div className="text-xs text-red-500">+15% vs budget</div>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{width: '38%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Utilities</span>
                <div className="text-right">
                  <span className="text-sm font-semibold">$67,230</span>
                  <div className="text-xs text-green-500">-8% vs budget</div>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '29%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Insurance</span>
                <div className="text-right">
                  <span className="text-sm font-semibold">$45,670</span>
                  <div className="text-xs text-muted-foreground">On budget</div>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '19%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Management Fees</span>
                <div className="text-right">
                  <span className="text-sm font-semibold">$32,540</span>
                  <div className="text-xs text-green-500">-3% vs budget</div>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{width: '14%'}}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button variant="outline" className="h-16 flex-col">
          <BarChart3 className="w-5 h-5 mb-2" />
          Custom Reports
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <Calendar className="w-5 h-5 mb-2" />
          Schedule Reports
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <Download className="w-5 h-5 mb-2" />
          Export Data
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <Target className="w-5 h-5 mb-2" />
          Set Targets
        </Button>
      </div>
    </div>
  );
}
