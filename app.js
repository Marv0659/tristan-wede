const data = [
  {
    date: "2023-12-06 to 2023-12-08",
    event: "WebTech Summit",
    role: "Keynote Speaker",
    location: {
      city: "San Francisco",
      state: "CA",
      venue: "Moscone Center",
    },
  },
  {
    date: "2023-12-12",
    event: 'Workshop "Responsive Design Strategies for Modern Websites"',
    location: {
      city: "Copenhagen",
      country: "Denmark",
      venue: "TBD",
    },
  },
  {
    date: "2024-01-15 to 2024-01-17",
    event: "Developer's Paradise Conference",
    role: "Panelist",
    location: {
      city: "Miami",
      state: "FL",
      venue: "Miami Convention Center",
    },
  },
  {
    date: "2024-01-22 to 2024-01-23",
    event: "CodeCraft Workshop",
    role: "Guest Instructor",
    location: {
      city: "New York City",
      state: "NY",
      venue: "TBD",
    },
  },
  {
    date: "2024-02-05 to 2024-02-06",
    event: "Design & Develop Summit",
    role: "Featured Speaker",
    location: {
      city: "Austin",
      state: "TX",
      venue: "Austin Convention Center",
    },
  },
  {
    date: "2024-02-15",
    event: 'Workshop "Advanced JavaScript Techniques"',
    location: {
      city: "Copenhagen",
      country: "Denmark",
      venue: "TBD",
    },
  },
  {
    date: "2024-03-10 to 2024-03-12",
    event: "WebMasters Expo",
    role: "Keynote Speaker",
    location: {
      city: "Las Vegas",
      state: "NV",
      venue: "Las Vegas Convention Center",
    },
  },
  {
    date: "2024-03-18",
    event: 'Workshop "Mastering CSS Grid Layouts"',
    location: {
      city: "Copenhagen",
      country: "Denmark",
      venue: "TBD",
    },
  },
  {
    date: "2024-04-05",
    event: 'Workshop "Optimizing Performance in Web Applications"',
    location: {
      city: "Copenhagen",
      country: "Denmark",
      venue: "TBD",
    },
  },
  {
    date: "2024-04-19 to 2024-04-20",
    event: "Frontend Focus Conference",
    role: "Panel Moderator",
    location: {
      city: "Seattle",
      state: "WA",
      venue: "Washington State Convention Center",
    },
  },
  {
    date: "2024-05-08 to 2024-05-09",
    event: "Developer's Summit",
    role: "Featured Speaker",
    location: {
      city: "Chicago",
      state: "IL",
      venue: "McCormick Place",
    },
  },
  {
    date: "2024-05-15 to 2024-05-16",
    event: "WebTech Summit",
    role: "Keynote Speaker",
    location: {
      city: "Boston",
      state: "MA",
      venue: "Hynes Convention Center",
    },
  },
  {
    date: "2024-06-06",
    event: 'Workshop "Building Progressive Web Apps"',
    location: {
      city: "Copenhagen",
      country: "Denmark",
      venue: "Den Sorte Diamant",
    },
  },
  {
    date: "2024-06-20",
    event: 'Workshop "Mastering React: Best Practices and Advanced Techniques"',
    location: {
      city: "Aarhus",
      country: "Denmark",
      venue: "TBD",
    },
  },
];

const eventsArticle = document.querySelector(".tourList");

const eventCard = document.createElement("div");
eventCard.classList.add("event-card");

data.forEach((event) => {
  // Create an event card
  const eventCard = document.createElement("div");
  eventCard.classList.add("event-card");

  // Event details
  const eventDetails = `
  <p><strong>Date:</strong> ${event.date}</p>
  <h3>${event.event}</h3>
      ${event.role ? `<p><strong>Role:</strong> ${event.role}</p>` : ""}
      <p><strong>Location:</strong> ${event.location.city}, 
        ${event.location.state || event.location.country}, ${event.location.venue}</p>
    `;

  // Append details to event card
  eventCard.innerHTML = eventDetails;
  eventsArticle.appendChild(eventCard);

  if (index < data.length - 1) {
    // Add a horizontal rule after each event card except the last one
    const hr = document.createElement("hr");
    hr.classList.add("divider");
    eventsArticle.appendChild(hr);
  }
});
