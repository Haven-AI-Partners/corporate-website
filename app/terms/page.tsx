"use client"

import { useLocale } from "@/hooks/use-locale"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const termsContent = {
  ja: {
    title: "利用規約",
    lastUpdated: "最終更新日: 2025年12月1日",
    sections: [
      {
        heading: "第1条（適用）",
        body: `本利用規約（以下「本規約」）は、Haven AI Partners株式会社（以下「当社」）が提供するウェブサイト（以下「本サイト」）およびこれに関連するサービス（以下「本サービス」）の利用に関する条件を定めるものです。本サイトをご利用いただく場合、本規約に同意いただいたものとみなします。`,
      },
      {
        heading: "第2条（定義）",
        body: `本規約において使用する用語の定義は以下のとおりです。
• 「利用者」とは、本サイトまたは本サービスを利用するすべての方をいいます。
• 「コンテンツ」とは、本サイト上のテキスト、画像、動画、ソフトウェアその他一切の情報をいいます。`,
      },
      {
        heading: "第3条（サービスの内容）",
        body: `当社は、AIソリューションおよびITサービスの導入支援に関する情報提供、お問い合わせ窓口の提供、その他当社が定めるサービスを本サイトを通じて提供します。当社は、利用者に事前の通知なく、本サービスの内容を変更、追加、または廃止することがあります。`,
      },
      {
        heading: "第4条（知的財産権）",
        body: `本サイトに掲載されるすべてのコンテンツ（テキスト、画像、ロゴ、デザイン、ソフトウェア等）に関する著作権、商標権その他の知的財産権は、当社または正当な権利者に帰属します。利用者は、当社の書面による事前の許可なく、これらのコンテンツを複製、転載、改変、配布、または商業利用することはできません。`,
      },
      {
        heading: "第5条（禁止事項）",
        body: `利用者は、本サイトの利用にあたり、以下の行為を行ってはなりません。
• 法令または公序良俗に反する行為
• 当社または第三者の知的財産権、プライバシー権、名誉権その他の権利を侵害する行為
• 本サイトの運営を妨害する行為（不正アクセス、過剰な負荷をかける行為等）
• 虚偽の情報を提供する行為
• 本サイトを利用して、第三者に対して迷惑または不利益を与える行為
• その他、当社が不適切と判断する行為`,
      },
      {
        heading: "第6条（免責事項）",
        body: `当社は、本サイトおよび本サービスの内容について、その正確性、完全性、有用性、安全性等について一切の保証を行いません。本サイトの利用により利用者に生じた損害について、当社の故意または重過失による場合を除き、当社は一切の責任を負いません。当社は、本サイトの中断、停止、変更、終了により利用者に生じた損害について責任を負いません。`,
      },
      {
        heading: "第7条（外部リンク）",
        body: `本サイトには、第三者が運営するウェブサイトへのリンクが含まれる場合があります。当社は、外部サイトの内容、プライバシーポリシー、安全性について一切の責任を負いません。`,
      },
      {
        heading: "第8条（個人情報の取扱い）",
        body: `利用者の個人情報の取扱いについては、当社が別途定める「プライバシーポリシー」に従います。`,
      },
      {
        heading: "第9条（本規約の変更）",
        body: `当社は、必要に応じて本規約を変更することがあります。変更後の規約は、本サイトに掲載した時点から効力を生じるものとします。変更後も本サイトを利用された場合、変更後の規約に同意いただいたものとみなします。`,
      },
      {
        heading: "第10条（準拠法・管轄）",
        body: `本規約は日本法に準拠し、日本法に従って解釈されるものとします。本規約に関する一切の紛争は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。`,
      },
      {
        heading: "第11条（お問い合わせ）",
        body: `本規約に関するお問い合わせは、以下の連絡先までお願いいたします。

Haven AI Partners株式会社
メール: info@havenaipartners.com`,
      },
    ],
  },
  en: {
    title: "Terms & Conditions",
    lastUpdated: "Last Updated: December 1, 2025",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        body: `These Terms and Conditions ("Terms") govern your access to and use of the website and services ("Services") provided by Haven AI Partners Co., Ltd. ("Company", "we", "us", or "our"). By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website.`,
      },
      {
        heading: "2. Definitions",
        body: `• "User" refers to any individual or entity that accesses or uses our website or Services.
• "Content" refers to all text, images, videos, software, and other information available on our website.`,
      },
      {
        heading: "3. Description of Services",
        body: `The Company provides information about AI solutions and IT service implementation support, contact services, and other services as determined by the Company through this website. We reserve the right to modify, add, or discontinue any aspect of our Services at any time without prior notice.`,
      },
      {
        heading: "4. Intellectual Property",
        body: `All content on this website, including but not limited to text, images, logos, designs, and software, is the property of the Company or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or commercially use any content without our prior written consent.`,
      },
      {
        heading: "5. Prohibited Activities",
        body: `When using our website, you agree not to:
• Violate any applicable laws or regulations
• Infringe on the intellectual property, privacy, or other rights of the Company or third parties
• Interfere with the operation of the website (including unauthorized access or excessive load)
• Provide false or misleading information
• Use the website to cause harm or inconvenience to others
• Engage in any other activity deemed inappropriate by the Company`,
      },
      {
        heading: "6. Disclaimer of Warranties",
        body: `The Company makes no warranties, express or implied, regarding the accuracy, completeness, usefulness, or security of the website or Services. Except in cases of willful misconduct or gross negligence, the Company shall not be liable for any damages arising from your use of the website. The Company is not responsible for any damages resulting from interruption, suspension, modification, or termination of the website.`,
      },
      {
        heading: "7. External Links",
        body: `Our website may contain links to third-party websites. The Company is not responsible for the content, privacy policies, or security of external websites.`,
      },
      {
        heading: "8. Personal Information",
        body: `The handling of personal information is governed by our Privacy Policy, which is available separately on this website.`,
      },
      {
        heading: "9. Changes to Terms",
        body: `The Company reserves the right to modify these Terms at any time. Updated Terms become effective upon posting on this website. Continued use of the website after changes constitutes acceptance of the modified Terms.`,
      },
      {
        heading: "10. Governing Law & Jurisdiction",
        body: `These Terms shall be governed by and construed in accordance with the laws of Japan. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the Tokyo District Court as the court of first instance.`,
      },
      {
        heading: "11. Contact",
        body: `For questions about these Terms, please contact us at:

Haven AI Partners Co., Ltd.
Email: info@havenaipartners.com`,
      },
    ],
  },
}

export default function TermsPage() {
  const { locale, setLocale } = useLocale()
  const t = termsContent[locale]

  return (
    <main>
      <Navbar locale={locale} onLocaleChange={setLocale} activePage="terms" />
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
