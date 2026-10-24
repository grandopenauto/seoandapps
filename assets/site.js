'use strict';
(() => {
  const btn=document.querySelector('[data-nav-toggle]');
  const nav=document.querySelector('[data-nav]');
  const close=()=>{if(!btn||!nav)return;nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Open menu');};
  if(btn&&nav){
    btn.addEventListener('click',()=>{const open=btn.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);btn.setAttribute('aria-expanded',String(open));btn.setAttribute('aria-label',open?'Close menu':'Open menu');});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
    window.addEventListener('resize',()=>{if(window.innerWidth>780)close();});
  }
  const goals={
    visibility:{number:'01 / DISCOVERABILITY',heading:'Start with the searches your customers already make.',
      copy:'Review how people find you, which pages answer their questions, and what happens when they land. Fix the clearest visibility gaps before expanding.',
      checks:['Search intent & useful pages','Local listing accuracy','Measurement and crawlability'],link:'/seo/',cta:'Explore SEO services'},
    conversion:{number:'02 / EXPERIENCE',heading:'Make your next step impossible to miss.',
      copy:'Simplify the message, remove confusing clicks, strengthen credibility, and make it easy to contact, request, or book. Start by checking the existing experience.',
      checks:['Clear value proposition','Fast, mobile-friendly pages','Useful calls to action'],link:'/apps/',cta:'Explore websites & apps'},
    app:{number:'03 / DIGITAL PRODUCT',heading:'Build the smallest useful experience first.',
      copy:'Clarify the user, the job, and the outcome. A focused mobile-friendly web app or portal may validate the idea before committing to a larger native-app investment.',
      checks:['Core customer or team task','Minimum viable workflow','Hosting, security & ownership'],link:'/apps/',cta:'Explore app development'},
    followthrough:{number:'04 / BUSINESS OPERATIONS',heading:'Connect the lead to the actual work.',
      copy:'Identify where handoffs break. Define an owner, trigger, approval boundary, and proof of completion so the right activity can move through a repeatable operating process.',
      checks:['Lead or task ownership','Permissioned workflow steps','Recorded result and exceptions'],link:'/connected-systems/',cta:'Explore connected systems'}
  };
  const items=[...document.querySelectorAll('[data-goal]')];
  const $=id=>document.getElementById(id);
  items.forEach(b=>b.addEventListener('click',()=>{
    const x=goals[b.dataset.goal];if(!x||!$('rec-heading'))return;
    $('rec-number').textContent=x.number;
    $('rec-heading').textContent=x.heading;
    $('rec-copy').textContent=x.copy;
    const checks=$('rec-checks');checks.replaceChildren();
    x.checks.forEach(s=>{const el=document.createElement('div');el.textContent=s;checks.append(el);});
    const link=$('rec-link');link.href=x.link;link.replaceChildren();
    link.append(document.createTextNode(x.cta+' '));
    const icon=document.createElement('span');icon.setAttribute('aria-hidden','true');icon.textContent='↗';link.append(icon);
    items.forEach(el=>{const active=el===b;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));});
  }));
  document.querySelectorAll('[data-year]').forEach(x=>{x.textContent=String(new Date().getFullYear());});
})();