import { NextRequest, NextResponse } from 'next/server';

let nomes = [{ nome: 'Marcelino' }, { nome: 'José' }, { nome: 'Maria' }];

export async function GET() {
  try {
    return NextResponse.json(nomes);
  } catch {
    return NextResponse.error('Erro interno do servidor', { status: 500 });
  }
}

export async function POST(request) {
  const pessoa = request.json();
  try {
    nomes.push(pessoa);
    return NextResponse.json().status(200);
  } catch {
    return NextResponse.error('Erro interno do servidor', { status: 500 });
  }
}
