export const SITE_NAME = "DtrenD Hair and Beauty Salon";
export const ADDRESS = "434 Alexandra Avenue, Harrow, HA2 9TW, London";
export const PHONE_PRIMARY = "077 1177 1838";
export const PHONE_SECONDARY = "020 3731 6582";
export const EMAIL = "info@dtrend.uk";
export const INSTAGRAM = "https://instagram.com/dtrend.uk";

export const BUSINESS_HOURS = [
  { day: "Tuesday – Wednesday", hours: "10am – 7pm" },
  { day: "Thursday – Saturday", hours: "10am – 7pm" },
  { day: "Sunday", hours: "10am – 5pm" },
  { day: "Monday", hours: "Closed" },
];

export const TREATWELL_LINK = "https://www.treatwell.co.uk/place/dtrend-hair-and-beauty/";
export const GOOGLE_REVIEWS_LINK = "https://www.google.com/search?sca_esv=8526ead1974f28d5&sxsrf=ANbL-n7JdQBfHUyjJQ2AUGFDceb55GRNjg:1775508188692&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOexVaHkt3-uyTEB0DyUWaj0QoA8fx09tmbHUOm3kkXZaVFtW4BHfiqHCWbVICiQ5DjXKFgIL8HpdL6pKttdKT7hZQ6nvRYTGKteHNvMAXOryYGK9VA%3D%3D&q=DtrenD+Hair+and+Beauty+Salon+Reviews&sa=X&ved=2ahUKEwiy1Ie3i9qTAxXdV0EAHd-lM10Q0bkNegQIKBAH&biw=2327&bih=859&dpr=1.1";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Bridal", href: "/bridal" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/team" },
  { name: "Book Now", href: TREATWELL_LINK, primary: true },
];

export const TEAM = [
  { 
    name: "Dulanjali Alahapperuma", 
    role: "Beauty Therapist & Aesthetics Specialist", 
    image: "/images/team-dulanjali.png",
    bio: "With over 15 years of experience as a Master Makeup Artist and specialist in Aesthetics (NVQ 2, 3 & 5) and Hair Styling, Dulanjali brings an unparalleled level of precision to DtrenD. Her philosophy centers on curating bespoke elegance that honors cultural heritage while embracing pure, contemporary luxury."
  },
];

export const BRIDAL_PACKAGES = [
  {
    title: "Modern Kandyan",
    desc: "Reimagining the heritage of the hill country with sleek silhouettes, contemporary drapes, and ivory silk Osariyas.",
    image: "/images/bridal-kandyan.png",
  },
  {
    title: "Western Bridal",
    desc: "Minimalist elegance and architectural lace for the refined London ceremony. Subtle, sophisticated beauty.",
    image: "/images/bridal-western.png",
  },
  {
    title: "Modern Indian / Hindu",
    desc: "Opulent lehengas and dramatic couture draping for the contemporary maharani. A fusion of culture and luxury.",
    image: "/images/bridal-indian.png",
  },
  {
    title: "Traditional Kandyan",
    desc: "The timeless grandeur of 24k gold threads, seven necklaces of heritage, and meticulous hair artistry.",
    image: "/images/bridal-kandyan.png",
  },
];

export const SERVICE_CATEGORIES = [
  {
    name: "Hair",
    services: [
      { name: "Wash & Blow Dry", price: "from £25" },
      { name: "Dry Cut", price: "from £30" },
      { name: "Full Colour", price: "from £45" },
      { name: "Highlights & Balayage", price: "from £65" },
      { name: "Keratin Treatment", price: "from £120" },
    ],
  },
  {
    name: "Beauty & Skin",
    services: [
      { name: "Eyebrow Threading", price: "£8" },
      { name: "Full Face Threading", price: "£20" },
      { name: "Gold Facial", price: "£55" },
      { name: "Clay Mask Detox", price: "£40" },
      { name: "Cucumber Soothing Facial", price: "£45" },
      { name: "Manicure & Pedicure", price: "from £35" },
    ],
  },
  {
    name: "Aesthetics",
    services: [
      { name: "Botox Lite", price: "from £150" },
      { name: "IV Anti-Aging Drips", price: "from £199" },
      { name: "Skin Rejuvenation", price: "from £85" },
    ],
  },
  {
    name: "Wellness",
    services: [
      { name: "Back & Shoulder Massage", price: "£35" },
      { name: "Full Body Massage", price: "£60" },
      { name: "Yoni Womb Steaming", price: "£45" },
      { name: "Couples Massage", price: "£110" },
    ],
  },
  {
    name: "E-Gift Cards",
    services: [
      { name: "Signature Glow Voucher", price: "£50" },
      { name: "Luxe Reserve Voucher", price: "£100" },
      { name: "Platinum Ritual Voucher", price: "£150" },
    ],
  },
];

export const REVIEWS = [
  {
    name: "Priyanka Sharma",
    service: "Hair Colour",
    text: "Dulanjali is amazing! The care and precision she took with my hair color was truly exceptional. Best salon in Harrow.",
    rating: 5,
  },
  {
    name: "Anjali Gupta",
    service: "Gold Facial",
    text: "Had the Gold Facial and felt like a queen. The products they use are high quality and the environment is so relaxing.",
    rating: 5,
  },
  {
    name: "Rohan Mehra",
    service: "Couple Massage",
    text: "Booked a Couple Massage for our anniversary. The therapist was professional and the atmosphere was perfect. Highly recommend.",
    rating: 5,
  },
  {
    name: "Samadhi Perera",
    service: "Bridal Styling",
    text: "DtrenD handled my bridal hair and makeup perfectly. They understood the cultural nuances of my Kandyan dressing. Exceptional.",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    service: "Highlights & Balayage",
    text: "Absolutely love my new balayage! The team at DtrenD completely understood what I wanted and delivered beyond expectations. The color is so natural.",
    rating: 5,
  },
  {
    name: "Meera Patel",
    service: "Keratin Treatment",
    text: "My hair has never felt this smooth and healthy. The Keratin treatment here is a game changer. Friendly staff and exceptional service from everyone.",
    rating: 5,
  },
];
