/**
 * Harinakshi Baishya - Social Media & Content Strategist Portfolio
 * Data Layer: Showcase Items, 30-Day Content Calendar, Measurement Framework, Case Studies, Trends, and Audit Checklist
 * 
 * NOTE: All campaign projects and samples are clearly labeled as speculative work,
 * portfolio concepts, or independent analyses for candidate evaluation.
 * NO fabricated performance statistics or fake follower numbers are included.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Harinakshi Baishya",
    title: "Social Media & Content Strategist",
    heroHeadline: "I turn ideas into content people want to stop, read, share and remember.",
    heroSubtext: "Social media-focused creative work across content strategy, copywriting, campaign concepts, audience research and content planning.",
    bio: "I'm Harinakshi, a social media and content-focused creative interested in building content that is useful, relatable and worth engaging with. I enjoy researching audiences, finding content opportunities, developing ideas and turning them into platform-specific posts, campaigns and content plans.",
    speculativeDisclaimer: "Selected speculative work",
    contactEmailPlaceholder: "[Contact email available upon direct recruiter inquiry]",
    contactLinkedInPlaceholder: "[LinkedIn profile available upon direct recruiter inquiry]"
  },

  whatIWorkOn: [
    "Social Media Content",
    "Content Strategy",
    "Copywriting",
    "Campaign Concepts",
    "Audience Research",
    "Trend Research",
    "Content Calendars",
    "Social Media Audits",
    "Basic Performance Analysis"
  ],

  workingStyles: [
    {
      title: "CURIOUS",
      tagline: "Audience-first listening",
      description: "I research audiences, trends and active community conversations before drafting content."
    },
    {
      title: "STRATEGIC",
      tagline: "Purpose over posting",
      description: "Every content idea should have a purpose, a defined pillar, and a clear next step."
    },
    {
      title: "CREATIVE",
      tagline: "Fresh hooks on familiar ideas",
      description: "I look for fresh, culturally resonant ways to communicate brand values without relying on clichés."
    },
    {
      title: "DATA-AWARE",
      tagline: "Measuring what matters",
      description: "I use signals like saves, shares, and watch time to understand what to refine and double down on."
    }
  ],

  // Section 7: "From Brief to Post" Content Creation Workflow
  workflowSteps: [
    {
      number: "01",
      title: "BRIEF",
      question: "What are we communicating?",
      description: "Identify the core brand message, key product feature, or campaign objective. Strip away jargon so the message is crystal clear."
    },
    {
      number: "02",
      title: "AUDIENCE",
      question: "Who needs to hear it?",
      description: "Define the specific tension, routine, or question the viewer has. Focus on their perspective rather than the brand's ego."
    },
    {
      number: "03",
      title: "HOOK",
      question: "Why should they stop scrolling?",
      description: "Craft an opening line or visual frame that sparks immediate curiosity, empathy, or tension within the first 2 seconds."
    },
    {
      number: "04",
      title: "CONTENT",
      question: "What is the clearest way to communicate it?",
      description: "Choose the native platform format: a 5-slide carousel for education, a punchy Reel for demonstration, or interactive Stories for conversation."
    },
    {
      number: "05",
      title: "CTA",
      question: "What should they do next?",
      description: "Give a single, low-friction next step: bookmarking for later, tagging a peer, voting in a poll, or exploring a link in bio."
    },
    {
      number: "06",
      title: "LEARN",
      question: "What does the response tell us?",
      description: "Analyze qualitative comments and quantitative saves/shares to understand what resonated and improve the next content sprint."
    }
  ],

  // Section 1: How I Would Measure a Campaign (No fabricated numbers)
  campaignMeasurement: {
    heading: "How I Would Measure a Campaign",
    subtext: "I focus on the metrics that connect content performance to the campaign objective.",
    metrics: [
      {
        name: "REACH",
        question: "What it tells me:",
        explanation: "How many people were exposed to the content. Useful for assessing top-of-funnel campaign awareness and audience size.",
        icon: "users"
      },
      {
        name: "ENGAGEMENT",
        question: "What it tells me:",
        explanation: "Whether people are interacting with the content through likes, comments, and sticker taps rather than passively scrolling past.",
        icon: "message-circle"
      },
      {
        name: "SAVES",
        question: "What it tells me:",
        explanation: "Whether the content is useful enough to return to. My primary signal for high-value educational carousels and checklists.",
        icon: "bookmark"
      },
      {
        name: "SHARES",
        question: "What it tells me:",
        explanation: "Whether the content is valuable or relatable enough to pass along to a friend or coworker via DM.",
        icon: "share-2"
      },
      {
        name: "WATCH TIME",
        question: "What it tells me:",
        explanation: "Whether short-form video is holding audience attention past the opening hook and through the key takeaway.",
        icon: "clock"
      },
      {
        name: "PROFILE VISITS",
        question: "What it tells me:",
        explanation: "Whether content creates enough interest to explore the brand bio, story highlights, and pinned posts.",
        icon: "user-check"
      },
      {
        name: "CTR (Click-Through Rate)",
        question: "What it tells me:",
        explanation: "Whether the content is driving people toward the intended next step, such as a challenge signup or landing page.",
        icon: "mouse-pointer"
      }
    ],
    process: ["POST", "MEASURE", "LEARN", "IMPROVE"]
  },

  // Section 2: Hook Writing Comparison (Replacing 36% statistic)
  hookComparison: {
    label: "Hook-writing example",
    principle: "Strong hooks give viewers a reason to keep watching.",
    weaker: {
      hook: "Here are some social media tips.",
      why: "Generic and passive. Gives the reader no immediate tension, stakes, or reason to stop scrolling."
    },
    stronger: {
      hook: "Your content isn't boring — your first 2 seconds might be.",
      why: "Addresses a real creator anxiety directly, reframes the problem, and creates immediate curiosity."
    }
  },

  // Section 5: Glossier Independent Audit (Visual & Observation -> Opportunity -> Content Idea)
  glossierAudit: {
    disclaimer: "This analysis is for portfolio demonstration purposes and is not affiliated with or produced for Glossier.",
    label: "Independent Portfolio Analysis",
    pillars: [
      {
        category: "PROFILE",
        observation: "Strong, iconic visual brand identity with recognizable pink avatar and clean handle.",
        opportunity: "Potential opportunity to direct bio traffic toward an interactive routine finder rather than a generic shop link.",
        contentIdea: "'Find Your 2-Minute Morning Routine' — an interactive Story quiz matching skin types to 3 core products."
      },
      {
        category: "CONTENT",
        observation: "Feed features high-gloss studio packshots, which look editorial but feel less tactile.",
        opportunity: "Could test showing real product wear in natural daylight across varied skin textures and weather conditions.",
        contentIdea: "'Boy Brow vs 8 Hours of Rain & Commute' — an honest, unedited durability test on short-form video."
      },
      {
        category: "ENGAGEMENT",
        observation: "Followers frequently ask shade-matching questions and reminisce about discontinued favorites in comment threads.",
        opportunity: "I would explore turning recurring comment questions directly into video responses and community voting formats.",
        contentIdea: "'Community Vault: Vote which archived shade makes a guest return' — interactive story poll series."
      },
      {
        category: "DISCOVERY",
        observation: "Strong organic brand mentions on TikTok, but captions on Instagram rarely target practical search queries.",
        opportunity: "Potential opportunity to optimize captions and spoken video text with specific beauty search terms.",
        contentIdea: "'How to apply Cloud Paint for your specific cheekbone shape' — search-first educational tutorial."
      },
      {
        category: "CONVERSION",
        observation: "Call-to-actions are often soft ('Shop now via link in bio') without highlighting bundle utility.",
        opportunity: "Could explore pairing step-by-step routine carousels with beginner-friendly 3-product curated sets.",
        contentIdea: "'The 3-Step No-Makeup Routine Breakdown: What you actually need vs what is optional.'"
      }
    ]
  },

  tools: [
    { name: "Canva", category: "Visual Design & Layout", status: "Daily Workflow", icon: "palette" },
    { name: "Instagram", category: "Native Creation & Insights", status: "Daily Workflow", icon: "instagram" },
    { name: "LinkedIn", category: "Thought Leadership & Copy", status: "Daily Workflow", icon: "linkedin" },
    { name: "Google Trends", category: "Search & Topic Research", status: "Daily Workflow", icon: "trending-up" },
    { name: "Meta Business Suite", category: "Scheduling & Publishing", status: "Daily Workflow", icon: "layout-dashboard" },
    { name: "CapCut", category: "Reel & Short-form Editing", status: "Daily Workflow", icon: "film" },
    { name: "Google Sheets", category: "Calendars & Analytics Logging", status: "Daily Workflow", icon: "table" },
    { name: "Notion", category: "Content Planning & Strategy", status: "Daily Workflow", icon: "book-open" },
    { name: "ChatGPT / AI Tools", category: "Brainstorming & Angle Exploration", status: "Familiar with", icon: "sparkles" }
  ],

  copywritingSamples: [
    {
      type: "EDUCATIONAL",
      label: "Educational Authority",
      hook: "Your audience isn't ignoring you. They may just not understand why they should care.",
      body: "When engagement stalls, our first instinct is to blame the algorithm. But most of the time, the message was written for the brand's ego, not the reader's day-to-day tension. The pivot? Swap 'look what we built' for 'here is the 10-minute fix for what annoyed you today'.",
      cta: "Save this for your next content planning session.",
      whyItWorks: "Bypasses defensive reactions by reframing a creator problem into an actionable shift in reader psychology."
    },
    {
      type: "RELATABLE",
      label: "Community & Humor",
      hook: "POV: You spent 2 hours making the post and someone says, 'Just make it viral.'",
      body: "Nothing tests patience quite like the phrase 'can we make it trend by 4 PM?' Great content isn't lightning in a bottle—it's consistent audience empathy, crisp visual hooks, and zero fluff.",
      cta: "Tell us your experience below in the comments.",
      whyItWorks: "Uses shared industry friction and situational humor to spark spontaneous peer comments and direct message forwards."
    },
    {
      type: "PROMOTIONAL",
      label: "Value-Led Selling",
      hook: "Good content gets attention. Useful content earns a reason to come back.",
      body: "Promotion doesn't have to feel like an interruption. When our product launch delivers 80% practical utility and 20% solution spotlight, audience resistance drops and genuine curiosity takes over.",
      cta: "Which one would you try first?",
      whyItWorks: "Reduces sales resistance by anchoring the pitch in generous educational value before introducing the solution."
    },
    {
      type: "STORYTELLING",
      label: "Brand Narrative",
      hook: "Every brand has a story. The challenge is making people want to hear the next sentence.",
      body: "We don't remember facts; we remember conflict, resolve, and human stakes. Behind every formulation or feature is a late-night debate, a discarded draft, or a founder refusing to compromise on quality.",
      cta: "Send this to someone who needs to hear it today.",
      whyItWorks: "Builds emotional narrative momentum and positions the reader as a fellow insider in the creative process."
    }
  ],

  trends: [
    {
      trend: "POV Format",
      category: "Perspective Framing",
      idea: "POV: You finally stop creating content for everyone.",
      execution: "Short 7-second Reel showing a creator deleting generic inspirational quotes and replacing them with 3 specific customer problems.",
      explanation: "Trends should support the brand message rather than replace it. POV works when it puts the target follower directly into an instantly recognizable scenario."
    },
    {
      trend: "Silent Review / ASMR Visual Style",
      category: "Sensory Demonstration",
      idea: "Silent Product Review: What 7 days of morning calm actually feels like.",
      execution: "Low-distraction, text-on-screen Reel with natural ambient sounds (coffee pouring, notebook opening) letting aesthetic clarity speak.",
      explanation: "Cuts through noisy, hyper-edited feeds by offering deliberate quiet and tactile product transparency."
    },
    {
      trend: "Green Screen Commentary",
      category: "Expert Breakdown",
      idea: "Breaking down why this everyday lifestyle ad stopped our scroll.",
      execution: "Presenter stands in front of a screenshot of an effective content hook, pointing out the exact typography choices and psychological tension driving the comments.",
      explanation: "Positions the strategist as an authoritative, generous educator dissecting real-world culture."
    },
    {
      trend: "We Tested X So You Don't Have To",
      category: "Empathetic Curation",
      idea: "We tested 4 common morning wellness habits so you don't waste your time.",
      execution: "Fast carousel comparing cold showers, 5-minute journaling, morning sunlight, and high-protein breakfasts, scored by realistic feasibility.",
      explanation: "Saves the audience cognitive effort, creating high-intent saves and bookmarking behavior."
    }
  ],

  // 12 Visual Content Playground Items (Items A through L)
  contentPlayground: [
    {
      id: "cp-1",
      code: "A",
      title: "5 Signs Your Brand Needs a Better Content Strategy",
      platform: "Instagram",
      category: "Instagram",
      format: "Carousel (5 Slides)",
      objective: "Education",
      shortDesc: "A 5-slide visual audit helping small brands diagnose why their social media feels chaotic.",
      hook: "5 Signs Your Brand Needs a Better Content Strategy",
      slides: [
        { slideNum: 1, text: "5 Signs Your Brand Needs a Better Content Strategy", note: "Cover Slide • Clean Contrast" },
        { slideNum: 2, text: "You're posting without a clear audience in mind.", note: "Pillar: Audience Clarity" },
        { slideNum: 3, text: "Every post feels like it was designed by a completely different brand.", note: "Pillar: Visual Consistency" },
        { slideNum: 4, text: "You're creating content, but not creating conversations.", note: "Pillar: Engagement Depth" },
        { slideNum: 5, text: "Your content needs a system, not just more posts.", note: "The Solution & Strategic Takeaway" }
      ],
      caption: `Swipe through to audit your content before your next batch sprint 📲\n\nMost brand accounts don't have a content problem—they have a system problem.\n\nWhen you stop treating social like a daily chore and start treating it like a media publication with clear recurring pillars, three things happen:\n1. Your audience knows what to expect\n2. Your team saves 5+ hours of weekly planning time\n3. Your comments shift from generic emojis to genuine questions\n\nWhich of these 5 signs hits closest to home right now?\n\n#ContentStrategy #SocialMediaTips #AudienceFirst #BrandBuilding #SocialMediaExecutive`,
      cta: "Save this for your next content planning session.",
      audience: "Brand owners, marketing coordinators, and social media managers looking for structure.",
      whyItWorks: "Diagnoses pain points with clarity and zero fluff, making it an immediate candidate for saves and bookmarking.",
      visualType: "carousel",
      badge: "Educational Carousel"
    },
    {
      id: "cp-2",
      code: "B",
      title: "Stop Posting. Start Communicating.",
      platform: "Instagram",
      category: "Instagram",
      format: "Carousel (5 Slides)",
      objective: "Engagement",
      shortDesc: "Challenging the daily posting burnout myth with a conversation-first engagement model.",
      hook: "Stop Posting. Start Communicating.",
      slides: [
        { slideNum: 1, text: "Stop Posting. Start Communicating.", note: "Cover Slide • Editorial Headline" },
        { slideNum: 2, text: "Posting 7 days a week to zero replies isn't consistency.", note: "The Tension Point" },
        { slideNum: 3, text: "A broadcast talks AT people. Social content talks WITH people.", note: "The Perspective Shift" },
        { slideNum: 4, text: "Ask questions your audience actually has an opinion on.", note: "Actionable Recommendation" },
        { slideNum: 5, text: "Cut your volume in half. Double the conversation depth.", note: "The Core Rule" }
      ],
      caption: `Are you posting to check off a calendar box, or to open a conversation?\n\nConsistency on social media isn't just about output volume. True consistency is:\n• Consistently clear positioning\n• Consistently showing up in the comments\n• Consistently respecting your audience's attention\n\nIf you cut your output in half this week and doubled the thought behind each caption, what would happen to your community?\n\nDrop your honest take below 👇\n\n#CommunityBuilding #SocialMediaStrategy #BrandVoice #EngagementTips`,
      cta: "Which habit is your team shifting this month?",
      audience: "Community managers, lifestyle brands, and marketing leaders.",
      whyItWorks: "Challenges an industry sacred cow with empathy, sparking spontaneous comments and debate.",
      visualType: "carousel",
      badge: "Strategy Carousel"
    },
    {
      id: "cp-3",
      code: "C",
      title: "POV: You Finally Understand Your Audience",
      platform: "Reels",
      category: "Reels",
      format: "Reel (12 Seconds)",
      objective: "Awareness",
      shortDesc: "Relatable short-form video capturing the moment content shifts from generic quotes to real problem-solving.",
      hook: "POV: You stopped creating content for everyone.",
      storyboard: [
        { scene: "Scene 01 (0-3s)", visual: "Creator staring at a generic inspirational quote graphic with 12 likes, hitting delete.", onScreenText: "Deleting the quote nobody asked for..." },
        { scene: "Scene 02 (4-8s)", visual: "Opening real customer DMs and writing down the exact problem sentence keeping them up at night.", onScreenText: "Writing down the ONE problem they actually asked about..." },
        { scene: "Scene 03 (9-12s)", visual: "Publishing a 10-second solution; phone screen lights up with genuine notifications.", onScreenText: "When you speak to one specific problem, comments roll in." }
      ],
      audio: "Original Audio • Vela Focus Ambient",
      caption: `That moment when the lightbulb clicks 💡\n\nThe second you stop trying to sound 'professional' and start sounding helpful, comments start rolling in.\n\nDouble tap if you've rewritten a caption 5 times today to get the hook right.\n\n#SocialMediaHumor #ContentCreator #AudienceInsight #MarketingReels`,
      cta: "Know your audience. Then create for them.",
      audience: "Social media executives and creative agency creators.",
      whyItWorks: "Uses relatable creator friction and concise visual comedy to drive peer forwards and profile visits.",
      visualType: "reel",
      badge: "Short-Form Reel"
    },
    {
      id: "cp-4",
      code: "D",
      title: "3 Content Mistakes Brands Make",
      platform: "Reels",
      category: "Reels",
      format: "Reel (24 Seconds)",
      objective: "Education",
      shortDesc: "Rapid-fire visual dissection of why viewers scroll away within the opening 2 seconds.",
      hook: "If your short-form video stops getting views after 2 seconds, you're probably making one of these 3 mistakes.",
      storyboard: [
        { scene: "Scene 01 (0-6s)", visual: "Talking-head creator says 'Hi guys so today...' vs Jump cut directly into the finished solution.", onScreenText: "Mistake 1: The 'Hi guys' intro trap. Jump directly into the takeaway." },
        { scene: "Scene 02 (7-14s)", visual: "Screen filled with 45 words of text in tiny font that disappears before anyone can read it.", onScreenText: "Mistake 2: Wall of text. Keep on-screen text under 8 words per slide." },
        { scene: "Scene 03 (15-24s)", visual: "Video ends with awkward silence vs an intriguing conversational question.", onScreenText: "Mistake 3: Weak sign-off. End with a prompt they actually want to answer." }
      ],
      audio: "Original Audio • Crisp Beat",
      caption: `Let's fix your short-form retention curve 📈\n\n1. The 'Intro Trap': Saying 'Hey guys so today...' instead of showing the outcome immediately.\n2. Wall of Text: Putting 40 words on screen with 0.8s reading time.\n3. Weak Sign-off: Ending with 'Like for part 2' instead of an intriguing conversational question.\n\nSave this checklist before shooting your next batch!\n\n#ReelsTips #ShortFormVideo #ContentCreation #VideoStrategy #SocialMediaManager`,
      cta: "Save this checklist before shooting your next batch.",
      audience: "Brand marketing teams experimenting with TikTok and Instagram Reels.",
      whyItWorks: "Offers immediate diagnostic clarity with side-by-side good vs bad visual demonstrations.",
      visualType: "reel",
      badge: "Diagnostic Reel"
    },
    {
      id: "cp-5",
      code: "E",
      title: "Instagram Story Sequence (3-Part)",
      platform: "Stories",
      category: "Stories",
      format: "Story Sequence (3 Screens)",
      objective: "Engagement",
      shortDesc: "A connected 3-part Story series training the algorithm through frictionless poll and question stickers.",
      hook: "This or That? Quick morning debate before our editorial meeting.",
      storyScreens: [
        { screen: 1, title: "Screen 1: The Context", text: "This or That? Quick team debate before our morning planning meeting...", sticker: "Tap to Vote →" },
        { screen: 2, title: "Screen 2: The Interactive Poll", text: "Educational deep dives OR relatable day-in-the-life content?", sticker: "Poll Sticker: [Deep Dives 🧠] vs [Relatable ☕]" },
        { screen: 3, title: "Screen 3: The Question Box", text: "Tell us what you want to see next on our feed this month!", sticker: "Question Box: 'Drop the #1 content challenge you're solving this week 👇'" }
      ],
      caption: `Interactive Instagram Story Sequence:\n\nSlide 1: Setting the conversational context.\nSlide 2: Frictionless 1-tap poll sticker.\nSlide 3: Open question box collecting direct audience vocabulary for future calendar posts.\n\nOutcome: High sticker taps signal account affinity to the algorithm while providing crowdsourced topics.`,
      cta: "Tap your choice on the sticker above!",
      audience: "Followers looking for approachable, low-friction interactions.",
      whyItWorks: "Progressive engagement: starts with a simple binary choice (Slide 2) before asking for open text (Slide 3).",
      visualType: "story",
      badge: "Interactive Stories"
    },
    {
      id: "cp-6",
      code: "F",
      title: "Consistency Doesn't Mean Posting Every Day",
      platform: "LinkedIn",
      category: "LinkedIn",
      format: "Text Post",
      objective: "Awareness",
      shortDesc: "Thought leadership post dissecting sustainable professional cadence over algorithmic burnout.",
      hook: "Consistency doesn't mean posting every day.",
      linkedInPost: `Consistency doesn't mean posting every day.

It means:
• Consistently clear positioning
• Consistently useful takeaways
• Consistently showing up in the comments

Posting 7 shallow updates a week burns out your team and trains your audience to scroll past.

Posting 3 thoughtful, well-researched pieces builds a reputation people respect.

Quality compounds. Noise fades.

What does consistency look like for your brand?`,
      caption: `Consistency on social media has been confused with frequency of output.\n\nTrue consistency isn't about rushing out an update every 24 hours. It's about ensuring that every single time someone sees your name in their feed, they know it will be worth their 30 seconds.\n\nWhat does consistency look like for your brand?`,
      cta: "What does consistency look like for your brand?",
      audience: "Marketing leaders, founders, and creative strategists.",
      whyItWorks: "Strong bullet-point cadence and conversational closing question make it easy to read and discuss.",
      visualType: "linkedin",
      badge: "LinkedIn Post"
    },
    {
      id: "cp-7",
      code: "G",
      title: "From Followers to Community",
      platform: "LinkedIn",
      category: "LinkedIn",
      format: "Carousel (5 Slides)",
      objective: "Education",
      shortDesc: "A strategic slide deck showing how passive viewers transform into vocal brand advocates.",
      hook: "From Followers to Community: The 4-Stage Content Moat",
      slides: [
        { slideNum: 1, text: "From Followers to Community: The 4-Stage Content Moat", note: "Cover Slide • Strategic Whitepaper Style" },
        { slideNum: 2, text: "Stage 1: The Scroller\nSees your post in their feed, consumes passively, moves on.", note: "Top of Funnel • Reach" },
        { slideNum: 3, text: "Stage 2: The Saver\nFinds practical utility in your framework and bookmarks it for later.", note: "Utility & Authority" },
        { slideNum: 4, text: "Stage 3: The Contributor\nShares their own perspective or question in your comments.", note: "Community Dialogue" },
        { slideNum: 5, text: "Stage 4: The Advocate\nTags colleagues, forwards your post via DM, and defends your POV.", note: "Brand Equity Moat" }
      ],
      caption: `Followers are a vanity metric. Community members are a brand moat.\n\nMost brand content is designed exclusively for Stage 1 (broad views). The most resilient brands design content specifically to nurture Stages 2 through 4.\n\nWhich stage is your current content designed for?`,
      cta: "Which stage is your current content designed for?",
      audience: "Brand directors and social media executives.",
      whyItWorks: "Gives marketing teams a concrete shared vocabulary to assess the depth of their content.",
      visualType: "carousel",
      badge: "LinkedIn Carousel"
    },
    {
      id: "cp-8",
      code: "H",
      title: "Product Storytelling: The Morning Focus Elixir",
      platform: "Instagram",
      category: "Instagram",
      format: "Static Post + Narrative",
      objective: "Conversion",
      shortDesc: "Demonstrating how to sell the story, human stakes, and ritual behind a product rather than feature-listing.",
      hook: "Why we spent 8 months testing 14 formulations just to eliminate the 2 PM caffeine crash.",
      caption: `Behind every jar of Vela Morning Focus is an obsession with how calm energy feels.\n\nMost morning drinks give you a 30-minute heart spike followed by a 2:00 PM desk collapse. We took 8 months to formulate with organic ceremonial matcha, L-theanine, and lion's mane to create steady, jitter-free clarity.\n\nNo artificial sweeteners.\nNo midday jitters.\nJust 3 quiet minutes of morning ritual that carry you through the day.\n\nDiscover the morning ritual blend via the link in bio 🌿`,
      cta: "Discover the morning ritual blend via the link in our bio.",
      audience: "Wellness-minded professionals seeking clean energy alternatives to coffee.",
      whyItWorks: "Anchors the product in human experience (avoiding the afternoon crash) rather than clinical chemical jargon.",
      visualType: "static",
      badge: "Product Narrative"
    },
    {
      id: "cp-9",
      code: "I",
      title: "Community Post: The Sunday Reset Protocol",
      platform: "Instagram",
      category: "Instagram",
      format: "Community Discussion Card",
      objective: "Community",
      shortDesc: "A weekly recurring prompt designed to foster peer conversations and supportive comments.",
      hook: "Sunday reminder: You don't have to 'earn' your rest before Monday.",
      caption: `Before the Monday notifications start pinging, take 10 minutes for your Sunday Reset 🌿\n\nOur team non-negotiable for tonight:\n1. Phone charging in another room by 9:30 PM\n2. Fresh sheets on the bed\n3. One warm cup of chamomile tea with zero screens\n\nWhat is your #1 non-negotiable ritual before a new week starts?\n\nTell us below—we're sharing our favorite replies on Stories tomorrow morning!`,
      cta: "Drop your #1 non-negotiable ritual before a new week starts 👇",
      audience: "Lifestyle community members looking for mindfulness and peer connection.",
      whyItWorks: "Removes judgment and validates rest, making followers feel safe and eager to share personal routines.",
      visualType: "community",
      badge: "Community Ritual"
    },
    {
      id: "cp-10",
      code: "J",
      title: "Trend-Based Reel: The Silent Product Review",
      platform: "Reels",
      category: "Reels",
      format: "Reel (15 Seconds)",
      objective: "Awareness",
      shortDesc: "Adapting the viral ASMR sensory trend into an aesthetic demonstration of product ritual.",
      hook: "Silent Review: What 7 days of morning calm actually feels like.",
      storyboard: [
        { scene: "Scene 01 (0-4s)", visual: "Natural daylight hitting a wooden kitchen counter. Gentle sound of opening ceramic container.", onScreenText: "7:00 AM • No alarms, no notifications." },
        { scene: "Scene 02 (5-10s)", visual: "Whisking ceremonial matcha with bamboo whisk. Close-up on emerald green froth.", onScreenText: "Just 3 minutes of tactile ritual." },
        { scene: "Scene 03 (11-15s)", visual: "First sip by a sunny window with open journal. Gentle smile.", onScreenText: "Calm focus for the rest of the day." }
      ],
      audio: "Ambient Natural Kitchen Sounds • ASMR",
      caption: `No loud music. No fast cuts. Just morning calm in 15 seconds 🍵\n\nTrends should support the brand message rather than replace it. Here's how we adapt the 'silent review' format to spotlight product craftsmanship.\n\nSave this audio for your next morning reset!\n\n#SilentReview #ASMR #MorningRitual #VelaWellness`,
      cta: "Save this audio for your next morning reset.",
      audience: "Consumers seeking quiet aesthetics in a feed full of chaotic trending sounds.",
      whyItWorks: "Deliberate sensory quiet stands out in high-tempo feeds, creating prolonged watch time.",
      visualType: "reel",
      badge: "Trend Adaptation"
    },
    {
      id: "cp-11",
      code: "K",
      title: "Educational Post: How to Build 5 Content Pillars",
      platform: "Instagram",
      category: "Instagram",
      format: "Infographic Carousel",
      objective: "Education",
      shortDesc: "A foundational guide breaking down how to structure recurring editorial categories.",
      hook: "Stop guessing what to post. Here is how to structure 5 recurring content pillars.",
      slides: [
        { slideNum: 1, text: "How to Build 5 Content Pillars for Any Brand", note: "Cover Slide • Clean Framework" },
        { slideNum: 2, text: "Pillar 1: Education (Saves)\nTutorials, teardowns, and actionable checklists.", note: "Generates Bookmarks" },
        { slideNum: 3, text: "Pillar 2: Lifestyle & POV (Relatability)\nSituational humor and shared daily friction.", note: "Drives Shares" },
        { slideNum: 4, text: "Pillar 3: Community (Comments)\nSunday resets, polls, and open AMA questions.", note: "Nurtures Dialogue" },
        { slideNum: 5, text: "Pillars 4 & 5: Product & BTS (Conversion & Trust)\nIngredient stories and studio formulation tests.", note: "Builds Integrity" }
      ],
      caption: `If you feel like you're constantly reinventing the wheel every Monday, you don't have a content shortage—you need pillars 🏛️\n\nWhen your content follows 5 clear pillars, brainstorming becomes plug-and-play:\n• Monday: Education\n• Wednesday: Lifestyle / POV\n• Friday: Product Story\n• Sunday: Community Reset\n\nSave this post to reference during your next strategy session!\n\n#ContentPillars #SocialMediaPlanning #BrandStrategy #EditorialCalendar`,
      cta: "Save this framework for your team's next planning session.",
      audience: "Social media executives, marketing interns, and brand coordinators.",
      whyItWorks: "Transforms an abstract marketing concept into an actionable Monday-to-Sunday operational system.",
      visualType: "carousel",
      badge: "Educational Pillars"
    },
    {
      id: "cp-12",
      code: "L",
      title: "Campaign Creative: 30 Days of Better Mornings",
      platform: "Campaigns",
      category: "Campaigns",
      format: "Campaign Hero Post",
      objective: "Awareness",
      shortDesc: "The hero announcement post for Vela's 30-day community activation challenge.",
      hook: "What if your mornings didn't feel like a race against the clock?",
      caption: `Introducing: 30 Days of Better Mornings with Vela ☀️\n\nStarting October 1st, we're swapping frantic 7 AM alarm snoozes for 30 days of micro-rituals that actually feel good.\n\nNo 5 AM military ice baths.\nNo 14-step supplement cocktails.\nJust simple, evidence-backed habits to ground your mind and start your day with calm intention.\n\nJoin our community challenge: Download the free morning habit tracker from our link in bio and tag #BetterMorningsWithVela to be featured all month long.\n\nAre you in? Drop a ☀️ below!`,
      cta: "Drop a ☀️ in the comments to join the 30-day challenge squad.",
      audience: "Busy young professionals looking for sustainable wellness habits.",
      whyItWorks: "Low barrier to entry, highly relatable emotional pain point, and clear community hashtag participation loop.",
      visualType: "campaign",
      badge: "Campaign Creative"
    }
  ],

  // 30-Day Content Calendar Data (All 30 entries - Realistic SMM Working Calendar)
  contentCalendar: [
    { day: 1, date: "Day 01 • Mon", platform: "Instagram", type: "Carousel", topic: "Brand Refresh Announcement", hook: "Meet the new Vela: Why we simplified our entire social identity.", objective: "Awareness", cta: "Swipe through our new design story." },
    { day: 2, date: "Day 02 • Tue", platform: "TikTok/Reels", type: "Reel", topic: "Morning Routine POV", hook: "POV: You traded your morning panic scroll for 10 minutes of sunlight.", objective: "Engagement", cta: "Double tap if your mornings need this." },
    { day: 3, date: "Day 03 • Wed", platform: "LinkedIn", type: "Text Post", topic: "Product Formulation Philosophy", hook: "Why we killed our bestselling recipe to start over from scratch.", objective: "Education", cta: "Read the founder breakdown below." },
    { day: 4, date: "Day 04 • Thu", platform: "Instagram", type: "Story", topic: "Interactive Habit Check", hook: "Which morning habit gives you the most calm?", objective: "Engagement", cta: "Tap the poll sticker!" },
    { day: 5, date: "Day 05 • Fri", platform: "Instagram", type: "Static Post", topic: "Weekend Unplug Prompt", hook: "Reminder: An unread inbox will not collapse your weekend.", objective: "Community", cta: "Drop an offline emoji below." },
    { day: 6, date: "Day 06 • Sat", platform: "TikTok/Reels", type: "Reel", topic: "ASMR Coffee & Matcha Ritual", hook: "The most satisfying 15 seconds of your Saturday morning.", objective: "Awareness", cta: "Save this audio for your weekend reset." },
    { day: 7, date: "Day 07 • Sun", platform: "Instagram", type: "Carousel", topic: "Sunday Reset Checklist", hook: "5 small Sunday resets that make Monday morning effortless.", objective: "Education", cta: "Save this checklist for tonight." },
    { day: 8, date: "Day 08 • Mon", platform: "LinkedIn", type: "Carousel", topic: "Social-First Brand Strategy", hook: "Why modern wellness brands must act like media publications.", objective: "Education", cta: "Download our 5-pillar framework." },
    { day: 9, date: "Day 09 • Tue", platform: "Instagram", type: "Story", topic: "Behind The Scenes", hook: "Packing batch #41 in our studio—spot the packaging update?", objective: "Community", cta: "Reply with what you noticed!" },
    { day: 10, date: "Day 10 • Wed", platform: "TikTok/Reels", type: "Reel", topic: "Common Morning Mistake", hook: "Drinking coffee before water? Here's why you feel tired at 11 AM.", objective: "Education", cta: "Tag a friend who lives on caffeine." },
    { day: 11, date: "Day 11 • Thu", platform: "Instagram", type: "Carousel", topic: "The Science of L-Theanine", hook: "How to get clean caffeine focus with zero heart palpitations.", objective: "Education", cta: "Swipe to see the clinical breakdown." },
    { day: 12, date: "Day 12 • Fri", platform: "LinkedIn", type: "Poll", topic: "Workplace Wellness Poll", hook: "Does your company have a 'no meeting morning' policy?", objective: "Engagement", cta: "Cast your vote and see how leaders responded." },
    { day: 13, date: "Day 13 • Sat", platform: "Instagram", type: "Static Post", topic: "Customer Review Spotlight", hook: "'I didn't expect this to replace my espresso, but here we are.'", objective: "Conversion", cta: "Link in bio to try the starter kit." },
    { day: 14, date: "Day 14 • Sun", platform: "Instagram", type: "Story", topic: "This or That Question", hook: "Sunday night prep: Plan tomorrow's outfit or wing it at 7 AM?", objective: "Engagement", cta: "Vote on the slider sticker." },
    { day: 15, date: "Day 15 • Mon", platform: "Instagram", type: "Carousel", topic: "30 Days of Better Mornings Launch", hook: "Day 1 of 30: Small changes, compounded daily.", objective: "Awareness", cta: "Tag your morning accountability buddy." },
    { day: 16, date: "Day 16 • Tue", platform: "TikTok/Reels", type: "Reel", topic: "Challenge Day 2: 5-Min Journal", hook: "The 3 prompts I write before checking Slack.", objective: "Education", cta: "Screenshot these 3 prompts." },
    { day: 17, date: "Day 17 • Wed", platform: "LinkedIn", type: "Text Post", topic: "Audience Attention Economics", hook: "Stop treating attention as a transaction. Treat it like trust.", objective: "Awareness", cta: "Share your thoughts on brand trust below." },
    { day: 18, date: "Day 18 • Thu", platform: "Instagram", type: "Story", topic: "Community Spotlight", hook: "Sharing our favorite #BetterMorningsWithVela tags from yesterday!", objective: "Community", cta: "Tag us in your morning cup to be featured." },
    { day: 19, date: "Day 19 • Fri", platform: "TikTok/Reels", type: "Reel", topic: "Challenge Day 5: Screen-Free Breakfast", hook: "What happens when you eat breakfast without looking at notifications?", objective: "Engagement", cta: "Would you try this tomorrow morning?" },
    { day: 20, date: "Day 20 • Sat", platform: "Instagram", type: "Carousel", topic: "The Anatomy of a Morning Walk", hook: "Why 10 minutes of outdoor light sets your circadian clock.", objective: "Education", cta: "Save this for tomorrow's stroll." },
    { day: 21, date: "Day 21 • Sun", platform: "Instagram", type: "Static Post", topic: "Weekly Habit Check-in", hook: "Week 1 of 30 is complete. What habit felt easiest to maintain?", objective: "Community", cta: "Comment your answer below." },
    { day: 22, date: "Day 22 • Mon", platform: "LinkedIn", type: "Text Post", topic: "Measuring Social Value", hook: "Why 'Saves' are the most valuable organic metric on Instagram.", objective: "Education", cta: "Read the analytical rationale in comments." },
    { day: 23, date: "Day 23 • Tue", platform: "TikTok/Reels", type: "Reel", topic: "Silent Review Format", hook: "Silent review of our morning hydration pack.", objective: "Awareness", cta: "Tap sound to listen to the ASMR textures." },
    { day: 24, date: "Day 24 • Wed", platform: "Instagram", type: "Story", topic: "Ask Me Anything", hook: "Q&A: What is tripping up your morning routine this week?", objective: "Community", cta: "Type in the question sticker box." },
    { day: 25, date: "Day 25 • Thu", platform: "Instagram", type: "Carousel", topic: "Ingredient Deep Dive", hook: "Meet Lion's Mane: The mushroom your brain didn't know it needed.", objective: "Education", cta: "Swipe to see the research backing." },
    { day: 26, date: "Day 26 • Fri", platform: "TikTok/Reels", type: "Reel", topic: "Desk Setup & Morning Flow", hook: "Setting up a distraction-free workspace in 60 seconds.", objective: "Engagement", cta: "Save this desk aesthetic for inspo." },
    { day: 27, date: "Day 27 • Sat", platform: "Instagram", type: "Community Post", topic: "UGC Showcase", hook: "'How our community starts their Saturday' — a photo dump.", objective: "Community", cta: "Swipe through and leave some love." },
    { day: 28, date: "Day 28 • Sun", platform: "Instagram", type: "Carousel", topic: "Final Week Challenge Prep", hook: "Entering Week 4 of Better Mornings: 3 habits to keep forever.", objective: "Awareness", cta: "Bookmark this wrap-up guide." },
    { day: 29, date: "Day 29 • Mon", platform: "LinkedIn", type: "Carousel", topic: "From Community to Retention", hook: "How challenge-based campaigns foster long-term customer loyalty.", objective: "Education", cta: "Swipe for the retention breakdown." },
    { day: 30, date: "Day 30 • Tue", platform: "Instagram", type: "Static Post", topic: "Challenge Graduation & VIP Offer", hook: "You made it through 30 days. Here is our secret gift to our community.", objective: "Conversion", cta: "Check link in bio for the subscriber exclusive." }
  ],

  // Diagnostic Audit Checklist Framework
  auditChecklist: [
    {
      category: "PROFILE",
      items: [
        { text: "Bio Clarity: Does the bio explain who the account is for and what problem it solves within 3 seconds?", checked: true },
        { text: "Call to Action: Is there a clear, single primary link directing traffic to an active landing page or lead magnet?", checked: true },
        { text: "Profile Positioning: Is the account category, avatar, and name field keyword-optimized for search discoverability?", checked: true },
        { text: "Visual Identity: Are the story highlights organized with on-brand covers and active, relevant information?", checked: true }
      ]
    },
    {
      category: "CONTENT",
      items: [
        { text: "Content Pillars: Are there 3–5 recurring thematic pillars preventing random, disjointed posting?", checked: true },
        { text: "Posting Consistency: Is the schedule predictable and sustainable rather than erratic bursts of activity?", checked: true },
        { text: "Format Variety: Is there a healthy mix of Carousels (saves), Reels (reach), and Stories (community)?", checked: true },
        { text: "Hook Quality: Do visual hooks and first-line captions present immediate tension or intrigue?", checked: true }
      ]
    },
    {
      category: "ENGAGEMENT",
      items: [
        { text: "Comment Response: Does the brand reply to comments within the first 60 minutes with conversational questions?", checked: true },
        { text: "DM Relationship Building: Are outbound welcome messages or natural conversational replies sent to active responders?", checked: true },
        { text: "Community Prompts: Do captions invite specific answers rather than vague 'let us know' requests?", checked: true },
        { text: "Interactive Stories: Are interactive stickers (polls, sliders, Q&As) used at least 3x per week?", checked: true }
      ]
    },
    {
      category: "DISCOVERY",
      items: [
        { text: "Keyword Optimization: Are natural search keywords incorporated into spoken audio, on-screen text, and captions?", checked: true },
        { text: "Hashtag Strategy: Is there a balanced set of 3–5 targeted niche hashtags rather than 30 generic tags?", checked: true },
        { text: "Collaborations & Co-authoring: Does the brand collaborate with aligned creators or micro-influencers?", checked: true },
        { text: "Shareability: Is content designed with 'this is so you' peer forwarding value in mind?", checked: true }
      ]
    },
    {
      category: "CONVERSION",
      items: [
        { text: "Clear CTAs: Does every post have an intentional single next step (Save, Comment, Link, DM)?", checked: true },
        { text: "Landing Page Journey: Does the link in bio seamlessly match the promise made in the social caption?", checked: true },
        { text: "Lead Generation: Is there a valuable free resource (checklist, challenge, guide) capturing email contacts?", checked: true },
        { text: "Trust Signals: Are customer reviews, behind-the-scenes formulation, and proof points recurringly woven into content?", checked: true }
      ]
    }
  ]
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
