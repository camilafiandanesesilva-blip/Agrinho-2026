/* ==========================================================================
   1. VARIÁVEIS E RESETS
   ========================================================================== */
:root {
    --primary: #2e7d32;
    --secondary: #66bb6a;
    --accent: #f9fbe7;
    --dark: #1b5e20;
    --text: #333333;
    --text-light: #4a5568;
    --light: #ffffff;
    --bg: #f4f7f4;
    --error: #c62828;
    --success: #2e7d32;
    --border: #e0e0e0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text);
    background-color: var(--bg);
}

h1, h2, h3 {
    color: var(--dark);
    font-weight: 700;
    line-height: 1.2;
}

h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
    text-align: center;
}

h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: var(--secondary);
    border-radius: 2px;
}

p {
    margin-bottom: 15px;
    color: var(--text-light);
}

/* ==========================================================================
   2. COMPONENTES GERAIS
   ========================================================================== */
section {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.bg-light-green { background-color: #e8f5e9; max-width: 100%; }
.bg-pale-green { background-color: #f1f8e9; max-width: 100%; }

.grid-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    align-items: center;
}

.cards-container {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: center;
}

.btn {
    background-color: var(--primary);
    color: var(--light);
    border: none;
    padding: 12px 28px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 50px;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    display: inline-block;
}

.btn:hover:not(:disabled) {
    background-color: var(--dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 10px;
}

ul li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
}

ul li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--primary);
    font-weight: bold;
    font-size: 1.2rem;
}

.card {
    background: var(--light);
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-top: 4px solid var(--secondary);
    min-width: 280px;
    flex: 1;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(46, 125, 50, 0.2);
}

.section-intro, .contact-intro {
    max-width: 800px;
    margin: 0 auto 2rem;
    text-align: center;
    font-size: 1.05rem;
}

/* ==========================================================================
   3. CABEÇALHO E NAVEGAÇÃO
   ========================================================================== */
header {
    background-color: var(--dark);
    color: var(--light);
    padding: 1.2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    max-width: 100%;
}

.logo strong {
    font-size: 1.3rem;
    letter-spacing: 1px;
    color: var(--secondary);
}

nav a {
    color: var(--light);
    margin-left: 20px;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

nav a:hover {
    color: #74c69d;
}

nav a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #74c69d;
    transition: width 0.3s ease;
}

nav a:hover::after {
    width: 100%;
}

/* ==========================================================================
   4. BANNER
   ========================================================================== */
.banner {
    background: linear-gradient(135deg, rgba(27, 94, 32, 0.85), rgba(46, 125, 50, 0.85)),
                url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600') center/cover;
    color: var(--light);
    padding: 120px 20px;
    text-align: center;
    max-width: 100%;
}

.banner h1 {
    color: var(--light);
    font-size: 2.8rem;
    max-width: 800px;
    margin: 0 auto 20px auto;
}

.banner p {
    color: #d8f3dc;
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 40px auto;
}

/* ==========================================================================
   5. GRÁFICO INTERATIVO
   ========================================================================== */
.chart-wrapper {
    min-height: 450px;
}

.chart-wrapper h3 {
    color: var(--dark);
    margin-bottom: 15px;
    text-align: center;
}

.chart-container {
    background: var(--light);
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    position: relative;
    height: 400px;  /* ⬅️ ALTURA FIXA ESSENCIAL */
    width: 100%;
}

.chart-container canvas {
    width: 100% !important;
    height: 100% !important;
}

.chart-caption {
    text-align: center;
    font-size: 0.85rem;
    color: var(--text-light);
    font-style: italic;
    margin-top: 12px;
}

/* ==========================================================================
   6. QUIZ INTERATIVO
   ========================================================================== */
.quiz-container {
    background: var(--light);
    padding: 40px;
    border-radius: 12px;
    border-left: 6px solid var(--primary);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    max-width: 700px;
    margin: 0 auto;
}

.quiz-container h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: var(--dark);
}

#quiz-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

#quiz-form label {
    display: flex;
    align-items: center;
    background: var(--accent);
    padding: 14px 20px;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid #d4edda;
    transition: all 0.25s ease;
    font-weight: 500;
}

#quiz-form label:hover {
    background-color: #e8f5e9;
    border-color: #a5d6a7;
    transform: translateX(4px);
}

#quiz-form input[type="radio"] {
    margin-right: 12px;
    accent-color: var(--primary);
    width: 18px;
    height: 18px;
}

#quiz-form label.correct {
    background: #c8e6c9;
    border-color: var(--success);
    color: var(--dark);
}

#quiz-form label.wrong {
    background: #ffcdd2;
    border-color: var(--error);
}

#quiz-result {
    font-weight: 600;
    margin-top: 20px;
    padding: 15px;
    border-radius: 8px;
    min-height: 20px;
    transition: all 0.3s ease;
}

/* ==========================================================================
   7. FORMULÁRIO
   ========================================================================== */
.form-container {
    background: var(--light);
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.form-group {
    margin-bottom: 1.2rem;
    position: relative;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--dark);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid var(--border);
    border-radius: 8px;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.15);
}

.form-group textarea { resize: vertical; }

.form-group input.invalid,
.form-group textarea.invalid {
    border-color: var(--error);
    box-shadow: 0 0 0 3px rgba(198, 40, 40, 0.1);
}

.form-group input.valid,
.form-group textarea.valid {
    border-color: var(--success);
}

.error-msg {
    display: block;
    color: var(--error);
    font-size: 0.85rem;
    margin-top: 5px;
    min-height: 1.1rem;
}

blockquote {
    font-size: 1.5rem;
    font-style: italic;
    color: var(--dark);
    line-height: 1.4;
    border-left: 4px solid var(--secondary);
    padding-left: 20px;
}

#form-message {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 8px;
    display: none;
    text-align: center;
    font-weight: 600;
}

#form-message.success {
    background: #e8f5e9;
    color: var(--success);
    display: block;
}

#form-message.error {
    background: #ffebee;
    color: var(--error);
    display: block;
}

/* ==========================================================================
   8. RODAPÉ
   ========================================================================== */
footer {
    background-color: #111111;
    color: #a0aec0;
    text-align: center;
    padding: 30px 20px;
    margin-top: 60px;
    font-size: 0.9rem;
}

/* ==========================================================================
   9. SCROLL REVEAL (aplicado via JS)
   ========================================================================== */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ==========================================================================
   10. RESPONSIVIDADE
   ========================================================================== */
@media (max-width: 768px) {
    header {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }
    nav a { margin: 0 10px; font-size: 0.9rem; }
    .banner { padding: 80px 20px; }
    .banner h1 { font-size: 2rem; }
    .banner p { font-size: 1rem; }
    section { padding: 40px 15px; }
    h2 { font-size: 1.6rem; }
    blockquote { font-size: 1.2rem; }
    .quiz-container { padding: 25px; }
}
