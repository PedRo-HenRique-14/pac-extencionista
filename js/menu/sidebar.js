var sidebar = `
<h1>Conteúdos</h1>
<nav>
    <ul id="menu-items">
        <li class="menu-item">
            <button class="menu-item-title">
                <span onclick="window.location.href = './index.html'">Início</span>
            </button>
        </li>
        <li class="menu-item">
            <button class="menu-item-title">
                <span onclick="window.location.href = './logica-geral.html'">Lógica de Programação</span>
                <i class="fa-solid fa-chevron-left arrow"></i>
            </button>
            
            <div class="sub-menu-body">
                <ul class="sub-menu-items">
                    <li class="sub-menu-item">
                        <a href="./logica-geral.html#o-que-e-logica">O que é lógica?</a>
                    </li>
                    <li class="sub-menu-item">
                        <a href="./logica-geral.html#exercicios">Exercícios</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="menu-item">
            <button class="menu-item-title">
                <span onclick="window.location.href = './linguagem-de-programacao-c.html'">Linguagem de Programação em C</span>
                <i class="fa-solid fa-chevron-left arrow"></i>
            </button>
            
            <div class="sub-menu-body">
                <ul class="sub-menu-items">
                    <li class="sub-menu-item">
                        <a href="./linguagem-de-programacao-c.html#o-que-e-linguagem-c">O que é linguagem C?</a>
                    </li>
                    <li class="sub-menu-item">
                        <a href="./linguagem-de-programacao-c.html#c-ansi">C ANSI</a>
                    </li>
                    <li class="sub-menu-item">
                        <a href="./linguagem-de-programacao-c.html#comandos-basicos-em-c">Comandos básicos em C</a>
                    </li>
                    <li class="sub-menu-item">
                        <a href="./linguagem-de-programacao-c.html#o-que-sao-variaveis">O que são variáveis?</a>
                    </li>
                    <li class="sub-menu-item">
                        <a href="./linguagem-de-programacao-c.html#por-onde-comecar">Por onde começar?</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="menu-item">
            <button class="menu-item-title">
                <span onclick="window.location.href = './bibliotecas-basicas-c.html'">Bibliotecas Básicas em C</span>
                <i class="fa-solid fa-chevron-left arrow"></i>
            </button>
            
            <div class="sub-menu-body">
                <ul class="sub-menu-items">
                    <li class="sub-menu-item">
                        <a href="./bibliotecas-basicas-c.html#o-que-sao-as-bibliotecas-em-c">O que são as bibliotecas em C?</a>
                    </li>
                    <li class="sub-menu-item">
                        <a href="./bibliotecas-basicas-c.html#exercices">Exercícios</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="menu-item">
            <button class="menu-item-title">
                <span onclick="window.location.href = './declaracao-de-variaveis.html'">Declaração de Variáveis</span>
                <i class="fa-solid fa-chevron-left arrow"></i>
            </button>
            
            <div class="sub-menu-body">
                <ul class="sub-menu-items">
                    <li class="sub-menu-item">
                        <a href="./declaracao-de-variaveis.html#o-que-e-variavel">O que é variável?</a>
                    </li>
                    <li class="sub-menu-item">
                        <a href="./declaracao-de-variaveis.html#como-declarar-variaveis">Como declarar variáveis?</a>
                    </li>
                    <li class="sub-menu-item">
                        <a href="./declaracao-de-variaveis.html#exercices">Exercícios</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="menu-item">
            <button class="menu-item-title">
                <span onclick="window.location.href = './comandos-entrada-saida.html'">Comandos de Entrada e Saída</span>
                <i class="fa-solid fa-chevron-left arrow"></i>
            </button>
            
            <div class="sub-menu-body">
                <ul class="sub-menu-items">
                    <li class="sub-menu-item">
                        <a href="./comandos-entrada-saida.html#o-que-sao-comandos-entrada-saida">O que são comandos de entrada e saída?</a>
                    </li>
                </ul>
            </div>
        </li> 
        <li class="menu-item">
            <button class="menu-item-title">
                <span onclick="window.location.href = './estrutura-condicional.html'">Estrutura Condicional</span>
                <i class="fa-solid fa-chevron-left arrow"></i>
            </button>
            
            <div class="sub-menu-body">
                <ul class="sub-menu-items">
                    <li class="sub-menu-item">
                        <a href="./estrutura-condicional.html#o-que-sao-condicionais">O que são condicionais?</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="menu-item">
            <button class="menu-item-title">
                <span onclick="window.location.href = './lacos-de-repeticao.html'">Laços de Repetição</span>
                <i class="fa-solid fa-chevron-left arrow"></i>
            </button>
            
            <div class="sub-menu-body">
                <ul class="sub-menu-items">
                    <li class="sub-menu-item">
                        <a href="./lacos-de-repeticao.html#o-que-sao-lacos-de-repeticao">O que são laços de repetição?</a>
                    </li>
                    <li class="sub-menu-item">
                        <a href="./lacos-de-repeticao.html#tipos-de-lacos-de-repeticao">Tipos de laços de repetição</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="menu-item">
            <button class="menu-item-title">
                <span onclick="window.location.href = './conhecendo-arduino.html'">Conhecendo o Arduino</span>
                <i class="fa-solid fa-chevron-left arrow"></i>
            </button>
            
            <div class="sub-menu-body">
                <ul class="sub-menu-items">
                    <li class="sub-menu-item">
                        <a href="./conhecendo-arduino.html#o-que-e-o-arduino">O que é o Arduino?</a>
                    </li>
                    <li class="sub-menu-item">
                        <a href="./conhecendo-arduino.html#como-funciona-o-arduino">Como funciona o Arduino?</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="menu-item">
            <button class="menu-item-title">
                <span onclick="window.location.href = './componentes-basicos.html'">Componentes Básicos</span>
                <i class="fa-solid fa-chevron-left arrow"></i>
            </button>
            
            <div class="sub-menu-body">
                <ul class="sub-menu-items">
                    <li class="sub-menu-item">
                        <a href="./componentes-basicos.html#principai-componentes">Principais componentes</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="menu-item">
            <button class="menu-item-title">
                <span onclick="window.location.href = './simuladores-robotica.html'">Simuladores de Robótica</span>
                <i class="fa-solid fa-chevron-left arrow"></i>
            </button>
            
            <div class="sub-menu-body">
                <ul class="sub-menu-items">
                    <li class="sub-menu-item">
                        <a href="./simuladores-robotica.html#utilizado-simulador-de-robotica">Utilizando simuladores de robótica</a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</nav>
<hr>
<div class="information">
    <a href="./sobre-a-equipe.html">Sobre a equipe</a>
    <a href="https://www.catolicasc.org.br/" target="_blank">Católica SC</a>
</div>
`

var menuLateralContainer = document.querySelector(".menu-lateral");
menuLateralContainer.innerHTML += sidebar