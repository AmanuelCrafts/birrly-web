export type Language = "en" | "am";

export const translations = {
  en: {
    // Navigation
    home: "Home",
    earn: "Earn",
    wallet: "Wallet",
    plans: "Plans",
    profile: "Profile",

    // Auth
    login: "Log In",
    register: "Create Account",
    logout: "Log Out",
    username: "Username",
    password: "Password",
    welcomeBack: "Welcome back",
    welcomeBackSub: "Ready to keep your streak alive?",
    createAccount: "Start building your progress.",
    noAccount: "Don't have an account?",
    hasAccount: "Already have an account?",
    createAccountLink: "Create account",
    loginLink: "Log in",
    signingIn: "Signing you in...",
    invalidCredentials: "Invalid username or password.",
    usernameTaken: "That username is already taken.",
    somethingWrong: "Something went wrong. Please try again.",

    // Home
    currentVip: "Current VIP",
    yourCurrentVip: "Your Current VIP",
    noActiveVip: "No Active VIP",
    noActiveVipSub: "Choose a plan to get started.",
    dailyIncome: "Daily Income",
    dailyTasks: "daily tasks",
    vipPlans: "VIP Plans",
    plansCount: "plans",
    walletHome: "Wallet",
    walletSub: "Your balance will appear here.",
    comingSoon: "Coming soon",
    dailyStreak: "Daily Streak",
    dailyStreakSub: "Complete activities to build your streak.",
    dailyActivities: "Daily Activities",
    dailyActivitiesSub: "Complete tasks and build your streak.",

    // Plans
    choosePlan: "Choose your plan",
    levelUp: "Level up your routine.",
    currentPlan: "Current Plan",
    deposit: "deposit",

    // Earn
    keepStreak: "Keep the streak alive",
    buildStreak: "Build your streak.",
    buildStreakSub: "Complete daily activities. Earn rewards. Level up your routine.",
    dailyTasksEarn: "Daily Tasks",
    achievements: "Achievements",

    // Wallet
    yourFinances: "Your finances",
    walletComing: "Your wallet is coming soon.",
    walletComingSub: "Balance, transactions, deposits, and withdrawals — all in one place.",
    deposits: "Deposits",
    withdrawals: "Withdrawals",

    // Profile
    yourAccount: "Your account",
    memberSince: "Member since",
    status: "Status",
    active: "ACTIVE",
    suspended: "SUSPENDED",
    none: "None",
  },
  am: {
    // Navigation
    home: "መነሻ",
    earn: "ያግኙ",
    wallet: "ዋሌት",
    plans: "እቅዶች",
    profile: "ፕሮፋይል",

    // Auth
    login: "ግባ",
    register: "መለያ ፍጠር",
    logout: "ውጣ",
    username: "የተጠቃሚ ስም",
    password: "የይለፍ ቃል",
    welcomeBack: "እንኳን ደህና መጡ",
    welcomeBackSub: "የእርስዎን ተከታታ ለመቀጠል ዝግጁ ነዎት?",
    createAccount: "የእርስዎን ሂደት መጀመር ይጀምሩ።",
    noAccount: "መለያ የለዎትም?",
    hasAccount: "መለያ አለዎት?",
    createAccountLink: "መለያ ፍጠር",
    loginLink: "ግባ",
    signingIn: "እየገባሁ ነው...",
    invalidCredentials: "የተጠቃሚ ስም ወይም የይለፍ ቃል ትክክል አይደለም።",
    usernameTaken: "ያን የተጠቃሚ ስም አስቀድሞ ተወስዷል።",
    somethingWrong: "የሆነ ስህተት ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።",

    // Home
    currentVip: "የአሁኑ VIP",
    yourCurrentVip: "የእርስዎ የአሁኑ VIP",
    noActiveVip: "ምንም VIP የለም",
    noActiveVipSub: "ለመጀመር እቅድ ይምረጡ።",
    dailyIncome: "የዕለት ገቢ",
    dailyTasks: "የዕለት ተግባሮች",
    vipPlans: "VIP እቅዶች",
    plansCount: "እቅዶች",
    walletHome: "ዋሌት",
    walletSub: "ቀሪ ሂሳብዎ እዚህ ይታያል።",
    comingSoon: "በቅርቡ",
    dailyStreak: "የዕለት ተከታታ",
    dailyStreakSub: "ተከታታዎን ለመገንባት እንቅስቃሴዎችን ያከናውኑ።",
    dailyActivities: "የዕለት እንቅስቃሴዎች",
    dailyActivitiesSub: "ተግባሮችን ያከናውኑ እና ተከታታዎን ይገንቡ።",

    // Plans
    choosePlan: "የእርስዎን እቅድ ይምረጡ",
    levelUp: "የእርስዎን ሂደት ያሻሽሉ።",
    currentPlan: "የአሁኑ እቅድ",
    deposit: "ተቀማጭ",

    // Earn
    keepStreak: "ተከታታዎን ያስቀምጡ",
    buildStreak: "ተከታታዎን ይገንቡ።",
    buildStreakSub: "የዕለት እንቅስቃሴዎችን ያከናውኙ። ሽልማቶችን ያግኙ። የእርስዎን ሂደት ያሻሽሉ።",
    dailyTasksEarn: "የዕለት ተግባሮች",
    achievements: "ስኬቶች",

    // Wallet
    yourFinances: "የእርስዎ ገንዘብ",
    walletComing: "ዋሌትዎ በቅርቡ ይመጣል።",
    walletComingSub: "ቀሪ ሂሳብ፣ ግብይቶች፣ ተቀማጭ እና የውጤት ሂሳብ — ሁሉም በአንድ ስፍራ።",
    deposits: "ተቀማጭ ሂሳብ",
    withdrawals: "የውጤት ሂሳብ",

    // Profile
    yourAccount: "የእርስዎ መለያ",
    memberSince: "አባል የሆኑበት",
    status: "ሁኔታ",
    active: "ገቢር",
    suspended: "ታግዷል",
    none: "ምንም",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];
