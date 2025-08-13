

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
      { to: "/maisp", text: "Overview" },
      { to: "/maisp/automateai", text: "AutomateAI" },
      { to: "/maisp/avatarai", text: "AvatarAI" },
      { to: "/maisp/humaniodai", text: "HumanoidAI" },
      { 
        text: "TextAI", 
        to: "/maisp/textai",
        children: [
          { to: "/maisp/textai", text: "TextAI" },
          { to: "/maisp/textai/textaiforgood", text: "TextAI for Good Program" }
        ]
      },
      { to: "/maisp/translateai", text: "TranslateAI" },
      { to: "/maisp/voiceai", text: "VoiceAI" },
    ],
  },
  {
    text: "Consulting",
    to: "/traiga",
    children: [
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
      }
    ]
  },
  {
    text: "News",
    to: "https://news.whitegloveai.com",
    external: true
  }
];

