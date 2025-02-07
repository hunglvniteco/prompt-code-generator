const app = request.env.app,
        navbarRef = app.request.pathParameter('navbar'),
        navItems = app.request.query,
        isMenuOpen = app.request.query.isMenuOpen,
        authState = app.request.query.authState

      return (
        <nav ref={navbarRef} className="main-container">
          {/* Navigation logo and menu items */}
          <div className="logo">Logo</div>
          {isMenuOpen && (
            <ul id="menu-nav" className="hidden" 
              ref={navItems?.key('menu-nav')}
                transitions smooth duration={1000} />
          )}
          <ul id="menu-nav">
            {!authState && isMenuOpen ? 'hamburger' : 'mobile' }
              style={{ backgroundColor: 'white' }}
            </ul>
          </div>

          {isMenuOpen && (
            <div className="nav-mobile" 
              ref={navItems?.key('nav-mobile')}
                transitions smooth duration={1000} minTime={500} />
          )}

          {/* Dropdown menus */}
          {isMenuOpen && navItems.query('menu-items').value}
        </nav>
      )}
    }
  },
  "app": {
    "defaultLayout": "horizontal",
    "hamburger": "on",
    "mobile": "off"
  },
  "use-each": ["dropdown"],
  "use-transitions": true
}