// Script principal do site Sena Cabeleireiros
// Todas as funcionalidades em JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Função para calcular anos no mercado automaticamente
    function calcularAnosNoMercado() {
        const anoFundacao = 1997;
        const anoAtual = new Date().getFullYear();
        const anosNoMercado = anoAtual - anoFundacao;
        
        // Atualiza todos os elementos que mostram os anos
        const elementosAnos = [
            document.getElementById('anosMercado'),
            document.getElementById('anosExperiencia'),
            document.getElementById('anosRodape')
        ];
        
        elementosAnos.forEach(elemento => {
            if (elemento) {
                if (elemento.id === 'anosMercado') {
                    elemento.textContent = `${anosNoMercado} anos no mercado`;
                } else {
                    elemento.textContent = anosNoMercado;
                }
            }
        });
        
        // Atualiza o ano atual no rodapé
        const anoAtualElement = document.getElementById('anoAtual');
        if (anoAtualElement) {
            anoAtualElement.textContent = anoAtual;
        }
    }
    
    // Funcionalidade do menu mobile
    function inicializarMenuMobile() {
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Toggle do menu
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Fechar menu ao clicar fora dele
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Funcionalidade do formulário de cursos
    function inicializarFormularioCursos() {
        const cursoForm = document.getElementById('cursoForm');
        
        cursoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Pegar os dados do formulário
            const nome = document.getElementById('nome').value;
            const idade = document.getElementById('idade').value;
            const telefone = document.getElementById('telefone').value;
            const interesse = document.getElementById('interesse').value;
            
            // Validar se todos os campos estão preenchidos
            if (!nome || !idade || !telefone || !interesse) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            // Criar mensagem para WhatsApp
            const mensagem = `Olá! Gostaria de me inscrever nos cursos do Sena Cabeleireiros.
            
*Dados para inscrição:*
• Nome: ${nome}
• Idade: ${idade} anos
• Telefone: ${telefone}
• Interesse: ${interesse}

Aguardo retorno para mais informações sobre os cursos disponíveis.`;
            
            // Codificar a mensagem para URL
            const mensagemCodificada = encodeURIComponent(mensagem);
            
            // Criar link do WhatsApp
            const linkWhatsApp = `https://wa.me/5511980706794?text=${mensagemCodificada}`;
            
            // Abrir WhatsApp
            window.open(linkWhatsApp, '_blank');
            
            // Limpar formulário após envio
            cursoForm.reset();
            
            // Mostrar mensagem de sucesso
            alert('Redirecionando para o WhatsApp! Sua mensagem foi preparada automaticamente.');
        });
    }
    
    // Funcionalidade do botão "Voltar ao Topo"
    function inicializarVoltarAoTopo() {
        const backToTopBtn = document.getElementById('backToTop');
        
        // Mostrar/esconder botão baseado no scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Ação do clique no botão
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Animações de entrada dos elementos
    function inicializarAnimacoes() {
        // Separar elementos: galeria não deve ter fade-in para evitar que imagens sumam
        const elementsToAnimate = document.querySelectorAll('.servico-card, .contato-item');
        const galeriaItems = document.querySelectorAll('.galeria-item');
        
        // Verificar se IntersectionObserver está disponível
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);
            
            // Aplicar fade-in apenas em elementos que não são imagens da galeria
            elementsToAnimate.forEach(el => {
                el.classList.add('fade-in');
                observer.observe(el);
            });
            
            // Para galeria, aplicar animação mais suave sem opacity inicial
            galeriaItems.forEach(el => {
                el.classList.add('fade-in-gallery');
                observer.observe(el);
            });
        } else {
            // Fallback para navegadores antigos: mostrar todos os elementos imediatamente
            elementsToAnimate.forEach(el => {
                el.classList.add('fade-in', 'visible');
            });
            galeriaItems.forEach(el => {
                el.classList.add('fade-in-gallery', 'visible');
            });
        }
    }
    
    // Funcionalidade para destacar link ativo no menu
    function inicializarMenuAtivo() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    // Funcionalidade para smooth scroll nos links do menu
    function inicializarSmoothScroll() {
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Compensar altura do header
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Funcionalidade para validar campos do formulário em tempo real
    function inicializarValidacaoFormulario() {
        const inputs = document.querySelectorAll('#cursoForm input, #cursoForm textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.style.borderColor = '#ff6b6b';
                } else {
                    this.style.borderColor = '#28a745';
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '#D2691E';
            });
        });
        
        // Validação específica para telefone
        const telefoneInput = document.getElementById('telefone');
        telefoneInput.addEventListener('input', function() {
            // Remover caracteres não numéricos
            this.value = this.value.replace(/\D/g, '');
            
            // Aplicar máscara de telefone
            if (this.value.length >= 11) {
                this.value = this.value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (this.value.length >= 7) {
                this.value = this.value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else if (this.value.length >= 3) {
                this.value = this.value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            }
        });
    }
    
    // Funcionalidade para carousel de depoimentos (simples)
    function inicializarCarouselDepoimentos() {
        const depoimentos = document.querySelectorAll('.depoimento');
        let currentIndex = 0;
        
        if (depoimentos.length > 1) {
            // Esconder todos exceto o primeiro
            depoimentos.forEach((depoimento, index) => {
                if (index !== 0) {
                    depoimento.style.display = 'none';
                }
            });
            
            // Rotacionar depoimentos a cada 5 segundos
            setInterval(() => {
                depoimentos[currentIndex].style.display = 'none';
                currentIndex = (currentIndex + 1) % depoimentos.length;
                depoimentos[currentIndex].style.display = 'block';
            }, 5000);
        }
    }
    
    // Funcionalidade para tratamento de erros de imagens
    function inicializarTratamentoImagens() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            // Garantir que imagens da galeria sempre fiquem visíveis
            const isGaleriaImg = img.classList.contains('galeria-img');
            
            if (isGaleriaImg) {
                // Forçar visibilidade para imagens da galeria
                img.style.opacity = '1';
                img.style.display = 'block';
                img.style.visibility = 'visible';
            }
            
            // Garantir que imagens quebradas mostrem placeholder
            img.addEventListener('error', function() {
                if (!this.dataset.errorHandled) {
                    this.dataset.errorHandled = 'true';
                    // Se já não tem um placeholder SVG, adicionar um
                    if (!this.src.includes('data:image/svg')) {
                        this.style.backgroundColor = '#f0f0f0';
                        this.style.display = 'block';
                        this.style.minHeight = '200px';
                        this.style.opacity = '1';
                        this.style.visibility = 'visible';
                        this.alt = 'Imagem não disponível';
                    }
                }
            });
            
            // Garantir que imagens visíveis permaneçam visíveis
            if (img.complete && img.naturalHeight !== 0) {
                // Imagem já carregada - garantir que está visível
                img.style.opacity = '1';
                img.style.visibility = 'visible';
            } else {
                // Imagem ainda carregando - manter visível
                img.style.opacity = '1';
                img.style.visibility = 'visible';
                img.style.transition = 'opacity 0.3s ease';
                
                // Apenas garantir que permaneça visível quando carregar
                img.addEventListener('load', function() {
                    this.style.opacity = '1';
                    this.style.visibility = 'visible';
                }, { once: true });
            }
        });
    }
    
    // Inicializar todas as funcionalidades
    calcularAnosNoMercado();
    inicializarMenuMobile();
    inicializarFormularioCursos();
    inicializarVoltarAoTopo();
    inicializarAnimacoes();
    inicializarMenuAtivo();
    inicializarSmoothScroll();
    inicializarValidacaoFormulario();
    inicializarCarouselDepoimentos();
    inicializarTratamentoImagens();
    
    // Log para confirmar que o script foi carregado
    console.log('Site Sena Cabeleireiros carregado com sucesso!');
    console.log(`Calculando anos no mercado: ${new Date().getFullYear() - 1997} anos`);
});