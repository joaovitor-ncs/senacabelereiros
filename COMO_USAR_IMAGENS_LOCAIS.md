# Como Usar Suas Próprias Imagens

## Opção 1: Usar Imagens do Seu Computador

### Passo a Passo:

1. **Prepare suas imagens:**
   - Formato recomendado: JPG ou PNG
   - Tamanho recomendado: 
     - Hero: 800x600px ou maior
     - Galeria: 600x600px ou maior
   - Otimize as imagens para web (use ferramentas como TinyPNG)

2. **Crie a pasta de imagens no HostGator:**
   - No File Manager, dentro de `public_html`, crie uma pasta chamada `images`

3. **Faça upload das imagens:**
   - Faça upload das suas imagens para a pasta `images`

4. **Atualize o HTML:**

   **Para a imagem Hero (linha ~60):**
   ```html
   <img src="images/sua-imagem-hero.jpg" alt="Trabalhos Sena Cabeleireiros" id="heroImage" loading="eager">
   ```

   **Para as imagens da Galeria (linhas ~119-134):**
   ```html
   <img src="images/trabalho1.jpg" alt="Trabalho 1" class="galeria-img" loading="lazy">
   <img src="images/trabalho2.jpg" alt="Trabalho 2" class="galeria-img" loading="lazy">
   <!-- e assim por diante... -->
   ```

## Opção 2: Usar Google Drive

### ⚠️ IMPORTANTE: Conversão Automática

O site agora converte automaticamente os links do Google Drive! Você pode usar o link de compartilhamento diretamente.

### Passo a Passo:

1. **Faça upload das imagens no Google Drive**

2. **Compartilhe as imagens:**
   - Clique com botão direito na imagem
   - Selecione "Obter link" ou "Compartilhar"
   - Configure como **"Qualquer pessoa com o link pode ver"** (muito importante!)
   - Copie o link completo

3. **Cole o link no HTML:**
   - O site converte automaticamente!
   - Você pode usar qualquer um destes formatos:

   ```html
   <!-- Formato 1 - Link de compartilhamento (será convertido automaticamente) -->
   <img src="https://drive.google.com/file/d/1ABC123XYZ/view" alt="Descrição">
   
   <!-- Formato 2 - Link aberto (será convertido automaticamente) -->
   <img src="https://drive.google.com/open?id=1ABC123XYZ" alt="Descrição">
   
   <!-- Formato 3 - Já convertido (funciona direto) -->
   <img src="https://drive.google.com/uc?export=view&id=1ABC123XYZ" alt="Descrição">
   ```

   **Exemplo completo:**
   ```html
   <img src="https://drive.google.com/file/d/1ABC123XYZ/view" 
        alt="Trabalhos Sena Cabeleireiros" 
        id="heroImage" 
        loading="eager">
   ```

### 🔍 Como Encontrar o ID

O ID é a parte única do link:
- Link: `https://drive.google.com/file/d/1ABC123XYZ/view`
- **ID:** `1ABC123XYZ`

### ⚙️ Se a Conversão Automática Não Funcionar

Se por algum motivo a conversão automática não funcionar, converta manualmente:

1. Pegue o ID do arquivo do link
2. Use: `https://drive.google.com/uc?export=view&id=SEU_ID`

**Consulte o arquivo `COMO_USAR_GOOGLE_DRIVE.md` para mais detalhes!**

## Opção 3: Usar Outros Serviços de Hospedagem de Imagens

Você também pode usar:
- **Imgur:** Após fazer upload, copie o link direto da imagem
- **Cloudinary:** Serviço profissional de hospedagem de imagens
- **Amazon S3:** Se você tiver conta AWS

## Dicas Importantes

✅ **Sempre use nomes descritivos:** `trabalho-trancas-1.jpg` é melhor que `IMG_001.jpg`

✅ **Otimize antes de fazer upload:** Imagens muito grandes tornam o site lento

✅ **Mantenha consistência:** Use o mesmo formato (JPG ou PNG) para todas as imagens

✅ **Teste após mudanças:** Sempre verifique se as imagens estão carregando corretamente

## Estrutura Recomendada

```
public_html/
├── index.html
├── styles.css
├── script.js
└── images/
    ├── hero.jpg
    ├── trabalho1.jpg
    ├── trabalho2.jpg
    ├── trabalho3.jpg
    ├── trabalho4.jpg
    ├── trabalho5.jpg
    └── trabalho6.jpg
```

