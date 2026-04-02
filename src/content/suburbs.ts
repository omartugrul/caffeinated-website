export interface Suburb {
  slug: string;
  name: string;
  headline: string;
  description: string;
  subtitle: string;
  intro: string;
  areaType: "City" | "Place";
}

export const suburbs: Suburb[] = [
  {
    slug: "the-woodlands",
    name: "The Woodlands",
    headline: "Coffee Catering in The Woodlands",
    description:
      "Mobile espresso bar and coffee catering for corporate events, weddings, and private parties in The Woodlands, TX. Book a barista today.",
    subtitle:
      "Mobile coffee bar for corporate events, weddings, and private functions in The Woodlands and the Research Forest corridor.",
    intro:
      "The Woodlands is packed with corporate campuses and event venues, from the Waterway district to Research Forest. Whether you're planning an all-hands, a client appreciation event, or a wedding reception, we bring the full coffee bar to you. All setup and teardown handled, travel included.",
    areaType: "City",
  },
  {
    slug: "katy",
    name: "Katy",
    headline: "Coffee Catering in Katy",
    description:
      "Professional espresso catering for corporate events and celebrations in Katy, TX. Serving LaCenterra, Cinco Ranch, and beyond.",
    subtitle:
      "Coffee catering for office events, celebrations, and private parties across Katy, Cinco Ranch, and the LJ Parkway corridor.",
    intro:
      "Katy keeps growing, and so does the demand for great event experiences out west. From office parks along LJ Parkway to community celebrations in Cinco Ranch, we bring craft cold brew and a full coffee bar setup to your event. You pick the date, we handle everything else.",
    areaType: "City",
  },
  {
    slug: "sugar-land",
    name: "Sugar Land",
    headline: "Coffee Catering in Sugar Land",
    description:
      "Mobile espresso bar and coffee catering for corporate events and celebrations in Sugar Land, TX. Serving offices near Fluor, SLB, and Sugar Land Town Square.",
    subtitle:
      "Coffee catering for corporate events, private parties, and community celebrations in Sugar Land and Fort Bend County.",
    intro:
      "Sugar Land has a strong corporate presence and a community that knows how to celebrate. Whether it's a team event at the office, a gathering at Town Square, or a private party in one of the master-planned neighborhoods, our mobile coffee bar is built for it. Professional barista, full setup, zero hassle on your end.",
    areaType: "City",
  },
  {
    slug: "pearland",
    name: "Pearland",
    headline: "Coffee Catering in Pearland",
    description:
      "Mobile espresso and coffee catering for events in Pearland, TX. Serving Shadow Creek Ranch, Silverlake, and the growing Pearland business corridor.",
    subtitle:
      "Mobile coffee bar for events in Pearland, Shadow Creek Ranch, and the 288 corridor.",
    intro:
      "Pearland is one of Houston's fastest-growing suburbs, and events here deserve more than a basic coffee setup. From corporate open houses to neighborhood celebrations in Shadow Creek, we bring craft cold brew and specialty drinks straight to your venue. All supplies included, all logistics handled.",
    areaType: "City",
  },
  {
    slug: "clear-lake",
    name: "Clear Lake",
    headline: "Coffee Catering in Clear Lake & Bay Area Houston",
    description:
      "Mobile espresso bar for corporate events, NASA contractor meetings, and celebrations in Clear Lake, Webster, and League City, TX.",
    subtitle:
      "Coffee catering for corporate events and celebrations in Clear Lake, Webster, League City, and Bay Area Houston.",
    intro:
      "The Bay Area Houston community runs on brainpower, from NASA and the aerospace contractors to the growing business presence along the Gulf Freeway. Our mobile coffee bar serves corporate events, private celebrations, and everything in between across Clear Lake, Webster, League City, and Kemah. We bring the full setup to you.",
    areaType: "Place",
  },
  {
    slug: "downtown",
    name: "Downtown Houston",
    headline: "Coffee Catering in Downtown Houston",
    description:
      "Mobile espresso bar for office events, conferences, and corporate gatherings in downtown Houston. Serving the Theater District, GRB, and Main Street corridor.",
    subtitle:
      "Mobile coffee bar for office events, conferences, and corporate gatherings in downtown Houston.",
    intro:
      "Downtown moves fast, and your event vendor should too. We set up in office lobbies, conference floors, and event spaces across downtown Houston. Craft cold brew and specialty drinks, served by a professional barista, with full setup and teardown. No permits to worry about, no coordination headaches.",
    areaType: "Place",
  },
  {
    slug: "midtown",
    name: "Midtown",
    headline: "Coffee Catering in Midtown Houston",
    description:
      "Mobile espresso catering for private events, office parties, and celebrations in Midtown Houston. Serving the Bagby Street corridor.",
    subtitle:
      "Coffee catering for private events, office parties, and celebrations in Midtown Houston.",
    intro:
      "Midtown has a mix of creative offices, coworking spaces, and event venues that make it one of Houston's most popular spots for gatherings. Our mobile coffee bar fits right in, whether it's a morning product launch, an afternoon team appreciation, or an evening celebration. We bring everything and handle all the logistics.",
    areaType: "Place",
  },
  {
    slug: "heights",
    name: "The Heights",
    headline: "Coffee Catering in The Heights",
    description:
      "Mobile espresso bar for weddings, private parties, and corporate events in The Heights, Houston. Craft coffee catering along 19th Street and White Oak.",
    subtitle:
      "Mobile coffee bar for weddings, private parties, and events along 19th Street and White Oak.",
    intro:
      "The Heights is one of Houston's most popular neighborhoods for weddings, private events, and gatherings with character. The venues here have a vibe, and the coffee should match. Our mobile coffee bar brings craft cold brew and specialty drinks with a setup that fits the setting. Professional, effortless, and designed to impress your guests.",
    areaType: "Place",
  },
  {
    slug: "galleria",
    name: "Galleria / Uptown",
    headline: "Coffee Catering in the Galleria & Uptown Houston",
    description:
      "Mobile espresso bar for corporate events and private parties in the Galleria, Uptown, and Post Oak corridor. Book a barista today.",
    subtitle:
      "Coffee catering for corporate events and private parties in the Galleria, Uptown, and Post Oak corridor.",
    intro:
      "The Galleria and Uptown area is home to some of Houston's biggest corporate offices and most polished event spaces. When you're hosting clients or treating your team, the details matter. Our mobile coffee bar delivers craft cold brew and specialty drinks with the kind of presentation that fits the setting. Full setup, professional barista, everything included.",
    areaType: "Place",
  },
  {
    slug: "memorial",
    name: "Memorial",
    headline: "Coffee Catering in Memorial Houston",
    description:
      "Mobile espresso catering for corporate offices, community events, and private parties in Memorial, Memorial City, and the I-10 corridor in Houston, TX.",
    subtitle:
      "Mobile coffee bar for corporate offices, community events, and private parties along the Memorial I-10 corridor.",
    intro:
      "Memorial stretches along the I-10 corridor with a strong mix of corporate offices and established neighborhoods. From team events in Memorial City office parks to private celebrations and HOA gatherings, we bring our full coffee bar setup to you. Professional barista, all supplies, setup and teardown handled.",
    areaType: "Place",
  },
  {
    slug: "energy-corridor",
    name: "Energy Corridor",
    headline: "Coffee Catering in Houston's Energy Corridor",
    description:
      "Mobile espresso bar for corporate events and office gatherings in Houston's Energy Corridor. Serving BP, ConocoPhillips, Shell campuses, and CityCentre.",
    subtitle:
      "Coffee catering for corporate events and office gatherings along Eldridge Parkway and the Energy Corridor.",
    intro:
      "The Energy Corridor is one of Houston's densest pockets of corporate offices. Morning meetings, all-day conferences, employee appreciation events, team celebrations at CityCentre -- whatever the occasion, our mobile coffee bar brings craft cold brew and specialty drinks right to your building. We handle every detail so you can focus on your event.",
    areaType: "Place",
  },
  {
    slug: "cypress",
    name: "Cypress",
    headline: "Coffee Catering in Cypress, TX",
    description:
      "Mobile espresso bar for events in Cypress, Bridgeland, and Towne Lake. Coffee catering for corporate gatherings, HOA events, and celebrations in NW Houston.",
    subtitle:
      "Mobile coffee bar for events in Cypress, Bridgeland, Towne Lake, and northwest Houston.",
    intro:
      "Cypress is growing fast, and the community events are growing with it. From corporate gatherings and grand openings to HOA events and private celebrations in Bridgeland and Towne Lake, our mobile coffee bar brings craft cold brew and a professional setup to northwest Houston. All supplies included, travel included.",
    areaType: "City",
  },
  {
    slug: "spring",
    name: "Spring",
    headline: "Coffee Catering in Spring, TX",
    description:
      "Mobile espresso bar for corporate events and private celebrations in Spring, TX. Serving the ExxonMobil Spring campus, Old Town Spring, and Klein area.",
    subtitle:
      "Coffee catering for corporate events, private celebrations, and community gatherings in Spring and Klein.",
    intro:
      "Spring has a unique mix of major corporate campuses and small-town community events. Whether you're planning a large office gathering, a weekend market, or a private celebration, our mobile coffee bar brings craft cold brew and specialty drinks with a full professional setup. We come to you anywhere in the Spring and Klein area.",
    areaType: "City",
  },
  {
    slug: "rice-village",
    name: "Rice Village",
    headline: "Coffee Catering in Rice Village & the Museum District",
    description:
      "Mobile espresso catering near Rice University, the Museum District, and Hermann Park. Perfect for campus events, galas, and private celebrations in Houston.",
    subtitle:
      "Mobile coffee bar for campus events, galas, and private celebrations near Rice University and the Museum District.",
    intro:
      "Rice Village and the Museum District draw a crowd that cares about quality and presentation. From campus events and faculty receptions to museum galas and private celebrations, our mobile coffee bar fits naturally into the neighborhood. Craft cold brew, specialty drinks, and a setup that matches the setting.",
    areaType: "Place",
  },
  {
    slug: "montrose",
    name: "Montrose",
    headline: "Coffee Catering in Montrose, Houston",
    description:
      "Mobile espresso bar for private events, art openings, and celebrations in Montrose, Houston. Craft coffee catering in Houston's most creative neighborhood.",
    subtitle:
      "Coffee catering for private events, art openings, and celebrations in Montrose.",
    intro:
      "Montrose is Houston's most creative neighborhood, and the events here tend to have a point of view. Art openings, gallery pop-ups, nonprofit fundraisers, private celebrations -- our mobile coffee bar fits that energy. Craft cold brew and specialty drinks with a clean, professional setup that works in any venue.",
    areaType: "Place",
  },
];

export function getSuburbBySlug(slug: string): Suburb | undefined {
  return suburbs.find((suburb) => suburb.slug === slug);
}
