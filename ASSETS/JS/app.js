/* Media queries for responsiveness */
@media screen and (max-width: 720px) {
    nav {
      padding: 1.5rem 1rem;
    }
    nav ul {
      position: fixed;
      background-color: var(--bg-color);
      flex-direction: column;
      top: 86px;
      left: 10%;
      width: 80%;
      text-align: center;
      transform: translateX(120%);
      transition: transform 0.5s ease-in;
    }
  
  
    nav ul li {
      margin: 8px;
    }
  
  
    .burger-menu {
      display: block;
    }
  
  
    nav ul.show {
      transform: translateX(0);
    }
  
  
    .hero {
      margin-top: -4rem;
      flex-direction: column;
      gap: 0;
    }
  
  
    .hero img {
      height: 37.5rem;
      width: 30rem;
    }
  
  
    .bio {
      margin-top: -7rem;
      width: 20.5rem;
    }
  
  
    .more-about {
      margin-top: 2rem;
      padding: 1rem 3.5rem;
    }
  
  
    .more-about h2 {
      text-align: center;
    }
  
  
    .more-about p {
      text-align: justify;
    }
  
  
    .icon {
      width: 5.875rem;
      height: 5.25rem;
    }
  
  
    .projects-container {
      flex-direction: column;
    }
  
  
    .project-container {
      width: 20.875rem;
    }
  
  
  }
  
  
  @media screen and (max-width: 420px) {
    .hero img {
      height: 37.5rem;
      width: 23rem;
    }
  
  
    .bio {
      width: 18.3rem;
    }
  
  
    .project-container {
      width: 17.875rem;
    }
  
  
  }
  
  