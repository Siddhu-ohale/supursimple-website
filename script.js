        // Hero image animation
        window.addEventListener('scroll', function () {
            const heroImage = document.querySelector('#home img');
            const scrollPosition = window.scrollY;
            heroImage.style.transform = 'scale(' + (1 - scrollPosition / 1500) + ')';
        });


        // <!-- JavaScript for Scroll Animation -->

        document.addEventListener('DOMContentLoaded', function () {
            const circles = document.querySelectorAll('.circle');
            const options = {
                threshold: 0.5
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const circle = entry.target;
                        const percent = circle.getAttribute('data-percent');
                        circle.style.setProperty('--percent', percent);
                        const underline = circle.querySelector('.underline');
                        underline.style.transform = `rotate(${percent * 3.6}deg)`;
                        observer.unobserve(circle);
                    }
                });
            }, options);

            circles.forEach(circle => {
                observer.observe(circle);
            });
        });

        // Fotter

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const sidebarPosition = sidebar.style.right === '0px' ? '-300px' : '0px';
            sidebar.style.right = sidebarPosition;
            sidebar.style.display = sidebarPosition === '0px' ? 'block' : 'none';
        }
