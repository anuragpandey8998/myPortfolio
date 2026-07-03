  // Typing effect in terminal
  const typedEl = document.getElementById('typed-line');
  const fullText = "Full-Stack Developer & AI Enthusiast, based in Pune, India.";
  let i = 0;
  function type(){
    if(i <= fullText.length){
      typedEl.innerHTML = fullText.slice(0,i) + '<span class="cursor"></span>';
      i++;
      setTimeout(type, 32);
    } else {
      typedEl.innerHTML = fullText + '<span class="cursor"></span>';
    }
  }
  type();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  reveals.forEach(r => io.observe(r));
