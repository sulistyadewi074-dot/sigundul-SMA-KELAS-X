import { LocationConfig, Question } from '../types/game';

export interface SociologyEssayQuestion {
  id: string;
  number: number;
  question: string;
  stimulus?: string;
  cognitiveLevel: 'C4 (Menganalisis)' | 'C5 (Mengevaluasi)' | 'C6 (Mencipta)';
  indicator: string;
  sampleAnswer: string;
  scoringRubric: {
    maxScore: number;
    criteria: { points: number; description: string }[];
  };
}

export const SOCIOLOGY_LOCATIONS: LocationConfig[] = [
  // --- POS 1: REVOLUSI PRANCIS & REVOLUSI INDUSTRI (LATAR BELAKANG KELAHIRAN SOSIOLOGI) ---
  {
    id: 'pos_1',
    code: 'POS 1',
    name: 'Ruang Sejarah & Peradaban',
    qrCode: 'SOSIOLOGI-POS-1',
    hint: '🏛️ Temukan pos di dekat Ruang Sejarah atau Aula Sekolah. Di sini kamu akan mengungkap bagaimana guncangan Revolusi Prancis dan Revolusi Industri memicu lahirnya Sosiologi!',
    isFinal: false,
    isActive: true,
    iconName: 'History',
    story: {
      chapterNumber: 1,
      title: 'Pos 1: Badai Revolusi & Kelahiran Ilmu Masyarakat',
      subtitle: 'Membedah akar sejarah lahirnya sosiologi di Eropa abad ke-18 dan ke-19',
      imageCaption: 'Ilustrasi Revolusi Industri & Revolusi Prancis: Runtuhnya feodalisme, migrasi massal kaum buruh ke pabrik-pabrik kota, serta kekacauan tatanan sosial di Eropa.',
      visualHighlights: [
        '⚡ Revolusi Prancis (1789): Runtuhnya monarki absolut dan kekacauan tatanan sosial politik',
        '🏭 Revolusi Industri di Inggris: Mekanisasi mesin uap mengubah masyarakat agraris menjadi industri',
        '🏚️ Masalah Sosial Baru: Urbanisasi tak terkendali, eksploitasi kaum buruh, jam kerja 16 jam, dan permukiman kumuh',
        '💡 Abad Pencerahan (Aufklärung): Keinginan menjelaskan perilaku masyarakat secara ilmiah dan rasional',
      ],
      paragraphs: [
        'Sosiologi tidak lahir dalam ruang hampa atau ketenangan laboratorium, melainkan lahir dari guncangan sosial dan transformasi dramatis yang melanda benua Eropa pada abad ke-18 dan ke-19. Dua peristiwa mahabesar yang menjadi katalis utama lahirnya ilmu sosiologi adalah Revolusi Prancis (1789) dan Revolusi Industri di Inggris yang menyebar luas ke seluruh daratan Eropa.',
        'Revolusi Prancis pada tahun 1789 menghancurkan tatanan lama (ancien régime) berupa sistem monarki absolut dan dominasi feodalisme kaum bangsawan serta kaum agamawan. Meski mengusung semboyan kebebasan (liberté), persamaan (égalité), dan persaudaraan (fraternité), runtuhnya tatanan politik monarki justru diikuti oleh gelombang kekacauan sosial yang panjang, anarki, pertumpahan darah pada masa Teror, serta ketidakpastian tata aturan masyarakat. Para pemikir Eropa saat itu menyadari bahwa masyarakat membutuhkan ilmu baru yang mampu menjelaskan bagaimana ketertiban sosial (social order) dapat dibangun kembali.',
        'Hampir bersamaan dengan itu, Revolusi Industri di Inggris membawa perubahan radikal dalam sistem ekonomi dan cara manusia berproduksi. Ditemukannya mesin uap oleh James Watt mendorong mekanisasi pabrik-pabrik tekstil dan tambang. Akibatnya, jutaan penduduk desa yang semula bekerja sebagai petani berbondong-bondong pindah ke kota-kota industri (urbanisasi besar-besaran) untuk menjadi buruh pabrik.',
        'Namun, industrialisasi yang pesat melahirkan berbagai krisis kemanusiaan baru: pemerasan tenaga kerja buruh (termasuk perempuan dan anak-anak) dengan jam kerja ekstrem hingga 14-16 jam per hari, upah yang sangat minim, munculnya permukiman kumuh (slum area) yang kotor dan sarang penyakit, angka kejahatan yang melonjak, serta jurang pemisah yang semakin lebar antara pemilik modal (kapitalis) dan kaum buruh miskin (proletar). Hubungan kekeluargaan dan gotong royong tradisional luntur, digantikan oleh individualisme yang dingin.',
        'Di sisi lain, Abad Pencerahan (Aufklärung) telah menanamkan keyakinan bahwa akal budi manusia dan penalaran rasional mampu memecahkan segala misteri alam semesta. Jika ilmu fisika, kimia, dan biologi mampu mengungkap hukum-hukum alam secara ilmiah, maka para ilmuwan berpikir bahwa semestinya perilaku masyarakat manusia juga dapat diselidiki secara ilmiah dan objektif. Kondisi gejolak sosial yang dibarengi dengan semangat ilmiah inilah yang membidani lahirnya sosiologi sebagai disiplin ilmu mandiri.',
      ],
      summaryClue: 'Pos 1: Sosiologi lahir karena krisis tatanan sosial akibat Revolusi Prancis (keruntuhan monarki feodal) dan Revolusi Industri (urbanisasi, eksploitasi buruh, kemiskinan kota), didorong semangat rasionalitas Abad Pencerahan.',
      glossary: [
        { word: 'Aufklärung (Abad Pencerahan)', meaning: 'Zaman pencerahan di Eropa abad ke-18 yang menjunjung tinggi kekuatan akal budi dan rasionalitas ilmiah' },
        { word: 'Revolusi Industri', meaning: 'Transformasi radikal dari produksi manual menggunakan tenaga manusia/hewan menjadi tenaga mesin pabrik' },
        { word: 'Ancien Régime', meaning: 'Tatanan masyarakat lama sebelum Revolusi Prancis yang bercirikan kekuasaan raja mutlak dan hak istimewa bangsawan' },
        { word: 'Urbanisasi', meaning: 'Perpindahan penduduk secara besar-besaran dari daerah pedesaan ke pusat-pusat kota industri' },
        { word: 'Ketertiban Sosial (Social Order)', meaning: 'Kondisi masyarakat di mana norma, aturan, dan institusi berjalan teratur dan harmonis' },
      ],
    },
  },

  // --- POS 2: AUGUSTE COMTE & POSITIVISME ---
  {
    id: 'pos_2',
    code: 'POS 2',
    name: 'Taman Filsafat & Sains',
    qrCode: 'SOSIOLOGI-POS-2',
    hint: '🌿 Datanglah ke area taman tengah sekolah. Temukan kartu QR untuk mempelajari pemikiran Auguste Comte, sang Bapak Sosiologi Dunia, dan Hukum Tiga Tahap Pemikiran Manusia!',
    isFinal: false,
    isActive: true,
    iconName: 'BookMarked',
    story: {
      chapterNumber: 2,
      title: 'Pos 2: Auguste Comte & Lahirnya Positivisme',
      subtitle: 'Memahami pencetusan nama sosiologi, hukum tiga tahap, dan fisika sosial',
      imageCaption: 'Ilustrasi Auguste Comte (1798–1857): Tokoh pencetus istilah sosiologi dalam bukunya Cours de Philosophie Positive serta perumusan Hukum Tiga Tahap Pemikiran Manusia.',
      visualHighlights: [
        '👑 Auguste Comte (1798–1857): Dikenal sebagai Bapak Sosiologi Dunia (The Father of Sociology)',
        '📖 Istilah Sosiologi (1838): Diperkenalkan dalam buku Cours de Philosophie Positive jilid ke-4',
        '🔬 Fisika Sosial (Physique Sociale): Gagasan awal meneliti masyarakat dengan metode ilmu alam',
        '📈 Hukum 3 Tahap: Tahap Teologis, Tahap Metafisik, dan Tahap Positif/Ilmiah',
      ],
      paragraphs: [
        'Tokoh paling sentral yang dinobatkan sebagai "Bapak Sosiologi Dunia" adalah filsuf asal Prancis bernama Isidore Auguste Marie François Xavier Comte, yang lebih dikenal sebagai Auguste Comte (1798–1857). Menghadapi kekacauan politik dan sosial di Prancis pascarevolusi, Comte mencita-citakan suatu ilmu yang mampu membimbing penataan kembali masyarakat dengan prinsip-prinsip ilmiah yang teratur dan pasti.',
        'Pada awalnya, Comte menyebut cabang ilmu baru ini dengan istilah "Fisika Sosial" (physique sociale). Hal ini karena Comte terinspirasi oleh keberhasilan ilmu fisika yang mampu menemukan hukum-hukum pasti pergerakan benda alam semesta. Namun, karena istilah fisika sosial kemudian digunakan oleh seorang ilmuwan statistik Belgia bernama Adolphe Quetelet untuk penelitian statistiknya, Comte memutuskan mencari nama baru yang lebih khas dan orisinal.',
        'Maka pada tahun 1838, dalam mahakaryanya yang berjudul "Cours de Philosophie Positive" (Kursus Filsafat Positif) jilid ke-4, Comte secara resmi mencetuskan istilah "SOCIOLOGIE" (Sosiologi). Secara etimologis, kata sosiologi merupakan gabungan dari dua bahasa kuno: kata Latin "socius" yang berarti kawan, teman, atau masyarakat, dan kata Yunani "logos" yang bermakna kata, pembicaraan, atau ilmu pengetahuan. Dengan demikian, sosiologi secara harafiah berarti ilmu tentang masyarakat.',
        'Sumbangan pemikiran Auguste Comte yang paling termasyhur adalah "Hukum Tiga Tahap Pemikiran Manusia" (The Law of Three Stages), yang menjelaskan bahwa akal budi manusia dan peradaban masyarakat berkembang melalui tiga tingkatan evolusi pemikiran. Tahap pertama adalah Tahap Teologis (Fiktif), di mana segala gejala alam dan peristiwa sosial diyakini dikendalikan oleh kekuatan gaib, dewa-dewi, roh nenek moyang, atau Tuhan. Tahap ini dibagi menjadi animisme, politeisme, dan monoteisme.',
        'Tahap kedua adalah Tahap Metafisik (Abstrak), yang merupakan tahap transisi. Pada tahap ini, kepercayaan terhadap kekuatan gaib digantikan oleh kekuatan-kekuatan abstrak, prinsip alamiah, atau filsafat spekulatif (seperti konsep "kodrat alam" atau "keadilan esensial"). Tahap ketiga adalah puncak pemikiran manusia, yaitu Tahap Positif (Ilmiah/Rasional). Pada tahap positif, manusia tidak lagi mencari penyebab mutlak di balik alam gaib, melainkan mengamati fakta-fakta empiris secara objektif, melakukan eksperimen, dan mencari hukum-hukum sebab-akibat (kausalitas) yang mengatur masyarakat.',
        'Bagi Comte, sosiologi berada di puncak hierarki ilmu pengetahuan (setelah matematika, astronomi, fisika, kimia, dan biologi). Sosiologi adalah ilmu positif yang tugas utamanya membedah dua aspek besar masyarakat: Statika Sosial (social statics), yaitu kajian tentang struktur dan keteraturan sosial, serta Dinamika Sosial (social dynamics), yaitu kajian tentang perubahan dan perkembangan masyarakat dari waktu ke waktu.',
      ],
      summaryClue: 'Pos 2: Auguste Comte mencetuskan istilah "Sosiologi" (1838) dan aliran Positivisme. Beliau merumuskan Hukum 3 Tahap: Teologis (supranatural), Metafisik (kekuatan abstrak), dan Positif (fakta empiris & hukum sebab-akibat).',
      glossary: [
        { word: 'Socius & Logos', meaning: 'Akar kata sosiologi: socius (Latin = kawan/masyarakat) dan logos (Yunani = ilmu/pengetahuan)' },
        { word: 'Positivisme', meaning: 'Pandangan filosofis bahwa kebenaran sejati hanya diperoleh melalui pembuktian fakta empiris dan metode ilmiah' },
        { word: 'Tahap Teologis', meaning: 'Tingkat pemikiran manusia yang menjelaskan segala sesuatu atas dasar campur tangan kekuatan gaib dan ketuhanan' },
        { word: 'Tahap Metafisik', meaning: 'Tingkat transisi yang menjelaskan gejala dengan kekuatan abstrak atau prinsip alamiah spekulatif' },
        { word: 'Statika & Dinamika Sosial', meaning: 'Statika sosial meneliti keteraturan/struktur masyarakat; dinamika sosial meneliti proses perubahan masyarakat' },
      ],
    },
  },

  // --- POS 3: TOKOH-TOKOH KLASIK SOSIOLOGI ---
  {
    id: 'pos_3',
    code: 'POS 3',
    name: 'Pojok Baca Perpustakaan',
    qrCode: 'SOSIOLOGI-POS-3',
    hint: '📚 Masuki area perpustakaan sekolah. Pindai QR Code di dekat rak ilmu sosial untuk menelusuri pemikiran 4 pilar tokoh klasik: Émile Durkheim, Karl Marx, Max Weber, dan Herbert Spencer!',
    isFinal: false,
    isActive: true,
    iconName: 'GraduationCap',
    story: {
      chapterNumber: 3,
      title: 'Pos 3: Empat Pilar Tokoh Klasik Sosiologi',
      subtitle: 'Membedah pemikiran Émile Durkheim, Karl Marx, Max Weber, dan Herbert Spencer',
      imageCaption: 'Empat Raksasa Teori Sosiologi Klasik: Durkheim (Fakta Sosial & Solidaritas), Marx (Konflik Kelas & Materialisme Historis), Weber (Verstehen & Tindakan Sosial), dan Spencer (Evolusi Sosial / Survival of the Fittest).',
      visualHighlights: [
        '🏛️ Émile Durkheim: Konsep Fakta Sosial, Solidaritas Mekanik vs Organik, dan studi Bunuh Diri (Suicide)',
        '⚒️ Karl Marx: Teori Konflik Kelas borjuis vs proletar, alienasi buruh, dan materialisme historis',
        '🧠 Max Weber: Pendekatan Verstehen (pemahaman interpretatif) dan 4 tipe Tindakan Sosial',
        '🌱 Herbert Spencer: Teori Evolusi Sosial, Analogi Organik, dan konsep Survival of the Fittest',
      ],
      paragraphs: [
        'Setelah fondasi diletakkan oleh Auguste Comte, sosiologi dimatangkan menjadi disiplin ilmu ilmiah yang kokoh oleh empat tokoh klasik utama: Émile Durkheim, Karl Marx, Max Weber, dan Herbert Spencer. Masing-masing tokoh ini membawa sudut pandang (paradigma) yang khas dalam melihat masyarakat.',
        'ÉMILE DURKHEIM (1858–1917) adalah tokoh yang berhasil menjadikan sosiologi sebagai mata kuliah resmi di universitas Prancis. Karyanya "The Rules of Sociological Method" (1895) menegaskan bahwa objek kajian sosiologi adalah FAKTA SOSIAL (social facts). Fakta sosial adalah cara bertindak, berpikir, dan merasa yang berada di luar diri individu (eksternal), memiliki daya paksa yang mengendalikan individu (koersif), serta berlaku umum di seluruh masyarakat (general). Durkheim juga membagi masyarakat menjadi Solidaritas Mekanik (masyarakat tradisional yang diikat kesadaran kolektif seragam) dan Solidaritas Organik (masyarakat modern yang diikat oleh saling ketergantungan pembagian kerja yang kompleks).',
        'KARL MARX (1818–1883) memandang masyarakat dari kacamata materialisme historis dan pertentangan kelas. Menurut Marx, motor penggerak perubahan sejarah manusia bukanlah gagasan atau agama, melainkan struktur ekonomi dan konflik antar-kelas sosial. Dalam masyarakat kapitalis industri, masyarakat terbelah menjadi dua kelas yang saling bertentangan: Kelas Borjuis (pemilik alat produksi, pabrik, dan modal) serta Kelas Proletar (kaum buruh tertindas yang hanya memiliki tenaga kerja). Marx juga memperkenalkan konsep alienasi (keterasingan), di mana kaum buruh terasing dari hasil karyanya, dari proses kerja yang menjemukan, dan dari potensi kemanusiaannya sendiri.',
        'MAX WEBER (1864–1920) berargumen bahwa sosiologi tidak hanya meneliti struktur luar masyarakat, melainkan harus memahami makna di balik tindakan manusia. Weber memperkenalkan metode VERSTEHEN (pemahaman mendalam yang berempati) untuk menafsirkan makna subjektif dari TINDAKAN SOSIAL (social action). Weber mengklasifikasikan tindakan sosial menjadi empat tipe: (1) Tindakan Rasional Instrumental (memperhitungkan tujuan dan sarana secara efisien), (2) Tindakan Rasional Berorientasi Nilai (berdasarkan nilai moral/keyakinan mutlak), (3) Tindakan Tradisional (karena kebiasaan adat), dan (4) Tindakan Afektif (didorong luapan emosi seketika). Dalam bukunya "The Protestant Ethic and the Spirit of Capitalism", Weber membuktikan bahwa ajaran asketisme Calvinis berkontribusi membidani etos kerja kapitalisme modern.',
        'HERBERT SPENCER (1820–1903) dari Inggris mempopulerkan teori Evolusi Sosial dengan menerapkan gagasan biologi Charles Darwin ke dalam sosiologi. Spencer memperkenalkan konsep ANALOGI ORGANIK, yaitu memandang masyarakat laksana organisme tubuh hidup; jika satu organ terganggu, organ lain akan merespons. Spencer juga mencetuskan prinsip "Survival of the Fittest", di mana masyarakat berevolusi dari bentuk sederhana yang homogen menuju bentuk yang semakin kompleks dan heterogen.',
      ],
      summaryClue: 'Pos 3: Durkheim (Fakta Sosial, Solidaritas Mekanik & Organik), Marx (Konflik Kelas Borjuis vs Proletar, Alienasi), Weber (Metode Verstehen, Tindakan Sosial, Etika Protestan), dan Spencer (Evolusi Sosial & Analogi Organik).',
      glossary: [
        { word: 'Fakta Sosial', meaning: 'Cara bertindak, berpikir, dan merasa yang bersifat eksternal, koersif (memaksa), dan umum dalam masyarakat (Durkheim)' },
        { word: 'Solidaritas Organik', meaning: 'Keterikatan sosial masyarakat modern yang didasarkan pada pembagian kerja dan saling ketergantungan fungsional' },
        { word: 'Verstehen', meaning: 'Metode interpretatif untuk memahami motif dan makna subjektif di balik tindakan seseorang (Weber)' },
        { word: 'Alienasi', meaning: 'Kondisi keterasingan manusia/buruh dari pekerjaan, hasil produksi, dan sesamanya dalam sistem kapitalisme (Marx)' },
        { word: 'Analogi Organik', meaning: 'Pandangan yang menyamakan struktur masyarakat dengan organ-organ dalam makhluk hidup (Spencer)' },
      ],
    },
  },

  // --- POS 4: CIRI-CIRI & HAKIKAT SOSIOLOGI SEBAGAI ILMU ---
  {
    id: 'pos_4',
    code: 'POS 4',
    name: 'Laboratorium IPS & Riset',
    qrCode: 'SOSIOLOGI-POS-4',
    hint: '🔬 Kunjungi Laboratorium IPS / Komputer. Pindai QR Code untuk membongkar 4 ciri utama sosiologi: Empiris, Teoretis, Kumulatif, dan Non-Etis!',
    isFinal: false,
    isActive: true,
    iconName: 'Microscope',
    story: {
      chapterNumber: 4,
      title: 'Pos 4: Ciri-Ciri & Hakikat Sosiologi sebagai Ilmu',
      subtitle: 'Memahami empat karakteristik ilmiah sosiologi dan perbedaannya dengan ilmu sosial lain',
      imageCaption: 'Empat Karakteristik Utama Sosiologi sebagai Ilmu Pengetahuan: Empiris (berdasarkan fakta lapangan), Teoretis (abstraksi logis), Kumulatif (akumulasi teori yang diperluas), dan Non-Etis (tidak menghakimi baik-buruk).',
      visualHighlights: [
        '🔍 EMPIRIS: Didasarkan pada observasi realitas dan akal sehat, bukan prasangka atau spekulasi liar',
        '📊 TEORETIS: Menyusun abstraksi dan kesimpulan logis yang menjelaskan hubungan sebab-akibat',
        '📚 KUMULATIF: Teori sosiologi dibangun atas dasar teori yang sudah ada, diperbaiki dan diperhalus',
        '⚖️ NON-ETIS: Tidak mempersoalkan baik atau buruknya suatu fakta, melainkan menjelaskan fakta secara ilmiah',
      ],
      paragraphs: [
        'Sebagai salah satu rumpun ilmu sosial (social sciences), sosiologi memiliki kedudukan yang unik dan memiliki metode penelitian ilmiah yang ketat. Sosiologi bukan sekadar kumpulan nasihat moral atau obrolan santai di warung kopi. Agar suatu pengetahuan dapat diakui sebagai sosiologi yang ilmiah, sosiologi wajib memenuhi empat ciri utama.',
        'Ciri pertama adalah EMPIRIS. Sosiologi didasarkan pada hasil pengamatan langsung (observasi) dan penalaran akal sehat terhadap kenyataan yang benar-benar terjadi di masyarakat. Data yang diperoleh bukan hasil khayalan, tebakan spekulatif, atau ramalan mistis, melainkan data faktual yang dapat diuji dan diverifikasi kebenarannya oleh peneliti lain.',
        'Ciri kedua adalah TEORETIS. Sosiologi selalu berusaha menyusun abstraksi dari data-data observasi yang telah dikumpulkan di lapangan. Abstraksi ini adalah kerangka konseptual logis yang menghubungkan berbagai fakta sehingga membentuk pernyataan sebab-akibat (kausalitas). Dengan menyusun teori, sosiolog tidak hanya sekadar mendeskripsikan apa yang terjadi, tetapi mampu menjelaskan mengapa dan bagaimana fenomena sosial itu terjadi.',
        'Ciri ketiga adalah KUMULATIF. Teori-teori dalam sosiologi tidak berdiri sendiri secara terisolasi atau muncul tiba-tiba dari nol. Teori sosiologi dibangun, disusun, dan dikembangkan atas dasar teori-teori terdahulu yang sudah ada. Sosiolog masa kini menguji kembali teori-teori klasik, lalu memperluas, menyempurnakan, merevisi, dan memperhalus teori tersebut agar relevan dengan perkembangan zaman kontemporer.',
        'Ciri keempat yang sangat krusial adalah NON-ETIS. Sosiologi bertugas mengkaji fenomena sosial apa adanya (das sein), bukan menetapkan apa yang seharusnya terjadi menurut norma moral tertentu (das sollen). Sosiolog tidak bertindak sebagai hakim moral yang menilai apakah suatu tradisi, perilaku tawuran, atau gaya hidup remaja itu "baik", "buruk", "berdosa", atau "terpuji". Fokus utama sosiolog adalah membedah secara objektif: apa faktor pemicunya, bagaimana strukturnya, dan apa dampaknya bagi keteraturan sosial.',
        'Mengenai hakikatnya, sosiologi adalah ilmu sosial (bukan ilmu alam), ilmu kategoris (mengkaji apa yang terjadi, bukan apa yang semestinya), ilmu murni (pure science) sekaligus ilmu terapan (applied science), ilmu abstrak (bukan konkret fisik), serta ilmu rasional dan empiris yang menghasilkan pengertian-pengertian umum.',
      ],
      summaryClue: 'Pos 4: 4 Karakteristik ilmiah sosiologi: Empiris (fakta observasi lapangan), Teoretis (abstraksi sebab-akibat), Kumulatif (perbaikan/perluasan teori lama), dan Non-Etis (menjelaskan fakta secara ilmiah tanpa menilai baik/buruk).',
      glossary: [
        { word: 'Empiris', meaning: 'Berdasarkan pengamatan dan bukti nyata di lapangan serta penalaran akal sehat, bukan spekulasi' },
        { word: 'Teoretis', meaning: 'Penyusunan abstraksi logis yang menjelaskan hubungan sebab-akibat dari hasil observasi' },
        { word: 'Kumulatif', meaning: 'Pengembangan teori sosiologi yang saling menyambung dan memperkaya teori-teori terdahulu' },
        { word: 'Non-Etis', meaning: 'Sikap ilmiah yang tidak menghakimi baik-buruknya suatu fakta sosial, melainkan menjelaskan fakta tersebut secara objektif' },
        { word: 'Das Sein vs Das Sollen', meaning: 'Das sein adalah kenyataan apa adanya; das sollen adalah apa yang seharusnya/ideal menurut nilai dan norma' },
      ],
    },
  },

  // --- POS 5: SEJARAH PERKEMBANGAN SOSIOLOGI DI INDONESIA (BABAK FINAL) ---
  {
    id: 'pos_5',
    code: 'POS 5 (FINAL)',
    name: 'Ruang Budaya & Kebangsaan',
    qrCode: 'SOSIOLOGI-POS-5',
    hint: '🇮🇩 Menuju Pos Babak Final di Ruang Kebangsaan / Balai Siswa! Temukan rahasia jejak sejarah Sosiologi di Nusantara dari ajaran Ki Hajar Dewantara hingga pemikiran Selo Soemardjan!',
    isFinal: true,
    isActive: true,
    iconName: 'Award',
    story: {
      chapterNumber: 5,
      title: 'Pos 5: Jejak Sosiologi di Bumi Nusantara',
      subtitle: 'Dari ajaran kearifan lokal, perjuangan kemerdekaan, hingga lahirnya sosiologi Indonesia modern',
      imageCaption: 'Perkembangan Sosiologi di Indonesia: Dari naskah Serat Wulangreh, konsep perguruan Taman Siswa oleh Ki Hajar Dewantara, kuliah pertama Prof. Soenario Kolopaking, hingga Bapak Sosiologi Indonesia Prof. Selo Soemardjan.',
      visualHighlights: [
        '📜 Masa Pra-Kemerdekaan: Ajaran etika sosial dalam Serat Wulangreh karya Sri Paduka Mangkunegara IV',
        '🏫 Ki Hajar Dewantara: Konsep kepemimpinan & kekeluargaan dalam sistem pendidikan Taman Siswa',
        '🎓 Kuliah Pertama (UGM): Diberikan dalam Bahasa Indonesia oleh Prof. Soenario Kolopaking',
        '🌟 Selo Soemardjan: Bapak Sosiologi Indonesia dengan karya Social Changes in Jogjakarta (1962)',
      ],
      paragraphs: [
        'Meskipun sosiologi lahir dan mekar di benua Eropa, benih-benih pemikiran mengenai keteraturan sosial, etika hubungan antarmasyarakat, dan dinamika kebudayaan sesungguhnya telah mengakar kuat dalam peradaban Nusantara jauh sebelum masa kolonial modern.',
        'Pada masa kerajaan tradisional Jawa, Sri Paduka Mangkunegara IV dari Surakarta telah menulis karya sastra filosofis "Serat Wulangreh". Naskah ini mengajarkan tata hubungan sosial antargolongan, etika bergaul antara rakyat jelata dengan para pemimpin, serta bagaimana memelihara keselarasan batin dan harmoni sosial di masyarakat.',
        'Memasuki era kebangkitan nasional pada awal abad ke-20, tokoh pendidikan nasional Ki Hajar Dewantara meletakkan dasar-dasar sosiologi pendidikan dan kepemimpinan melalui Perguruan Taman Siswa (berdiri 1922). Ki Hajar merumuskan konsep kepemimpinan sosial yang melegenda: "Ing Ngarso Sung Tulodo" (di depan memberi teladan), "Ing Madyo Mangun Karso" (di tengah membangkitkan semangat), dan "Tut Wuri Handayani" (di belakang memberi dorongan), yang sarat dengan nilai kekeluargaan dan demokrasi kerakyatan khas Indonesia.',
        'Sosiologi formal pertama kali diajarkan di Indonesia pada zaman penjajahan Belanda di Rechtshogeschool (Sekolah Tinggi Hukum) di Batavia (Jakarta) sekitar tahun 1924, namun hanya sebagai mata kuliah penunjang ilmu hukum dan menggunakan buku rujukan bahasa Belanda. Perkuliahan sempat terhenti pada masa pendudukan Jepang (1942–1945).',
        'Titik balik bersejarah terjadi setelah proklamasi kemerdekaan Republik Indonesia. Pada tahun 1948, di Akademi Ilmu Politik Yogyakarta (yang kelak dilebur menjadi Universitas Gadjah Mada), perkuliahan sosiologi untuk pertama kalinya diberikan secara resmi menggunakan BAHASA INDONESIA oleh Prof. Soenario Kolopaking.',
        'Tokoh yang kemudian dinobatkan sebagai "BAPAK SOSIOLOGI INDONESIA" adalah Prof. Dr. Selo Soemardjan (1915–2003). Disertasi doktoral beliau di Cornell University, Amerika Serikat, yang berjudul "Social Changes in Jogjakarta" (1962) menjadi karya sosiologi empiris paling berpengaruh yang membedah bagaimana masyarakat feodal keraton Yogyakarta bertransformasi secara damai menjadi masyarakat republik yang modern dan demokratis. Bersama Soelaeman Soemardi, Selo Soemardjan menerbitkan buku "Setangkai Bunga Sosiologi" (1964) yang menjadi buku pegangan utama mahasiswa sosiologi di seluruh Indonesia.',
      ],
      summaryClue: 'Pos 5: Sosiologi di Indonesia berakar dari kearifan lokal (Serat Wulangreh, Ki Hajar Dewantara), kuliah pertama berbahasa Indonesia oleh Prof. Soenario Kolopaking di UGM, serta ketokohan Prof. Selo Soemardjan (Bapak Sosiologi Indonesia).',
      glossary: [
        { word: 'Serat Wulangreh', meaning: 'Karya sastra Mangkunegara IV yang berisi ajaran etika hubungan sosial dan tata krama kemasyarakatan' },
        { word: 'Taman Siswa', meaning: 'Lembaga pendidikan rintisan Ki Hajar Dewantara yang mengintegrasikan nilai sosiologis kepemimpinan dan kekeluargaan' },
        { word: 'Prof. Soenario Kolopaking', meaning: 'Akademisi yang pertama kali mengajar sosiologi dalam Bahasa Indonesia di Yogyakarta (1948)' },
        { word: 'Prof. Dr. Selo Soemardjan', meaning: 'Bapak Sosiologi Indonesia, penulis buku monumental Social Changes in Jogjakarta' },
        { word: 'Setangkai Bunga Sosiologi', meaning: 'Buku teks kompilasi sosiologi pertama berbahasa Indonesia karya Selo Soemardjan dan Soelaeman Soemardi' },
      ],
    },
  },
];

export const SOCIOLOGY_QUESTIONS: Question[] = [
  // =========================================================================
  // --- POS 1: 5 SOAL REVOLUSI PRANCIS, REVOLUSI INDUSTRI, ABAD PENCERAHAN ---
  // =========================================================================
  {
    id: 'soc_q1_1',
    locationId: 'pos_1',
    question: 'Faktor pendorong utama yang melatarbelakangi lahirnya ilmu sosiologi di Eropa pada abad ke-18 dan ke-19 adalah...',
    type: 'pilihan_ganda',
    literacyCategory: 'ide_pokok',
    difficulty: 'mudah',
    targetParagraph: 1,
    options: [
      'Guncangan sosial dan perubahan drastis akibat Revolusi Prancis dan Revolusi Industri',
      'Perang salib yang membuka jalur perdagangan antara Eropa dan Asia Barat',
      'Ditemukannya benua Amerika oleh para penjelajah samudra bangsa Spanyol',
      'Keberhasilan bangsa Eropa dalam mengembangkan teknologi penjelajahan luar angkasa',
      'Mundurnya kekaisaran Romawi kuno akibat serangan suku-suku barbar',
    ],
    correctAnswer: 'Guncangan sosial dan perubahan drastis akibat Revolusi Prancis dan Revolusi Industri',
    explanation: 'Paragraf ke-1 menjelaskan bahwa sosiologi lahir dari guncangan sosial dan transformasi besar di Eropa yang dipicu oleh dua peristiwa utama: Revolusi Prancis (1789) dan Revolusi Industri di Inggris.',
  },
  {
    id: 'soc_q1_2',
    locationId: 'pos_1',
    question: 'Dampak negatif dari Revolusi Industri di Inggris yang menjadi perhatian utama para perintis sosiologi adalah...',
    type: 'pilihan_ganda',
    literacyCategory: 'sebab_akibat',
    difficulty: 'sedang',
    targetParagraph: 4,
    options: [
      'Eksploitasi kaum buruh, jam kerja tidak manusiawi, dan munculnya permukiman kumuh (slum)',
      'Punahnya sistem pertanian pedesaan dan beralihnya manusia menjadi kaum perambah hutan',
      'Hilangnya minat masyarakat Eropa terhadap perkembangan ilmu pengetahuan alam',
      'Turunnya produksi tekstil akibat penolakan buruh terhadap mesin tenun',
      'Meningkatnya angka harapan hidup kaum pekerja di kawasan pertambangan',
    ],
    correctAnswer: 'Eksploitasi kaum buruh, jam kerja tidak manusiawi, dan munculnya permukiman kumuh (slum)',
    explanation: 'Paragraf ke-4 menerangkan bahwa industrialisasi melahirkan krisis kemanusiaan baru: pemerasan tenaga kerja buruh (jam kerja hingga 16 jam), upah rendah, permukiman kumuh kotor, dan kesenjangan sosial ekstrem.',
  },
  {
    id: 'soc_q1_3',
    locationId: 'pos_1',
    question: 'Mengapa Revolusi Prancis tahun 1789 mendorong para intelektual merasa mendesak untuk menciptakan ilmu masyarakat yang baru?',
    type: 'pilihan_ganda',
    literacyCategory: 'menemukan_informasi',
    difficulty: 'sedang',
    targetParagraph: 2,
    options: [
      'Karena runtuhnya monarki absolut menimbulkan anarki dan kekacauan tatanan sosial yang membutuhkan cara ilmiah untuk memulihkan ketertiban',
      'Karena para bangsawan ingin menciptakan sistem pemerintahan diktator militer baru',
      'Karena sistem monarki terbukti merupakan tatanan sosial paling ideal di dunia',
      'Karena kaum agamawan ingin memperkuat kembali dominasi gereja atas ilmu pengetahuan',
      'Karena semboyan kebebasan dan persaudaraan berhasil menyelesaikan seluruh masalah kemiskinan',
    ],
    correctAnswer: 'Karena runtuhnya monarki absolut menimbulkan anarki dan kekacauan tatanan sosial yang membutuhkan cara ilmiah untuk memulihkan ketertiban',
    explanation: 'Paragraf ke-2 menjelaskan bahwa runtuhnya tatanan feodal monarki Prancis diikuti kekacauan sosial dan anarki masa Teror. Pemikir Eropa menyadari perlunya ilmu baru untuk membangun kembali ketertiban sosial (social order).',
  },
  {
    id: 'soc_q1_4',
    locationId: 'pos_1',
    question: 'Pengaruh utama dari zaman Abad Pencerahan (Aufklärung) terhadap kelahiran sosiologi adalah...',
    type: 'pilihan_ganda',
    literacyCategory: 'makna_kosakata',
    difficulty: 'sulit',
    targetParagraph: 5,
    options: [
      'Munculnya keyakinan bahwa gejala dan perilaku masyarakat dapat dikaji secara rasional dan ilmiah sebagaimana ilmu alam',
      'Diterimanya mitos supranatural sebagai penjelasan tertinggi atas perilaku manusia',
      'Penetapan doktrin agama sebagai satu-satunya tolok ukur kebenaran sosial',
      'Penghentian seluruh metode observasi demi mempertahankan filsafat spekulatif kuno',
      'Penolakan terhadap penggunaan akal budi manusia dalam meneliti gejala sosial',
    ],
    correctAnswer: 'Munculnya keyakinan bahwa gejala dan perilaku masyarakat dapat dikaji secara rasional dan ilmiah sebagaimana ilmu alam',
    explanation: 'Paragraf ke-5 memaparkan bahwa Abad Pencerahan menanamkan keyakinan bahwa akal budi dan metode ilmiah mampu menjelaskan perilaku masyarakat secara objektif sebagaimana hukum-hukum alam semesta.',
  },
  {
    id: 'soc_q1_5',
    locationId: 'pos_1',
    question: 'Perhatikan fenomena berikut: perpindahan jutaan warga desa ke kota-kota pabrik secara massal tanpa kesiapan fasilitas perumahan. Istilah sosiologis yang tepat untuk fenomena ini adalah...',
    type: 'pilihan_ganda',
    literacyCategory: 'makna_kosakata',
    difficulty: 'mudah',
    targetParagraph: 3,
    options: [
      'Urbanisasi',
      'Transmigrasi',
      'Emigrasi',
      'Remigrasi',
      'Evakuasi',
    ],
    correctAnswer: 'Urbanisasi',
    explanation: 'Paragraf ke-3 dan glosarium menyebutkan bahwa urbanisasi adalah perpindahan penduduk secara besar-besaran dari pedesaan ke pusat-pusat kota industri.',
  },

  // =========================================================================
  // --- POS 2: 5 SOAL AUGUSTE COMTE, POSITIVISME, & HUKUM TIGA TAHAP ---
  // =========================================================================
  {
    id: 'soc_q2_1',
    locationId: 'pos_2',
    question: 'Secara etimologis, kata "Sosiologi" berasal dari gabungan dua bahasa kuno, yaitu "socius" dan "logos", yang masing-masing bermakna...',
    type: 'pilihan_ganda',
    literacyCategory: 'makna_kosakata',
    difficulty: 'mudah',
    targetParagraph: 3,
    options: [
      'Socius (Latin) berarti kawan/masyarakat, dan Logos (Yunani) berarti ilmu/pengetahuan',
      'Socius (Yunani) berarti individu, dan Logos (Latin) berarti tatanan hukum',
      'Socius (Arab) berarti ikatan persaudaraan, dan Logos (Romawi) berarti ucapan',
      'Socius (Inggris) berarti sosialisme, dan Logos (Jerman) berarti pertentangan',
      'Socius (Prancis) berarti kebebasan, dan Logos (Belanda) berarti peraturan',
    ],
    correctAnswer: 'Socius (Latin) berarti kawan/masyarakat, dan Logos (Yunani) berarti ilmu/pengetahuan',
    explanation: 'Paragraf ke-3 dan glosarium menjelaskan bahwa sosiologi berasal dari kata Latin "socius" (kawan/masyarakat) dan kata Yunani "logos" (ilmu/kata/pengetahuan).',
  },
  {
    id: 'soc_q2_2',
    locationId: 'pos_2',
    question: 'Sebelum menciptakan istilah sosiologi dalam bukunya "Cours de Philosophie Positive", Auguste Comte sempat menamai ilmu baru ini dengan sebutan...',
    type: 'pilihan_ganda',
    literacyCategory: 'menemukan_informasi',
    difficulty: 'sedang',
    targetParagraph: 2,
    options: [
      'Fisika Sosial (Physique Sociale)',
      'Biologi Masyarakat (Social Biology)',
      'Matematika Perilaku (Behavioral Mathematics)',
      'Astronomi Peradaban (Civic Astronomy)',
      'Mekanika Budaya (Cultural Mechanics)',
    ],
    correctAnswer: 'Fisika Sosial (Physique Sociale)',
    explanation: 'Paragraf ke-2 menjelaskan bahwa Comte awalnya menamakan ilmu ini "Fisika Sosial" (physique sociale) karena ingin meneliti masyarakat dengan kepastian metode ilmu fisika.',
  },
  {
    id: 'soc_q2_3',
    locationId: 'pos_2',
    question: 'Masyarakat suatu desa meyakini bahwa musibah banjir bandang terjadi semata-mata karena murka roh penunggu bukit gaib yang menuntut persembahan sesajen. Berdasarkan Hukum Tiga Tahap Auguste Comte, pola pikir masyarakat tersebut berada pada tahap...',
    type: 'pilihan_ganda',
    literacyCategory: 'evaluasi_amanat',
    difficulty: 'sedang',
    targetParagraph: 4,
    options: [
      'Tahap Teologis',
      'Tahap Metafisik',
      'Tahap Positif',
      'Tahap Kritis',
      'Tahap Pascamodern',
    ],
    correctAnswer: 'Tahap Teologis',
    explanation: 'Paragraf ke-4 menerangkan bahwa pada Tahap Teologis, fenomena alam dan sosial dijelaskan dengan mengaitkannya pada kekuatan supranatural, dewa-dewa, atau roh gaib.',
  },
  {
    id: 'soc_q2_4',
    locationId: 'pos_2',
    question: 'Karakteristik utama dari Tahap Positif (Ilmiah) menurut pemikiran Auguste Comte adalah...',
    type: 'pilihan_ganda',
    literacyCategory: 'ide_pokok',
    difficulty: 'sedang',
    targetParagraph: 5,
    options: [
      'Penjelasan gejala didasarkan pada observasi empiris, eksperimen, dan penemuan hukum sebab-akibat yang teruji',
      'Pencarian kebenaran mutlak melalui pemikiran filosofis abstrak tentang kodrat alam',
      'Penerimaan kitab suci sebagai satu-satunya sumber pengamatan ilmiah',
      'Pemujaan terhadap roh nenek moyang sebagai pelindung struktur kekerabatan',
      'Pengutamaan perasaan subjektif dan emosi pribadi dalam menentukan kebenaran',
    ],
    correctAnswer: 'Penjelasan gejala didasarkan pada observasi empiris, eksperimen, dan penemuan hukum sebab-akibat yang teruji',
    explanation: 'Paragraf ke-5 menjelaskan bahwa pada tahap positif, manusia mengamati fakta empiris secara objektif dan mencari hukum sebab-akibat (kausalitas) yang mengatur gejala alam dan sosial.',
  },
  {
    id: 'soc_q2_5',
    locationId: 'pos_2',
    question: 'Comte membagi ruang lingkup sosiologi menjadi dua bagian besar: Statika Sosial dan Dinamika Sosial. Pengertian Statika Sosial yang tepat adalah...',
    type: 'pilihan_ganda',
    literacyCategory: 'makna_kosakata',
    difficulty: 'sedang',
    targetParagraph: 6,
    options: [
      'Kajian tentang struktur, keteraturan, dan keharmonisan tatanan antarbagian dalam masyarakat',
      'Kajian tentang evolusi dan perubahan peradaban manusia dari zaman primitif ke zaman modern',
      'Pergerakan penduduk antarwilayah geografis secara berkala',
      'Analisis statistik mengenai fluktuasi angka kelahiran dan kematian bayi',
      'Perubahan teknologi komunikasi yang mengubah pola perilaku remaja',
    ],
    correctAnswer: 'Kajian tentang struktur, keteraturan, dan keharmonisan tatanan antarbagian dalam masyarakat',
    explanation: 'Paragraf ke-6 dan glosarium menyatakan Statika Sosial adalah kajian mengenai struktur dan keteraturan sosial (kondisi masyarakat yang stabil), sedangkan dinamika sosial mengkaji perubahan sosial.',
  },

  // =========================================================================
  // --- POS 3: 5 SOAL EMPAT PILAR TOKOH KLASIK (DURKHEIM, MARX, WEBER, SPENCER) ---
  // =========================================================================
  {
    id: 'soc_q3_1',
    locationId: 'pos_3',
    question: 'Émile Durkheim menegaskan bahwa objek kajian utama sosiologi adalah "Fakta Sosial". Tiga ciri khas fakta sosial menurut Durkheim adalah...',
    type: 'pilihan_ganda',
    literacyCategory: 'menemukan_informasi',
    difficulty: 'sedang',
    targetParagraph: 2,
    options: [
      'Bersifat eksternal (di luar individu), koersif (memaksa), dan general (berlaku umum)',
      'Bersifat subjektif, bebas nilai, dan berorientasi masa depan',
      'Berasal dari kesadaran pribadi, sukarela, dan terbatas pada keluarga inti',
      'Bersifat biologis, instingtif, dan tidak terikat aturan kelompok',
      'Didasarkan pada prasangka, ramalan, dan keyakinan spiritual',
    ],
    correctAnswer: 'Bersifat eksternal (di luar individu), koersif (memaksa), dan general (berlaku umum)',
    explanation: 'Paragraf ke-2 menjelaskan bahwa fakta sosial menurut Durkheim berada di luar diri individu (eksternal), memiliki daya paksa mengendalikan individu (koersif), serta berlaku umum (general).',
  },
  {
    id: 'soc_q3_2',
    locationId: 'pos_3',
    question: 'Di sebuah desa tradisional pedalaman, seluruh warga bergotong-royong membangun balai desa secara sukarela karena diikat oleh kesadaran bersama dan adat istiadat leluhur yang sama. Tipe solidaritas sosial ini menurut Émile Durkheim adalah...',
    type: 'pilihan_ganda',
    literacyCategory: 'sebab_akibat',
    difficulty: 'sedang',
    targetParagraph: 2,
    options: [
      'Solidaritas Mekanik',
      'Solidaritas Organik',
      'Solidaritas Individual',
      'Solidaritas Kapitalistik',
      'Solidaritas Fungsionalis',
    ],
    correctAnswer: 'Solidaritas Mekanik',
    explanation: 'Paragraf ke-2 menerangkan bahwa Solidaritas Mekanik mencirikan masyarakat tradisional di mana warganya diikat oleh kesadaran kolektif seragam dan pembagian kerja yang masih sederhana.',
  },
  {
    id: 'soc_q3_3',
    locationId: 'pos_3',
    question: 'Menurut pandangan Karl Marx, kekuatan penggerak utama (motor) dari seluruh sejarah perubahan peradaban manusia adalah...',
    type: 'pilihan_ganda',
    literacyCategory: 'ide_pokok',
    difficulty: 'sedang',
    targetParagraph: 3,
    options: [
      'Pertentangan dan konflik kepentingan antarkelas sosial dalam sistem ekonomi',
      'Penyebaran gagasan filosofis dan nilai-nilai spiritual keagamaan',
      'Evolusi biologis genetik antar-ras manusia di berbagai benua',
      'Penaklukan militer oleh para raja dan kaisar berkarisma',
      'Bencana alam global yang memusnahkan peradaban lama',
    ],
    correctAnswer: 'Pertentangan dan konflik kepentingan antarkelas sosial dalam sistem ekonomi',
    explanation: 'Paragraf ke-3 memaparkan bahwa bagi Karl Marx, motor penggerak sejarah adalah struktur ekonomi dan konflik pertentangan antara kelas pemilik modal (borjuis) dan buruh (proletar).',
  },
  {
    id: 'soc_q3_4',
    locationId: 'pos_3',
    question: 'Seorang siswa giat belajar hingga larut malam dan mengikuti bimbingan intensif demi mencapai tujuannya lolos seleksi masuk perguruan tinggi negeri impiannya. Berdasarkan teori Max Weber, tindakan siswa tersebut tergolong dalam tipe...',
    type: 'pilihan_ganda',
    literacyCategory: 'evaluasi_amanat',
    difficulty: 'sulit',
    targetParagraph: 4,
    options: [
      'Tindakan Rasional Instrumental (Zweckrational)',
      'Tindakan Rasional Berorientasi Nilai (Wertrational)',
      'Tindakan Tradisional',
      'Tindakan Afektif',
      'Tindakan Irasional',
    ],
    correctAnswer: 'Tindakan Rasional Instrumental (Zweckrational)',
    explanation: 'Paragraf ke-4 menerangkan bahwa Tindakan Rasional Instrumental adalah tindakan yang memperhitungkan kaitan logis dan efisiensi antara tujuan yang ingin dicapai dengan alat/sarana yang digunakan.',
  },
  {
    id: 'soc_q3_5',
    locationId: 'pos_3',
    question: 'Herbert Spencer mengibaratkan masyarakat seperti organisme tubuh manusia; jika salah satu lembaga (seperti ekonomi atau pendidikan) mengalami gangguan, maka lembaga lainnya akan terpengaruh. Konsep ini dikenal sebagai...',
    type: 'pilihan_ganda',
    literacyCategory: 'makna_kosakata',
    difficulty: 'sedang',
    targetParagraph: 5,
    options: [
      'Analogi Organik',
      'Materialisme Historis',
      'Verstehen Interpretatif',
      'Alienasi Sosial',
      'Etika Protestan',
    ],
    correctAnswer: 'Analogi Organik',
    explanation: 'Paragraf ke-5 dan glosarium menyatakan Herbert Spencer memperkenalkan "Analogi Organik", yaitu memandang struktur masyarakat menyerupai organ-organ tubuh makhluk hidup yang saling bertautan.',
  },

  // =========================================================================
  // --- POS 4: 5 SOAL CIRI-CIRI & HAKIKAT SOSIOLOGI SEBAGAI ILMU ---
  // =========================================================================
  {
    id: 'soc_q4_1',
    locationId: 'pos_4',
    question: 'Seorang peneliti sosiologi melakukan pengamatan langsung selama tiga bulan terhadap pola pergaulan kelompok remaja di perkotaan untuk menguji hipotesisnya. Kegiatan ini mencerminkan ciri sosiologi, yaitu...',
    type: 'pilihan_ganda',
    literacyCategory: 'menemukan_informasi',
    difficulty: 'mudah',
    targetParagraph: 2,
    options: [
      'Empiris',
      'Teoretis',
      'Kumulatif',
      'Non-Etis',
      'Normatif',
    ],
    correctAnswer: 'Empiris',
    explanation: 'Paragraf ke-2 menjelaskan bahwa ciri Empiris berarti sosiologi didasarkan pada observasi lapangan terhadap fakta nyata dan penalaran akal sehat, bukan dugaan spekulatif.',
  },
  {
    id: 'soc_q4_2',
    locationId: 'pos_4',
    question: 'Sosiologi bertugas mengkaji fenomena kemiskinan di kota metropolitan untuk mengungkap penyebab strukturalnya, tanpa menghakimi apakah kaum miskin tersebut pemalas atau kelompok yang jahat. Karakteristik ini menunjukkan bahwa sosiologi bersifat...',
    type: 'pilihan_ganda',
    literacyCategory: 'ide_pokok',
    difficulty: 'sedang',
    targetParagraph: 5,
    options: [
      'Non-Etis',
      'Kumulatif',
      'Teoretis',
      'Empiris',
      'Spekulatif',
    ],
    correctAnswer: 'Non-Etis',
    explanation: 'Paragraf ke-5 menegaskan bahwa Non-Etis berarti sosiologi tidak menilai baik atau buruknya suatu fakta sosial dari sudut pandang moral, melainkan menjelaskan fakta tersebut secara objektif dan mendalam.',
  },
  {
    id: 'soc_q4_3',
    locationId: 'pos_4',
    question: 'Teori globalisasi kontemporer dirumuskan oleh sosiolog modern dengan memperluas dan menyempurnakan teori interaksi sosial klasik yang telah dicetuskan para ahli terdahulu. Hal ini membuktikan bahwa sosiologi memiliki sifat...',
    type: 'pilihan_ganda',
    literacyCategory: 'sebab_akibat',
    difficulty: 'sedang',
    targetParagraph: 4,
    options: [
      'Kumulatif',
      'Teoretis',
      'Empiris',
      'Non-Etis',
      'Subjektif',
    ],
    correctAnswer: 'Kumulatif',
    explanation: 'Paragraf ke-4 menjelaskan bahwa Kumulatif berarti teori sosiologi dibangun di atas fondasi teori-teori yang sudah ada, dengan cara memperbaiki, memperluas, dan memperhalusnya sesuai perkembangan zaman.',
  },
  {
    id: 'soc_q4_4',
    locationId: 'pos_4',
    question: 'Setelah mengumpulkan data lapangan tentang kenakalan remaja, peneliti mengaitkan temuan tersebut dengan teori disorganisasi keluarga untuk menarik kesimpulan logis sebab-akibat. Proses ini merupakan wujud dari ciri sosiologi yang bersifat...',
    type: 'pilihan_ganda',
    literacyCategory: 'makna_kosakata',
    difficulty: 'sedang',
    targetParagraph: 3,
    options: [
      'Teoretis',
      'Empiris',
      'Kumulatif',
      'Non-Etis',
      'Dogmatis',
    ],
    correctAnswer: 'Teoretis',
    explanation: 'Paragraf ke-3 menerangkan bahwa Teoretis bermakna sosiologi berusaha menyusun abstraksi dari data hasil observasi lapangan guna menjelaskan hubungan logis sebab-akibat.',
  },
  {
    id: 'soc_q4_5',
    locationId: 'pos_4',
    question: 'Pernyataan berikut yang BUKAN merupakan hakikat sosiologi sebagai ilmu pengetahuan adalah...',
    type: 'pilihan_ganda',
    literacyCategory: 'evaluasi_amanat',
    difficulty: 'sulit',
    targetParagraph: 6,
    options: [
      'Sosiologi adalah ilmu normatif yang menetapkan apa yang seharusnya dilakukan manusia sesuai doktrin hukum agama',
      'Sosiologi merupakan rumpun ilmu sosial, bukan rumpun ilmu alam atau kerohanian murni',
      'Sosiologi adalah ilmu kategoris yang membatasi diri pada apa yang terjadi (das sein)',
      'Sosiologi merupakan ilmu murni (pure science) sekaligus dapat menjadi ilmu terapan (applied science)',
      'Sosiologi adalah ilmu yang bersifat rasional dan menghasilkan pola-pola pengertian umum',
    ],
    correctAnswer: 'Sosiologi adalah ilmu normatif yang menetapkan apa yang seharusnya dilakukan manusia sesuai doktrin hukum agama',
    explanation: 'Paragraf ke-6 menjelaskan sosiologi adalah ilmu kategoris (bukan normatif), yang mengkaji kenyataan apa adanya (das sein), bukan menetapkan apa yang semestinya menurut ajaran normatif.',
  },

  // =========================================================================
  // --- POS 5: 5 SOAL PERKEMBANGAN SOSIOLOGI DI INDONESIA ---
  // =========================================================================
  {
    id: 'soc_q5_1',
    locationId: 'pos_5',
    question: 'Tokoh besar yang secara luas diakui dan dinobatkan sebagai "Bapak Sosiologi Indonesia" adalah...',
    type: 'pilihan_ganda',
    literacyCategory: 'menemukan_informasi',
    difficulty: 'mudah',
    targetParagraph: 6,
    options: [
      'Prof. Dr. Selo Soemardjan',
      'Prof. Soenario Kolopaking',
      'Ki Hajar Dewantara',
      'Sri Paduka Mangkunegara IV',
      'Prof. Dr. Koentjaraningrat',
    ],
    correctAnswer: 'Prof. Dr. Selo Soemardjan',
    explanation: 'Paragraf ke-6 menyebutkan bahwa tokoh yang dinobatkan sebagai Bapak Sosiologi Indonesia adalah Prof. Dr. Selo Soemardjan, penulis disertasi "Social Changes in Jogjakarta".',
  },
  {
    id: 'soc_q5_2',
    locationId: 'pos_5',
    question: 'Buku teks kompilasi sosiologi pertama yang diterbitkan dalam bahasa Indonesia pada tahun 1964 dan menjadi rujukan utama civitas akademika adalah...',
    type: 'pilihan_ganda',
    literacyCategory: 'menemukan_informasi',
    difficulty: 'sedang',
    targetParagraph: 6,
    options: [
      'Setangkai Bunga Sosiologi (Selo Soemardjan & Soelaeman Soemardi)',
      'Sosiologi Suatu Pengantar (Soerjono Soekanto)',
      'Social Changes in Jogjakarta (Selo Soemardjan)',
      'Manusia dan Kebudayaan di Indonesia (Koentjaraningrat)',
      'Pergolakan Pemikiran Sosiologi (Hassan Shadily)',
    ],
    correctAnswer: 'Setangkai Bunga Sosiologi (Selo Soemardjan & Soelaeman Soemardi)',
    explanation: 'Paragraf ke-6 menjelaskan bahwa buku sosiologi pertama berbahasa Indonesia berjudul "Setangkai Bunga Sosiologi" (1964) disusun oleh Selo Soemardjan dan Soelaeman Soemardi.',
  },
  {
    id: 'soc_q5_3',
    locationId: 'pos_5',
    question: 'Perkuliahan sosiologi pertama kali diajarkan secara resmi menggunakan BAHASA INDONESIA pascakemerdekaan (tahun 1948) oleh...',
    type: 'pilihan_ganda',
    literacyCategory: 'menemukan_informasi',
    difficulty: 'sedang',
    targetParagraph: 5,
    options: [
      'Prof. Soenario Kolopaking di Akademi Ilmu Politik Yogyakarta (UGM)',
      'Prof. Selo Soemardjan di Universitas Indonesia',
      'Ki Hajar Dewantara di Perguruan Taman Siswa Yogyakarta',
      'Prof. Soepomo di Rechtshogeschool Batavia',
      'Mohammad Hatta di Sekolah Tinggi Islam Yogyakarta',
    ],
    correctAnswer: 'Prof. Soenario Kolopaking di Akademi Ilmu Politik Yogyakarta (UGM)',
    explanation: 'Paragraf ke-5 menjelaskan bahwa kuliah sosiologi berbahasa Indonesia pertama kali diberikan tahun 1948 oleh Prof. Soenario Kolopaking di Akademi Ilmu Politik Yogyakarta (cikal bakal UGM).',
  },
  {
    id: 'soc_q5_4',
    locationId: 'pos_5',
    question: 'Konsep kepemimpinan khas Indonesia "Ing Ngarso Sung Tulodo, Ing Madyo Mangun Karso, Tut Wuri Handayani" yang sarat muatan sosiologis kekeluargaan dan demokrasi dirumuskan oleh...',
    type: 'pilihan_ganda',
    literacyCategory: 'ide_pokok',
    difficulty: 'mudah',
    targetParagraph: 3,
    options: [
      'Ki Hajar Dewantara',
      'Sri Paduka Mangkunegara IV',
      'Selo Soemardjan',
      'Soekarno',
      'Tan Malaka',
    ],
    correctAnswer: 'Ki Hajar Dewantara',
    explanation: 'Paragraf ke-3 memaparkan bahwa Ki Hajar Dewantara meletakkan dasar kepemimpinan dan pendidikan berbasis kemasyarakatan di Perguruan Taman Siswa dengan trilogi kepemimpinan tersebut.',
  },
  {
    id: 'soc_q5_5',
    locationId: 'pos_5',
    question: 'Sebelum masa kemerdekaan, karya sastra tradisional Surakarta yang telah memuat ajaran sosiologis mengenai tata pergaulan antargolongan masyarakat dan harmoni sosial adalah...',
    type: 'pilihan_ganda',
    literacyCategory: 'makna_kosakata',
    difficulty: 'sedang',
    targetParagraph: 2,
    options: [
      'Serat Wulangreh karya Sri Paduka Mangkunegara IV',
      'Kitab Negarakertagama karya Mpu Prapanca',
      'Kitab Sutasoma karya Mpu Tantular',
      'Babad Tanah Jawi karya para Pujangga Mataram',
      'Serat Centhini karya Pakubuwana V',
    ],
    correctAnswer: 'Serat Wulangreh karya Sri Paduka Mangkunegara IV',
    explanation: 'Paragraf ke-2 menjelaskan bahwa karya "Serat Wulangreh" gubahan Sri Paduka Mangkunegara IV memuat etika hubungan sosial, tata pergaulan rakyat dengan pemimpin, dan keselarasan sosial.',
  },
];

export const SOCIOLOGY_ESSAY_QUESTIONS: SociologyEssayQuestion[] = [
  {
    id: 'essay_1',
    number: 1,
    indicator: 'Menganalisis hubungan sebab-akibat antara Revolusi Industri di Inggris dengan kemunculan sosiologi sebagai ilmu ilmiah.',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulus: `Revolusi Industri di Inggris pada abad ke-18 dan 19 mengubah tatanan produksi agraris menjadi mekanisasi pabrik uap. Ribuan warga desa berbondong-bondong ke kawasan kota industri (urbanisasi). Namun di balik pesatnya pertumbuhan ekonomi, lahir realitas kelam: jam kerja buruh mencapai 16 jam per hari, eksploitasi tenaga anak-anak dan perempuan dengan upah murah, sanitasi permukiman yang buruk memicu wabah kolera, serta memudarnya ikatan kekeluargaan pedesaan menjadi individualisme perkotaan.`,
    question: 'Berdasarkan stimulus di atas, analisislah mengapa krisis kemanusiaan dan pergeseran sosial akibat Revolusi Industri mendorong para pemikir Eropa merumuskan sosiologi sebagai disiplin ilmu baru!',
    sampleAnswer: `Revolusi Industri menciptakan perubahan mendasar (transformasi struktural) dalam tatanan masyarakat yang tidak mampu lagi dijelaskan oleh ilmu-ilmu lama seperti teologi atau filsafat spekulatif semata:
1. Munculnya Disintegrasi dan Masalah Sosial Baru: Perubahan cepat dari masyarakat agraris tradisional menuju masyarakat industri melahirkan kemiskinan kota, permukiman kumuh, alienasi buruh, dan kesenjangan kelas yang tajam antara kapitalis dan proletar.
2. Lunturnya Nilai Kebersamaan: Hubungan sosial yang semula berlandaskan solidaritas kekeluargaan dan gotong royong tergerus oleh persaingan ekonomi dan individualisme.
3. Kebutuhan Menata Kembali Keteraturan Sosial: Para ilmuwan menyadari mendesaknya suatu ilmu empiris yang mampu membedah fakta-fakta sosial secara objektif, menemukan hukum-hukum keteraturan sosial, dan merumuskan solusi atas krisis masyarakat modern tersebut, yang kemudian mewujud dalam kelahiran sosiologi.`,
    scoringRubric: {
      maxScore: 25,
      criteria: [
        { points: 25, description: 'Menjelaskan 3 dimensi secara komprehensif: transformasi struktural agraris-industri, ragam masalah sosial baru, dan urgensi metode ilmiah untuk menata kembali masyarakat.' },
        { points: 18, description: 'Menjelaskan 2 dimensi dengan tepat dan menghubungkan konteks Revolusi Industri dengan kelahiran sosiologi.' },
        { points: 10, description: 'Hanya menyebutkan dampak Revolusi Industri tanpa mengaitkannya dengan perlunya disiplin ilmu sosiologi.' },
        { points: 5, description: 'Jawaban sangat singkat dan kurang relevan dengan konteks sosiologis.' },
      ],
    },
  },
  {
    id: 'essay_2',
    number: 2,
    indicator: 'Mengevaluasi penerapan Hukum Tiga Tahap Auguste Comte dalam menganalisis fenomena perubahan pola pikir masyarakat kontemporer.',
    cognitiveLevel: 'C5 (Mengevaluasi)',
    stimulus: `Auguste Comte mengemukakan Hukum Tiga Tahap Perkembangan Akal Budi Manusia: Tahap Teologis, Tahap Metafisik, dan Tahap Positif. Di era digital saat ini, ketika wabah penyakit melanda, sebagian kelompok masyarakat masih meyakini penyakit tersebut semata-mata kutukan gaib, sebagian menghubungkannya dengan konspirasi abstrak alam semesta, sementara sebagian besar lainnya mengandalkan penelitian laboratorium virologi dan vaksinasi berbasis bukti medis empiris.`,
    question: 'Evaluasilah relevansi Hukum Tiga Tahap pemikiran Auguste Comte dalam menjelaskan fenomena sosial di era modern! Apakah ketiga tahap tersebut selalu berkembang secara linier dan kaku, ataukah dapat berdampingan dalam masyarakat yang sama? Berikan argumentasi kritis sosiologis Anda!',
    sampleAnswer: `1. Relevansi Teori: Hukum Tiga Tahap Comte tetap relevan sebagai kerangka analisis untuk mengidentifikasi corak berpikir masyarakat terhadap suatu fenomena krisis (seperti bencana atau wabah). Tahap Teologis tercermin pada keyakinan supranatural/kutukan gaib; Tahap Metafisik tercermin pada spekulasi abstrak non-empiris; dan Tahap Positif tercermin pada penanganan berbasis sains, metode virologi empiris, dan data statistik.
2. Evaluasi Kritis: Berbeda dengan asumsi Comte yang menganggap perkembangan pemikiran bergerak secara linier dan saling menggantikan secara mutlak (evolusionisme linier), dalam realitas sosiologis kontemporer ketiga tahap tersebut seringkali berdampingan (koeksistensi). Dalam satu masyarakat modern yang canggih sekalipun, individu dapat berpikir positif dalam pekerjaannya (menggunakan sains dan teknologi), namun tetap mempertahankan pola pikir teologis dalam keyakinan batinnya atau cara pandang metafisik dalam tradisi budayanya.`,
    scoringRubric: {
      maxScore: 25,
      criteria: [
        { points: 25, description: 'Mampu mendefinisikan relevansi ketiga tahap dengan contoh nyata dan memberikan evaluasi kritis bahwa ketiga tahap tidak selalu linier melainkan dapat hidup berdampingan (koeksistensi).' },
        { points: 18, description: 'Mampu menjelaskan ketiga tahap dan relevansinya, namun kritik terhadap sifat linieritas kurang tajam.' },
        { points: 10, description: 'Hanya menjabarkan arti ketiga tahap Comte tanpa analisis evaluasi kritis fenomena era modern.' },
        { points: 5, description: 'Pemahaman konsep Hukum Tiga Tahap keliru atau tidak lengkap.' },
      ],
    },
  },
  {
    id: 'essay_3',
    number: 3,
    indicator: 'Membandingkan konsep Fakta Sosial Émile Durkheim dengan konsep Tindakan Sosial Max Weber.',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulus: `Dalam sosiologi klasik terdapat dua tradisi besar: Émile Durkheim memandang masyarakat dari pendekatan makro melalui konsep "Fakta Sosial", sedangkan Max Weber memandang masyarakat dari pendekatan mikro melalui konsep "Tindakan Sosial" dan metode "Verstehen".`,
    question: 'Bandingkan perbedaan mendasar antara konsep Fakta Sosial Durkheim dengan Tindakan Sosial Weber ditinjau dari: (a) Titik tolak kajian, (b) Karakteristik utama konsep, dan (c) Metode yang digunakan dalam penelitian!',
    sampleAnswer: `Perbandingan komprehensif antara Fakta Sosial dan Tindakan Sosial:
a. Titik Tolak Kajian:
- Durkheim (Fakta Sosial): Berorientasi Makro-Sosiologis; memandang struktur masyarakat dan institusi sosial berada di atas dan di luar individu. Masyarakat membentuk individu.
- Weber (Tindakan Sosial): Berorientasi Mikro-Sosiologis; memandang individu sebagai aktor sosial yang aktif memberi makna (arti subjektif) terhadap tindakannya. Interaksi antar-individu membentuk masyarakat.

b. Karakteristik Utama Konsep:
- Fakta Sosial (Durkheim): Bersifat Eksternal (berada di luar diri individu), Koersif (memiliki kekuatan memaksa/mengendalikan perilaku individu), dan General (berlaku umum di seluruh masyarakat). Contoh: hukum formal, norma agama, bahasa, dan sistem mata uang.
- Tindakan Sosial (Weber): Tindakan manusia yang memiliki makna subjektif bagi dirinya dan diarahkan kepada perilaku orang lain. Diklasifikasikan menjadi 4 tipe: rasional instrumental, rasional nilai, tradisional, dan afektif.

c. Metode Penelitian:
- Durkheim: Menggunakan metode kuantitatif-positivistik objektif; memperlakukan fakta sosial "sebagai benda/barang" (things) yang dapat diukur secara statistik (seperti studi angka bunuh diri).
- Weber: Menggunakan metode kualitatif interpretatif "Verstehen", yaitu pemahaman mendalam secara empatik untuk menyingkap motif batiniah dan makna di balik tindakan aktor.`,
    scoringRubric: {
      maxScore: 25,
      criteria: [
        { points: 25, description: 'Membandingkan ketiga aspek (titik tolak, karakteristik, metode) secara tepat, sistematis, dan mendalam dengan contoh nyata.' },
        { points: 18, description: 'Menjelaskan ketiga aspek namun ada salah satu poin perbandingan yang kurang mendalam.' },
        { points: 10, description: 'Hanya menjelaskan pengertian fakta sosial atau tindakan sosial tanpa perbandingan komparatif yang terstruktur.' },
        { points: 5, description: 'Konsep tertukar antara Durkheim dan Weber.' },
      ],
    },
  },
  {
    id: 'essay_4',
    number: 4,
    indicator: 'Menganalisis karakteristik keilmuan sosiologi (Empiris, Teoretis, Kumulatif, Non-Etis) dan peran Sosiologi dalam pembangunan masyarakat Indonesia.',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulus: `Seorang sosiolog diminta oleh pemerintah daerah untuk meneliti resistensi pedagang kaki lima (PKL) terhadap rencana relokasi pasar. Peneliti tersebut tidak langsung menyalahkan pedagang sebagai pihak yang melanggar aturan tata kota, tidak pula menuduh pemerintah sewenang-wenang. Peneliti mengumpulkan data wawancara, mengamati pola nafkah PKL, lalu membedah mengapa relokasi tersebut dipandang mengancam kelangsungan hidup mereka.`,
    question: 'Berdasarkan kasus di atas, jelaskan bagaimana sosiolog tersebut menerapkan ciri "Non-Etis" dan "Empiris", serta analisislah manfaat hasil penelitian sosiologi semacam itu bagi perencanaan pembangunan yang humanis!',
    sampleAnswer: `1. Penerapan Ciri Sosiologi dalam Kasus:
- Ciri Non-Etis: Sosiolog tidak memposisikan diri sebagai hakim moral yang menilai apakah pedagang itu "salah/melanggar hukum" atau pemerintah "kejam/buruk". Peneliti bersikap netral dan objektif, fokus menjelaskan secara ilmiah faktor kausalitas di balik resistensi pedagang.
- Ciri Empiris: Sosiolog tidak menarik kesimpulan berdasarkan asumsi spekulatif di meja kerja, melainkan terjun langsung ke lapangan mengumpulkan data faktual melalui wawancara mendalam dan observasi langsung terhadap dinamika nafkah PKL.

2. Manfaat bagi Pembangunan Humanis di Indonesia:
- Memberikan Masukan Kebijakan Berbasis Realitas: Sosiologi memberikan potret struktur sosial nyata (bukan sekadar angka ekonomi di atas kertas), sehingga pemerintah memahami kebutuhan kultural dan ekonomi rakyat.
- Mencegah Konflik Sosial: Dengan mengetahui akar penolakan warga, perencanaan kebijakan dapat disesuaikan (misalnya relokasi bertahap, perbaikan fasilitas lokasi baru, atau dialog partisipatif), sehingga pembangunan berjalan damai, adil, dan memanusiakan manusia (sesuai ajaran Selo Soemardjan).`,
    scoringRubric: {
      maxScore: 25,
      criteria: [
        { points: 25, description: 'Menganalisis penerapan Non-Etis dan Empiris secara tepat pada studi kasus, serta menguraikan minimal 2 fungsi nyata sosiologi dalam perencanaan pembangunan humanis.' },
        { points: 18, description: 'Menjelaskan Non-Etis dan Empiris dengan benar, namun ulasan mengenai fungsi pembangunan masih umum.' },
        { points: 10, description: 'Hanya mengulang definisi ciri sosiologi tanpa mengaitkannya dengan studi kasus relokasi PKL.' },
        { points: 5, description: 'Analisis keliru atau tidak menjawab substansi pertanyaan.' },
      ],
    },
  },
];
