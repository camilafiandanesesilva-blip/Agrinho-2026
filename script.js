/* ==========================================================================
   PORTAL AGROFORTE SUSTENTÁVEL - INTERATIVIDADE E COMPORTAMENTO DINÂMICO
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    inicializarGraficoInterativo();
    configurarAnimacaoScroll();
    configurarQuiz();
    configurarFormularioContato();
});

/* ==========================================================================
   1. GRÁFICO INTERATIVO COM CHART.JS (SUBSTITUI PLACEHOLDER)
   ========================================================================== */
function inicializarGraficoInterativo() {
    const canvas = document.getElementById('agroChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Produtividade (sc/ha)', 'Retenção de Água (%)', 'Redução de Erosão (%)', 'Uso de Energia (%)'],
            datasets: [
                {
                    label: 'Manejo Convencional',
                    data: [55, 40, 30, 85],
                    backgroundColor: '#a5d6a7',
                    borderColor: '#66bb6a',
                    borderWidth: 2,
                    borderRadius: 6
                },
                {
                    label: 'Manejo Sustentável',
                    data: [68, 75, 85, 40],
                    backgroundColor: '#2e7d32',
                    borderColor: '#1b5e20',
                    borderWidth: 2,
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1800,
                easing: 'easeOutQuart'
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { size: 13, weight: '600' },
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(27, 94, 32, 0.95)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y + (context.dataIndex === 0 ? ' sc/ha' : '%');
                        }
                    }
                },
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) { return value + (this.dataIndex === 0 ? '' : '%'); }
                    },
                    grid: { color: 'rgba(0,0,0,0.05)' }
                },
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 11, weight: '500' } }
                }
            }
        }
    });
}

/* ==========================================================================
   2. ANIMAÇÃO DE SCROLL (REVEAL)
   ========================================================================== */
function configurarAnimacaoScroll() {
    const elementosParaAnimar = document.querySelectorAll('section, .card, .quiz-container, .form-container');

    elementosParaAnimar.forEach(el => el.classList.add('reveal'));

    const checarScroll = () => {
        const gatilhoAtivacao = window.innerHeight * 0.88;

        elementosParaAnimar.forEach(el => {
            const topoElemento = el.getBoundingClientRect().top;
            if (topoElemento < gatilhoAtivacao) {
                el.classList.add('visible');
            }
        });
    };

    checarScroll();
    window.addEventListener('scroll', checarScroll, { passive: true });
}

/* ==========================================================================
   3. QUIZ INTERATIVO COM VALIDAÇÃO E FEEDBACK VISUAL
   ========================================================================== */
function configurarQuiz() {
    const botaoEnviar = document.querySelector('#quiz-form button');
    const form = document.getElementById('quiz-form');
    const resultado = document.getElementById('quiz-result');
    const labels = form.querySelectorAll('label');

    if (!botaoEnviar) return;

    // Feedback tátil ao selecionar uma opção
    labels.forEach(label => {
        label.addEventListener('click', () => {
            labels.forEach(l => l.style.boxShadow = 'none');
            label.style.boxShadow = '0 0 0 3px rgba(46, 125, 50, 0.3)';
        });
    });

    botaoEnviar.addEventListener('click', () => {
        const opcaoSelecionada = form.querySelector('input[name="answer"]:checked');

        if (!opcaoSelecionada) {
            resultado.textContent = "⚠️ Por favor, escolha uma alternativa antes de enviar!";
            resultado.style.color = "#c62828";
            resultado.style.backgroundColor = "#ffebee";
            return;
        }

        // Resposta correta: B (Irrigação Inteligente)
        const labelSelecionado = opcaoSelecionada.parentElement;
        const labelCorreto = Array.from(labels).find(l => l.querySelector('input').value === 'B');

        if (opcaoSelecionada.value === "B") {
            labelSelecionado.classList.add('correct');
            resultado.textContent = "🎉 Excelente! A irrigação inteligente monitora o solo e economiza água aplicando-a com precisão milimétrica.";
            resultado.style.color = "#2e7d32";
            resultado.style.backgroundColor = "#e8f5e9";
        } else {
            labelSelecionado.classList.add('wrong');
            labelCorreto.classList.add('correct');
            resultado.textContent = "❌ Resposta incorreta. A alternativa certa é a B - Irrigação Inteligente, que monitora a umidade do solo em tempo real.";
            resultado.style.color = "#c62828";
            resultado.style.backgroundColor = "#ffebee";
        }

        // Desabilita tudo após responder
        form.querySelectorAll('input').forEach(input => input.disabled = true);
        labels.forEach(label => {
            label.style.cursor = 'default';
        });
        botaoEnviar.disabled = true;
    });
}

/* ==========================================================================
   4. VALIDAÇÃO ROBUSTA DO FORMULÁRIO DE CONTATO
   ========================================================================== */
function configurarFormularioContato() {
    const formulario = document.getElementById('contact-form');
    if (!formulario) return;

    const campos = {
        nome: { el: document.getElementById('name'), erro: document.getElementById('error-name') },
        email: { el: document.getElementById('email'), erro: document.getElementById('error-email') },
        mensagem: { el: document.getElementById('message'), erro: document.getElementById('error-message') }
    };
    const msgBox = document.getElementById('form-message');
    const submitBtn = document.getElementById('submit-btn');

    // Validação em tempo real (ao digitar)
    Object.keys(campos).forEach(chave => {
        campos[chave].el.addEventListener('blur', () => validarCampo(chave));
        campos[chave].el.addEventListener('input', () => {
            if (campos[chave].el.classList.contains('invalid')) validarCampo(chave);
        });
    });

    function validarCampo(chave) {
        const { el, erro } = campos[chave];
        const valor = el.value.trim();
        let valido = true;
        let msgErro = '';

        if (chave === 'nome') {
            if (!valor) { msgErro = 'O nome é obrigatório.'; valido = false; }
            else if (valor.length < 3) { msgErro = 'O nome deve ter pelo menos 3 caracteres.'; valido = false; }
        } else if (chave === 'email') {
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!valor) { msgErro = 'O e-mail é obrigatório.'; valido = false; }
            else if (!regexEmail.test(valor)) { msgErro = 'Digite um e-mail válido.'; valido = false; }
        } else if (chave === 'mensagem') {
            if (!valor) { msgErro = 'A mensagem é obrigatória.'; valido = false; }
            else if (valor.length < 10) { msgErro = `Mínimo 10 caracteres (atual: ${valor.length}).`; valido = false; }
        }

        el.classList.toggle('invalid', !valido);
        el.classList.toggle('valid', valido);
        erro.textContent = msgErro;
        return valido;
    }

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const nomeValido = validarCampo('nome');
        const emailValido = validarCampo('email');
        const mensagemValida = validarCampo('mensagem');

        if (!nomeValido || !emailValido || !mensagemValida) {
            msgBox.textContent = "⚠️ Por favor, corrija os campos destacados acima.";
            msgBox.className = 'error';
            return;
        }

        // Simulação de envio
        const textoOriginal = submitBtn.textContent;
        submitBtn.textContent = "Enviando...";
        submitBtn.disabled = true;

        setTimeout(() => {
            msgBox.textContent = `✅ Obrigado, ${campos.nome.el.value.trim()}! Sua mensagem foi registrada com sucesso. Entraremos em contato em breve.`;
            msgBox.className = 'success';
            formulario.reset();
            Object.values(campos).forEach(c => {
                c.el.classList.remove('valid', 'invalid');
                c.erro.textContent = '';
            });

            submitBtn.textContent = textoOriginal;
            submitBtn.disabled = false;

            setTimeout(() => {
                msgBox.textContent = '';
                msgBox.className = '';
            }, 7000);
        }, 1200);
    });
}
}



