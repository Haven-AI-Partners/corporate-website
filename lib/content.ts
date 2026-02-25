export type Locale = "ja" | "en"

export const content = {
  ja: {
    nav: {
      philosophy: "理念",
      leadership: "経営陣",
      business: "事業",
      partnership: "パートナーシップ",
      market: "市場概要",
      wayGroup: "WAYグループ",
      about: "会社概要",
      contact: "お問い合わせ",
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
        {
          label: "本社",
          value: "東京都渋谷区猿楽町17-10 代官山アートヴィレッジ2C",
        },
        { label: "設立年度", value: "2025年" },
        {
          label: "事業内容",
          value: "AIソリューション / ITサービスの導入支援",
        },
      ],
      description:
        "MSP（マネージドサービスプロバイダー）、リセラー企業、SIersをはじめとする、信頼ある国内のITサービス企業を戦略的買収・統合により仲間として迎え入れ、グループインした企業の経営基盤の強化に加え、国内外のAIサービスを日本企業の顧客へ届ける架け橋の役割も担いながらAI時代の成長を牽引するテクノロジー企業グループを実現します。",
    },
    mission: {
      label: "ミッション",
      title: "",
      subtitle:
        "知識と時間の民主化が進む今、私たちは、人の可能性を解き放つ経営へと進化する必要があります。",
    },
    vision: {
      label: "ビジョン",
      title: "人々の生き方・働き方が再定義されるこの転換点で、日本のITサービス企業が持続的な成長機会を生み続けるエコシステムを構築します。",
      description: "",
      pillars: [
        {
          title: "Growth（成長）",
          description: "デジタル変革と生産性向上の加速",
        },
        {
          title: "Creativity（創造）",
          description: "人の創造性を中心に据えた、持続可能な社会へ",
        },
        {
          title: "Equality（平等）",
          description: "すべての人が先端技術へアクセスできる社会を実現",
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
          role: "代表取締役CEO",
          memberSubtitle:
            "投資銀行 ×グローバル企業 ×ヘルスケアで磨いた成長と再生のプロフェッショナル",
          bio: "ゴールドマン・サックス証券で投資銀行業務に従事後、The Estée Lauder Companies NY本社にてFinance & Strategyチームのディレクター職に就任し、同社の成長戦略、再生事業に参画。直近ではオンライン診療事業のeLife株式会社にCEOとして参画して組織の黒字化・成長拡大を牽引。新規事業の創出から成長戦略の立案、オペレーションの確立まで幅広い実績を持つ。",
          education: "東京大学経済学部卒、コロンビア大学経営大学院修了",
          image: "/images/yamada-yuta.png",
          linkedin: "https://www.linkedin.com/in/yuta-yamada-659941129",
          skills: [
            {
              title: "事業再生・黒字化",
              description: "eLife CEOとして組織の成長と黒字化を牽引",
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
    challenges: {
      label: "業界課題",
      title: "ITサービス業界が直面する構造的な課題",
      subtitle:
        "「100社あれば100通りのやり方がある」日本企業特有の現場主導型オペレーションは強みである一方、画一的なパッケージ導入を拒み、結果としてITサービスは「構造的な追い風」と「技術的な障壁」の板挟みになっています",
      items: [
        {
          title: "人材不足",
          subtitle: "加速する労働人口減少",
          description:
            "2030年までに15%減と予測され人を補うための技術導入が急務",
        },
        {
          title: "生産性向上への遅れ",
          subtitle: "デジタル化の遅れによる効率性の停滞",
          description:
            "クラウド/SaaS導入率は米国比で10年分の遅れをとっており巨大な「伸びしろ」が存在",
        },
        {
          title: "後継者不在",
          subtitle: "経営者の高齢化（平均63歳）",
          description:
            "後継者不在率は53.9%に達し、黒字でも廃業の危機にある企業が多数",
        },
        {
          title: "AI活用の断絶",
          subtitle: "汎用ツールでは解決できない「ラストワンマイル」",
          description:
            "現場の暗黙知や独自フローが壁となり最新技術の恩恵が現場に届いていない",
        },
      ],
      barrierTagline:
        "Haven AI Partnersは、クライアント一社一社の固有の課題に寄り添い、最適なソリューションを提供します",
      barrierLabel: "AI導入の障壁",
      barriers: [
        {
          title: "データの特異性と断絶",
          description: "標準化されていない現場のリアルデータ",
        },
        {
          title: "独自のビジネスロジック",
          description: "歴史的経緯に基づく複雑な例外処理",
        },
        {
          title: "セキュリティの壁",
          description: "機密保持や既存認証基盤との連携要件",
        },
      ],
    },
    approach: {
      label: "解決アプローチ",
      title: "Havenの解決アプローチ",
      subtitle:
        "それぞれの強みを活かしながら、4つの柱で更なる成長と価値創造を支援します。",
      pillars: [
        {
          number: 1,
          title: "人材・組織",
          subtitle: "コミュニティ主導の採用エコシステム",
          description:
            "トップタレントに選ばれ続ける組織へ WAYグループのタレントコミュニティを活用した採用力の強化に加え、エンジニアのキャリア開発支援とエンゲージメント向上を最優先事項として推進します。",
        },
        {
          number: 2,
          title: "AI展開",
          subtitle: "実証から実装へ、段階的な価値提供",
          description:
            "社内でのAI活用による効率化から始め、蓄積した知見を基に、既存・新規顧客向けのAI/DXオファリングへと展開します。",
        },
        {
          number: 3,
          title: "効率化・最適化",
          subtitle: "コア価値を損なわない筋肉質な経営",
          description:
            "既存事業の安定運用を前提としつつ、成長加速のためのリソース再配分・コスト構造の最適化を図ります。創出した余力は、AI技術開発や人材育成などの新規投資へ積極的に再配分します。",
        },
        {
          number: 4,
          title: "プラットフォーム役割",
          subtitle: "成長戦略の中核となるプラットフォームへ",
          description:
            "連続的なM&Aを通じて新規顧客層と販路の拡大を図り、事業領域を拡張させながらサービスポートフォリオの拡大を推進。より大きな社会的インパクトの創出を目指します。",
        },
      ],
    },
    features: {
      label: "Havenの特徴",
      title:
        "テクノロジーとオペレーションを融合させ、日本の中堅ITサービス企業の成長を加速",
      subtitle:
        "Haven AI Partnersはテクノロジーとオペレーションを融合させ、日本の中堅ITサービス企業の成長を加速させるAIネイティブプラットフォームを構築していきます。",
      items: [
        {
          title: "資本提供に留まらない実行力ある支援",
          description:
            "資金提供に加え、営業強化・マーケティング・業務効率化・AI導入支援など現場主導のハンズオン型オペレーション支援を実施。従来型MSP・VAR・SI企業をAIと自動化を通じて変革。顧客との信頼関係や企業文化も大切にし、デジタル時代に適した形へ再構築します。",
        },
        {
          title: "長期的かつ持続可能な成長基盤",
          description:
            "HavenはExit期限を持たない事業会社として運営。短期リターンではなく、長期的なパートナーシップと継続的イノベーションを追求。各社の独立性を尊重しながら、グループ全体のナレッジを共有。",
        },
      ],
    },
    strengths: {
      label: "譲受企業としての強み",
      title: "事業会社としての長期的な価値創造",
      subtitle:
        "弊社は投資リターンを主目的とした売却が必須なファンド形態とは異なり、事業会社として長期的かつ持続可能な価値創造を目指した経営スタイルを徹底します。",
      haven: {
        title: "Haven AI Partners",
        subtitle: "Strategic Builder",
        categories: [
          {
            label: "特徴・目的",
            items: [
              "事業会社として長期的な価値創造を実現",
              "自社のバランスシートを活用した買収",
              "投資先会社同士の協調が前提",
            ],
          },
          {
            label: "再譲渡（Exit）",
            items: [
              "強制的なExitなし",
              "M&Aとテクノロジーを通じ複利成長を追求",
            ],
          },
          {
            label: "バリューアップ",
            items: [
              "各社の独立性を尊重しつつ、AIとデジタル変革による独自のバリューアップを実現",
              "既存事業の支援と新規顧客の開拓の両輪で成長",
            ],
          },
        ],
      },
      fund: {
        title: "一般的な投資ファンド",
        subtitle: "Financial Buyer",
        categories: [
          {
            label: "特徴・目的",
            items: [
              "買収後3〜5年以内の売却が前提",
              "投資先会社同士の連携はほぼなし（個別最適）",
              "レバレッジ（LBO）を活用した金融手法",
            ],
          },
          {
            label: "再譲渡（Exit）",
            items: [
              "3〜5年以内に売却義務",
              "小規模の場合1年未満の短期転売ケースも",
            ],
          },
          {
            label: "バリューアップ",
            items: [
              "IT・AI分野の専門性が限定的",
              "外部コンサル委託のケースが多い（ハンズオフ）",
              "コストカットによる利益捻出が中心",
            ],
          },
        ],
      },
    },
    partnership: {
      label: "戦略的パートナーシップ",
      title: "株式会社Recursiveとの戦略的パートナーシップ",
      description:
        "Havenの現場実行力とRecursiveの技術力を融合し、日本全国の中堅・中小企業のAI活用を加速し、高品質かつ継続的な成果を創出します。",
      steps: [
        {
          number: "01",
          title: "構想策定",
          subtitle: "Consulting",
          description:
            "中堅・中小企業の現場課題を深く理解し、費用対効果の高いAI導入ロードマップを策定。",
        },
        {
          number: "02",
          title: "実装",
          subtitle: "Development",
          description:
            "Recursiveの先端技術を活用し、各社のニーズに合わせたAIモデルの開発とシステム統合を実施。",
        },
        {
          number: "03",
          title: "運用・定着",
          subtitle: "Operation",
          description:
            "導入後の継続的なモニタリングとモデル改善を行い、現場での定着と成果創出をサポート。",
        },
      ],
    },
    market: {
      label: "日本市場の概要",
      title: "成長する日本のIT市場",
      subtitle:
        "信頼関係を基盤に、最新技術（AI）を実装することで大きな付加価値が生まれる。モダナイゼーションと統合の再編機会が広がっています。",
      highlights: [
        {
          stat: "世界第2位",
          description: "エンタープライズソフトウェア市場（70%以上が間接導入）",
        },
        {
          stat: "8.8兆円",
          description: "ITサービス市場規模（2028年予測、年間平均成長率+8%）",
        },
        {
          stat: "2兆円",
          description: "政府によるAI導入支援予算（2027年まで）",
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
      philosophy: "Philosophy",
      leadership: "Leadership",
      business: "Business",
      partnership: "Partnership",
      market: "Market",
      wayGroup: "WAY Group",
      about: "About",
      contact: "Contact",
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
        {
          label: "Headquarters",
          value:
            "Daikanyama Art Village 2C, 17-10 Sarugakucho, Shibuya-ku, Tokyo",
        },
        { label: "Founded", value: "2025" },
        {
          label: "Business",
          value: "AI Solutions / IT Service Implementation Support",
        },
      ],
      description:
        "We strategically acquire and integrate trusted domestic IT service companies, including MSPs, resellers, and SIers, strengthening their management foundations while serving as a bridge to deliver world-class AI services to Japanese enterprise customers, building a technology group that leads growth in the AI era.",
    },
    mission: {
      label: "Mission",
      title:
        "In an era of democratized knowledge and time, we must evolve toward a management that unleashes human potential.",
      subtitle:
        "Empower every Japanese business to thrive in the age of AI",
    },
    vision: {
      label: "Vision",
      title:
        "To design Japan's industrial future by unlocking the creativity and productivity within every person",
      description:
        "At this turning point where the way people live and work is being redefined, we are building an ecosystem where Japan's IT service companies continuously generate sustainable growth opportunities.",
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
        "Leveraging each company's strengths, we support further growth and value creation through four pillars.",
      pillars: [
        {
          number: 1,
          title: "People & Organization",
          subtitle: "Community-driven talent ecosystem",
          description:
            "Building organizations that top talent chooses. Strengthening recruitment through WAY Group's talent community while prioritizing engineer career development and engagement.",
        },
        {
          number: 2,
          title: "AI Deployment",
          subtitle: "From proof of concept to implementation",
          description:
            "Starting with internal AI-driven efficiency gains, then expanding to AI/DX offerings for existing and new customers based on accumulated knowledge.",
        },
        {
          number: 3,
          title: "Optimization",
          subtitle: "Lean management without compromising core value",
          description:
            "Optimizing resource allocation and cost structures while maintaining stable operations. Freed-up capacity is actively reinvested into AI development and talent cultivation.",
        },
        {
          number: 4,
          title: "Platform Role",
          subtitle: "Becoming the core platform for growth strategy",
          description:
            "Expanding customer base and channels through continuous M&A, broadening service portfolios while pursuing greater social impact.",
        },
      ],
    },
    features: {
      label: "Our Approach",
      title:
        "Fusing technology and operations to accelerate growth for mid-market Japanese IT service companies",
      subtitle:
        "Haven AI Partners builds an AI-native platform that fuses technology and operations to accelerate growth for mid-market Japanese IT service companies.",
      items: [
        {
          title: "Hands-on Operational Support Beyond Capital",
          description:
            "Beyond funding, we provide hands-on support including sales enhancement, marketing, operational efficiency, and AI implementation. We transform traditional MSP, VAR, and SI companies through AI and automation while preserving customer trust and corporate culture, rebuilding them for the digital era.",
        },
        {
          title: "Long-term, Sustainable Growth Foundation",
          description:
            "Haven operates as a permanent holding company with no exit timeline. We pursue long-term partnerships and continuous innovation rather than short-term returns, sharing knowledge across the group while respecting each company's independence.",
        },
      ],
    },
    strengths: {
      label: "Our Strengths",
      title: "Long-term Value Creation as a Strategic Acquirer",
      subtitle:
        "Unlike fund-style acquisitions driven primarily by investment returns, we are committed to long-term, sustainable value creation as a permanent operating company.",
      haven: {
        title: "Haven AI Partners",
        subtitle: "Strategic Builder",
        categories: [
          {
            label: "Characteristics & Purpose",
            items: [
              "Long-term value creation as a permanent operating company",
              "Acquisitions funded through our own balance sheet",
              "Collaboration between portfolio companies is a core principle",
            ],
          },
          {
            label: "Exit Strategy",
            items: [
              "No forced exits",
              "Pursuing compound growth through M&A and technology",
            ],
          },
          {
            label: "Value-Up",
            items: [
              "Unique value-up through AI and digital transformation while respecting each company's independence",
              "Growth through both existing business support and new customer acquisition",
            ],
          },
        ],
      },
      fund: {
        title: "Typical Investment Fund",
        subtitle: "Financial Buyer",
        categories: [
          {
            label: "Characteristics & Purpose",
            items: [
              "Sale within 3-5 years post-acquisition is the premise",
              "Almost no collaboration between portfolio companies (individual optimization)",
              "Financial approach leveraging LBO",
            ],
          },
          {
            label: "Exit Strategy",
            items: [
              "Mandatory exit within 3-5 years",
              "Short-term flips under 1 year for smaller deals",
            ],
          },
          {
            label: "Value-Up",
            items: [
              "Limited expertise in IT/AI domains",
              "Often outsourced to external consultants (hands-off)",
              "Primarily profit extraction through cost-cutting",
            ],
          },
        ],
      },
    },
    partnership: {
      label: "Strategic Partnership",
      title: "Strategic Partnership with Recursive Inc.",
      description:
        "Combining Haven's hands-on execution with Recursive's technical capabilities, we accelerate AI adoption for SMBs across Japan, delivering high-quality, sustainable results.",
      steps: [
        {
          number: "01",
          title: "Strategy",
          subtitle: "Consulting",
          description:
            "Deeply understanding SMB field challenges to develop cost-effective AI implementation roadmaps.",
        },
        {
          number: "02",
          title: "Implementation",
          subtitle: "Development",
          description:
            "Leveraging Recursive's cutting-edge technology to develop customized AI models and system integration.",
        },
        {
          number: "03",
          title: "Operations",
          subtitle: "Operation",
          description:
            "Continuous monitoring and model improvement post-deployment, supporting adoption and value creation on the ground.",
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
