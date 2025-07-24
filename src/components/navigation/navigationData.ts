

export const navigationLinks = [
  {
    text: "About",
    to: "/aboutus",
    children: [
      { to: "/aboutus", text: "About Us" },
      { to: "/aboutus/strategic-advisors", text: "Strategic Advisors" },
      { to: "/about/apprentice", text: "Apprenticeship Program" }
    ]
  },
  {
    text: "Managed AI Services",
    to: "/maisp",
    children: [
      { to: "/maisp/automateai", text: "AutomateAI" },
      { to: "/maisp/avatarai", text: "AvatarAI" },
      { to: "/maisp/humaniodai", text: "HumanoidAI" },
      { to: "/maisp/mediaai", text: "MediaAI" },
      { to: "/maisp", text: "Overview" },
      { 
        text: "TextAI", 
        to: "/maisp/textai",
        children: [
          { to: "/maisp/textai", text: "TextAI" },
          { to: "/maisp/textai/textaiforgood", text: "TextAI for Good Program" }
        ]
      },
      { to: "/maisp/translateai", text: "TranslateAI" },
      { to: "/maisp/vendorai", text: "VendorAI" },
      { to: "/maisp/voiceai", text: "VoiceAI" },
    ],
  },
  {
    text: "Consulting",
    to: "/vcaio",
    children: [
      { 
        text: "vCAIO",
        to: "/vcaio/chiefaiofficer",
        children: [
          { to: "/vcaio/chiefaiofficer", text: "Overview" },
          { to: "/vcaio/launch", text: "Launchpad" },
          { to: "/vcaio/adopt", text: "Adopt" },
          { to: "/vcaio/enable", text: "Enable" }
        ]
      },
      { to: "/traiga", text: "TRAIGA Triage Center" },
    ],
  },
  {
    text: "Products",
    to: "/products",
    children: [
      {
        text: "AI-AMF",
        to: "http://www.aiamf.ai",
        external: true
      },
      {
        text: "Lucidis",
        to: "https://lucidis.ai",
        external: true
      },
      {
        text: "vCAIO",
        to: "https://vcaio.whitegloveai.com/",
        external: true
      }
    ]
  },
  {
    text: "News",
    to: "https://news.whitegloveai.com",
    external: true
  }
];

