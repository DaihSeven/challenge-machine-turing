# 🚀 Projeto Sequencial 1/3 — Máquina de Turing

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" />
  <img src="https://img.shields.io/badge/Algoritmos-4CAF50?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Pseudocódigo-2196F3?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" />
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/daianebarbosak/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://dev-portfolio-murex-phi.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Portfólio-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
</p>

---

## 📌 Contextualização

Projeto proposto pelo **Programadores do Amanhã**, no formato **CodeLab**, com **sprints semanais**, *code review*, feedbacks contínuos e dicas de melhoria.  
O acompanhamento foi realizado por um profissional especialista em **desenvolvimento web e programação**, com atuação como **Tech Lead** e experiência em **liderança de projetos e equipes**.

---

## 🧠 O que é a Máquina de Turing?

<p align="center">
  <img src="images/alan-turing.png" alt="Alan Turing" width="250"/>
</p>

Em **1936**, a Máquina de Turing foi proposta por **Alan Mathison Turing**, renomado **matemático, cientista da computação e criptoanalista britânico**.  
Turing teve papel fundamental durante a **II Guerra Mundial**, atuando no **Government Code and Cypher School**, em Buckinghamshire, onde contribuiu para o desenvolvimento do **Colossus**, um dos primeiros computadores digitais programáveis.

Antes do fim de sua vida (**23 de junho de 1912 – 7 de junho de 1954**), também participou do projeto **ACE (Automatic Computing Engine)**, que influenciou fortemente a arquitetura dos computadores modernos.

<p align="center">
  <img src="images/maquina-turing.png" alt="Modelo da Máquina de Turing" width="400"/>
</p>

A **Máquina de Turing** é um **modelo abstrato de computação** que teve grande impacto no desenvolvimento da **lógica matemática** e da **ciência da computação teórica**.  
Ela surgiu no contexto dos debates sobre a **decidibilidade matemática**, isto é, a investigação sobre a existência de um algoritmo capaz de determinar se uma afirmação pode ser derivada de um conjunto de axiomas.

Em seu artigo, Turing demonstrou que a chamada **“automatic machine”** (ou **“a-machine”**) seria capaz de:

- Ler, escrever e apagar símbolos binários  
- Operar sobre uma fita de comprimento ilimitado  
- Mover uma cabeça de leitura e gravação para a esquerda ou direita  
- Executar instruções simples definidas por estados da máquina  

Cada regra aplicada define o que se convencionou chamar de **estado da máquina**.

> “A Máquina de Turing era a resposta de Alan Turing à questão metamatemática de Hilbert.  
> Turing estabeleceu um modelo formal de algoritmo e, pouco depois, Church proporia que qualquer procedimento efetivo poderia ser realizado por uma Máquina de Turing (Tese de Church).  
> Em outras palavras, qualquer processo que aceitamos como um algoritmo é precisamente o que uma Máquina de Turing pode executar.”  
>
> **Pozza, Osvaldo Antonio; Penedo, Sérgio**  
> Universidade Federal de Santa Catarina (UFSC)

---

## ⚙️ Processo de Desenvolvimento

O projeto foi desenvolvido ao longo de uma **sprint de 10 dias**, período no qual foram revisados conceitos fundamentais de:

- Algoritmos  
- Pseudocódigo  
- JavaScript  

Para organizar o desenvolvimento, foi criado um **esquema visual no draw.io**, centralizando:

- Objetivos e requisitos  
- Planejamento da sprint  
- Rascunhos de código  
- Exemplos práticos  
- Checklist final  

<p align="center">
  <img src="images/org-maquinaTuring.png" alt="Organização do projeto Máquina de Turing"/>
</p>

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript**
- **Algoritmos**
- **Pseudocódigo**
- **Markdown**
- **Draw.io**

---

## 🧠 Evolução do Algoritmo — Do if/else até a versão final mais próxima da Máquina de Turing

Este projeto não foi desenvolvido diretamente na versão final.
Ele foi construído de forma incremental, simulando um processo real de evolução de software, passando por:

   - Implementação inicial com if/else: 

      - O algoritmo: Percorre o array de 3 em 3 posições, identifica o operador, executa a operação correspondente, armazena o resultado, simples e funcional mas, baixa escalabilidade, código cresce rapidamente, difícil manutenção e alta repetição de lógica.

   - Refatoração com tabela de regras:

      - Tabela de Regras (Strategy Pattern): Durante feedback de uma entrevista técnica, foi sugerido substituição de estruturas condicionais extensas por uma tabela de operações, mais escalável e reutilizável, logo testei e apliquei neste projeto.

   - Uso de chunks para organização:

      - Após a análise técnica deste projeto foi me sugerido o uso de chunks, até então desconhecido para mim, até relacionar ao simples  `for (i += 3)` já usado. Dividir dados em blocos com organização estrutural, fácil debugging, separação clara de responsabilidades mas, com estruturas intermediárias que consomem mais memória e duplicação de fluxo lógico.

   - Otimização do fluxo (processamento direto):

      - Processamento Direto (Streaming): Processar cada operação no momento da leitura e eliminar estruturas intermediárias, tornando um único loop, assim como na Máquina de Turing.

   - Versão final inspirada no modelo conceitual da Máquina de Turing

---
## 🎯 Relação com a Máquina de Turing

- 📼 Fita de Entrada: fita contendo símbolos, no projeto => `sequencia_operacoes`
- 🧭 Cabeça de Leitura: percorre a fita símbolo por símbolo, no código => `for (i += 3)`
- 🔄 Estados da Máquina: cada operador representa uma regra de transição, no código => `regras[operador]`
- 🧮 Função de Transição: estado atual + símbolo → nova ação, no código => `operador → função matemática`
- 📈 Resultado da computação: array de resultados => `const resultados = []; ...  return resultados;`
---
## 💬 Conclusão

Mais do que implementar operações matemáticas, o objetivo deste projeto foi demonstrar como conceitos clássicos da ciência da computação podem ser aplicados na prática, conectando teoria e desenvolvimento moderno.


