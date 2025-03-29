import { NextRequest, NextResponse } from 'next/server';

let pessoas = [
  {
    nome: 'Marcelino',
    idade: 30,
    cidade: 'São Paulo',
    profissao: 'Desenvolvedor',
    email: 'marcelino@email.com',
    telefone: '11999999999',
    ativo: true,
    altura: 1.75,
    peso: 70,
    nacionalidade: 'Brasileiro'
  },
  {
    nome: 'José',
    idade: 45,
    cidade: 'Rio de Janeiro',
    profissao: 'Professor',
    email: 'jose@email.com',
    telefone: '21988888888',
    ativo: false,
    altura: 1.80,
    peso: 80,
    nacionalidade: 'Brasileiro'
  },
  {
    nome: 'Maria',
    idade: 28,
    cidade: 'Belo Horizonte',
    profissao: 'Engenheira',
    email: 'maria@email.com',
    telefone: '31977777777',
    ativo: true,
    altura: 1.65,
    peso: 60,
    nacionalidade: 'Brasileira'
  }
];

export async function GET() {
  try {
    return NextResponse.json(pessoas);
  } catch {
    return NextResponse.error('Erro interno do servidor', { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    pessoas.push(body.id);
    return NextResponse.json(pessoas);
  } catch {
    return NextResponse.error('Erro interno do servidor', { status: 500 });
  }
}

export async function PUT(request) {
  if (request.method == 'PUT') {
    try {
      const body = await request.json();
      pessoas = pessoas.map((pessoa, index) => index === body.id ? pessoa = body : pessoa );
      return NextResponse.json(pessoas);
    } catch {
      return NextResponse.error('Erro interno do servidor', { status: 500 });
    }
  }
}

