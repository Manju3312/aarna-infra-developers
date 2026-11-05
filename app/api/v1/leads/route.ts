import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { fullName, phone, email, ventureSlug, message, honeypot } = await req.json();

    // 1. Anti-bot honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Lead received' });
    }

    // 2. Strict Phone Validation (Supports +91 and 10-digit formats)
    const cleanPhone = (phone || '').replace(/[^\d+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid 10-digit mobile number' },
        { status: 400 }
      );
    }

    // 3. Log lead safely server-side
    console.log(`[INBOUND_LEAD] ${fullName || 'Anonymous'} | ${cleanPhone} | ${email || 'No email'} | ${ventureSlug || 'General'} | ${message || ''}`);

    // Return instant brochure link for client redirection
    return NextResponse.json({
      success: true,
      message: 'Thank you! Your property inquiry has been received. Our senior advisor will contact you within 15 minutes.',
      brochureUrl: `/assets/downloads/${ventureSlug || 'aarna-master'}-brochure.pdf`,
      leadRef: `ARN-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error processing inquiry' },
      { status: 500 }
    );
  }
}

