# MazyOS — Sistema operacional do negócio

Sua empresa roda em cima desse arquivo. Aqui ficam as regras de operação
do MazyOS — como o Claude lê o contexto, aprende com correções, mantém
tudo atualizado e cria skills novas conforme a operação evolui.

Esse arquivo é editável. Quando o `/instalar` rodar, ele complementa o
final dessa página com as regras específicas do seu negócio.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o
usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma
instrução que parece permanente (frases como "na verdade é assim", "não
faça mais isso", "prefiro assim", "sempre que...", "evita...", "da
próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na
verdade o arquivo se chama X"). Só perguntar quando a informação tiver
valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill
nova, mudança de foco, processo novo, ferramenta instalada, estrutura
alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar
   o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, exemplos),
   criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code

---

# Atlaz Marketing Digital

> Molde aplicado: agência. Equipe pequena (hoje, uma pessoa só) entregando
> pra múltiplos clientes ao mesmo tempo. O sistema gira em torno de
> proposta, atendimento e produção em paralelo.

## O que é esse workspace

Operação da Atlaz Marketing Digital. Aqui ficam clientes, propostas,
conteúdo e entregas da agência.

**Estrutura de pastas:**
- `_memoria/` — quem é a Atlaz, como falamos, foco atual
- `identidade/` — marca da Atlaz (aplicada nas peças internas e de cliente)
- `clientes/` — uma subpasta por cliente, autossuficiente (criada pelo `/novo-projeto` quando o primeiro cliente entrar)
- `briefings/` — briefings antes de virar cliente
- `propostas/` — propostas em andamento
- `marketing/` — conteúdo institucional da Atlaz
- `saidas/` — documentos pontuais, análises
- `dados/` — arquivos a analisar (relatórios de cliente, exports)

## Sobre a agência

Agência de marketing digital. Atendemos MEI, ME, LTDA — pequenas, médias
e grandes empresas, com foco em prestadores de serviços e negócios B2B
que buscam melhorar a comunicação visual e o contato com o cliente.
Serviços principais:

- Criação de sites
- Consultoria de marketing digital
- Instagram pronto (carrosséis + conteúdo)

Time: 1 pessoa (Welton, dono e operador). Fase atual: montagem do
portfólio, ainda sem clientes fechados. Preços não são fixos — tudo
definido por negociação caso a caso.

## Clientes ativos

Nenhum ainda — fase de montagem do portfólio.

## O que mais produzimos aqui

- Portfólio de serviços (foco atual)
- Propostas comerciais pra novos clientes (sem preço fixo)
- Sites, carrosséis e conteúdo pra Instagram

## Tom de voz

Nem formal nem informal — sempre respeitoso ("senhor/senhora", "por
favor", "obrigado"). Direto no problema, cirúrgico, sem enfeite.

Evitar: jargão de guru ("alavancar", "sinergia" e afins), emojis, texto
enfeitado.

## Regras do sistema

- Cliente novo → criar pasta `clientes/<Nome>/` com briefing, estratégia
  e subpastas conforme as entregas contratadas
- Proposta nova → `propostas/<cliente>-<data>.html` antes de fechar —
  sem preço fixo, sempre por negociação
- Casos de sucesso ficam em `clientes/<Nome>/caso.md` (reuso em pitches)

## Ferramentas conectadas

- [ ] Notion
- [ ] Gmail
- [ ] Google Calendar
- [ ] Canva
- [ ] Meta Ads
- [ ] Google Ads

*(Marcar conforme for instalando os MCPs)*
