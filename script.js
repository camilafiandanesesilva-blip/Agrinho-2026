/* ==========================================================================
   PORTAL AGROFORTE SUSTENTÁVEL - INTERATIVIDADE E COMPORTAMENTO DINÂMICO
   ========================================================================== */

// Aguarda o carregamento total do HTML antes de executar as funções
document.addEventListener("DOMContentLoaded", () => {
    inicializarGraficoPIB();
    configurarAnimaçãoScroll();
    configurarQuiz();
    configurarFormularioContato();
});

/* ==========================================================================
   1. RENDERIZAÇÃO DINÂMICA DO GRÁFICO DO PIB (COM IMAGENS DE FUNDO)
   ========================================================================== */
function inicializarGraficoPIB() {
    const containerGrafico = document.querySelector('#economia div[style*="background:#eee"]');
    
    if (!containerGrafico) return;

    // Remove os estilos inline antigos para dar lugar ao layout dinâmico
    containerGrafico.removeAttribute('style');
    containerGrafico.id = "grafico-pib-container";

    // Mapeamento dos anos com suas respectivas imagens da pasta assets
    // ATENÇÃO: Altere os nomes abaixo (.png/.jpg) para os nomes exatos das suas imagens
    const dadosPIB = [
        { ano: '20224', porcentagem: 65, imagem: '1782224192692.png' },
        { ano: '2025', porcentagem: 78, imagem: '1782224237651.png' },
        
    ];

    // Cria a estrutura visual das barras injetando as imagens no background
    let htmlGrafico = `<div class="chart-wrapper" style="display: flex; align-items: flex-end; justify-content: space-around; height: 220px; padding: 10px; width: 100%; gap: 10px;">`;
    
    dadosPIB.forEach(item => {
        htmlGrafico += `
            <div class="chart-bar-container" style="text-align: center; flex: 1; display: flex; flex-direction: column; justify-content: flex-end; height: 100%;">
                <div class="chart-bar" style="
                    height: 0%; 
                    background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('assets/${item.imagem}'); 
                    background-size: cover; 
                    background-position: center; 
                    background-color: #52b788; 
                    margin: 0 auto; 
                    width: 50px; 
                    border-radius: 6px 6px 0 0; 
                    transition: height 1.5s cubic-bezier(0.25, 1, 0.5, 1); 
                    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
                    position: relative;
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    padding-top: 5px;
                " data-height="${item.porcentagem}%">
                    <!-- Exibe a porcentagem no topo interno da barra de forma legível -->
                    <span style="color: #ffffff; font-size: 0.75rem; font-weight: bold; text-shadow: 1px 1px 3px rgba(0,0,0,0.8);">${item.porcentagem}%</span>
                </div>
                <span style="display: block; font-size: 0.85rem; margin-top: 8px; color: #4a5568; font-weight: bold;">${item.ano}</span>
            </div>
        `;
    });
    
    htmlGrafico += `</div>`;
    containerGrafico.innerHTML = htmlGrafico;

    // Anima as barras subindo com efeito suave após a renderização
    setTimeout(() => {
        const barras = containerGrafico.querySelectorAll('.chart-bar');
        barras.forEach(barra => {
            barra.style.height = barra.getAttribute('data-height');
        });
    }, 200);
}

/* ==========================================================================
   2. ANIMAÇÃO DE COMPONENTES AO ROLAR A PÁGINA (SCROLL REVEAL)
   ========================================================================== */
function configurarAnimaçãoScroll() {
    const elementosParaAnimar = document.querySelectorAll('section, .card, .quiz-container');

    elementosParaAnimar.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    });

    const checarScroll = () => {
        const gatilhoAtivacao = window.innerHeight * 0.85;

        elementosParaAnimar.forEach(el => {
            const topoElemento = el.getBoundingClientRect().top;

            if (topoElemento < gatilhoAtivacao) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    checarScroll();
    window.addEventListener('scroll', checarScroll);
}

/* ==========================================================================
   3. SISTEMA DE QUIZ INTERATIVO COM VALIDAÇÃO E FEEDBACK VISUAL
   ========================================================================== */
function configurarQuiz() {
    const botaoEnviar = document.querySelector('#quiz-form button');
    if (!botaoEnviar) return;

    botaoEnviar.removeAttribute('onclick');
    botaoEnviar.addEventListener('click', () => {
        const opcaoSelecionada = document.querySelector('input[name="answer"]:checked');
        const campoResultado = document.getElementById('quiz-result');

        if (!opcaoSelecionada) {
            campoResultado.textContent = "⚠️ Por favor, escolha uma alternativa antes de enviar!";
            campoResultado.style.color = "#dc2626";
            return;
        }

        if (opcaoSelecionada.value === "B") {
            campoResultado.textContent = "🎉 Excelente! A irrigação inteligente monitora o solo e economiza água.";
            campoResultado.style.color = "#16a34a";
            opcaoSelecionada.parentElement.style.background = "#dcfce7";
            opcaoSelecionada.parentElement.style.borderColor = "#16a34a";
        } else {
            campoResultado.textContent = "❌ Resposta incorreta. Tente analisar os impactos das tecnologias tradicionais.";
            campoResultado.style.color = "#dc2626";
            opcaoSelecionada.parentElement.style.background = "#fee2e2";
            opcaoSelecionada.parentElement.style.borderColor = "#dc2626";
        }

        document.querySelectorAll('input[name="answer"]').forEach(input => input.disabled = true);
        botaoEnviar.disabled = true;
        botaoEnviar.style.opacity = "0.5";
        botaoEnviar.style.cursor = "not-allowed";
    });
}

/* ==========================================================================
   4. VALIDAÇÃO INTELIGENTE DO FORMULÁRIO DE CONTATO
   ========================================================================== */
function configurarFormularioContato() {
    const formulario = document.getElementById('contact-form');
    if (!formulario) return;

    formulario.removeAttribute('onsubmit');
    
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('message').value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        const botaoSubmit = formulario.querySelector('button[type="submit"]');
        const textoOriginal = botaoSubmit.textContent;
        
        botaoSubmit.textContent = "Enviando...";
        botaoSubmit.disabled = true;

        setTimeout(() => {
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada à nossa equipe.`);
            formulario.reset();
            
            botaoSubmit.textContent = textoOriginal;
            botaoSubmit.disabled = false;
        }, 1200);
    });
}


