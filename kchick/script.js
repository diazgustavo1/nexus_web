(function(){
 'use strict';
 const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
 const money=n=>'$'+n.toFixed(2);
  const WHATSAPP_PHONE=''; /* Tu número con código de país, ej. '34612345678'. Vacío = elegir contacto */
 const IMG={hero:'assets/hero.webp',chicken:'assets/chicken.webp',burger:'assets/burger.webp',tteok:'assets/tteokbokki.webp',snacks:'assets/snacks.webp'};
 const PRODUCTS=[
  {id:'k-chicken',name:'K-CHICKEN',korean:'치킨',price:14.9,desc:'Pollo crujiente doble fritura, glaseado picante dulce y sésamo. Por fuera crack, por dentro jugoso.',tag:'BEST SELLER',img:IMG.chicken,heat:'PICANTE ★★★'},
  {id:'k-burger',name:'K-BURGER',korean:'버거',price:12.5,desc:'Pollo frito, slaw coreano, pepinillo y salsa gochujang cremosa en pan tostado con mantequilla.',tag:'NUEVO',img:IMG.burger,heat:'PICANTE ★★'},
  {id:'tteokbokki',name:'TTEOKBOKKI',korean:'떡볶이',price:10.9,desc:'Pasteles de arroz masticables en salsa picante dulce, queso fundido y cebollín. El clásico de la calle.',tag:'STREET CLASSIC',img:IMG.tteok,heat:'PICANTE ★★★★'},
  {id:'k-snacks',name:'K-SNACKS',korean:'스낵',price:8.9,desc:'Para compartir: corn dogs crujientes, mandu dorados y papas sazonadas con polvo picante.',tag:'PARA COMPARTIR',img:IMG.snacks,heat:'SUAVE ★'}
 ];
 const FEATURES=[
  {icon:'i-leaf',t:'PREMIUM INGREDIENTS',k:'신선한 재료',d:'Ingredientes frescos, pollo de calidad y salsas hechas en casa.'},
  {icon:'i-flame',t:'BOLD KOREAN FLAVORS',k:'한국의 맛',d:'Gochujang, miel, ajo y fuego. Sabor que no se olvida.'},
  {icon:'i-zap',t:'FAST & FRESH',k:'빠르고 신선하게',d:'Rápido de verdad, pero siempre recién hecho.'},
  {icon:'i-users',t:'A PLACE FOR EVERYONE',k:'모두를 위한 공간',d:'Una mesa para la crew, la familia y tu primer antojo.'}
 ];

 /* ---- render menú y razones ---- */
 $('#menuGrid').innerHTML=PRODUCTS.map(p=>`<article class="dish" data-id="${p.id}">
  <button class="dish-media" data-detail="${p.id}" aria-label="Ver detalle de ${p.name}"><img src="${p.img}" alt="${p.name}"><span class="tag">${p.tag}</span><span class="heat">${p.heat}</span></button>
  <div class="dish-body"><div class="dish-top"><h3>${p.name}</h3><span class="hand ko">${p.korean}</span></div>
  <p class="dish-desc">${p.desc}</p><div class="dish-bottom"><span class="dish-price">${money(p.price)}</span><button class="dish-more" data-detail="${p.id}" aria-label="Detalle"><svg class="icon"><use href="#i-up"/></svg></button></div>
  <button class="dish-add" data-add="${p.id}">ADD TO ORDER +</button></div></article>`).join('');
 $('#whyGrid').innerHTML=FEATURES.map((f,i)=>`<article class="why-card"><div class="why-icon"><svg class="icon"><use href="#${f.icon}"/></svg></div><p class="hand ko">${f.k}</p><h3>${f.t}</h3><p class="why-desc">${f.d}</p><p class="num">0${i+1} →</p></article>`).join('');

 /* ---- navegación ---- */
 function go(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'});closeMenus();}
 function closeMenus(){$('#mobileNav').classList.remove('is-open');$('#burger').setAttribute('aria-expanded','false');}
 $$('[data-go]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();go(a.dataset.go)}));
 $('#burger').addEventListener('click',()=>{const open=$('#mobileNav').classList.toggle('is-open');$('#burger').setAttribute('aria-expanded',String(open));});
 function orderNow(){go('menu');toast('Elige tu favorito y agrégalo');}
 [$('#orderNow'),$('#heroOrder'),$('#footerOrder'),$('#mobileOrder')].forEach(b=>b.addEventListener('click',orderNow));
 $('#viewFullMenu').addEventListener('click',()=>go('menu-grid'));
 $('#findLocation').addEventListener('click',()=>go('why'));
 $('#franchiseBtn').addEventListener('click',()=>go('locations'));

 /* ---- buscador ---- */
 $('#searchToggle').addEventListener('click',()=>{const bar=$('#searchBar');bar.hidden=!bar.hidden;go('menu');if(!bar.hidden)$('#menuSearch').focus();});
 $('#searchClear').addEventListener('click',()=>{$('#menuSearch').value='';filterMenu();});
 $('#menuSearch').addEventListener('input',filterMenu);
 function filterMenu(){const q=$('#menuSearch').value.trim().toLowerCase();let n=0;PRODUCTS.forEach(p=>{const ok=(p.name+' '+p.korean+' '+p.desc+' '+p.heat).toLowerCase().includes(q);document.querySelector(`[data-id="${p.id}"]`).hidden=!ok;if(ok)n++;});$('#noResults').hidden=n!==0;const note=$('#resultNote');note.hidden=!q;note.textContent=q?`Resultados para “${q}”: ${n} ${n===1?'plato':'platos'}`:'';}

 /* ---- carrito ---- */
 let cart=[];
 try{cart=JSON.parse(localStorage.getItem('kchick_cart')||'[]');}catch(e){cart=[];}
 function save(){try{localStorage.setItem('kchick_cart',JSON.stringify(cart));}catch(e){}}
 const qty=cart.reduce((a,c)=>a+c.qty,0), total=cart.reduce((a,c)=>a+c.price*c.qty,0);
 function renderCart(){
  const count=cart.reduce((a,c)=>a+c.qty,0), sum=cart.reduce((a,c)=>a+c.price*c.qty,0);
  $('#cartCount').textContent=count;$('#mobileCartCount').textContent=count;
  $('#cartTotal').textContent=money(sum);$('#cartSub').textContent=`${count} productos · Recogida en tienda · 15–20 min`;
  $('#checkout').disabled=cart.length===0;
  $('#cartItems').innerHTML=cart.length?cart.map((c,i)=>`<div class="cart-item"><div class="cart-item-info"><p class="display">${c.name}</p><p>${money(c.price)} c/u</p></div><div class="qty"><button data-qty="${i}" data-delta="-1" aria-label="Quitar uno"><svg class="icon"><use href="#i-minus"/></svg></button><span>${c.qty}</span><button data-qty="${i}" data-delta="1" aria-label="Agregar uno"><svg class="icon"><use href="#i-plus"/></svg></button></div><p class="cart-line-total">${money(c.price*c.qty)}</p><button class="remove-btn" data-remove="${i}" aria-label="Quitar ${c.name}"><svg class="icon"><use href="#i-trash"/></svg></button></div>`).join(''):`<div class="cart-empty"><svg class="icon"><use href="#i-bag"/></svg><p class="display">TU CAJA ESTÁ VACÍA</p><p>Agrega algo crujiente del menú.</p><button class="btn btn-dark" id="emptyGoMenu">VER MENÚ →</button></div>`;
  $$('[data-qty]').forEach(b=>b.addEventListener('click',()=>changeQty(Number(b.dataset.qty),Number(b.dataset.delta))));
  $$('[data-remove]').forEach(b=>b.addEventListener('click',()=>{const i=Number(b.dataset.remove);cart.splice(i,1);save();renderCart();}));
  const empty=$('#emptyGoMenu');if(empty)empty.addEventListener('click',()=>{$('#cartModal').hidden=true;go('menu');});
 }
 function addToCart(p){const f=cart.find(c=>c.id===p.id);if(f)f.qty++;else cart.push({id:p.id,name:p.name,price:p.price,qty:1});save();renderCart();toast(`${p.name} agregado al pedido`);}
 function changeQty(i,d){if(!cart[i])return;cart[i].qty+=d;if(cart[i].qty<=0)cart.splice(i,1);save();renderCart();}
 $$('[data-add]').forEach(b=>b.addEventListener('click',()=>addToCart(PRODUCTS.find(p=>p.id===b.dataset.add))));
 function orderMessage(){
  const lines=cart.map(c=>`• ${c.qty}× ${c.name} — ${money(c.price*c.qty)}`);
  const count=cart.reduce((a,x)=>a+x.qty,0), sum=cart.reduce((a,x)=>a+x.price*x.qty,0);
  return `🔥 *NUEVO PEDIDO K-CHICK* 🔥\n\n${lines.join('\n')}\n\n*TOTAL: ${money(sum)}*\n${count} productos · Recogida en tienda · 15–20 min\n¡Gracias!`;
 }
 function whatsappLink(){
  const text=encodeURIComponent(orderMessage());
  return WHATSAPP_PHONE ? `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g,'')}?text=${text}` : `https://api.whatsapp.com/send?text=${text}`;
 }
 $('#checkout').addEventListener('click',()=>{
  if(!cart.length)return;
  const c=cart.reduce((a,x)=>a+x.qty,0),s=cart.reduce((a,x)=>a+x.price*x.qty,0);
  const url=whatsappLink();
  $('#waLink').href=url;$('#waLink').hidden=false;
  cart=[];save();renderCart();
  $('#orderMsgText').textContent=`Pedido de ${c} productos por ${money(s)} listo. Ábrelo en WhatsApp para enviarlo.`;
  $('#orderMsg').hidden=false;
  window.open(url,'_blank','noopener,noreferrer');
  toast('Pedido listo para WhatsApp');
 });

 /* ---- modales ---- */
 let selected=null;
 function openDish(p){selected=p;$('#dishImg').src=p.img;$('#dishImg').alt=p.name;$('#dishTag').textContent=p.tag;$('#dishName').textContent=p.name;$('#dishKo').textContent=p.korean+' · '+p.heat;$('#dishPrice').textContent=money(p.price);$('#dishDesc').textContent=p.desc+' Se prepara al momento, con doble fritura y salsa al punto. Ideal para compartir… o no.';$('#dishModal').hidden=false;}
 $$('[data-detail]').forEach(b=>b.addEventListener('click',()=>openDish(PRODUCTS.find(p=>p.id===b.dataset.detail))));
 $$('[data-close-dish]').forEach(b=>b.addEventListener('click',()=>$('#dishModal').hidden=true));
 $('#dishAdd').addEventListener('click',()=>{if(selected){addToCart(selected);$('#dishModal').hidden=true;$('#cartModal').hidden=false;}});
 [$('#storyOpen'),$('#storyOpen2')].forEach(b=>b.addEventListener('click',()=>$('#storyModal').hidden=false));
 $$('[data-close-story]').forEach(b=>b.addEventListener('click',()=>$('#storyModal').hidden=true));
 $('#storyToMenu').addEventListener('click',()=>{$('#storyModal').hidden=true;orderNow();});
 function openCart(){$('#orderMsg').hidden=true;$('#cartModal').hidden=false;renderCart();}
 [$('#cartToggle'),$('#mobileCart')].forEach(b=>b.addEventListener('click',openCart));
 $$('[data-close-cart]').forEach(b=>b.addEventListener('click',()=>$('#cartModal').hidden=true));
 $$('.overlay').forEach(o=>o.addEventListener('click',e=>{if(e.target===o)o.hidden=true;}));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')$$('.overlay').forEach(o=>o.hidden=true);});

 let timer;function toast(msg){const t=$('#toast');$('#toastText').textContent=msg;t.hidden=false;clearTimeout(timer);timer=setTimeout(()=>t.hidden=true,2400);}
 renderCart();
})();