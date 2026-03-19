// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ======================
// DATA (easily replaceable)
// ======================

// Faculty data
const facultyData = [
    {
        name: "Prof. Adebayo O. Salami",
        title: "Professor & Head of Department",
        expertise: "Robotics, Control Systems",
        image: "https://via.placeholder.com/300x250/4B0082/ffffff?text=Prof.+Adebayo"
    },
    {
        name: "Dr. Fatima Bello",
        title: "Senior Lecturer",
        expertise: "Embedded Systems, IoT",
        image: "https://via.placeholder.com/300x250/4B0082/ffffff?text=Dr.+Fatima"
    },
    {
        name: "Dr. Chukwudi Eze",
        title: "Lecturer I",
        expertise: "Mechatronic Design, Automation",
        image: "https://via.placeholder.com/300x250/4B0082/ffffff?text=Dr.+Chukwudi"
    },
    {
        name: "Engr. Michael Okafor",
        title: "Lecturer II",
        expertise: "Artificial Intelligence, Machine Learning",
        image: "https://via.placeholder.com/300x250/4B0082/ffffff?text=Engr.+Michael"
    }
];

// Events data
const eventsData = [
    { title: "Robotics Workshop", date: "2025-04-15", description: "Hands-on workshop on building line-following robots." },
    { title: "Departmental Seminar", date: "2025-04-20", description: "Prof. Salami presents on 'Future of Mechatronics in Africa'." },
    { title: "Career Fair", date: "2025-05-01", description: "Meet with industry recruiters from top companies." },
    { title: "PhD Defense: John Doe", date: "2025-04-25", description: "Thesis: 'Adaptive Control for Quadruped Robots'." },
    { title: "Alumni Meetup", date: "2025-05-10", description: "Networking event with alumni in industry." }
];

// Research projects data
const researchProjectsData = [
    { title: "Autonomous Agricultural Rover", researchers: "Dr. Bello, Dr. Eze", description: "Developing a solar-powered rover for crop monitoring." },
    { title: "Smart Grid IoT Sensors", researchers: "Prof. Salami, Engr. Okafor", description: "Low-cost sensors for power distribution monitoring." }
];

// Student projects data
const studentProjectsData = [
    { title: "Gesture-Controlled Robotic Arm", students: "Aliyu Musa, Fatima Usman", supervisor: "Dr. Bello", abstract: "A robotic arm that mimics hand gestures using flex sensors and Arduino.", image: "https://images.unsplash.com/photo-1581092335871-4c4ff7f5b2e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { title: "Smart Solar Tracking System", students: "Samuel Ade, Peter Okonkwo", supervisor: "Dr. Eze", abstract: "Dual-axis solar tracker with maximum power point tracking.", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { title: "Automated Parking System", students: "Blessing Eze, Chinedu Nnamdi", supervisor: "Prof. Salami", abstract: "IoT-based parking management with slot detection and mobile app.", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
];

// ======================
// POPULATE FACULTY PAGE
// ======================
if (document.getElementById('faculty-container')) {
    const container = document.getElementById('faculty-container');
    facultyData.forEach(faculty => {
        const card = document.createElement('div');
        card.className = 'faculty-card';
        card.innerHTML = `
            <img src="${faculty.image}" alt="${faculty.name}">
            <h3>${faculty.name}</h3>
            <p class="title">${faculty.title}</p>
            <p class="expertise"><strong>Expertise:</strong> ${faculty.expertise}</p>
        `;
        container.appendChild(card);
    });
}

// ======================
// UPCOMING EVENTS (homepage)
// ======================
function displayUpcomingEvents(containerId, limit) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Sort events by date
    const sorted = [...eventsData].sort((a,b) => new Date(a.date) - new Date(b.date));
    const now = new Date();
    const upcoming = sorted.filter(e => new Date(e.date) >= now).slice(0, limit || sorted.length);

    container.innerHTML = '';
    upcoming.forEach(event => {
        const dateObj = new Date(event.date);
        const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const div = document.createElement('div');
        div.className = 'event-item';
        div.innerHTML = `
            <span class="event-title">${event.title}</span>
            <span class="event-date">${formattedDate}</span>
        `;
        container.appendChild(div);
    });
}

displayUpcomingEvents('upcoming-events-list', 3);

// ======================
// FEATURED PROJECTS (homepage)
// ======================
if (document.getElementById('featured-projects-grid')) {
    const container = document.getElementById('featured-projects-grid');
    // Show first 3 projects
    studentProjectsData.slice(0, 3).forEach(proj => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <i class="fas fa-project-diagram fa-3x" style="color: var(--secondary);"></i>
            <h3>${proj.title}</h3>
            <p>${proj.abstract.substring(0, 80)}...</p>
            <p><strong>Students:</strong> ${proj.students}</p>
        `;
        container.appendChild(card);
    });
}

// ======================
// STATS COUNTER ANIMATION
// ======================
function animateStats() {
    const stats = [
        { element: document.getElementById('statStudents'), target: 350 },
        { element: document.getElementById('statFaculty'), target: 25 },
        { element: document.getElementById('statProjects'), target: 45 },
        { element: document.getElementById('statPublications'), target: 120 }
    ];

    const duration = 2000; // 2 seconds
    const frameRate = 60;
    const totalFrames = duration / (1000 / frameRate);
    let frame = 0;

    const counters = stats.map(stat => ({
        current: 0,
        target: stat.target,
        element: stat.element,
        increment: stat.target / totalFrames
    }));

    const timer = setInterval(() => {
        frame++;
        let allDone = true;
        counters.forEach(counter => {
            if (counter.current < counter.target) {
                allDone = false;
                counter.current = Math.min(counter.current + counter.increment, counter.target);
                if (counter.element) {
                    counter.element.textContent = Math.round(counter.current);
                }
            }
        });
        if (allDone) {
            clearInterval(timer);
        }
    }, 1000 / frameRate);
}

// Trigger stats animation when stats section is in view
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(statsSection);
}

// ======================
// CALENDAR (news-events page)
// ======================
if (document.getElementById('calendar-container')) {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthYearSpan = document.getElementById('current-month-year');
    const prevBtn = document.getElementById('prev-month');
    const nextBtn = document.getElementById('next-month');
    const calendarContainer = document.getElementById('calendar-container');
    const fullEventList = document.getElementById('full-event-list');

    function renderCalendar() {
        // Update month-year display
        monthYearSpan.textContent = `${monthNames[currentMonth]} ${currentYear}`;

        // Get first day of month (0-6, Sunday=0)
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Create calendar HTML
        let calendarHtml = '<div class="calendar-weekdays">';
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        weekdays.forEach(day => calendarHtml += `<div>${day}</div>`);
        calendarHtml += '</div><div class="calendar-days">';

        // Empty cells before first day
        for (let i = 0; i < firstDay; i++) {
            calendarHtml += '<div class="calendar-day empty"></div>';
        }

        // Days of month
        for (let d = 1; d <= daysInMonth; d++) {
            const dateStr = `${currentYear}-${String(currentMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
            const hasEvent = eventsData.some(e => e.date === dateStr);
            calendarHtml += `<div class="calendar-day ${hasEvent ? 'has-event' : ''}" data-date="${dateStr}">${d}${hasEvent ? '<span class="event-indicator"></span>' : ''}</div>`;
        }

        calendarHtml += '</div>';
        calendarContainer.innerHTML = calendarHtml;

        // Add click listeners to days with events
        document.querySelectorAll('.calendar-day.has-event').forEach(day => {
            day.addEventListener('click', () => {
                const date = day.dataset.date;
                const eventsOnDate = eventsData.filter(e => e.date === date);
                if (eventsOnDate.length > 0) {
                    alert(eventsOnDate.map(e => `${e.title}: ${e.description}`).join('\n'));
                }
            });
        });

        // Update full event list (all upcoming)
        displayFullEventList();
    }

    function displayFullEventList() {
        if (!fullEventList) return;
        const sorted = [...eventsData].sort((a,b) => new Date(a.date) - new Date(b.date));
        const now = new Date();
        const upcoming = sorted.filter(e => new Date(e.date) >= now);

        fullEventList.innerHTML = '';
        upcoming.forEach(event => {
            const dateObj = new Date(event.date);
            const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
            const div = document.createElement('div');
            div.className = 'event-item';
            div.innerHTML = `
                <div>
                    <strong>${event.title}</strong><br>
                    <small>${event.description}</small>
                </div>
                <span class="event-date">${formattedDate}</span>
            `;
            fullEventList.appendChild(div);
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar();
        });

        nextBtn.addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar();
        });
    }

    renderCalendar();
}

// ======================
// RESEARCH PROJECTS (research page)
// ======================
if (document.getElementById('research-project-list')) {
    const container = document.getElementById('research-project-list');
    researchProjectsData.forEach(proj => {
        const div = document.createElement('div');
        div.className = 'project-item';
        div.innerHTML = `
            <h3>${proj.title}</h3>
            <p><strong>Researchers:</strong> ${proj.researchers}</p>
            <p>${proj.description}</p>
        `;
        container.appendChild(div);
    });
}

// ======================
// STUDENT PROJECT SHOWCASE (projects page)
// ======================
if (document.getElementById('project-showcase-container')) {
    const container = document.getElementById('project-showcase-container');
    studentProjectsData.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${proj.image}" alt="${proj.title}">
            <div class="project-info">
                <h3>${proj.title}</h3>
                <p class="students">Students: ${proj.students}</p>
                <p class="supervisor">Supervisor: ${proj.supervisor}</p>
                <p>${proj.abstract}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// ======================
// CONTACT FORM HANDLING
// ======================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const level = document.getElementById('level').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const feedback = document.getElementById('form-feedback');
        feedback.innerHTML = '<p style="color: green; background: #d4edda; padding: 10px; border-radius: 4px;">Thank you for your message. We will get back to you soon.</p>';
        contactForm.reset();
    });
}

// ======================
// BACK TO TOP BUTTON
// ======================
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ======================
// INITIALIZE AOS (Animate on Scroll)
// ======================
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});