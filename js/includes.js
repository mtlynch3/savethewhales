// holds mappings of "fn_name" <-> fn
var context = {};

// injection for navbar
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

// injection for footer
const footer = () => {
  return `footer`;
};

context["footer"] = footer;

// sets html with the proper injection
const set_includes = elem => {
  const e = document.getElementById(elem);
  e.innerHTML = context[elem]();
};

// map set_includes onto the page's chosen elements
const includes = elems => {
  elems.forEach(elem => set_includes(elem));
};
