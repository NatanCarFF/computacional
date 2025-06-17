document.addEventListener('DOMContentLoaded', () => {
    const exampleButtons = document.querySelectorAll('.example-btn');
    const examples = {
        decomposicao: `
            <p><strong>Exemplo: Planejamento de uma Viagem de Carro</strong></p>
            <p>Em vez de pensar em "ir de carro para outra cidade" como um único problema, podemos decompô-lo:</p>
            <ul>
                <li><strong>Escolher o destino e a data:</strong> Onde e quando vamos?</li>
                <li><strong>Verificar o carro:</strong> Pneus, óleo, água, combustível, freios.</li>
                <li><strong>Planejar a rota:</strong> Qual caminho seguir, paradas para descanso/comida.</li>
                <li><strong>Fazer as malas:</strong> O que levar para a viagem e a estadia.</li>
                <li><strong>Dirigir:</strong> A ação de conduzir o veículo até o destino.</li>
            </ul>
            <p>Cada uma dessas partes é um problema menor e mais fácil de resolver individualmente.</p>
        `,
        abstracao: `
            <p><strong>Exemplo: Usar um Caixa Eletrônico</strong></p>
            <p>Quando você usa um caixa eletrônico para sacar dinheiro, você não precisa saber os detalhes internos de como a máquina se comunica com o banco, como os dados são criptografados ou como o dinheiro é fisicamente contado e liberado.</p>
            <p>Você se concentra apenas nas interações essenciais:</p>
            <ul>
                <li>Inserir o cartão.</li>
                <li>Digitar sua senha.</li>
                <li>Selecionar a opção "saque".</li>
                <li>Digitar o valor.</li>
                <li>Retirar o dinheiro e o recibo.</li>
            </ul>
            <p>Todos os detalhes complexos de como o caixa eletrônico funciona internamente são "abstraídos" para que você possa usar o serviço de forma simples e eficiente.</p>
        `,
        'reconhecimento-de-padroes': `
            <p><strong>Exemplo: Organizar Livros em uma Biblioteca</strong></p>
            <p>Imagine que você precisa organizar uma biblioteca enorme. Seria inviável criar um método único para cada livro.</p>
            <p>Você reconhece padrões:</p>
            <ul>
                <li>Livros sobre o mesmo assunto (ex: ficção científica, história, biologia) podem ser agrupados.</li>
                <li>Livros do mesmo autor podem ser colocados juntos.</li>
                <li>Livros de tamanhos semelhantes podem ser armazenados em prateleiras específicas.</li>
            </ul>
            <p>Ao reconhecer esses padrões, você pode aplicar soluções semelhantes (métodos de classificação por assunto, autor, ou tamanho) para organizar milhares de livros de forma eficiente, sem precisar de uma solução única para cada um.</p>
        `,
        algoritmos: `
            <p><strong>Exemplo: Fazer um Bolo de Chocolate</strong></p>
            <p>Uma receita de bolo é um excelente exemplo de algoritmo. Ela é um conjunto de instruções passo a passo para alcançar um objetivo (fazer o bolo):</p>
            <ol>
                <li>Pré-aqueça o forno a 180°C.</li>
                <li>Unte e enfarinhe uma forma.</li>
                <li>Em uma tigela, misture a farinha, o açúcar, o chocolate em pó e o fermento.</li>
                <li>Em outra tigela, bata os ovos, o óleo e o leite.</li>
                <li>Adicione os ingredientes líquidos aos secos e misture bem.</li>
                <li>Despeje a massa na forma.</li>
                <li>Asse por 30-40 minutos ou até que um palito saia limpo.</li>
                <li>Deixe esfriar antes de desenformar.</li>
            </ol>
            <p>Se você seguir essas instruções na ordem correta, o resultado esperado (um bolo de chocolate) será alcançado. Cada etapa é uma instrução clara e simples.</p>
        `
    };

    exampleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pillarId = button.dataset.pillar;
            const exampleContentDiv = document.getElementById(`example-${pillarId}`);

            // Toggle a classe 'active' para mostrar/esconder o conteúdo
            if (exampleContentDiv.classList.contains('active')) {
                exampleContentDiv.classList.remove('active');
                button.textContent = 'Ver Exemplo';
            } else {
                // Remove 'active' de todos os outros exemplos abertos
                document.querySelectorAll('.example-content.active').forEach(openExample => {
                    openExample.classList.remove('active');
                    // E atualiza o texto dos botões correspondentes
                    document.querySelector(`button[data-pillar="${openExample.id.replace('example-', '')}"]`).textContent = 'Ver Exemplo';
                });

                exampleContentDiv.innerHTML = examples[pillarId];
                exampleContentDiv.classList.add('active');
                button.textContent = 'Esconder Exemplo';
            }
        });
    });
});