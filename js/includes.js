var context = {};
const navbar = () => {
  return `
    <nav class="navbar">
      <a href="https://mtlynch3.github.io/savethewhales" class="logo">
        <img src="http://www.pngmart.com/files/7/Killer-Whale-PNG-File.png" alt="savethewhales">
      </a>
      <ul class="nav-links">
        <li class="nav-item"><a href="#">Home</a></li>
        <li class="nav-item"><a href="#">About us</a></li>
        <li class="nav-item"><a href="#">Donate</a></li>
      </ul>
    </nav>
`;
};
context["navbar"] = navbar;

const footer = () => {
  return `
    <nav class="navbar">
      <a href="https://mtlynch3.github.io/savethewhales" class="logo">
        <img src="http://www.pngmart.com/files/7/Killer-Whale-PNG-File.png" alt="savethewhales">
      </a>
      <ul class="nav-links">
        <li class="nav-item"><a href="#">Home</a></li>
        <li class="nav-item"><a href="#">About us</a></li>
        <li class="nav-item"><a href="#">Donate</a></li>
      </ul>
    </footer>
`;
};

const set_includes = elem => {
  const e = document.getElementsByTagName(elem);
  e[0].innerHTML = context["navbar"]();
};

const includes = () => {
  const elems = ["navbar"];
  elems.forEach(elem => set_includes(elem));
};

includes();
