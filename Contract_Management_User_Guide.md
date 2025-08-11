# Staydia Sports Contract Management System
## User Guide for Co-Founders and Team Members

---

## Overview

This system allows you to create, send, and manage digital contracts with clients. All contracts are legally binding and include digital signature capabilities, email notifications, and complete audit trails.

---

## Getting Started

### 1. Accessing the System
- **URL**: [Your Contract Management Dashboard](https://your-app-url.com/contracts)
- **Login**: Use your company email and password
- If you don't have an account, contact the system administrator

### 2. Dashboard Overview
Once logged in, you'll see:
- **Total Contracts**: Count of all contracts created
- **Signed Contracts**: Successfully completed contracts
- **Pending Contracts**: Contracts awaiting signatures
- **Recent Contracts**: List of all your contracts with status indicators

---

## Creating Contract Templates

### Step 1: Access Template Management
1. Click **"Manage Templates"** button on the dashboard
2. This is where you create reusable contract templates

### Step 2: Create a New Template
1. Click **"New Template"**
2. Fill in the template details:
   - **Template Name**: e.g., "Club Partnership Agreement"
   - **Content**: Your contract text with variables like `{customer_name}`, `{customer_email}`, `{customer_company}`
   - **Terms & Conditions**: Additional legal terms
   - **Upload PDF** (optional): For complex contracts with formatting

### Step 3: Using Variables
Use these variables in your templates - they'll be automatically replaced:
- `{customer_name}` - Client's name
- `{customer_email}` - Client's email
- `{customer_company}` - Client's company name

**Example Template Content:**
```
STAYDIA SPORTS PARTNERSHIP AGREEMENT

This agreement is between Staydia Sports and {customer_name} ({customer_email}) representing {customer_company}.

1. SERVICES PROVIDED
Staydia Sports will provide live streaming services and AI-powered camera technology.

2. REVENUE SHARING
- Host clubs retain 70% of subscription revenue
- Staydia Sports retains 30% for technology and support

[Continue with your terms...]
```

---

## Creating and Sending Contracts

### Step 1: Create a New Contract
1. From the dashboard, click **"New Contract"**
2. Select your contract template
3. Fill in client information:
   - **Customer Name**: Full name of the person signing
   - **Customer Email**: Email where signing link will be sent
   - **Customer Company**: Their organization (optional)
   - **Expiration Date**: When the contract offer expires

### Step 2: Review and Save
1. Preview the contract with populated client information
2. Click **"Create Contract"** - this saves it as a draft

### Step 3: Send to Client
1. From your contracts dashboard, find the draft contract
2. Click **"Send Link"** button
3. Fill in the email form:
   - **Email Address**: Recipient's email (pre-filled)
   - **Name**: Recipient's name (optional)
   - **Personal Message**: Custom message to include in email
4. Click **"Send Contract Link"**

### Alternative: Copy Link
- Use **"Copy Link"** to get the signing URL
- Share this link directly via your preferred communication method

---

## Contract Status Guide

| Status | Meaning | Actions Available |
|--------|---------|-------------------|
| **Draft** | Contract created but not sent | Edit, Send, Delete, Copy Link |
| **Sent** | Email sent, awaiting signature | Resend, Copy Link, View |
| **Viewed** | Client opened the contract | View, Track progress |
| **Signed** | Successfully signed by client | View, Download |
| **Expired** | Contract expired unsigned | View only |

---

## Understanding the Signing Process

### What Clients See:
1. **Email Notification**: Clean, professional email with signing link
2. **Contract Review**: First 2 pages shown immediately for quick review
3. **Complete Document**: Full contract available in Terms & Conditions section
4. **Signature Options**: 
   - Draw signature with mouse/finger
   - Type name in signature font
5. **Terms Acceptance**: Required checkbox before signing
6. **Confirmation**: Success message after signing

### Security Features:
- ✅ Unique signing tokens (cannot be shared)
- ✅ IP address and browser tracking
- ✅ Timestamp verification
- ✅ Terms acceptance logging
- ✅ Signature validation

---

## Email Notifications

### When Contracts Are Sent:
- Client receives signing request email
- Includes contract overview and secure signing link
- Professional Staydia Sports branding

### When Contracts Are Signed:
**You receive notification with:**
- ✅ Signer details (name, email, company)
- ✅ Actual signature image (drawn) or typed signature
- ✅ Signing timestamp and IP address
- ✅ Link to view complete contract
- ✅ Next steps guidance

---

## Best Practices

### 1. Template Management
- Create specific templates for different contract types
- Use clear, professional language
- Include all necessary legal terms
- Test templates with dummy data first

### 2. Client Communication
- Always include a personal message when sending contracts
- Set reasonable expiration dates (typically 30-60 days)
- Follow up if contracts remain unsigned after a week

### 3. Organization
- Use consistent naming for customers and companies
- Check contract status regularly
- Download signed contracts for your records

### 4. Security
- Never share signing links publicly
- Verify signer identity before contract creation
- Keep your account credentials secure

---

## Troubleshooting

### Contract Not Received:
1. Check spam/junk folders
2. Verify email address is correct
3. Use "Copy Link" and send via alternative method

### Signing Issues:
1. Ensure browser is up to date
2. Clear browser cache and cookies
3. Try different browser or device

### Template Problems:
1. Verify variable syntax: `{customer_name}` not `{customername}`
2. Check for special characters that might break formatting
3. Test with sample data first

---

## Support and Contact

**For Technical Issues:**
- Email: info@staydiasports.com
- Include contract ID and description of problem

**For Legal Questions:**
- Consult with company legal team before creating new template types
- Ensure all contracts comply with local regulations

---

## Quick Reference Commands

| Task | Steps |
|------|-------|
| Create Template | Dashboard → Manage Templates → New Template |
| Create Contract | Dashboard → New Contract → Select Template → Fill Details |
| Send Contract | Find Draft → Send Link → Fill Email Form → Send |
| Check Status | Dashboard → View contract status badges |
| Resend Contract | Find Sent Contract → Send Link (again) |
| Delete Draft | Find Draft Contract → Delete Button → Confirm |

---

**Last Updated**: August 2025  
**Version**: 1.0  

*This system handles all aspects of contract management from creation to completion. When in doubt, check the dashboard for real-time status updates.*