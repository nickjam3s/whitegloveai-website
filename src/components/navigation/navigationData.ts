

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
    text: "Services",
    to: "/services",
    children: [
      {
        text: "Consulting",
        to: "/consulting",
        children: [
          { to: "/consulting", text: "Overview" },
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
    {
      text: "Training",
      to: "/training",
      children: [
        { to: "/training", text: "Overview" }
      ]
    },
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

