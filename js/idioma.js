/* Selector de idioma (Español / English / Português).
   - Traduce la interfaz con el diccionario de abajo.
   - Traduce también el contenido que publicas desde el Panel: las traducciones se generan al pulsar «Publicar cambios»
     (se guardan junto al contenido) y se pueden corregir en la pestaña «Traducciones» del Panel. */
(function(){
const L={es:"Español",en:"English",pt:"Português"};
const T=[
["Inicio","Home","Início"],["Agenda semanal","Weekly schedule","Agenda semanal"],["Guías","Guides","Guias"],["Más juegos","More games","Mais jogos"],["Novedades","News","Novidades"],["Novedades y esports","News & esports","Novidades e eSports"],
["Agenda actualizada cada semana","Schedule updated every week","Agenda atualizada toda semana"],
["Todo lo de","Everything about","Tudo sobre"],["en un solo lugar","in one place","em um só lugar"],
["Eventos de la semana, sensibilidad para tu celular, combos de personajes y trucos de mapas, siempre con información confirmada.","This week's events, sensitivity settings for your phone, character combos and map tips, always with confirmed information.","Eventos da semana, sensibilidade para o seu celular, combos de personagens e dicas de mapas, sempre com informação confirmada."],
["Ver la agenda de hoy","See today's schedule","Ver a agenda de hoje"],["Ver guías y sensibilidad","Guides & sensitivity","Guias e sensibilidade"],
["Noticias y esports","News and esports","Notícias e eSports"],["Otros para probar","Others to try","Outros para testar"],["Sensibilidad, combos y mapas","Sensitivity, combos and maps","Sensibilidade, combos e mapas"],["Agenda","Schedule","Agenda"],["Eventos y recompensas","Events and rewards","Eventos e recompensas"],
["Nueva agenda en","New schedule in","Nova agenda em"],["días","days","dias"],["horas","hours","horas"],["min","min","min"],["seg","sec","seg"],["Hoy","Today","Hoje"],
["Sin eventos hoy. Mira el resto de la semana.","No events today. Check the rest of the week.","Sem eventos hoje. Veja o resto da semana."],
["Resumen de hoy","Today's summary","Resumo de hoje"],["Secciones del sitio","Site sections","Seções do site"],
["Lun","Mon","Seg"],["Mar","Tue","Ter"],["Mié","Wed","Qua"],["Jue","Thu","Qui"],["Vie","Fri","Sex"],["Sáb","Sat","Sáb"],["Dom","Sun","Dom"],
["Lunes","Monday","Segunda-feira"],["Martes","Tuesday","Terça-feira"],["Miércoles","Wednesday","Quarta-feira"],["Jueves","Thursday","Quinta-feira"],["Viernes","Friday","Sexta-feira"],["Sábado","Saturday","Sábado"],["Domingo","Sunday","Domingo"],
["lunes","Monday","segunda-feira"],["martes","Tuesday","terça-feira"],["miércoles","Wednesday","quarta-feira"],["jueves","Thursday","quinta-feira"],["viernes","Friday","sexta-feira"],["sábado","Saturday","sábado"],["domingo","Sunday","domingo"],
["Eventos y recompensas confirmadas de la semana","Confirmed events and rewards of the week","Eventos e recompensas confirmados da semana"],
["Guías de optimización","Optimization guides","Guias de otimização"],["Sensibilidad para tu celular, combos y trucos","Sensitivity for your phone, combos and tips","Sensibilidade para o seu celular, combos e dicas"],
["Descubre otros juegos para probar","Discover other games to try","Descubra outros jogos para testar"],["Noticias confirmadas de Free Fire","Confirmed Free Fire news","Notícias confirmadas de Free Fire"],
["Guías de sensibilidad, combos y trucos de Free Fire, hechas por fans.","Free Fire sensitivity guides, combos and tips, made by fans.","Guias de sensibilidade, combos e dicas de Free Fire, feitos por fãs."],
["Explora","Explore","Explore"],["Términos y condiciones","Terms and conditions","Termos e condições"],["Política de privacidad","Privacy policy","Política de privacidade"],["Acerca de y contacto","About and contact","Sobre e contato"],
["FreeFireZone / AgendaBooyah es un sitio independiente de fans, sin relación con Garena. Free Fire y sus personajes pertenecen a sus dueños. La información es orientativa y puede cambiar con las actualizaciones del juego.","FreeFireZone / AgendaBooyah is an independent fan site, not affiliated with Garena. Free Fire and its characters belong to their owners. The information is for guidance only and may change with game updates.","FreeFireZone / AgendaBooyah é um site independente de fãs, sem relação com a Garena. Free Fire e seus personagens pertencem aos seus donos. As informações são orientativas e podem mudar com as atualizações do jogo."],
["Usamos almacenamiento local y, si lo aceptas, cookies de publicidad de Google.","We use local storage and, if you accept, Google advertising cookies.","Usamos armazenamento local e, se você aceitar, cookies de publicidade do Google."],
["Más información","More information","Mais informações"],["Aceptar","Accept","Aceitar"],["Rechazar","Reject","Recusar"],["Volver arriba","Back to top","Voltar ao topo"],["Abrir menú","Open menu","Abrir menu"],["Idioma","Language","Idioma"],["Publicidad","Advertising","Publicidade"],
["Elige un día o filtra por tipo de evento. Publicamos solo información confirmada.","Pick a day or filter by event type. We only publish confirmed information.","Escolha um dia ou filtre por tipo de evento. Publicamos apenas informação confirmada."],
["Todos","All","Todos"],["Todas","All","Todas"],["Recarga de diamantes","Diamond top-up","Recarga de diamantes"],["Eventos","Events","Eventos"],["Pases de batalla","Battle passes","Passes de batalha"],["Diamantes","Diamonds","Diamantes"],["Pase de batalla","Battle pass","Passe de batalha"],["Otros","Other","Outros"],
["Filtrar por tipo","Filter by type","Filtrar por tipo"],["Días de la semana","Days of the week","Dias da semana"],["Checklist semanal","Weekly checklist","Checklist semanal"],
["Reclama tus recompensas diarias.","Claim your daily rewards.","Resgate suas recompensas diárias."],["Completa las misiones semanales y del pase.","Complete the weekly and pass missions.","Complete as missões semanais e do passe."],["Revisa el menú de Eventos dentro del juego.","Check the Events menu inside the game.","Confira o menu de Eventos dentro do jogo."],["Mira el calendario oficial en las redes de Free Fire.","Check the official calendar on Free Fire's social media.","Veja o calendário oficial nas redes do Free Fire."],["Actualiza el juego antes de jugar.","Update the game before playing.","Atualize o jogo antes de jogar."],
["Fechas y premios exactos siempre se confirman dentro del juego.","Exact dates and prizes are always confirmed inside the game.","Datas e prêmios exatos sempre são confirmados dentro do jogo."],
["Ajusta tu sensibilidad, domina los combos de personajes y llega más lejos en cada mapa.","Adjust your sensitivity, master character combos and go further on every map.","Ajuste sua sensibilidade, domine os combos de personagens e vá mais longe em cada mapa."],
["Sensibilidad por celular","Sensitivity by phone","Sensibilidade por celular"],["Combos de habilidades","Ability combos","Combos de habilidades"],["Trucos de mapas","Map tips","Dicas de mapas"],
["Tu celular","Your phone","Seu celular"],["Pantalla (pulgadas)","Screen (inches)","Tela (polegadas)"],["Frecuencia (Hz)","Refresh rate (Hz)","Taxa de atualização (Hz)"],["Detectar mi pantalla","Detect my screen","Detectar minha tela"],["Tu estilo de juego","Your play style","Seu estilo de jogo"],["Cómo juegas","How you play","Como você joga"],
["Prefiero: más control ↔ más velocidad","I prefer: more control ↔ more speed","Prefiro: mais controle ↔ mais velocidade"],
["Rusher (combates cercanos)","Rusher (close combat)","Rusher (combate corpo a corpo)"],["Mixto","Mixed","Misto"],["Francotirador (media y larga distancia)","Sniper (mid and long range)","Sniper (média e longa distância)"],["2 dedos","2 fingers","2 dedos"],["3 dedos","3 fingers","3 dedos"],["4 dedos (garras)","4 fingers (claw)","4 dedos (garra)"],
["Son valores de partida calculados con tu pantalla, tu estilo y tus dedos. Afínalos en el campo de entrenamiento.","These are starting values calculated from your screen, your style and your fingers. Fine-tune them in the training ground.","São valores iniciais calculados com sua tela, seu estilo e seus dedos. Ajuste-os no campo de treinamento."],
["Tu configuración","Your settings","Sua configuração"],["Copiar valores","Copy values","Copiar valores"],
["Las habilidades se ajustan con cada actualización. Revisa las notas del parche vigente antes de elegir.","Abilities are adjusted with every update. Check the current patch notes before choosing.","As habilidades são ajustadas a cada atualização. Confira as notas do patch atual antes de escolher."],
["Otros juegos que te pueden gustar, elegidos por nosotros.","Other games you might like, picked by us.","Outros jogos que você pode gostar, escolhidos por nós."],["Jugar","Play","Jogar"],
["Pronto publicaremos más juegos. Vuelve pronto.","We'll publish more games soon. Come back soon.","Em breve publicaremos mais jogos. Volte logo."],
["Noticias de la comunidad y de Free Fire, publicadas solo cuando están confirmadas.","News from the community and Free Fire, published only when confirmed.","Notícias da comunidade e do Free Fire, publicadas somente quando confirmadas."],
["Es el campeonato mundial de Free Fire organizado por Garena. Para ver calendario, equipos, transmisiones y premios usa siempre los canales oficiales de Free Fire; aquí resumimos lo confirmado cuando hay novedades.","It is the Free Fire world championship organized by Garena. For the schedule, teams, broadcasts and prizes always use the official Free Fire channels; here we summarize what is confirmed when there is news.","É o campeonato mundial de Free Fire organizado pela Garena. Para ver calendário, equipes, transmissões e prêmios use sempre os canais oficiais do Free Fire; aqui resumimos o que está confirmado quando há novidades."],
["Aún no hay novedades publicadas. Vuelve pronto.","No news published yet. Come back soon.","Ainda não há novidades publicadas. Volte logo."],
["Agenda, sensibilidad y trucos de Free Fire","Free Fire schedule, sensitivity and tips","Agenda, sensibilidade e dicas de Free Fire"],
["Agenda semanal de eventos y recompensas de Free Fire.","Weekly schedule of Free Fire events and rewards.","Agenda semanal de eventos e recompensas de Free Fire."],
["Agenda semanal, sensibilidad para tu celular, combos de personajes, trucos de mapas y más juegos.","Weekly schedule, sensitivity for your phone, character combos, map tips and more games.","Agenda semanal, sensibilidade para o seu celular, combos de personagens, dicas de mapas e mais jogos."],
["Sensibilidad por celular, combos de personajes y trucos de mapas de Free Fire.","Sensitivity by phone, character combos and map tips for Free Fire.","Sensibilidade por celular, combos de personagens e dicas de mapas de Free Fire."],
["Más juegos para probar, seleccionados por FreeFireZone.","More games to try, selected by FreeFireZone.","Mais jogos para testar, selecionados pelo FreeFireZone."],
["Novedades confirmadas de Free Fire y sus torneos.","Confirmed Free Fire and tournament news.","Novidades confirmadas de Free Fire e seus torneios."],
["Acerca de y contacto de FreeFireZone / AgendaBooyah.","About and contact for FreeFireZone / AgendaBooyah.","Sobre e contato do FreeFireZone / AgendaBooyah."],
["Política de privacidad de FreeFireZone / AgendaBooyah.","Privacy policy of FreeFireZone / AgendaBooyah.","Política de privacidade do FreeFireZone / AgendaBooyah."],
["Términos y condiciones de FreeFireZone / AgendaBooyah.","Terms and conditions of FreeFireZone / AgendaBooyah.","Termos e condições do FreeFireZone / AgendaBooyah."],
["FreeFireZone, ir al inicio","FreeFireZone, go to home","FreeFireZone, ir para o início"],
["Tipos de guía","Guide types","Tipos de guia"],
["Filtrar por rol","Filter by role","Filtrar por função"],
["Filtrar novedades","Filter news","Filtrar novidades"],
["General","General","Geral"],
["Buscar celular","Search phone","Buscar celular"],
["Escribe para buscar tu celular (marca o modelo)","Type to search your phone (brand or model)","Digite para buscar seu celular (marca ou modelo)"],
["No hay resultados. Elige «Otro celular» y ajusta las pulgadas y los Hz.","No results. Choose “Other phone” and adjust the inches and Hz.","Nenhum resultado. Escolha «Outro celular» e ajuste as polegadas e os Hz."],
["Otro celular (ajusta pulgadas y Hz)","Other phone (adjust inches and Hz)","Outro celular (ajuste polegadas e Hz)"],
["General","General","Geral"],
["Punto rojo","Red dot","Mira vermelha"],
["Mira 2x","2x scope","Mira 2x"],
["Mira 4x","4x scope","Mira 4x"],
["Mira AWM","AWM scope","Mira AWM"],
["Mirada libre","Free look","Visão livre"],
["Gráficos sugeridos","Suggested graphics","Gráficos sugeridos"],
["Calidad: Fluido · el FPS más alto que se mantenga estable.","Quality: Smooth · the highest FPS that stays stable.","Qualidade: Fluido · o FPS mais alto que se mantenha estável."],
["Calidad: Estándar · FPS alto si el celular no se calienta.","Quality: Standard · high FPS if the phone doesn't overheat.","Qualidade: Padrão · FPS alto se o celular não esquentar."],
["Calidad: Ultra · el FPS máximo que permita tu celular.","Quality: Ultra · the maximum FPS your phone allows.","Qualidade: Ultra · o FPS máximo que o seu celular permitir."],
["Cómo afinarla (2 minutos)","How to fine-tune it (2 minutes)","Como ajustá-la (2 minutos)"],
["Entra al campo de entrenamiento.","Go to the training ground.","Entre no campo de treinamento."],
["Desliza el dedo de lado a lado: si la mira se pasa, baja General 3 a 5 puntos; si no alcanza, súbela.","Swipe side to side: if the crosshair overshoots, lower General by 3 to 5 points; if it falls short, raise it.","Deslize o dedo de um lado para o outro: se a mira passar do alvo, diminua Geral de 3 a 5 pontos; se não alcançar, aumente."],
["Practica con un blanco a 20-30 m: si cuesta seguirlo, baja Punto rojo.","Practice on a target 20-30 m away: if it's hard to track, lower Red dot.","Pratique com um alvo a 20-30 m: se for difícil acompanhá-lo, diminua Mira vermelha."],
["Ajusta 2x, 4x y AWM al final, de 2 en 2 puntos.","Adjust 2x, 4x and AWM last, 2 points at a time.","Ajuste 2x, 4x e AWM por último, de 2 em 2 pontos."],
["Si juegas mejor con otro valor, quédate con el tuyo.","If you play better with a different value, keep yours.","Se você joga melhor com outro valor, fique com o seu."],
["Optimiza tu celular","Optimize your phone","Otimize o seu celular"],
["Cierra apps en segundo plano, activa el modo juego, deja espacio libre, mantén la pantalla limpia y evita apps \"boosters\" o cualquier mod: no mejoran el juego y pueden costarte la cuenta.","Close background apps, turn on game mode, keep free storage, keep your screen clean and avoid \"booster\" apps or any mod: they don't improve the game and can cost you your account.","Feche apps em segundo plano, ative o modo jogo, deixe espaço livre, mantenha a tela limpa e evite apps \"boosters\" ou qualquer mod: eles não melhoram o jogo e podem custar a sua conta."],
["Valores copiados","Values copied","Valores copiados"],
["No se pudo copiar. Selecciona los valores manualmente.","Couldn't copy. Select the values manually.","Não foi possível copiar. Selecione os valores manualmente."],
["Rusher","Rusher","Rusher"],
["Mixto","Mixed","Misto"],
["Francotirador","Sniper","Sniper"],
["Es una fórmula propia, no un valor oficial.","This is our own formula, not an official value.","É uma fórmula própria, não um valor oficial."],
["Soporte","Support","Suporte"],
["Defensa","Defense","Defesa"],
["Movilidad","Mobility","Mobilidade"],
["Ataque","Attack","Ataque"],
["Utilidad","Utility","Utilidade"],
["Sigilo","Stealth","Furtividade"],
["Información","Information","Informação"],
["Crea un aura que cura y aumenta la velocidad de movimiento del equipo.","Creates an aura that heals and increases the team's movement speed.","Cria uma aura que cura e aumenta a velocidade de movimento da equipe."],
["Despliega un escudo que bloquea daño enemigo y permite moverse más rápido dentro.","Deploys a shield that blocks enemy damage and lets you move faster inside.","Cria um escudo que bloqueia o dano inimigo e permite se mover mais rápido dentro dele."],
["Alterna entre recuperar HP con EP o aumentar la regeneración de EP.","Switches between recovering HP with EP or boosting EP regeneration.","Alterna entre recuperar HP com EP ou aumentar a regeneração de EP."],
["Gana velocidad al correr: útil para rotar y tomar posiciones antes que el rival.","Gains speed while running: useful for rotating and taking positions before the enemy.","Ganha velocidade ao correr: útil para rotacionar e tomar posições antes do rival."],
["Recupera HP al derribar enemigos con escopetas o subfusiles.","Recovers HP when downing enemies with shotguns or SMGs.","Recupera HP ao derrubar inimigos com escopetas ou submetralhadoras."],
["Libera una onda que destruye muros de gloo enemigos y repone chaleco.","Releases a wave that destroys enemy gloo walls and restores vest.","Libera uma onda que destrói paredes de gel inimigas e repõe o colete."],
["Su penetración de armadura crece a medida que baja su vida máxima.","Its armor penetration grows as its max health drops.","Sua penetração de armadura aumenta conforme sua vida máxima diminui."],
["Se transforma en un arbusto para esconderse y reposicionarse.","Turns into a bush to hide and reposition.","Se transforma em um arbusto para se esconder e se reposicionar."],
["Marca a los enemigos que impacta para que el equipo los vea.","Marks the enemies it hits so the team can see them.","Marca os inimigos que atinge para que a equipe os veja."],
["Come y usa botiquines más rápido que el resto.","Eats and uses medkits faster than everyone else.","Come e usa kits médicos mais rápido que os outros."],
["Crea una zona que cura al equipo y ayuda a recuperar compañeros caídos.","Creates a zone that heals the team and helps revive fallen teammates.","Cria uma zona que cura a equipe e ajuda a reviver companheiros caídos."],
["Mejora la precisión al apuntar con mira.","Improves accuracy when aiming down sights.","Melhora a precisão ao mirar com a luneta."],
["Rush con respaldo","Rush with backup","Rush com apoio"],
["Jota se cura al derribar y Alok mantiene al equipo con vida y rápido entre peleas.","Jota heals when downing enemies and Alok keeps the team alive and fast between fights.","Jota se cura ao derrubar e Alok mantém a equipe viva e rápida entre as lutas."],
["Defender zona","Hold the zone","Defender a zona"],
["Chrono protege el punto mientras K mantiene la energía y la salud del grupo.","Chrono protects the spot while K keeps the group's energy and health up.","Chrono protege o ponto enquanto K mantém a energia e a saúde do grupo."],
["Rotación agresiva","Aggressive rotation","Rotação agressiva"],
["Kelly llega primero a la posición y Skyler rompe las defensas de gloo rivales.","Kelly reaches the position first and Skyler breaks the rivals' gloo defenses.","Kelly chega primeiro à posição e Skyler quebra as defesas de gel dos rivais."],
["Presión con curación","Pressure with healing","Pressão com cura"],
["Hayato presiona de frente mientras la zona de Dimitri lo mantiene en pie.","Hayato pushes head-on while Dimitri's zone keeps him standing.","Hayato pressiona de frente enquanto a zona de Dimitri o mantém de pé."],
["Información y precisión","Information and precision","Informação e precisão"],
["Moco marca al rival y Laura aprovecha su precisión con mira para castigar.","Moco marks the rival and Laura uses her scoped accuracy to punish.","Moco marca o rival e Laura aproveita sua precisão com a luneta para punir."],
["Emboscada","Ambush","Emboscada"],
["Wukong se esconde cerca del camino y Moco marca a los que se acercan.","Wukong hides near the path and Moco marks those who approach.","Wukong se esconde perto do caminho e Moco marca quem se aproxima."],
["Trucos generales","General tips","Dicas gerais"],
["Juega con audífonos: los pasos y disparos te dicen dónde están los rivales.","Play with headphones: footsteps and gunshots tell you where the rivals are.","Jogue com fones de ouvido: passos e tiros mostram onde estão os rivais."],
["Rota temprano hacia el siguiente círculo; llegar tarde te deja sin posiciones.","Rotate early to the next circle; arriving late leaves you without positions.","Rotacione cedo para o próximo círculo; chegar tarde te deixa sem posições."],
["Usa el muro de gloo para curarte, recargar o cambiar de ángulo, no solo para cubrirte.","Use the gloo wall to heal, reload or change angle, not just to take cover.","Use a parede de gel para se curar, recarregar ou mudar de ângulo, não só para se cobrir."],
["Avisa por el chat o la voz cuando veas enemigos: la información gana partidas.","Call out enemies in chat or voice: information wins matches.","Avise pelo chat ou pela voz quando vir inimigos: informação ganha partidas."],
["Antes de saltar, decide con tu equipo la zona de aterrizaje y el punto de reunión.","Before jumping, agree with your team on the landing zone and the meeting point.","Antes de saltar, combine com a equipe a zona de pouso e o ponto de encontro."],
["Practica 10 minutos en el campo de entrenamiento antes de jugar clasificatoria.","Practice 10 minutes in the training ground before playing ranked.","Pratique 10 minutos no campo de treinamento antes de jogar ranqueada."],
["Aterriza en zonas de borde para equiparte con menos presión.","Land on edge zones to gear up with less pressure.","Pouse nas zonas de borda para se equipar com menos pressão."],
["Mantén siempre una ruta hacia el siguiente círculo antes de pelear.","Always keep a route to the next circle before fighting.","Mantenha sempre uma rota para o próximo círculo antes de lutar."],
["Usa los desniveles del terreno para cubrirte al recargar.","Use the terrain's elevation changes for cover while reloading.","Use os desníveis do terreno para se cobrir ao recarregar."],
["Reconoce los puntos de loot de las zonas cercanas antes de saltar.","Learn the loot spots of nearby zones before jumping.","Reconheça os pontos de loot das zonas próximas antes de saltar."],
["Prioriza cubierta dura en las pelas de calle abierta.","Prioritize hard cover in open-street fights.","Priorize cobertura sólida nas lutas em rua aberta."],
["No te quedes en el último edificio del círculo: se vuelve una trampa.","Don't stay in the last building of the circle: it becomes a trap.","Não fique no último prédio do círculo: ele vira uma armadilha."],
["Evita los espacios abiertos del desierto; avanza por las formaciones rocosas.","Avoid the open desert spaces; move along the rock formations.","Evite os espaços abertos do deserto; avance pelas formações rochosas."],
["Lleva siempre un vehículo cerca para escapar de la zona.","Always keep a vehicle nearby to escape the zone.","Mantenha sempre um veículo por perto para escapar da zona."],
["Escucha pasos y disparos: el sonido viaja lejos.","Listen for footsteps and gunshots: sound travels far.","Escute passos e tiros: o som viaja longe."],
["Calcula tiempo de rotación: la nieve y las pendientes frenan.","Plan your rotation time: snow and slopes slow you down.","Calcule o tempo de rotação: a neve e as ladeiras diminuem a velocidade."],
["Aprovecha los desniveles para subir con ventaja.","Use the height differences to climb with an advantage.","Aproveite os desníveis para subir com vantagem."],
["Cuida tu posición contra el fondo blanco, eres más visible.","Watch your position against the white background, you're more visible.","Cuide da sua posição contra o fundo branco, você fica mais visível."],
["Aprende los accesos y las salidas rápidas de cada sector.","Learn the entrances and quick exits of each sector.","Aprenda os acessos e as saídas rápidas de cada setor."],
["Controla la altura: quien está arriba suele ver primero.","Control the high ground: whoever is above usually sees first.","Controle a altura: quem está em cima costuma ver primeiro."],
["Cambia de zona antes de que el círculo te obligue a correr.","Change zones before the circle forces you to run.","Mude de zona antes que o círculo te obrigue a correr."],
["← Volver al inicio","← Back to home","← Voltar ao início"],
["Última actualización: 3 de octubre de 2026","Last updated: October 3, 2026","Última atualização: 3 de outubro de 2026"],
["1. Aceptación","1. Acceptance","1. Aceitação"],
["Al usar FreeFireZone / AgendaBooyah aceptas estos términos. Si no estás de acuerdo, por favor no uses el sitio.","By using FreeFireZone / AgendaBooyah you accept these terms. If you do not agree, please do not use the site.","Ao usar o FreeFireZone / AgendaBooyah você aceita estes termos. Se não concordar, por favor não use o site."],
["2. Qué es este sitio","2. What this site is","2. O que é este site"],
["Es un sitio informativo e independiente, hecho por fans, con agenda semanal, guías de sensibilidad, combos de personajes y trucos de mapas. No está afiliado, patrocinado ni respaldado por Garena. Free Fire y sus personajes son marcas de sus propietarios.","It is an independent, informational fan-made site with a weekly schedule, sensitivity guides, character combos and map tips. It is not affiliated with, sponsored by or endorsed by Garena. Free Fire and its characters are trademarks of their owners.","É um site informativo e independente, feito por fãs, com agenda semanal, guias de sensibilidade, combos de personagens e dicas de mapas. Não é afiliado, patrocinado nem endossado pela Garena. Free Fire e seus personagens são marcas de seus proprietários."],
["3. Información orientativa","3. Guidance only","3. Informação orientativa"],
["La sensibilidad se calcula con una fórmula propia y es solo un punto de partida, no un valor oficial ni una garantía de rendimiento. Habilidades, eventos y fechas cambian con las actualizaciones del juego; confírmalos siempre dentro del juego. No prometemos premios, recompensas ni resultados.","Sensitivity is calculated with our own formula and is only a starting point, not an official value or a performance guarantee. Abilities, events and dates change with game updates; always confirm them inside the game. We do not promise prizes, rewards or results.","A sensibilidade é calculada com uma fórmula própria e é apenas um ponto de partida, não um valor oficial nem uma garantia de desempenho. Habilidades, eventos e datas mudam com as atualizações do jogo; confirme-os sempre dentro do jogo. Não prometemos prêmios, recompensas nem resultados."],
["4. Uso permitido","4. Permitted use","4. Uso permitido"],
["Puedes usar el sitio de forma personal y no comercial. No intentes dañarlo, copiar su contenido de forma masiva ni usarlo para actividades ilegales.","You may use the site for personal, non-commercial purposes. Do not try to damage it, mass-copy its content or use it for illegal activities.","Você pode usar o site de forma pessoal e não comercial. Não tente danificá-lo, copiar seu conteúdo em massa nem usá-lo para atividades ilegais."],
["5. Juego limpio","5. Fair play","5. Jogo limpo"],
["No ofrecemos ni promovemos hacks, mods, cuentas, diamantes gratis ni software que incumpla los términos de Garena.","We do not offer or promote hacks, mods, accounts, free diamonds or software that violates Garena's terms.","Não oferecemos nem promovemos hacks, mods, contas, diamantes grátis nem software que descumpra os termos da Garena."],
["6. Propiedad intelectual","6. Intellectual property","6. Propriedade intelectual"],
["Los textos, el diseño y el código del sitio pertenecen a FreeFireZone. El material de Free Fire pertenece a Garena. Puedes citar fragmentos breves enlazando al sitio.","The site's texts, design and code belong to FreeFireZone. Free Fire material belongs to Garena. You may quote short excerpts by linking to the site.","Os textos, o design e o código do site pertencem ao FreeFireZone. O material de Free Fire pertence à Garena. Você pode citar trechos curtos com um link para o site."],
["7. Enlaces y publicidad","7. Links and advertising","7. Links e publicidade"],
["Podemos enlazar sitios de terceros y mostrar anuncios, por ejemplo de Google AdSense. No controlamos ni respaldamos su contenido; revisa sus políticas.","We may link to third-party sites and show ads, for example from Google AdSense. We do not control or endorse their content; please review their policies.","Podemos linkar sites de terceiros e exibir anúncios, por exemplo do Google AdSense. Não controlamos nem endossamos o conteúdo deles; consulte as políticas deles."],
["8. Limitación de responsabilidad","8. Limitation of liability","8. Limitação de responsabilidade"],
["El sitio se ofrece «tal cual». No somos responsables por pérdidas derivadas del uso de la información, de tu cuenta del juego ni de sitios externos.","The site is provided \"as is\". We are not responsible for losses arising from the use of the information, your game account or external sites.","O site é oferecido \"como está\". Não somos responsáveis por perdas decorrentes do uso das informações, da sua conta do jogo ou de sites externos."],
["9. Menores de edad","9. Minors","9. Menores de idade"],
["Si eres menor de edad, usa el sitio con permiso de tus padres o tutores.","If you are a minor, use the site with the permission of your parents or guardians.","Se você é menor de idade, use o site com a permissão dos seus pais ou responsáveis."],
["10. Cambios","10. Changes","10. Alterações"],
["Podemos actualizar estos términos. La fecha de la última actualización aparece arriba.","We may update these terms. The date of the last update appears above.","Podemos atualizar estes termos. A data da última atualização aparece acima."],
["11. Contacto","11. Contact","11. Contato"],
["Escríbenos a","Write to us at","Escreva para"],
["Política de privacidad","Privacy policy","Política de privacidade"],
["1. Qué datos recopilamos","1. What data we collect","1. Quais dados coletamos"],
["No pedimos registro ni datos personales. Guardamos en tu navegador (almacenamiento local) tu elección sobre cookies y tu idioma. El servicio de alojamiento puede registrar datos técnicos estándar, como tu dirección IP y el tipo de navegador.","We do not ask for registration or personal data. We store your cookie choice and your language in your browser (local storage). The hosting service may log standard technical data, such as your IP address and browser type.","Não pedimos cadastro nem dados pessoais. Guardamos no seu navegador (armazenamento local) sua escolha sobre cookies e seu idioma. O serviço de hospedagem pode registrar dados técnicos padrão, como seu endereço IP e o tipo de navegador."],
["2. Cookies y publicidad","2. Cookies and advertising","2. Cookies e publicidade"],
["Si aceptas, terceros proveedores, incluido Google, usan cookies para mostrar anuncios según tus visitas a este y otros sitios. El uso de cookies de publicidad permite a Google y sus socios mostrar anuncios basados en tu navegación. Puedes desactivar la publicidad personalizada en https://adssettings.google.com y conocer más en https://policies.google.com/technologies/partner-sites. También puedes visitar https://www.aboutads.info.","If you accept, third-party vendors, including Google, use cookies to show ads based on your visits to this and other sites. The use of advertising cookies allows Google and its partners to show ads based on your browsing. You can opt out of personalized advertising at https://adssettings.google.com and learn more at https://policies.google.com/technologies/partner-sites. You can also visit https://www.aboutads.info.","Se você aceitar, fornecedores terceiros, incluindo o Google, usam cookies para exibir anúncios com base nas suas visitas a este e a outros sites. O uso de cookies de publicidade permite que o Google e seus parceiros exibam anúncios com base na sua navegação. Você pode desativar a publicidade personalizada em https://adssettings.google.com e saber mais em https://policies.google.com/technologies/partner-sites. Você também pode visitar https://www.aboutads.info."],
["3. Si rechazas las cookies","3. If you reject cookies","3. Se você recusar os cookies"],
["No cargamos la publicidad de Google. Puedes cambiar tu decisión borrando los datos del sitio en tu navegador.","We do not load Google advertising. You can change your decision by clearing the site's data in your browser.","Não carregamos a publicidade do Google. Você pode mudar sua decisão apagando os dados do site no seu navegador."],
["4. Servicios de terceros","4. Third-party services","4. Serviços de terceiros"],
["Usamos Google Fonts para las tipografías. Los sitios enlazados tienen sus propias políticas de privacidad.","We use Google Fonts for typefaces. Linked sites have their own privacy policies.","Usamos o Google Fonts para as tipografias. Os sites linkados têm suas próprias políticas de privacidade."],
["5. Menores","5. Children","5. Crianças"],
["El sitio no está dirigido a menores de 13 años y no recopilamos a sabiendas información personal de ellos.","The site is not directed to children under 13 and we do not knowingly collect personal information from them.","O site não é direcionado a menores de 13 anos e não coletamos intencionalmente informações pessoais deles."],
["6. Tus derechos","6. Your rights","6. Seus direitos"],
["Puedes pedirnos información o la eliminación de cualquier dato que tengamos sobre ti escribiendo a","You can ask us for information or the deletion of any data we hold about you by writing to","Você pode nos pedir informações ou a exclusão de qualquer dado que tenhamos sobre você escrevendo para"],
["7. Cambios","7. Changes","7. Alterações"],
["Podemos actualizar esta política. La fecha de la última actualización aparece arriba.","We may update this policy. The date of the last update appears above.","Podemos atualizar esta política. A data da última atualização aparece acima."],
["Acerca de FreeFireZone","About FreeFireZone","Sobre o FreeFireZone"],
["FreeFireZone / AgendaBooyah es un proyecto independiente de fans de Free Fire. Publicamos una agenda semanal con información confirmada, guías de sensibilidad según tu celular, combos de personajes y trucos de mapas.","FreeFireZone / AgendaBooyah is an independent project by Free Fire fans. We publish a weekly schedule with confirmed information, sensitivity guides for your phone, character combos and map tips.","O FreeFireZone / AgendaBooyah é um projeto independente de fãs de Free Fire. Publicamos uma agenda semanal com informações confirmadas, guias de sensibilidade conforme o seu celular, combos de personagens e dicas de mapas."],
["Contacto","Contact","Contato"],
["Para sugerencias, correcciones o consultas escríbenos a","For suggestions, corrections or questions, write to us at","Para sugestões, correções ou dúvidas, escreva para"],
["Aviso","Notice","Aviso"],
["Este sitio no tiene relación con Garena. Free Fire y sus personajes pertenecen a sus respectivos dueños.","This site has no relationship with Garena. Free Fire and its characters belong to their respective owners.","Este site não tem relação com a Garena. Free Fire e seus personagens pertencem aos seus respectivos donos."],
["Usamos almacenamiento local y, si lo aceptas, cookies de publicidad de Google.","We use local storage and, if you accept, Google advertising cookies.","Usamos armazenamento local e, se você aceitar, cookies de publicidade do Google."],
["Ver más","See more","Ver mais"]
];
const M={en:Object.create(null),pt:Object.create(null)};T.forEach(r=>{M.en[r[0]]=r[1];M.pt[r[0]]=r[2]});
const N=s=>String(s==null?"":s).replace(/\s+/g," ").trim();
const LS={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
let lang=LS.get("ffz_lang");
if(!L[lang]){const b=String(navigator.language||"es").slice(0,2).toLowerCase();lang=L[b]?b:"es"}
const TIER={en:{baja:"low",media:"mid",alta:"high"},pt:{baja:"baixa",media:"média",alta:"alta"}};
const STYLE={en:{rusher:"rusher",mixto:"mixed",francotirador:"sniper"},pt:{rusher:"rusher",mixto:"misto",francotirador:"sniper"}};
/* Textos con números o partes variables */
function pat(n){let m;const en=lang==="en";
  if(m=n.match(/^Hoy, (.+)$/)){const d=M[lang][m[1]]||m[1];return (en?"Today, ":"Hoje, ")+d}
  if(m=n.match(/^No hay eventos de este tipo el (.+)\. Prueba con otro día o con “Todos”\.$/)){const d=M[lang][m[1]]||m[1];
    return en?"There are no events of this type on "+d+". Try another day or “All”.":"Não há eventos deste tipo "+(/^(sábado|domingo)/.test(d)?"no":"na")+" "+d+". Tente outro dia ou “Todos”."}
  if(m=n.match(/^(\d+) ev\.$/))return m[1]+(en?" evt.":" ev.");
  if(m=n.match(/^Pantalla de (.+)" a (\d+) Hz · gama (baja|media|alta) · estilo (.+)\. Es una fórmula propia, no un valor oficial\.$/)){
    const st=STYLE[lang][m[4]]||m[4],ti=TIER[lang][m[3]];
    return en?m[1]+'" screen at '+m[2]+" Hz · "+ti+" range · "+st+" style. This is our own formula, not an official value.":"Tela de "+m[1]+'" a '+m[2]+" Hz · gama "+ti+" · estilo "+st+". É uma fórmula própria, não um valor oficial."}
  if(m=n.match(/^Pantalla detectada: unos (\d+) Hz\. Si usas ahorro de batería puede marcar menos\.$/))
    return en?"Screen detected: about "+m[1]+" Hz. If you use battery saver it may show less.":"Tela detectada: cerca de "+m[1]+" Hz. Se você usa economia de bateria, pode mostrar menos.";
  return null}
function tr(s){const n=N(s);if(!n||lang==="es")return null;
  let r=M[lang][n];
  if(r==null){const d=window.FFZ_TR&&window.FFZ_TR[n];if(d&&typeof d[lang]==="string"&&d[lang].trim())r=d[lang].trim()}
  if(r==null)r=pat(n);
  if(r==null)return null;
  const a=s.match(/^\s*/)[0],b=s.match(/\s*$/)[0];return a+r+b}
const skip=n=>{const p=n.parentNode;if(!p||/^(SCRIPT|STYLE|TEXTAREA)$/.test(p.nodeName))return true;return !!(p.closest&&p.closest("#adm,#lang"))};
const S=new WeakMap(),AT=["aria-label","placeholder","title","alt"];let obs,queued=false,t0=document.title;
function apply(){obs&&obs.disconnect();
  const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
  while(n=w.nextNode()){if(skip(n))continue;let s=S.get(n);if(!s||(n.nodeValue!==s.t&&n.nodeValue!==s.o)){s={o:n.nodeValue,t:n.nodeValue};S.set(n,s)}
    const r=lang==="es"?null:tr(s.o),v=r==null?s.o:r;if(n.nodeValue!==v)n.nodeValue=v;s.t=v}
  document.querySelectorAll("[aria-label],[placeholder],[title],[alt]").forEach(el=>{if(el.closest("#adm"))return;AT.forEach(a=>{if(!el.hasAttribute(a))return;const k="o"+a.replace(/-/g,"");if(el.dataset[k]===undefined)el.dataset[k]=el.getAttribute(a);const o=el.dataset[k],r=lang==="es"?null:tr(o);el.setAttribute(a,r==null?o:r.trim())})});
  document.title=lang==="es"?t0:t0.split(" · ").map(p=>{const r=tr(p);return r==null?p:r.trim()}).join(" · ");
  const md=document.querySelector('meta[name="description"]');
  if(md){if(md.dataset.o===undefined)md.dataset.o=md.getAttribute("content")||"";const r=lang==="es"?null:tr(md.dataset.o);md.setAttribute("content",r==null?md.dataset.o:r.trim())}
  document.documentElement.lang=lang;
  obs&&(obs.takeRecords(),obs.observe(document.body,{childList:true,subtree:true,characterData:true}))}
obs=new MutationObserver(()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;apply()})});

/* Selector */
const nav=document.querySelector(".nav");
const sel=document.createElement("select");sel.id="lang";sel.setAttribute("aria-label","Idioma");
sel.innerHTML=Object.keys(L).map(k=>`<option value="${k}">${L[k]}</option>`).join("");sel.value=lang;
sel.onchange=()=>{lang=sel.value;LS.set("ffz_lang",lang);apply()};
if(nav)nav.appendChild(sel);
else{Object.assign(sel.style,{position:"fixed",top:"10px",right:"10px",zIndex:"50",background:"#1a1a22",color:"#fff",border:"2px solid #444",borderRadius:"4px",padding:"6px 10px",font:"600 14px system-ui,sans-serif",cursor:"pointer"});document.body.appendChild(sel)}

/* Funciones para el resto del sitio */
window.ffzApply=()=>apply();
window.ffzLang=()=>lang;

/* Traducción automática del contenido del Panel (solo se usa al publicar o al pulsar «Traducir textos nuevos») */
const API="https://api.mymemory.translated.net/get";
function chunks(t){let p=t.match(/[^.!?]+[.!?]*\s*/g)||[t];if(p.join("")!==t)p=[t];const o=[];let c="";
  p.forEach(x=>{if(c&&(c+x).length>450){o.push(c);c=""}c+=x;while(c.length>450){o.push(c.slice(0,450));c=c.slice(450)}});if(c)o.push(c);return o}
async function mt1(q,to){
  const r=await fetch(API+"?q="+encodeURIComponent(q)+"&langpair=es|"+to+"&de=soporteoficialweb@gmail.com",{cache:"no-store"});
  if(!r.ok)throw new Error("http");
  const j=await r.json(),t=j&&j.responseData&&j.responseData.translatedText;
  if(typeof t!=="string"||!t.trim()||(j.responseStatus&&+j.responseStatus!==200)||/MYMEMORY WARNING|INVALID LANGUAGE|PLEASE SELECT TWO DISTINCT/i.test(t))throw new Error("api");
  return new DOMParser().parseFromString(t,"text/html").documentElement.textContent.trim()}
async function mt(text,to){const out=[];
  for(const c of chunks(text)){let r;try{r=await mt1(c,to)}catch(e){await new Promise(z=>setTimeout(z,700));r=await mt1(c,to)}out.push(r)}
  return out.join(" ").replace(/\s+/g," ").trim()}
function strings(D){const s=new Set();const add=v=>{const n=N(v);if(n&&/[A-Za-zÀ-ÿ]/.test(n)&&M.en[n]==null)s.add(n)};
  const B=D.banner||{};add(B.title);add(B.text);add(B.btn);
  (D.agenda||[]).forEach(e=>{add(e.n);add(e.p)});
  (D.news||[]).forEach(n=>{add(n.h);add(n.tag);add(n.d);add(n.x)});
  (D.games||[]).forEach(g=>{add(g.n);add(g.p)});
  return [...s]}
window.ffzBuildTr=async function(D,progress){
  const old=D.tr||{},out={},jobs=[];
  strings(D).forEach(s=>{const o=old[s]||{};out[s]={en:o.en||"",pt:o.pt||""};if(!out[s].en)jobs.push([s,"en","en"]);if(!out[s].pt)jobs.push([s,"pt","pt-BR"])});
  let i=0,ok=0,bad=0,done=0;const total=jobs.length;
  async function w(){while(i<jobs.length&&bad<4){const j=jobs[i++];
    try{out[j[0]][j[1]]=await mt(j[0],j[2]);ok++;bad=0}catch(e){bad++}
    done++;progress&&progress(done,total)}}
  await Promise.all([w(),w()]);
  Object.keys(out).forEach(k=>{if(!out[k].en&&!out[k].pt)delete out[k]});
  return {tr:out,fail:total-ok}};

apply();
})();
