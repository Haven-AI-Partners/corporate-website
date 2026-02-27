"use client"

import { useLocale } from "@/hooks/use-locale"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const privacyContent = {
  ja: {
    title: "プライバシーポリシー",
    lastUpdated: "最終更新日: 2025年12月1日",
    sections: [
      {
        heading: "1. 基本方針",
        body: `Haven AI Partners株式会社（以下「当社」）は、利用者の個人情報の保護を重要な責務と認識し、個人情報の保護に関する法律（個人情報保護法）およびその他関連法令を遵守し、適切な取扱いと保護に努めます。`,
      },
      {
        heading: "2. 取得する情報",
        body: `当社は、以下の情報を取得することがあります。

【お問い合わせ時にご提供いただく情報】
• 氏名
• メールアドレス
• 会社名・所属
• お問い合わせ内容

【自動的に取得する情報】
• IPアドレス
• ブラウザの種類・バージョン
• オペレーティングシステム
• 参照元URL
• サイト内での閲覧ページ・行動履歴
• アクセス解析データ（匿名）`,
      },
      {
        heading: "3. 利用目的",
        body: `取得した個人情報は、以下の目的で利用します。
• お問い合わせへの対応・回答
• 当社サービスに関する情報の提供
• サイトの利用状況の分析・改善
• 新サービスの開発・改善
• 法令に基づく対応`,
      },
      {
        heading: "4. 第三者提供",
        body: `当社は、以下の場合を除き、利用者の個人情報を第三者に提供することはありません。
• 利用者ご本人の同意がある場合
• 法令に基づく場合
• 人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
• 業務委託先に対して、利用目的の達成に必要な範囲で個人情報を提供する場合（この場合、委託先に対して適切な管理・監督を行います）`,
      },
      {
        heading: "5. アクセス解析ツール",
        body: `当社は、サイトの利便性向上およびアクセス状況の把握のため、Vercel Analyticsを使用しています。Vercel Analyticsはプライバシーに配慮した解析ツールであり、Cookieを使用せず、匿名のアクセスデータのみを収集します。個人を特定する情報は収集されません。`,
      },
      {
        heading: "6. 安全管理措置",
        body: `当社は、個人情報の漏えい、紛失、改ざんおよび不正アクセスを防止するため、以下の安全管理措置を講じます。
• アクセス制御および権限管理
• 通信の暗号化（SSL/TLS）
• 従業者への教育・研修
• 定期的なセキュリティ評価`,
      },
      {
        heading: "7. 個人情報の開示・訂正・削除",
        body: `利用者は、当社が保有する自己の個人情報について、開示、訂正、追加、削除、利用停止または消去を請求することができます。ご請求の際は、ご本人確認をさせていただいた上で、合理的な期間内に対応いたします。`,
      },
      {
        heading: "8. 本ポリシーの変更",
        body: `当社は、法令の改正や事業内容の変更等に応じて、本ポリシーを変更することがあります。変更後のポリシーは、本サイトに掲載した時点から効力を生じるものとします。`,
      },
      {
        heading: "9. お問い合わせ窓口",
        body: `個人情報の取扱いに関するお問い合わせは、以下の連絡先までお願いいたします。

Haven AI Partners株式会社
個人情報保護管理者
メール: info@havenaipartners.com`,
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: December 1, 2025",
    sections: [
      {
        heading: "1. Overview",
        body: `Haven AI Partners Co., Ltd. ("Company", "we", "us", or "our") recognizes the importance of protecting personal information. We comply with the Act on the Protection of Personal Information (APPI) and other applicable laws, and are committed to the proper handling and protection of personal data.`,
      },
      {
        heading: "2. Information We Collect",
        body: `We may collect the following types of information:

Information you provide:
• Name
• Email address
• Company name and affiliation
• Content of your inquiry

Information collected automatically:
• IP address
• Browser type and version
• Operating system
• Referring URL
• Pages viewed and browsing behavior
• Anonymous analytics data`,
      },
      {
        heading: "3. Purpose of Use",
        body: `We use collected personal information for the following purposes:
• Responding to inquiries
• Providing information about our services
• Analyzing and improving website usage
• Developing and improving new services
• Compliance with legal obligations`,
      },
      {
        heading: "4. Disclosure to Third Parties",
        body: `We do not disclose personal information to third parties except in the following cases:
• With the consent of the individual
• When required by law
• When necessary for the protection of life, body, or property and it is difficult to obtain consent
• When disclosing to service providers within the scope necessary to achieve the purpose of use (in such cases, we ensure appropriate management and supervision of the provider)`,
      },
      {
        heading: "5. Analytics",
        body: `We use Vercel Analytics to improve website usability and understand traffic patterns. Vercel Analytics is a privacy-friendly analytics tool that does not use cookies and only collects anonymous access data. No personally identifiable information is collected.`,
      },
      {
        heading: "6. Security Measures",
        body: `We implement the following security measures to prevent leakage, loss, alteration, and unauthorized access to personal information:
• Access controls and authorization management
• Encryption of communications (SSL/TLS)
• Employee training and education
• Regular security assessments`,
      },
      {
        heading: "7. Access, Correction, and Deletion",
        body: `You have the right to request disclosure, correction, addition, deletion, suspension of use, or erasure of your personal information held by us. Upon verification of your identity, we will respond within a reasonable timeframe.`,
      },
      {
        heading: "8. Changes to This Policy",
        body: `We may update this Privacy Policy in response to changes in laws or business operations. The updated policy becomes effective upon posting on this website.`,
      },
      {
        heading: "9. Contact",
        body: `For questions regarding the handling of personal information, please contact:

Haven AI Partners Co., Ltd.
Personal Information Protection Manager
Email: info@havenaipartners.com`,
      },
    ],
  },
}

export default function PrivacyPage() {
  const { locale, setLocale } = useLocale()
  const t = privacyContent[locale]

  return (
    <main>
      <Navbar locale={locale} onLocaleChange={setLocale} activePage="privacy" />
      <div className="min-h-screen bg-background pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{t.lastUpdated}</p>

          <div className="mt-12 space-y-10">
            {t.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-lg font-semibold text-foreground">
                  {section.heading}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer locale={locale} />
    </main>
  )
}
