/* ---------------- NAVIGATION ---------------- */
const views = document.querySelectorAll('.view');
const navItems = document.querySelectorAll('.nav-item[data-view]');
const bnItems = document.querySelectorAll('.bn-item[data-view]');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function goTo(name){
  views.forEach(v=>v.classList.toggle('active', v.id === 'view-'+name));
  navItems.forEach(n=>n.classList.toggle('active', n.dataset.view===name));
  bnItems.forEach(n=>n.classList.toggle('active', n.dataset.view===name));
  sidebar.classList.remove('open'); overlay.classList.remove('show');
  document.querySelector('.content').scrollTo?.(0,0);
  window.scrollTo(0,0);
}
/* Delegated so it also works on buttons/cards rendered later (streams, followers, wallet menu, etc.) */
document.addEventListener('click', (e)=>{
  const el = e.target.closest('[data-view]');
  if(el) goTo(el.dataset.view);
});
document.getElementById('hamburger').addEventListener('click', ()=>{
  sidebar.classList.add('open'); overlay.classList.add('show');
});
overlay.addEventListener('click', ()=>{ sidebar.classList.remove('open'); overlay.classList.remove('show'); });

/* ---------------- DATA ---------------- */
const streamers = [
  {n:'Aroob Gamer', c:'PUBG Mobile Live', v:'12.4K', img:'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=60'},
  {n:'Music With Ali', c:'Acoustic Vibes', v:'8.6K', img:'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=60'},
  {n:'Sana Cooks', c:'Live Kitchen', v:'6.1K', img:'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&q=60'},
  {n:'Hamza Fit', c:'Home Workout', v:'4.3K', img:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=60'},
];
const reco = [
  {n:'Zeeshan Travels', c:'Northern Areas', v:'9.2K', img:'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=400&q=60'},
  {n:'Areeb Beats', c:'Music Production', v:'5.1K', img:'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&q=60'},
  {n:'Noor Art', c:'Digital Painting', v:'3.4K', img:'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=60'},
  {n:'Bilal Tech', c:'Coding Live', v:'7.7K', img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=60'},
];
function streamCard(s){
  return `<div class="stream-card" data-view="live" data-stream-name="${s.n}" data-stream-cat="${s.c}">
    <div class="stream-thumb" style="background-image:url('${s.img}')">
      <span class="live-badge">LIVE</span><span class="viewer-badge"><i class="fa-solid fa-eye"></i> ${s.v}</span>
    </div>
    <div class="stream-info"><div class="t">${s.n}</div><div class="s">${s.c}</div></div>
  </div>`;
}
document.getElementById('live-now-grid').innerHTML = streamers.map(streamCard).join('');
document.getElementById('reco-grid').innerHTML = reco.map(streamCard).join('');

const chatMessages = [
  {u:'Hamza', img:12, t:'Nice gameplay! 🔥', tm:'10:20 PM'},
  {u:'Zeeshan', img:15, t:'You are the best!', tm:'10:20 PM'},
  {u:'Sana', img:9, t:'Love your streams ❤️', tm:'10:20 PM'},
  {u:'Areeb', img:22, t:'GG WP!', tm:'10:21 PM'},
  {u:'Ali Khan', img:5, gift:'Rose x10', tm:'10:21 PM'},
  {u:'Bilal', img:31, t:'Insane shot! 🎯', tm:'10:21 PM'},
  {u:'Noor', img:44, t:'You are OP! 🔥', tm:'10:21 PM'},
];
document.getElementById('chat-list').innerHTML = chatMessages.map(m=>`
  <div class="chat-msg">
    <img src="https://i.pravatar.cc/60?img=${m.img}">
    <div>
      <span class="nm">${m.u}</span><span class="tm">${m.tm}</span>
      ${m.t? `<div>${m.t}</div>`:''}
      ${m.gift? `<div class="gift-line">🌹 Sent ${m.gift}</div>`:''}
    </div>
  </div>`).join('');

const txData = [
  {t:'Coins Purchase', icon:'fa-coins', color:'var(--green)', bg:'rgba(16,185,129,.15)', amt:'+1,000', d:'May 7, 2024 · 10:30 PM', s:'completed'},
  {t:'Coins Purchase', icon:'fa-coins', color:'var(--green)', bg:'rgba(16,185,129,.15)', amt:'+500', d:'May 6, 2024 · 09:15 PM', s:'completed'},
  {t:'Gift Sent to Aroob Gamer', icon:'fa-gift', color:'var(--red)', bg:'rgba(239,68,68,.15)', amt:'-100', d:'May 6, 2024 · 08:45 PM', s:'completed'},
  {t:'Gift Sent to Ali Khan', icon:'fa-gift', color:'var(--red)', bg:'rgba(239,68,68,.15)', amt:'-500', d:'May 5, 2024 · 07:30 PM', s:'completed'},
  {t:'Coins Purchase', icon:'fa-coins', color:'var(--green)', bg:'rgba(16,185,129,.15)', amt:'+5,000', d:'May 5, 2024 · 05:20 PM', s:'completed'},
  {t:'Gift Sent to Sana', icon:'fa-gift', color:'var(--red)', bg:'rgba(239,68,68,.15)', amt:'-299', d:'May 4, 2024 · 11:10 PM', s:'completed'},
  {t:'Refund', icon:'fa-rotate-left', color:'var(--blue)', bg:'rgba(59,130,246,.15)', amt:'+299', d:'May 4, 2024 · 10:00 PM', s:'completed'},
  {t:'Coins Purchase', icon:'fa-coins', color:'var(--orange)', bg:'rgba(245,158,11,.15)', amt:'+100', d:'May 3, 2024 · 09:00 PM', s:'pending'},
];
function txRow(t){
  return `<div class="wallet-menu-item">
    <div class="ic tx-icon" style="background:${t.bg}; color:${t.color};"><i class="fa-solid ${t.icon}"></i></div>
    <div class="txt"><b>${t.t}</b><small>${t.d}</small></div>
    <b style="color:${t.amt[0]==='+'?'var(--green)':'var(--red)'}">${t.amt}</b>
  </div>`;
}
document.getElementById('wallet-tx-list').innerHTML = txData.slice(0,5).map(txRow).join('');
document.querySelector('#tx-table tbody').innerHTML = txData.map(t=>`
  <tr>
    <td style="display:flex; align-items:center; gap:10px;"><span class="tx-icon" style="background:${t.bg}; color:${t.color};"><i class="fa-solid ${t.icon}"></i></span>${t.t}</td>
    <td>${t.d}</td>
    <td style="color:${t.amt[0]==='+'?'var(--green)':'var(--red)'}; font-weight:700;">${t.amt}</td>
    <td><span class="status-chip ${t.s}">${t.s==='completed'?'Completed':'Pending'}</span></td>
  </tr>`).join('');

const followersData = [
  {n:'Ali Khan', h:'@alikhan', img:5, action:'Follow Back'},
  {n:'Sana Malik', h:'@sanakhan', img:9, action:'Follow Back'},
  {n:'Hamza King', h:'@hamzaking', img:12, action:'Follow Back'},
  {n:'Zeeshan Gamer', h:'@zee_gamer', img:15, action:'Follow Back'},
  {n:'Areeb Ali', h:'@areebplayz', img:22, action:'Follow'},
  {n:'Noor Fatima', h:'@noor_123', img:44, action:'Follow'},
  {n:'Bilal Top', h:'@bilaltop', img:31, action:'Follow'},
  {n:'Sara Live', h:'@sara_live', img:24, action:'Follow'},
];
function renderFollowers(){
  document.getElementById('followers-list').innerHTML = followersData.map((f,i)=>`
    <div class="follow-row">
      <img src="https://i.pravatar.cc/100?img=${f.img}">
      <div style="flex:1;"><div class="nm">${f.n}</div><div class="hd">${f.h}</div></div>
      <button class="btn btn-sm ${f.action.startsWith('Follow')? 'btn-primary':'btn-outline'}" data-i="${i}" data-action="toggle-follow">${f.action}</button>
    </div>`).join('');
  document.querySelectorAll('[data-action="toggle-follow"]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const f = followersData[btn.dataset.i];
      if(f.action.startsWith('Follow')){
        f._prev = f.action;
        f.action = 'Following';
        showToast(`You're now following ${f.n}`,'success','fa-solid fa-check');
      } else {
        f.action = f._prev || 'Follow';
      }
      renderFollowers();
    });
  });
}
renderFollowers();

const reportsData = [
  {icon:'fa-user', bg:'rgba(239,68,68,.15)', color:'var(--red)', t:'User Report', d:'Ali Khan · Harassment', time:'2m ago'},
  {icon:'fa-video', bg:'rgba(245,158,11,.15)', color:'var(--orange)', t:'Stream Report', d:'Aroob Gamer · Inappropriate content', time:'5m ago'},
  {icon:'fa-comment', bg:'rgba(124,58,237,.15)', color:'var(--purple)', t:'Message Report', d:'Zeeshan · Spam', time:'10m ago'},
  {icon:'fa-user', bg:'rgba(239,68,68,.15)', color:'var(--red)', t:'User Report', d:'Hamza · Bullying', time:'30m ago'},
];
function renderReports(){
  const list = document.getElementById('reports-list');
  if(!reportsData.length){
    list.innerHTML = `<div class="card" style="text-align:center; color:var(--text-2); padding:30px;">No pending reports 🎉</div>`;
    return;
  }
  list.innerHTML = reportsData.map((r,i)=>`
    <div class="report-card">
      <div class="rtype" style="background:${r.bg}; color:${r.color};"><i class="fa-solid ${r.icon}"></i></div>
      <div class="body">
        <b>${r.t}</b><p>${r.d}</p>
        <div class="report-actions">
          <button class="btn btn-sm btn-primary" data-i="${i}" data-action="report-review">Review</button>
          <button class="btn btn-sm btn-ghost" data-i="${i}" data-action="report-ignore">Ignore</button>
        </div>
      </div>
      <div class="time">${r.time}</div>
    </div>`).join('');
  list.querySelectorAll('[data-action="report-review"]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const r = reportsData[btn.dataset.i];
      showToast(`Marked "${r.t}" as reviewed`,'success','fa-solid fa-check');
      reportsData.splice(btn.dataset.i,1);
      renderReports();
    });
  });
  list.querySelectorAll('[data-action="report-ignore"]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const r = reportsData[btn.dataset.i];
      showToast(`Ignored "${r.t}"`,'info','fa-solid fa-eye-slash');
      reportsData.splice(btn.dataset.i,1);
      renderReports();
    });
  });
}
renderReports();

const clips = [12,15,22,31,9,44,5,24];
document.getElementById('profile-grid').innerHTML = clips.map((c,i)=>`
  <div class="vid-tile" style="background-image:url('https://images.unsplash.com/photo-15${10+i}?w=300&q=60'), linear-gradient(135deg,#7C3AED,#EC4899)">
    <span class="live-badge">LIVE</span><span class="views"><i class="fa-solid fa-play"></i> ${(Math.random()*15+2).toFixed(1)}K</span>
  </div>`).join('');

/* Coin packages */
const pkgs = [
  {amt:'100 Coins', price:'PKR 120'},
  {amt:'500 Coins', price:'PKR 550', off:'5% OFF'},
  {amt:'1,000 Coins', price:'PKR 1,050', off:'10% OFF', sel:true},
  {amt:'5,000 Coins', price:'PKR 4,800', off:'20% OFF'},
  {amt:'10,000 Coins', price:'PKR 9,000', off:'20% OFF'},
];
function renderPkgs(){
  document.getElementById('coin-pkgs').innerHTML = pkgs.map((p,i)=>`
    <div class="coin-pkg ${p.sel?'selected':''}" data-i="${i}">
      ${p.off? `<span class="badge-off">${p.off}</span>`:''}
      <div class="left"><div class="coin-ic"><i class="fa-solid fa-coins"></i></div><div><div class="amt">${p.amt}</div></div></div>
      <div class="price">${p.price}</div>
    </div>`).join('');
  document.querySelectorAll('.coin-pkg').forEach(el=>{
    el.addEventListener('click', ()=>{
      pkgs.forEach(p=>p.sel=false);
      pkgs[el.dataset.i].sel = true;
      renderPkgs();
      updateSummary();
    });
  });
}
function updateSummary(){
  const sel = pkgs.find(p=>p.sel) || pkgs[0];
  document.getElementById('sel-pkg-name').textContent = sel.amt;
  document.getElementById('sel-pkg-price').textContent = sel.price;
  document.getElementById('sel-pkg-price2').textContent = sel.price;
}
renderPkgs(); updateSummary();

const methods = [
  {n:'JazzCash', icon:'fa-mobile-screen', color:'var(--red)', sel:true},
  {n:'EasyPaisa', icon:'fa-wallet', color:'var(--green)'},
  {n:'Credit / Debit Card', icon:'fa-credit-card', color:'var(--blue)'},
];
function renderMethods(){
  document.getElementById('pay-methods').innerHTML = methods.map((m,i)=>`
    <div class="pay-method ${m.sel?'selected':''}" data-i="${i}">
      <div class="ic" style="background:rgba(255,255,255,.06); color:${m.color}; width:34px; height:34px; border-radius:9px; display:flex; align-items:center; justify-content:center;"><i class="fa-solid ${m.icon}"></i></div>
      <span style="font-size:13.5px; font-weight:600;">${m.n}</span>
      <span class="radio"></span>
    </div>`).join('');
  document.querySelectorAll('.pay-method').forEach(el=>{
    el.addEventListener('click', ()=>{
      methods.forEach(m=>m.sel=false);
      methods[el.dataset.i].sel = true;
      renderMethods();
    });
  });
}
renderMethods();

/* ================================================================
   TOASTS
================================================================ */
function showToast(msg, type='info', icon='fa-solid fa-circle-info'){
  const stack = document.getElementById('toastStack');
  const t = document.createElement('div');
  t.className = `toast ${type==='error'?'error':type==='success'?'success':type==='warn'?'warn':''}`;
  t.innerHTML = `<i class="${icon}"></i><span>${msg}</span>`;
  stack.appendChild(t);
  setTimeout(()=>{ t.classList.add('out'); setTimeout(()=>t.remove(),200); }, 3200);
}

/* ================================================================
   GENERIC UI TOGGLES (pill tabs, category chips, chat tabs, profile tabs)
================================================================ */
document.addEventListener('click', (e)=>{
  const pill = e.target.closest('.pill-tab');
  if(pill && pill.parentElement){
    pill.parentElement.querySelectorAll('.pill-tab').forEach(p=>p.classList.remove('active'));
    pill.classList.add('active');
    filterTransactionsIfNeeded(pill);
    return;
  }
  const chip = e.target.closest('.cat-chip');
  if(chip){
    chip.parentElement.querySelectorAll('.cat-chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    showToast(`Showing ${chip.querySelector('span').textContent} streams`,'info','fa-solid fa-filter');
    return;
  }
  const ctab = e.target.closest('.chat-tab');
  if(ctab){
    ctab.parentElement.querySelectorAll('.chat-tab').forEach(c=>c.classList.remove('active'));
    ctab.classList.add('active');
    return;
  }
  const tu = e.target.closest('.tab-underline .tu');
  if(tu){
    tu.parentElement.querySelectorAll('.tu').forEach(c=>c.classList.remove('active'));
    tu.classList.add('active');
    return;
  }
  const seeAll = e.target.closest('.see-all');
  if(seeAll){
    showToast('Full list coming soon','info','fa-solid fa-list');
    return;
  }
});

function filterTransactionsIfNeeded(pill){
  const txView = document.getElementById('view-transactions');
  if(!txView.contains(pill)) return;
  const table = document.getElementById('tx-table');
  const label = pill.textContent.trim();
  const rows = table.querySelectorAll('tbody tr');
  rows.forEach((row,i)=>{
    const t = txData[i];
    let show = true;
    if(label==='Coins') show = /Coins/i.test(t.t);
    else if(label==='Gifts') show = /Gift|Refund/i.test(t.t);
    row.style.display = show ? '' : 'none';
  });
}

/* ================================================================
   DATA-ACTION HANDLER (buttons across the app)
================================================================ */
document.addEventListener('click', (e)=>{
  const el = e.target.closest('[data-action]');
  if(!el) return;
  const action = el.dataset.action;

  switch(action){
    case 'watch-now':
      goTo('live');
      showToast('Joining PK Battle stream...','info','fa-solid fa-play');
      break;

    case 'like':
      el.classList.toggle('liked');
      spawnHeart(el);
      showToast(el.classList.contains('liked') ? 'Added to favorites ❤️' : 'Removed from favorites','info','fa-solid fa-heart');
      break;

    case 'share': {
      const shareUrl = window.location.href.split('#')[0] + '#view-live';
      if(navigator.share){
        navigator.share({ title:'StreamX Live', text:'Watch this live stream on StreamX!', url:shareUrl }).catch(()=>{});
      } else if(navigator.clipboard){
        navigator.clipboard.writeText(shareUrl).then(()=> showToast('Stream link copied to clipboard','success','fa-solid fa-link'));
      } else {
        showToast('Stream link: '+shareUrl,'info','fa-solid fa-link');
      }
      break;
    }

    case 'open-gift':
      openGiftModal();
      break;

    case 'close-pinned':
      document.getElementById('pinnedMsg').style.display = 'none';
      break;

    case 'emoji':
      document.getElementById('chatInput').value += '😀';
      document.getElementById('chatInput').focus();
      break;

    case 'send-chat':
      sendChatMessage();
      break;

    case 'payout':
      showToast('Payout request submitted — funds arrive in 2–3 business days','success','fa-solid fa-money-bill-transfer');
      break;

    case 'menu-soon':
      showToast(`${el.dataset.label || 'This section'} — coming soon`,'info','fa-solid fa-hourglass-half');
      break;

    case 'pay':
      processPayment(el);
      break;

    case 'date-range': {
      const lbl = document.getElementById('dateRangeLabel');
      lbl.textContent = lbl.textContent === 'This Week' ? 'This Month' : 'This Week';
      showToast(`Showing stats for ${lbl.textContent}`,'info','fa-regular fa-calendar');
      break;
    }

    case 'notify-toast':
      showToast('You have 3 new platform alerts','info','fa-regular fa-bell');
      break;

    case 'profile-follow':
      el.textContent = el.textContent.trim()==='Follow' ? 'Following' : 'Follow';
      el.classList.toggle('btn-live');
      showToast(el.textContent==='Following' ? "You're now following Aroob Gamer" : 'Unfollowed Aroob Gamer','info','fa-solid fa-user');
      break;

    case 'message-soon':
      showToast('Direct messaging coming soon','info','fa-regular fa-comment-dots');
      break;
  }
});

function spawnHeart(el){
  const player = document.getElementById('playerEl');
  if(!player) return;
  const h = document.createElement('div');
  h.className = 'heart-pop';
  h.textContent = '❤️';
  const rect = el.getBoundingClientRect();
  const pRect = player.getBoundingClientRect();
  h.style.left = (rect.left - pRect.left) + 'px';
  h.style.top = (rect.top - pRect.top) + 'px';
  player.appendChild(h);
  setTimeout(()=>h.remove(), 1000);
}

/* ================================================================
   NOTIFICATIONS BELL (topbar)
================================================================ */
document.getElementById('notifBtn').addEventListener('click', ()=>{
  document.getElementById('notifDot').style.display = 'none';
  showToast('You have 3 new notifications','info','fa-regular fa-bell');
});

/* ================================================================
   LIVE CHAT — sending messages
================================================================ */
function sendChatMessage(){
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text) return;
  const list = document.getElementById('chat-list');
  const div = document.createElement('div');
  div.className = 'chat-msg';
  const now = new Date();
  const tm = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  div.innerHTML = `<img src="https://i.pravatar.cc/60?img=47"><div><span class="nm">You</span><span class="tm">${tm}</span><div>${text.replace(/</g,'&lt;')}</div></div>`;
  list.appendChild(div);
  list.scrollTop = list.scrollHeight;
  input.value = '';
}
document.getElementById('chatInput').addEventListener('keydown', (e)=>{
  if(e.key === 'Enter') sendChatMessage();
});

/* ================================================================
   GIFT MODAL
================================================================ */
const giftOptions = [
  {em:'🌹', n:'Rose', cost:10},
  {em:'💎', n:'Diamond', cost:500},
  {em:'🚀', n:'Rocket', cost:1000},
  {em:'👑', n:'Crown', cost:2000},
  {em:'🎁', n:'Gift Box', cost:150},
  {em:'🔥', n:'Fire', cost:50},
];
let coinBalance = 12550;
function openGiftModal(){
  const grid = document.getElementById('giftGrid');
  grid.innerHTML = giftOptions.map((g,i)=>`
    <div class="gift-opt" data-i="${i}">
      <span class="em">${g.em}</span><span class="nm">${g.n}</span><span class="cost"><i class="fa-solid fa-coins" style="color:#FDE68A"></i> ${g.cost}</span>
    </div>`).join('');
  grid.querySelectorAll('.gift-opt').forEach(opt=>{
    opt.addEventListener('click', ()=> sendGift(giftOptions[opt.dataset.i]));
  });
  document.getElementById('giftModalOverlay').style.display = 'flex';
}
function closeGiftModal(){ document.getElementById('giftModalOverlay').style.display = 'none'; }
document.getElementById('giftModalClose').addEventListener('click', closeGiftModal);
document.getElementById('giftModalOverlay').addEventListener('click', (e)=>{
  if(e.target.id === 'giftModalOverlay') closeGiftModal();
});
function sendGift(g){
  if(coinBalance < g.cost){
    showToast("Not enough coins — visit Buy Coins to top up",'error','fa-solid fa-triangle-exclamation');
    return;
  }
  coinBalance -= g.cost;
  updateCoinBalance();
  closeGiftModal();
  showToast(`Sent ${g.n} ${g.em} for ${g.cost} coins!`,'success','fa-solid fa-gift');
  const list = document.getElementById('chat-list');
  if(list){
    const div = document.createElement('div');
    div.className = 'chat-msg';
    div.innerHTML = `<img src="https://i.pravatar.cc/60?img=47"><div><span class="nm">You</span><div class="gift-line">${g.em} Sent ${g.n}</div></div>`;
    list.appendChild(div);
    list.scrollTop = list.scrollHeight;
  }
}
function updateCoinBalance(){
  document.getElementById('coinBalance').textContent = coinBalance.toLocaleString();
}

/* ================================================================
   BUY COINS — Pay button
================================================================ */
function processPayment(btn){
  const sel = pkgs.find(p=>p.sel) || pkgs[0];
  const amount = parseInt(sel.amt.replace(/[^0-9]/g,''), 10) || 0;
  const original = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
  btn.disabled = true;
  setTimeout(()=>{
    coinBalance += amount;
    updateCoinBalance();
    btn.innerHTML = original;
    btn.disabled = false;
    showToast(`Payment successful! ${sel.amt} added to your wallet`,'success','fa-solid fa-circle-check');
    goTo('wallet');
  }, 1400);
}

/* ================================================================
   GO LIVE — real camera access, self view appears on screen (PiP)
================================================================ */
let localStream = null;
let isLive = false;

async function startGoLive(){
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
    showToast('Your browser does not support camera access','error','fa-solid fa-triangle-exclamation');
    return;
  }
  try{
    localStream = await navigator.mediaDevices.getUserMedia({ video:true, audio:true });
  } catch(err){
    if(err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError'){
      showToast('Camera access denied. Please allow camera & mic permissions in your browser settings, then try Go Live again.','error','fa-solid fa-camera');
    } else if(err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError'){
      showToast('No camera or microphone was found on this device.','error','fa-solid fa-camera');
    } else if(err.name === 'NotReadableError'){
      showToast('Your camera is already in use by another app.','error','fa-solid fa-camera');
    } else {
      showToast('Could not access camera: '+err.message,'error','fa-solid fa-camera');
    }
    return;
  }

  isLive = true;

  // Show the local camera inside the main Live Stream player
  const localVideo = document.getElementById('localVideo');
  localVideo.srcObject = localStream;
  localVideo.style.display = 'block';
  document.getElementById('liveTitle').textContent = 'You are Live';
  document.getElementById('liveSubtitle').textContent = 'Broadcasting from your camera';
  document.getElementById('streamerChipImg').src = 'https://i.pravatar.cc/100?img=47';
  document.getElementById('streamerChipName').textContent = 'You';
  document.getElementById('streamerChipFollowers').textContent = '0 watching';
  document.getElementById('liveFollowChip').style.display = 'none';
  document.getElementById('giftFloat').style.display = 'none';
  document.getElementById('floatingHearts').style.display = 'none';

  // Self-view Picture-in-Picture: keeps YOUR camera visible on screen
  // across every screen of the app — this is how you "appear on screen"
  // the same way other streamers do while you browse elsewhere.
  const pip = document.getElementById('selfPip');
  const pipVideo = document.getElementById('selfPipVideo');
  pipVideo.srcObject = localStream;
  pip.style.display = 'block';

  const goLiveBtn = document.getElementById('goLiveBtn');
  goLiveBtn.innerHTML = '<i class="fa-solid fa-stop"></i> End Live';
  goLiveBtn.style.background = 'var(--bg-3)';

  goTo('live');
  showToast("You're live! Your camera is now visible on screen.",'success','fa-solid fa-video');
}

function endGoLive(){
  if(localStream){
    localStream.getTracks().forEach(tr=>tr.stop());
    localStream = null;
  }
  isLive = false;

  const localVideo = document.getElementById('localVideo');
  localVideo.style.display = 'none';
  localVideo.srcObject = null;
  document.getElementById('liveTitle').textContent = 'Live Stream';
  document.getElementById('liveSubtitle').textContent = 'Aroob Gamer • Gaming • Streaming now';
  document.getElementById('streamerChipImg').src = 'https://i.pravatar.cc/100?img=47';
  document.getElementById('streamerChipName').textContent = 'Aroob Gamer';
  document.getElementById('streamerChipFollowers').textContent = '125K Followers';
  document.getElementById('liveFollowChip').style.display = '';
  document.getElementById('giftFloat').style.display = '';
  document.getElementById('floatingHearts').style.display = '';

  document.getElementById('selfPip').style.display = 'none';

  const goLiveBtn = document.getElementById('goLiveBtn');
  goLiveBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Go Live';
  goLiveBtn.style.background = '';

  showToast('Your live stream has ended','info','fa-solid fa-stop');
}

document.getElementById('goLiveBtn').addEventListener('click', ()=>{
  if(isLive) endGoLive(); else startGoLive();
});
document.getElementById('pipEndBtn').addEventListener('click', endGoLive);

document.getElementById('pipMicBtn').addEventListener('click', (e)=>{
  if(!localStream) return;
  const track = localStream.getAudioTracks()[0];
  if(!track) return;
  track.enabled = !track.enabled;
  e.currentTarget.classList.toggle('muted', !track.enabled);
  e.currentTarget.innerHTML = track.enabled ? '<i class="fa-solid fa-microphone"></i>' : '<i class="fa-solid fa-microphone-slash"></i>';
});
document.getElementById('pipCamBtn').addEventListener('click', (e)=>{
  if(!localStream) return;
  const track = localStream.getVideoTracks()[0];
  if(!track) return;
  track.enabled = !track.enabled;
  e.currentTarget.classList.toggle('muted', !track.enabled);
  e.currentTarget.innerHTML = track.enabled ? '<i class="fa-solid fa-video"></i>' : '<i class="fa-solid fa-video-slash"></i>';
});
