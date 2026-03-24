// ============================================================
// サイト全体のテキスト・設定を管理するファイル
// ここを編集することで各ページのコンテンツを変更できます
// ============================================================

export const siteConfig = {
  name: '一般社団法人 ○○協会',
  nameShort: '○○協会',
  copyright: '© 2025 一般社団法人 ○○協会 All Rights Reserved.',
}

// ナビゲーション
export const navLinks = [
  { label: 'ニュース', href: '#news' },
  { label: 'イベント', href: '#events' },
  { label: '当協会について', href: '#about' },
  { label: 'お問い合わせ', href: '#contact' },
]

// メインビュー（トップ）
export const mainViewConfig = {
  heading: '地域と文化をつなぐ\n架け橋として',
  text: '私たちは、地域社会の発展と文化の継承・普及を目的として活動しています。\n人と人とのつながりを大切に、より豊かなコミュニティの実現を目指します。',
  image: '/images/main-hero.jpg', // 画像ファイルを差し替えてください
  imageAlt: '活動風景',
}

// ① 活動目的
export const purposeConfig = {
  heading: '活動目的',
  subheading: '地域・文化・人をつなぐ',
  text: '本協会は、地域文化の振興及び人材育成を通じて、地域社会の持続的な発展に貢献することを目的としています。多様な主体との連携により、文化的価値の創造と継承を推進し、誰もが参加できるひらかれたコミュニティづくりに取り組んでまいります。',
}

// ④ 当協会について（企業情報テーブル）
export const aboutConfig = {
  heading: '当協会について',
  rows: [
    { label: '法人名', value: '一般社団法人 ○○協会' },
    { label: '設立', value: '2020年4月1日' },
    { label: '住所', value: '〒000-0000 ○○県○○市○○町1-2-3' },
    { label: '代表理事', value: '氏名 太郎' },
    {
      label: '目的',
      value:
        '地域文化の振興及び人材育成を通じて、地域社会の持続的な発展に貢献することを目的とする。',
    },
    {
      label: '主な取引実績',
      value: '○○県、○○市、○○財団、○○大学 ほか',
    },
    {
      label: '主な後援・連携実績',
      value: '○○省、○○庁、○○協議会、○○ネットワーク ほか',
    },
  ],
}

// ⑤ お問い合わせ
export const contactConfig = {
  heading: 'お問い合わせ',
  text1: '当協会の活動やイベントに関するお問い合わせは、下記よりお気軽にご連絡ください。',
  text2: 'Email: info［at］example.or.jp　／　Tel: 00-0000-0000（平日 9:00〜17:00）',
}

// フッター
export const footerConfig = {
  heading: '一般社団法人 ○○協会',
  text1: '〒000-0000 ○○県○○市○○町1-2-3',
  text2: 'Email: info［at］example.or.jp　／　Tel: 00-0000-0000',
}
