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
   1. RENDERIZAÇÃO DINÂMICA DO GRÁFICO DO PIB
   ========================================================================== */
function inicializarGraficoPIB() {
    const containerGrafico = document.querySelector('#economia div[style*="background:#eee"]');
    
    if (!containerGrafico) return;

    // Remove os estilos inline antigos para dar lugar ao layout dinâmico
    containerGrafico.removeAttribute('style');
    containerGrafico.id = "grafico-pib-container";

    // Dados simulados de crescimento do agro nos últimos anos
    const dadosPIB = [
        { ano: '2022', porcentagem: 65 },
        { ano: '2023', porcentagem: 78 },
        { ano: '2024', porcentagem: 84 },
        { ano: '2025', porcentagem: 95 }
    ];

    // Cria a estrutura visual das barras via JavaScript
    let htmlGrafico = `<div class="chart-wrapper" style="display: flex; align-items: flex-end; justify-content: space-around; height: 180px; padding: 10px; width: 100%;">`;
    
    dadosPIB.forEach(item => {
        htmlGrafico += `
            <div class="chart-bar-container" style="text-align: center; flex: 1;">
                <div class="chart-bar" style="height: 0%; background: #52b788; margin: 0 auto; width: 40px; border-radius: 4px 4px 0 0; transition: height 1.5s ease-out; box-shadow: 0 2px 5px rgba(0,0,0,0.1);" data-height="${item.porcentagem}%"></div>
                <span style="display: block; font-size: 0.85rem; margin-top: 5px; color: #4a5568; font-weight: bold;">${item.ano}</span>
            </div>
        `;
    });
    
    htmlGrafico += `</div>`;
    containerGrafico.innerHTML = htmlGrafico;

    // Anima as barras subindo logo após a renderização
    setTimeout(() => {
        const barras = containerGrafico.querySelectorAll('.chart-bar');
        barras.forEach(barra => {
            barra.style.height = barra.getAttribute('data-height');
        });
    }, 300);
}

/* ==========================================================================
   2. ANIMAÇÃO DE COMPONENTES AO ROLAR A PÁGINA (SCROLL REVEAL)
   ========================================================================== */
function configurarAnimaçãoScroll() {
    // Seleciona elementos que vão ganhar animação de surgimento
    const elementosParaAnimar = document.querySelectorAll('section, .card, .quiz-container');

    // Aplica estilos iniciais invisíveis via JS para manter o CSS limpo
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

    // Executa uma vez no início e vincula ao evento de rolagem do navegador
    checarScroll();
    window.addEventListener('scroll', checarScroll);
}

/* ==========================================================================
   3. SISTEMA DE QUIZ INTERATIVO COM VALIDAÇÃO E FEEDBACK VISUAL
   ========================================================================== */
function configurarQuiz() {
    const botaoEnviar = document.querySelector('#quiz-form button');
    if (!botaoEnviar) return;

    // Substitui o onclick antigo do HTML por um EventListener moderno
    botaoEnviar.removeAttribute('onclick');
    botaoEnviar.addEventListener('click', () => {
        const opcaoSelecionada = document.querySelector('input[name="answer"]:checked');
        const campoResultado = document.getElementById('quiz-result');

        if (!opcaoSelecionada) {
            campoResultado.textContent = "⚠️ Por favor, escolha uma alternativa antes de enviar!";
            campoResultado.style.color = "#dc2626";
            return;
        }

        // Validação da resposta correta (Alternativa B)
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

        // Bloqueia as opções após o envio para evitar alterações
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

    // Remove a chamada inline do HTML para centralizar as ações no JS
    formulario.removeAttribute('onsubmit');
    
    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento indesejado da página

        const nome = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('message').value.trim();

        // Validação contra campos cheios apenas de espaços vazios
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        // Simulação de envio com feedback interativo no botão
        const botaoSubmit = formulario.querySelector('button[type="submit"]');
        const textoOriginal = botaoSubmit.textContent;
        
        botaoSubmit.textContent = "Enviando...";
        botaoSubmit.disabled = true;

        setTimeout(() => {
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada à nossa equipe.`);
            formulario.reset();
            
            // Restaura o estado original do botão de envio
            botaoSubmit.textContent = textoOriginal;
            botaoSubmit.disabled = false;
        }, 1200);
    });
}
