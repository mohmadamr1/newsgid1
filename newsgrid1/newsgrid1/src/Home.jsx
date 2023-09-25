
function Home() {
  return (
    <>
   <div>
      <header className="hero blog">
        <div id="navbar" className="navbar top">
          <h1 className="logo">
            <span className="text-primary">
              <i className="fas fa-book-open"></i> Edge
            </span>
            Ledger
          </h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Cases</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="content">
          <h1>Blog</h1>
        </div>
      </header>

      <main>
        <article className="flex-columns">
          <div className="row">
            <div className="column">
              <div className="column-1">
                <img src="images/blog/blog1.jpg" alt="" />
              </div>
            </div>
            <div className="column">
              <div className="column-2 bg-light">
                <h2>Blog Post One</h2>
                <p className="meta">
                  <i className="fas fa-user"></i> Posted by
                  <strong>John Doe</strong> | April 19 2020
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                  illum, animi earum ea amet sequi reiciendis sit corporis sunt
                  iusto cupiditate odio maxime adipisci cumque eligendi nemo
                  dolore id itaque?
                </p>
                <a href="#" className="btn btn-dark">
                  <i className="fas fa-chevron"></i>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="flex-columns flex-reverse">
          <div className="row">
            <div className="column">
              <div className="column-1">
                <img src="images/blog/blog2.jpg" alt="" />
              </div>
            </div>
            <div className="column">
              <div className="column-2 bg-dark">
                <h2>Blog Post Two</h2>
                <p className="meta">
                  <i className="fas fa-user"></i> Posted by
                  <strong>Jane Doe</strong> | April 21 2020
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                  illum, animi earum ea amet sequi reiciendis sit corporis sunt
                  iusto cupiditate odio maxime adipisci cumque eligendi nemo
                  dolore id itaque?
                </p>
                <a href="#" className="btn btn-light">
                  <i className="fas fa-chevron"></i>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="flex-columns">
          <div className="row">
            <div className="column">
              <div className="column-1">
                <img src="images/blog/blog3.jpg" alt="" />
              </div>
            </div>
            <div className="column">
              <div className="column-2 bg-light">
                <h2>Blog Post Three</h2>
                <p className="meta">
                  <i className="fas fa-user"></i> Posted by
                  <strong>John Doe</strong> | April 23 2020
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                  illum, animi earum ea amet sequi reiciendis sit corporis sunt
                  iusto cupiditate odio maxime adipisci cumque eligendi nemo
                  dolore id itaque?
                </p>
                <a href="#" className="btn btn-dark">
                  <i className="fas fa-chevron"></i>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="footer bg-dark">
        <div className="social">
          <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
          <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
          <a href="#"><i className="fab fa-youtube fa-2x"></i></a>
          <a href="#"><i className="fab fa-linkedin fa-2x"></i></a>
        </div>
        <p>Copyright &copy; 2020 - EdgeLedger</p>
      </footer>
    </div>
    </>
  )
}

export default Home