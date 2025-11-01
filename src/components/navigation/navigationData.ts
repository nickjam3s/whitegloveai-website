

export const navigationLinks = [
  {
    text: "About",
    to: "/about-us",
    children: [
      { to: "/about-us", text: "About Us" },
      { to: "/about-us/strategic-advisors", text: "Strategic Advisors" },
      { to: "/about-us/apprenticeship", text: "Apprenticeship Program" }
    ]
  },
  {
    text: "Services",
    to: "/services",
    children: [
      {
        text: "Consulting",
        to: "/consulting",
        children: [
          { to: "/consulting", text: "Overview" },
          { to: "/consulting/launch", text: "Launch" },
          { to: "/consulting/adopt", text: "Adopt" },
          { to: "/consulting/enable", text: "Enable" },
          { to: "/traiga", text: "TRAIGA Triage Center" }
        ]
      },
      {
        text: "CommunicationsAI",
        to: "/communicationsai",
        children: [
          { to: "/communicationsai", text: "Overview" },
          { to: "/communicationsai/automateai", text: "AutomateAI" },
          { to: "/communicationsai/avatarai", text: "AvatarAI" },
          {
            text: "TextAI",
            to: "/communicationsai/textai",
            children: [
              { to: "/communicationsai/textai", text: "TextAI" },
              { to: "/communicationsai/textai/textaiforgood", text: "TextAI for Good Program" }
            ]
          },
          { to: "/communicationsai/voiceai", text: "VoiceAI" }
        ]
      },
    { to: "/translateai", text: "TranslateAI" },
    { to: "/ailab", text: "The AI Lab" },
    { to: "/training", text: "AI Training" },
      { to: "/embodiedai", text: "EmbodiedAI" }
    ]
  },
  {
    text: "GovAI",
    to: "/govai"
  },
  {
    text: "Products",
    to: "/products",
    children: [
      { text: "AI-AMF", to: "http://www.aiamf.ai", external: true },
      { text: "Lucidis", to: "https://lucidis.ai", external: true }
    ]
  },
  {
    text: "News",
    to: "https://news.whitegloveai.com",
    external: true
  }
];

