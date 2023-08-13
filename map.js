// Sample data for dragon fruit farms in Kenya
const farms = [
    {
      name: "Kamwangi dragon farm",
      location: [-0.95656, 36.89634], // Latitude and longitude
      description: "A dragon fruit farm "
    },
    {
      name: "Kairview Ecological farm",
      location: [-0.71667, 36.4333],
      description: "Chinese farm dealing in dragon fruit cultivation in Naivasha."
    },
    {
        name: "Koma dragon fruit farm",
        location: [-1.28403, 37.16009],
        description: "A dragon fruit farm near Nairobi."
      },
      {
        name: "Richfarm kenya",
        location: [-0.75324, 36.43169],
        description: "A dragon fruit farm in karagita Naivasha offering cutting and extension services."
      },
      {
        name: "Dragon fruit farm project in Hadu",
        location: [-2.84241, 39.98387],
        description: "A dragon fruit cultivation project in the coastal region."
      },

    // Adding more farm entries as needed
  ];
  
  // Initialize the map
  const map = L.map('map').setView([-1.2921, 36.8219], 7);
  
  // Add a base map layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Add markers with customized popups
  farms.forEach(farm => {
    const marker = L.marker(farm.location).addTo(map);
    marker.bindPopup(`<b>${farm.name}</b><br>${farm.description}`);
  });
  
  