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
      abstract: "While Masked Diffusion Language Models (MDLMs) relying on token masking and unmasking have shown promise in language modeling, their computational efficiency and generation flexibility remain constrained by the masking paradigm. In this paper, we propose Deletion-Insertion Diffusion language models (DID) that rigorously formulate token deletion and insertion as discrete diffusion processes, replacing the masking and unmasking processes in current MDLMs. DID improves training and inference efficiency by eliminating two major sources of computational overhead in MDLMs: the computations on non-informative 1) <MASK> tokens inherent to the paradigm, and 2) <PAD> tokens introduced in variable-length settings. Furthermore, DID offers greater flexibility by: 1) natively supporting variable-length sequences without requiring fixed-length padding, and 2) an intrinsic self-correction mechanism during generation due to insertion that dynamically adjusts token positions. To train DID, we design a score-based approach that assigns scores to token insertion operations and derive appropriate training objectives. The objectives involve subsequence counting problems, which we efficiently solve via a parallelized dynamic programming algorithm. Our experiments across fixed and variable-length settings demonstrate the advantage of DID over baselines of MDLMs and existing insertion-based LMs, in terms of modeling performance, sampling quality, and training/inference speed, without any hyperparameter tuning.",
      links: [
        { label: "PDF", href: "https://arxiv.org/pdf/2603.23507" },
        { label: "OpenReview", href: "https://openreview.net/forum?id=VbvXjs5f72" }
      ]
    },
    {
      badge: "ICML",
      year: "2026",
      title: "Stabilizing Reinforcement Learning for Diffusion Language Models",
      authors: "Jianyuan Zhong*, Kaibo Wang*, Ding Ding*, Zijin Feng, Haoli Bai, Yang Xiang, Jiacheng Sun, Qiang Xu",
      venue: "In the International Conference on Machine Learning, 2026.",
      note: "Accepted at ICML 2026",
      abstract: "Group Relative Policy Optimization (GRPO) is highly effective for post-training autoregressive (AR) language models, yet its direct application to diffusion large language models (dLLMs) often triggers reward collapse. We identify two sources of incompatibility. First, GRPO relies on importance ratios defined by sequence probabilities, which are intractable in dLLMs and must be estimated (e.g., via ELBO-based or mean-field likelihood proxies), yielding inherently noisy ratios. Second, standard GRPO's formulation is not designed for estimated ratios: its conditional clipping can be anomalously bypassed by model-agnostic estimation noise, producing gradient spikes, while its fixed group-size normalization amplifies gradient-magnitude fluctuations under high-variance ratio estimates. We show these effects form a self-reinforcing instability loop that drives policy drift and further increases ratio variance. To break this loop, we propose StableDRL, a reformulation of GRPO tailored for dLLMs that uses (i) unconditional clipping to suppress outlier-induced spikes and (ii) self-normalization to constrain updates within the convex hull of per-sample gradients. We further extend StableDRL to block-wise diffusion models via a staircase attention mechanism.",
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
