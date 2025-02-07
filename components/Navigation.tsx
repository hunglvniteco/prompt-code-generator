<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navigation</title>
    <script src="https://unpkg.com(nextjs@latest)/next.min.js"></script>
    <script type="import.*"></script>
    <script type="module.exports = App">
        import { next } from 'next';
        import { default-root, defaultSearch } from 'next/navigation';
        
        window.addEventListener('DOMContentLoaded', function() {
            // Add dark mode toggle
            const canDark = document.createElement('div');
            canDark.className = 'dark-mode-toggle';
            canDark.innerHTML = '🌞';
            
            document.body.appendChild(canDark);
            document.addEventListener('click', (e) => e.stopPropagation());
            
            window.onload = function() {
                if (Math.random() < 0.5) { // Assign random opacity
                    canDark.style.opacity = '0.7';
                } else {
                    canDark.style.opacity = '1';
                }
            };
        });

        function Home() {
            return next({
                home: {
                    // Desktop view
                    options: [
                        {
                            title: "Profile",
                            content: "(1)",
                            icons: ["🏠"],
                            links: [{ label: "Home", icon: "home" }],
                            active: [0]
                        },
                        {
                            title: "Search",
                            content: "(2)",
                            icons: ["📱"],
                            links: [{ label: "Search", icon: "search" }],
                            active: [1]
                        },
                        {
                            title: "Messages",
                            content: "(3)",
                            icons: ["📧"],
                            links: [{ label: "Messages", icon: "message" }],
                            active: [2]
                        },
                        {
                            title: "Notes",
                            content: "(4)",
                            icons: ["✨"],
                            links: [{ label: "Notes", icon: "note" }],
                            active: [3]
                        },
                        {
                            title: "Bank account",
                            content: "(5)",
                            icons: ["=\"$"],
                            links: [{ label: "Account", icon: "account" }],
                            active: [4]
                        },
                    ],
                    // Mobile view
                    menu: [
                        {
                            isMenuOpen: true,
                            text: " Menu ",
                            opacity: 0.8,
                            cursor: "pointer",
                            hover: { scale: 1.2 }
                        },
                        {
                            title: "Profile",
                            content: "(1)",
                            icons: ["🏠"],
                            links: [{ label: "Home", icon: "home" }],
                            active: [0]
                        },
                        {
                            title: "Search",
                            content: "(2)",
                            icons: ["📱"],
                            links: [{ label: "Search", icon: "search" }],
                            active: [1]
                        },
                        {
                            title: "Messages",
                            content: "(3)",
                            icons: ["📧"],
                            links: [{ label: "Messages", icon: "message" }],
                            active: [2]
                        },
                        {
                            title: "Notes",
                            content: "(4)",
                            icons: ["✨"],
                            links: [{ label: "Notes", icon: "note" }],
                            active: [3]
                        },
                        {
                            title: "Bank account",
                            content: "(5)",
                            icons: ["=\"$"],
                            links: [{ label: "Account", icon: "account" }],
                            active: [4]
                        }
                    ],
                    transition: function(event, e) {
                        event.stopPropagation();
                    },
                    mobile: {
                        menu: [
                            { isMenuOpen: false, text: "", opacity: 1 }
                        ]
                    }
                },
                menu: {
                    // Menu toggle
                    active: [0],
                    cursor: "pointer",
                    trigger: (e) => e.preventDefault(),
                    hover: { scale: 1.2 }
                }
            },
            search: {
                ...home,
                items: {
                    sort: {
                        natural: {
                            fromLast: {}
                        }
                    }
                }
            },
            footer: [
                {
                    title: "Privacy",
                    text: "We use cookies and similar technologies to personalise your experience."
                }
            ]
        }

        // Server component
        let app;
        
        function initApp() {
            return new App();
        }

        document.addEventListener('DOMContentLoaded', () => {
            initApp();
        });
    </script>
</head>
<body>
    <nav id="next-next" class="dark-mode-toggle">
        <div class="menu"></div>
        <ul id="options"></ul>
    </nav>

    <main id="home"></main>

    <footer id="footer"></footer>
</body>
</html>