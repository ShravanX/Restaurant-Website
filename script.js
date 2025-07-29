
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('.fade-slide').forEach(elem => {
    observer.observe(elem);
  });

  document.querySelectorAll('.fade-slide1').forEach(elem => {
    observer.observe(elem);
  });


  function showSidebar(){
    const sidebar = document.querySelector('.sidebar2')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar2')
    sidebar.style.display = 'none'
}

