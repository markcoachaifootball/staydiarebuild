-- Add content to the existing contract template
UPDATE contract_templates 
SET 
  content = 'STAYDIA SPORTS CLUB AGREEMENT

This agreement is between Staydia Sports and {customer_name} ({customer_email}) representing {customer_company}.

1. SERVICES PROVIDED
Staydia Sports will provide live streaming services, AI-powered camera technology, and digital sports content management for your club facilities.

2. REVENUE SHARING
- Host clubs retain 70% of subscription revenue generated from their content
- Staydia Sports retains 30% for technology, support, and platform maintenance
- Monthly reports will be provided detailing viewership and revenue

3. EQUIPMENT
- Staydia Sports will provide all necessary camera equipment at no upfront cost
- Host club is responsible for basic maintenance and security of equipment
- Equipment remains property of Staydia Sports

4. CONTENT RIGHTS
- Host club retains rights to their game footage
- Staydia Sports has rights to use footage for platform promotion and highlights
- All content must comply with league and association broadcasting guidelines

5. TERM
This agreement shall commence upon signing and continue for an initial period of 12 months, with automatic renewal unless terminated by either party with 30 days written notice.

Customer Details:
Name: {customer_name}
Email: {customer_email}
Company: {customer_company}

By signing below, you agree to the terms outlined in this agreement.',
  terms_and_conditions = 'TERMS AND CONDITIONS

1. ACCEPTANCE OF TERMS
By signing this agreement, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.

2. PRIVACY AND DATA PROTECTION
- All personal data will be handled in accordance with GDPR and applicable privacy laws
- Game footage and statistics may be stored and processed for service delivery
- Customer contact information will not be shared with third parties without consent

3. LIABILITY
- Staydia Sports liability is limited to the value of services provided
- Host clubs are responsible for obtaining necessary permissions for streaming games
- Neither party shall be liable for indirect or consequential damages

4. FORCE MAJEURE
Neither party shall be liable for any failure to perform due to circumstances beyond their reasonable control.

5. GOVERNING LAW
This agreement shall be governed by the laws of Ireland.

6. TERMINATION
Either party may terminate this agreement with 30 days written notice. Upon termination, all equipment must be returned in good condition.

7. AMENDMENTS
This agreement may only be modified in writing and signed by both parties.'
WHERE id = '84489e1d-3ab7-4042-a785-4ac6a9b14b18';