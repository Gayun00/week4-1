const tagA = document.querySelectorAll('.nav__a');

tagA.forEach((tag) => {
  tag.addEventListener('click', (e) => {
    console.log(e.target);
    const className = e.target.classList[1];
    if (className === 'hrefMedia') {
      window.scrollTo(0, 0);
    } else if (className === 'hrefclass') {
      window.scrollTo(0, 410);
    }
  });
});
