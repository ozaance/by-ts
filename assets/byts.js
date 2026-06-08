/* ============================================================
   BYTS — interactions & data
   ============================================================ */

/* ---------- icon set (line, currentColor) ---------- */
const I = {
  weld:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l7-7"/><path d="M10 10l4-4 4 4-4 4z"/><path d="M14 14l5 5"/><circle cx="6" cy="14" r="1.2" fill="currentColor" stroke="none"/><circle cx="20" cy="6" r="1" fill="currentColor" stroke="none"/></svg>',
  pipe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h11a4 4 0 0 1 4 4v8"/><path d="M3 5v6"/><path d="M14 17h8"/><circle cx="18" cy="20" r="0"/><path d="M15 20h6"/></svg>',
  steel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l8-4 8 4-8 4z"/><path d="M4 7v10l8 4 8-4V7"/><path d="M12 11v10"/></svg>',
  network:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8M12 13v3"/></svg>',
  geo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c3 4 5 6.5 5 10a5 5 0 0 1-10 0c0-3.5 2-6 5-10z"/><path d="M12 21v-8"/></svg>',
  skid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="11" rx="1"/><path d="M3 18l-1 3M21 18l1 3M7 7V4M17 7V4M7 11h10M9 14h6"/></svg>',
  food:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v8a3 3 0 0 0 6 0V3M9 3v8M15 3c-1.5 1-2 3-2 5s.5 4 2 5"/><path d="M15 13v8"/></svg>',
  diameter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.4"/><path d="M12 4v3M12 17v3M4 12h3M17 12h3"/></svg>',
  radio:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M18.4 5.6l-2 2M7.6 16.4l-2 2"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  trace:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 6v12M4 18h16M8 10h8M8 14h5"/><circle cx="18" cy="14" r="2"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  cert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="M9 14l-2 7 5-3 5 3-2-7"/><path d="M9.5 9l1.8 1.8L15 7"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>'
};

/* ---------- expertises ---------- */
const EXPERTISES = [
  { ic:'weld', t:'Soudure TIG', d:'Inox & acier carbone, cordons précis et réguliers, qualité de soudure niveau radiographique.' },
  { ic:'pipe', t:'Tuyauterie inox', d:'Réseaux inox fine épaisseur, raccordements process et finitions sanitaires irréprochables.' },
  { ic:'steel', t:'Acier carbone', d:'Lignes industrielles robustes, grands linéaires, soudure arc et préfabrication atelier.' },
  { ic:'network', t:'Réseaux industriels', d:'Multi-fluides : process, azote, soude, eau glacée, eau de ville, raccordement pompes.' },
  { ic:'geo', t:'Géothermie', d:'Installation complète de réseaux géothermiques, salle des machines, échangeurs, TAR.' },
  { ic:'skid', t:'Skids techniques', d:'Préfabrication d\'ensembles compacts, montés et contrôlés en atelier avant livraison.' },
  { ic:'food', t:'Agroalimentaire', d:'Réseaux inox aux normes hygiéniques strictes, soudure TIG sur inox sanitaire fine épaisseur.' },
  { ic:'diameter', t:'Grands diamètres', d:'Du DN15 au DN300+, jusqu\'à 12 pouces, pose en hauteur supérieure à 10 mètres.' },
  { ic:'radio', t:'Contrôle radiographique', d:'Soudures contrôlées à 100 %, traçabilité totale, documentation conforme aux standards défense.' }
];

/* ---------- chantiers ---------- */
const PROJECTS = [
  {
    id:'mersen', num:'01', client:'Mersen', title:'Mersen', loc:'Gennevilliers · 92',
    tags:[['Tuyauterie multi-fluides','arc'],['Mandataire Eiffage','steel']],
    type:'Industriel',
    cover:'assets/photos/mersen-2.jpg',
    gallery:[
      ['assets/photos/mersen-1.jpg','Réseau multi-fluides : pompes, vannes, tuyauteries inox'],
      ['assets/photos/mersen-2.jpg','Tuyauteries process & eau glacée posées en hauteur'],
      ['assets/photos/mersen-3.jpg','Raccordement colonnes de filtration avec pompes']
    ],
    desc:'Site industriel haute performance destiné aux environnements extrêmes — fours de production. Installation et raccordement de multiples réseaux de tuyauterie, niveau d\'exigence maximal en qualité de soudure et précision géométrique.',
    specs:[['Client','Mersen'],['Mandataire','Eiffage'],['Lieu','Gennevilliers · 92'],['Type','Industriel']],
    presta:[
      ['Lignes process','Alimentation équipements production'],
      ['Lignes d\'azote','Distribution gaz industriel'],
      ['Lignes de soude','Circuit chimique'],
      ['Réseaux eau glacée','Refroidissement installations'],
      ['Eau de ville','Alimentation générale du site'],
      ['Raccordement pompes','Fluides lignes process']
    ]
  },
  {
    id:'mbda', num:'02', client:'MBDA', title:'MBDA', loc:'Gaillon · 27',
    tags:[['Skids techniques','arc'],['100 % radiographique','blue'],['Défense','steel']],
    type:'Skids · Défense',
    cover:'assets/photos/mbda-2.jpg',
    gallery:[
      ['assets/photos/mbda-1.jpg','Skid technique en cours d\'assemblage — atelier SNER'],
      ['assets/photos/mbda-2.jpg','Fabrication skid carburant, contrôle radiographique systématique'],
      ['assets/photos/mbda-3.jpg','Vue finale skid MBDA — vannes, purgeurs, circuits fluide'],
      ['assets/photos/mbda-4.jpg','Détail assemblage skid MBDA — tuyauterie et raccordements']
    ],
    desc:'Chantier le plus exigeant de notre parcours, sous maîtrise d\'ouvrage de MBDA — acteur mondial des systèmes de défense. Contrôle radiographique 100 % systématique, traçabilité totale matériaux et soudures, précision niveau défense nationale.',
    specs:[['Client','MBDA'],['Via','SNER / Socotec'],['Lieu','Gaillon · 27'],['Durée','6 mois']],
    presta:[
      ['Skids techniques 100 % radio','Toutes soudures contrôlées'],
      ['Contrôle radiographique','Validation à chaque étape'],
      ['Plans techniques complexes','Assemblage conforme isométriques'],
      ['Traçabilité totale','Matériaux, soudures, qualité'],
      ['Environnement sécurisé','Site stratégique défense'],
      ['Haute précision','Standards niveau défense']
    ]
  },
  {
    id:'stellantis', num:'03', client:'Stellantis', title:'Stellantis', loc:'Caen · 14',
    tags:[['Géothermie industrielle','arc'],['Grand diamètre','blue'],['Pose > 10 m','steel']],
    type:'Géothermie',
    cover:'assets/photos/stellantis-1.jpg',
    gallery:[
      ['assets/photos/stellantis-1.jpg','Salle des machines — pompes et tuyauterie grand diamètre'],
      ['assets/photos/stellantis-2.jpg','Liaisons extérieures tours de refroidissement — lignes inox'],
      ['assets/photos/stellantis-3.jpg','Intégration réseau géothermique en hauteur — site en service'],
      ['assets/photos/stellantis-4.jpg','Réseau inox grand diamètre — vannes et raccordements'],
      ['assets/photos/stellantis-5.jpg','Lignes extérieures — réseau inox et vannes papillon'],
      ['assets/photos/stellantis-6.jpg','Salle des pompes — batterie de pompes et réseau inox']
    ],
    desc:'L\'un des chantiers les plus ambitieux de notre parcours : installation d\'un système complet de chauffage par géothermie, une première sur le site. Intervention en site industriel actif, tuyauteries grand diamètre jusqu\'à 12 pouces, pose en hauteur supérieure à 10 mètres.',
    specs:[['Client','Stellantis'],['Lieu','Caen · 14'],['Durée','~12 mois'],['Type','Géothermie']],
    presta:[
      ['Grand diamètre','Jusqu\'à 12 pouces'],
      ['Pose en hauteur','Supérieure à 10 mètres'],
      ['Salle des machines','Pompes, échangeurs, vannes'],
      ['Raccordement TAR','Tours aéro-réfrigérantes'],
      ['Réseau géothermique','Première installation du site'],
      ['Site actif','Zéro interruption de production']
    ]
  },
  {
    id:'orly', num:'04', client:'SPAC / ADP', title:'Paris-Orly', loc:'Paris-Orly · 91',
    tags:[['Réseau kérosène enterré','arc'],['DN300 / DN150','blue'],['100 % radiographique','steel']],
    type:'Aéroportuaire',
    cover:'assets/photos/orly-4.jpg',
    gallery:[
      ['assets/photos/orly-1.jpg','Vue tranchée — pipeline DN300 en cours d\'assemblage'],
      ['assets/photos/orly-3.jpg','Contrôle radiographique en tranchée — soudures certifiées'],
      ['assets/photos/orly-4.jpg','Réseau kérosène — pose et raccordements en tranchée'],
      ['assets/photos/orly-5.jpg','Pipeline DN300 — assemblage acier en environnement aéroportuaire']
    ],
    desc:'Construction d\'un réseau kérosène enterré pour l\'alimentation des aéronefs à l\'aéroport de Paris-Orly. Pose et assemblage acier DN300 et DN150 avec contrôles radiographiques 100 %, en tranchées profondes et environnement aéroportuaire sécurisé.',
    specs:[['Client','SPAC / ADP'],['Lieu','Paris-Orly · 91'],['Durée','1,5 mois'],['Diamètres','DN300 / DN150']],
    presta:[
      ['Pose tranchée DN300','Pipeline kérosène acier enterré'],
      ['Soudure en tranchée','Conditions contraignantes'],
      ['Contrôle radiographique','Intégrité réseau certifiée'],
      ['Traçabilité complète','Documentation soudures chantier']
    ]
  },
  {
    id:'biospringer', num:'05', client:'Biospringer', title:'Biospringer', loc:'Maison-Alfort · 94',
    tags:[['Inox agroalimentaire','arc'],['Soudure TIG','blue'],['En cours','steel']],
    type:'Agroalimentaire',
    cover:'assets/photos/biospringer-2.jpg',
    gallery:[
      ['assets/photos/biospringer-1.jpg','Soudeur en intervention réseau inox'],
      ['assets/photos/biospringer-2.jpg','Réseau tuyauterie inox process complet'],
      ['assets/photos/soudure-3.jpg','Tee inox schedule 10s — soudure TIG qualité radio']
    ],
    desc:'Chantier en cours sur le site Biospringer, spécialisé dans la production d\'extraits de levure. Installation complète de réseaux inox fine épaisseur aux normes agroalimentaires strictes, soudure TIG sur inox sanitaire, raccordements process sur installation en production active.',
    specs:[['Client','Biospringer'],['Via','STIIM'],['Lieu','Maison-Alfort · 94'],['Durée','En cours · 5 mois+']],
    presta:[
      ['Tuyauterie inox fine épaisseur','Normes agroalimentaires strictes'],
      ['Soudure TIG inox','Contrôle radiographique systématique'],
      ['Réseaux de process','Circulation fluides agroalimentaires'],
      ['Site de production actif','Sans arrêt de production'],
      ['Raccordements complexes','Intégration réseaux existants'],
      ['Exigences hygiéniques','Conformité normes alimentaires']
    ]
  }
];

/* ---------- gallery savoir-faire ---------- */
const GALLERY = [
  ['assets/photos/soudure-3.jpg','Tee inox schedule 10s — TIG qualité radio'],
  ['assets/photos/stellantis-1.jpg','Salle des machines — grand diamètre'],
  ['assets/photos/soudure-2.jpg','Coude inox — soudure TIG qualité radio'],
  ['assets/photos/orly-3.jpg','Soudure acier DN300 — certifiée radio'],
  ['assets/photos/soudure-4.jpg','Cordon TIG inox — précision'],
  ['assets/photos/mersen-1.jpg','Réseau multi-fluides — Mersen'],
  ['assets/photos/soudure-5.jpg','Soudure inox épaisseur 2 mm'],
  ['assets/photos/mbda-3.jpg','Skid MBDA — vannes & circuits'],
  ['assets/photos/soudure-6.jpg','Soudure intérieure — inspection visuelle'],
  ['assets/photos/stellantis-2.jpg','Liaisons inox tours de refroidissement'],
  ['assets/photos/soudure-1.jpg','Détail soudure acier — contrôle radio'],
  ['assets/photos/biospringer-1.jpg','Intervention réseau inox — Biospringer']
];

/* ---------- render ---------- */
function el(html){ const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstElementChild; }

function renderExpertises(){
  const wrap = document.getElementById('expGrid');
  EXPERTISES.forEach((e,i)=>{
    wrap.appendChild(el(`
      <article class="exp" data-reveal data-reveal-d="${(i%3)+1}">
        <span class="idx mono">${String(i+1).padStart(2,'0')}</span>
        <span class="ic">${I[e.ic]}</span>
        <h3>${e.t}</h3>
        <p>${e.d}</p>
      </article>`));
  });
}

function renderProjects(){
  const wrap = document.getElementById('projList');
  PROJECTS.forEach((p,i)=>{
    const tags = p.tags.map(t=>`<span class="tag tag-${t[1]}">${t[0]}</span>`).join('');
    wrap.appendChild(el(`
      <article class="proj" data-reveal data-proj="${p.id}" data-screen-label="Chantier ${p.num}">
        <div class="pidx mono">${p.num} — ${p.client}</div>
        <div class="proj-info">
          <div class="ptags">${tags}</div>
          <h3>${p.title}</h3>
          <div class="meta mono"><span><b>Lieu</b> ${p.loc}</span><span><b>Type</b> ${p.type}</span></div>
          <p class="desc">${p.desc.split('. ').slice(0,2).join('. ')}.</p>
          <span class="open">Voir le chantier ${I.arrow}</span>
        </div>
        <div class="proj-img"><img src="${p.cover}" alt="${p.title}" loading="lazy"></div>
      </article>`));
  });
}

function renderGallery(){
  const wrap = document.getElementById('galGrid');
  GALLERY.forEach((g,i)=>{
    wrap.appendChild(el(`
      <figure class="gal-item" data-lb="${i}">
        <img src="${g[0]}" alt="${g[1]}" loading="lazy">
        <figcaption class="cap">${g[1]}</figcaption>
      </figure>`));
  });
}

/* ---------- project modal ---------- */
function openProject(id){
  const p = PROJECTS.find(x=>x.id===id); if(!p) return;
  const tags = p.tags.map(t=>`<span class="tag tag-${t[1]}">${t[0]}</span>`).join('');
  const specs = p.specs.map(s=>`<div><div class="k">${s[0]}</div><div class="v">${s[1]}</div></div>`).join('');
  const presta = p.presta.map((pr,i)=>`<li><span class="pn">${String(i+1).padStart(2,'0')}</span><span class="pt">${pr[0]}</span><span class="pd">${pr[1]}</span></li>`).join('');
  const gal = p.gallery.map((g,i)=>`<img src="${g[0]}" alt="${g[1]}" data-pgal="${i}">`).join('');
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-hero"><img src="${p.cover}" alt="${p.title}"></div>
    <div class="modal-body">
      <div class="ptags">${tags}</div>
      <h2>${p.title}</h2>
      <div class="modal-specs">${specs}</div>
      <p>${p.desc}</p>
      <h4>// Prestations réalisées</h4>
      <ul class="presta">${presta}</ul>
      <h4>// Galerie chantier</h4>
      <div class="modal-gallery">${gal}</div>
    </div>`;
  // wire project gallery to lightbox
  modalGalleryImgs = p.gallery;
  document.querySelectorAll('#modalBody [data-pgal]').forEach(img=>{
    img.addEventListener('click',()=> openLightbox(p.gallery, +img.dataset.pgal));
  });
  const m = document.getElementById('modal');
  m.classList.add('open'); document.body.style.overflow='hidden';
  m.querySelector('.modal-panel').scrollTop = 0;
}
function closeProject(){ document.getElementById('modal').classList.remove('open'); document.body.style.overflow=''; }

/* ---------- lightbox ---------- */
let lbSet=[], lbIdx=0, modalGalleryImgs=[];
function openLightbox(set, idx){
  lbSet=set; lbIdx=idx;
  const lb=document.getElementById('lightbox');
  paintLb(); lb.classList.add('open'); document.body.style.overflow='hidden';
}
function paintLb(){
  const g=lbSet[lbIdx];
  document.getElementById('lbImg').src=g[0];
  document.getElementById('lbCap').textContent=g[1]||'';
}
function lbStep(d){ lbIdx=(lbIdx+d+lbSet.length)%lbSet.length; paintLb(); }
function closeLb(){ document.getElementById('lightbox').classList.remove('open'); if(!document.getElementById('modal').classList.contains('open')) document.body.style.overflow=''; }

/* ---------- count up ---------- */
function countUp(node){
  const target=parseFloat(node.dataset.count); const dur=1400; const start=performance.now();
  const dec=(node.dataset.count.indexOf('.')>-1)?1:0;
  function tick(t){
    const p=Math.min((t-start)/dur,1); const e=1-Math.pow(1-p,3);
    node.textContent=(target*e).toFixed(dec); if(p<1) requestAnimationFrame(tick);
    else node.textContent=node.dataset.count;
  }
  requestAnimationFrame(tick);
}

/* ---------- init ---------- */
document.addEventListener('DOMContentLoaded',()=>{
  renderExpertises(); renderProjects(); renderGallery();

  // header scroll
  const hdr=document.querySelector('.hdr');
  const onScroll=()=>{ hdr.classList.toggle('scrolled', window.scrollY>40); };
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});

  // hero parallax
  const heroImg=document.querySelector('.hero-bg img');
  if(heroImg && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    window.addEventListener('scroll',()=>{ const y=window.scrollY; if(y<window.innerHeight) heroImg.style.transform=`scale(1.06) translateY(${y*0.18}px)`; },{passive:true});
  }

  // mobile menu
  const burger=document.querySelector('.burger');
  burger.addEventListener('click',()=>document.body.classList.toggle('menu-open'));
  document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));

  // reveal
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);
      en.target.querySelectorAll('[data-count]').forEach(countUp); } });
  },{threshold:.12, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('[data-reveal]').forEach(n=>io.observe(n));
  document.querySelectorAll('.stat [data-count]').forEach(n=>{
    const s=new IntersectionObserver(e=>{ e.forEach(x=>{ if(x.isIntersecting){ countUp(x.target); s.unobserve(x.target);} }); },{threshold:.6});
    s.observe(n);
  });

  // project open
  document.getElementById('projList').addEventListener('click',e=>{
    const card=e.target.closest('[data-proj]'); if(card) openProject(card.dataset.proj);
  });
  document.getElementById('modalClose').addEventListener('click',closeProject);
  document.querySelector('#modal .modal-bg').addEventListener('click',closeProject);

  // gallery lightbox
  document.getElementById('galGrid').addEventListener('click',e=>{
    const f=e.target.closest('[data-lb]'); if(f) openLightbox(GALLERY, +f.dataset.lb);
  });
  document.querySelector('.lb-close').addEventListener('click',closeLb);
  document.querySelector('.lb-prev').addEventListener('click',()=>lbStep(-1));
  document.querySelector('.lb-next').addEventListener('click',()=>lbStep(1));
  document.querySelector('.lightbox').addEventListener('click',e=>{ if(e.target.id==='lightbox') closeLb(); });

  // keyboard
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){ closeLb(); closeProject(); document.body.classList.remove('menu-open'); }
    if(document.getElementById('lightbox').classList.contains('open')){
      if(e.key==='ArrowRight') lbStep(1); if(e.key==='ArrowLeft') lbStep(-1);
    }
  });

  // form
  const form=document.getElementById('cform');
  form.addEventListener('submit',e=>{ e.preventDefault(); form.style.display='none'; document.getElementById('formOk').classList.add('show'); });
});
