/**
 * Harinakshi Baishya - Social Media & Content Strategist Portfolio
 * Data Layer: Showcase Items, 30-Day Content Calendar, Analytics, Case Studies, Trends, and Audit Checklist
 * 
 * NOTE: All campaign figures and project examples are clearly labeled as speculative,
 * demo data, or independent portfolio analyses for candidate demonstration purposes.
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
      description: "I research audiences, trends and active community conversations before creating a single draft."
    },
    {
      title: "STRATEGIC",
      tagline: "Purpose over posting",
      description: "Every content idea should have a purpose, a defined content pillar, and a measurable goal."
    },
    {
      title: "CREATIVE",
      tagline: "Fresh hooks on familiar ideas",
      description: "I look for fresh, culturally resonant ways to communicate familiar brand values without clichés."
    },
    {
      title: "DATA-AWARE",
      tagline: "Iterative feedback loops",
      description: "I use performance signals like saves and completion rates to understand what to refine and double down on."
    }
  ],

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
      whyItWorks: "Bypasses defensive reactions by reframing a painful creator problem into an actionable shift in reader psychology."
    },
    {
      type: "RELATABLE",
      label: "Community & Humor",
      hook: "POV: You spent 2 hours making the post and someone says, 'Just make it viral.'",
      body: "Nothing tests team patience quite like the phrase 'can we make it trend by 4 PM?' Great content isn't lightning in a bottle—it's consistent audience empathy, crisp visual hooks, and zero fluff.",
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
      execution: "Short 7-second Reel showing a busy social media planner striking out generic content ideas and replacing them with 3 hyperspecific audience problem statements.",
      explanation: "Trends should support the brand message rather than replace it. POV works when it puts the target follower directly into an instantly recognizable scenario."
    },
    {
      trend: "Silent Review / ASMR Visual Style",
      category: "Sensory Demonstration",
      idea: "Silent Product Review: What 7 days of morning calm actually feels like.",
      execution: "Low-distraction, text-on-screen Reel with natural ambient sounds (coffee pouring, notebook opening, subtle product texture) letting aesthetic clarity speak.",
      explanation: "Cuts through noisy, hyper-edited feeds by offering deliberate quiet and tactile product transparency."
    },
    {
      trend: "Green Screen Commentary",
      category: "Expert Breakdown",
      idea: "Breaking down why this everyday lifestyle ad stopped our scroll.",
      execution: "Presenter stands in front of a screenshot of an effective content hook, pointing out the exact typography choices and psychological tension driving the comments.",
      explanation: "Positions the brand or strategist as an authoritative, generous educator dissecting real-world culture."
    },
    {
      trend: "We Tested X So You Don't Have To",
      category: "Empathetic Curation",
      idea: "We tested 4 common morning wellness habits so you don't waste your time.",
      execution: "Fast carousel comparing cold showers, 5-minute journaling, morning sunlight, and high-protein breakfasts, scored by realistic feasibility.",
      explanation: "Saves the audience cognitive effort, creating high-intent saves and bookmarking behavior."
    }
  ],

  // 12 Rich Content Playground Items
  contentPlayground: [
    {
      id: "cp-1",
      title: "5 Things Your Audience Actually Wants From Your Content",
      platform: "Instagram",
      category: "Instagram",
      format: "Carousel (10 Slides)",
      objective: "Education",
      shortDesc: "A swipeable breakdown addressing creator burn-out and shifting focus back to audience utility.",
      hook: "Stop guessing what to post. Here are the only 5 things your audience actually stops their scroll for.",
      caption: `Swipe through to audit your next post before you hit publish 📲\n\nMost brand content fails not because it looks bad, but because it asks for attention without offering utility in return.\n\nHere's what your followers actually look for:\n1. Validation: "I thought I was the only one feeling this."\n2. Practical shortcuts: "This saves me 30 minutes tomorrow."\n3. Curated clarity: "This makes a complex concept simple."\n4. Perspective shifts: "I never looked at it that way before."\n5. Entertainment with relevance: "This speaks my language."\n\nWhich of these 5 does your current top post deliver on?\n\n#ContentStrategy #SocialMediaTips #AudienceFirst #ContentMarketing #SocialMediaExecutive`,
      cta: "Save this carousel to reference during your Monday content sprint.",
      audience: "Solopreneurs, small brand owners, and junior content creators looking for actionable engagement frameworks.",
      visualType: "carousel",
      badge: "Educational Carousel"
    },
    {
      id: "cp-2",
      title: "Stop Posting. Start Communicating.",
      platform: "Instagram",
      category: "Instagram",
      format: "Carousel (7 Slides)",
      objective: "Engagement",
      shortDesc: "Challenging the 'daily posting vanity' myth with a conversation-first engagement strategy.",
      hook: "Posting every day with zero replies isn't consistency—it's talking to an empty room.",
      caption: `Are you posting to check off a box, or to open a conversation?\n\nConsistency on social media isn't just about scheduling 7 posts a week. True consistency is:\n• Consistently clear messaging\n• Consistently replying in the comments\n• Consistently asking questions your audience wants to answer\n\nIf you cut your output in half and doubled the depth of each post, what would happen to your community?\n\nDrop your honest take below 👇\n\n#CommunityBuilding #SocialMediaStrategy #BrandVoice #EngagementTips`,
      cta: "Share your perspective in the comments below: Volume or Depth?",
      audience: "Community managers, lifestyle brands, and marketing coordinators.",
      visualType: "carousel",
      badge: "Strategy Carousel"
    },
    {
      id: "cp-3",
      title: "POV: You Finally Understand Your Audience",
      platform: "Reels",
      category: "Reels",
      format: "Reel (12 Seconds)",
      objective: "Awareness",
      shortDesc: "Relatable humor capturing the moment content shifts from generic quotes to real problem-solving.",
      hook: "POV: You delete the generic motivational quote and write about the one thing keeping your client up at night.",
      caption: `That moment when the lightbulb clicks 💡\n\nThe second you stop trying to sound 'professional' and start sounding helpful, comments start rolling in.\n\nDrop a ❤️ if you've rewritten a caption 5 times today to get the hook just right.\n\n#SocialMediaHumor #ContentCreator #AudienceInsight #MarketingReels`,
      cta: "Double tap if you felt this in your soul today.",
      audience: "Social media managers and creative agency executives.",
      visualType: "reel",
      badge: "Short-Form Reel"
    },
    {
      id: "cp-4",
      title: "3 Content Mistakes Brands Make on Short-Form Video",
      platform: "Reels",
      category: "Reels",
      format: "Reel (24 Seconds)",
      objective: "Education",
      shortDesc: "Rapid-fire visual dissection of why viewers drop off within the first 2 seconds.",
      hook: "If your Reels are dropping off at second 1.8, you're making one of these 3 common mistakes.",
      caption: `Let's fix your short-form retention curve 📈\n\n1. The 'Intro Trap': Saying 'Hey guys so today...' instead of showing the outcome immediately.\n2. Wall of Text: Putting 40 words on screen with 0.8s reading time.\n3. Weak Sign-off: Ending with 'Like for part 2' instead of an intriguing conversational question.\n\nSave this for your next video shoot!\n\n#ReelsTips #ShortFormVideo #ContentCreation #VideoStrategy #SocialMediaManager`,
      cta: "Save this checklist for your next video batch recording session.",
      audience: "Brand marketing teams experimenting with TikTok and Instagram Reels.",
      visualType: "reel",
      badge: "Diagnostic Reel"
    },
    {
      id: "cp-5",
      title: "This or That? Interactive Story Series",
      platform: "Stories",
      category: "Stories",
      format: "Story (3-Part Tap Sequence)",
      objective: "Engagement",
      shortDesc: "Frictionless micro-poll stickers designed to train the algorithm and capture audience sentiment.",
      hook: "Quick team vote before our morning planning meeting: Which morning habit are you actually doing?",
      caption: `Interactive Instagram Story Series:\n\nSlide 1: Poll Sticker [5:00 AM Coffee vs 7:30 AM Lemon Water]\nSlide 2: Poll Sticker [Digital Notion Planner vs Physical Paper Journal]\nSlide 3: Slider Sticker [How ready are you for Monday? 0% - 100%]\n\nOutcome: High-volume sticker taps signal strong account affinity to the algorithm, boosting visibility for subsequent product stories.`,
      cta: "Tap your choice on the sticker above!",
      audience: "Lifestyle community members and morning wellness enthusiasts.",
      visualType: "story",
      badge: "Interactive Stories"
    },
    {
      id: "cp-6",
      title: "Ask Me Anything: Content Planning Edition",
      platform: "Stories",
      category: "Stories",
      format: "Story (Q&A Box + Video Responses)",
      objective: "Community",
      shortDesc: "Open question box gathering real audience dilemmas to fuel future editorial calendars.",
      hook: "Stuck on your October content pillars? Ask me your biggest roadblock below 💬",
      caption: `Q&A Story Strategy:\n\nSticker: Question Box ('What is the hardest part about planning your weekly content?')\nFollow-up: 4 video response stories breaking down user submissions into 3-step action points.\nStrategic Purpose: Crowd-sources actual customer vocabulary and pain points directly into the content pipeline.`,
      cta: "Drop your question into the box—answering all afternoon!",
      audience: "Followers looking for approachable, actionable feedback.",
      visualType: "story",
      badge: "Community Q&A"
    },
    {
      id: "cp-7",
      title: "Why Consistency Matters More Than Posting Every Day",
      platform: "LinkedIn",
      category: "LinkedIn",
      format: "Text Post + Infographic",
      objective: "Awareness",
      shortDesc: "Thought leadership post dissecting sustainable professional cadence over algorithmic burnout.",
      hook: "Posting 7 days a week with shallow ideas does not build brand equity. Posting 3 times a week with depth does.",
      caption: `We have romanticized 'the daily grind' on social media to the point where quality is treated as an afterthought.\n\nHere is what happens when you switch from 7 shallow posts to 3 high-leverage posts:\n\n1. Research time expands: You have time to look at real customer inquiries.\n2. Visual craft improves: Clear typography replaces hurried Canva templates.\n3. Community attention compounds: Readers start anticipating your posts because every single one contains a takeaway.\n\nTrue consistency isn't frequency of output. It is consistency of quality, viewpoint, and audience respect.\n\nWhat is your preferred weekly posting rhythm?`,
      cta: "Let's discuss in the comments: How many times per week feels sustainable for your team?",
      audience: "Founders, marketing leads, recruiters, and creative professionals.",
      visualType: "linkedin",
      badge: "LinkedIn Leadership"
    },
    {
      id: "cp-8",
      title: "From Follower to Community: The 4-Tier Funnel",
      platform: "LinkedIn",
      category: "LinkedIn",
      format: "Carousel (6 PDF Slides)",
      objective: "Education",
      shortDesc: "A strategic framework showing how casual viewers transform into brand advocates.",
      hook: "Followers are a vanity metric. Community members are a brand moat.",
      caption: `Swipe through the 4 stages of audience maturity:\n\nTier 1: The Passive Lurker (Views, rarely interacts)\nTier 2: The Practical Saver (Bookmarks frameworks for later)\nTier 3: The Active Contributor (Comments with their own experiences)\nTier 4: The Brand Advocate (Tags colleagues and defends your POV)\n\nMost content is designed solely to attract Tier 1. The best brands design content specifically to nurture Tiers 2 through 4.\n\nWhich tier is your current social strategy targeting?`,
      cta: "Save this PDF slide deck for your team's next brand strategy meeting.",
      audience: "Brand directors, social executives, and digital marketing leaders.",
      visualType: "carousel",
      badge: "Strategic Framework"
    },
    {
      id: "cp-9",
      title: "30 Days of Better Mornings: Campaign Announcement",
      platform: "Campaigns",
      category: "Campaigns",
      format: "Campaign Hero Post",
      objective: "Awareness",
      shortDesc: "Launch announcement for fictional brand Vela's signature 30-day wellness challenge.",
      hook: "What if your mornings didn't feel like a race against the clock?",
      caption: `Introducing: 30 Days of Better Mornings with Vela ☀️\n\nStarting October 1st, we're swapping chaotic alarm snoozes for 30 days of micro-rituals that actually feel good.\n\nNo 5 AM military ice baths.\nNo 14-step supplement cocktails.\nJust simple, evidence-backed habits to ground your mind and start your day with intention.\n\nJoin our community challenge: Download the free morning ritual tracker from our link in bio and tag #BetterMorningsWithVela to be featured all month long.\n\nAre you in? Drop a ☀️ below!`,
      cta: "Drop a ☀️ in the comments to join the 30-day challenge squad.",
      audience: "Busy young professionals looking for gentle, sustainable wellness routines.",
      visualType: "campaign",
      badge: "Campaign Launch"
    },
    {
      id: "cp-10",
      title: "Product Storytelling: The Anatomy of Morning Focus",
      platform: "Instagram",
      category: "Instagram",
      format: "Carousel (5 Slides)",
      objective: "Conversion",
      shortDesc: "Soft-selling through formulation transparency, sensory design, and customer ritual.",
      hook: "Why did we spend 8 months testing 14 prototypes before launching our morning focus blend?",
      caption: `Behind every scoop of Vela Focus Blend is an obsession with how clean energy feels.\n\nMost morning drinks give you a 20-minute spike followed by a 2:00 PM crash. We formulated with organic matcha, L-theanine, and lion's mane to create steady, jitter-free clarity.\n\nSlide through to see our ingredient journey from harvest to morning mug.\n\n#VelaWellness #MorningRitual #ProductStorytelling #CleanEnergy`,
      cta: "Discover the morning ritual blend via the link in our bio.",
      audience: "Discerning wellness consumers tired of coffee jitters and sugary energy drinks.",
      visualType: "carousel",
      badge: "Product Narrative"
    },
    {
      id: "cp-11",
      title: "Community Focus: The Sunday Reset Protocol",
      platform: "Instagram",
      category: "Instagram",
      format: "Static Card + Thread",
      objective: "Community",
      shortDesc: "A weekly recurring community check-in inviting followers to share their non-negotiable calm ritual.",
      hook: "Sunday reminder: You don't have to 'earn' your rest.",
      caption: `Before the Monday notifications start pinging, take 10 minutes for your Sunday Reset 🌿\n\nOur team non-negotiable for tonight:\n1. Phone charging in another room by 9:30 PM\n2. Fresh sheets on the bed\n3. One cup of warm chamomile tea with zero screens\n\nWhat is your #1 non-negotiable ritual before a new week begins?\n\nTell us below—we're sharing our favorite replies on Stories tomorrow morning!`,
      cta: "Share your Sunday non-negotiable in the comments.",
      audience: "Lifestyle followers seeking balance, calm, and peer connection.",
      visualType: "static",
      badge: "Community Ritual"
    },
    {
      id: "cp-12",
      title: "Trend-Based Reel: Stop Chasing Viral Audio",
      platform: "Reels",
      category: "Reels",
      format: "Reel (18 Seconds)",
      objective: "Education",
      shortDesc: "Visual commentary on why high-intent saves outperform transient viral audio views.",
      hook: "Trending audio will get you 10,000 views from people who don't care. Useful content gets you 500 views from your ideal clients.",
      caption: `Which metric would you rather have?\n\nOption A: 50,000 views, 12 saves, 0 inquiries.\nOption B: 1,200 views, 340 saves, 18 direct messages asking where to learn more.\n\nSocial media for business is about building affinity, trust, and memorability—not just vanity metrics.\n\nSend this to a brand owner who needs to stop stressing over trends!\n\n#SocialMediaStrategy #ContentMarketing #BrandGrowth #SocialMediaExecutive`,
      cta: "Send this to someone who needs to see this today.",
      audience: "Marketing professionals, business owners, and social media strategists.",
      visualType: "reel",
      badge: "Trend Commentary"
    }
  ],

  // 30-Day Content Calendar Data (All 30 entries)
  contentCalendar: [
    { day: 1, date: "Day 01 • Mon", platform: "Instagram", type: "Carousel", topic: "Brand Refresh Announcement", hook: "Meet the new Vela: Why we simplified everything.", objective: "Awareness", cta: "Swipe through our new design story." },
    { day: 2, date: "Day 02 • Tue", platform: "TikTok/Reels", type: "Reel", topic: "Morning Routine POV", hook: "POV: You traded your morning panic scroll for 10 minutes of sunlight.", objective: "Engagement", cta: "Double tap if your mornings need this." },
    { day: 3, date: "Day 03 • Wed", platform: "LinkedIn", type: "Text Post", topic: "Product Formulation Philosophy", hook: "Why we killed our bestselling recipe to start over.", objective: "Education", cta: "Read the founder breakdown below." },
    { day: 4, date: "Day 04 • Thu", platform: "Instagram", type: "Story", topic: "Interactive Habit Check", hook: "Which morning habit gives you the most calm?", objective: "Engagement", cta: "Tap the poll sticker!" },
    { day: 5, date: "Day 05 • Fri", platform: "Instagram", type: "Static Post", topic: "Weekend Unplug Prompt", hook: "Reminder: An unread inbox will not collapse your weekend.", objective: "Community", cta: "Drop an offline emoji below." },
    { day: 6, date: "Day 06 • Sat", platform: "TikTok/Reels", type: "Reel", topic: "ASMR Coffee & Matcha Ritual", hook: "The most satisfying 15 seconds of your Saturday morning.", objective: "Awareness", cta: "Save this audio for your weekend reset." },
    { day: 7, date: "Day 07 • Sun", platform: "Instagram", type: "Carousel", topic: "Sunday Reset Checklist", hook: "5 small Sunday resets that make Monday morning effortless.", objective: "Education", cta: "Save this checklist for tonight." },
    { day: 8, date: "Day 08 • Mon", platform: "LinkedIn", type: "Carousel", topic: "Social-First Brand Strategy", hook: "Why modern wellness brands must act like media publications.", objective: "Education", cta: "Download our 5-pillar framework." },
    { day: 9, date: "Day 09 • Tue", platform: "Instagram", type: "Story", topic: "Behind The Scenes", hook: "Packing batch #41 in our studio—spot the packaging update?", objective: "Community", cta: "Reply with what you noticed!" },
    { day: 10, date: "Day 10 • Wed", platform: "TikTok/Reels", type: "Reel", topic: "Common Morning Mistake", hook: "Drinking coffee before water? Here's why you feel tired at 11 AM.", objective: "Education", cta: "Tag a friend who lives on caffeine." },
    { day: 11, date: "Day 11 • Thu", platform: "Instagram", type: "Carousel", topic: "The Science of L-Theanine", hook: "How to get clean caffeine focus with zero heart palpitations.", objective: "Education", cta: "Swipe to see the clinical breakdown." },
    { day: 12, date: "Day 12 • Fri", platform: "LinkedIn", type: "Poll", topic: "Workplace Wellness Poll", hook: "Does your company have a 'no meeting morning' policy?", objective: "Engagement", cta: "Cast your vote and see how 200+ leaders voted." },
    { day: 13, date: "Day 13 • Sat", platform: "Instagram", type: "Static Post", topic: "Customer Review Spotlight", hook: "'I didn't expect this to replace my third cup of espresso, but here we are.'", objective: "Conversion", cta: "Link in bio to try the starter kit." },
    { day: 14, date: "Day 14 • Sun", platform: "Instagram", type: "Story", topic: "This or That Question", hook: "Sunday night prep: Plan tomorrow's outfit or wing it at 7 AM?", objective: "Engagement", cta: "Vote on the slider sticker." },
    { day: 15, date: "Day 15 • Mon", platform: "Instagram", type: "Carousel", topic: "30 Days of Better Mornings Launch", hook: "Day 1 of 30: Small changes, compounded daily.", objective: "Awareness", cta: "Tag your morning accountability buddy." },
    { day: 16, date: "Day 16 • Tue", platform: "TikTok/Reels", type: "Reel", topic: "Challenge Day 2: 5-Min Journal", hook: "The 3 prompts I write before checking Slack.", objective: "Education", cta: "Screenshot these 3 prompts." },
    { day: 17, date: "Day 17 • Wed", platform: "LinkedIn", type: "Text Post", topic: "Audience Attention Economics", hook: "Stop treating attention as a transaction. Treat it like a trust account.", objective: "Awareness", cta: "Share your thoughts on brand trust below." },
    { day: 18, date: "Day 18 • Thu", platform: "Instagram", type: "Story", topic: "Community Spotlight", hook: "Sharing our favorite #BetterMorningsWithVela tags from yesterday!", objective: "Community", cta: "Tag us in your morning cup to be featured." },
    { day: 19, date: "Day 19 • Fri", platform: "TikTok/Reels", type: "Reel", topic: "Challenge Day 5: Screen-Free Breakfast", hook: "What happens when you eat breakfast without looking at notifications?", objective: "Engagement", cta: "Would you try this tomorrow morning?" },
    { day: 20, date: "Day 20 • Sat", platform: "Instagram", type: "Carousel", topic: "The Anatomy of a Morning Walk", hook: "Why 10 minutes of outdoor light sets your circadian clock.", objective: "Education", cta: "Save this for tomorrow's stroll." },
    { day: 21, date: "Day 21 • Sun", platform: "Instagram", type: "Static Post", topic: "Weekly Habit Check-in", hook: "Week 1 of 30 is complete. What habit felt easiest to maintain?", objective: "Community", cta: "Comment your answer below." },
    { day: 22, date: "Day 22 • Mon", platform: "LinkedIn", type: "Text Post", topic: "Measuring Social ROI", hook: "Why 'Saves' are the most undervalued organic metric on Instagram.", objective: "Education", cta: "Read the analytical rationale in comments." },
    { day: 23, date: "Day 23 • Tue", platform: "TikTok/Reels", type: "Reel", topic: "Silent Review Format", hook: "Silent review of our morning hydration pack.", objective: "Awareness", cta: "Tap sound to listen to the ASMR textures." },
    { day: 24, date: "Day 24 • Wed", platform: "Instagram", type: "Story", topic: "Ask Me Anything", hook: "Q&A: What is tripping up your morning routine this week?", objective: "Community", cta: "Type in the question sticker box." },
    { day: 25, date: "Day 25 • Thu", platform: "Instagram", type: "Carousel", topic: "Ingredient Deep Dive", hook: "Meet Lion's Mane: The super-mushroom your brain didn't know it needed.", objective: "Education", cta: "Swipe to see the clinical backing." },
    { day: 26, date: "Day 26 • Fri", platform: "TikTok/Reels", type: "Reel", topic: "Desk Setup & Morning Flow", hook: "Setting up a distraction-free workspace in 60 seconds.", objective: "Engagement", cta: "Save this desk aesthetic for inspo." },
    { day: 27, date: "Day 27 • Sat", platform: "Instagram", type: "Community Post", topic: "UGC Showcase", hook: "'How our community starts their Saturday' — a photo dump.", objective: "Community", cta: "Swipe through and leave some love." },
    { day: 28, date: "Day 28 • Sun", platform: "Instagram", type: "Carousel", topic: "Final Week Challenge Prep", hook: "Entering Week 4 of Better Mornings: 3 habits to keep forever.", objective: "Awareness", cta: "Bookmark this wrap-up guide." },
    { day: 29, date: "Day 29 • Mon", platform: "LinkedIn", type: "Carousel", topic: "From Community to Retention", hook: "How challenge-based campaigns reduce customer churn by 32%.", objective: "Education", cta: "Swipe for the retention breakdown." },
    { day: 30, date: "Day 30 • Tue", platform: "Instagram", type: "Static Post", topic: "Challenge Graduation & VIP Offer", hook: "You made it through 30 days. Here is our secret gift to our community.", objective: "Conversion", cta: "Check your DMs or click link in bio for the subscriber exclusive." }
  ],

  // Demo Analytics Dashboard Data
  demoAnalytics: {
    disclaimer: "DEMO DATA — FOR PORTFOLIO PURPOSES ONLY",
    summaryMetrics: [
      { label: "Total Reach", value: "142,500", change: "+34.2%", trend: "up", note: "Driven by educational carousels" },
      { label: "Total Impressions", value: "318,200", change: "+28.7%", trend: "up", note: "High repeat views on reels" },
      { label: "Engagement Rate", value: "4.82%", change: "+1.15%", trend: "up", note: "Industry benchmark is ~1.9%" },
      { label: "Total Saves", value: "6,420", change: "+62.4%", trend: "up", note: "Key utility & bookmark metric" },
      { label: "Total Shares", value: "4,180", change: "+41.0%", trend: "up", note: "Peer-to-peer amplification" },
      { label: "Profile Visits", value: "12,940", change: "+22.8%", trend: "up", note: "Intentional discovery traffic" },
      { label: "Net Followers", value: "+1,850", change: "+14.6%", trend: "up", note: "High-intent organic growth" }
    ],
    formatPerformance: [
      { format: "Carousels", reachPct: 38, engagementPct: 5.4, savesCount: 3840, description: "Highest save-to-reach ratio; powers authority & educational pillars" },
      { format: "Short-form Reels", reachPct: 44, engagementPct: 4.1, savesCount: 1620, description: "Primary discovery engine; captures top-of-funnel non-followers" },
      { format: "Stories", reachPct: 12, engagementPct: 6.8, savesCount: 210, description: "Deepest 1-on-1 direct message conversations and sticker replies" },
      { format: "Static Posts", reachPct: 6, engagementPct: 2.9, savesCount: 750, description: "Clean brand aesthetics and quote storytelling cards" }
    ],
    strategicQuestions: [
      {
        question: "Which content earns saves?",
        insight: "Step-by-step guides, resource checklists, and actionable frameworks earn 4.2x more saves than lifestyle imagery alone."
      },
      {
        question: "Which formats generate shares?",
        insight: "Relatable situational humor and 'send this to a friend' peer-validation graphics drive 78% of all outbound DM shares."
      },
      {
        question: "Which hooks improve retention?",
        insight: "Direct problem-first visual hooks ('Stop guessing what to post') maintain 68% audience retention past the 3-second mark."
      },
      {
        question: "Which topics create conversations?",
        insight: "Contrarian opinions on industry norms ('Why consistency does not mean daily posting') spark the highest depth comment threads."
      },
      {
        question: "Which platform performs best for the objective?",
        insight: "Instagram leads for lifestyle discovery & visual carousels, while LinkedIn yields higher long-form professional engagement and founder authority."
      }
    ]
  },

  // Audit Checklist Data
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
