module.exports = {
  types: [
    { 
        value: 'feat', 
        name: 'feat:     ✨ Nova funcionalidade ou recurso para o usuário' 
    },
    { 
        value: 'fix', 
        name: 'fix:      🐛 Correção de bug que afeta o usuário' 
    },
    { 
        value: 'docs', 
        name: 'docs:     📝 Mudanças apenas na documentação' 
    },
    { 
        value: 'style', 
        name: 'style:    💄 Formatação, ponto e vírgula, espaços (não afeta código)' 
    },
    { 
        value: 'refactor', 
        name: 'refactor: ♻️  Refatoração sem alterar funcionalidade' 
    },
    { 
        value: 'test', 
        name: 'test:     ✅ Adição ou correção de testes' 
    },
    { 
        value: 'chore', 
        name: 'chore:    🔧 Configurações, dependências, build (não afeta produção)' 
    },
    { 
        value: 'perf', 
        name: 'perf:     ⚡ Melhoria de performance' 
    },
    { 
        value: 'ci', 
        name: 'ci:       👷 Mudanças em CI/CD e scripts de automação' 
    },
    { 
        value: 'build', 
        name: 'build:    📦 Mudanças no sistema de build ou dependências externas' 
    },  
    { 
        value: 'revert', 
        name: 'revert:   ⏪ Reverter um commit anterior' 
    }
    ],

    scopes: [
        { name: 'docs' },
        { name: 'config' },
        { name: 'core' },
        { name: 'api' },
        { name: 'ui' }
    ],

    messages: {
        type: 'Selecione o TIPO da mudança que você está fazendo:',
        scope: '\nIndique o ESCOPO desta mudança (opcional):',
        customScope: 'Indique o escopo customizado:',
        subject: 'Escreva uma descrição CURTA e IMPERATIVA da mudança (máx. 100 caracteres):\n',
        body: 'Forneça uma descrição DETALHADA da mudança (opcional). Use "|" para quebrar linhas:\n',
        breaking: 'Existem Breaking Changes? y or n',
        footer: 'Liste os cards/issues FECHADOS por esta mudança (opcional). Ex: #31, #34:\n',
        confirmCommit: 'Tem certeza que deseja prosseguir com o commit acima?'
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],

  // Pula perguntas opcionais
    skipQuestions: ['scope', 'body', 'footer'],

    subjectLimit: 100,
    breaklineChar: '|',
    footerPrefix: 'CLOSES:'
};