# Active Back Office

An AI-driven business operations platform designed for modern property management, financial automation, and intelligent building management. Active Back Office provides a unified dashboard for managing complex business operations with integrated third-party services and AI-powered insights.

![Active Back Office](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=400&q=80)

## 🚀 Features

### 🔐 Network Security Management
- **WatchGuard Integration**: Comprehensive network security monitoring and management
- Real-time threat detection and response
- Firewall configuration and policy management
- Security analytics and reporting

### 💰 Financial Back Office
- **QuickBooks Integration**: Seamless accounting and financial data synchronization
- **Dwolla Integration**: ACH payments and money transfers
- **Plaid Integration**: Bank account connectivity and transaction monitoring
- Automated invoicing and payment processing
- Financial reporting and analytics

### 🏢 Building Automation
- **Unifi Integration**: Network infrastructure management
- **Fiix Integration**: Maintenance management and work order tracking
- IoT device monitoring and control
- Energy management and optimization
- Preventive maintenance scheduling

### 👥 Tenant Management
- Comprehensive tenant profiles and lease management
- Maintenance request tracking
- Payment processing and rent collection
- Communication portal and notifications

### 🤖 AI Assistant
- Intelligent business insights and recommendations
- Automated workflow optimization
- Predictive analytics for maintenance and financial planning
- Natural language query interface

## 🛠 Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, pnpm, or bun package manager

## 🏃‍♂️ Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/TeamGlome/active-back-office.git
   cd active-back-office
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Environment Variables

Create a `.env.local` file in the root directory and add your environment variables:

```env
# WatchGuard API Configuration
WATCHGUARD_API_KEY=your_watchguard_api_key
WATCHGUARD_API_SECRET=your_watchguard_api_secret

# QuickBooks Integration
QUICKBOOKS_CLIENT_ID=your_quickbooks_client_id
QUICKBOOKS_CLIENT_SECRET=your_quickbooks_client_secret

# Dwolla Payment Processing
DWOLLA_KEY=your_dwolla_key
DWOLLA_SECRET=your_dwolla_secret

# Plaid Banking Integration
PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_secret

# Unifi Network Management
UNIFI_USERNAME=your_unifi_username
UNIFI_PASSWORD=your_unifi_password

# Fiix Maintenance Management
FIIX_API_KEY=your_fiix_api_key
```

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy Active Back Office is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. **Connect your GitHub repository to Vercel**
   - Sign up for a Vercel account at [vercel.com](https://vercel.com)
   - Click "New Project" and import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

2. **Configure environment variables**
   - In your Vercel dashboard, go to Project Settings > Environment Variables
   - Add all the required environment variables listed above

3. **Deploy**
   - Vercel will automatically deploy your application
   - Every push to the main branch will trigger a new deployment

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm run start
   ```

## 🏗 Project Structure

```
active-back-office/
 src/
   ├── app/                    # Next.js App Router pages
   │   ├── dashboard/          # Main dashboard layouts
   │   │   ├── ai/            # AI Assistant page
   │   │   ├── analytics/     # Analytics dashboard
   │   │   ├── building/      # Building management
   │   │   ├── finance/       # Financial management
   │   │   ├── security/      # Network security
   │   │   └── tenants/       # Tenant management
   │   ├── globals.css        # Global styles
   │   ├── layout.tsx         # Root layout
   │   └── page.tsx           # Landing page
   ├── components/            # Reusable UI components
   │   └── ui/               # shadcn/ui components
   └── lib/                  # Utility functions
 public/                   # Static assets
 next.config.js           # Next.js configuration
 tailwind.config.ts       # Tailwind CSS configuration
 tsconfig.json           # TypeScript configuration
 package.json            # Project dependencies
```

## 🔌 API Integrations

### Current Integration Status

- **WatchGuard**: Network security monitoring (Mock implementation)
- **QuickBooks**: Financial data synchronization (Mock implementation)
- **Dwolla**: Payment processing (Mock implementation)
- **Plaid**: Banking connectivity (Mock implementation)
- **Unifi**: Network management (Mock implementation)
- **Fiix**: Maintenance management (Mock implementation)

*Note: Current implementations include mock data and UI interfaces. Production integrations require valid API credentials and additional configuration.*

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 📞 Support

For support and questions, please contact [support@glome.team](mailto:support@glome.team).

---

**Active Back Office** - Streamlining business operations with AI-driven intelligence.
EOF  
cd /home/project && cd active-back-office && cat > README.md << 'EOF'
# Active Back Office

An AI-driven business operations platform designed for modern property management, financial automation, and intelligent building management. Active Back Office provides a unified dashboard for managing complex business operations with integrated third-party services and AI-powered insights.

![Active Back Office](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=400&q=80)

## 🚀 Features

### 🔐 Network Security Management
- **WatchGuard Integration**: Comprehensive network security monitoring and management
- Real-time threat detection and response
- Firewall configuration and policy management
- Security analytics and reporting

### 💰 Financial Back Office
- **QuickBooks Integration**: Seamless accounting and financial data synchronization
- **Dwolla Integration**: ACH payments and money transfers
- **Plaid Integration**: Bank account connectivity and transaction monitoring
- Automated invoicing and payment processing
- Financial reporting and analytics

### 🏢 Building Automation
- **Unifi Integration**: Network infrastructure management
- **Fiix Integration**: Maintenance management and work order tracking
- IoT device monitoring and control
- Energy management and optimization
- Preventive maintenance scheduling

### 👥 Tenant Management
- Comprehensive tenant profiles and lease management
- Maintenance request tracking
- Payment processing and rent collection
- Communication portal and notifications

### 🤖 AI Assistant
- Intelligent business insights and recommendations
- Automated workflow optimization
- Predictive analytics for maintenance and financial planning
- Natural language query interface

## 🛠 Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, pnpm, or bun package manager

## 🏃‍♂️ Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/TeamGlome/active-back-office.git
   cd active-back-office
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Environment Variables

Create a `.env.local` file in the root directory and add your environment variables:

```env
# WatchGuard API Configuration
WATCHGUARD_API_KEY=your_watchguard_api_key
WATCHGUARD_API_SECRET=your_watchguard_api_secret

# QuickBooks Integration
QUICKBOOKS_CLIENT_ID=your_quickbooks_client_id
QUICKBOOKS_CLIENT_SECRET=your_quickbooks_client_secret

# Dwolla Payment Processing
DWOLLA_KEY=your_dwolla_key
DWOLLA_SECRET=your_dwolla_secret

# Plaid Banking Integration
PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_secret

# Unifi Network Management
UNIFI_USERNAME=your_unifi_username
UNIFI_PASSWORD=your_unifi_password

# Fiix Maintenance Management
FIIX_API_KEY=your_fiix_api_key
```

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy Active Back Office is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. **Connect your GitHub repository to Vercel**
   - Sign up for a Vercel account at [vercel.com](https://vercel.com)
   - Click "New Project" and import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

2. **Configure environment variables**
   - In your Vercel dashboard, go to Project Settings > Environment Variables
   - Add all the required environment variables listed above

3. **Deploy**
   - Vercel will automatically deploy your application
   - Every push to the main branch will trigger a new deployment

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm run start
   ```

## 🏗 Project Structure

```
active-back-office/
 src/
   ├── app/                    # Next.js App Router pages
   │   ├── dashboard/          # Main dashboard layouts
   │   │   ├── ai/            # AI Assistant page
   │   │   ├── analytics/     # Analytics dashboard
   │   │   ├── building/      # Building management
   │   │   ├── finance/       # Financial management
   │   │   ├── security/      # Network security
   │   │   └── tenants/       # Tenant management
   │   ├── globals.css        # Global styles
   │   ├── layout.tsx         # Root layout
   │   └── page.tsx           # Landing page
   ├── components/            # Reusable UI components
   │   └── ui/               # shadcn/ui components
   └── lib/                  # Utility functions
 public/                   # Static assets
 next.config.js           # Next.js configuration
 tailwind.config.ts       # Tailwind CSS configuration
 tsconfig.json           # TypeScript configuration
 package.json            # Project dependencies
```

## 🔌 API Integrations

### Current Integration Status

- **WatchGuard**: Network security monitoring (Mock implementation)
- **QuickBooks**: Financial data synchronization (Mock implementation)
- **Dwolla**: Payment processing (Mock implementation)
- **Plaid**: Banking connectivity (Mock implementation)
- **Unifi**: Network management (Mock implementation)
- **Fiix**: Maintenance management (Mock implementation)

*Note: Current implementations include mock data and UI interfaces. Production integrations require valid API credentials and additional configuration.*

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 📞 Support

For support and questions, please contact [support@glome.team](mailto:support@glome.team).

---

**Active Back Office** - Streamlining business operations with AI-driven intelligence.
