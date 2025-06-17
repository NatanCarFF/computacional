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
        `,
        'coleta-de-dados': `
            <p><strong>Exemplo: Pesquisa de Satisfação do Cliente</strong></p>
            <p>Uma empresa quer saber o que seus clientes pensam sobre um novo produto. Ela pode <strong>coletar dados</strong> de diversas maneiras:</p>
            <ul>
                <li>Formulários online.</li>
                <li>Pesquisas por telefone.</li>
                <li>Comentários em redes sociais.</li>
                <li>Dados de vendas.</li>
            </ul>
            <p>Cada um desses métodos fornece informações valiosas para entender a opinião dos clientes.</p>
        `,
        'analise-de-dados': `
            <p><strong>Exemplo: Desempenho de Vendas Mensais</strong></p>
            <p>Uma loja coleta os dados de vendas de cada mês. Para entender se está indo bem, ela precisa da <strong>análise de dados</strong>:</p>
            <ul>
                <li>Calcular o total de vendas por produto.</li>
                <li>Identificar os produtos mais vendidos.</li>
                <li>Comparar as vendas do mês atual com as do mês anterior ou do mesmo período no ano passado.</li>
                <li>Identificar tendências (ex: vendas aumentam em feriados).</li>
            </ul>
            <p>Essa análise permite à loja tomar decisões como, por exemplo, qual produto estocar mais ou qual promoção fazer.</p>
        `,
        'representacao-de-dados': `
            <p><strong>Exemplo: Agenda de Contatos no Celular</strong></p>
            <p>Como você organiza os contatos no seu celular? É um exemplo de <strong>representação de dados</strong>.</p>
            <ul>
                <li>Cada contato tem campos específicos: Nome, Telefone, E-mail, Endereço.</li>
                <li>Eles são geralmente listados em ordem alfabética.</li>
                <li>Você pode pesquisar por nome.</li>
            </ul>
            <p>Essa estrutura padronizada (nome, telefone, etc.) é uma forma de representar os dados de contato, tornando-os fáceis de encontrar e usar.</p>
        `,
        automacao: `
            <p><strong>Exemplo: Robô Aspirador de Pó</strong></p>
            <p>Um <strong>robô aspirador de pó</strong> é um ótimo exemplo de automação.</p>
            <ul>
                <li>Você o programa para limpar a casa em horários específicos.</li>
                <li>Ele navega pela casa, aspira o chão e retorna à base para carregar, tudo sem sua intervenção direta.</li>
            </ul>
            <p>Ele automatiza uma tarefa doméstica, liberando seu tempo para outras atividades.</p>
        `,
        paralelismo: `
            <p><strong>Exemplo: Cozinhar um Jantar Complexo</strong></p>
            <p>Ao preparar um jantar com vários pratos (ex: arroz, feijão, carne e salada), você usa o <strong>paralelismo</strong>:</p>
            <ul>
                <li>Enquanto o arroz cozinha, você pode estar cortando os ingredientes da salada.</li>
                <li>Ao mesmo tempo, a carne pode estar fritando.</li>
            </ul>
            <p>Se você fizesse cada coisa uma de cada vez (primeiro o arroz, depois a salada, depois a carne), levaria muito mais tempo. O paralelismo permite que várias tarefas aconteçam ao mesmo tempo.</p>
        `,
        simulacao: `
            <p><strong>Exemplo: Teste de Colisão de Carros (Virtual)</strong></p>
            <p>Antes de fabricar um carro e fazer um teste de colisão real (que é caro e destrutivo), as montadoras usam <strong>simulações</strong> em computadores.</p>
            <ul>
                <li>Eles criam um modelo virtual do carro e do ambiente de colisão.</li>
                <li>Rodam a simulação para ver como o carro se deforma, como os airbags se comportam, etc.</li>
            </ul>
            <p>Isso permite que eles testem diferentes designs e materiais de forma segura, rápida e econômica, antes de produzir um protótipo físico.</p>
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