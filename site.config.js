window.siteConfig = {
  meta: {
    title: "Ding Ding",
    description: "Ding Ding is a PhD student at HKUST working on generative models and diffusion language models."
  },

  profile: {
    name: "Ding Ding",
    role: "PhD Student",
    affiliation: "The Hong Kong University of Science and Technology",
    department: "Department of Mathematics",
    location: "Hong Kong SAR",
    email: "ddingab@connect.ust.hk",
    github: "",
    scholar: "https://scholar.google.com/citations?hl=en&user=lpwzbQYAAAAJ&view_op=list_works",
    linkedin: "https://www.linkedin.com/in/ding-ding-244b32324/",
    cv: "",
    photo: "./assets/photo.png",
    summary: [
      "My research interests lie in generative models, especially diffusion language models."
    ]
  },

  education: [
    {
      school: "The Hong Kong University of Science and Technology",
      degree: "PhD in Mathematics",
      date: "2024 - Present"
    },
    {
      school: "University of Science and Technology of China",
      degree: "B.Sc., School of the Gifted Young",
      date: "2020 - 2024"
    }
  ],

  publications: [
    {
      badge: "ICLR",
      year: "2026",
      title: "Beyond Masks: Efficient, Flexible Diffusion Language Models via Deletion-Insertion Processes",
      authors: "Fangyu Ding*, Ding Ding*, Sijin Chen*, Kaibo Wang, Peng Xu, Zijin Feng, Haoli Bai, Kai Han, Youliang Yan, Binhang Yuan, Jiacheng Sun",
      venue: "In the International Conference on Learning Representations, 2026.",
      note: "Accepted at ICLR 2026",
      summary: "Deletion-insertion diffusion language models replace masking and unmasking with deletion and insertion processes, support variable-length generation naturally, and reduce overhead in training and inference.",
      links: [
        { label: "PDF", href: "https://arxiv.org/pdf/2603.23507" },
        { label: "OpenReview", href: "https://openreview.net/forum?id=VbvXjs5f72" }
      ]
    },
    {
      badge: "arXiv",
      year: "2026",
      title: "Stabilizing Reinforcement Learning for Diffusion Language Models",
      authors: "Jianyuan Zhong*, Kaibo Wang*, Ding Ding*, Zijin Feng, Haoli Bai, Yang Xiang, Jiacheng Sun, Qiang Xu",
      venue: "arXiv preprint, 2026.",
      note: "",
      summary: "StableDRL is a reinforcement learning method for diffusion language models that stabilizes training with unconditional clipping and self-normalized updates.",
      links: [
        { label: "PDF", href: "https://arxiv.org/pdf/2603.06743" },
        { label: "Code", href: "https://github.com/JianyuanZhong/StableDRL" }
      ]
    }
  ],

  notes: {
    publicationPrefix: "",
    publications: "(*) denotes equal contribution"
  },

  contact: {
    blurb: "ddingab@connect.ust.hk"
  }
};
