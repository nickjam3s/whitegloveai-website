
export const navigationLinks = [
  {
    text: "About",
    to: "/aboutus",
    children: [
      { to: "/aboutus", text: "About Us" },
      { to: "/about/apprentice", text: "Apprenticeship Program" }
    ]
  },
  {
    text: "Managed AI Services",
    to: "/maisp",
    children: [
      { 
        text: "TextAI", 
        to: "/maisp/textai",
        children: [
          { to: "/maisp/textai", text: "TextAI" },
          { to: "/maisp/textai/textaiforgood", text: "TextAI for Good Program" }
        ]
      },
      { to: "/maisp/voiceai", text: "VoiceAI" },
      { to: "/maisp/avatarai", text: "AvatarAI" },
      { to: "/maisp/automateai", text: "AutomateAI" },
      { to: "/maisp/vendorai", text: "VendorAI" },
      { to: "/maisp/mediaai", text: "MediaAI" },
      { to: "/maisp/humaniodai", text: "HumanoidAI" },
      
    ],
  },
  {
    text: "Consulting",
    to: "/vcaio",
    children: [
      { to: "/vcaio", text: "vCAIO" },
      { to: "/vcaio/launch", text: "Launchpad" },
      { to: "/vcaio/adopt", text: "Adopt" },
      { to: "/vcaio/enable", text: "Enable" },
    ],
  },
  {
    text: "Products",
    to: "/products",
    children: [
      {
        text: "AI-AMF",
<<<<<<< HEAD
        to: "https://aiamf.ai",
=======
        to: "http://www.aiamf.ai",
>>>>>>> 6c57a00ea16cf71afb0ecf2d08c9a3048f4735d1
        external: true
      },
      {
        text: "AI-Policy",
        to: "https://polaicy.com",
        external: true
      },
      {
        text: "Lucidis",
        to: "https://lucidis.ai",
        external: true
      }
    ]
  },
  {
    text: "The AI Executive",
    to: "https://aiexec.whitegloveai.com/",
    external: true
  },
  {
    text: "Legal",
    children: [
      { to: "/privacy", text: "Privacy Policy" },
      { to: "/terms", text: "Terms of Service" }
    ]
  }
];
