

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
        to: "/communications-ai",
        children: [
          { to: "/communications-ai", text: "Overview" },
          { to: "/communications-ai/automate-ai", text: "AutomateAI" },
          { to: "/communications-ai/avatar-ai", text: "AvatarAI" },
          {
            text: "TextAI",
            to: "/communications-ai/text-ai",
            children: [
              { to: "/communications-ai/text-ai", text: "TextAI" },
              { to: "/communications-ai/text-ai/textai-for-good", text: "TextAI for Good Program" }
            ]
          },
          { to: "/communications-ai/voice-ai", text: "VoiceAI" }
        ]
      },
    { to: "/translateai", text: "TranslateAI" },
    { to: "/ailab", text: "The AI Lab" },
    {
      text: "AI Training",
      to: "/training",
      children: [
        { to: "/training", text: "Overview" },
        { to: "/training/catalogue", text: "Course Catalogue" }
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

