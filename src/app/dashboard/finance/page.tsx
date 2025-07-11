import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  Building,
  Users,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  RefreshCw,
  Download,
  Upload,
  PiggyBank,
  Receipt
} from 'lucide-react';

export default function FinanceDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Financial Back Office</h1>
          <p className="text-muted-foreground">
            Real-time financial management with QuickBooks, Dwolla & Plaid
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Sync All
          </Button>
          <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            QuickBooks Synced
          </Badge>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">$847,320</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding Rent</CardTitle>
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
            <CardTitle className="text-sm font-medium">Operating Expenses</CardTitle>
            <Receipt className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$234,890</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingDown className="w-3 h-3 mr-1" />
              -3.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Operating Income</CardTitle>
            <PiggyBank className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">$612,430</div>
            <p className="text-xs text-muted-foreground">
              72.3% NOI margin
            </p>
          </CardContent>
        </Card>
      </div>

      {/* ACH Transactions & Payments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Upload className="w-5 h-5 mr-2" />
                Recent ACH Transactions
              </span>
              <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                Dwolla Connected
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-semibold">Rent Payment - Unit 4B</p>
                    <p className="text-sm text-muted-foreground">Sarah Johnson</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-500">+$2,850</p>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-semibold">Rent Payment - Unit 7A</p>
                    <p className="text-sm text-muted-foreground">Michael Chen</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-500">+$3,200</p>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="font-semibold">Rent Payment - Unit 12C</p>
                    <p className="text-sm text-muted-foreground">David Wilson</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-yellow-500">+$2,950</p>
                  <p className="text-xs text-muted-foreground">Processing</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="font-semibold">Payment Failed - Unit 3F</p>
                    <p className="text-sm text-muted-foreground">Jennifer Lopez</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-red-500">$2,750</p>
                  <p className="text-xs text-muted-foreground">NSF</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Bank Account Status
              </span>
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                Plaid Connected
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">Primary Operating Account</h4>
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  Active
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Wells Fargo - ****7823</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Available Balance:</span>
                  <span className="font-semibold text-green-500">$287,450.32</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Pending Deposits:</span>
                  <span className="font-semibold">$45,230.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Scheduled Payments:</span>
                  <span className="font-semibold text-red-500">-$12,890.50</span>
                </div>
              </div>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">Security Deposit Account</h4>
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  Active
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Chase Bank - ****4561</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Available Balance:</span>
                  <span className="font-semibold text-green-500">$156,780.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Interest Earned (YTD):</span>
                  <span className="font-semibold text-green-500">+$2,340.75</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* QuickBooks Integration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              QuickBooks Integration Status
            </span>
            <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
              Auto-Sync Enabled
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Recent Sync Activity</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Rent receipts synced (247 items)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Expense entries updated (18 items)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Chart of accounts synced</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">Pending: Security deposits (3 items)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Property P&L Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Gross Rental Income:</span>
                  <span className="font-semibold text-green-500">$847,320</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Operating Expenses:</span>
                  <span className="font-semibold text-red-500">-$234,890</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Net Operating Income:</span>
                  <span className="font-semibold text-blue-500">$612,430</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-sm">NOI Margin:</span>
                  <span className="font-semibold">72.3%</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Cost Center Breakdown</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Building 1:</span>
                  <span className="font-semibold">$45,230</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Building 7:</span>
                  <span className="font-semibold">$67,890</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Building 12:</span>
                  <span className="font-semibold">$52,340</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Common Areas:</span>
                  <span className="font-semibold">$23,450</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Rent Collection Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">On-Time Payments</span>
                <span className="text-sm font-semibold text-green-500">94.2%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '94.2%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Late Payments (1-30 days)</span>
                <span className="text-sm font-semibold text-yellow-500">4.1%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '4.1%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Delinquent (30+ days)</span>
                <span className="text-sm font-semibold text-red-500">1.7%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{width: '1.7%'}}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Expense Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Maintenance & Repairs</span>
                <span className="text-sm font-semibold">$89,450</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '38%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Utilities</span>
                <span className="text-sm font-semibold">$67,230</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '29%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Insurance</span>
                <span className="text-sm font-semibold">$45,670</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '19%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Management Fees</span>
                <span className="text-sm font-semibold">$32,540</span>
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
          <Download className="w-5 h-5 mb-2" />
          Export Reports
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <FileText className="w-5 h-5 mb-2" />
          Generate Invoices
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <CreditCard className="w-5 h-5 mb-2" />
          Payment Processing
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <TrendingUp className="w-5 h-5 mb-2" />
          Financial Forecasting
        </Button>
      </div>
    </div>
  );
}
