# Instruções para Publicar no HostGator

Este site é **100% estático** e compatível com hospedagem compartilhada do HostGator.

## Arquivos Necessários

Você precisa fazer upload apenas destes arquivos:
- `index.html`
- `styles.css`
- `script.js`

## Passo a Passo

### 1. Acesse o File Manager do HostGator

1. Faça login no seu painel do HostGator (cPanel)
2. Abra o **File Manager**
3. Navegue até a pasta `public_html` (ou `www` dependendo da configuração)

### 2. Faça Upload dos Arquivos

1. Selecione os arquivos: `index.html`, `styles.css`, `script.js`
2. Faça upload para a pasta `public_html`
3. Certifique-se de que o `index.html` está na raiz do `public_html`

### 3. Configurar Imagens (Opcional)

Se você quiser usar suas próprias imagens:

1. Crie uma pasta chamada `images` dentro de `public_html`
2. Faça upload das suas imagens para essa pasta
3. Atualize os caminhos no `index.html`:
   - Para a imagem hero: `src="images/sua-imagem-hero.jpg"`
   - Para a galeria: `src="images/trabalho1.jpg"`, etc.

### 4. Verificar o Site

1. Acesse seu domínio no navegador
2. O site deve carregar automaticamente

## Estrutura de Pastas Recomendada

```
public_html/
├── index.html
├── styles.css
├── script.js
└── images/          (opcional)
    ├── hero.jpg
    ├── trabalho1.jpg
    ├── trabalho2.jpg
    └── ...
```

## Notas Importantes

- ✅ Este site **NÃO precisa** de Node.js, React ou qualquer servidor especial
- ✅ Funciona apenas com HTML, CSS e JavaScript puro
- ✅ Todas as imagens podem usar URLs externas (como Pexels) ou caminhos locais
- ✅ O site já está otimizado para funcionar mesmo se algumas imagens não carregarem

## Personalização

### Alterar Imagens

Edite o arquivo `index.html` e substitua as URLs das imagens:
- Linha 60: Imagem hero
- Linhas 119-134: Imagens da galeria

### Alterar Informações de Contato

Edite o arquivo `index.html`:
- Linha 226: Número do WhatsApp
- Linha 233: Link do Instagram
- Linha 219: Endereço

### Alterar Cores e Estilos

Edite o arquivo `styles.css`:
- Linhas 9-20: Variáveis de cores (cores principais do site)

## Suporte

Se tiver problemas:
1. Verifique se todos os arquivos foram enviados corretamente
2. Certifique-se de que o `index.html` está na raiz do `public_html`
3. Verifique as permissões dos arquivos (devem ser 644)
4. Limpe o cache do navegador

