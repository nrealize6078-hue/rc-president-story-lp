/* 表示の演出（フェード・旅のライン）と固定バー。派手な動きは使わない */
(function () {
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ふわっと表示
  var fades = document.querySelectorAll('.fade');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    fades.forEach(function (el) { io.observe(el); });
  } else {
    fades.forEach(function (el) { el.classList.add('is-in'); });
  }

  // 人生の旅：スクロールに合わせて縦ラインが進む
  var line = document.querySelector('.story-line');
  function progress() {
    if (!line) return;
    var r = line.getBoundingClientRect(), vh = window.innerHeight;
    var p = (vh * 0.6 - r.top) / r.height;
    line.style.setProperty('--progress', Math.max(0, Math.min(1, p)).toFixed(3));
  }

  // 固定バー：ファーストビューを抜けたら出し、最後のCTAが見えたら隠す
  var bar = document.getElementById('ctabar');
  var fv = document.querySelector('.fv');
  var fin = document.getElementById('final');
  function barState() {
    if (!bar || !fv) return;
    var pastFv = fv.getBoundingClientRect().bottom < 0;
    var atFinal = fin && fin.getBoundingClientRect().top < window.innerHeight * 0.85;
    var show = pastFv && !atFinal;
    if (bar.hidden === show) {
      bar.hidden = !show;
      document.documentElement.style.setProperty('--bar-h', show ? bar.offsetHeight + 'px' : '0px');
    }
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () { progress(); barState(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', function () { progress(); barState(); });
  progress(); barState();

  // PRESIDENT JOURNEY の写真（assets/pj-desk.jpg）が未配置なら、手紙の挿し絵で代用
  var pj = document.querySelector('.pj-visual');
  if (pj) {
    var test = new Image();
    test.onerror = function () { pj.classList.add('is-fallback'); };
    test.src = 'assets/pj-desk.jpg';
  }
})();
