# Identidade visual

> Como a marca aparece em tudo que o MazyOS gera.
> As skills de conteúdo, carrossel e post leem esse arquivo antes de criar qualquer visual.
> Edite quando a marca evoluir.

---

## Cores

Identidade monocromática (preto e branco puro) — duas variações válidas, conforme a peça:

- **Variação escura (padrão):** fundo #000000, texto/traço #FFFFFF
- **Variação clara:** fundo #FFFFFF, texto/traço #000000 — usada em carrosséis e peças onde o fundo claro facilita leitura ou combina com o contexto (ex: feed intercalado)

- **Cor de destaque / CTA:** Nenhuma nas duas variações

- **Cor proibida:** Qualquer cor fora de preto/branco — manter monocromático em ambas

---

## Tipografia

- **Títulos e destaques:** Michroma (geométrica, caixa alta, letter-spacing largo)
- **Corpo:** IBM Plex Sans
- **Labels, contador, rodapé, @handle:** IBM Plex Mono (uppercase, tracked)
- **Peso do título:** Bold / caixa alta

**Fontes locais (obrigatório usar):** `identidade/fontes/fonts.css` tem as três famílias
já embutidas em arquivos `.woff2` locais (`identidade/fontes/files/`). Toda peça HTML
(carrossel, proposta, etc.) deve linkar esse arquivo — `<link rel="stylesheet" href="caminho/pra/identidade/fontes/fonts.css">`
— em vez do link do Google Fonts. Isso evita depender de rede pra renderizar (essencial
pra rotinas automáticas rodando em sandbox, onde o link direto do Google Fonts falha).

---

## Estilo geral

Monocromático (preto e branco), visual tech/geométrico. Mark em "A" com
swoosh diagonal atravessando o vértice.

---

## Elementos-chave

- Bordas: Linhas finas brancas sobre fundo preto (ex: divisor vertical entre mark e wordmark, badge circular/retangular)
- Border-radius dos cards: —
- Botões: —
- Sombras: Evitar — visual é chapado (preto/branco), sem profundidade

---

## O que NUNCA fazer

- Não introduzir cores fora de preto/branco
- Não usar emojis nem elementos decorativos que fujam do estilo geométrico/tech

---

## Logo

Todas as variações abaixo têm fundo transparente e existem em **duas tintas** — `-black` (traço preto, pra fundo claro) e `-white` (traço branco, pra fundo escuro):

- **identidade/logo-mark-white.png** — lockup completo, branco, fundo transparente (versão original, mantida por compatibilidade)
- **identidade/logo-mark-only-white.png** — só o símbolo "A", branco, fundo transparente (versão original, mantida por compatibilidade)
- **identidade/logo-variacoes-sheet.png** — folha de referência com todas as variações juntas (fonte original, não recortada)
- **identidade/variacoes/logo-lockup-{black,white}.png** — lockup completo (mark + "ATLAZ" + "MARKETING DIGITAL")
- **identidade/variacoes/logo-lockup-linhas-{black,white}.png** — lockup completo com linhas flanqueando "MARKETING DIGITAL" (bom pra capa/abertura)
- **identidade/variacoes/logo-horizontal-divisor-{black,white}.png** — mark + divisor vertical + wordmark, compacto (bom pra header/rodapé de peças)
- **identidade/variacoes/logo-badge-retangular-{black,white}.png** — lockup horizontal dentro de badge retangular arredondado
- **identidade/variacoes/logo-badge-circular-{black,white}.png** — só o mark dentro de badge circular
- **identidade/variacoes/logo-circular-horizontal-{black,white}.png** — mark em badge circular + wordmark ao lado

**Onde usar:**
- Capa e CTA final de carrossel → lockup completo (`logo-lockup` ou `logo-lockup-linhas`)
- Header/rodapé de slides internos, propostas → `logo-horizontal-divisor` (compacto)
- Ícone/avatar, favicon, marca d'água → `logo-badge-circular` ou mark isolado
- **Tamanho sugerido:** largura entre 120-200px nos HTMLs (lockup completo); mark isolado funciona bem de 32-64px como ícone
