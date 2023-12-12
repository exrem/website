const age = ((): number => {
  const now = new Date(),
    birthDate = new Date('2008-10-14'),
    diff = now.getFullYear() - birthDate.getFullYear()

  return now.getMonth() < birthDate.getMonth() || (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate()) ? diff - 1 : diff
})()

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'az',
  messages: {
    az: {
      'about': '2008-ci il oktyabrın 14-dä Xırdalanda anadan olmuşam. Körpäliyimdän bu yana kompüterlärlä, 8-9 yaşımdan bäri isä kodlarla dostluq eläyiram. Hal-hazırda da 10-cu sinifdä tähsil alıram.',
      'contact': {
        'contact': 'Mänimlä saytın än aşağısında paylaşdığım sosial media hesablarım vasitäsilä älaqä saxlaya, yaxud:',
        'email': 'mänä elektron mäktub ünvanlaya bilärsiniz'
      },
      'footer': {
        'external': 'Xarici keçidlär',
        'github': 'GitHub-da açıq mänbä\' olaraq älçatandır.',
        'listening': 'Qulaq asıram:',
        'not-listening': 'İndi heç näyä qulaq asmıram.'
      },
      'landing': {
        'about': `Azärbaycanın paytaxtı Bakı şähärindän ${age} yaşlı bir veb-developeräm; nüdrätän kitab yazmaqla da mäşğul oluram. Pişikläri, kapibaraları vä Killua Zoldiki çooooooox seviräm!!!`,
        'header': 'Män — Äkräm Cä\'fär.'
      },
      'projects': {
        'flick': '2022-ci ilin payızında "amigo" adı ilä başladığım vä 2023-cű ilin yayında rebrendinq edibän üzärindä işlämäyä davam etdiyim animanqa platformu. Ana dili türk dili olan proyekt istifadäçilärä yeni texnologiyalar sayäsindä sözün äsl mä\'nasında "äşsiz eksperiens" vä\'d edir. İctima\'i yayımlanma tarixi kimi 11 sentyabr 2024-cü il proqnozlaşdırılır.',
        'sözlük': 'Azärbaycan türkcäsinin mükämmäl sözlüyü. Yer üzündä här hansı bir dil üçün yazılmış än ähatäli sözlüklärdän biri olması näzärdä tutulmuşdur.',
        'visit-github-page': 'GitHub säfhäsini ziyarät edin'
      },
      'title': {
        '/': 'Ana sähifä',
        '/about': 'Haqqımda',
        '/contact': 'Älaqä saxlayın',
        '/projects': 'Proyektlärim'
      }
    },
    en: {
      'about': 'I was born in Khirdalan on October 14, 2008. I\'ve been friends with computers since my childhood, and scripts since the age of 8 or 9. Currently I\'m studying at 10th grade.',
      'contact': {
        'contact': 'You can reach me via the social media accounts of mine at the very bottom of the page,',
        'email': 'or you can send me an email'
      },
      'footer': {
        'external': 'External links',
        'github': 'Available on GitHub as open source.',
        'listening': 'I am listening to:',
        'not-listening': 'Currently not listening to anything.'
      },
      'landing': {
        'about': `I'm a ${age}-years-old web developer from Baku, Azerbaijan. Sometimes I write books, too. I love silly cats, capybaras and Killua Zoldyck sooooooo much!!!`,
        'header': 'I am Akram Jafar.'
      },
      'projects': {
        'flick': 'An animanga platform that was born as "amigo" in fall, 2022 and rebranded in summer, 2023. The Azerbaijani-language platform promises its users a "unique experience" thanks to new, innovative technologies. September 9, 2024 is thought of the launch date.',
        'sözlük': 'A perfect dictionary of the Azerbaijani language. It\'s going to be one of the most comprehensive dictionaries written for any language in the world.',
        'visit-github-page': 'Visit GitHub page'
      },
      'title': {
        '/': 'Home',
        '/about': 'About me',
        '/contact': 'Contact me',
        '/projects': 'My projects'
      }
    },
    tr: {
      'about': '14 Ekim 2008 tarihinde Hırdalan\'da doğdum ben, köylüyüm. Çocukluğumdan bu yana bilgisayarlarla, 8-9 yaşımdan beri ise kodlarla haşır neşirim. Şu ansa 10. sınıf öğrencisiyim.',
      'contact': {
        'contact': 'Benimle sitenin en aşağısındaki sosyal medya hesaplarım aracılığıyla iletişime geçe, veya:',
        'email': 'bana elektronik posta gönderebilirsiniz'
      },
      'footer': {
        'external': 'Dış bağlantılar',
        'github': 'GitHub\'da açık kaynak olarak mevcut.',
        'listening': 'Şu an dinliyorum:',
        'not-listening': 'Şu an hiçbir şey dinlemiyorum.'
      },
      'landing': {
        'about': `Azerbaycan'ın başkenti Bakü'den ${age} yaşında bir veb geliştiriciyim; ara sıra kitap falan da yazarım. Kedyleri, kapibaraları ve Killua Zoldyck'i çok ama çoooooook severim!`,
        'header': 'Ben, Ekrem Cafer.'
      },
      'projects': {
        'flick': '2022\'nin sonbaharında "amigo" adıyla başladığım ve 2023 yazında kurumsal kimliğini yenileyerek üzerinde çalışmaya devam ettiğim anime ve manga platformu. Ana dili Azerbaycan Türkçesi olan proje, kullanıcılara yeni nesil teknolojiler sayesinde "eşsiz eksperyans" vadediyor. Yayımlanma tarihi olarak 11 Eylül 2024 öngörülüyor.',
        'sözlük': 'Azerbaycan Türkçesinin mükemmel bir sözlüğü. Yeryüzünde herhangi bir dil için yazılan en geniş kapsamlı sözlük olması planlanıyor.',
        'visit-github-page': 'GitHub sayfasını görüntüleyin'
      },
      'title': {
        '/': 'Ana sayfa',
        '/about': 'Hakkımda',
        '/contact': 'Bana ulaşın',
        '/projects': 'Projelerim'
      }
    }
  }
}))