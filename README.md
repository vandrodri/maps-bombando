# ZMaps LP1 - Landing Page Versão 1

Landing Page para teste A/B do ZMaps com estilo Hormozi agressivo.

## 🚀 Instalação

```bash
# 1. Instala as dependências
npm install

# 2. Cria o arquivo .env (copia do .env.example)
cp .env.example .env

# 3. Edita o .env e adiciona sua API_KEY do Gemini
# API_KEY=sua_chave_aqui

# 4. Roda em desenvolvimento
npm run dev

# 5. Abre no navegador
# http://localhost:5173
```

## 📦 Build para produção

```bash
npm run build
```

## 🌐 Deploy no Netlify

### Pelo Git (Recomendado):

1. **Cria repositório no GitHub:**
```bash
git init
git add .
git commit -m "🚀 LP1 - Teste A/B ZMaps"
git remote add origin https://github.com/SEU_USUARIO/zmaps-lp1.git
git branch -M main
git push -u origin main
```

2. **No Netlify:**
   - Import from GitHub
   - Seleciona `zmaps-lp1`
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Adiciona variável de ambiente: `API_KEY=sua_chave_gemini`

3. **Configura domínio:**
   - Site settings → Domain management
   - Add custom domain: `lp1.zapy.click`

### Build Settings:

```
Build command: npm run build
Publish directory: dist
```

### Environment Variables:

```
API_KEY=sua_chave_gemini_aqui
```

## 📊 Google Analytics

Substitua `G-XXXXXXXXXX` no `index.html` pelo seu ID do Google Analytics.

## 🎯 CTA

O botão principal redireciona para:
```
https://zmaps.zapy.click?signup=true
```

O app principal deve detectar esse parâmetro e abrir o modal de cadastro.

## 📝 Estrutura

```
zmaps-lp1/
├── components/
│   ├── Header.tsx
│   ├── InputForm.tsx
│   ├── ReportDisplay.tsx
│   └── Footer.tsx
├── services/
│   ├── geminiService.ts
│   └── firebase.ts
├── types.ts
├── App.tsx
├── index.tsx
├── index.html
└── vite.config.ts
```

## 🔧 Troubleshooting

### Erro no build:
```bash
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Variáveis de ambiente não funcionam:
- Certifique-se de criar o arquivo `.env` (não `.env.example`)
- Reinicie o servidor de dev após editar o `.env`