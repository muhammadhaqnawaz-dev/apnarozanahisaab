/* ============================================================
   APNA ROZANA HISAAB — SETTINGS FILE (config.js)

   QAYDAY (bohat zaroori):
   1) Sirf quotes ("") ke ANDAR badlein. Baqi kuch na chhedein.
   2) Har line ke aakhir mein comma (,) rehne dein. Sirf sab se aakhri item
      ke baad comma nahi hota.
   3) Jo link khali ("") rahega wo app mein nazar nahi aayega.
   4) Naya link chahiye to kisi ek { t: "...", u: "..." }, wali poori line
      copy karke neeche paste karein aur naam/link badal dein.
   ============================================================ */
window.APP_CONFIG = {

  /* ---- 1) SUPABASE (login ke liye) — in dono ko mat chhedein ---- */
  supabaseUrl: "https://grvcojkwamktfdzgofpk.supabase.co",
  supabaseKey: "sb_publishable_JQCoeW6pYhiR-ItHl_oUeA_s6Sq_U1X",

  /* ---- 2) APP KA VERSION (footer aur About mein nazar aata hai) ---- */
  version: "1.1",

  /* ---- 3) FEEDBACK BUTTON ----
     Yahan Google Form ya WhatsApp ka link likhein. Khali ho to
     feedback button aap ke upar wale brand link par le jayega. */
  feedbackUrl: "",   // "" ya "https://wa.me/923088970242"

  /* ---- 4) APNI BRANDING ---- */
  brand: {
    owner: "Muhammad Haq Nawaz",
    name:  "Digital Afridi Services",

    /* ===> YEH SAB SE ZAROORI LINK HAI <===
       "By Muhammad Haq Nawaz – Digital Afridi Services" wala button
       click karne par yahan jayega. Abhi apna LinkedIn profile link likhein,
       baad mein apni website ka link yahin badal dein. */
  url:   "https://www.linkedin.com/in/mhaqnawaz",

  tag:   "Free personal expense tracker",
  links: [
      { t: "💼 LinkedIn",  u: "https://www.linkedin.com/in/mhaqnawaz" },
      { t: "🌐 Website",   u: "" },
      { t: "▶️ YouTube",   u: "https://www.youtube.com/@digitalafridiofficial" },
      { t: "🔗 Linktree",  u: "https://linktr.ee/digitalafridi" },
      { t: "📘 Facebook",  u: "https://www.facebook.com/share/1BxZkTqiTC/" },
      { t: "📸 Instagram", u: "https://instagram.com/haqqu_afridi" },
      { t: "💬 WhatsApp",  u: "https://wa.me/923088970242" },
      { t: "✉️ Email",     u: "mailto:contact.digitalafridi@gmail.com" }
    ]
  }
};
