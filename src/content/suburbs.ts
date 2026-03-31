export interface Suburb {
  slug: string;
  name: string;
  headline: string;
  description: string;
  intro: string;
  venues: string[];
  angle: "corporate" | "wedding" | "mixed";
  neighborhoods?: string[];
}

export const suburbs: Suburb[] = [
  {
    slug: "the-woodlands",
    name: "The Woodlands",
    headline: "Coffee Catering in The Woodlands",
    description:
      "Mobile espresso bar and coffee catering for corporate events, weddings, and private parties in The Woodlands, TX. Serving the entire 28,000-acre master-planned community.",
    intro:
      "The Woodlands is home to some of Houston's largest corporate campuses, from ExxonMobil's sprawling headquarters on Woodlands Parkway to HP and Occidental Petroleum along the Research Forest corridor. Our mobile coffee bar rolls right up to your office lobby, team offsite at The Woodlands Waterway, or that next big product launch. Whether you're fueling a 200-person all-hands or a smaller leadership retreat, we bring craft cold brew and specialty drinks straight to your people.",
    venues: [
      "The Woodlands Waterway Marriott",
      "ExxonMobil Campus at Hughes Landing",
      "The Cynthia Woods Mitchell Pavilion",
      "The Woodlands Country Club",
      "Research Forest Lakeside",
    ],
    angle: "corporate",
  },
  {
    slug: "katy",
    name: "Katy",
    headline: "Coffee Catering in Katy",
    description:
      "Professional espresso catering for corporate offices, community events, and celebrations in Katy, TX. We bring the coffee bar to LaCenterra, Cinco Ranch, and beyond.",
    intro:
      "Katy has quietly become one of Houston's fastest-growing corporate corridors. The stretch along LJ Parkway is packed with office parks, and developments like Katy Boardwalk District and LaCenterra at Cinco Ranch are drawing more companies west every year. Our mobile coffee bar fits right into that energy. We've set up for office appreciation days, grand openings, and neighborhood block parties from Cinco Ranch to Cross Creek Ranch. Great cold brew makes any Katy event better.",
    venues: [
      "LaCenterra at Cinco Ranch",
      "Katy Boardwalk District",
      "Katy Mills Mall event spaces",
      "Typhoon Texas waterpark events",
      "The ARK by Norris (Katy wedding venue)",
    ],
    angle: "corporate",
  },
  {
    slug: "sugar-land",
    name: "Sugar Land",
    headline: "Coffee Catering in Sugar Land",
    description:
      "Mobile espresso bar and coffee catering for corporate events and celebrations in Sugar Land, TX. Serving offices near Fluor, SLB, and Sugar Land Town Square.",
    intro:
      "Sugar Land punches above its weight when it comes to corporate presence. Fluor's global headquarters anchors the area, SLB (formerly Schlumberger) has a major campus nearby, and the office parks along Highway 6 keep growing. Beyond the corporate scene, Sugar Land Town Square is a go-to spot for community events and private celebrations. We bring our coffee bar to all of it. From investor meetings at Constellation Field to team-building days at the office, our cold brew and specialty drinks set the right tone.",
    venues: [
      "Sugar Land Town Square",
      "Constellation Field (Sugar Land Space Cowboys)",
      "Smart Financial Centre",
      "Fluor Global Headquarters",
      "Fort Bend County Fairgrounds",
    ],
    angle: "corporate",
  },
  {
    slug: "pearland",
    name: "Pearland",
    headline: "Coffee Catering in Pearland",
    description:
      "Mobile espresso and coffee catering for events in Pearland, TX. Serving Shadow Creek Ranch, Silverlake, and the growing Pearland business corridor.",
    intro:
      "Pearland has grown from a quiet suburb into a legitimate business hub along the 288 corridor. Shadow Creek Ranch and Silverlake have brought thousands of families to the area, and the Pearland Town Center serves as a gathering point for the whole community. Our mobile coffee bar is a natural fit for corporate open houses, neighborhood HOA events, and celebrations at local venues. We bring craft cold brew and specialty drinks wherever Pearland gathers.",
    venues: [
      "Pearland Town Center",
      "Hilton Garden Inn Pearland",
      "Shadow Creek Ranch community spaces",
      "Pearland Recreation Center & Natatorium",
      "Old Pearland event venues along Broadway",
    ],
    angle: "mixed",
  },
  {
    slug: "clear-lake",
    name: "Clear Lake",
    headline: "Coffee Catering in Clear Lake & Bay Area Houston",
    description:
      "Mobile espresso bar for corporate events, NASA contractor meetings, and celebrations in Clear Lake, Webster, and League City, TX.",
    intro:
      "Clear Lake runs on innovation, and it always has. NASA's Johnson Space Center and the aerospace contractors that surround it make this one of Houston's most concentrated pockets of engineering talent. But it's not all rocket science. The Kemah Boardwalk, South Shore Harbour, and the restaurants along NASA Parkway make the Bay Area a popular spot for celebrations and private events too. Our mobile coffee bar serves both sides of Clear Lake life, from keeping engineers caffeinated during long project sprints to adding a craft cold brew station to your waterfront reception.",
    venues: [
      "Space Center Houston",
      "South Shore Harbour Resort",
      "Kemah Boardwalk",
      "Bay Area Houston Convention Center (Lone Star Flight Museum)",
      "Hilton Houston NASA Clear Lake",
    ],
    angle: "mixed",
    neighborhoods: ["Webster", "League City", "Seabrook", "Kemah"],
  },
  {
    slug: "downtown",
    name: "Downtown Houston",
    headline: "Coffee Catering in Downtown Houston",
    description:
      "Mobile espresso bar for office events, conferences, and corporate gatherings in downtown Houston. Serving the Theater District, GRB, and Main Street corridor.",
    intro:
      "Downtown Houston is where the deals get done. From the office towers along Louisiana and Smith to the George R. Brown Convention Center and the Theater District, this is the heart of Houston's business world. Our mobile coffee bar is built for the pace of downtown. We set up in lobbies, conference floors, and event spaces to keep your team and your guests fueled with craft cold brew and specialty drinks. No permits to worry about, no logistics headaches. We handle everything.",
    venues: [
      "George R. Brown Convention Center",
      "Wortham Theater Center",
      "The Revaire (downtown event venue)",
      "Marriott Marquis Houston",
      "Discovery Green",
    ],
    angle: "corporate",
  },
  {
    slug: "midtown",
    name: "Midtown",
    headline: "Coffee Catering in Midtown Houston",
    description:
      "Mobile espresso catering for private events, office parties, and celebrations in Midtown Houston. Coffee cart service near Bagby Street and the Midtown corridor.",
    intro:
      "Midtown is Houston's go-to neighborhood for nightlife and events, but it's also home to a growing number of creative offices, coworking spaces, and startups along the Bagby Street corridor. It's the kind of neighborhood where a morning coffee bar at a product launch can transition into an afternoon cold brew station at a rooftop happy hour. We bring our mobile coffee bar to Midtown's mix of work and play, from corporate open houses to birthday celebrations at the neighborhood's many event-ready venues.",
    venues: [
      "The Astorian",
      "Midtown Arts & Theater Center Houston (MATCH)",
      "Midtown Park",
      "The Ballroom at Bayou Place",
      "Silver Street Studios",
    ],
    angle: "mixed",
  },
  {
    slug: "heights",
    name: "The Heights",
    headline: "Coffee Catering in The Heights",
    description:
      "Mobile espresso bar for weddings, private parties, and corporate events in The Heights, Houston. Craft coffee catering along 19th Street and White Oak.",
    intro:
      "The Heights is one of Houston's most sought-after neighborhoods for weddings and events. The tree-lined streets, renovated bungalows, and venues along 19th Street and White Oak create the kind of atmosphere that makes every event feel intentional. Our mobile coffee bar fits right into the vibe. We've poured cold brew at Heights wedding receptions, art market pop-ups, and corporate off-sites at the neighborhood's many character-filled venues. If your event is in the Heights, the coffee should match the setting.",
    venues: [
      "The Heights Fire Station (event venue)",
      "Artisans Houston (Heights Boulevard)",
      "White Oak Music Hall",
      "The Raven Tower",
      "Eureka Heights Brew Co.",
    ],
    angle: "mixed",
  },
  {
    slug: "galleria",
    name: "Galleria / Uptown",
    headline: "Coffee Catering in the Galleria & Uptown Houston",
    description:
      "Mobile espresso bar for corporate events and private parties in the Galleria, Uptown, and Post Oak corridor. Premium coffee catering for Houston's business district.",
    intro:
      "The Galleria area is Houston's second skyline for a reason. Williams Tower, the Post Oak corridor, and the Uptown office district house some of the city's biggest firms and most polished event spaces. When you're hosting clients, treating your team, or putting together an event at one of Uptown's premier venues, the details matter. Our mobile coffee bar delivers craft cold brew and specialty drinks with the kind of presentation that fits the Galleria standard. Professional setup, professional baristas, zero hassle.",
    venues: [
      "The Post Oak Hotel",
      "Royal Sonesta Houston Galleria",
      "Williams Tower and surrounding plazas",
      "Houston Country Club",
      "Uptown Park shopping and event spaces",
    ],
    angle: "corporate",
    neighborhoods: ["Uptown", "Post Oak", "Tanglewood", "River Oaks adjacent"],
  },
  {
    slug: "memorial",
    name: "Memorial",
    headline: "Coffee Catering in Memorial Houston",
    description:
      "Mobile espresso catering for corporate offices, community events, and private parties in Memorial, Memorial City, and the I-10 corridor in Houston, TX.",
    intro:
      "Memorial stretches along the I-10 corridor west of downtown, anchored by Memorial City and the cluster of corporate offices between Beltway 8 and Highway 6. It's a mix of established neighborhoods and serious business presence. Our mobile coffee bar serves the corporate side with lobby setups and conference-room service for team events, and the residential side with cold brew stations for HOA gatherings, school fundraisers, and private celebrations. Memorial moves fast, and our coffee keeps up.",
    venues: [
      "Memorial City Mall event spaces",
      "The Westin Houston, Memorial City",
      "Terry Hershey Park pavilions",
      "Memorial Park Conservancy events",
      "Houston Arboretum & Nature Center",
    ],
    angle: "corporate",
    neighborhoods: ["Memorial City", "Memorial Villages", "Spring Branch"],
  },
  {
    slug: "energy-corridor",
    name: "Energy Corridor",
    headline: "Coffee Catering in Houston's Energy Corridor",
    description:
      "Mobile espresso bar for corporate events and office gatherings in Houston's Energy Corridor. Serving BP, ConocoPhillips, Shell campuses, and CityCentre.",
    intro:
      "The Energy Corridor is the fuel behind Houston's fuel industry. BP, ConocoPhillips, and Shell all have major campuses here, and the office parks along Eldridge Parkway and Dairy Ashford are packed with energy-sector firms of every size. CityCentre adds retail and dining to the mix, making it a popular spot for after-work events and celebrations. Our mobile coffee bar is a regular presence in this part of town, pouring cold brew for morning meetings, all-day conferences, and employee appreciation events across the corridor.",
    venues: [
      "CityCentre Houston",
      "Norris Conference Centers (CityCentre)",
      "ConocoPhillips campus event spaces",
      "CPEG Energy Corridor offices",
      "BP Westlake campus",
    ],
    angle: "corporate",
  },
  {
    slug: "cypress",
    name: "Cypress",
    headline: "Coffee Catering in Cypress, TX",
    description:
      "Mobile espresso bar for events in Cypress, Bridgeland, and Towne Lake. Coffee catering for corporate gatherings, HOA events, and celebrations in NW Houston.",
    intro:
      "Cypress is one of Houston's fastest-growing communities, and the master-planned neighborhoods like Bridgeland and Towne Lake are driving that growth. New corporate development is following the rooftops, bringing office space and retail to what used to be mostly residential. Our mobile coffee bar is a hit at Cypress community events, from Bridgeland's Central Park gatherings to grand openings at the Boardwalk at Towne Lake. We bring craft cold brew and specialty drinks to a part of Houston that's building something new.",
    venues: [
      "Boardwalk at Towne Lake",
      "Bridgeland Central Park",
      "Cypress Event Venue (Huffmeister)",
      "Berry Center",
      "Fairfield Inn Cypress Station",
    ],
    angle: "mixed",
    neighborhoods: ["Bridgeland", "Towne Lake", "Cypress Station", "Fairfield"],
  },
  {
    slug: "spring",
    name: "Spring",
    headline: "Coffee Catering in Spring, TX",
    description:
      "Mobile espresso bar for corporate events and private celebrations in Spring, TX. Serving the ExxonMobil Spring campus, Old Town Spring, and Klein area.",
    intro:
      "Spring sits at the intersection of Houston's corporate growth and small-town charm. The ExxonMobil Spring campus brought thousands of workers to the area, and the resulting development along the Grand Parkway has transformed this corner of north Houston. But Old Town Spring still holds onto its character, hosting festivals, markets, and private events in a setting that feels nothing like a corporate park. Our mobile coffee bar serves both worlds. Cold brew for the Monday morning all-hands, specialty drinks for the Saturday afternoon market.",
    venues: [
      "ExxonMobil Spring Campus",
      "Old Town Spring event venues",
      "The Woodhouse (Spring wedding venue)",
      "TopGolf Spring (corporate outings)",
      "Spring Creek Greenway events",
    ],
    angle: "corporate",
  },
  {
    slug: "rice-village",
    name: "Rice Village",
    headline: "Coffee Catering in Rice Village & the Museum District",
    description:
      "Mobile espresso catering near Rice University, the Museum District, and Hermann Park. Perfect for campus events, galas, and private celebrations in Houston.",
    intro:
      "Rice Village and the Museum District sit at the cultural center of Houston. Between Rice University, Hermann Park, and the cluster of world-class museums along Binz and Main, this area draws a crowd that cares about quality and presentation. Our mobile coffee bar fits naturally into the neighborhood's mix of academic events, museum galas, and private celebrations. We've poured cold brew for Rice homecoming events, faculty receptions, and evening fundraisers at venues steps from campus. When the setting is this good, the coffee needs to match.",
    venues: [
      "Rice University campus event spaces",
      "The Museum of Fine Arts, Houston",
      "Hermann Park McGovern Centennial Gardens",
      "Asia Society Texas Center",
      "The Jung Center of Houston",
    ],
    angle: "mixed",
    neighborhoods: ["Rice University", "Museum District", "Hermann Park", "Southgate"],
  },
  {
    slug: "montrose",
    name: "Montrose",
    headline: "Coffee Catering in Montrose, Houston",
    description:
      "Mobile espresso bar for private events, art openings, and celebrations in Montrose, Houston. Craft coffee catering in Houston's most creative neighborhood.",
    intro:
      "Montrose is Houston's creative heartbeat. The galleries along Westheimer, the Menil Collection, and the Rothko Chapel give this neighborhood a cultural density you won't find anywhere else in the city. It's also where Houston goes to celebrate. Our mobile coffee bar has set up at art openings, gallery pop-ups, private loft parties, and nonprofit fundraisers all over the neighborhood. Montrose events tend to have a point of view, and a craft cold brew station fits that energy better than a generic beverage setup ever could.",
    venues: [
      "The Menil Collection",
      "Rothko Chapel",
      "Station Theater",
      "14 Pews (event and screening venue)",
      "Hardy & Nance Studios",
    ],
    angle: "mixed",
    neighborhoods: ["Neartown", "Cherryhurst", "Westheimer corridor"],
  },
];

export function getSuburbBySlug(slug: string): Suburb | undefined {
  return suburbs.find((suburb) => suburb.slug === slug);
}
