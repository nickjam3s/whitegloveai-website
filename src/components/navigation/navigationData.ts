

export const navigationLinks = [
  {
    text: "About",
    to: "/about-us",
    children: [
      { to: "/about-us", text: "About Us" },
      {
        text: "Jobs",
        to: "/about-us/jobs",
        children: [
          { to: "/about-us/jobs", text: "Careers Overview" },
          { to: "/about-us/apprenticeship", text: "Apprenticeship Program" },
          { to: "/about-us/internship", text: "Internship Program" }
        ]
      }
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
        to: "/maisp/communications-ai",
        children: [
          { to: "/maisp/communications-ai", text: "Overview" },
          {
            text: "TextAI",
            to: "/maisp/communications-ai/text-ai",
            children: [
              { to: "/maisp/communications-ai/text-ai", text: "TextAI" },
              { to: "/maisp/communications-ai/text-ai/textai-for-good", text: "TextAI for Good Program" }
            ]
          },
          { to: "/maisp/communications-ai/voice-ai", text: "VoiceAI" },
          { to: "/maisp/communications-ai/avatar-ai", text: "AvatarAI" },
          { to: "/maisp/communications-ai/automate-ai", text: "AutomateAI" }
        ]
      },
      { to: "/maisp/translate-ai", text: "TranslateAI" },
      { to: "/maisp/ai-lab", text: "The AI Lab" },
      {
        text: "AI Training",
        to: "/maisp/training",
        children: [
          { to: "/maisp/training", text: "Overview" },
          { to: "/maisp/training/government-pack", text: "Government Training Pack" },
          { to: "/maisp/training/catalogue", text: "Course Catalogue" },
          { to: "/maisp/training/hb3512", text: "Texas HB3512 Compliance" }
        ]
      },
      { to: "/maisp/robotics", text: "Robotics" }
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
