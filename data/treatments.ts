export interface FAQ {
  question: string;
  answer: string;
}

export interface TreatmentPackage {
  id: number;
  slug: string;

  title: string;
  shortDescription: string;
  details: string;

  image: string;
  images: string[];

  price: number;
  oldPrice?: number;
  discount: number;

  stock: number;

  duration: string;

  rating: number;

  badge?: string;

  featured?: boolean;

  symptoms: string[];

  medicines: string[];

  benefits: string[];

  ingredients: string[];

  howToUse: string[];

  doctorNote: string;

  faqs: FAQ[];
}

export const treatments: TreatmentPackage[] = [

    {
    id: 1,

    slug: "special-shaadi-ka-course",

    title: "Special Shaadi Ka Course",

    shortDescription:
      "Traditional Unani wellness course for men's vitality, stamina and overall male wellness.",

    details:
      "A 40-day traditional Unani wellness course containing a combination of Majoon, tablets and oil. The course is intended to support men's vitality, stamina, digestive wellness and overall physical wellbeing. The package includes Gold Majoon (Sona Bhasm Wali), Sparm Majoon, Kamini Tablet, Shilajeet Tablet, Takravarti, Pachan Shakti Goli and Badshah Tila Oil.",

    image: "/treatments/special-shaadi-course.jpg",

    images: [
      "/treatments/special-shaadi-course/1.jpg",
      "/treatments/special-shaadi-course/2.jpg"
    ],

    price: 4500,

    oldPrice: 5000,

    discount: 10,

    stock: 25,

    duration: "40 Days",

    rating: 4.9,

    badge: "Special Course",

    featured: true,

    symptoms: [
      "Male Weakness",
      "Low Vitality",
      "Low Stamina",
      "Physical Weakness",
      "Low Energy",
      "Digestive Weakness"
    ],

    medicines: [
      "Gold Majoon (Sona Bhasm Wali) - 500gm",
      "Sparm Majoon - 500gm",
      "Kamini Tablet - 40 Pills",
      "Shilajeet Tablet - 40 Pills",
      "Takravarti",
      "Pachan Shakti Goli - 80 Pills",
      "Badshah Tila Oil - 15 ML"
    ],

    benefits: [
      "Supports men's overall vitality",
      "Supports stamina and physical energy",
      "Traditional Unani wellness formulation",
      "Supports digestive wellness",
      "Complete 40-day course",
      "Combination of Majoon, tablets and external oil"
    ],

    ingredients: [
      "Gold Majoon (Sona Bhasm Wali)",
      "Sparm Majoon",
      "Kamini Tablet",
      "Shilajeet Tablet",
      "Takravarti",
      "Pachan Shakti Goli",
      "Badshah Tila Oil"
    ],

    howToUse: [
      "Take the medicines only as directed by your doctor or qualified Unani practitioner.",
      "Follow the complete prescribed course.",
      "Use Badshah Tila Oil externally as directed.",
      "Do not exceed the recommended dosage.",
      "Consult your doctor before using the course with other medicines."
    ],

    doctorNote:
      "For best results, follow the prescribed dosage and complete the recommended course under the guidance of a qualified healthcare or Unani practitioner.",

    faqs: [
      {
        question: "How long is the Special Shaadi Ka Course?",
        answer:
          "The complete course is designed for 40 days."
      },
      {
        question: "What is the price of the 40-day course?",
        answer:
          "The listed price of the complete 40-day course is ₹4,500."
      },
      {
        question: "Is there a 20-day course available?",
        answer:
          "Yes. A 20-day medicine course is available at a price of ₹2,700."
      },
      {
        question: "What medicines are included in the course?",
        answer:
          "The course includes Gold Majoon (Sona Bhasm Wali), Sparm Majoon, Kamini Tablet, Shilajeet Tablet, Takravarti, Pachan Shakti Goli and Badshah Tila Oil."
      },
      {
        question: "How should I take these medicines?",
        answer:
          "Use the medicines according to the dosage and instructions provided by a qualified doctor or Unani practitioner."
      },
      {
        question: "Can I take this course with other medicines?",
        answer:
          "Consult a qualified healthcare professional before combining this course with other medicines or supplements."
      }
    ]
  },
    {
    id: 11,

    slug: "ganth-rasuli-cyst-care-course",

    title: "Ganth & Rasuli Care Course",

    shortDescription:
      "Special 30-day Unani wellness course for concerns related to ganth, cyst, rasuli and excess body fat.",

    details:
      "A specially designed 30-day traditional Unani wellness course containing selected herbal formulations. The course includes tablets, syrups, oil, drops and 30 empty cups. It is intended to provide supportive traditional care for concerns related to ganth, cyst, rasuli and excess body fat. Use the course only under the guidance of a qualified healthcare or Unani practitioner.",

    image: "/treatments/ganth-course.jpg",

    images: [
      "/treatments/ganth-course/1.jpg",
      "/treatments/ganth-course/2.jpg"
      
    ],

    price: 2500,

    discount: 0,

    stock: 0,

    duration: "30 Days",

    rating: 0,

    badge: "Special Course",

    featured: true,

    symptoms: [
      "Bacchedani Ki Ganth",
      "Breast Ki Ganth",
      "Sharir Mein Hone Wali Ganth",
      "Sharir Mein Charbi",
      "Kisi Bhi Tarah Ki Ganth",
      "Sharir Mein Banne Wali Rasuli"
    ],

    medicines: [
      "Kalyan Cyst Tablet - 60 Vati",
      "Udaramrit Yog Syrup - 200ml × 3",
      "Cyst Syrup - 200ml × 3",
      "Chandanvalaksayadi Oil",
      "Cyst Drop - 15ml × 2",
      "30 Cup Khali"
    ],

    benefits: [
      "Special 30-day traditional wellness course",
      "Combination of tablets, syrups, oil and drops",
      "Includes Kalyan Cyst Tablet",
      "Includes Udaramrit Yog Syrup",
      "Includes Cyst Syrup",
      "Includes Chandanvalaksayadi Oil",
      "Includes Cyst Drops",
      "Complete package with 30 empty cups"
    ],

    ingredients: [
      "Kalyan Cyst Tablet",
      "Udaramrit Yog Syrup",
      "Cyst Syrup",
      "Chandanvalaksayadi Oil",
      "Cyst Drop"
    ],

    howToUse: [
      "Use all medicines only according to the dosage prescribed by your doctor or qualified Unani practitioner.",
      "Follow the complete 30-day course as advised.",
      "Use the oil and drops only as directed by the practitioner.",
      "Do not exceed the recommended dosage.",
      "Keep all medicines stored according to their label instructions.",
      "Consult a qualified healthcare professional before using the course with other medicines."
    ],

    doctorNote:
      "This is a traditional wellness course. Ganth, cyst or rasuli can have different causes and may require proper medical evaluation. Do not rely on this course as a substitute for diagnosis or treatment. Use the medicines only under the guidance of a qualified healthcare or Unani practitioner.",

    faqs: [
      {
        question: "How long is the Ganth & Rasuli Care Course?",
        answer:
          "The complete course is designed for 30 days."
      },

      {
        question: "What is the price of this course?",
        answer:
          "The listed price of the complete 30-day course is ₹2,500."
      },

      {
        question: "What medicines are included in the course?",
        answer:
          "The package includes Kalyan Cyst Tablet (60 Vati), Udaramrit Yog Syrup (200ml × 3), Cyst Syrup (200ml × 3), Chandanvalaksayadi Oil, Cyst Drop (15ml × 2) and 30 empty cups."
      },

      {
        question: "What concerns is this course intended for?",
        answer:
          "The course is presented for traditional wellness support related to concerns such as ganth, cyst, rasuli and excess body fat. Proper medical evaluation is recommended for any lump or swelling."
      },

      {
        question: "Can I use this course with other medicines?",
        answer:
          "Consult a qualified healthcare professional before combining this course with other medicines or treatments."
      },

      {
        question: "How should the medicines be taken?",
        answer:
          "The medicines should be taken according to the dosage and instructions provided by a qualified doctor or Unani practitioner."
      }
    ]
  },
  {
    id: 10,

    slug: "womens-health-package",

    title: "Women's Health Package",

    shortDescription:
      "Complete Unani treatment package for women's intimate health, leucorrhoea, white discharge, weakness and back pain.",

    details:
      "This Unani treatment package is specially designed to support women's reproductive health. It helps manage leucorrhoea (Likoriya), white discharge, lower back pain, joint pain caused by weakness and overall physical wellness. The package contains carefully selected herbal formulations traditionally used in Unani medicine.",

    image: "/treatments/women-health.jpg",

    images: [
      "/treatments/women-health/1.jpg",
      "/treatments/women-health/2.jpg"
      
    ],

    price: 650,

    oldPrice: 850,

    discount: 24,

    stock: 35,

    duration: "10 Days",

    rating: 4.9,

    badge: "Best Seller",

    featured: true,

    symptoms: [
      "Likoriya",
      "White Discharge",
      "Lower Back Pain",
      "Back Weakness",
      "Joint Pain",
      "Weakness"
    ],

    medicines: [
      "Pradar Nashak Powder (100gm)",
      "Pradar Antak Syrup (200ml)",
      "Pain Remedy Syrup (200ml)",
      "Udaramrit Yog Syrup (200ml)"
    ],

    benefits: [
      "Supports women's intimate health",
      "Helps manage white discharge",
      "Supports relief from back pain",
      "Supports joint comfort",
      "Helps reduce weakness",
      "Traditional Unani herbal formulation"
    ],

    ingredients: [
      "Pradar Nashak Powder",
      "Pradar Antak Syrup",
      "Pain Remedy Syrup",
      "Udaramrit Yog Syrup"
    ],

    howToUse: [
      "Take the medicines as directed by your doctor.",
      "Follow the complete 10-day course.",
      "Drink sufficient water during the treatment.",
      "Do not skip doses."
    ],

    doctorNote:
      "For the best results, complete the full treatment course and follow your doctor's instructions.",

    faqs: [
      {
        question: "How long is this treatment?",
        answer: "This package contains a complete 10-day treatment."
      },
      {
        question: "Can I take it daily?",
        answer:
          "Take the medicines only according to the prescribed dosage."
      },
      {
        question: "Who is this package for?",
        answer:
          "It is intended for women experiencing leucorrhoea, white discharge, weakness or related symptoms."
      }
    ]
  },

  {
    id: 2,

    slug: "mens-vitality-package",

    title: "Men's Vitality Package",

    shortDescription:
      "Traditional Unani herbal package for stamina, vitality and male wellness.",

    details:
      "This herbal Unani package is formulated for men experiencing nightfall (Swapnadosh), Dhaat, reduced vitality, weakness and related reproductive health concerns. The medicines included are traditionally used to support stamina and overall male wellness.",

    image: "/treatments/mens-vitality.jpg",

    images: [
      "/treatments/mens-vitality/1.jpg",
      "/treatments/mens-vitality/2.jpg",
      "/treatments/mens-vitality/3.jpg",
      "/treatments/mens-vitality/4.jpg"
    ],

    price: 500,

    oldPrice: 650,

    discount: 23,

    stock: 42,

    duration: "10 Days",

    rating: 4.9,

    badge: "Popular",

    featured: true,

    symptoms: [
      "Swapnadosh",
      "Nightfall",
      "Dhaat",
      "Urine with Semen",
      "Bladder Heat",
      "Low Sperm Count"
    ],

    medicines: [
      "Dhatu Paushtik With Musli (100gm)",
      "Kamuni Pachan Majoon (250gm)",
      "Dhatu Tablet (20 Vati)"
    ],

    benefits: [
      "Supports male vitality",
      "Helps improve stamina",
      "Supports reproductive wellness",
      "Traditional Unani herbal care",
      "Helps reduce weakness",
      "Supports daily energy"
    ],

    ingredients: [
      "Dhatu Paushtik With Musli",
      "Kamuni Pachan Majoon",
      "Dhatu Tablet"
    ],

    howToUse: [
      "Take as directed by your doctor.",
      "Complete the full 10-day course.",
      "Maintain a healthy diet during treatment.",
      "Do not exceed the recommended dosage."
    ],

    doctorNote:
      "Use regularly for the prescribed duration and consult your doctor if symptoms persist.",

    faqs: [
      {
        question: "How many days does this package last?",
        answer: "This package provides a complete 10-day course."
      },
      {
        question: "Can I use it with other medicines?",
        answer:
          "Consult your doctor before combining this package with other medications."
      },
      {
        question: "Is this a herbal formulation?",
        answer:
          "Yes, this package is based on traditional Unani herbal medicines."
      }
    ]
  },

  {
    id: 3,

    slug: "pcod-pcos-care-package",

    title: "PCOD & PCOS Care Package",

    shortDescription:
      "Complete Unani hormonal wellness package for PCOD, PCOS, irregular periods and women's reproductive health.",

    details:
      "This comprehensive Unani treatment package is formulated to support women experiencing PCOD, PCOS, irregular menstrual cycles, pelvic discomfort, mood swings and hormonal imbalance. The package contains traditional herbal medicines that help support reproductive wellness and overall health.",

    image: "/treatments/pcod-pcos.jpg",

    images: [
      "/treatments/pcod-pcos/1.jpg",
      "/treatments/pcod-pcos/2.jpg",
      "/treatments/pcod-pcos/3.jpg",
      "/treatments/pcod-pcos/1.jpg"
    ],

    price: 1500,

    oldPrice: 1800,

    discount: 17,

    stock: 28,

    duration: "30 Days",

    rating: 4.9,

    badge: "Doctor Recommended",

    featured: true,

    symptoms: [
      "PCOD",
      "PCOS",
      "Irregular Periods",
      "Heavy or Low Menstrual Flow",
      "Pelvic Pain",
      "Mental Stress",
      "Loss of Appetite",
      "Mood Swings"
    ],

    medicines: [
      "Sundari Kalp Syrup (200ml × 3)",
      "Gas Kabz Syrup (200ml × 3)",
      "Amar Sundari Harmons (60 Vati)"
    ],

    benefits: [
      "Supports hormonal balance",
      "Helps regulate menstrual cycles",
      "Supports reproductive wellness",
      "Helps improve appetite",
      "Supports digestive health",
      "Traditional Unani herbal formulation"
    ],

    ingredients: [
      "Sundari Kalp Syrup",
      "Gas Kabz Syrup",
      "Amar Sundari Harmons"
    ],

    howToUse: [
      "Take as directed by your doctor.",
      "Complete the full 30-day course.",
      "Maintain a healthy lifestyle.",
      "Do not skip the prescribed dosage."
    ],

    doctorNote:
      "For better results, complete the entire treatment course and follow your doctor's advice.",

    faqs: [
      {
        question: "How long is this treatment?",
        answer: "This package provides a complete 30-day treatment."
      },
      {
        question: "Can this help with irregular periods?",
        answer:
          "This package is designed for women experiencing PCOD, PCOS and menstrual irregularities."
      },
      {
        question: "Is it based on Unani medicine?",
        answer:
          "Yes, the medicines included are based on traditional Unani formulations."
      }
    ]
  },

  {
    id: 4,

    slug: "joint-back-pain-package",

    title: "Joint & Back Pain Package",

    shortDescription:
      "Complete herbal pain relief package for joint pain, back pain, muscle pain and inflammation.",

    details:
      "A traditional Unani herbal package developed to support people suffering from joint pain, lower back pain, muscle discomfort, swelling and stiffness. The medicines help support mobility and day-to-day comfort.",

    image: "/treatments/joint-pain.jpg",

    images: [
      "/treatments/joint-pain.jpg",
      "/treatments/joint-pain.jpg",
      "/treatments/joint-pain.jpg",
      "/treatments/joint-pain.jpg"
    ],

    price: 500,

    oldPrice: 650,

    discount: 23,

    stock: 40,

    duration: "10 Days",

    rating: 4.8,

    badge: "Top Rated",

    symptoms: [
      "Joint Pain",
      "Back Pain",
      "Muscle Pain",
      "Neck Pain",
      "Swelling",
      "Uric Acid"
    ],

    medicines: [
      "Pain Remedy Syrup (200ml)",
      "Madan Manjari Tablet (30 Vati)",
      "Ortho Pain Relief Oil (50ml)"
    ],

    benefits: [
      "Supports joint comfort",
      "Helps reduce muscle discomfort",
      "Supports mobility",
      "Helps manage stiffness",
      "Traditional Unani herbal care",
      "Supports everyday movement"
    ],

    ingredients: [
      "Pain Remedy Syrup",
      "Madan Manjari Tablet",
      "Ortho Pain Relief Oil"
    ],

    howToUse: [
      "Use the medicines as directed.",
      "Apply the pain relief oil externally.",
      "Complete the 10-day course.",
      "Avoid skipping doses."
    ],

    doctorNote:
      "Follow the complete course for better results and consult your doctor if pain persists.",

    faqs: [
      {
        question: "Can the oil be used daily?",
        answer: "Use it according to the instructions provided by your doctor."
      },
      {
        question: "Is this only for back pain?",
        answer: "No. It is intended for joint pain, muscle pain, swelling and back pain."
      },
      {
        question: "How long is the treatment?",
        answer: "This package contains a complete 10-day treatment."
      }
    ]
  },
{
  id: 12,

  slug: "mardana-kamzori-special-course",

  title: "Mardana Kamzori Care Course",

  shortDescription:
    "20-day traditional wellness course containing selected Unani formulations.",

  details:
    "A 20-day traditional Unani wellness course containing Maharas Nadi Syrup, Loqmani Gold Majoon, Kamini Tablet and Shilajeet Tablet. The package is intended as a traditional wellness formulation for men's health concerns. Use according to the guidance of a qualified healthcare or Unani practitioner.",

  image: "/treatments/mardana-kamzori-course.jpg",

  images: [
    "/treatments/mardana-kamzori-course/1.jpg",
    "/treatments/mardana-kamzori-course/2.jpg"
  ],

  price: 1300,

  discount: 0,

  stock: 0,

  duration: "20 Days",

  rating: 0,

  badge: "Special Course",

  featured: true,

  symptoms: [
    "Men's General Wellness",
    "Low Energy",
    "General Weakness",
    "Men's Vitality Concerns"
  ],

  medicines: [
    "Maharas Nadi Syrup - 200ml",
    "Loqmani Gold Majoon - 250gm",
    "Kamini Tablet - 20 Pills",
    "Shilajeet Tablet - 20 Pills"
  ],

  benefits: [
    "20-day traditional wellness course",
    "Selected Unani formulations",
    "Includes Maharas Nadi Syrup",
    "Includes Loqmani Gold Majoon",
    "Includes Kamini Tablet",
    "Includes Shilajeet Tablet"
  ],

  ingredients: [
    "Maharas Nadi Syrup",
    "Loqmani Gold Majoon",
    "Kamini Tablet",
    "Shilajeet Tablet"
  ],

  howToUse: [
    "Use the medicines only according to the dosage prescribed by a qualified healthcare or Unani practitioner.",
    "Follow the recommended 20-day course.",
    "Do not exceed the recommended dosage.",
    "Read the individual product labels carefully before use.",
    "Consult a qualified healthcare professional if you are taking other medicines."
  ],

  doctorNote:
    "This package contains traditional Unani formulations intended for men's wellness. Individual results may vary. Use the medicines according to professional guidance and do not use them as a substitute for medical diagnosis or treatment.",

  faqs: [
    {
      question: "How long is this course?",
      answer:
        "The complete course is designed for 20 days."
    },

    {
      question: "What is the price of the course?",
      answer:
        "The listed price of the complete course is ₹1,300."
    },

    {
      question: "What medicines are included?",
      answer:
        "The package includes Maharas Nadi Syrup (200ml), Loqmani Gold Majoon (250gm), Kamini Tablet (20 pills) and Shilajeet Tablet (20 pills)."
    },

    {
      question: "How should the medicines be used?",
      answer:
        "The medicines should be used according to the dosage and instructions provided by a qualified healthcare or Unani practitioner."
    },

    {
      question: "Can I take these medicines with other medicines?",
      answer:
        "If you are already taking medicines or have an existing medical condition, consult a qualified healthcare professional before using this course."
    }
  ]
},
  {
    id: 6,

    slug: "skin-care-package",

    title: "Skin Care Package",

    shortDescription:
      "Complete Unani herbal skin care package for blood purification and healthier skin.",

    details:
      "A comprehensive Unani skin wellness package formulated to support healthy skin by helping with itching, fungal skin conditions, pimples, dark spots and overall skin purification. The medicines are traditionally used to promote cleaner and healthier-looking skin.",

    image: "/treatments/skin-care.jpg",

    images: [
      "/treatments/skin-care/1.jpg",
      "/treatments/skin-care/2.jpg",
      "/treatments/skin-care/3.jpg",
      "/treatments/skin-care/4.jpg"
    ],

    price: 450,

    oldPrice: 600,

    discount: 25,

    stock: 50,

    duration: "10 Days",

    rating: 4.9,

    badge: "Hot",

    featured: true,

    symptoms: [
      "Khaj",
      "Khujli",
      "Dad",
      "Foda",
      "Funsi",
      "Pimples",
      "Dark Spots",
      "Dark Circles"
    ],

    medicines: [
      "Rakt Shodhak Syrup (200ml)",
      "Kamla Her Tablet (30 Vati)",
      "Charmrog Nashak Malham (30gm)"
    ],

    benefits: [
      "Supports blood purification",
      "Helps improve skin health",
      "Supports relief from itching",
      "Helps reduce pimples",
      "Supports clearer-looking skin",
      "Promotes healthy glowing skin"
    ],

    ingredients: [
      "Rakt Shodhak Syrup",
      "Kamla Her Tablet",
      "Charmrog Nashak Malham"
    ],

    howToUse: [
      "Use the medicines as directed.",
      "Apply the ointment externally on the affected area.",
      "Complete the full 10-day course.",
      "Maintain good skin hygiene during treatment."
    ],

    doctorNote:
      "Follow the prescribed dosage regularly and maintain proper hygiene for the best results.",

    faqs: [
      {
        question: "Is this package suitable for pimples?",
        answer: "It is designed to support various skin concerns including pimples and skin purification."
      },
      {
        question: "Can the ointment be applied daily?",
        answer: "Yes, use it according to your doctor's instructions."
      },
      {
        question: "How long does the treatment last?",
        answer: "This package contains a complete 10-day treatment."
      }
    ]
  },
{
  id: 13,

  slug: "mardana-kamzori-special-course-1800",

  title: "Mardana Kamzori Ki Har Samasya Ka Hal",

  shortDescription:
    "20 din ka Special Unani Course containing selected traditional formulations for men's wellness.",

  details:
    "Special 20-day course containing Maharas Nadi Syrup, Dhaatu Musli Powder, Loqmani Gold Majoon, Loqmani Kamuni Majoon, Kamini Tablet and Shilajeet Tablet.",

  image: "/treatments/mardana-kamzori-1800.jpg",

  images: [
    "/treatments/mardana-kamzori-1800/1.jpg",
    "/treatments/mardana-kamzori-1800/2.jpg",
  ],

  price: 1800,

  discount: 0,

  stock: 0,

  duration: "20 Days",

  rating: 0,

  badge: "Special Course",

  featured: true,

  symptoms: [
    "Mardana Kamzori",
    "General Weakness",
    "Low Energy",
    "Men's Wellness"
  ],

  medicines: [
    "Maharas Nadi Syrup - 200ML",
    "Dhaatu Musli Powder - 100GM",
    "Loqmani Gold Majoon - 250GM",
    "Loqmani Kamuni Majoon - 250GM",
    "Kamini Tablet - 20 Pills",
    "Shilajeet Tablet - 20 Pills"
  ],

  benefits: [
    "20 din ka complete course",
    "Selected traditional Unani formulations",
    "Maharas Nadi Syrup included",
    "Dhaatu Musli Powder included",
    "Loqmani Gold Majoon included",
    "Loqmani Kamuni Majoon included",
    "Kamini Tablet included",
    "Shilajeet Tablet included"
  ],

  ingredients: [
    "Maharas Nadi Syrup",
    "Dhaatu Musli Powder",
    "Loqmani Gold Majoon",
    "Loqmani Kamuni Majoon",
    "Kamini Tablet",
    "Shilajeet Tablet"
  ],

  howToUse: [
    "Medicines ko qualified Hakeem ya healthcare professional ki guidance ke mutabiq use karein.",
    "Recommended 20-day course follow karein.",
    "Recommended dosage se zyada use na karein.",
    "Har medicine ke label par diye gaye instructions ko follow karein.",
    "Agar aap already koi medicines le rahe hain to course start karne se pehle healthcare professional se consult karein."
  ],

  doctorNote:
    "Yeh traditional Unani wellness course hai. Individual results vary kar sakte hain. Medicines ko qualified Hakeem ya healthcare professional ki guidance ke mutabiq use karein.",

  faqs: [
    {
      question: "Yeh course kitne din ka hai?",
      answer:
        "Yeh complete course 20 din ke liye hai."
    },

    {
      question: "Course ki price kya hai?",
      answer:
        "Complete 20-day course ki listed price ₹1,800 hai."
    },

    {
      question: "Course mein kaunsi medicines included hain?",
      answer:
        "Course mein Maharas Nadi Syrup 200ML, Dhaatu Musli Powder 100GM, Loqmani Gold Majoon 250GM, Loqmani Kamuni Majoon 250GM, Kamini Tablet 20 Pills aur Shilajeet Tablet 20 Pills included hain."
    },

    {
      question: "Course kaise use karna hai?",
      answer:
        "Medicines ko qualified Hakeem ya healthcare professional ke instructions aur recommended dosage ke according use karein."
    },

    {
      question: "Kya main is course ko doosri medicines ke saath le sakta hoon?",
      answer:
        "Agar aap already koi medicines le rahe hain, to course start karne se pehle qualified healthcare professional se consult karein."
    }
  ]
},
  {
    id: 7,

    slug: "weight-gain-package",

    title: "Weight Gain Package",

    shortDescription:
      "Natural Unani herbal nutrition package to support healthy weight gain, appetite and digestion.",

    details:
      "This Unani treatment package is specially formulated for individuals looking to gain healthy weight naturally. It helps support appetite, digestion, liver health and overall nutrition while promoting better energy and wellness.",

    image: "/treatments/weight-gain.jpg",

    images: [
      "/treatments/weight-gain/1.jpg",
      "/treatments/weight-gain/2.jpg",
      "/treatments/weight-gain/3.jpg",
      "/treatments/weight-gain/4.jpg"
    ],

    price: 500,

    oldPrice: 650,

    discount: 23,

    stock: 38,

    duration: "10 Days",

    rating: 4.8,

    badge: "Popular",

    featured: true,

    symptoms: [
      "Low Weight",
      "Poor Appetite",
      "Weak Digestion",
      "Constipation",
      "Gas",
      "Acidity",
      "Fatty Liver"
    ],

    medicines: [
      "Mass Yadi Syrup (200ml)",
      "Liver Health Syrup (200ml)",
      "Udaramrit Syrup (200ml)",
      "Health Capsule (20 Capsules)"
    ],

    benefits: [
      "Supports healthy weight gain",
      "Helps improve appetite",
      "Supports better digestion",
      "Supports liver health",
      "Provides nutritional support",
      "Traditional Unani herbal formulation"
    ],

    ingredients: [
      "Mass Yadi Syrup",
      "Liver Health Syrup",
      "Udaramrit Syrup",
      "Health Capsule"
    ],

    howToUse: [
      "Take the medicines as directed by your doctor.",
      "Complete the full 10-day course.",
      "Maintain a balanced diet.",
      "Drink plenty of water."
    ],

    doctorNote:
      "For the best results, follow the complete treatment course along with a nutritious diet and healthy lifestyle.",

    faqs: [
      {
        question: "Will this help increase appetite?",
        answer: "This package is designed to support appetite and healthy digestion."
      },
      {
        question: "How long is the treatment?",
        answer: "The package contains a complete 10-day treatment."
      },
      {
        question: "Is it based on Unani medicine?",
        answer: "Yes, this package contains traditional Unani herbal formulations."
      }
    ]
  },

  {
    id: 8,

    slug: "piles-care-package",

    title: "Piles Care Package",

    shortDescription:
      "Complete Unani herbal package for piles, constipation and digestive wellness.",

    details:
      "A comprehensive Unani treatment package designed for individuals experiencing piles, bleeding piles, pain, itching, burning sensation and constipation. The included medicines support digestive health and overall bowel comfort.",

    image: "/treatments/piles-care.jpg",

    images: [
      "/treatments/piles-care/1.jpg",
      "/treatments/piles-care/2.jpg",
      "/treatments/piles-care/3.jpg",
      "/treatments/piles-care/4.jpg"
    ],

    price: 500,

    oldPrice: 650,

    discount: 23,

    stock: 34,

    duration: "10 Days",

    rating: 4.8,

    badge: "Recommended",

    symptoms: [
      "Bleeding Piles",
      "Non-Bleeding Piles",
      "Pain",
      "Burning Sensation",
      "Itching",
      "Constipation",
      "Gas",
      "Acidity"
    ],

    medicines: [
      "Tagaradi Kwath",
      "Piles Care Syrup (200ml)",
      "Kankayan Piles Tablet (30 Vati)",
      "Gas Kabz Syrup (200ml)"
    ],

    benefits: [
      "Supports digestive wellness",
      "Helps manage piles symptoms",
      "Supports bowel comfort",
      "Helps relieve constipation",
      "Traditional Unani herbal care",
      "Supports everyday digestive health"
    ],

    ingredients: [
      "Tagaradi Kwath",
      "Piles Care Syrup",
      "Kankayan Piles Tablet",
      "Gas Kabz Syrup"
    ],

    howToUse: [
      "Take the medicines as directed by your doctor.",
      "Complete the full 10-day treatment.",
      "Drink sufficient water daily.",
      "Consume a fiber-rich diet during the course."
    ],

    doctorNote:
      "Follow the complete treatment course and maintain healthy eating habits for better digestive health.",

    faqs: [
      {
        question: "Is this suitable for bleeding piles?",
        answer:
          "This package is intended for people experiencing piles-related symptoms including bleeding and discomfort."
      },
      {
        question: "Can this help with constipation?",
        answer:
          "The package includes medicines that support digestive health and bowel regularity."
      },
      {
        question: "How many days does the package last?",
        answer: "This package contains a complete 10-day treatment."
      }
    ]
  },

  {
    id: 9,

    slug: "digestive-liver-care-package",

    title: "Digestive & Liver Care Package",

    shortDescription:
      "Complete Unani herbal digestive wellness package for constipation, gas, acidity and liver support.",

    details:
      "This comprehensive Unani treatment package is designed to support healthy digestion and liver function. It helps manage constipation, gas, acidity, stomach discomfort, fatty liver and weak digestion using traditional herbal formulations.",

    image: "/treatments/digestive-care.jpg",

    images: [
      "/treatments/digestive-care.jpg",
      "/treatments/digestive-care.jpg",
      "/treatments/digestive-care.jpg",
      "/treatments/digestive-care.jpg"
    ],

    price: 500,

    oldPrice: 650,

    discount: 23,

    stock: 45,

    duration: "10 Days",

    rating: 4.9,

    badge: "Doctor Choice",

    featured: true,

    symptoms: [
      "Constipation",
      "Gas",
      "Acidity",
      "Stomach Pain",
      "Sour Belching",
      "Fatty Liver",
      "Weak Digestion"
    ],

    medicines: [
      "Udaramrit Yog Syrup (200ml)",
      "Gas Kabz Syrup (200ml)",
      "Liver Health Syrup (200ml)",
      "Kamoni Majoon (250gm)"
    ],

    benefits: [
      "Supports healthy digestion",
      "Helps relieve constipation",
      "Supports liver health",
      "Helps reduce gas and acidity",
      "Supports better nutrient absorption",
      "Traditional Unani herbal formulation"
    ],

    ingredients: [
      "Udaramrit Yog Syrup",
      "Gas Kabz Syrup",
      "Liver Health Syrup",
      "Kamoni Majoon"
    ],

    howToUse: [
      "Take the medicines as directed by your doctor.",
      "Complete the full 10-day course.",
      "Drink sufficient water throughout the day.",
      "Avoid oily and spicy food during the treatment."
    ],

    doctorNote:
      "Follow the prescribed dosage and maintain a healthy diet for better digestive and liver health.",

    faqs: [
      {
        question: "Can this package help with constipation?",
        answer:
          "This package is formulated to support digestive health and help manage constipation and related digestive discomfort."
      },
      {
        question: "Is this suitable for acidity and gas?",
        answer:
          "Yes, the package is designed to support people experiencing gas, acidity and digestive issues."
      },
      {
        question: "How long does this treatment last?",
        answer:
          "This package contains a complete 10-day treatment course."
      }
    ]
  }
];