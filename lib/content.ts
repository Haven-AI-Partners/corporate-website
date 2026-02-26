export type Locale = "ja" | "en"

export const content = {
  ja: {
    nav: {
      home: "ホーム",
      leadership: "経営陣",
      about: "会社概要",
    },
    hero: {
      tagline: "日本企業を、AI時代の主役へ",
      title: "Haven AI Partners",
      subtitle:
        "Havenは、AIを成長エンジンに変える次世代ITサービス・プラットフォームです。私たちは、志ある企業をグループに迎え入れ、共に進化しながら、日本企業を「AIネイティブ企業」へと育てていきます。",
      cta: "お問い合わせ",
    },
    about: {
      label: "会社概要",
      title: "Haven AI Partners株式会社",
      items: [
        { label: "会社名", value: "Haven AI Partners株式会社" },
        { label: "代表取締役", value: "山田　雄大" },
        { label: "設立", value: "2025年12月" },
        {
          label: "事業内容",
          value: "AIソリューション / ITサービスの導入支援",
        },
      ],
      description:
        "Haven AI Partnersは、MSP、リセラー企業、SIerを戦略的にグループへ迎え入れ、AI時代の成長を牽引するテクノロジー企業グループを構築します。",
    },
    mission: {
      label: "ミッション",
      title:
        "知識と時間の民主化が進む今、人の可能性を解き放つ経営へ。",
      subtitle:
        "Empower every Japanese business to thrive in the age of AI",
    },
    vision: {
      label: "ビジョン",
      title: "To design Japan's industrial future by unlocking the creativity and productivity within every person",
      description: "日本のITサービス企業が持続的な成長機会を生み続けるエコシステムを構築します。",
      pillars: [
        {
          title: "Growth（成長）",
          description: "AIとデジタルの力で、企業の成長曲線を再定義する",
        },
        {
          title: "Creativity（創造）",
          description: "テクノロジーによって、人の創造性を最大化する社会へ",
        },
        {
          title: "Equality（平等）",
          description: "誰もがAIを活用できる環境を整える",
        },
      ],
    },
    leadership: {
      label: "経営陣",
      title: "経営チーム",
      subtitle:
        "グローバルの知見を日本の力に。世界基準の戦略と実行力を持つプロ経営者",
      members: [
        {
          name: "Yuta Yamada",
          nameJa: "山田　雄大",
          role: "創業者兼Chief Executive Officer",
          memberSubtitle:
            "投資銀行 ×グローバル企業 ×ヘルスケアで磨いた成長と再生のプロフェッショナル",
          bio: "ゴールドマン・サックス証券で投資銀行業務に従事後、The Estée Lauder Companies NY本社にてFinance & Strategyチームのディレクター職に就任し、同社の成長戦略、再生事業に参画。その後はオンライン診療事業のeLife株式会社にCEOとして参画して組織の黒字化・成長拡大を牽引。新規事業の創出から成長戦略の立案、オペレーションの確立まで幅広い実績を持つ。",
          education: "東京大学経済学部卒、コロンビア大学経営大学院修了",
          image: "/images/yamada-yuta.png",
          linkedin: "https://www.linkedin.com/in/yuta-yamada-659941129",
          skills: [
            {
              title: "事業再生・黒字化",
              description: "eLife CEOとして組織成長のオペレーションを牽引",
            },
            {
              title: "グローバル戦略",
              description: "NY本社での成長戦略立案経験",
            },
            {
              title: "金融・経営の知見",
              description: "GS投資銀行部門出身 コロンビア MBA修了",
            },
          ],
        },
        {
          name: "Christopher Ax",
          role: "WAY Equity Partners 創業者・最高経営責任者",
          memberSubtitle:
            "IT投資家を経て、日本で30店舗超の飲食店を育て上げた実業を知る創業者",
          bio: "机上で動く投資家ではなく、ドイツ料理店『Schmatz』を日本で創業し、ゼロから30店舗以上、数百名の従業員を抱える企業へと育て上げた実業家。日本の商習慣、採用の難しさ、店舗運営の泥臭さ。だからこそ、「日本の事業に海外発の最新技術があれば、世界で勝てる」と本気で信じています。2024年の創業から、既に4社の立ち上げを経験。",
          education: "",
          image: "/images/ax-chris.png",
          linkedin: "https://www.linkedin.com/in/christopher-ax-65ba8451/",
          skills: [
            {
              title: "Schmatz共同創業者",
              description: "ドイツビアレストランを日本で創業",
            },
            {
              title: "実店舗30+ 展開",
              description: "ゼロから30店舗以上を展開",
            },
            {
              title: "従業員数百名超のマネジメント",
              description: "大規模組織の運営経験",
            },
          ],
        },
      ],
    },
    values: {
      label: "バリュー",
      title: "Havenの 5 Values",
      items: [
        { en: "Champion Customers & Partners", ja: "顧客とパートナーの成功を、最優先に" },
        { en: "Build Trust in Every Moment", ja: "すべての瞬間に、誠実さを。" },
        { en: "Lead with Humility & Stewardship", ja: "謙虚に学び、責任を果たす。" },
        { en: "Advance with Speed & Purpose", ja: "意志あるスピードで前進する。" },
        { en: "Win Together, Own the Outcome", ja: "チーム力で勝ち、結果に責任を持つ。" },
      ],
    },
    challenges: {
      label: "業界課題",
      title: "ITサービス業界が直面する構造転換",
      subtitle:
        "日本のITサービス業界は、いま構造的な転換点にあります。現場主導で磨かれてきた独自オペレーションは大きな強みである一方、標準化や再現性の確立を難しくし、技術進化との摩擦を生んでいます。「100社あれば100通りのやり方がある」という多様性は、日本企業の競争力の源泉です。しかし同時に、それが新しいテクノロジー導入の難易度を高める要因にもなっています。",
      items: [
        {
          title: "人材不足",
          subtitle: "加速する労働人口減少",
          description:
            "2030年までに労働人口は約15%減少すると予測されています。人材確保に依存する成長モデルは限界を迎えつつあり、テクノロジーによる生産性向上が不可欠です。",
        },
        {
          title: "生産性向上への遅れ",
          subtitle: "デジタル化の遅れによる効率停滞",
          description:
            "クラウドやSaaSの導入率は米国と比較して大きな差があり、依然として業務の属人化や手作業が残っています。一方で、これは大きな改善余地が存在することも意味します。",
        },
        {
          title: "後継者不在",
          subtitle: "経営者の高齢化と承継課題",
          description:
            "経営者の平均年齢は63歳。後継者不在率は53.9%に達し、黒字企業であっても廃業の可能性を抱える企業が増えています。持続的な成長に向けたモデルの再設計が求められています。",
        },
        {
          title: "AI活用の断絶",
          subtitle: "「ラストワンマイル」の壁",
          description:
            "AIや汎用ツールは急速に進化しています。しかし、現場の暗黙知や独自フローとの接続は容易ではなく、最新技術が十分に活用されていないケースも少なくありません。テクノロジーと現場の間には、見えない断絶が存在しています。",
        },
      ],
      barrierTagline:
        "Haven AI Partnersは、各企業の固有性を尊重しながら、AIを持続的な成長へと結びつくかたちで実装します。",
      barrierLabel: "AI導入の障壁",
      barriers: [
        {
          title: "データの特異性と断絶",
          description: "標準化されていない現場データや部門間の分断が、活用の難易度を高めています。",
        },
        {
          title: "独自のビジネスロジック",
          description: "長年の歴史の中で積み重ねられた例外処理や慣習が、システム刷新のハードルとなっています。",
        },
        {
          title: "セキュリティの壁",
          description: "機密保持や既存認証基盤との整合性確保が不可欠であり、慎重な設計が求められます。",
        },
      ],
    },
    approach: {
      label: "解決アプローチ",
      title: "Havenの解決アプローチ",
      subtitle:
        "4つの柱を通じて持続的な成長を実現支援します。",
      pillars: [
        {
          number: 1,
          title: "人材・組織",
          subtitle: "コミュニティを基盤とした採用と組織強化",
          description: "",
        },
        {
          number: 2,
          title: "AI展開",
          subtitle: "社内活用から顧客提供へ段階的に展開",
          description: "",
        },
        {
          number: 3,
          title: "効率化・最適化",
          subtitle: "経営基盤を強化し、成長投資へ再配分",
          description: "",
        },
        {
          number: 4,
          title: "プラットフォームとしての役割",
          subtitle: "連続的M&Aによる統合と拡張",
          description: "",
        },
      ],
    },
    partnership: {
      label: "戦略的パートナーシップ",
      title: "株式会社Recursiveとの戦略的パートナーシップ",
      description:
        "Haven AI Partnersは、2026年1月より株式会社Recursiveとの戦略的パートナーシップを開始しました。Havenの現場実装力とRecursiveの先端技術を融合し、日本全国の中堅・中小企業におけるAI活用を着実に推進します。構想から実装、運用まで一貫して支援し、継続的な成果創出を目指します。",
      steps: [
        {
          number: "01",
          title: "構想策定",
          subtitle: "Consulting",
          description:
            "企業ごとの現場課題を丁寧に整理し、費用対効果と実行可能性を踏まえたAI導入ロードマップを策定します。",
        },
        {
          number: "02",
          title: "実装",
          subtitle: "Development",
          description:
            "Recursiveの先端技術を活用し、各社の業務特性に即したAIモデルの開発とシステム統合を行います。現場に根付く形での実装を重視します。",
        },
        {
          number: "03",
          title: "運用・定着",
          subtitle: "Operation",
          description:
            "導入後も継続的なモニタリングとモデル改善を行い、成果の可視化と現場への定着を支援します。単発導入にとどまらない、持続的な価値創出を目指します。",
        },
      ],
    },
    market: {
      label: "日本市場の概要",
      title: "構造的成長が続く日本のITサービス市場",
      subtitle:
        "日本のITサービス市場は、デジタル化の進展とAI活用の拡大を背景に、今後も長期的な成長が見込まれています。企業の信頼関係を基盤とした現場密着型のIT支援は、日本市場ならではの強みであり、AIを実装することでさらなる付加価値創出の余地が広がっています。加えて、モダナイゼーション需要や業界再編の進展により、統合・高度化の機会も拡大しています。Havenは、この構造的な成長環境の中で事業を展開しています。",
      highlights: [
        {
          stat: "世界第2位",
          description: "エンタープライズソフトウェア市場規模（導入の70%以上が間接チャネル経由）",
        },
        {
          stat: "8.8兆円",
          description: "ITサービス市場規模（2028年予測）年間平均成長率+8%",
        },
        {
          stat: "2兆円",
          description: "政府によるAI導入支援関連予算（2027年まで）",
        },
        {
          stat: "10,000社超",
          description: "事業承継課題を抱えるIT中小企業",
        },
      ],
      source:
        "Sources: IMF; World Bank; METI; Gartner; Statista; One Capital; UB Ventures",
    },
    wayGroup: {
      label: "WAYグループ",
      title: "WAYグループについて",
      subtitle:
        "「ゼロからの立ち上げ」と「M&Aによる拡大」の両輪駆動を実践",
      tracks: [
        {
          label: "0 → 1",
          title: "新規事業・会社創出",
          description:
            "私たち自身が起業家として、ゼロから事業を立ち上げています。失敗の痛みも、産みの苦しみも知っている身として、実態に即した効果的な支援が可能です。",
        },
        {
          label: "1 → 100",
          title: "M&A・グループ拡大",
          description:
            "歴史ある企業をグループに迎え、グループ全体の力で成長を加速させます。個社では難しいDXや採用を、スケールメリットで実現します。",
        },
      ],
      synergiesTitle: "WAYグループとのシナジー",
      synergies: [
        {
          title: "長期保有前提の買収・統合",
          description:
            "Exit圧力がないため、従業員や顧客との関係を維持しながら本質的な企業価値向上に集中可能",
        },
        {
          title: "AI実装ノウハウの即時適用",
          description:
            "WAYグループが持つ「営業効率化AI」や「業務自動化ツール」を買収後の企業へ即座に展開し生産性を向上",
        },
        {
          title: "Patient Capital（忍耐強い資本）",
          description:
            "短期的な転売益ではなく、10年、20年先を見据えた永続的な成長を支援する長期資本",
        },
        {
          title: "採用・DXのスケールメリット",
          description:
            "個社では難しい高度人材の採用や大規模なシステム投資をグループ全体の資本力とブランドで実現",
        },
        {
          title: "世界水準の実行チーム",
          description:
            "グローバルな知見を持つ経営プロフェッショナルとAI・ソフトウェアの技術者集団がグループ全体を横断的に支援",
        },
        {
          title: "事業創造会社としてのDNA",
          description:
            "人材の採用から戦略立案、オペレーションの執行まで、共に汗をかき、事業を作り、成長を実現させる",
        },
      ],
    },
    contact: {
      label: "お問い合わせ",
      title: "お問い合わせ",
      description: "ご質問やご相談がございましたら、お気軽にお問い合わせください。",
      email: "info@havenaipartners.com",
      cta: "メールで問い合わせる",
    },
    footer: {
      copyright: "Haven AI Partners株式会社. All rights reserved.",
      confidential: "Proprietary & Confidential",
    },
    langSwitch: "EN",
  },
  en: {
    nav: {
      home: "Home",
      leadership: "Leadership",
      about: "About",
    },
    hero: {
      tagline: "Putting Japanese businesses at the forefront of the AI era",
      title: "Haven AI Partners",
      subtitle:
        "Haven is a next-generation IT services platform that turns AI into a growth engine. We welcome ambitious companies into our group, evolving together to build AI-native enterprises in Japan.",
      cta: "Contact Us",
    },
    about: {
      label: "About Us",
      title: "Haven AI Partners Co., Ltd.",
      items: [
        { label: "Company", value: "Haven AI Partners Co., Ltd." },
        { label: "Representative Director", value: "Yuta Yamada" },
        { label: "Founded", value: "December 2025" },
        {
          label: "Business",
          value: "AI Solutions / IT Service Implementation Support",
        },
      ],
      description:
        "Haven AI Partners strategically welcomes MSPs, resellers, and SIers into our group, building a technology group that leads growth in the AI era.",
    },
    mission: {
      label: "Mission",
      title:
        "知識と時間の民主化が進む今、人の可能性を解き放つ経営へ。",
      subtitle:
        "Empower every Japanese business to thrive in the age of AI",
    },
    vision: {
      label: "Vision",
      title:
        "To design Japan's industrial future by unlocking the creativity and productivity within every person",
      description:
        "日本のITサービス企業が持続的な成長機会を生み続けるエコシステムを構築します。",
      pillars: [
        {
          title: "Growth",
          description: "Accelerating digital transformation and productivity",
        },
        {
          title: "Creativity",
          description:
            "Toward a sustainable society centered on human creativity",
        },
        {
          title: "Equality",
          description:
            "Realizing a society where everyone can access cutting-edge technology",
        },
      ],
    },
    leadership: {
      label: "Leadership",
      title: "Leadership Team",
      subtitle:
        "Global expertise for Japan's growth. World-class strategy and execution by seasoned business leaders.",
      members: [
        {
          name: "Yuta Yamada",
          nameJa: "山田　雄大",
          role: "Representative Director & CEO",
          memberSubtitle:
            "A growth and turnaround professional forged in investment banking, global corporations, and healthcare",
          bio: "After investment banking at Goldman Sachs, served as Director of Finance & Strategy at The Estée Lauder Companies NY headquarters, contributing to growth strategy and business transformation. Most recently joined eLife Inc. as CEO, leading the organization to profitability and growth. Extensive experience spanning new business creation, growth strategy, and operational excellence.",
          education:
            "B.A. Economics, University of Tokyo; MBA, Columbia Business School",
          image: "/images/yamada-yuta.png",
          linkedin: "https://www.linkedin.com/in/yuta-yamada-659941129",
          skills: [
            {
              title: "Business Turnaround",
              description: "Led eLife to profitability and growth as CEO",
            },
            {
              title: "Global Strategy",
              description: "Growth strategy at NY headquarters",
            },
            {
              title: "Finance & Management",
              description: "GS Investment Banking, Columbia MBA",
            },
          ],
        },
        {
          name: "Christopher Ax",
          role: "Founder & CEO, WAY Equity Partners",
          memberSubtitle:
            "From IT investor to hands-on founder who built 30+ restaurant locations in Japan",
          bio: "Not a desk-bound investor, but a hands-on entrepreneur who founded German restaurant 'Schmatz' in Japan, growing it from zero to 30+ locations with hundreds of employees. He understands Japanese business customs, hiring challenges, and the grit of operations firsthand. That's why he truly believes that 'Japanese businesses can win globally with cutting-edge technology from abroad.' Since founding in 2024, he has already launched 4 companies.",
          education: "",
          image: "/images/ax-chris.png",
          linkedin: "https://www.linkedin.com/in/christopher-ax-65ba8451/",
          skills: [
            {
              title: "Schmatz Co-founder",
              description: "Founded German beer restaurant in Japan",
            },
            {
              title: "30+ Locations",
              description: "Built from zero to 30+ stores",
            },
            {
              title: "Hundreds of Employees",
              description: "Large-scale organization management",
            },
          ],
        },
      ],
    },
    values: {
      label: "Values",
      title: "Haven's 5 Values",
      items: [
        { en: "Champion Customers & Partners", ja: "顧客とパートナーの成功を、最優先に" },
        { en: "Build Trust in Every Moment", ja: "すべての瞬間に、誠実さを。" },
        { en: "Lead with Humility & Stewardship", ja: "謙虚に学び、責任を果たす。" },
        { en: "Advance with Speed & Purpose", ja: "意志あるスピードで前進する。" },
        { en: "Win Together, Own the Outcome", ja: "チーム力で勝ち、結果に責任を持つ。" },
      ],
    },
    challenges: {
      label: "Industry Challenges",
      title: "Structural Challenges Facing the IT Services Industry",
      subtitle:
        "Japan's field-driven, customized operations are a strength, but they resist standardized packages — leaving IT services caught between structural tailwinds and technical barriers.",
      items: [
        {
          title: "Labor Shortage",
          subtitle: "Accelerating workforce decline",
          description:
            "A projected 15% decline by 2030 makes technology adoption to supplement labor an urgent priority.",
        },
        {
          title: "Lagging Productivity",
          subtitle: "Stagnating efficiency due to delayed digitalization",
          description:
            "Cloud/SaaS adoption lags the US by a decade, representing massive untapped potential.",
        },
        {
          title: "Succession Crisis",
          subtitle: "Aging business owners (average age 63)",
          description:
            "The succession vacancy rate has reached 53.9%, with many profitable companies facing closure.",
        },
        {
          title: "AI Adoption Gap",
          subtitle: "The 'last mile' that generic tools can't solve",
          description:
            "Tacit knowledge and unique workflows on the ground prevent cutting-edge technology from reaching the front lines.",
        },
      ],
      barrierTagline:
        "Haven AI Partners addresses each client's unique challenges with tailored solutions.",
      barrierLabel: "Barriers to AI Adoption",
      barriers: [
        {
          title: "Data Fragmentation",
          description: "Non-standardized, real-world field data",
        },
        {
          title: "Unique Business Logic",
          description: "Complex exception handling rooted in historical context",
        },
        {
          title: "Security Constraints",
          description:
            "Confidentiality requirements and integration with existing authentication systems",
        },
      ],
    },
    approach: {
      label: "Our Approach",
      title: "Haven's Solution Approach",
      subtitle:
        "Leveraging each company's strengths, we support sustainable growth and value creation through four pillars with a long-term perspective.",
      pillars: [
        {
          number: 1,
          title: "People & Organization",
          subtitle: "Community-based recruitment and organizational strengthening",
          description:
            "Building organizations that top talent chooses. Leveraging our unique talent community and global network to strengthen recruitment while prioritizing engineer career development and engagement.",
        },
        {
          number: 2,
          title: "AI Deployment",
          subtitle: "From proof of concept to implementation, creating value step by step",
          description:
            "Starting with internal AI adoption, then expanding to AI/DX offerings for existing and new customers based on accumulated knowledge. We prioritize implementation that takes root on the ground, not just proposals.",
        },
        {
          number: 3,
          title: "Optimization",
          subtitle: "Strengthening the management foundation while protecting core value",
          description:
            "Optimizing resource allocation and cost structures to accelerate growth while maintaining stable operations. Freed-up capacity is reinvested into future initiatives like AI development and talent cultivation. We aim for sustainable enterprise value enhancement, not just short-term efficiency.",
        },
        {
          number: 4,
          title: "Platform Role",
          subtitle: "Becoming the integrated platform at the core of growth strategy",
          description:
            "Expanding customer base and business domains through continuous M&A to strengthen service portfolios. We pursue integration that respects each company's uniqueness while achieving both scale benefits and specialization.",
        },
      ],
    },
    partnership: {
      label: "Strategic Partnership",
      title: "Strategic Partnership with Recursive Inc.",
      description:
        "Haven AI Partners launched a strategic partnership with Recursive Inc. in January 2026. By combining Haven's field implementation capabilities with Recursive's cutting-edge technology, we steadily advance AI adoption for SMBs across Japan. We provide end-to-end support from strategy to implementation and operations, driving continuous value creation.",
      steps: [
        {
          number: "01",
          title: "Strategy",
          subtitle: "Consulting",
          description:
            "Carefully organizing each company's field challenges and developing AI implementation roadmaps based on cost-effectiveness and feasibility.",
        },
        {
          number: "02",
          title: "Implementation",
          subtitle: "Development",
          description:
            "Leveraging Recursive's cutting-edge technology to develop AI models and system integration tailored to each company's business characteristics. We prioritize implementation that takes root on the ground.",
        },
        {
          number: "03",
          title: "Operations",
          subtitle: "Operation",
          description:
            "Continuous monitoring and model improvement post-deployment, supporting results visualization and field adoption. We aim for sustained value creation, not one-time implementations.",
        },
      ],
    },
    market: {
      label: "Japan Market",
      title: "Japan's Growing IT Market",
      subtitle:
        "Built on trust-based relationships, implementing cutting-edge technology (AI) creates significant added value. Opportunities for modernization and consolidation continue to expand.",
      highlights: [
        {
          stat: "#2 Worldwide",
          description:
            "Enterprise software market (70%+ through indirect channels)",
        },
        {
          stat: "\u00A58.8 Trillion",
          description:
            "IT services market size (2028 forecast, +8% CAGR)",
        },
        {
          stat: "\u00A52 Trillion",
          description: "Government AI adoption support budget (through 2027)",
        },
        {
          stat: "10,000+ Companies",
          description:
            "IT SMBs facing business succession challenges",
        },
      ],
      source:
        "Sources: IMF; World Bank; METI; Gartner; Statista; One Capital; UB Ventures",
    },
    wayGroup: {
      label: "WAY Group",
      title: "About WAY Group",
      subtitle:
        "Dual-engine approach: building from zero and scaling through M&A",
      tracks: [
        {
          label: "0 → 1",
          title: "New Business Creation",
          description:
            "We are entrepreneurs ourselves, building businesses from scratch. Having experienced the pain of failure and the struggle of creation, we can provide practical, effective support.",
        },
        {
          label: "1 → 100",
          title: "M&A & Group Expansion",
          description:
            "We welcome established companies into our group and accelerate growth through collective strength. DX and recruitment that are difficult for individual companies become achievable at scale.",
        },
      ],
      synergiesTitle: "Synergies with WAY Group",
      synergies: [
        {
          title: "Long-term Acquisition & Integration",
          description:
            "Without exit pressure, we can focus on fundamental value enhancement while maintaining relationships with employees and customers.",
        },
        {
          title: "Immediate AI Implementation Know-how",
          description:
            "Rapidly deploying WAY Group's sales efficiency AI and workflow automation tools to acquired companies to boost productivity.",
        },
        {
          title: "Patient Capital",
          description:
            "Long-term capital supporting permanent growth with a 10-20 year horizon, not short-term flip profits.",
        },
        {
          title: "Scale Benefits in Recruitment & DX",
          description:
            "Achieving advanced talent recruitment and large-scale system investments through the group's collective capital and brand.",
        },
        {
          title: "World-class Execution Team",
          description:
            "Management professionals with global expertise and AI/software engineering teams providing cross-group support.",
        },
        {
          title: "Business Creation DNA",
          description:
            "From talent recruitment to strategy planning and operational execution — we work alongside, build businesses, and drive growth together.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Get in Touch",
      description:
        "If you have any questions or would like to discuss opportunities, please don't hesitate to reach out.",
      email: "info@havenaipartners.com",
      cta: "Send Email",
    },
    footer: {
      copyright: "Haven AI Partners Co., Ltd. All rights reserved.",
      confidential: "Proprietary & Confidential",
    },
    langSwitch: "JP",
  },
} as const
