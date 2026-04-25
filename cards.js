// Centralized card data - used across all pages
const cardsDatabase = {
  cards: [
    // Bikes Category
    {
      id: 1,
      title: "New Bike",
      category: "bikes",
      categoryTag: "for sale",
      price: "$200",
      date: "3 days ago",
      description: "Never used before, still in original packaging! This is a great quality hybrid bike perfect for both casual rides and commuting. Features 21-speed Shimano gears, dual suspension, and all-terrain tires. The bike comes with a helmet, lock, and pump included. Only selling because I received a duplicate as a gift. Originally purchased for $450, now asking $200. In pristine condition, no scratches or damage. Great opportunity for someone looking for a reliable, affordable bike. Contact me for more details or to arrange a viewing.",
      rating: "100% positive",
      creator: "BestUser11",
      image: "images/New Bike/newbike1.jpg",
      images: ["images/New Bike/newbike1.jpg", "images/New Bike/newbike2.jpg", "images/New Bike/newbike3.jpg", "images/New Bike/newbike4.jpg", "images/New Bike/newbike5.jpg", "images/New Bike/newbike6.jpg"]
    },
    {
      id: 2,
      title: "Mountain Bike",
      category: "bikes",
      categoryTag: "for sale",
      price: "$250",
      date: "1 week ago",
      description: "Great condition, lightly used mountain bike - perfect for trail riding and off-road adventures. This is a Trek Marlin 7 with 27.5 inch wheels and 21-speed transmission. Features a hardtail aluminum frame, hydraulic disc brakes, and front suspension with 100mm travel. The bike has been well maintained and serviced regularly. Only slight wear from normal use, tires still have plenty of tread left. Includes bike lock and spare innertubes. Selling because I upgraded to a newer model. Great value for someone getting into mountain biking or looking for a reliable second bike.",
      rating: "98% positive",
      creator: "MainUser",
      image: "images/Mountain Bike/mountainbike1.jpg",
      images: ["images/Mountain Bike/mountainbike1.jpg", "images/Mountain Bike/mountainbike2.jpg", "images/Mountain Bike/mountainbike3.jpg", "images/Mountain Bike/mountainbike4.jpg", "images/Mountain Bike/mountainbike5.jpg"]
    },
    {
      id: 3,
      title: "Road Bike",
      category: "bikes",
      categoryTag: "for sale",
      price: "$350",
      date: "2 days ago",
      description: "Professional grade road bike built for speed and long-distance touring. This is a carbon fiber frame with drop bars and 16-speed derailleur system. Lightweight at only 18 lbs, perfect for serious cyclists and commuters who want performance. The bike features Kenda tires rated for high speed, and a comfortable saddle. Recently tuned up with new brake pads and cable adjustments. Perfect condition for someone training for races or doing century rides. Comes with toe clips and water bottle holder. Originally $800, asking $350.",
      rating: "99% positive",
      creator: "CyclePro",
      image: "images/Road Bike/roadbike1.jpg",
      images: ["images/Road Bike/roadbike1.jpg", "images/Road Bike/roadbike2.jpg"]
    },
    {
      id: 4,
      title: "Kids Bike",
      category: "bikes",
      categoryTag: "for sale",
      price: "$75",
      date: "5 days ago",
      description: "Perfect for beginners! 20-inch wheel size, ideal for kids ages 7-12. Comes with training wheels and safety reflectors. The bike features coaster brakes which are easy for kids to control, and a comfortable, ergonomic seat. The frame is lightweight steel so kids can handle it easily. All gears working smoothly, tires in good condition. Includes a colorful handlebar grip and basket for carrying toys. Safety-tested and meets all CPSC standards. My son has outgrown it and moved up to a larger bike. Great starter bike!",
      rating: "100% positive",
      creator: "FamilyFirst",
      image: "images/Kids Bike/kidbike1.jpg",
      images: ["images/Kids Bike/kidbike1.jpg", "images/Kids Bike/kidbike2.jpg"]
    },
    {
      id: 5,
      title: "E-Bike",
      category: "bikes",
      categoryTag: "for sale",
      price: "$800",
      date: "4 days ago",
      description: "Electric assisted bicycle - great for commuting without arriving sweaty! Features a 750W motor with pedal assist and throttle modes. 50-mile range per charge with the included lithium-ion battery. Aluminum frame with 26-inch tires suitable for pavement and light trails. Integrated headlight and taillight for safety. LCD display shows speed, distance, battery level, and assist mode. Recently serviced and battery fully functional. Perfect for eco-conscious commuters or those with physical limitations. Saves on gas and parking fees. Originally $1,800, selling at $800 due to job relocation.",
      rating: "95% positive",
      creator: "TechCycler",
      image: "images/E-Bike/ebike1.jpg",
      images: ["images/E-Bike/ebike1.jpg", "images/E-Bike/ebike2.jpg", "images/E-Bike/ebike3.jpg", "images/E-Bike/ebike4.jpg"]
    },
    {
      id: 6,
      title: "Vintage Bike",
      category: "bikes",
      categoryTag: "for sale",
      price: "$150",
      date: "1 week ago",
      description: "Classic 1970s design vintage road bike with authentic steel frame and retro aesthetic. Fully functional with all original components including Brooks leather saddle, drop bars, and vintage Huffy branding. The bike shows character with patina finish - not restored, keeping its authentic vintage charm. Perfect for collectors, hipsters, or anyone who loves vintage aesthetics. Mechanically sound, all gears and brakes work smoothly. Great conversation starter on the road. A piece of cycling history! Perfect for someone who wants something unique and different from modern bikes.",
      rating: "97% positive",
      creator: "VintageCollector",
      image: "images/Vintage Bike/vintagebike1.webp",
      images: ["images/Vintage Bike/vintagebike1.webp", "images/Vintage Bike/vintagebike2.webp", "images/Vintage Bike/vintagebike3.webp"]
    },
    
    // Services Category
    {
      id: 7,
      title: "Computer Help Needed",
      category: "services",
      categoryTag: "services",
      price: "$15/hr",
      date: "1 day ago",
      description: "Need help setting up my new computer and transferring files from my old one. I'm not very tech-savvy and could use someone experienced to help me get everything installed properly - including software, printers, and getting my email set up. Also need help organizing files and folders in a logical way, and making sure everything is backed up to the cloud. Prefer someone patient and willing to explain what they're doing. Can work evenings and weekends. Located in Charlotte, NC. Please let me know your availability and experience level.",
      rating: "99% positive",
      creator: "MainUser",
      image: "images/Computer Help Needed/computerhelp1.jpg",
      images: ["images/Computer Help Needed/computerhelp1.jpg", "images/Computer Help Needed/computerhelp2.webp"]
    },
    
    // Cars/Vehicles Category
    {
      id: 8,
      title: "Toyota Camry",
      category: "cars",
      categoryTag: "for sale",
      price: "$12,000",
      date: "3 weeks ago",
      description: "2018 Toyota Camry, excellent condition with only 45,000 miles. Well-maintained sedan with clean title, no accidents. Features include automatic transmission, power windows/locks, Bluetooth, backup camera, and touchscreen infotainment system. All maintenance records available. Recently replaced tires and brake pads. AC and heating work perfectly. Interior is clean with no stains or tears. Reliable, fuel-efficient vehicle perfect for commuting or family transportation. Recently serviced at Toyota dealership. Selling because upgrading to an SUV. Must see to appreciate the condition. Please contact for appointment.",
      rating: "100% positive",
      creator: "MainUser",
      image: "images/Toyota Camry/camry1.webp",
      images: ["images/Toyota Camry/camry1.webp", "images/Toyota Camry/camry2.webp", "images/Toyota Camry/camry3.webp", "images/Toyota Camry/camry4.webp", "images/Toyota Camry/camry5.webp", "images/Toyota Camry/camry6.webp", "images/Toyota Camry/camry7.webp", "images/Toyota Camry/camry8.webp", "images/Toyota Camry/camry9.webp", "images/Toyota Camry/camry10.webp", "images/Toyota Camry/camry11.webp"]
    },

    // Housing Category
    {
      id: 9,
      title: "2BR Apartment for Rent",
      category: "housing",
      categoryTag: "housing",
      price: "$1,200/mo",
      date: "2 days ago",
      description: "Beautiful 2-bedroom, 1-bath apartment in a safe, quiet neighborhood with excellent walkability. Hardwood floors, updated kitchen with stainless steel appliances, and spacious living room. In-unit washer/dryer combo, air conditioning, and heating included. Building has secured entry, on-site parking available, and is pet-friendly (cats and small dogs welcome with deposit). Located near grocery stores, restaurants, and public transit. Available for immediate move-in. No smoking. Lease terms flexible. Contact for viewing.",
      rating: "98% positive",
      creator: "PropertyMgmt",
      image: "images/2BR Apartment for Rent/2bedroomapartment1.jpg",
      images: ["images/2BR Apartment for Rent/2bedroomapartment1.jpg", "images/2BR Apartment for Rent/2bedroomapartment2.webp", "images/2BR Apartment for Rent/2bedroomapartment3.webp"]
    },
    {
      id: 10,
      title: "House for Sale - 3BR",
      category: "housing",
      categoryTag: "housing",
      price: "$285,000",
      date: "1 week ago",
      description: "Charming 3-bedroom, 2-bath house on quiet suburban street with large backyard. Built in 2005 with recent upgrades including new roof (2022), updated HVAC system, and fresh paint throughout. Spacious master suite with walk-in closet, open floor plan with kitchen island, and wood-burning fireplace in living room. Fenced yard perfect for families and pets. Detached 2-car garage. Excellent schools in district. Move-in ready! Inspection and appraisal completed. Motivated seller. Open to reasonable offers.",
      rating: "100% positive",
      creator: "HomeSeller",
      image: "images/House for Sale - 3BR/3bedroomhouse1.jpg",
      images: ["images/House for Sale - 3BR/3bedroomhouse1.jpg", "images/House for Sale - 3BR/3bedroomhouse2.jpg", "images/House for Sale - 3BR/3bedroomhouse3.jpg", "images/House for Sale - 3BR/3bedroomhouse4.jpg", "images/House for Sale - 3BR/3bedroomhouse5.jpg", "images/House for Sale - 3BR/3bedroomhouse6.jpg", "images/House for Sale - 3BR/3bedroomhouse7.jpg", "images/House for Sale - 3BR/3bedroomhouse8.jpg"]
    },
    {
      id: 11,
      title: "Studio Room for Rent",
      category: "housing",
      categoryTag: "housing",
      price: "$650/mo",
      date: "3 days ago",
      description: "Cozy studio apartment with private entrance, perfect for a single person or couple. Includes furnished bedroom area, small kitchenette, and full bath. Utilities included in rent (water, electric, trash). Building has laundry facilities in basement. Located near shopping and dining. Landlord is responsive and friendly. No pets. Available immediately. Lease is month-to-month for flexibility.",
      rating: "99% positive",
      creator: "LandlordJohn",
      image: "images/Studio Room for Rent/studioapartment1.jpg",
      images: ["images/Studio Room for Rent/studioapartment1.jpg", "images/Studio Room for Rent/studioapartment2.jpg", "images/Studio Room for Rent/studioapartment3.jpg", "images/Studio Room for Rent/studioapartment4.jpg"]
    },

    // Jobs Category
    {
      id: 12,
      title: "Software Developer Needed",
      category: "jobs",
      categoryTag: "jobs",
      price: "$60-75k/yr",
      date: "4 days ago",
      description: "Growing tech startup looking for a full-time Senior Software Developer to join our team. We're building SaaS products and need someone experienced with JavaScript, React, and Node.js. Must have at least 3 years of professional development experience. We offer competitive salary, health insurance, 401k, flexible hours, and remote work options. You'll work on exciting projects with a collaborative team in a fast-paced environment. We value continuous learning and professional growth. Send resume and GitHub profile link. Interviews conducted via Zoom.",
      rating: "96% positive",
      creator: "TechRecruiter",
      image: "Image",
      images: []
    },
    {
      id: 13,
      title: "Graphic Designer - Part Time",
      category: "jobs",
      categoryTag: "jobs",
      price: "$25-35/hr",
      date: "2 days ago",
      description: "Creative agency seeking part-time Graphic Designer for freelance/contract work. We need someone skilled in Adobe Creative Suite (Photoshop, Illustrator, InDesign) who can design marketing materials, social media graphics, and brand assets. This is flexible work - can be 10-20 hours per week depending on project load. Perfect for students or career-changers. Portfolio required. We pay competitive rates and offer potential for full-time position with great performers. Work from home or in our office.",
      rating: "97% positive",
      creator: "DesignStudio",
      image: "Image",
      images: []
    },
    {
      id: 14,
      title: "Barista Wanted - Coffee Shop",
      category: "jobs",
      categoryTag: "jobs",
      price: "$16.50/hr",
      date: "5 days ago",
      description: "Busy downtown coffee shop hiring enthusiastic Barista for morning and afternoon shifts. Must be friendly, quick learner, and able to work in a fast-paced environment. Experience with espresso machines and latte art a plus but not required - we provide full training. You'll take orders, make specialty drinks, and create a welcoming atmosphere for our regulars. Flexible scheduling available. Includes employee discounts on coffee and food. Located on Main Street. Apply in person or call 555-0123.",
      rating: "98% positive",
      creator: "CoffeeShop",
      image: "Image",
      images: []
    },

    // Discussion Category
    {
      id: 15,
      title: "Best Running Trails in Charlotte?",
      category: "discussion",
      categoryTag: "discussion",
      price: "Free",
      date: "6 hours ago",
      description: "I'm new to the Charlotte area and looking for good running trails that are safe and well-maintained. I prefer something with nice views, ideally 5-10 miles long. Does anyone have recommendations? I'm especially interested in trails near the Charlotte region. Any suggestions for weekday vs. weekend routes? Looking to find my new favorite running spot!",
      rating: "95% positive",
      creator: "RunnerJoe",
      image: "Image"
    },
    {
      id: 16,
      title: "Local Restaurant Recommendations",
      category: "discussion",
      categoryTag: "discussion",
      price: "Free",
      date: "8 hours ago",
      description: "Looking for hidden gem restaurants in the Charlotte area. I've been to all the usual spots downtown and want to try something unique and authentic. Preferably somewhere with good food, reasonable prices, and a local vibe. Any ethnic cuisines you'd especially recommend? Would love to know about family-owned places that don't get as much attention as the big chains. Please share your favorites!",
      rating: "96% positive",
      creator: "FoodieLife",
      image: "Image"
    },
    {
      id: 17,
      title: "Car Insurance Tips - Best Rates?",
      category: "discussion",
      categoryTag: "discussion",
      price: "Free",
      date: "1 day ago",
      description: "Has anyone found ways to lower their car insurance premiums? I've been getting quotes all over the place and am trying to figure out what's the best deal. Do any of you have positive experiences with specific companies? Are there specific discounts I should be asking about? Also wondering if switching providers is worth it or if loyalty discounts make staying put a better option.",
      rating: "94% positive",
      creator: "BudgetSaver",
      image: "Image"
    },

    // Community Category
    {
      id: 18,
      title: "Free Couch - Must Pick Up",
      category: "community",
      categoryTag: "community",
      price: "Free",
      date: "12 hours ago",
      description: "Brown leather couch in good condition - needs to go this week! It's being replaced with a sectional. The couch is comfortable and clean, no tears or stains. It's a 2-seater model, approximately 72 inches wide. You must be able to pick it up yourself within the next 3 days. Located in northeast Charlotte area. Come see it anytime - just message first to arrange a time.",
      rating: "99% positive",
      creator: "FreebieNinja",
      image: "images/Free Couch - Must Pick Up/freecouch.webp",
      images: ["images/Free Couch - Must Pick Up/freecouch.webp"]
    },
    {
      id: 19,
      title: "Community Garden Plot Available",
      category: "community",
      categoryTag: "community",
      price: "Free",
      date: "2 days ago",
      description: "The Riverside Community Garden has an open plot (10x15 feet) available starting next month! Perfect for growing vegetables, flowers, or herbs. The garden provides water access, tools, and community support. Plots are first-come-first-served and are free to use. There's a small volunteer requirement (help maintain common areas 2-4 hours per month). Great for gardening enthusiasts and families wanting to teach kids about growing food. Contact garden coordinator for more info.",
      rating: "100% positive",
      creator: "GreenThumb",
      image: "images/Community Garden Plot Available/gardenplot1.jpg",
      images: ["images/Community Garden Plot Available/gardenplot1.jpg"]
    },
    {
      id: 20,
      title: "Neighborhood Book Club - Join Us!",
      category: "community",
      categoryTag: "community",
      price: "Free",
      date: "3 days ago",
      description: "Our neighborhood book club is looking for new members! We meet once a month to discuss books over coffee and snacks. This month we're reading 'The Midnight Library'. Everyone is welcome regardless of reading experience. We pick a mix of genres - fiction, memoirs, mysteries - something for everyone. Next meeting is April 28th at 7pm at the community center. No membership fees, just bring yourself and your thoughts! Casual and fun atmosphere.",
      rating: "97% positive",
      creator: "BookClubHost",
      image: "images/Neighborhood Book Club - Join Us/bookclub1.webp",
      images: ["images/Neighborhood Book Club - Join Us/bookclub1.webp"]
    }
  ],

  // Get cards by category
  getByCategory: function(category) {
    return this.cards.filter(card => card.category.toLowerCase() === category.toLowerCase());
  },

  // Get cards by creator
  getByCreator: function(creator) {
    return this.cards.filter(card => card.creator.toLowerCase() === creator.toLowerCase());
  },

  // Search cards by title, description, or category
  search: function(query) {
    const q = query.toLowerCase();
    return this.cards.filter(card => 
      card.title.toLowerCase().includes(q) || 
      card.description.toLowerCase().includes(q) ||
      card.category.toLowerCase().includes(q)
    );
  },

  // Get cards by category tag (for sale, services, etc.)
  getByCategoryTag: function(tag) {
    if (!tag) return this.cards;
    return this.cards.filter(card => card.categoryTag && card.categoryTag.toLowerCase() === tag.toLowerCase());
  },

  // Get all unique category tags
  getCategories: function() {
    return [...new Set(this.cards.map(card => card.category))];
  },

  // Get card by ID
  getById: function(id) {
    return this.cards.find(card => card.id === id);
  },

  // Truncate description for card display (keep first 100 characters)
  truncateDescription: function(description, maxLength = 100) {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...';
  },

  // Create HTML card element
  createCardElement: function(card) {
    // Check if image should be displayed (not discussion or jobs)
    const showImage = card.category !== 'discussion' && card.category !== 'jobs';
    
    // Check if image is a file path or placeholder text
    const imageHTML = showImage ? (card.image.startsWith('images/') 
      ? `<img src="${card.image}" alt="${card.title}" style="width: 100%; height: 100%; object-fit: cover;"/>`
      : `<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #e0e0e0; color: #666; font-weight: bold;">No Images</div>`)
      : '';

    // Truncate description for card view
    const truncatedDescription = this.truncateDescription(card.description);

    // Create category tag badge
    const categoryTag = card.categoryTag ? `<span class="category-tag">${card.categoryTag}</span>` : '';

    // Conditionally show price and rating based on category
    const showPriceRating = card.category !== 'community' && card.category !== 'discussion' && card.category !== 'jobs';
    const priceHTML = showPriceRating ? `<p class="result-price">${card.price}</p>` : '';
    const ratingHTML = showPriceRating ? `<p>${card.rating}</p>` : '';

    return `
      <a href="listing.html?id=${card.id}" class="search-result-item">
        ${showImage ? `<div class="result-image">${imageHTML}</div>` : ''}
        <div class="result-details">
          ${categoryTag}
          <h3>${card.title}</h3>
          ${priceHTML}
          <p class="result-time">${card.date}</p>
        </div>
        <div class="result-description">
          <p>${truncatedDescription}</p>
        </div>
        <div class="result-user">
          ${ratingHTML}
          <p>${card.creator}</p>
        </div>
      </a>
    `;
  }
};
