import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <>
      <ul
        class="nav nav-pills"
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          marginLeft: "35%",

          top: "50%",
        }}
      >
        <li class="nav-item dropdown bg-transparent">
          <a
            class="nav-link dropdown-toggle text-dark "
            style={{ fontWeight: "bold" }}
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            sociam medias
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#" style={{ fontWeight: "bold" }}>
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#" style={{ fontWeight: "bold" }}>
                Something else here
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#" style={{ fontWeight: "bold" }}>
                Separated link
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle text-dark"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            style={{ fontWeight: "bold" }}
          >
            diploma
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle text-dark"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            style={{ fontWeight: "bold" }}
          >
            product
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle text-dark"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            style={{ fontWeight: "bold" }}
          >
            know more
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
