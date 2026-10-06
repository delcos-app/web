/* Cabecera de las páginas interiores (soporte, dudas, alta): la misma que la portada, con sus desplegables
   (Plataforma, Sectores, Ayuda), «Pide una demo», el selector de idioma y el menú a pantalla completa.
   Sustituye a la cabecera sencilla que trae cada página (la que queda si no hay JavaScript). */
(() => {
  const EN = document.documentElement.lang === 'en';
  const CAP = (EN ? '../' : '') + 'capturas/';
  // El alta solo existe en español
  const ALTA = (EN ? '../' : '') + 'empezar.html';
  const cab = document.querySelector('header.cab');
  if (!cab) return;
  // Idioma: el enlace al otro idioma es el que ya trae la página (si no lo hay, como en el alta, la portada del otro idioma)
  const otro = cab.querySelector('.idioma a');
  const ESTA = (location.pathname.split('/').pop() || '').replace(/\?.*$/, '');
  const T = EN ? {
    plat: 'Platform', sect: 'Sectors', clientes: 'Clients', precios: 'Pricing', ayuda: 'Help', demo: 'Request a demo', menu: 'Menu', cerrar: 'Close', prueba: 'Try it free', prueba30: 'Try it free for 30 days',
    idioma: 'Language · Idioma', demoTxt: ' · demo',
    grupos: [['Field', [['Accounts', 'Professionals, centres and their history', 'labs_e_directorio'], ['Calendar', 'Your day, your week and your month', 'labs_e_agenda'],
      ['Routes', 'Proposed every morning', 'labs_e_rutas'], ['Duplicates', 'One person, one record', 'labs_e_calidad']]],
      ['Sales', [['Orders', 'From visit to order', 'labs_e_ventas'], ['New sale and opportunities', 'Measure the sales that don’t close, too', 'pharma_e_oportunidades'],
        ['Commissions', 'Commissions calculated for you, every month', 'labs_e_comisiones'], ['Analytics', 'How the business is doing, against last year', 'labs_e_analitica'],
        ['Web orders', 'With their filter, their summary and the payment reference', 'pharma_e_pedidos_web']]],
      ['Office', [['Warehouse and batches', 'Stock by batch and expiry', 'labs_e_stock'], ['Purchasing', 'Suppliers and purchase orders', 'labs_e_compras'],
        ['Invoicing', 'VeriFactu, credit notes and payments', 'labs_e_facturas'], ['History', 'Any change, undone in one click', 'labs_e_historial'],
        ['Team and permissions', 'Each role sees and does its own part', 'labs_e_usuarios']]]],
    sectores: [['Laboratories', 'Who buys, who comes back and who stops.', 'labs_e_ventas', 'Company Labs'], ['Dental', 'The clinic’s order, repeated in one tap.', 'dental_e_directorio', 'Company Dental'],
      ['Orthopaedics', 'From physio to orthopaedic shop, in one portfolio.', 'orto_e_ventas', 'Company Orto'], ['Pharmacy', 'Pharmacies that restock without slipping through the cracks.', 'pharma_e_llamadas', 'Company Pharma'],
      ['Hospital', 'From the department that evaluates to the hospital that approves.', 'medtech_e_directorio', 'Company Medtech'], ['Veterinary', 'Speaks your sector’s language: vet, owner, clinic.', 'vet_e_directorio', 'Company Vet']],
    ayudaG: [['Support', [['Help centre', 'Searchable FAQs', 'soporte.html'], ['Questions', 'What we get asked most before starting', './#preguntas']]],
      ['Contact', [['Send us a question', 'A real person from the team replies', 'dudas.html'], ['Custom pricing', 'For teams of more than 50 people', 'dudas.html?tipo=Precios']]],
      ['Company', [['Clients', 'Who uses delcos every day', './#clientes'], ['Legal notice', 'Who we are', '../aviso-legal.html']]]],
    tarjeta: ['Shall we look at it with your data?', 'We’ll show you delcos with your sector and your way of working, and you try it for 30 days.'],
    menuL: [['./#inicio', 'Home'], ['./#para-quien', 'Who it’s for'], ['./#dia', 'A day at the company'], ['./#modulos', 'Modules'], ['./#sectores', 'Sectors'],
      ['./#clientes', 'Clients'], ['./#precios', 'Pricing'], ['soporte.html', 'Support'], ['dudas.html', 'Send us a question']],
    aside: 'Sales and operations software for companies that sell through healthcare professionals and centres.',
    legal: [['../', 'Español'], ['../aviso-legal.html', 'Legal notice'], ['../privacidad.html', 'Privacy'], ['../cookies.html', 'Cookies']]
  } : {
    plat: 'Plataforma', sect: 'Sectores', clientes: 'Clientes', precios: 'Precios', ayuda: 'Ayuda', demo: 'Pide una demo', menu: 'Menú', cerrar: 'Cerrar', prueba: 'Pruébalo gratis', prueba30: 'Pruébalo 30 días gratis',
    idioma: 'Idioma · Language', demoTxt: ' · demostración',
    grupos: [['Campo', [['Cartera', 'Profesionales, centros y su historial', 'labs_e_directorio'], ['Agenda', 'Tu día, tu semana y tu mes', 'labs_e_agenda'],
      ['Rutas', 'Propuestas cada mañana', 'labs_e_rutas'], ['Duplicados', 'Una persona, una sola ficha', 'labs_e_calidad']]],
      ['Venta', [['Pedidos', 'De la visita al pedido', 'labs_e_ventas'], ['Nueva venta y oportunidades', 'Mide también las ventas que no se cierran', 'pharma_e_oportunidades'],
        ['Comisiones', 'Comisiones calculadas solas, cada mes', 'labs_e_comisiones'], ['Analítica', 'Cómo va el negocio, frente al año pasado', 'labs_e_analitica'],
        ['Pedidos por la web', 'Con su filtro, su resumen y la referencia del pago', 'pharma_e_pedidos_web']]],
      ['Oficina', [['Almacén y lotes', 'Stock por lote y caducidad', 'labs_e_stock'], ['Compras', 'Proveedores y pedidos de compra', 'labs_e_compras'],
        ['Facturación', 'VeriFactu, rectificativas y cobros', 'labs_e_facturas'], ['Historial', 'Cualquier cambio, deshecho con un clic', 'labs_e_historial'],
        ['Equipo y permisos', 'Cada rol ve y hace lo suyo', 'labs_e_usuarios']]]],
    sectores: [['Laboratorios', 'Quién compra, quién repite y quién lo deja.', 'labs_e_ventas', 'Company Labs'], ['Dental', 'El pedido de la clínica, repetido en un toque.', 'dental_e_directorio', 'Company Dental'],
      ['Ortopedia', 'Del fisio a la ortopedia, en la misma cartera.', 'orto_e_ventas', 'Company Orto'], ['Farmacia', 'Farmacias que reponen sin que se te escapen.', 'pharma_e_llamadas', 'Company Pharma'],
      ['Hospital', 'Del servicio que evalúa al hospital que homologa.', 'medtech_e_directorio', 'Company Medtech'], ['Veterinaria', 'Habla como tu sector: veterinario, propietario, clínica.', 'vet_e_directorio', 'Company Vet']],
    ayudaG: [['Soporte', [['Centro de ayuda', 'Preguntas frecuentes con buscador', 'soporte.html'], ['Preguntas', 'Lo que más nos preguntan antes de empezar', './#preguntas']]],
      ['Contacto', [['Envíanos tu duda', 'Te responde una persona del equipo', 'dudas.html'], ['Precios a medida', 'Para equipos de más de 50 personas', 'dudas.html?tipo=Precios']]],
      ['Empresa', [['Clientes', 'Quién usa delcos cada día', './#clientes'], ['Aviso legal', 'Quiénes somos', 'aviso-legal.html']]]],
    tarjeta: ['¿Lo vemos con tus datos?', 'Te enseñamos delcos con tu sector y tu forma de trabajar, y lo pruebas 30 días.'],
    menuL: [['./#inicio', 'Inicio'], ['./#para-quien', 'Para quién'], ['./#dia', 'Un día en la empresa'], ['./#modulos', 'Módulos'], ['./#sectores', 'Sectores'],
      ['./#clientes', 'Clientes'], ['./#precios', 'Precios'], ['soporte.html', 'Soporte'], ['dudas.html', 'Envíanos tu duda']],
    aside: 'Software comercial y operativo para empresas que venden a través de profesionales y centros sanitarios.',
    legal: [['en/', 'English'], ['aviso-legal.html', 'Aviso legal'], ['privacidad.html', 'Privacidad'], ['cookies.html', 'Cookies']]
  };
  const flecha = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
  const globo = '<svg class="globo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>';
  const previa = (img, pie) => `<div class="previa"><div class="ordenador"><div class="barra"><i></i><i></i><i></i></div><div class="vista"><img src="${CAP + img}.webp" alt="" width="1600" height="1000"><img class="fuera" alt="" width="1600" height="1000"></div></div><p>${pie}</p></div>`;
  let ni = 0;
  const it = (t, d, href, extra = '') => `<a class="it" href="${href}" ${extra} style="--i:${ni++}"><b>${t}</b><span>${d}</span></a>`;
  const plat = `<div class="wrap panel-in"><div class="grupos">${T.grupos.map(([g, its]) => `<div class="grupo"><small>${g}</small>${its.map(([t, d, img]) => it(t, d, './#modulos', `data-img="${img}"`)).join('')}</div>`).join('')}</div>${previa('labs_e_directorio', T.grupos[0][1][0][0])}</div>`;
  ni = 0;
  const sect = `<div class="wrap panel-in"><div class="grupos dos">${T.sectores.map(([n, t, img, emp]) => it(n, t, './#sectores', `data-img="${img}" data-pie="${emp + T.demoTxt}"`)).join('')}</div>${previa(T.sectores[0][2], T.sectores[0][3] + T.demoTxt)}</div>`;
  ni = 0;
  const ayuda = `<div class="wrap panel-in"><div class="grupos">${T.ayudaG.map(([g, its]) => `<div class="grupo"><small>${g}</small>${its.map(([t, d, h]) => it(t, d, h)).join('')}</div>`).join('')}</div>
    <div class="previa"><div class="tarjeta"><b>${T.tarjeta[0]}</b><p>${T.tarjeta[1]}</p><a class="boton" href="dudas.html?tipo=Demo">${T.demo}</a></div></div></div>`;
  const desp = (id, txt) => `<button class="desp-b" type="button" aria-expanded="false" aria-controls="panel-${id}">${txt} ${flecha}</button>`;
  cab.id = 'cab';
  cab.innerHTML = `<div class="wrap">
    <a class="logo" href="./" aria-label="delcos">${cab.querySelector('.logo').innerHTML}</a>
    <nav class="nav" aria-label="${EN ? 'Sections' : 'Secciones'}">${desp('plataforma', T.plat)}${desp('sectores', T.sect)}<a href="./#clientes">${T.clientes}</a><a href="./#precios">${T.precios}</a>${desp('ayuda', T.ayuda)}</nav>
    <a class="demo-l" href="dudas.html?tipo=Demo">${T.demo}</a>
    <a class="boton" href="${ALTA}">${T.prueba}</a>
    <div class="idioma" role="group" aria-label="${T.idioma}">${globo}<span class="activo" aria-current="true" lang="${EN ? 'en' : 'es'}">${EN ? 'EN' : 'ES'}</span><a href="${otro ? otro.getAttribute('href') : (EN ? '../' : 'en/')}" hreflang="${EN ? 'es' : 'en'}" lang="${EN ? 'es' : 'en'}">${EN ? 'ES' : 'EN'}</a></div>
    <button class="menu-b" id="menu-b" type="button" aria-expanded="false" aria-controls="menu"><span class="ico" aria-hidden="true"><i></i><i></i></span><span id="menu-t">${T.menu}</span></button>
  </div>
  <div class="panel" id="panel-plataforma" role="region" aria-label="${T.plat}">${plat}</div>
  <div class="panel" id="panel-sectores" role="region" aria-label="${T.sect}">${sect}</div>
  <div class="panel" id="panel-ayuda" role="region" aria-label="${T.ayuda}">${ayuda}</div>`;
  cab.insertAdjacentHTML('afterend', `<div class="velo" id="velo" aria-hidden="true"></div>
  <div class="menu" id="menu" hidden><div class="wrap in">
    <nav aria-label="${T.menu}">${T.menuL.map(([h, t], i) => `<a href="${h}" style="--i:${i}"${h === ESTA ? ' aria-current="page"' : ''}><small>${String(i + 1).padStart(2, '0')}</small><span>${t}</span></a>`).join('')}</nav>
    <aside>
      <svg class="orbita" viewBox="0 0 44 44" aria-hidden="true"><circle cx="20" cy="24" r="19.5" fill="none" stroke="#22405F" stroke-width=".6" stroke-dasharray="1.5 2"/><circle cx="20" cy="24" r="16" fill="#17457A"/><g class="sat"><circle cx="35" cy="9" r="5" fill="#7CC3EC"/></g></svg>
      <p>${T.aside}</p>
      <div class="menu-cta"><a class="boton" href="${ALTA}">${T.prueba30}</a><a class="demo-l" href="dudas.html?tipo=Demo">${T.demo}</a></div>
      <div class="legal">${T.legal.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}</div>
    </aside>
  </div></div>`);

  // Desplegables: igual que en la portada (con ratón se abren al pasar; con el dedo, al tocar)
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const velo = $('#velo'), CON_RATON = matchMedia('(hover: hover) and (pointer: fine)').matches, QUIETO = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let abierto = null, tAbrir, tCerrar;
  const boton = id => $(`[aria-controls="panel-${id}"]`);
  const abrir = id => {
    clearTimeout(tCerrar); if (abierto === id) return;
    if (abierto) { $('#panel-' + abierto).classList.remove('abierto'); boton(abierto).setAttribute('aria-expanded', 'false'); }
    $('#panel-' + id).classList.add('abierto'); boton(id).setAttribute('aria-expanded', 'true');
    document.body.classList.add('desp-abierto'); abierto = id;
  };
  const cerrar = () => {
    if (!abierto) return;
    $('#panel-' + abierto).classList.remove('abierto'); boton(abierto).setAttribute('aria-expanded', 'false');
    document.body.classList.remove('desp-abierto'); abierto = null;
  };
  $$('.desp-b').forEach(b => {
    const id = b.getAttribute('aria-controls').replace('panel-', '');
    b.addEventListener('click', () => abierto === id ? cerrar() : abrir(id));
    if (CON_RATON) { b.addEventListener('mouseenter', () => { clearTimeout(tAbrir); tAbrir = setTimeout(() => abrir(id), 90); }); b.addEventListener('mouseleave', () => clearTimeout(tAbrir)); }
  });
  if (CON_RATON) { cab.addEventListener('mouseleave', () => { tCerrar = setTimeout(cerrar, 240); }); cab.addEventListener('mouseenter', () => clearTimeout(tCerrar)); }
  velo.addEventListener('click', cerrar);
  // La vista previa cambia con un fundido al pasar por cada opción
  $$('.panel a.it').forEach(a => {
    const cambia = () => {
      const p = a.closest('.panel').querySelector('.previa'), img = a.dataset.img; if (!img || !p.querySelector('.vista')) return;
      const [i1, i2] = p.querySelectorAll('.vista img'), vis = i1.classList.contains('fuera') ? i2 : i1, otra = vis === i1 ? i2 : i1, src = CAP + img + '.webp';
      if (vis.getAttribute('src') === src) return;
      otra.onload = () => { otra.classList.remove('fuera'); vis.classList.add('fuera'); };
      otra.src = src; p.querySelector('p').textContent = a.dataset.pie || a.querySelector('b').textContent;
      a.closest('.panel').querySelectorAll('a.it').forEach(x => x.classList.toggle('activo', x === a));
    };
    a.addEventListener('mouseenter', cambia); a.addEventListener('focus', cambia);
  });

  // Menú a pantalla completa: se abre en círculo desde el botón
  const menu = $('#menu'), menuB = $('#menu-b');
  let menuAbierto = false;
  const abrirMenu = () => {
    cerrar();
    const r = menuB.getBoundingClientRect();
    menu.style.setProperty('--mx', r.left + r.width / 2 + 'px'); menu.style.setProperty('--my', r.top + r.height / 2 + 'px');
    menu.hidden = false; menu.getBoundingClientRect();
    menu.classList.add('abierto'); document.body.classList.add('menu-abierto');
    menuB.setAttribute('aria-expanded', 'true'); $('#menu-t').textContent = T.cerrar;
    document.documentElement.style.overflow = 'hidden'; menuAbierto = true;
    setTimeout(() => menu.querySelector('nav a').focus({ preventScroll: true }), 350);
  };
  const cerrarMenu = () => {
    if (!menuAbierto) return;
    menuAbierto = false; menu.classList.remove('abierto'); document.body.classList.remove('menu-abierto');
    menuB.setAttribute('aria-expanded', 'false'); $('#menu-t').textContent = T.menu;
    document.documentElement.style.overflow = '';
    setTimeout(() => { if (!menuAbierto) menu.hidden = true; }, QUIETO ? 0 : 750); menuB.focus();
  };
  menuB.addEventListener('click', () => menuAbierto ? cerrarMenu() : abrirMenu());
  addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (menuAbierto) cerrarMenu(); else if (abierto) { const b = boton(abierto); cerrar(); b.focus(); }
  });
})();
