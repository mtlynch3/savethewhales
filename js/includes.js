// holds mappings of "fn_name" <-> fn
var context = {};

// injection for navbar
const navbar = () => {
  return `
    <nav class="navbar">
      <a href="index.html" class="logo">
        <img src="img/new_whale.png" alt="savethewhales">
      </a>
      <ul class="nav-links">
        <li class="nav-item"><a href="index.html">Home</a></li>
        <li class="nav-item"><a href="about.html">About us</a></li>
        <li class="nav-item"><a href="donate.html">Donate</a></li>
      </ul>
    </nav>
`;
};

context["navbar"] = navbar;

// injection for footer
const footer = () => {
  return `
    <footer class = "row">
      <p><i class="fas fa-water"></i></p>
      <div class = "box-1">
        <div class="social-footer-icons">
          <ul class="menu simple">
            <li><h3>Connect</h3></li>
            <br>
            <li><a href="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="https://www.instagram.com/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li><a href="https://twitter.com/?lang=en"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
      <div class = "box-2">
        <ul>
          <li><h3>Contact</h3></li>
          <br>
  <li>Phone: 831-899-9957</li>
  <li>Email: maris@savethewhales.org</li>
  <li>Mailing Address:
            Save the Whales
            1192 Waring St.
  Seaside, CA 93955</li>
        </ul>
      </div>
      <div class = "box-3">
        <form>
          <h3>Join our Email List</h3>

          <br>
          <input type="text"><br>
          <br>
          <input type="submit" value="Submit">
        </form>
      </div>
  
  
  </footer>
  `;
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
