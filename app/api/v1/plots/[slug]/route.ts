import { NextRequest, NextResponse } from 'next/server';
import { getProjectBySlug } from '@/data/projects';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
      return NextResponse.json(
        { success: false, error: 'Venture not found' },
        { status: 404 }
      );
    }

    const availablePlots = project.plots.filter((p) => p.status === 'AVAILABLE');
    const reservedPlots = project.plots.filter((p) => p.status === 'RESERVED');
    const soldPlots = project.plots.filter((p) => p.status === 'SOLD');

    return NextResponse.json({
      success: true,
      venture: {
        id: project.id,
        name: project.name,
        slug: project.slug,
        location: project.location,
        corridor: project.corridor,
        approvals: project.approvals,
        ratePerYard: project.ratePerYard,
      },
      inventory: {
        totalUnits: project.plots.length,
        availableCount: availablePlots.length,
        reservedCount: reservedPlots.length,
        soldCount: soldPlots.length,
        plots: project.plots,
      },
    });
  } catch (error) {
    console.error('Plot inventory API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

