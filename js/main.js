
document.addEventListener('DOMContentLoaded',()=>{
  const lb=document.getElementById('lightbox');
  const lbImg=document.getElementById('lb-img');
  const close=()=>{lb.classList.remove('active'); document.body.style.overflow='';}
  document.getElementById('lb-close').addEventListener('click',close);
  lb.addEventListener('click',(e)=>{ if(e.target===lb) close(); });
  document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') close(); });
  document.querySelectorAll('.photo img').forEach(img=>{
    img.addEventListener('click',()=>{
      lbImg.src=img.dataset.full||img.src;
      lb.classList.add('active');
      document.body.style.overflow='hidden';
    });
  });
});
