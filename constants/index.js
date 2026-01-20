const navLinks = [
    {
        id: "cocktails",
        title: "Cocktails",
    },
    {
        id: "about",
        title: "About Us",
    },
    {
        id: "art",
        title: "The Art",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const cocktailLists = [
    {
        name: "Mai Tai",
        country: "Oakland, CA",
        detail: "160 ml",
        price: "Rs. 499",
    },
    {
        name: "Negroni",
        country: "Florence, Italy",
        detail: "160 ml",
        price: "Rs. 499",
    },
    {
        name: "French 75",
        country: "Paris, France",
        detail: "160 ml",
        price: "Rs. 599",
    },
    {
        name: "Sex on the Beach",
        country: "Miami, FL",
        detail: "160 ml",
        price: "Rs. 499",
    },
];

const mockTailLists = [
    {
        name: "Orange Screwed Up",
        country: "IN",
        detail: "250 ml",
        price: "Rs. 349",
    },
    {
        name: "Passionfruit Mint",
        country: "IN",
        detail: "250 ml",
        price: "Rs. 349",
    },
    {
        name: "Blackout Oh Berry",
        country: "IN",
        detail: "250 ml",
        price: "Rs. 349",
    },
    {
        name: "Cosmopolitan",
        country: "IN",
        detail: "300 ml",
        price: "Rs. 399",
    },
];

const profileLists = [
    {
        imgPath: "/images/profile1.png",
    },
    {
        imgPath: "/images/profile2.png",
    },
    {
        imgPath: "/images/profile3.png",
    },
    {
        imgPath: "/images/profile4.png",
    },
];

const featureLists = [
    "Harmonized to strike",
    "Detailed to the final cut",
    "Cold without apology",
    "Controlled at every stage",
];

const goodLists = [
    "Curated ingredients, uncompromised",
    "Disciplined mixology",
    "Relentless attention to craft",
    "Nothing incidental",
];

const storeInfo = {
    heading: "Where to Find Us",
    address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
    contact: {
        phone: "(555) 987-6543",
        email: "hello@jsmcocktail.com",
    },
};

const openingHours = [
    { day: "Mon–Fri", time: "11:00 am to 2:30 am" },
    { day: "Sat", time: "11:00 am to 4:30 am" },
    { day: "Sun", time: "11:00 am to 3:30 am" },
];

const socials = [
    {
        name: "Instagram",
        icon: "/images/insta.png",
        url: "#",
    },
    {
        name: "X (Twitter)",
        icon: "/images/x.png",
        url: "#",
    },
    {
        name: "Facebook",
        icon: "/images/fb.png",
        url: "#",
    },
];

const allCocktails = [
    {
        id: 1,
        name: "Moscow Mule",
        image: "/images/drink1.png",
        title: "Where citrus snaps and ginger bites",
        description:
            "A crisp fusion of smooth vodka, zesty lime juice, and fiery ginger beer, brightened with fresh lime wedges. Finished with spring mint for a cool, aromatic lift that makes every sip irresistibly refreshing.",
    },
    {
        id: 2,
        name: "Destination Sour",
        image: "/images/drink2.png",
        title: "A soft pour with no intention of behaving",
        description:
            "A silky blend of tequila and Martini Bianco, layered with tart lime, sweet raspberry, and a splash of orange juice. Finished with egg white for a smooth, cloud-like texture and a beautifully balanced citrus lift.",
    },
    {
        id: 3,
        name: "New York Sour",
        image: "/images/drink3.png",
        title: "A slow burn with a mean streak",
        description:
            "Rye whiskey shaken cold with fresh lime juice and simple syrup for a sharp, balanced core. Topped with red wine for a rich, brooding finish that deepens with every sip.",
    },
    {
        id: 4,
        name: "White Russian",
        image: "/images/drink4.png",
        title: "Cream on top, chaos underneath",
        description:
            "A luxurious blend of smooth vodka and rich coffee liqueur, delivering deep, roasted intensity. Finished with a silky layer of Baileys Irish Cream or heavy cream for an irresistibly decadent top.",
    },
];

export {
    navLinks,
    cocktailLists,
    mockTailLists,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    allCocktails,
};