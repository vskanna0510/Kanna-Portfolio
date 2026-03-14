import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

const FILENAME = 'Kanna_FS_CV.pdf';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', FILENAME);
    const buffer = await readFile(filePath);

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${FILENAME}"`,
        'Content-Length': String(buffer.length),
      },
    });
  } catch (err) {
    console.error('Resume file error:', err);
    return NextResponse.json({ error: 'Resume not found' }, { status: 404 });
  }
}
