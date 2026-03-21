const projectData = [
            { title: "WIFI-Hunter", img: "https://images.unsplash.com/photo-1641574290026-49fe03aad0a4?w=600", lines: ["Advanced signal tracking system designed to identify and map unauthorized wireless network access points."] },
            { title: "Placement Portal", img: "https://media.istockphoto.com/id/861122560/photo/businesswoman-using-digital-devices-iot-ict-mixed-media.webp?a=1&b=1&s=612x612&w=0&k=20&c=NfWOnp0nyZt4_nfPeEX9bMs91Y1mDenjFwSNkZdw9t4=", lines: ["Streamlined portal for students and recruiters to manage campus interviews and recruitment workflows."] },
            { title: "Honeypot Concept", img: "https://media.istockphoto.com/id/1456739978/photo/hardware-security-concept-digital-shield-firewall-with-central-computer-processor-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=287GX9Mmet-qTODKNdOR6_DFA0OkyoMxvDsj3yWFvbo=", lines: ["Cybersecurity trap designed to detect or counteract attempts at unauthorized use of information."] },
            { title: "Ambulance Priority", img: "https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=600", lines: ["Smart traffic management system that automatically clears paths for emergency vehicles using GPS."] },
            { title: "Arduino Sensor Car", img: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600", lines: ["Autonomous vehicle prototype utilizing ultrasonic and infrared sensors for obstacle avoidance."] },
            { title: "Music Therapy AI", img: "https://media.istockphoto.com/id/2152642578/photo/glowing-ai-music-icon-with-audio-waveform-on-dark-background-yellow-transparent-glass.webp?a=1&b=1&s=612x612&w=0&k=20&c=_vCRmUBcSlg2zShDgSzSQ36uiVT4si2Q_uK8ElISngY=", lines: ["AI-driven application that detects emotional states and plays personalized music for mental well-being."] },
            { title: "LPG Gas Detection", img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80", lines: ["Safety-focused IoT device that detects gas leaks and alerts users instantly via mobile notifications."] },
            { title: "Gesture Control PC", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600", lines: ["Hand-tracking interface allowing users to navigate computer systems without physical contact."] },
            { title: "Women Safety", img: "https://media.istockphoto.com/id/1400779382/photo/network-security-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=mtpXnekYChu-jbKFs80LQ6dDwCtmZM07q0DDJdkQJa4=", lines: ["Wearable technology equipped with emergency alerts and location tracking for personal security."] },
            { title: "Smart Energy Meter", img: "https://plus.unsplash.com/premium_photo-1672723447769-a5133ff4d5da?w=600", lines: ["Real-time power monitoring system that tracks electricity usage and provides cloud analytics."] },
            { title: "Smart AI Agriculture Assistant", img:"smart.jpeg", lines: ["An AI-driven platform optimizing crop yields through real-time soil analysis, automated pest detection, and precision irrigation."] },
            { title: "Exam Management", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600", lines: ["Digital solution for automated seating, invigilator assignments, and student verification."] },
            { title: "Bus Tracking App", img: "https://media.istockphoto.com/id/1062171142/photo/bus-gps-means-public-transport-and-buses.webp?a=1&b=1&s=612x612&w=0&k=20&c=n_KimEgElHPAdTINOtRdzI8CgeNin8v8h7J8oA88_zA=", lines: ["Real-time GPS application providing accurate arrival times and route mapping for public transport."] },
            { title: "AI Chat Bot", img: "https://plus.unsplash.com/premium_photo-1725907643567-1694c2737432?w=600", lines: ["Automated conversational agent designed to provide instant support and answer common queries."] },
            { title: "Digital Voting Iris", img: "https://plus.unsplash.com/premium_photo-1708338614723-8d5d7e284d93?w=600", lines: ["High-security election platform utilizing biometric iris scanning for tamper-proof identification."] },
            { title: "Gesture Drone", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600", lines: ["Innovative drone navigation system that interprets hand movements as flight commands."] },
            { title: "AI Chat Frontend", img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600", lines: ["A sleek, responsive user interface built to provide a seamless interaction layer for AI engines."] },
            { title: "Face Safety Robot", img: "https://plus.unsplash.com/premium_photo-1700830452915-434970100217?w=600", lines: ["Security robot using facial recognition to monitor restricted areas in real-time."] },
            { title: "Network Monitoring", img: "https://media.istockphoto.com/id/1488104422/photo/the-power-of-search-engine-transforming-industries-and-customer-service-a-look-into-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=f20Iz19frw1O70PQKqPx-l6k14JfuoQ4z2P3OoJ20g4=", lines: ["Comprehensive dashboard for tracking network health and detecting server intrusions."] },
            { title: "Result System", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600", lines: ["Scalable academic publishing platform designed to handle high traffic and deliver results."] },
            { title: "AI Smart Mirror", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600", lines: ["Interactive mirror displaying news and weather using an AI-powered reflective system."] },
            { title: "EV Charge Hub", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600", lines: ["Smart grid solution for managing electric vehicle charging stations and power distribution."] },
            { title: "Auto Charge Detect", img: "https://images.unsplash.com/photo-1732194516739-9325055c35de?w=600", lines: ["IoT mechanism that identifies plug-in status and optimizes the battery charging cycle."] },
            { title: "Bus Tracking Web", img: "https://media.istockphoto.com/id/882362926/photo/man-using-smartphone-app-to-purchase-bus-electronic-ticket.webp?a=1&b=1&s=612x612&w=0&k=20&c=9r9pWuXs4kZCEgbt6hQWIb92zSYgvsNpwi-V_aNYIRM=", lines: ["Dynamic listing system showing real-time location and occupancy for municipal fleets."] },
            { title: "P.R.I.M.E Intelligence", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600", lines: ["Multimodal AI engagement system processing voice, text, and visual inputs."] },
            { title: "Attendance Tracking", img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600", lines: ["Automated record-keeping system using biometrics to streamline attendance monitoring."] },
            { title: "College Voice Asst", img: "aicall.jpeg", lines: ["Voice-activated support agent specifically trained for academic and campus inquiries."] },
            { title: "Interactive Robot", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600", lines: ["Hardware-based social robot that interacts with users through natural language processing."] },
            { title: "HIREMATE AI", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600", lines: ["AI recruitment platform matching candidate skill sets with optimal job roles."] },
            { title: "Retinopathy AI", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600", lines: ["Deep learning model classifying fundus images to detect early stages of retinopathy."] },
            { title: "Phishing Detection", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600", lines: ["Advanced neural network designed to identify fraudulent URLs and protect users."] },
            { title: "Queue Management", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600", lines: ["Automated ticketing and flow control system to reduce wait times in centers."] },
            { title: "ERB Management", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600", lines: ["Enterprise Resource Planning system built with Angular and MSSQL for data management."] },
            { title: "Medical Assistant", img: "https://images.unsplash.com/photo-1758691462668-046fd85ceac9?w=600", lines: ["Web application utilizing machine learning to offer symptom tracking and advice."] },
            { title: "Skin Care Pred", img: "https://images.unsplash.com/photo-1552046122-03184de85e08?w=600", lines: ["Vision-based deep learning app analyzing skin conditions and care recommendations."] },
            { title: "Food Delivery MERN", img: "https://media.istockphoto.com/id/1270068772/photo/woman-ordering-food-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=4l1GW-qpBAleWmkXHLfeH-KqoOJTe_wH_oc2EWQw05I=", lines: ["Full-stack MERN application for seamless food ordering and secure payments."] },
            { title: "AI Voice Agent", img: "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?w=600", lines: ["Python-based voice recognizer capable of performing tasks via speech commands."] },
            { title: "Cardio Prediction", img: "https://plus.unsplash.com/premium_photo-1770480230304-32b0253a30f9?q=80&w=1236&auto=format&fit=crop", lines: ["Explainable AI system predicting heart disorders by analyzing patient vitals."] },
            { title: "School Management", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600", lines: ["Comprehensive Django platform for managing student records and administrative tasks."] },
            { title: "Live List", img:"live.jpeg", lines: ["A dynamic portal that live-displays student registrations and auto-deploys profiles with GitHub and LinkedIn links."] }
        ];

        document.addEventListener("DOMContentLoaded", () => {
            const grid = document.getElementById('projectsGrid');
            
            // Build the grid
            const fragment = document.createDocumentFragment();
            projectData.forEach(proj => {
                const row = document.createElement('div');
                row.className = 'project-row';
                row.innerHTML = `
                    <div class="project-image">
                        <img src="${proj.img}" alt="${proj.title}" loading="lazy">
                    </div>
                    <div class="project-content">
                        <h2 class="proj-title">${proj.title}</h2>
                        <div class="typing-area">
                            ${proj.lines.map(line => `<p class="type-line" data-text="${line}"></p>`).join('')}
                        </div>
                    </div>
                `;
                fragment.appendChild(row);
            });
            grid.appendChild(fragment);

            // Typing Logic
            const typeLine = async (contentBox) => {
                if (contentBox.dataset.started === "true") return;
                contentBox.dataset.started = "true";

                const lines = contentBox.querySelectorAll('.type-line');
                for (let line of lines) {
                    const text = line.getAttribute('data-text');
                    for (let i = 0; i <= text.length; i++) {
                        line.textContent = text.substring(0, i);
                        await new Promise(r => setTimeout(r, 15)); 
                    }
                }
            };

            // Intersection Observer for scroll animation
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        typeLine(entry.target.querySelector('.project-content'));
                    }
                });
            }, { threshold: 0.15 });

            document.querySelectorAll('.project-row').forEach(row => observer.observe(row));
        });

        // Preloader Logic
        window.addEventListener("load", () => {
            const loader = document.getElementById("preloader");
            setTimeout(() => {
                if (loader) {
                    loader.classList.add("loader-hidden");
                    document.body.style.overflow = "auto";
                    setTimeout(() => loader.remove(), 500);
                }
            }, 1000); 
        });
    

        // Get elements
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

// 1. Toggle the menu when the menu button is clicked
menuBtn.addEventListener('click', (event) => {
    // Prevent this click from reaching the "window" listener immediately
    event.stopPropagation(); 
    dropdownMenu.classList.toggle('show');
});

// 2. Close the menu if user clicks anywhere else on the screen
window.addEventListener('click', (event) => {
    // If the click is NOT on the menu button and NOT inside the dropdown
    if (!menuBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

// Navigation Functions
function projectspage() {
    window.location.href = "projects.html";
}

function eventspage() {
    window.location.href = "events.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.2 // Triggers when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once the animation is done
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const target = document.querySelector('.info-section');
    if (target) observer.observe(target);
});


window.addEventListener("scroll", () => {
    const scrollIndicator = document.getElementById("scrollIndicator");
    if (!scrollIndicator) return;

    // Calculate how far from the bottom we are
    const scrollPosition = window.innerHeight + window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;

    // If within 50px of the bottom, hide it
    if (scrollPosition >= pageHeight - 50) {
        scrollIndicator.classList.add("hidden-scroll");
    } else {
        scrollIndicator.classList.remove("hidden-scroll");
    }
});