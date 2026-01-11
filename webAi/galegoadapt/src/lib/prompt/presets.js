export const MODE_DESCRIPTIONS = {
TDAH: `
- Adapta o texto para alumnado con TDAH en educación obrigatoria.
- NON fagas un resumo nin reduzas o contido importante.
- Mantén TODAS as ideas e datos relevantes do texto orixinal.
- O novo texto debe ter unha lonxitude semellante ao orixinal (entre o 80 % e o 120 % de palabras).
- Se tes dúbida entre manter ou eliminar unha información, MANTÉNA.

- Reescribe as frases para que sexan máis claras e curtas (idealmente 10–20 palabras), pero sen perder detalles.
- Non elimines exemplos nin explicacións que axuden a comprender o tema.
- Podes eliminar só repeticións claras, frases de recheo ou adxectivos decorativos que non cambian o significado.

- Divide a información en bloques pequenos e claros, evitando parágrafos moi longos.
- Cada parágrafo debe ter entre 1 e 3 frases como máximo.
- Comeza cada bloque cunha idea principal clara e explícita, seguida das explicacións necesarias.

- Organiza o texto con títulos e subtítulos moi claros (máx. 4–5 palabras).
- Usa listas con viñetas (-) ou numeradas (1., 2., 3.) sempre que haxa varios elementos, pasos, características ou exemplos.
- Nas listas, mantén unha estrutura paralela (tódolos puntos comezan de forma similar, preferiblemente con verbo).

- Simula negriña usando **dúas estrelas** ao principio e ao final da palabra ou fragmento importante.
- Non marques en negriña máis de 1–2 elementos por parágrafo.
- Non uses subliñado nin cursiva, salvo casos moi excepcionais.

- Explica o vocabulario difícil con palabras máis simples ou cun pequeno exemplo entre parénteses.
- Vai de máis sinxelo a máis complexo, introducindo os conceptos paso a paso.
- Se o texto é moi longo, podes engadir mini-resumos de 1 frase ao final das seccións, pero sen eliminar o contido principal.

- Mantén unha orde lóxica e estable, sen saltos bruscos de tema.
- O ton debe ser neutro, próximo e motivador, evitando adxectivos alarmistas ou estigmatizantes.

- Se tes que xerar preguntas a partir do texto:
  - Fai preguntas curtas, con unha soa idea por pregunta.
  - Usa formato moi claro en lista numerada (1., 2., 3., …).
  - Evita enunciados dobres do tipo "explica e xustifica e pon un exemplo"; separa en dúas preguntas se é necesario.

- Devolve só o texto xa adaptado en galego, con títulos, parágrafos curtos e listas cando proceda, sen explicar os cambios que fixeches.
- Lembra: NON resumas nin recortes información; reformula mantendo practicamente a mesma cantidade de contido.
`,
AUTISMO:`
- Adapta o texto para alumnado con trastorno do espectro autista (TEA) en educación obrigatoria.
- NON fagas un resumo agresivo nin elimines información importante; o obxectivo é mudar a forma, non o fondo.
- Mantén todas as ideas clave, exemplos importantes e definicións relevantes do texto orixinal.

- Usa linguaxe simple, literal e predecible:
  - Evita metáforas complexas, ironías, dobres sentidos ou chistes que dependan de inferencias sociais.
  - Se o texto orixinal contén metáforas ou expresións figuradas, substitúea por explicacións literais claras.
  - Evita frases moi longas con moitas subordinadas; se é necesario, párteas en 2–3 frases máis curtas.

- Mantén unha estrutura moi clara e visible:
  - Comeza sempre cunha breve introdución que explique de que trata o texto.
  - Organiza o contido en seccións, usando títulos e subtítulos claros (máx. 4–6 palabras).
  - Nunha orde lóxica e estable (por exemplo: definición → características → exemplos → conclusión).

- Introduce os conceptos paso a paso:
  - Presenta primeiro as ideas máis xerais e logo as máis específicas (de xeral a particular).
  - Cando introduzas un concepto novo, explícase de forma sinxela e, se é útil, engade un exemplo concreto.
  - Evita introducir moitas ideas novas de golpe no mesmo parágrafo.

- Usa formato visual predecible:
  - Usa listas con viñetas (-) ou numeradas (1., 2., 3.) para enumerar pasos, características, vantaxes/inconvenientes, etc.
  - Nunha lista, mantén unha estrutura paralela (por exemplo, tódolos puntos comezan con verbo no infinitivo ou co mesmo tipo de palabra).
  - Se hai procedementos ou instrucións, preséntaas en pasos claros e numerados.

- Axuda á comprensión con marcadores e repetición:
  - Podes usar marcadores tipo "En resumo:", "En conclusión:", "O máis importante é que..." para sinalar ideas clave.
  - Repite de forma breve as ideas máis importantes ao final da sección, cun mini-resumo de 2–3 frases.
  - Usa conectores claros que sinalen cambios: "En primeiro lugar", "Despois", "A continuación", "Por último".

- Xestiona os cambios de tema:
  - Evita cambios bruscos; avisa sempre que cambies de sección ou subtema.
  - Cando cambies de tema, engade unha frase de transición que indique o cambio ("Agora imos falar de...", "Por outra banda...").
  - Non mestures demasiados temas diferentes no mesmo parágrafo.

- Minimiza a sobrecarga sensorial e de información:
  - Evita acumulación de datos numéricos, excepcións ou casos especiais no mesmo parágrafo; se son necesarios, preséntanse en listaxe.
  - Divide os bloques longos en parágrafos máis curtos (1–4 frases cada un).
  - Se hai moita información, organiza en subapartados con títulos claros en vez de un texto continuo.

- Clarifica vocabulario e referencias:
  - Se hai termos técnicos, explica brevemente o seu significado con palabras máis simples entre parénteses.
  - Evita siglas sen explicar; a primeira vez que aparezan, escribe o nome completo e a sigla.
  - Se hai referencias temporais ou espaciais ambiguas ("máis tarde", "alí", "iso"), aclara a que se refiren.

- Ton e estilo:
  - Usa un ton neutro, respectuoso e non infantilizado.
  - Evita xuízos de valor sobre comportamentos típicos de TEA; céntrate en describir, non en etiquetar.
  - Non uses adxectivos alarmistas nin expresións que poidan resultar estigmatizantes.

- Formato do texto que debes devolver:
  - Emprega títulos en markdown con "# " para o título principal e "## " para seccións importantes.
  - Emprega listas en markdown con "-" ou "1." cando proceda.
  - Podes usar **negriñas** en markdown para resaltar conceptos clave ou palabras que deban ser lembradas.
  - Mantén o texto ben espazado, con liñas en branco entre seccións para que sexa doado de seguir visualmente.

- Devolve só o texto xa adaptado en galego, sen explicar os cambios que fixeches.
- Lembra: o obxectivo é facer o texto máis claro, predecible e estruturado para un alumno con TEA, mantendo o contido esencial.
`,
  RESUMO: `
- Fai un resumo do texto en galego.
- Conserva todas as ideas principais, os conceptos clave e as conclusións importantes.
- Elimina repeticións, detalles secundarios moi específicos e exemplos que non sexan imprescindibles para entender o tema.

- Extensión orientativa:
  - Se o texto é curto ou medio, intenta un resumo de arredor de 150–200 palabras.
  - Se o texto é moi longo ou complexo, permite un máximo de 250 palabras.
- Se precisas escoller entre ser máis curto ou máis longo, prioriza manter as ideas clave aínda que o resumo sexa lixeiramente máis longo do previsto.

- Nivel de lectura aproximado: B1.
  - Usa frases claras e directas.
  - Evita terminoloxía moi técnica sen explicar.
  - Se usas un termo difícil, engade unha breve aclaración en palabras máis simples.

- Estrutura recomendada do resumo:
  - 1 parágrafo inicial que indique o tema xeral e o propósito do texto.
  - 1–2 parágrafos centrais que recollan as ideas principais e como se relacionan entre si.
  - 1 parágrafo final opcional que sintetice a idea clave ou a conclusión principal.

- Foco do resumo:
  - Responde implicitamente ás preguntas: De que trata o texto? Cal é a idea principal? Que argumentos ou puntos fundamentais presenta?
  - Non inclúas opinións propias nin información que non apareza no texto orixinal.
  - Non copies frases enteiras do texto se non é necesario; reformula coas túas palabras mantendo o significado.

- Formato do texto que debes devolver:
  - Resumo en prosa continua (non en forma de lista de puntos).
  - Sen títulos nin seccións adicionais, salvo que o texto orixinal estea dividido en partes moi claras que sexa útil nomear.
  - Non expliques que estás facendo un resumo; devolve só o resumo final.

- Lembra:
  - O resumo debe ser fiel ao contido orixinal, claro para un lector de nivel B1 e suficientemente completo para que se entenda o tema sen ler o texto completo.
`,
EXERCICIOS: `
- Xera actividades e exercicios a partir do texto para alumnado de educación obrigatoria.
- Os exercicios deben ser aptos para alumnado con TDAH e TEA:
  - Enunciados curtos e claros, cunha soa idea por exercicio.
  - Formato visual estruturado (listas numeradas, apartados ben diferenciados).
  - Sen ambigüidades nin enunciados moi longos.

- Antes de crear os exercicios, identifica mentalmente o tipo de contido:
  - Se o texto é de lingua (gramática, vocabulario, comprensión lectora...).
  - Se é de ciencias, historia, xeografía, matemáticas, valores, etc.
  - Adapta os tipos de exercicio á natureza do texto (por exemplo: se fala de adxectivos, crea exercicios específicos de adxectivos; se fala de datas históricas, crea exercicios de liña do tempo, etc.).

- Estrutura xeral que debes devolver:
  - Usa títulos en galego para cada bloque de exercicios, por exemplo:
    - "Comprensión lectora"
    - "Vocabulario"
    - "Gramática"
    - "Contidos clave"
    - "Aplicación e reflexión"
  - Dentro de cada bloque, numera claramente os exercicios (1., 2., 3., ...).
  - Se un exercicio ten varios ítems, usa letras (a), b), c)...) ou subnumeración (1.1, 1.2, ...).

- Tipos de exercicio que podes combinar (elixe 4–6 tipos en función do texto):

  1) Preguntas de opción múltiple:
     - 3–5 preguntas.
     - Para cada unha: enunciado curto + opcións A, B, C, D + indica cal é a correcta ao final da liña ("Resposta correcta: B").
     - Baseadas literalmente no contido do texto (dato, idea principal, detalle importante).

  2) Preguntas curtas de resposta aberta:
     - 3–5 preguntas.
     - Resposta esperada en 1–2 frases ou poucas palabras.
     - Centra as preguntas en ideas clave do texto, non en detalles irrelevantes.

  3) Verdadeiro ou Falso:
     - 3–5 enunciados.
     - Inclúe ao final de cada un a indicación entre parénteses: "(V)" ou "(F)".
     - Mestura enunciados verdadeiros e falsos para comprobar comprensión.

  4) Completar frases:
     - 3–5 frases extraídas ou reformuladas a partir do texto, con 1–2 ocos en branco (__________).
     - Os ocos deben corresponder a termos importantes (conceptos, datas, lugares, adxectivos clave, etc.).

  5) Relacionar columnas:
     - Lista A: 4–6 elementos (por exemplo, termos, personaxes, conceptos).
     - Lista B: 4–6 definicións, datas, características ou exemplos correspondentes.
     - Indica claramente que o alumno debe unir cada elemento de A coa opción correcta de B.

  6) Subliñar ou marcar elementos:
     - Indica pequenos fragmentos de texto (1–3 frases) e pide:
       - "Subliña os adxectivos que aparezan."
       - "Marca en cor as datas importantes."
       - "Rodea os nomes propios de persoas/lugares."
     - Describe ben o que se debe subliñar/marcar, adaptado ao contido do texto.

  7) Exercicios específicos de vocabulario:
     - Se o texto é de lingua, podes pedir:
       - "Escribe 5 adxectivos que describan o personaxe principal."
       - "Escribe sinónimos máis sinxelos para estas palabras do texto."
       - "Clasifica estas palabras en nomes, verbos e adxectivos."
     - Se o texto é doutra área, adapta o vocabulario clave (termos científicos, históricos, etc.).

  8) Ordenar pasos ou secuencias:
     - Se o texto describe un proceso, pide:
       - "Ordena estes pasos segundo aparecen no texto."
       - "Numera do 1 ao 5 estes feitos históricos na orde correcta."
     - Dá unha lista desordenada e indica que deben reordenala.

  9) Problemas ou cuestións de aplicación:
     - 1–3 exercicios onde o alumando aplique o aprendido a unha situación nova pero sinxela.
     - Enunciados curtos, moi guiados, por exemplo:
       - "Imagina unha situación similar á do texto e escribe 2 frases explicando como reaccionarías."
       - "Aplica a regra explicada no texto a este exemplo novo: ..."

- Adaptación específica para TDAH e TEA:
  - Mantén os enunciados simples, sen información accesoria innecesaria.
  - Divide as tarefas complexas en varios pasos numerados.
  - Usa palabras como "Primeiro", "Despois", "Por último" para guiar a secuencia nos exercicios que teñan varios pasos.
  - Evita que un mesmo exercicio pida facer demasiadas cousas á vez ("le, subliña, comenta e debuxa"); separa en 2–3 exercicios distintos se é necesario.

- Formato do texto que debes devolver:
  - Usa títulos claros en galego para cada bloque de exercicios (por exemplo, "## Comprensión lectora", "## Vocabulario").
  - Usa listas numeradas para os exercicios (1., 2., 3., ...) e, se é necesario, letras para subítems (a), b), c)).
  - Se indicas respostas correctas, faino de forma moi visible, por exemplo: "Resposta correcta: C".

- Devolve só a listaxe de exercicios en galego, ben estruturada e numerada, sen explicar como os deseñaches.
`,

};
