import travelMapsImg from '../assets/projects/travelmaps.jpg';
import fitTrackImg from '../assets/projects/fittrack.png';
import airWatchImg from '../assets/projects/airwatch.jpg';
import newsHubImg from '../assets/projects/newshub.jpg';
import stackPadImg from '../assets/projects/stackpad.jpg';

export const portfolioData = {
    profile: {
        name: "Nathanel Levy",
        role: "Full Stack Web Developer",
        location: "Hewlett, NY - Ra’anana, Israel",
        phone: "516-728-0384 | 972-054-371-6767",
        github: "Nathanellevy-DI",
        linkedin: "Nathanel Levy",
        summary: `Full Stack Developer with a technical foundation in Python, JavaScript, and React, complemented by a professional background in e-commerce and operational management. I have a proven track record of building functional, design-driven applications—ranging from real-time flight trackers to AI-integrated fitness platforms—with a constant focus on UI/UX and secure data management. I am driven by a deep-seated need to make systems run smoothly; I naturally gravitate toward identifying bottlenecks and implementing creative solutions that eliminate wasted time and maximize productivity.

Beyond my technical skills in coding, 3D modeling, and digital media, I bring a unique perspective shaped by managing high-end jewelry operations and large-scale e-commerce logistics. These experiences have instilled in me a high level of accountability, cultural awareness, and a "results-first" mindset. I am a lifelong learner, always eager to master new technologies and methodologies that can improve the user experience or streamline internal workflows. I thrive in environments that value precision, clear communication, and a proactive approach to problem-solving.`,
        skills: [
            "React", "JavaScript", "Python", "CSS", "TypeScript", "Node.js",
            "UI/UX Design", "Adobe Photoshop", "Data Entry & ERP Systems",
            "Photography", "Drone Photography", "Product Photography",
            "Drone Videography", "Time Management", "Order Fulfillment",
            "Creative Problem Solving", "Cultural Awareness",
            "3D Modeling/Scanning and Printing"
        ],
        languages: ["English – Native Speaker", "Hebrew – Intermediate Speaker"]
    },
    experience: [
        {
            role: "Core Return Manager / eBay Sales",
            company: "Us Engine Production Inc",
            location: "Lindenhurst, NY",
            period: "Sep 2023 – Oct 2025",
            description: [
                "Ensured all cores were returned within the 30-day core return policy.",
                "Contacted customers via calls and emails for updates on cores and eBay orders.",
                "Coordinated shipping of cores between New York and Michigan warehouses.",
                "Managed eBay store: took pictures, created templates, listed items, and shipped 99% of orders same day.",
                "Entered customer and order information into the ERP system and handled returns/disputes."
            ]
        },
        {
            role: "Owner / Partner",
            company: "Nate Diamonds",
            location: "New York, NY",
            period: "Jul 2022 – May 2023",
            description: [
                "Managed daily operations of a jewelry business.",
                "Oversaw inventory management and supplier communication.",
                "Bought and sold high-end watches and jewelry; photographed products for online listings."
            ]
        }
    ],
    education: [
        {
            school: "Developers Institute, TLV Coding Bootcamp",
            degree: "Full Stack Web Development",
            location: "Tel Aviv, Israel",
            period: "11/2/2025 – 02/3/2026"
        },
        {
            school: "George W Hewlett High School",
            degree: "High School Diploma",
            location: "Hewlett, NY",
            period: "June 2022"
        }
    ],
    projects: [
        {
            id: "travelmaps",
            title: "TravelMaps",
            subtitle: "Personal location tracker web app",
            status: "Demo",
            description: "A personal location tracker web app that allows users to pin and manage their travel locations interactively.",
            features: [
                "Implemented interactive maps with search and pinning functionality.",
                "Used JSON Web Tokens and localStorage to manage secure client-side data.",
                "Designed a modern UI for an intuitive user experience."
            ],
            tags: ["React", "Mapbox/Leaflet", "JWT", "LocalStorage"],
            image: travelMapsImg
        },
        {
            id: "fittrack",
            title: "FitTrack",
            subtitle: "Personal Fitness Tracker & AI Coach",
            status: "Demo",
            description: "A comprehensive fitness tracker with an 'AI' workout coach that adapts plans to your level and goals.",
            features: [
                "AI workout coach that builds a plan to your level or goals.",
                "View past workouts and dates.",
                "Progress tracking: calories burnt, workout frequency graphs, and time investment ratios.",
                "Custom goal setting for any workout situation."
            ],
            tags: ["React", "Data Visualization", "AI Integration", "Fitness logic"],
            image: fitTrackImg
        },
        {
            id: "airwatch",
            title: "AirWatch",
            subtitle: "Real-Time Plane Data Dashboard",
            status: "Concept",
            description: "A dashboard for viewing hundreds of flights in real-time with detailed metadata.",
            features: [
                "View hundreds of flights happening in Real Time.",
                "Detailed flight info: Origin, flight number, air/ground status, destination, speed, altitude, plane category.",
                "Click on planes for individual readings and flight path previews."
            ],
            tags: ["API Integration", "Real-time Data", "Dashboard", "Flight Tracking"],
            image: airWatchImg
        },
        {
            id: "newshub",
            title: "NEWS HUB",
            subtitle: "News Aggregator",
            status: "Demo",
            description: "A news aggregation platform giving free access to over 150,000 news titles.",
            features: [
                "View Over 150,000 News Titles for FREE.",
                "Search For Any Topic, Keyword, or Phrase.",
                "Select from pre-made categories or customize your feed."
            ],
            tags: ["News API", "Search", "Content Aggregation"],
            image: newsHubImg
        },
        {
            id: "stackpad",
            title: "StackPad",
            subtitle: "Productivity Dashboard",
            status: "Demo",
            description: "A centralized productivity dashboard for managing tasks and notes.",
            features: [
                "Task management",
                "Note taking",
                "Productivity widgets"
            ],
            tags: ["Productivity", "Dashboard", "State Management"],
            image: stackPadImg
        }
    ],
    honors: [
        "Participated in NCSY charity trips rebuilding homes after hurricanes (Texas & Long Beach, NY).",
        "Self-taught Photoshop proficiency applied to photography and product presentations."
    ]
};
