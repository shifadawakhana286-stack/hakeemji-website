export interface Product {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  seoDescription: string;
  price: number;
  oldPrice?: number;
  images: string[];
  ingredients: string[];
  uses?: string[];
  benefits?: string[];
  dosage: string;
  quantity?: string;
  storage: string[];
}

export const products: Product[] = [


{
  id: 1,
  name: "Chandanvalalakshayadi Oil for CYST",
  price: 999,

  description:
    "Chandanvalalakshayadi Oil is a traditional herbal oil formulation prepared with a combination of Ayurvedic herbs and ingredients. The formulation is presented for use in conditions listed on the product label.",

  shortDescription:
    "Traditional herbal oil formulation for cyst-related wellness and conditions listed on the product label.",

  seoDescription:
    "Chandanvalalakshayadi Oil for CYST is a traditional herbal formulation containing Ayurvedic herbs and oils, prepared according to a classical R.T.S. Part 1 based formula.",

  images: [
    "/products/new1.png",
    "/products/new-2.png",
  ],

  ingredients: [
    "Safed Chandan – 483 mg",
    "Kharenti – 483 mg",
    "Laakh – 483 mg",
    "Khas – 483 mg",
    "Mulethi – 483 mg",
    "Soya – 483 mg",
    "Kutki – 483 mg",
    "Devdaru – 483 mg",
    "Curcumin – 483 mg",
    "Kut – 483 mg",
    "Majeeth – 483 mg",
    "Netravala – 483 mg",
    "Ashwagandha – 483 mg",
    "Daruhaldi – 483 mg",
    "Marodfali – 483 mg",
    "Nagarmotha – 483 mg",
    "Mooli – 483 mg",
    "Choti Elaichi – 483 mg",
    "Daalchini – 483 mg",
    "Naag Kesar – 483 mg",
    "Raasna – 483 mg",
    "Aamod – 483 mg",
    "Champa Phool – 483 mg",
    "Anamool – 483 mg",
    "Pithaar – 483 mg",
    "Sendha Namak – 483 mg",
    "Vid Lavang – 483 mg",
    "Til Oil – 3 ml",
    "Bakri Dugd – 483 mg",
  ],

  uses: [
    "Heart Blockage",
    "Cancer Cyst",
    "Cells Blockage",
    "Cholesterol",
    "Fibrous Cyst",
    "Calcium Oxalate",
    "Body Weakness",
    "Blood Clot in Brain",
    "Veins Blockage",
    "Gartner's Duct Cyst",
    "Parapelvis Cyst",
  ],

  dosage:
    "Use as directed by a qualified physician.",

  storage: [
    "Store in a cool and dry place.",
    "Keep the container tightly closed.",
    "Keep away from direct sunlight.",
  ],
},

{
  id: 4,
  name: "Kankayan Vati Piles",
  price: 250,

  description:
    "Kankayan Vati is a traditional Ayurvedic formulation prepared with a combination of herbal ingredients. It is traditionally indicated for piles, fissures, hemorrhoids, pain, itching, and bleeding-related rectal discomfort.",

  shortDescription:
    "Traditional Ayurvedic tablets for piles, fissures, hemorrhoids, pain, itching, and bleeding.",

  seoDescription:
    "Kankayan Vati Piles is a traditional Ayurvedic herbal formulation indicated for piles, fissures, hemorrhoids, pain, itching, and bleeding-related rectal discomfort.",

  images: [
    "/products/kankayan-vati-piles.png",
    "/products/kankayan-vati-piles-2.png",
  ],

  ingredients: [
    "Kachoor – 31 mg",
    "Pohkarmool – 31 mg",
    "Danti – 31 mg",
    "Cheeta – 31 mg",
    "Arhar Ki Jad – 31 mg",
    "Arisht – 31 mg",
    "Bach – 31 mg",
    "Nisoth – 33 mg",
    "Hing – 71 mg",
    "Jabakhhar – 61 mg",
    "Amalvet – 61 mg",
    "Ajwain – 9 mg",
    "Jeera – 8 mg",
    "Kali Mirch – 8 mg",
    "Dhaniya – 8 mg",
    "Kalonji – 8 mg",
    "Ajmoath – 8 mg",
    "Bijora Nimbu Ras – 8 mg",
  ],

  uses: [
    "Inflamed Piles",
    "Fissures",
    "Hemorrhoids",
    "Pain",
    "Itching",
    "Bleeding",
    "Painful Rectal Condition",
  ],

  dosage:
    "2–2 tablets three times a day with warm water or buttermilk, or as directed by the physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Keep out of reach of children.",
  ],
},


{
  id: 12,
  name: "Kamdev Tablet DHAT",
  price: 199,

  description:
    "Kamdev Tablet is a traditional Ayurvedic herbal formulation made with herbal ingredients and formulated according to Ayurvedic principles. The label describes it as a formulation traditionally used to support male vitality, reproductive health, and overall wellness.",

  shortDescription:
    "Traditional Ayurvedic herbal tablets for male vitality, reproductive health, and overall wellness.",

  seoDescription:
    "Kamdev Tablet DHAT is an Ayurvedic herbal formulation containing Koch Ki Giri, Safed Musli, Makhana Ki Tuddi, Tal Makhana, and Mishri, traditionally used to support male vitality and reproductive wellness.",

  images: [
    "/products/kamdev-tablet-dhat.png",
    "/products/kamdev-tablet-dhat2.png",
  ],

  ingredients: [
    "Koch Ki Giri – 6.25 gm",
    "Safed Musli – 12.50 gm",
    "Makhana Ki Tuddi – 25.00 gm",
    "Tal Makhana – 25.00 gm",
    "Mishri – 31–35 gm",
  ],

  uses: [
    "Male Vitality",
    "Reproductive Health",
    "Overall Wellness",
    "Low Vitality",
    "Oligospermia (Low Sperm Count)",
    "General Weakness",
    "Reduced Sexual Performance",
    "Nocturnal Emissions",
    "Low Semen Quantity",
    "Decreased Libido",
    "Mental & Physical Fatigue",
  ],

  dosage:
    "Take 1 tablet in the evening with milk, or as directed by the physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Keep out of reach of children.",
  ],
},




  {
    id: 5,
    name: "Madan Manjari",
    price: 1300,
    oldPrice: 3000,
    description: "",
    shortDescription: "",
    seoDescription: "",
    images: [
      "/products/madan-manjari.png",
      "/products/madan-manjari2.png",
    ],
    ingredients: [],
    uses: [],
    dosage: "",
    storage: [],
  },

  // ============================================================
  // Product 6 - Kamla Her Ras Face Clean
  // ============================================================

  {
    id: 6,
    name: "Kamla Her Ras Face Clean",
    price: 250,
    oldPrice: 300,

    description:
      "Kamla Her Ras Face Clean is a premium Unani herbal formulation specially designed to promote naturally healthy, clear, and glowing skin. Prepared using carefully selected traditional herbs, it helps reduce acne and pimples, minimizes black spots and dark circles, supports healthy skin texture, and enhances the skin's natural radiance.",

    shortDescription:
      "Premium Unani herbal medicine for glowing skin, acne relief, black spots, and dark circles.",

    seoDescription:
      "Kamla Her Ras Face Clean is a traditional Unani herbal formulation that helps promote glowing skin, reduce acne, black spots, and dark circles while supporting naturally healthy skin.",

    images: [
      "/products/kamla-her-face-clean.png",
      "/products/kamla-her-face-clean2.png",
    ],

    ingredients: [
      "Lal Chandan",
      "Khas",
      "Padmakh",
      "Nagar Motha",
      "Giloy",
      "Pitt Papda",
      "Neem Chaal",
      "Nilofer",
      "Kasni Beej",
      "Sonf",
      "Kaddu Beej",
      "Naagbala",
      "Dhaniya",
      "Tulsi Beej",
      "Bahera",
      "Ghamasha",
      "Mudi",
      "Mulheti",
      "Chhoti Elaichi",
      "Post Dodi",
    ],

    uses: [
      "Glowing Skin",
      "Acne & Pimples",
      "Black Spots",
      "Dark Circles",
      "Healthy Skin",
    ],

    dosage:
      "20–20 ml twice daily (Morning & Evening) with lukewarm water or as directed by a qualified physician.",

    storage: [
      "Store in a cool & dry place.",
      "Shake well before use.",
      "Keep away from direct sunlight.",
    ],
  },



{
  id: 11,
  name: "Maharas Nadi Syrup",
  price: 2500,
  oldPrice: 3000,

  description:
    "Maharas Nadi Syrup is an Ayurvedic classical medicine formulated with a traditional combination of herbal ingredients. It is presented for supporting vitality, stamina, strength and overall wellness.",

  shortDescription:
    "Ayurvedic herbal formulation for strength, stamina, vitality and overall wellness.",

  seoDescription:
    "Maharas Nadi Syrup is an Ayurvedic classical herbal formulation made with traditional ingredients to support strength, stamina, vitality and overall wellness.",

  images: [
    "/products/DHATU1.png",
    "/products/DHATU2.png",
  ],

  ingredients: [
    "Saptavar",
    "Rasna",
    "Jwasa",
    "Varidhara Mool",
    "Erand Mool",
    "Dev Daru",
    "Kachur",
    "Bach",
    "Anupas Jad",
    "Gokhru",
    "Ashwagandha",
    "Atis",
    "Amaltas Gudha",
    "Pippal",
    "Giloy",
    "Kutki",
    "Dhaniya",
    "Saunth",
    "Har",
    "Chavya",
    "Nagarmotha",
    "Punarnava",
    "Vidhara",
    "Saunf",
    "Shilajit",
    "Badi Kateli",
    "Jal",
  ],

  uses: [
    "Strength",
    "Stamina",
    "Vitality",
    "Reduced Weakness",
    "Overall Wellness",
  ],

  dosage:
    "20–20 ml twice daily (Morning & Evening) with lukewarm water or as directed by a physician.",

  storage: [
    "Store in a cool & dry place.",
    "Shake well before use.",
  ],
},


  // ============================================================
  // Product 7 - Tagaradi Kwath
  // ============================================================

  {
    id: 7,
    name: "Tagaradi Kwath - Piles Care",
    price: 199,
    oldPrice: 250,

    description:
      "Tagaradi Kwath is a traditional Ayurvedic herbal formulation specially prepared to support the management of piles (hemorrhoids) and fissures. It helps relieve constipation, supports comfortable bowel movements, reduces discomfort associated with bleeding and non-bleeding piles, and promotes anorectal health.",

    shortDescription:
      "Herbal Ayurvedic formulation for piles, fissures, constipation, and anorectal wellness.",

    seoDescription:
      "Tagaradi Kwath Piles Care is a traditional Ayurvedic herbal medicine formulated to support relief from piles, fissures, constipation, and associated discomfort while promoting healthy bowel function.",

    images: [
      "/products/piles-care-1.png",
      "/products/piles-care-2.png",
    ],

    ingredients: [
      "Murakkab",
      "Tagar",
      "Pitt Papda",
      "Amla",
      "Nagarmotha",
      "Kutki",
      "Ajwain",
      "Jamalgota",
      "Bhringraj",
      "Lal Chandan",
      "Daruhaldi",
      "Shahjeera",
      "Giloy",
      "Kabab Chini",
      "Amla",
      "Gandhak",
      "Harad",
      "Shankhpushpi",
      "Shatavari",
    ],

    uses: [
      "Piles",
      "Fissures",
      "Constipation",
      "Bleeding Piles",
      "Non-Bleeding Piles",
      "Anorectal Wellness",
    ],

    dosage:
      "20–20 ml twice daily (Morning & Evening) with lukewarm water or as directed by a physician.",

    storage: [
      "Store in a cool & dry place.",
      "Shake well before use.",
      "Keep away from direct sunlight.",
    ],
  },

  // ============================================================
  // Product 8 - Ameer Ras Uric Acid
  // ============================================================

  {
    id: 8,
    name: "Ameer Ras Uric Acid",
    price: 250,
    oldPrice: 300,

    description:
      "Ameer Ras Uric Acid is a premium Ayurvedic herbal formulation specially developed to help maintain healthy uric acid levels and support joint health. It assists in relieving gouty arthritis, joint pain, swelling, stiffness, and inflammatory discomfort while promoting mobility.",

    shortDescription:
      "Ayurvedic herbal tablets for uric acid, gouty arthritis, swelling, and joint pain.",

    seoDescription:
      "Ameer Ras Uric Acid is an Ayurvedic herbal tablet formulated to support healthy uric acid levels, relieve gouty arthritis, joint pain, swelling, and improve overall joint health naturally.",

    images: [
      "/products/uric-acid-1.png",
      "/products/uric-acid-2.png",
    ],

    ingredients: [
      "Chanditar – 40 mg",
      "Raskapoor – 40 mg",
      "Rumisingraf – 40 mg",
      "Dalchini – 40 mg",
      "Sendha Namak – 40 mg",
    ],

    uses: [
      "Uric Acid",
      "Gouty Arthritis",
      "Joint Pain",
      "Swelling",
      "Joint Mobility",
    ],

    dosage:
      "Take 1 tablet twice daily (Morning & Evening) or as directed by a qualified physician.",

    storage: [
      "Store in a cool & dry place.",
      "Keep away from moisture.",
      "Keep out of reach of children.",
    ],
  },
    // ============================================================
  // Product 9 - Jalodarari Ras Detox & Constipation
  // ============================================================

  {
    id: 9,
    name: "Jalodarari Ras Detox & Constipation",
    price: 250,
    oldPrice: 300,

    description:
      "Jalodarari Ras Detox & Constipation is a classical Ayurvedic herbal formulation specially designed to support digestive health, natural detoxification, and regular bowel movements. It helps relieve constipation, improves digestion, reduces bloating and gas, promotes intestinal cleansing, and supports healthy gut function.",

    shortDescription:
      "Herbal Ayurvedic tablets for natural detox, constipation relief, healthy digestion, and gut cleansing.",

    seoDescription:
      "Jalodarari Ras Detox & Constipation is an Ayurvedic herbal formulation that helps support natural detoxification, relieve constipation, improve digestion, reduce bloating, and promote healthy bowel movements for overall digestive wellness.",

    images: [
      "/products/detox-1.png",
      "/products/detox-2.png",
    ],

    ingredients: [
      "Shuddh Para",
      "Shuddh Gandhak",
      "Shuddh Mangsheel",
      "Haldi",
      "Shuddh Jamalgota",
      "Harar",
      "Baheda",
      "Amla",
      "Sonth",
      "Peepal",
      "Kali Mirch",
      "Cheete Ki Chhaal",
      "Danti Mool",
      "Senna",
      "Bhringraj",
    ],

    uses: [
      "Constipation",
      "Poor Digestion",
      "Body Detoxification",
      "Gas & Bloating",
      "Sluggish Bowel Movement",
      "Digestive Cleansing",
      "Intestinal Wellness",
    ],

    dosage:
      "Take 1 tablet twice daily (Morning & Evening) with lukewarm water after meals or as directed by a qualified Ayurvedic physician.",

    storage: [
      "Store in a cool & dry place.",
      "Keep the container tightly closed.",
      "Protect from direct sunlight and moisture.",
      "Keep out of reach of children.",
    ],
  },

  // ============================================================
  // Product 10 - Madan Manjari Vati
  // ============================================================


  {
  id: 14,
  name: "APURV TILA TAIL with Kesar & Kastoori",
  price: 399,

  description:
    "APURV TILA TAIL is a traditional massage oil formulated with herbal ingredients including Kesar and Kastoori. The product label describes it as a massage oil for men and recommends massage for a few minutes before use.",

  shortDescription:
    "Traditional massage oil for men with Kesar & Kastoori.",

  seoDescription:
    "APURV TILA TAIL with Kesar & Kastoori is a traditional herbal massage oil containing Safed Somal, Desi Ghee, Kesar, Kastoori, Jaiphal, Jaivitri, Long, Beerbahuti and Aak Doodh.",

  images: [
    "/products/tila-tail.png",
    "/products/tila-tail-2.png",
  ],

  ingredients: [
    "Safed Somal – 15 gm",
    "Desi Ghee – 30 ml",
    "Kesar – 0.15 mg",
    "Kastoori – 0.15 mg",
    "Jaiphal – 0.15 mg",
    "Jaivitri – 0.75 mg",
    "Long – 0.75 mg",
    "Beerbahuti – 0.75 mg",
    "Aak Doodh – Q.S.",
  ],

  uses: [
    "Massage Oil for Men",
    "Sexual Wellness",
    "Male Vitality",
    "Longer Foreplay",
    "Sexual Performance",
  ],

  dosage:
    "Massage with APURV TILA TAIL for about 3–8 minutes as directed on the product label.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Keep the container tightly closed.",
  ],
},

{
  id:15,
  name: "Amar Sundari Vati - Hormones",
  price: 750,

  description:
    "Amar Sundari Vati is an Ayurvedic classical medicine formulated with a combination of traditional herbal ingredients. The product label presents it as a formulation for hormone production, natural hormone support, and maintaining healthy hormonal balance.",

  shortDescription:
    "Ayurvedic herbal formulation for hormone production, hormone balance, and women's wellness.",

  seoDescription:
    "Amar Sundari Vati is an Ayurvedic classical herbal formulation containing traditional herbs and ingredients, presented for natural hormone support and healthy hormonal balance.",

  images: [
    "/products/amar-sundari-1.png",
    "/products/amar-sundari-2.png",
  ],

  ingredients: [
    "Sonth – 19.04 mg",
    "Pipal – 19.04 mg",
    "Kali Mirch – 19.04 mg",
    "Amla – 19.04 mg",
    "Herre – 19.04 mg",
    "Baheda – 19.04 mg",
    "Reduka – 19.04 mg",
    "Pipla Mool – 19.04 mg",
    "Chitrak Mool – 19.04 mg",
    "Chaal – 19.04 mg",
    "Loh Bhasam – 19.04 mg",
    "Dal Chini – 19.04 mg",
    "Tejpat – 19.04 mg",
    "Nagkeshar – 19.04 mg",
    "Elaichi Choti – 19.04 mg",
    "Shudh Parad – 19.04 mg",
    "Shudh Gandhak – 19.04 mg",
    "Shudh Bachnaag – 19.04 mg",
    "Vaviding – 19.04 mg",
    "Akarkara – 19.04 mg",
    "Nagarmotha – 19.04 mg",
  ],

  uses: [
    "Hormone Production",
    "Natural Hormone Support",
    "Hormone Balance",
    "Healthy Hormonal Wellness",
  ],

  dosage:
    "2 tablets three times a day with Khajoor (Dates), or as directed by the physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Keep the container tightly closed.",
    "Keep out of reach of children.",
  ],
},

{
  id: 8,
  name: "Pradar Nashak Powder",
  price: 399,

  description:
    "Pradar Nashak Powder is an Ayurvedic classical herbal formulation prepared from traditional herbal ingredients. The product label presents it for women's wellness and mentions support for menstrual problems, back pain, joint pain, and sexual weakness.",

  shortDescription:
    "Ayurvedic herbal powder for menstrual problems, back pain, joint pain, and sexual weakness.",

  seoDescription:
    "Pradar Nashak Powder is an Ayurvedic classical herbal formulation containing traditional herbal ingredients and is presented for women's wellness, menstrual problems, back pain, joint pain, and sexual weakness.",

  images: [
    "/products/pradar-nashak-1.png",
    "/products/pradar-nashak-2.png",
  ],

  ingredients: [
    "Pushyaug Vhuran – 14.2 gm",
    "Khun Kharaba – 14.2 gm",
    "Ambla – 14.2 gm",
    "Raal – 14.2 gm",
    "Pushyaug Vhuran – 14.2 gm",
    "Khur Khabra – 14.2 gm",
    "Ambla – 14.2 gm",
  ],

  uses: [
    "Back Pain",
    "Joint Pain",
    "Sexual Weakness",
    "Menstrual Problems",
  ],

  dosage:
    "1–1 gram twice daily with milk or as directed by a physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Keep the container tightly closed.",
  ],
},

{
  id: 15,
  name: "Kalyan Sundar Ras Cyst",
  price: 350,

  description:
    "Kalyan Sundar Ras is an Ayurvedic classical formulation prepared with traditional ingredients. The product label presents it for use in cyst-related and other conditions listed on the product packaging.",

  shortDescription:
    "Ayurvedic classical formulation for cyst-related wellness and conditions listed on the product label.",

  seoDescription:
    "Kalyan Sundar Ras Cyst is an Ayurvedic classical formulation containing Ras Sindor, Abrak Bhasm, Chandi Bhasm, Sona Bhasm, Tamr Bham, Sudh Singraf, Chitak, and Hasti Sundhi.",

  images: [
    "/products/kalyan-sundar-1.png",
    "/products/kalyan-sundar-2.png",
  ],

  ingredients: [
    "Ras Sindor – 33.3 mg",
    "Abrak Bhasm – 33.3 mg",
    "Chandi Bhasm – 00.3 mg",
    "Sona Bhasm – 00.3 mg",
    "Tamr Bham – 33.3 mg",
    "Sudh Singraf – 33.3 mg",
    "Chitak – 33 mg",
    "Hasti Sundhi – 33 mg",
  ],

  uses: [
    "Cyst",
    "Ganth",
    "Brain Tumer",
    "Cencer",
    "Hart Rog",
    "Mastisk Vikar",
    "Shul",
    "Bhram",
    "Murchhya",
    "Sukhi Khasi",
    "Swas",
    "Mutra Pind Rog",
    "Pramey",
    "Napusankta",
    "Kidney Rog",
    "Lungs Vikar",
  ],

  dosage:
    "2–2 tablets twice a day with warm water or as directed by the physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Keep the container tightly closed.",
    "Keep out of reach of children.",
  ],
},

{
  id: 16,
  name: "Lodhrasav for CYST",
  price: 275,

  description:
    "Lodhrasav is an Ayurvedic classical herbal formulation prepared with a combination of traditional herbs. The product label presents it as a formulation useful for fibrous cyst, parapelvic cyst, and Gartner's duct cyst.",

  shortDescription:
    "Ayurvedic herbal formulation traditionally used for fibrous, parapelvic, and Gartner's duct cysts.",

  seoDescription:
    "Lodhrasav for CYST is an Ayurvedic classical herbal formulation containing traditional herbs and is presented for fibrous cyst, parapelvic cyst, and Gartner's duct cyst.",

  images: [
    "/products/lodhrasav-1.png",
    "/products/lodhrasav-2.png",
  ],

  ingredients: [
    "Vachadi – 5.05 gm",
    "Kachur – 5.05 gm",
    "Pushkarmool – 5.05 gm",
    "Elaichi – 5.05 gm",
    "Mulethi – 5.05 gm",
    "Nagbala – 5.05 gm",
    "Harad – 5.05 gm",
    "Baheda – 5.05 gm",
    "Amla – 5.05 gm",
    "Ajwain – 5.05 gm",
    "Vach – 5.05 gm",
    "Chitrak – 5.05 gm",
    "Triphala – 5.05 gm",
    "Indrayav – 5.05 gm",
    "Priyangu – 5.05 gm",
    "Kutajmool – 5.05 gm",
    "Chirayata – 5.05 gm",
    "Bharangi – 5.05 gm",
    "Nagarmotha – 5.05 gm",
    "Chitrakmool – 5.05 gm",
    "Kutaj – 5.05 gm",
    "Atis – 5.05 gm",
    "Patha – 5.05 gm",
    "Indrajau – 5.05 gm",
    "Nagkeshar – 5.05 gm",
    "Kuchla Chhal – 5.05 gm",
    "Netraja – 5.05 gm",
    "Kali Mirch – 5.05 gm",
    "Nagarmotha – 5.05 gm",
    "Shahad – 40 gm",
  ],

  uses: [
    "Fibrous Cyst",
    "Parapelvic Cyst",
    "Gartner's Duct Cyst",
  ],

  dosage:
    "20–20 ml twice daily with lukewarm water or as directed by a qualified physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Shake well before use.",
    "Keep the container tightly closed.",
  ],
},

{
  id: 17,
  name: "Charmrog Nashak Malham",
  price: 150,

  description:
    "Charmrog Nashak Malham is a traditional herbal ointment formulated with a combination of herbal ingredients. The product label indicates its use for external application in various skin conditions.",

  shortDescription:
    "Traditional herbal ointment for external use in various skin conditions.",

  seoDescription:
    "Charmrog Nashak Malham is a traditional herbal ointment containing a combination of herbs and ingredients, formulated for external application in skin conditions listed on the product label.",

  images: [
    "/products/charmrog-nashak-1.png",
    "/products/charmrog-nashak-2.png",
  ],

  ingredients: [
    "Kasis – 0.3 gm",
    "Harital – 0.3 gm",
    "Baibidang – 0.3 gm",
    "Kuth – 0.3 gm",
    "Sindur – 0.3 gm",
    "Neem Patti – 0.3 gm",
    "Manjith – 0.3 gm",
    "Lodhi – 0.3 gm",
    "Galdi – 0.3 gm",
    "Memsil – 0.3 gm",
    "Gugal – 0.3 gm",
    "Nilathotha – 0.3 gm",
    "Ral – 0.3 gm",
    "Karanj – 0.3 gm",
    "Mahua Chhal – 0.3 gm",
    "Pajhak – 0.3 gm",
    "Daruhaldi – 0.3 gm",
    "Kabila – 0.3 gm",
    "Mom – 0.3 gm",
    "Sarso – 0.3 gm",
    "Lalchandan – 0.3 gm",
    "Anant Mul – 0.3 gm",
    "Jatamasi – 0.3 gm",
    "Pamar Bij – 0.3 gm",
    "Motha – 0.3 gm",
    "Gandhak – 0.3 gm",
    "Kali Mirch – 0.3 gm",
    "Rasot – 0.3 gm",
    "Kher – 0.3 gm",
    "Back – 0.3 gm",
    "Siras – 0.3 gm",
    "Harad – 0.3 gm",
    "Go Ghrat – 30 gm",
  ],

  uses: [
    "Psoriasis",
    "Pimple",
    "Black Patches",
    "Dermatitis",
    "Litching Rashes",
    "Eczema",
    "Acne",
  ],

  dosage:
    "For external use only. Apply as directed by a qualified physician.",

  storage: [
    "Store in a cool place.",
    "Keep away from heat.",
    "For external use only.",
    "Keep out of reach of children.",
  ],
},

{
  id: 18,
  name: "Dhatu Paushtik With Musli",
  price: 275,

  description:
    "Dhatu Paushtik is an Ayurvedic classical herbal powder formulated with traditional herbal ingredients. The product label describes it as a herbal medicine intended for middle-aged adults and traditionally used to support vitality, reproductive wellness, and overall strength.",

  shortDescription:
    "Ayurvedic herbal powder with Musli for vitality, strength, reproductive wellness, and overall health.",

  seoDescription:
    "Dhatu Paushtik With Musli is an Ayurvedic classical herbal powder containing Safed Musli and other traditional ingredients, presented for vitality, reproductive wellness, strength, and overall wellbeing.",

  images: [
    "/products/dhatu-paushtik-1.png",
    "/products/dhatu-paushtik-2.png",
  ],

  ingredients: [
    "Shalpati – 4.34 gm",
    "Gokhru – 4.34 gm",
    "Beera Bara – 4.34 gm",
    "Beera Band – 4.34 gm",
    "Vesh Lochan – 4.34 gm",
    "Kawa Cheeni – 4.34 gm",
    "Choub Cheeni – 4.34 gm",
    "Kaunch Ke Beej – 4.34 gm",
    "Safed Musli – 4.34 gm",
    "Saunth – 4.34 gm",
    "Kali Mirch – 4.34 gm",
    "Peepal – 4.34 gm",
    "Saalam Mishi – 4.34 gm",
    "Gattha – 4.34 gm",
    "Bidari Kandra – 4.34 gm",
    "Arangandh – 4.34 gm",
    "Nishodh – 26.08 gm",
  ],

  uses: [
    "Male Vitality",
    "Reproductive Wellness",
    "General Weakness",
    "Sexual Wellness",
    "Nocturnal Emissions",
    "Low Vitality",
    "Scanty Semen",
    "Libido Support",
    "Mental & Physical Fatigue",
  ],

  dosage:
    "5 gm with milk or fresh water before sleep, or as directed by the physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Keep the container tightly closed.",
    "Keep out of reach of children.",
  ],
},

{
  id: 19,
  name: "Sannipatik Kwath Pain Remedy",
  price: 199,

  description:
    "Sannipatik Kwath is an Ayurvedic herbal formulation prepared with a traditional combination of herbs. The product label describes it as useful for different types of pain and conditions associated with aggravated Vata, including joint and knee discomfort.",

  shortDescription:
    "Ayurvedic herbal kwath for joint pain, knee pain, back pain, swelling, and Vata-related discomfort.",

  seoDescription:
    "Sannipatik Kwath Pain Remedy is an Ayurvedic herbal formulation containing traditional herbs such as Baividang, Pippalmool, Dev Daru, Brahmi, Saunth, Kali Mirch, Pippal, Chitrakmool, Kayaphal, and Kamal Kand.",

  images: [
    "/products/sannipatik-kwath-1.png",
    "/products/sannipatik-kwath-2.png",
  ],

  ingredients: [
    "Baividang – 16.6 gm",
    "Pippalmool – 16.6 gm",
    "Dev Daru – 16.6 gm",
    "Indrajav – 16.6 gm",
    "Brahmi – 16.6 gm",
    "Bhangra – 16.6 gm",
    "Saunth – 16.6 gm",
    "Kali Mirch – 16.6 gm",
    "Pippal – 16.6 gm",
    "Chitrakmool – 16.6 gm",
    "Kayaphal – 16.6 gm",
    "Kamal Kand – 16.6 gm",
  ],

  uses: [
    "General Body Pain",
    "Vata-Related Pain",
    "Joint Pain",
    "Knee Pain",
    "Back Pain",
    "Swelling",
    "Lumbago",
    "Arthritic Discomfort",
  ],

  dosage:
    "20–20 ml twice daily (Morning & Evening) with warm water or as directed by a physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Shake well before use.",
    "Keep the container tightly closed.",
  ],
},


{
  id: 20,
  name: "Mass Vati Kwath",
  price: 199,

  description:
    "Mass Vati Kwath is an Ayurvedic herbal formulation prepared with traditional herbal ingredients. The product label presents it as a wellness formulation supporting stamina, skin healing, digestion, bone growth, liver health, hair health, muscle building, antioxidant support, wound healing, and immunity.",

  shortDescription:
    "Ayurvedic herbal kwath for stamina, digestion, muscle support, skin health, and overall wellness.",

  seoDescription:
    "Mass Vati Kwath is an Ayurvedic herbal formulation containing Ashwagandha, Jatamansi, Khurasani Ajwain Beej, and water, presented for stamina, digestion, muscle support, skin health, and overall wellness.",

  images: [
    "/products/mass-vati-1.png",
    "/products/mass-vati-2.png",
  ],

  ingredients: [
    "Ashwagandha – 66.6 gm",
    "Jatamansi – 66.6 gm",
    "Khurasani Ajwain Beej – 66.6 gm",
    "Water – Q.S.",
  ],

  uses: [
    "Stress & Urinary Wellness",
    "Stamina Support",
    "Skin Healing",
    "Hair Loss Support",
    "Appetite Control",
    "Muscle Building",
    "Easy Digestion & Absorption",
    "Antioxidant & Anti-Aging Support",
    "Bone Growth",
    "Wound Healing",
    "Fat Reduction",
    "Immunity Support",
    "Liver Health",
  ],

  dosage:
    "20–20 ml twice daily (Morning & Evening) with warm water or as directed by a physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Shake well before use.",
    "Keep the container tightly closed.",
  ],
},

{
  id: 21,
  name: "Argyavdhadi Kwath Gas Kabz",
  price: 199,

  description:
    "Argyavdhadi Kwath is an Ayurvedic classical herbal formulation prepared with traditional ingredients. The product label presents it for digestive wellness and support in conditions related to gas, constipation, and acidity.",

  shortDescription:
    "Ayurvedic herbal kwath for gas, constipation, acidity, and digestive wellness.",

  seoDescription:
    "Argyavdhadi Kwath Gas Kabz is an Ayurvedic classical herbal formulation containing Amaltaas, Kutki, Nishoth, Munakka, Sanay, Badi Harad, Gulab, Gulkand, and water.",

  images: [
    "/products/argyavdhadi-kwath-1.png",
    "/products/argyavdhadi-kwath-2.png",
  ],

  ingredients: [
    "Amaltaas – 14.28 gm",
    "Kutki – 14.28 gm",
    "Nishoth – 14.28 gm",
    "Munakka – 14.28 gm",
    "Sanay – 14.28 gm",
    "Badi Harad – 14.28 gm",
    "Gulab – 14.28 gm",
    "Gulkand – 92 gm",
    "Jal – Q.S.",
  ],

  uses: [
    "Constipation",
    "Gas",
    "Acidity",
    "Digestive Wellness",
    "Bowel Regularity",
  ],

  dosage:
    "10–15 ml in the morning with water or as directed by a physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Shake well before use.",
    "Keep the container tightly closed.",
  ],
},

{
  id: 22,
  name: "Sundari Kalp",
  price: 199,

  description:
    "Sundari Kalp is an Ayurvedic classical herbal formulation prepared with a combination of traditional ingredients. The product label presents it as a formulation for women's wellness and mentions support for menstrual health, body weakness, and related discomforts.",

  shortDescription:
    "Ayurvedic herbal formulation for women's wellness, menstrual health, weakness, and general vitality.",

  seoDescription:
    "Sundari Kalp is an Ayurvedic classical herbal formulation containing Ashok Chhal, Lodh, Shugar, Gudh, Dhadhi Ke Phool, Munakkha, and other traditional herbs and ingredients.",

  images: [
    "/products/sundari-kalp-1.png",
    "/products/sundari-kalp-2.png",
  ],

  ingredients: [
    "Ashok Chhal – 78.12 gm",
    "Lodh – 37.50 gm",
    "Sugar – 78.12 gm",
    "Gudh – 37.50 gm",
    "Dhadhi Ke Phool – 12.50 gm",
    "Munakkha – 15.625 gm",
    "Safed Zeera – 0.625 gm",
    "Nagar Motha – 0.625 gm",
    "Saunth – 0.625 gm",
    "Daru Haldi – 0.625 gm",
    "Kamal Phool – 0.625 gm",
    "Harad – 0.625 gm",
    "Bahera – 0.625 gm",
    "Amla – 0.625 gm",
    "Aam Guthli – 0.625 gm",
    "Kesar – 0.625 gm",
    "Vasa Mool – 0.625 gm",
    "Safed Chandan – 0.625 gm",
    "Rasot – 0.625 gm",
    "Paitang Kanth – 0.625 gm",
    "Khadeer Kanth – 0.625 gm",
    "Velgiri – 0.625 gm",
    "Semar Ke Phal – 0.625 gm",
    "Khareti Ke Panchang – 0.625 gm",
    "Bhilawa – 0.625 gm",
    "Anant Mool – 0.625 gm",
    "Gudhal Ke Phool – 0.625 gm",
    "Daal Cheeni – 0.625 gm",
    "Badi Elaichi – 0.625 gm",
    "Long – 0.625 gm",
  ],

  uses: [
    "Menstrual Wellness",
    "Joint Pain",
    "Back Pain",
    "Sexual Weakness",
    "Menstrual Problems",
    "General Weakness",
    "Body Vitality",
  ],

  dosage:
    "Use as directed by a qualified physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Shake well before use.",
    "Keep the container tightly closed.",
  ],
},

{
  id: 23,
  name: "Giloy Sharbat",
  price: 199,

  description:
    "Giloy Sharbat is an Ayurvedic classical herbal preparation made using Giloy (Tinospora cordifolia). The product label describes it as a traditional herbal formulation for general wellness and mentions its use in supporting the body's natural strength and immunity.",

  shortDescription:
    "Ayurvedic Giloy Sharbat for immunity, strength, and overall wellness.",

  seoDescription:
    "Giloy Sharbat is an Ayurvedic classical herbal preparation made with Giloy and traditionally used for general wellness and natural immunity support.",

  images: [
    "/products/giloy-sharbat-1.png",
    "/products/giloy-sharbat-2.png",
  ],

  ingredients: [
    "Giloy (Tinospora cordifolia)",
  ],

  uses: [
    "General Wellness",
    "Natural Immunity Support",
    "Body Strength",
    "Traditional Herbal Wellness",
  ],

  dosage:
    "15–15 ml twice a day with warm water or as directed by a physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Keep the container tightly closed.",
  ],
},

{
  id: 24,
  name: "Rakt Shodhak Sharbat",
  price: 199,

  description:
    "Rakt Shodhak Sharbat is an Ayurvedic herbal formulation containing traditional ingredients. The product label presents it as a blood-purifying herbal preparation and mentions use for boils, skin infections, allergic conditions, itching, burning, and pimples.",

  shortDescription:
    "Ayurvedic herbal sharbat for blood purification and skin-related wellness.",

  seoDescription:
    "Rakt Shodhak Sharbat is an Ayurvedic herbal formulation containing Ushwa, Manjeeth, Souf, Unnaav, Safista, Hansraj, Gauvjawa, and Shehad.",

  images: [
    "/products/rakt-shodhak-1.png",
    "/products/rakt-shodhak-2.png",
  ],

  ingredients: [
    "Ushwa – 4 gm",
    "Manjeeth – 2 gm",
    "Souf – 1 gm",
    "Unnaav – 0–10 gm",
    "Safista – 0–10 gm",
    "Hansraj – 0–40 gm",
    "Gauvjawa – 0–40 gm",
    "Shehad – 30 gm",
  ],

  uses: [
    "Boils",
    "Skin Infection",
    "Allergic Condition",
    "Itching",
    "Burning",
    "Pimples",
  ],

  dosage:
    "10–15 ml in the morning with water or as directed by a physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Shake well before use.",
    "Keep the container tightly closed.",
  ],
},

{
  id: 25,
  name: "Udaramrit Yog",
  price: 199,

  description:
    "Udaramrit Yog is an Ayurvedic herbal formulation presented on the product label for digestive discomfort and related stomach problems. The label highlights gas, acidity, stomach pain, vomiting, and heartburn.",

  shortDescription:
    "Ayurvedic herbal formulation for gas, acidity, stomach pain, vomiting, and heartburn.",

  seoDescription:
    "Udaramrit Yog is an Ayurvedic herbal formulation containing traditional herbal extracts and is presented for digestive wellness, including gas, acidity, stomach discomfort, vomiting, and heartburn.",

  images: [
    "/products/udaramrit-yog-1.png",
    "/products/udaramrit-yog-2.png",
  ],

  ingredients: [
    "Chobdara ka Ras – 2.4 ml",
    "Muli ka Ras – 0.6 ml",
    "Neel ka Ras – 0.6 ml",
    "Adrak ka Ras – 0.1 ml",
    "Sohanjna ka Phool – 0.2 ml",
    "Nausadar – 0.2 ml",
    "Panchlavana – 0.2 ml",
    "Chitrakmool – 0.2 ml",
    "Pippalmool – 0.2 ml",
    "Bhuni Hing – 0.2 ml",
    "Saunth – 0.2 ml",
    "Nirb – 0.2 ml",
    "Pipal – 0.2 ml",
    "Bhuna Jeera – 0.2 ml",
    "Ajwain – 0.2 ml",
    "Loh Bhasm – 0.2 ml",
    "Gud – 2.8 ml",
  ],

  uses: [
    "Gas",
    "Acidity",
    "Stomach Pain",
    "Vomiting",
    "Heartburn",
    "Digestive Discomfort",
  ],

  dosage:
    "10–15 ml in the morning and evening with water or as directed by a physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Shake well before use.",
    "Keep the container tightly closed.",
  ],
},

{
  id: 26,
  name: "Ark Harasra",
  price: 199,

  description:
    "Ark Harasra is an Ayurvedic herbal tonic for liver health, formulated with a combination of traditional herbal ingredients. The product label presents it as a herbal tonic for supporting liver wellness.",

  shortDescription:
    "Ayurvedic herbal tonic for liver health with Tulsi and Giloye.",

  seoDescription:
    "Ark Harasra is an Ayurvedic herbal tonic for liver health containing traditional herbal ingredients including Giloye, Tulsi, Neem, Mulethi, Bahera, and other herbs.",

  images: [
    "/products/ark-harasra-1.png",
    "/products/ark-harasra-2.png",
  ],

  ingredients: [
    "Lal Chandan – 0.1875 gm",
    "Khas – 0.1875 gm",
    "Padmakh – 0.1875 gm",
    "Nagar Motha – 0.1875 gm",
    "Giloye – 0.1875 gm",
    "Pitt Papda – 0.1875 gm",
    "Neem Chaal – 0.1875 gm",
    "Nilofar – 0.1875 gm",
    "Kasni Beej – 0.1875 gm",
    "Sonf – 0.1875 gm",
    "Kaddu Beej – 0.1875 gm",
    "Naagbal – 0.1875 gm",
    "Dhania – 0.1875 gm",
    "Tulsi Beej – 0.1875 gm",
    "Bahera – 0.1875 gm",
    "Ghamasha – 0.1875 gm",
    "Mudi – 0.1875 gm",
    "Mulethi – 0.1875 gm",
    "Chhoti Elaichi – 0.1875 gm",
    "Post Dandi – 0.1875 gm",
  ],

  uses: [
    "Liver Health",
    "Liver Wellness",
    "Digestive Support",
    "Traditional Herbal Wellness",
  ],

  dosage:
    "20–20 ml twice daily with water or as directed by a physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Shake well before use.",
    "Keep the container tightly closed.",
  ],
},

{
  id: 27,
  name: "Shilajeetyadi Vati",
  price: 750,

  description:
    "Shilajeetyadi Vati is an Ayurvedic classical formulation containing traditional ingredients. The product label presents it as an Ayurvedic supplement for men and mentions strength, stamina, power, and support for male vitality.",

  shortDescription:
    "Ayurvedic supplement for men supporting strength, stamina, power, and male vitality.",

  seoDescription:
    "Shilajeetyadi Vati is an Ayurvedic formulation containing Shudh Shilajeet, Abrak Bhasm, Swarn Bhasm, Loh Bhasm, Sudh Guggul, Sudh Tankar, and Bhangra Ras.",

  images: [
    "/products/shilajeetyadi-vati-1.png",
    "/products/shilajeetyadi-vati-2.png",
  ],

  ingredients: [
    "Shushk Shilajeet – 33.3 mg",
    "Abrak Bhasm – 33.3 mg",
    "Swarn Bhasm – 00.3 mg",
    "Loh Bhasm – 33 mg",
    "Sudh Guggul – 33.3 mg",
    "Sudh Tankar – 33.3 mg",
    "Bhangra Ras – 33.3 mg",
  ],

  uses: [
    "Strength",
    "Stamina",
    "Power",
    "Male Vitality",
    "Male Wellness",
  ],

  dosage:
    "1 tablet in the evening with milk or as directed by a physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Keep the container tightly closed.",
    "Keep out of reach of children.",
  ],
},

{
  id: 28,
  name: "Kamini Vidravan Ras with Kesar",
  price: 999,

  description:
    "Kamini Vidravan Ras with Kesar is an Ayurvedic classical formulation containing traditional ingredients. The product label presents it as a formulation for male vitality, stamina, and sexual wellness.",

  shortDescription:
    "Ayurvedic formulation with Kesar for male vitality, stamina, and sexual wellness.",

  seoDescription:
    "Kamini Vidravan Ras with Kesar is an Ayurvedic classical formulation containing Akarkara, Sonth, Long, Kesar, Pipal, Jaifal, Daviki, Chandan, Rineg Ral, Gandhak, and Afeem.",

  images: [
    "/products/kamini-vidravan-ras-1.png",
    "/products/kamini-vidravan-ras-2.png",
  ],

  ingredients: [
    "Akarkara – 0.30 gm",
    "Sonth – 0.30 gm",
    "Long – 0.30 gm",
    "Kesar – 0.30 gm",
    "Pipal – 0.30 gm",
    "Jaifal – 0.30 gm",
    "Daviki – 0.30 gm",
    "Chandan – 0.30 gm",
    "Rineg Ral – 0.08 gm",
    "Gandhak – 0.08 gm",
    "Afeem – Quantity as listed on label",
  ],

  uses: [
    "Male Vitality",
    "Stamina",
    "Sexual Wellness",
    "General Strength",
  ],

  dosage:
    "With milk or fresh water before sleep, or as directed by a physician.",

  storage: [
    "Store in a cool & dry place.",
    "Keep away from direct sunlight.",
    "Keep the container tightly closed.",
    "Keep out of reach of children.",
  ],
},

{
  id: 29,
  name: "Advanced Multinova",
  price: 350,

  description:
    "Advanced Multinova is a vitamins, minerals and antioxidant formula for men and women, containing a blend of herbal extracts and nutrients.",

  shortDescription:
    "Vitamins, minerals & antioxidant formula for men & women.",

  seoDescription:
    "Advanced Multinova is a dietary formula containing Mangosteen Extract, Maca Root Extract, Siberian Ginseng Extract, Blueberry Extract, Raspberry Extract, Black Currant Extract, Cherry Extract, Genoderma Lucidum Extract, Sigru, Kesar and Shilajeet.",

  images: [
    "/products/advanced-multinova-1.png",
    "/products/advanced-multinova-2.png",
  ],

  ingredients: [
    "Mangosteen Extract",
    "Maca Root Extract",
    "Siberian Ginseng Extract",
    "Blueberry Extract",
    "Raspberry Extract",
    "Black Currant Extract",
    "Cherry Extract",
    "Genoderma Lucidum Extract",
    "Sigru",
    "Kesar",
    "Shilajeet",
  ],

  benefits: [
    "Muscle Health",
    "Increase Stamina",
    "Bone Strength",
    "Immune Function",
  ],

  dosage:
    "1 tablet twice daily for 6-12 month for better results, as stated on the product label.",

  quantity: "30 Tablets",

  storage: [
    "Store in a cool and dry place.",
    "Keep away from direct sunlight.",
    "Keep out of reach of children.",
  ],
},


{
  id: 30,
  name: "Asvagandharisht BP Control",
  price: 199,

  description:
    "Asvagandharisht BP Control is an Ayurvedic herbal formulation presented for blood pressure level management.",

  shortDescription:
    "Ayurvedic formulation for blood pressure level management.",

  seoDescription:
    "Asvagandharisht BP Control is an Ayurvedic herbal formulation containing Pippatpada, Nagar Motha, Giloye, Sonth, Chirayata, Honey and other ingredients.",

  images: [
    "/products/asvagandharisht-bp-control-1.png",
    "/products/asvagandharisht-bp-control-2.png",
  ],

  ingredients: [
    "Pippatpada",
    "Nagar Motha",
    "Giloye",
    "Sonth",
    "Chirayata",
    "Honey",
    "Jal",
  ],

  benefits: [
    "Blood Pressure Level Management",
  ],

  dosage:
    "10 to 20 ml twice a day or as directed by the physician.",

  quantity: "200ml",

  storage: [
    "Store in a cool and dry place.",
    "Keep away from direct sunlight.",
    "Keep out of reach of children.",
  ],
},

];