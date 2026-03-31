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
        name: "Engr Dr. Taliha Folorunsho (PhD)",
        title: "Professor & Head of Department",
        expertise: "Robotics, Control Systems & AI",
        image: "images/WhatsApp Image 2026-03-27 at 16.04.36.jpeg"
    },
    {
        name: "Engr Dr. Bala Jibrin ( MNSE)",
        title: "Exam Officer, 100 level Adviser",
        expertise: "Iot, Control Systems & AI",
        image: "images/WhatsApp Image 2026-03-30 at 16.50.53.jpeg"
    },
    {
        name: "Engr Justice Anunuso (R.Engr)",
        title: "Staff Adviser, 400 level Adviser",
        expertise: "Embedded Systems, Robotics",
        image: "images/WhatsApp Image 2026-03-27 at 16.09.16.jpeg"
    },
    {
        name: "Engr. KEHINDE BELLO",
        title: "Chief Academic Technologist/ Head of Mechatronics Laboratories.",
        expertise: "Mechatronics Design, IoT",
        image: "images/WhatsApp Image 2026-03-30 at 16.51.15.jpeg"
    },
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

// Student projects data (updated with real projects)
const studentProjectsData = [
    {
        title: "Accident Detection System with Vehicle-to-Infrastructure Communication",
        students: "Yusuf Abdullahi Olamilekan",
        supervisor: "Dr. T. A. Folorunso & Dr. J. A. Bala",
        funder: null,
        abstract: "An integrated system for accident prevention through road anomaly detection, hazard communication, and real-time driver alerts. The system uses IR, vibration, flame, and GPS sensors, with a CYD display unit connected via Wi-Fi for real-time hazard communication.",
        image: "images/WhatsApp Image 2026-03-30 at 16.50.55 (1).jpeg"  // Replace with actual image
    },
    {
        title: "Autonomous Hospital Waste Disposal System",
        students: "Team Project",
        supervisor: "Dr. J. A. Bala",
        funder: null,
        abstract: "A waste disposal robot and smart bins system where the robot autonomously empties bins by prioritizing air pollution levels and waste quantity, ensuring efficient and hygienic hospital waste management.",
        image: "images/WhatsApp Image 2026-03-30 at 16.50.59 (1).jpeg"  // Replace with actual image
    },
    {
        title: "Solar-Powered Flexible Water Pump Control System",
        students: "Team Project",
        supervisor: "Dr. T. A. Folorunso",
        funder: null,
        abstract: "A solar panel‑enabled flexible control mechanism for submersible water pumps in domestic applications. The system combines automation and renewable solar energy to ensure consistent water availability, lower operating costs, and improve sustainability in areas with unstable electricity.",
        image: "images/WhatsApp Image 2026-03-30 at 16.51.01.jpeg"  // Replace with actual image
    },
    {
        title: "STEM e‑Literacy Platform for Secondary Education",
        students: "Research Team",
        supervisor: "Principal Investigator",
        funder: "Kaduna State Government",
        abstract: "Development of a digital platform to enhance STEM literacy among secondary school students in Kaduna State, providing interactive e‑learning resources and teacher support.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "AI‑Based Autonomous Robotic System for Weed Control in Maize Farmland",
        students: "Research Team",
        supervisor: "Principal Investigator",
        funder: "TETFund",
        abstract: "An autonomous robot using artificial intelligence to identify and remove weeds in maize fields, reducing herbicide use and increasing crop yield.",
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Novel Road Accident Monitoring and Prevention System",
        students: "Research Team",
        supervisor: "Principal Investigator",
        funder: "TETFund",
        abstract: "Advanced monitoring system for Nigerian roads and highways to detect accident-prone conditions and alert drivers in real time, aiming to reduce fatalities.",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Artificial Intelligence for Clean Energy",
        students: "Research Team",
        supervisor: "Principal Investigator",
        funder: "Royal Academy of Engineering",
        abstract: "Leveraging AI to optimize clean energy generation, storage, and distribution, with a focus on improving efficiency and integrating renewable sources.",
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Novel Pipeline Monitoring under High Temperature and Pressure Conditions",
        students: "Research Team",
        supervisor: "Principal Investigator",
        funder: "TETFund",
        abstract: "Development of sensors and monitoring systems for pipelines operating under extreme conditions, ensuring safety and early leak detection.",
        image: "https://images.unsplash.com/photo-1581092335871-4c4ff7f5b2e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Intelligent Wireless Mobile Phone Charger",
        students: "Research Team",
        supervisor: "Principal Investigator",
        funder: "NCC (Nigerian Communications Commission)",
        abstract: "Fabrication of an intelligent wireless charger that optimizes charging efficiency, detects device compatibility, and includes safety features.",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
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
                ${proj.funder ? `<span class="funder-badge"><i class="fas fa-trophy"></i> Funded by: ${proj.funder}</span>` : ''}
                <p class="students"><i class="fas fa-user-graduate"></i> <strong>Students/Researchers:</strong> ${proj.students}</p>
                <p class="supervisor"><i class="fas fa-chalkboard-teacher"></i> <strong>Supervisor/PI:</strong> ${proj.supervisor}</p>
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
