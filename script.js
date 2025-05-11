document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.classList.remove('active');
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Menu Tab Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const menuContainer = document.querySelector('.menu-items-container');

    // Menu data
    const menuItems = {
        starters: [
            {
                name: 'Samosa',
                description: 'Crispy pastry filled with spiced potatoes and peas',
                price: '$4.99',
                image: 'samosa.jpeg'
            },
            {
                name: ' Tikka',
                description: 'Marinated chicken pieces grilled in tandoor',
                price: '$8.99',
                image: 'tikka.jpeg'
            },
            {
                name: 'Paneer Pakora',
                description: 'Cottage cheese fritters with spices',
                price: '$6.99',
                image: 'paneer-pakoda.jpeg'
            },
            {
                name: 'Aloo Tikki',
                description: 'Spiced potato patties served with chutneys',
                price: '$5.99',
                image: 'allo-tikki.jpg'
            }
        ],
        mains: [
            {
                name: 'Tandoori Butter ',
                description: 'Tandoori chicken in creamy tomato sauce',
                price: '$14.99',
                image: 'tandoori butter.jpg'
            },
            {
                name: 'Veg Biryani',
                description: 'Fragrant rice with chicken and spices',
                price: '$13.99',
                image: 'hyderabadi Veg Biryani.jpeg'
            },
            {
                name: 'Palak Paneer',
                description: 'Cottage cheese in spinach gravy',
                price: '$12.99',
                image: 'palaak paneer.jpeg'
            },
            {
                name: 'Dal Makhani',
                description: 'Creamy black lentils slow cooked',
                price: '$11.99',
                image: 'dal makhni.jpg'
            }
        ],
        breads: [
            {
                name: 'Garlic Naan',
                description: 'Leavened bread with garlic butter',
                price: '$3.99',
                image: 'garlic naan.jpeg'
            },
            {
                name: 'Roti',
                description: 'Whole wheat flatbread',
                price: '$2.99',
                image: 'roti.jpg'
            },
            {
                name: 'Paratha',
                description: 'Layered flatbread',
                price: '$3.49',
                image: 'paratha.jpg'
            },
            {
                name: 'Puri',
                description: 'Deep fried puffed bread',
                price: '$3.99',
                image: 'puri.avif'
            }
        ],
        desserts: [
            {
                name: 'Gulab Jamun',
                description: 'Milk solids dumplings in sugar syrup',
                price: '$5.99',
                image: 'gulab jamun.avif'
            },
            {
                name: 'Rasmalai',
                description: 'Cottage cheese patties in sweetened milk',
                price: '$6.99',
                image: 'rasmalai.jpeg'
            },
            {
                name: 'Kheer',
                description: 'Rice pudding with nuts',
                price: '$4.99',
                image: 'kheer.jpg'
            },
            {
                name: 'Gajar Halwa',
                description: 'Carrot pudding with nuts',
                price: '$5.99',
                image: 'gajar halua.jpg'
            }
        ]
    };

    // Function to load menu items
    function loadMenuItems(category) {
        menuContainer.innerHTML = '';
        
        menuItems[category].forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p class="item-price">${item.price}</p>
                </div>
            `;
            menuContainer.appendChild(menuItem);
        });
    }

    // Initialize with starters menu
    loadMenuItems('starters');

    // Tab click event
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Load corresponding menu
            const category = this.getAttribute('data-category');
            loadMenuItems(category);
        });
    });

    // Form submission
    const reservationForm = document.getElementById('reservation-form');
    
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const date = this.querySelector('input[type="date"]').value;
        
        // Show confirmation (in a real app, you would send this to a server)
        alert(`Thank you, ${name}! Your reservation for ${date} has been received. We'll contact you shortly to confirm.`);
        
        // Reset form
        this.reset();
    });

    // Scroll reveal animation
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        reset: true
    });

    scrollReveal.reveal('.dish-card, .menu-item, .about-content, .about-image, .contact-info, .contact-form', {
        interval: 200
    });
});