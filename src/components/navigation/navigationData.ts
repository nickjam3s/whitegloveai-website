
export const navigationLinks = [
  {
    text: "About",
    to: "/about",
    children: [
      { to: "/about", text: "About Us" },
      { to: "/about/apprentice", text: "Apprenticeship Program" }
    ]
  },
  {
    text: "Managed AI Services",
    to: "/maisp",
    children: [
      { 
        to: "/maisp/textai", 
        text: "TextAI",
        children: [
          { to: "/maisp/textai/textaiforgood", text: "AI for Good Program" }
        ]
      },
      { to: "/maisp/voiceai", text: "VoiceAI" },
      { to: "/maisp/avatarai", text: "AvatarAI" },
      { to: "/maisp/automateai", text: "AutomateAI" },
      { to: "/maisp/humaniodai", text: "HumanoidAI" },
      { to: "/maisp/vendorai", text: "VendorAI" },
    ],
  },
  {
    text: "vCAIO",
    to: "/vcaio",
    children: [
      { to: "/vcaio", text: "vCAIO" },
      { to: "/vcaio/launch", text: "Launchpad" },
      { to: "/vcaio/adopt", text: "Adopt" },
      { to: "/vcaio/enable", text: "Enable" },
    ],
  },
  {
    text: "AI-AMF",
    href: "https://aiamf.ai",
    external: true
  },
  {
    text: "The AI Executive",
    href: "https://aiexec.whitegloveai.com",
    external: true
  }
];

