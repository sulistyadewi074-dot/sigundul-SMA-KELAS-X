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

export interface SociologyPosCategory {
  posId: string;
  code: string;
  categoryName: string;
  locationName: string;
  icon: string;
  themeColor: string;
  subtopicTitle: string;
  shortDesc: string;
  locationDescription: string;
  pedagogicalRationale: string;
  riddleHint: string;
  qrCode: string;
  keyFigures: string[];
  keyConcepts: string[];
  questionCount: number;
}

export const SOCIOLOGY_POS_CATEGORIES: SociologyPosCategory[] = [
  {
    posId: 'pos_1',
    code: 'POS 1',
    categoryName: 'POS 1: KANTIN',
    locationName: 'Kantin Sekolah',
    icon: 'UtensilsCrossed',
    themeColor: 'amber',
    subtopicTitle: 'Badai Revolusi & Kelahiran Ilmu Masyarakat (Revolusi Prancis & Revolusi Industri)',
    shortDesc: 'Eksplorasi sistem pembagian kerja dan transaksi ekonomi di kantin sebagai analogi lahirnya sosiologi akibat krisis Revolusi Industri di Inggris dan Revolusi Prancis 1789.',
    locationDescription:
      'Kantin sekolah merupakan mikrokosmos interaksi sosial dan sistem ekonomi nyata di lingkungan sekolah. Di kantin, terjadi pertukaran nilai uang dan makanan, antrean tertib para siswa, serta sistem pembagian kerja antara juru masak, pelayan, dan kasir. Suasana ini menjadi analogi sempurna untuk memahami bagaimana masyarakat pra-industri yang agraris bertransformasi secara radikal menjadi masyarakat industri modern. Ketika Revolusi Industri di Inggris melahirkan mekanisasi pabrik uap dan Revolusi Prancis meruntuhkan feodalisme monarki lama (ancien régime), tatanan kerja dan keteraturan sosial masyarakat terguncang hebat oleh urbanisasi massal, kemiskinan kota, dan eksploitasi kaum buruh. Dari guncangan inilah timbul kebutuhan mendesak akan ilmu sosiologi untuk menata kembali tatanan sosial.',
    pedagogicalRationale:
      'Siswa mengamati secara langsung kegiatan transaksi dan pembagian kerja di kantin sekolah untuk membedah perbedaan relasi sosial agraris versus industri, mengaitkan kenyataan sehari-hari dengan materi lahirnya sosiologi akibat krisis tatanan sosial pasca-Revolusi Prancis dan Revolusi Industri.',
    riddleHint:
      '🍜 Datanglah ke area KANTIN SEKOLAH! Di tempat berkumpul dan bertransaksi ini, temukan kartu QR Code untuk menyelidiki bagaimana guncangan Revolusi Industri dan Revolusi Prancis mengubah sistem kerja, ekonomi, dan tatanan masyarakat dunia!',
    qrCode: 'SOSIOLOGI-POS-1',
    keyFigures: ['James Watt', 'Raja Louis XVI', 'Para Filosof Pencerahan (Aufklärung)'],
    keyConcepts: ['Revolusi Prancis (1789)', 'Revolusi Industri di Inggris', 'Urbanisasi', 'Eksploitasi Buruh & Slum Area', 'Abad Pencerahan (Aufklärung)', 'Ketertiban Sosial (Social Order)'],
    questionCount: 5,
  },
  {
    posId: 'pos_2',
    code: 'POS 2',
    categoryName: 'POS 2: RUANG LABORATORIUM',
    locationName: 'Ruang Laboratorium',
    icon: 'FlaskConical',
    themeColor: 'sky',
    subtopicTitle: 'Auguste Comte & Lahirnya Positivisme (Fisika Sosial & Hukum Tiga Tahap)',
    shortDesc: 'Penerapan metode ilmiah laboratorium ke dalam penelitian gejala masyarakat oleh Auguste Comte (Bapak Sosiologi Dunia).',
    locationDescription:
      'Ruang laboratorium adalah episentrum pembuktian fakta objektif, di mana setiap kesimpulan harus didasarkan pada observasi empiris, pengukuran akurat, dan eksperimen ilmiah, bukan mitos atau takhayul. Suasana laboratorium ini selaras dengan gagasan utama Auguste Comte (1798–1857), Bapak Sosiologi Dunia. Comte terinspirasi oleh metode presisi ilmu alam (fisika, kimia, biologi) dan mencetuskan bahwa masyarakat manusia pun harus diteliti secara objektif melalui metode ilmiah yang ia sebut Positivisme. Sebelum menetapkan nama "Sosiologi" pada tahun 1838 dalam buku Cours de Philosophie Positive, Comte bahkan menamainya "Fisika Sosial" (Physique Sociale). Di laboratorium ini pula siswa mempelajari Hukum Tiga Tahap Pemikiran Manusia: Teologis (kekuatan gaib), Metafisik (prinsip abstrak spekulatif), dan Positif (hukum kausalitas fakta empiris).',
    pedagogicalRationale:
      'Siswa berada di tengah atmosfer penelitian ilmiah laboratorium untuk memahami peralihan pola pikir manusia dari cara pandang magis-teologis menuju cara pandang positif-ilmiah, serta memahami mengapa Comte memposisikan sosiologi sebagai ratu ilmu pengetahuan (queen of sciences).',
    riddleHint:
      '🔬 Kunjungi RUANG LABORATORIUM! Di tempat eksperimen dan pembuktian fakta empiris ini, temukan kartu QR untuk mempelajari pemikiran Auguste Comte: mengapa sosiologi lahir sebagai ilmu positif seperti ilmu alam dan Hukum Tiga Tahap Pemikiran Manusia!',
    qrCode: 'SOSIOLOGI-POS-2',
    keyFigures: ['Auguste Comte (Bapak Sosiologi)', 'Adolphe Quetelet'],
    keyConcepts: ['Positivisme', 'Fisika Sosial (Physique Sociale)', 'Cours de Philosophie Positive (1838)', 'Etimologi Socius & Logos', 'Hukum Tiga Tahap (Teologis, Metafisik, Positif)', 'Statika & Dinamika Sosial'],
    questionCount: 5,
  },
  {
    posId: 'pos_3',
    code: 'POS 3',
    categoryName: 'POS 3: PERPUSTAKAAN',
    locationName: 'Perpustakaan Sekolah',
    icon: 'BookOpen',
    themeColor: 'emerald',
    subtopicTitle: 'Empat Pilar Tokoh Klasik Sosiologi (Durkheim, Marx, Weber, Spencer)',
    shortDesc: 'Menjelajahi khazanah literatur teori klasik di antara rak buku perpustakaan untuk membedah paradigma empat pemikir sosiologi dunia.',
    locationDescription:
      'Perpustakaan adalah kawah candradimuka ilmu pengetahuan yang menyimpan ribuan buku induk, jurnal penelitian, dan mahakarya para sarjana besar dunia. Lokasi perpustakaan sekolah menjadi tempat yang paling tepat untuk menelusuri literatur pemikiran empat pilar tokoh klasik sosiologi dunia yang mematangkan disiplin ini menjadi ilmu akademis di universitas: Émile Durkheim (Fakta Sosial, Solidaritas Mekanik vs Organik, studi Bunuh Diri), Karl Marx (Materialisme Historis, Konflik Kelas Borjuis vs Proletar, Alienasi), Max Weber (Metode Verstehen, 4 Tipe Tindakan Sosial, Etika Protestan & Kapitalisme), serta Herbert Spencer (Teori Evolusi Sosial, Analogi Organik, Survival of the Fittest).',
    pedagogicalRationale:
      'Suasana hening dan kaya literatur di perpustakaan mendorong siswa berpikir kritis, membaca mendalam, dan membandingkan secara komparatif sudut pandang (paradigma fakta sosial, definisi sosial, dan perilaku sosial) dari empat tokoh sentral pendiri sosiologi.',
    riddleHint:
      '📚 Masuki area PERPUSTAKAAN SEKOLAH! Temukan kartu QR Code di antara rak buku ilmu sosial untuk menelusuri pemikiran 4 pilar tokoh klasik: Émile Durkheim, Karl Marx, Max Weber, dan Herbert Spencer!',
    qrCode: 'SOSIOLOGI-POS-3',
    keyFigures: ['Émile Durkheim', 'Karl Marx', 'Max Weber', 'Herbert Spencer'],
    keyConcepts: ['Fakta Sosial (Social Facts)', 'Solidaritas Mekanik vs Organik', 'Konflik Kelas Borjuis vs Proletar', 'Alienasi Kaum Buruh', 'Metode Verstehen (Interpretasi Makna)', '4 Tipe Tindakan Sosial', 'Analogi Organik & Evolusi Sosial'],
    questionCount: 5,
  },
  {
    posId: 'pos_4',
    code: 'POS 4',
    categoryName: 'POS 4: RUANG KELAS',
    locationName: 'Ruang Kelas',
    icon: 'School',
    themeColor: 'purple',
    subtopicTitle: 'Ciri-Ciri & Hakikat Sosiologi sebagai Ilmu Pengetahuan',
    shortDesc: 'Menjadikan ruang kelas sehari-hari sebagai laboratorium sosial nyata untuk membuktikan 4 karakteristik utama sosiologi: Empiris, Teoretis, Kumulatif, dan Non-Etis.',
    locationDescription:
      'Ruang kelas bukan sekadar ruangan berpintu dan berjendela, melainkan sebuah laboratorium interaksi sosial mini paling hidup. Di ruang kelas terdapat norma tata tertib tertulis, struktur sosial (wali kelas, ketua kelas, seksi piket), interaksi pertemanan antarkelompok, hingga potensi friksi antarsiswa. Di lokasi inilah para siswa dapat membuktikan secara langsung empat karakteristik utama sosiologi sebagai ilmu pengetahuan: (1) EMPIRIS, pengamatan didasarkan pada fakta lapangan nyata di kelas, bukan gosip atau prasangka; (2) TEORETIS, menyusun kerangka logis sebab-akibat dari hasil observasi; (3) KUMULATIF, teori dibangun dan diperluas dari teori yang ada sebelumnya; dan (4) NON-ETIS, sosiolog tidak menilai baik-buruk atau berdosa-tidaknya suatu fenomena (das sein), melainkan menganalisis faktor penyebab dan strukturnya secara ilmiah dan objektif.',
    pedagogicalRationale:
      'Mengajak siswa memandang ruang kelas tempat mereka belajar sehari-hari dengan "kacamata sosiologis" (sociological imagination), melatih sikap ilmiah objektif non-etis saat menganalisis fenomena kelompok sebaya tanpa menghakimi secara moralistik.',
    riddleHint:
      '🏫 Datanglah ke RUANG KELAS! Di tempat kita belajar bersama dan berinteraksi menaati tata tertib setiap hari, pindai QR Code untuk membongkar 4 ciri utama sosiologi: Empiris, Teoretis, Kumulatif, dan Non-Etis!',
    qrCode: 'SOSIOLOGI-POS-4',
    keyFigures: ['Para Sosiolog Kontemporer & Teoretisi Metode Ilmiah'],
    keyConcepts: ['Empiris (Berdasarkan Observasi Nyata)', 'Teoretis (Abstraksi Sebab-Akibat)', 'Kumulatif (Menyambung Teori Lama)', 'Non-Etis (Objektif Tanpa Menghakimi Baik/Buruk)', 'Das Sein vs Das Sollen', 'Hakikat Ilmu Sosiologi (Murni & Terapan, Kategoris, Abstrak)'],
    questionCount: 5,
  },
  {
    posId: 'pos_5',
    code: 'POS 5 (FINAL)',
    categoryName: 'POS 5: GURU WALI',
    locationName: 'Guru Wali Kelas',
    icon: 'Award',
    themeColor: 'rose',
    subtopicTitle: 'Jejak & Sejarah Perkembangan Sosiologi di Indonesia (Babak Final)',
    shortDesc: 'Babak final di meja Guru Wali Kelas: Meneladani kepemimpinan pamong, kearifan lokal Nusantara, hingga pemikiran Selo Soemardjan sebagai Bapak Sosiologi Indonesia.',
    locationDescription:
      'Guru Wali Kelas adalah sosok pamong pendidik yang setiap hari mendampingi, mengayomi, membimbing etika sosial, dan memastikan keharmonisan warga kelas. Menempatkan Pos 5 (Babak Final) di meja Guru Wali memiliki nilai filosofis luhur yang mencerminkan sejarah perkembangan sosiologi di bumi Indonesia. Jauh sebelum sosiologi masuk sebagai mata kuliah universitas, nilai-nilai keteraturan sosial dan kepemimpinan telah tertuang dalam karya sastra kearifan lokal seperti "Serat Wulangreh" oleh Sri Paduka Mangkunegara IV dan ajaran kepemimpinan Perguruan Taman Siswa oleh Ki Hajar Dewantara ("Ing Ngarso Sung Tulodo, Ing Madyo Mangun Karso, Tut Wuri Handayani"). Pasca-kemerdekaan, kuliah sosiologi berbahasa Indonesia pertama kali dirintis di UGM tahun 1948 oleh Prof. Soenario Kolopaking, disusul kehadiran Prof. Dr. Selo Soemardjan sebagai Bapak Sosiologi Indonesia dengan karya legendaris "Social Changes in Jogjakarta" (1962) dan "Setangkai Bunga Sosiologi" (1964).',
    pedagogicalRationale:
      'Menghubungkan teori universal sosiologi barat dengan konteks kearifan lokal bangsa Indonesia, serta mengukuhkan peran Guru Wali sebagai representasi kepemimpinan sosial yang memberi teladan (Ing Ngarso Sung Tulodo) dan mengesahkan keberhasilan petualangan belajar siswa.',
    riddleHint:
      '👨‍🏫 Menuju Babak Final di dekat GURU WALI KELAS! Temukan kartu QR penutup untuk mengungkap jejak sejarah Sosiologi di bumi Nusantara: dari kearifan lokal, ajaran Ki Hajar Dewantara, hingga pemikiran Selo Soemardjan!',
    qrCode: 'SOSIOLOGI-POS-5',
    keyFigures: ['Sri Paduka Mangkunegara IV', 'Ki Hajar Dewantara', 'Prof. Soenario Kolopaking', 'Prof. Dr. Selo Soemardjan (Bapak Sosiologi Indonesia)', 'Soelaeman Soemardi'],
    keyConcepts: ['Serat Wulangreh (Etika Sosial Kerajaan)', 'Taman Siswa & Ing Ngarso Sung Tulodo', 'Rechtshogeschool Batavia (1924)', 'Kuliah Bahasa Indonesia Pertama UGM (1948)', 'Buku Social Changes in Jogjakarta (1962)', 'Setangkai Bunga Sosiologi (1964)'],
    questionCount: 5,
  },
];

export const SOCIOLOGY_LOCATIONS: LocationConfig[] = [
  // --- POS 1: KANTIN (REVOLUSI PRANCIS & REVOLUSI INDUSTRI / SISTEM EKONOMI & KERJA) ---
  {
    id: 'pos_1',
    code: 'POS 1',
    name: 'Kantin',
    qrCode: 'SOSIOLOGI-POS-1',
    hint: '🍜 Datanglah ke area KANTIN SEKOLAH! Di tempat berkumpul dan bertransaksi ini, temukan kartu QR Code untuk menyelidiki bagaimana guncangan Revolusi Industri dan Revolusi Prancis mengubah sistem kerja, ekonomi, dan tatanan masyarakat dunia!',
    isFinal: false,
    isActive: true,
    iconName: 'UtensilsCrossed',
    story: {
      chapterNumber: 1,
      title: 'Pos 1: Badai Revolusi & Kelahiran Ilmu Masyarakat (Kantin)',
      subtitle: 'Penyelidikan di Kantin: Dari interaksi jual-beli dan pembagian kerja kantin menuju telaah Revolusi Industri & Revolusi Prancis',
      imageCaption: 'Ilustrasi Interaksi Sosial & Dampak Revolusi Industri: Suasana pembagian kerja dan pertukaran ekonomi di kantin yang mencerminkan transformasi sistem produksi agraris menuju masyarakat industri modern pasca-Revolusi Prancis.',
      visualHighlights: [
        '🍜 Fenomena Sosial Kantin: Ruang transaksi ekonomi, interaksi antarwarga sekolah, dan pembagian kerja nyata',
        '⚡ Revolusi Prancis (1789): Runtuhnya monarki absolut dan kekacauan tatanan sosial politik',
        '🏭 Revolusi Industri di Inggris: Mekanisasi mesin uap mengubah masyarakat agraris menjadi industri pabrik',
        '🏚️ Masalah Sosial Baru: Urbanisasi tak terkendali, eksploitasi kaum buruh, jam kerja 16 jam, dan permukiman kumuh',
        '💡 Abad Pencerahan (Aufklärung): Keinginan menjelaskan perilaku masyarakat secara ilmiah dan rasional',
      ],
      paragraphs: [
        'Ketika kita melangkah ke Kantin Sekolah saat jam istirahat, kita menyaksikan pemandangan yang sangat hidup: siswa mengantre dengan tertib, pedagang menyiapkan makanan, terjadi transaksi jual beli, dan obrolan antarkelompok berlangsung hangat. Kantin adalah mikrokosmos interaksi sosial dan sistem pembagian kerja di sekolah. Namun dalam sejarah peradaban manusia, tatanan kerja dan keteraturan sosial seperti ini pernah terguncang hebat pada abad ke-18 dan ke-19. Sosiologi lahir dari guncangan sosial dan transformasi dramatis yang melanda benua Eropa, yang dipicu oleh dua peristiwa mahabesar: Revolusi Prancis (1789) dan Revolusi Industri di Inggris.',
        'Revolusi Prancis pada tahun 1789 menghancurkan tatanan lama (ancien régime) berupa sistem monarki absolut dan dominasi feodalisme kaum bangsawan serta kaum agamawan. Meski mengusung semboyan kebebasan (liberté), persamaan (égalité), dan persaudaraan (fraternité), runtuhnya tatanan politik monarki justru diikuti oleh gelombang kekacauan sosial yang panjang, anarki, pertumpahan darah pada masa Teror, serta ketidakpastian tata aturan masyarakat. Para pemikir Eropa saat itu menyadari bahwa masyarakat membutuhkan ilmu baru yang mampu menjelaskan bagaimana ketertiban sosial (social order) dapat dibangun kembali.',
        'Hampir bersamaan dengan itu, Revolusi Industri di Inggris membawa perubahan radikal dalam sistem ekonomi dan cara manusia berproduksi. Ditemukannya mesin uap oleh James Watt mendorong mekanisasi pabrik-pabrik tekstil dan tambang. Akibatnya, jutaan penduduk desa yang semula bekerja sebagai petani berbondong-bondong pindah ke kota-kota industri (urbanisasi besar-besaran) untuk menjadi buruh pabrik.',
        'Namun, industrialisasi yang pesat melahirkan berbagai krisis kemanusiaan baru: pemerasan tenaga kerja buruh (termasuk perempuan dan anak-anak) dengan jam kerja ekstrem hingga 14-16 jam per hari, upah yang sangat minim, munculnya permukiman kumuh (slum area) yang kotor dan sarang penyakit, angka kejahatan yang melonjak, serta jurang pemisah yang semakin lebar antara pemilik modal (kapitalis) dan kaum buruh miskin (proletar). Hubungan kekeluargaan dan gotong royong tradisional luntur, digantikan oleh individualisme yang dingin.',
        'Di sisi lain, Abad Pencerahan (Aufklärung) telah menanamkan keyakinan bahwa akal budi manusia dan penalaran rasional mampu memecahkan segala misteri alam semesta. Jika ilmu fisika, kimia, dan biologi mampu mengungkap hukum-hukum alam secara ilmiah, maka para ilmuwan berpikir bahwa semestinya perilaku masyarakat manusia juga dapat diselidiki secara ilmiah dan objektif. Kondisi gejolak sosial yang dibarengi dengan semangat ilmiah inilah yang membidani lahirnya sosiologi sebagai disiplin ilmu mandiri.',
      ],
      summaryClue: 'Pos 1 (Kantin): Dari interaksi sosial kantin, kita mempelajari bahwa sosiologi lahir karena krisis tatanan sosial akibat Revolusi Prancis (keruntuhan monarki feodal) dan Revolusi Industri (urbanisasi, eksploitasi buruh, kemiskinan kota), didorong rasionalitas Abad Pencerahan.',
      glossary: [
        { word: 'Aufklärung (Abad Pencerahan)', meaning: 'Zaman pencerahan di Eropa abad ke-18 yang menjunjung tinggi kekuatan akal budi dan rasionalitas ilmiah' },
        { word: 'Revolusi Industri', meaning: 'Transformasi radikal dari produksi manual menggunakan tenaga manusia/hewan menjadi tenaga mesin pabrik' },
        { word: 'Ancien Régime', meaning: 'Tatanan masyarakat lama sebelum Revolusi Prancis yang bercirikan kekuasaan raja mutlak dan hak istimewa bangsawan' },
        { word: 'Urbanisasi', meaning: 'Perpindahan penduduk secara besar-besaran dari daerah pedesaan ke pusat-pusat kota industri' },
        { word: 'Ketertiban Sosial (Social Order)', meaning: 'Kondisi masyarakat di mana norma, aturan, dan institusi berjalan teratur dan harmonis' },
      ],
    },
  },

  // --- POS 2: RUANG LABORATORIUM (AUGUSTE COMTE, POSITIVISME, & HUKUM 3 TAHAP) ---
  {
    id: 'pos_2',
    code: 'POS 2',
    name: 'Ruang Laboratorium',
    qrCode: 'SOSIOLOGI-POS-2',
    hint: '🔬 Kunjungi RUANG LABORATORIUM! Di tempat eksperimen dan pembuktian fakta empiris ini, temukan kartu QR untuk mempelajari pemikiran Auguste Comte: mengapa sosiologi lahir sebagai ilmu positif seperti ilmu alam dan Hukum Tiga Tahap Pemikiran Manusia!',
    isFinal: false,
    isActive: true,
    iconName: 'FlaskConical',
    story: {
      chapterNumber: 2,
      title: 'Pos 2: Auguste Comte & Lahirnya Positivisme (Ruang Laboratorium)',
      subtitle: 'Penyelidikan di Laboratorium: Dari metode uji sains dan eksperimen menuju lahirnya Sosiologi sebagai Fisika Sosial',
      imageCaption: 'Ilustrasi Auguste Comte (1798–1857) & Metode Laboratorium: Menerapkan metode observasi objektif dan eksperimen ilmu alam ke dalam pengamatan gejala masyarakat (Positivisme & Hukum Tiga Tahap).',
      visualHighlights: [
        '🔬 Cermin Laboratorium: Tempat eksperimen ilmiah, pembuktian fakta objektif, dan pengujian empiris',
        '👑 Auguste Comte (1798–1857): Bapak Sosiologi Dunia perumus Fisika Sosial (Physique Sociale)',
        '📖 Istilah Sosiologi (1838): Diperkenalkan dalam buku Cours de Philosophie Positive jilid ke-4',
        '📈 Hukum 3 Tahap: Evolusi akal budi dari Tahap Teologis, Metafisik, hingga Tahap Positif/Ilmiah',
      ],
      paragraphs: [
        'Melangkahkan kaki ke dalam Ruang Laboratorium mempertemukan kita dengan deretan mikroskop, tabung reaksi, alat ukur presisi, dan bagan ilmiah. Di laboratorium, suatu kesimpulan tidak boleh didasarkan pada takhayul atau dugaan semata, melainkan wajib dibuktikan lewat pengamatan fakta objektif dan eksperimen yang teruji. Semangat metode ilmiah laboratorium inilah yang memicu pemikiran tokoh paling sentral yang dinobatkan sebagai "Bapak Sosiologi Dunia", yaitu filsuf asal Prancis bernama Auguste Comte (1798–1857). Menghadapi kekacauan politik dan sosial di Prancis pascarevolusi, Comte mencita-citakan suatu ilmu yang mampu membimbing penataan kembali masyarakat dengan prinsip-prinsip ilmiah yang teratur dan pasti layaknya ilmu alam.',
        'Pada awalnya, Comte menyebut cabang ilmu baru ini dengan istilah "Fisika Sosial" (physique sociale). Hal ini karena Comte terinspirasi oleh keberhasilan ilmu fisika yang mampu menemukan hukum-hukum pasti pergerakan benda alam semesta. Namun, karena istilah fisika sosial kemudian digunakan oleh seorang ilmuwan statistik Belgia bernama Adolphe Quetelet untuk penelitian statistiknya, Comte memutuskan mencari nama baru yang lebih khas dan orisinal.',
        'Maka pada tahun 1838, dalam mahakaryanya yang berjudul "Cours de Philosophie Positive" (Kursus Filsafat Positif) jilid ke-4, Comte secara resmi mencetuskan istilah "SOCIOLOGIE" (Sosiologi). Secara etimologis, kata sosiologi merupakan gabungan dari dua bahasa kuno: kata Latin "socius" yang berarti kawan, teman, atau masyarakat, dan kata Yunani "logos" yang bermakna kata, pembicaraan, atau ilmu pengetahuan. Dengan demikian, sosiologi secara harafiah berarti ilmu tentang masyarakat.',
        'Sumbangan pemikiran Auguste Comte yang paling termasyhur adalah "Hukum Tiga Tahap Pemikiran Manusia" (The Law of Three Stages), yang menjelaskan bahwa akal budi manusia dan peradaban masyarakat berkembang melalui tiga tingkatan evolusi pemikiran. Tahap pertama adalah Tahap Teologis (Fiktif), di mana segala gejala alam dan peristiwa sosial diyakini dikendalikan oleh kekuatan gaib, dewa-dewi, roh nenek moyang, atau Tuhan. Tahap ini dibagi menjadi animisme, politeisme, dan monoteisme.',
        'Tahap kedua adalah Tahap Metafisik (Abstrak), yang merupakan tahap transisi. Pada tahap ini, kepercayaan terhadap kekuatan gaib digantikan oleh kekuatan-kekuatan abstrak, prinsip alamiah, atau filsafat spekulatif (seperti konsep "kodrat alam" atau "keadilan esensial"). Tahap ketiga adalah puncak pemikiran manusia, yaitu Tahap Positif (Ilmiah/Rasional). Pada tahap positif, manusia tidak lagi mencari penyebab mutlak di balik alam gaib, melainkan mengamati fakta-fakta empiris secara objektif, melakukan eksperimen, dan mencari hukum-hukum sebab-akibat (kausalitas) yang mengatur masyarakat.',
        'Bagi Comte, sosiologi berada di puncak hierarki ilmu pengetahuan (setelah matematika, astronomi, fisika, kimia, dan biologi). Sosiologi adalah ilmu positif yang tugas utamanya membedah dua aspek besar masyarakat: Statika Sosial (social statics), yaitu kajian tentang struktur dan keteraturan sosial, serta Dinamika Sosial (social dynamics), yaitu kajian tentang perubahan dan perkembangan masyarakat dari waktu ke waktu.',
      ],
      summaryClue: 'Pos 2 (Ruang Laboratorium): Di laboratorium pembuktian sains, Auguste Comte mencetuskan istilah "Sosiologi" (1838) dan Positivisme. Beliau merumuskan Hukum 3 Tahap: Teologis (supranatural), Metafisik (kekuatan abstrak), dan Positif (fakta empiris & kausalitas).',
      glossary: [
        { word: 'Socius & Logos', meaning: 'Akar kata sosiologi: socius (Latin = kawan/masyarakat) dan logos (Yunani = ilmu/pengetahuan)' },
        { word: 'Positivisme', meaning: 'Pandangan filosofis bahwa kebenaran sejati hanya diperoleh melalui pembuktian fakta empiris dan metode ilmiah' },
        { word: 'Tahap Teologis', meaning: 'Tingkat pemikiran manusia yang menjelaskan segala sesuatu atas dasar campur tangan kekuatan gaib dan ketuhanan' },
        { word: 'Tahap Metafisik', meaning: 'Tingkat transisi yang menjelaskan gejala dengan kekuatan abstrak atau prinsip alamiah spekulatif' },
        { word: 'Statika & Dinamika Sosial', meaning: 'Statika sosial meneliti keteraturan/struktur masyarakat; dinamika sosial meneliti proses perubahan masyarakat' },
      ],
    },
  },

  // --- POS 3: PERPUSTAKAAN (EMPAT PILAR TOKOH KLASIK SOSIOLOGI) ---
  {
    id: 'pos_3',
    code: 'POS 3',
    name: 'Perpustakaan',
    qrCode: 'SOSIOLOGI-POS-3',
    hint: '📚 Masuki area PERPUSTAKAAN SEKOLAH! Temukan kartu QR Code di antara rak buku ilmu sosial untuk menelusuri pemikiran 4 pilar tokoh klasik: Émile Durkheim, Karl Marx, Max Weber, dan Herbert Spencer!',
    isFinal: false,
    isActive: true,
    iconName: 'BookOpen',
    story: {
      chapterNumber: 3,
      title: 'Pos 3: Empat Pilar Tokoh Klasik Sosiologi (Perpustakaan)',
      subtitle: 'Penyelidikan di Perpustakaan: Menjelajahi khazanah literatur teori klasik Durkheim, Marx, Weber, dan Spencer',
      imageCaption: 'Empat Raksasa Teori Sosiologi Klasik di Rak Perpustakaan: Durkheim (Fakta Sosial & Solidaritas), Marx (Konflik Kelas & Materialisme Historis), Weber (Verstehen & Tindakan Sosial), dan Spencer (Evolusi Sosial / Survival of the Fittest).',
      visualHighlights: [
        '📚 Khazanah Perpustakaan: Menyimpan literatur sejarah, jurnal pemikiran, dan buku babon teori sosial',
        '🏛️ Émile Durkheim: Konsep Fakta Sosial, Solidaritas Mekanik vs Organik, dan studi Bunuh Diri (Suicide)',
        '⚒️ Karl Marx: Teori Konflik Kelas borjuis vs proletar, alienasi buruh, dan materialisme historis',
        '🧠 Max Weber: Pendekatan Verstehen (pemahaman interpretatif) dan 4 tipe Tindakan Sosial',
        '🌱 Herbert Spencer: Teori Evolusi Sosial, Analogi Organik, dan konsep Survival of the Fittest',
      ],
      paragraphs: [
        'Perpustakaan sekolah adalah ruang hening yang sarat dengan khazanah kebijaksanaan, tempat tersimpannya buku-buku teks induk, ensiklopedia, dan risalah pemikiran para sarjana besar dunia. Di antara deretan rak buku ilmu sosial di perpustakaan inilah kita menjumpai empat pilar raksasa sosiologi klasik: Émile Durkheim, Karl Marx, Max Weber, dan Herbert Spencer. Setelah fondasi diletakkan oleh Auguste Comte, keempat tokoh inilah yang menulis karya-karya abadi dan mematangkan sosiologi menjadi disiplin akademis yang kokoh dengan sudut pandang (paradigma) yang saling melengkapi.',
        'ÉMILE DURKHEIM (1858–1917) adalah tokoh yang berhasil menjadikan sosiologi sebagai mata kuliah resmi di universitas Prancis. Karyanya "The Rules of Sociological Method" (1895) menegaskan bahwa objek kajian sosiologi adalah FAKTA SOSIAL (social facts). Fakta sosial adalah cara bertindak, berpikir, dan merasa yang berada di luar diri individu (eksternal), memiliki daya paksa yang mengendalikan individu (koersif), serta berlaku umum di seluruh masyarakat (general). Durkheim juga membagi masyarakat menjadi Solidaritas Mekanik (masyarakat tradisional yang diikat kesadaran kolektif seragam) dan Solidaritas Organik (masyarakat modern yang diikat oleh saling ketergantungan pembagian kerja yang kompleks).',
        'KARL MARX (1818–1883) memandang masyarakat dari kacamata materialisme historis dan pertentangan kelas. Menurut Marx, motor penggerak perubahan sejarah manusia bukanlah gagasan atau agama, melainkan struktur ekonomi dan konflik antar-kelas sosial. Dalam masyarakat kapitalis industri, masyarakat terbelah menjadi dua kelas yang saling bertentangan: Kelas Borjuis (pemilik alat produksi, pabrik, dan modal) serta Kelas Proletar (kaum buruh tertindas yang hanya memiliki tenaga kerja). Marx juga memperkenalkan konsep alienasi (keterasingan), di mana kaum buruh terasing dari hasil karyanya, dari proses kerja yang menjemukan, dan dari potensi kemanusiaannya sendiri.',
        'MAX WEBER (1864–1920) berargumen bahwa sosiologi tidak hanya meneliti struktur luar masyarakat, melainkan harus memahami makna di balik tindakan manusia. Weber memperkenalkan metode VERSTEHEN (pemahaman mendalam yang berempati) untuk menafsirkan makna subjektif dari TINDAKAN SOSIAL (social action). Weber mengklasifikasikan tindakan sosial menjadi empat tipe: (1) Tindakan Rasional Instrumental (memperhitungkan tujuan dan sarana secara efisien), (2) Tindakan Rasional Berorientasi Nilai (berdasarkan nilai moral/keyakinan mutlak), (3) Tindakan Tradisional (karena kebiasaan adat), dan (4) Tindakan Afektif (didorong luapan emosi seketika). Dalam bukunya "The Protestant Ethic and the Spirit of Capitalism", Weber membuktikan bahwa ajaran asketisme Calvinis berkontribusi membidani etos kerja kapitalisme modern.',
        'HERBERT SPENCER (1820–1903) dari Inggris mempopulerkan teori Evolusi Sosial dengan menerapkan gagasan biologi Charles Darwin ke dalam sosiologi. Spencer memperkenalkan konsep ANALOGI ORGANIK, yaitu memandang masyarakat laksana organisme tubuh hidup; jika satu organ terganggu, organ lain akan merespons. Spencer juga mencetuskan prinsip "Survival of the Fittest", di mana masyarakat berevolusi dari bentuk sederhana yang homogen menuju bentuk yang semakin kompleks dan heterogen.',
      ],
      summaryClue: 'Pos 3 (Perpustakaan): Dari rak literatur sosiologi, kita membedah 4 tokoh klasik: Durkheim (Fakta Sosial, Solidaritas Mekanik & Organik), Marx (Konflik Kelas Borjuis vs Proletar, Alienasi), Weber (Metode Verstehen, Tindakan Sosial), dan Spencer (Evolusi Sosial & Analogi Organik).',
      glossary: [
        { word: 'Fakta Sosial', meaning: 'Cara bertindak, berpikir, dan merasa yang bersifat eksternal, koersif (memaksa), dan umum dalam masyarakat (Durkheim)' },
        { word: 'Solidaritas Organik', meaning: 'Keterikatan sosial masyarakat modern yang didasarkan pada pembagian kerja dan saling ketergantungan fungsional' },
        { word: 'Verstehen', meaning: 'Metode interpretatif untuk memahami motif dan makna subjektif di balik tindakan seseorang (Weber)' },
        { word: 'Alienasi', meaning: 'Kondisi keterasingan manusia/buruh dari pekerjaan, hasil produksi, dan sesamanya dalam sistem kapitalisme (Marx)' },
        { word: 'Analogi Organik', meaning: 'Pandangan yang menyamakan struktur masyarakat dengan organ-organ dalam makhluk hidup (Spencer)' },
      ],
    },
  },

  // --- POS 4: RUANG KELAS (CIRI-CIRI & HAKIKAT SOSIOLOGI SEBAGAI ILMU) ---
  {
    id: 'pos_4',
    code: 'POS 4',
    name: 'Ruang Kelas',
    qrCode: 'SOSIOLOGI-POS-4',
    hint: '🏫 Datanglah ke RUANG KELAS! Di tempat kita belajar bersama dan berinteraksi menaati tata tertib setiap hari, pindai QR Code untuk membongkar 4 ciri utama sosiologi: Empiris, Teoretis, Kumulatif, dan Non-Etis!',
    isFinal: false,
    isActive: true,
    iconName: 'School',
    story: {
      chapterNumber: 4,
      title: 'Pos 4: Ciri-Ciri & Hakikat Sosiologi sebagai Ilmu (Ruang Kelas)',
      subtitle: 'Penyelidikan di Ruang Kelas: Menjadikan ruang belajar sehari-hari sebagai laboratorium nyata pengamatan 4 ciri sosiologi',
      imageCaption: 'Empat Karakteristik Utama Sosiologi sebagai Ilmu Pengetahuan di Ruang Kelas: Mengamati realitas interaksi kelas secara Empiris (fakta lapangan), Teoretis (abstraksi sebab-akibat), Kumulatif (perluasan teori), dan Non-Etis (objektif tanpa menghakimi).',
      visualHighlights: [
        '🏫 Realitas Ruang Kelas: Tata tertib kelas, kesepakatan belajar, dan dinamika interaksi sosial siswa',
        '🔍 EMPIRIS: Didasarkan pada observasi fakta interaksi nyata dan akal sehat, bukan prasangka spekulatif',
        '📊 TEORETIS: Menyusun abstraksi logis hubungan sebab-akibat dari hasil pengamatan di kelas/masyarakat',
        '📚 KUMULATIF: Teori sosiologi dibangun dan diperluas atas dasar teori yang sudah ada sebelumnya',
        '⚖️ NON-ETIS: Tidak menghakimi baik atau buruknya suatu fakta sosial, melainkan membedahnya secara ilmiah',
      ],
      paragraphs: [
        'Ruang Kelas tempat kita berkumpul setiap hari sesungguhnya adalah laboratorium sosiologi mini yang paling nyata. Di dalam ruang kelas terdapat struktur sosial (ada ketua kelas dan seksi piket), aturan norma tertulis dan tidak tertulis, interaksi belajar kelompok, hingga perbedaan latar belakang siswa. Namun, agar pengamatan terhadap peristiwa di ruang kelas dan masyarakat luas diakui sebagai kajian ilmiah (bukan sekadar obrolan santai atau gosip di kelas), sosiologi wajib memenuhi empat ciri karakteristik keilmuan yang baku dan ketat.',
        'Ciri pertama adalah EMPIRIS. Sosiologi didasarkan pada hasil pengamatan langsung (observasi) dan penalaran akal sehat terhadap kenyataan yang benar-benar terjadi di masyarakat. Data yang diperoleh bukan hasil khayalan, tebakan spekulatif, atau ramalan mistis, melainkan data faktual yang dapat diuji dan diverifikasi kebenarannya oleh peneliti lain.',
        'Ciri kedua adalah TEORETIS. Sosiologi selalu berusaha menyusun abstraksi dari data-data observasi yang telah dikumpulkan di lapangan. Abstraksi ini adalah kerangka konseptual logis yang menghubungkan berbagai fakta sehingga membentuk pernyataan sebab-akibat (kausalitas). Dengan menyusun teori, sosiolog tidak hanya sekadar mendeskripsikan apa yang terjadi, tetapi mampu menjelaskan mengapa dan bagaimana fenomena sosial itu terjadi.',
        'Ciri ketiga adalah KUMULATIF. Teori-teori dalam sosiologi tidak berdiri sendiri secara terisolasi atau muncul tiba-tiba dari nol. Teori sosiologi dibangun, disusun, dan dikembangkan atas dasar teori-teori terdahulu yang sudah ada. Sosiolog masa kini menguji kembali teori-teori klasik, lalu memperluas, menyempurnakan, merevisi, dan memperhalus teori tersebut agar relevan dengan perkembangan zaman kontemporer.',
        'Ciri keempat yang sangat krusial adalah NON-ETIS. Sosiologi bertugas mengkaji fenomena sosial apa adanya (das sein), bukan menetapkan apa yang seharusnya terjadi menurut norma moral tertentu (das sollen). Sosiolog tidak bertindak sebagai hakim moral yang menilai apakah suatu tradisi, perilaku tawuran, atau gaya hidup remaja itu "baik", "buruk", "berdosa", atau "terpuji". Fokus utama sosiolog adalah membedah secara objektif: apa faktor pemicunya, bagaimana strukturnya, dan apa dampaknya bagi keteraturan sosial.',
        'Mengenai hakikatnya, sosiologi adalah ilmu sosial (bukan ilmu alam), ilmu kategoris (mengkaji apa yang terjadi, bukan apa yang semestinya), ilmu murni (pure science) sekaligus ilmu terapan (applied science), ilmu abstrak (bukan konkret fisik), serta ilmu rasional dan empiris yang menghasilkan pengertian-pengertian umum.',
      ],
      summaryClue: 'Pos 4 (Ruang Kelas): Di ruang interaksi kelas, kita memahami 4 karakteristik ilmiah sosiologi: Empiris (fakta observasi lapangan), Teoretis (abstraksi sebab-akibat), Kumulatif (perluasan teori lama), dan Non-Etis (menjelaskan fakta secara ilmiah tanpa menilai baik/buruk).',
      glossary: [
        { word: 'Empiris', meaning: 'Berdasarkan pengamatan dan bukti nyata di lapangan serta penalaran akal sehat, bukan spekulasi' },
        { word: 'Teoretis', meaning: 'Penyusunan abstraksi logis yang menjelaskan hubungan sebab-akibat dari hasil observasi' },
        { word: 'Kumulatif', meaning: 'Pengembangan teori sosiologi yang saling menyambung dan memperkaya teori-teori terdahulu' },
        { word: 'Non-Etis', meaning: 'Sikap ilmiah yang tidak menghakimi baik-buruknya suatu fakta sosial, melainkan menjelaskan fakta tersebut secara objektif' },
        { word: 'Das Sein vs Das Sollen', meaning: 'Das sein adalah kenyataan apa adanya; das sollen adalah apa yang seharusnya/ideal menurut nilai dan norma' },
      ],
    },
  },

  // --- POS 5: GURU WALI (SEJARAH PERKEMBANGAN SOSIOLOGI DI INDONESIA / BABAK FINAL) ---
  {
    id: 'pos_5',
    code: 'POS 5 (FINAL)',
    name: 'Guru Wali',
    qrCode: 'SOSIOLOGI-POS-5',
    hint: '👨‍🏫 Menuju Babak Final di dekat GURU WALI KELAS! Temukan kartu QR penutup untuk mengungkap jejak sejarah Sosiologi di bumi Nusantara: dari kearifan lokal, ajaran Ki Hajar Dewantara, hingga pemikiran Selo Soemardjan!',
    isFinal: true,
    isActive: true,
    iconName: 'Award',
    story: {
      chapterNumber: 5,
      title: 'Pos 5: Jejak Sosiologi di Bumi Nusantara (Guru Wali)',
      subtitle: 'Babak Final di Meja Guru Wali: Meneladani kepemimpinan pamong, kearifan lokal, hingga dedikasi Bapak Sosiologi Indonesia Selo Soemardjan',
      imageCaption: 'Perkembangan Sosiologi di Indonesia & Peran Guru Wali: Keteladanan kepemimpinan Ing Ngarso Sung Tulodo Ki Hajar Dewantara, kearifan Serat Wulangreh, hingga transformasi sosial masyarakat modern oleh Prof. Selo Soemardjan.',
      visualHighlights: [
        '👨‍🏫 Figur Guru Wali Kelas: Pendidik, pengayom, dan panutan keteladanan kepemimpinan Ing Ngarso Sung Tulodo',
        '📜 Masa Pra-Kemerdekaan: Ajaran etika sosial dalam Serat Wulangreh karya Sri Paduka Mangkunegara IV',
        '🏫 Ki Hajar Dewantara: Konsep kepemimpinan & sistem pendidikan kemasyarakatan Perguruan Taman Siswa',
        '🎓 Kuliah Pertama (UGM): Diberikan resmi dalam Bahasa Indonesia oleh Prof. Soenario Kolopaking (1948)',
        '🌟 Selo Soemardjan: Bapak Sosiologi Indonesia dengan karya monumental Social Changes in Jogjakarta (1962)',
      ],
      paragraphs: [
        'Selamat tiba di Pos 5 (Babak Final), para Detektif Sosiologi! Di meja Guru Wali Kelas ini, kita menemui sosok pendidik dan pamong yang setiap hari mendampingi, memantau interaksi kelas, dan membimbing keharmonisan siswa. Peran Guru Wali yang sarat keteladanan ini mencerminkan hakikat bahwa pemikiran tentang keteraturan sosial, etika hubungan antarmasyarakat, dan dinamika kebudayaan di Nusantara sesungguhnya telah berakar kuat jauh sebelum masa kemerdekaan melalui kearifan kepemimpinan para leluhur bangsa.',
        'Pada masa kerajaan tradisional Jawa, Sri Paduka Mangkunegara IV dari Surakarta telah menulis karya sastra filosofis "Serat Wulangreh". Naskah ini mengajarkan tata hubungan sosial antargolongan, etika bergaul antara rakyat jelata dengan para pemimpin, serta bagaimana memelihara keselarasan batin dan harmoni sosial di masyarakat.',
        'Memasuki era kebangkitan nasional pada awal abad ke-20, tokoh pendidikan nasional Ki Hajar Dewantara meletakkan dasar-dasar sosiologi pendidikan dan kepemimpinan melalui Perguruan Taman Siswa (berdiri 1922). Ki Hajar merumuskan konsep kepemimpinan sosial yang melegenda dan dipraktikkan para Guru Wali kita: "Ing Ngarso Sung Tulodo" (di depan memberi teladan), "Ing Madyo Mangun Karso" (di tengah membangkitkan semangat), dan "Tut Wuri Handayani" (di belakang memberi dorongan), yang sarat dengan nilai kekeluargaan dan demokrasi kerakyatan khas Indonesia.',
        'Sosiologi formal pertama kali diajarkan di Indonesia pada zaman penjajahan Belanda di Rechtshogeschool (Sekolah Tinggi Hukum) di Batavia (Jakarta) sekitar tahun 1924, namun hanya sebagai mata kuliah penunjang ilmu hukum dan menggunakan buku rujukan bahasa Belanda. Perkuliahan sempat terhenti pada masa pendudukan Jepang (1942–1945).',
        'Titik balik bersejarah terjadi setelah proklamasi kemerdekaan Republik Indonesia. Pada tahun 1948, di Akademi Ilmu Politik Yogyakarta (yang kelak dilebur menjadi Universitas Gadjah Mada), perkuliahan sosiologi untuk pertama kalinya diberikan secara resmi menggunakan BAHASA INDONESIA oleh Prof. Soenario Kolopaking.',
        'Tokoh yang kemudian dinobatkan sebagai "BAPAK SOSIOLOGI INDONESIA" adalah Prof. Dr. Selo Soemardjan (1915–2003). Disertasi doktoral beliau di Cornell University, Amerika Serikat, yang berjudul "Social Changes in Jogjakarta" (1962) menjadi karya sosiologi empiris paling berpengaruh yang membedah bagaimana masyarakat feodal keraton Yogyakarta bertransformasi secara damai menjadi masyarakat republik yang modern dan demokratis. Bersama Soelaeman Soemardi, Selo Soemardjan menerbitkan buku "Setangkai Bunga Sosiologi" (1964) yang menjadi buku pegangan utama mahasiswa sosiologi di seluruh Indonesia.',
      ],
      summaryClue: 'Pos 5 (Guru Wali): Bersama keteladanan Guru Wali, kita merangkum sejarah sosiologi Indonesia: kearifan Serat Wulangreh, kepemimpinan Ki Hajar Dewantara, kuliah pertama Prof. Soenario Kolopaking di UGM, serta ketokohan Prof. Selo Soemardjan (Bapak Sosiologi Indonesia).',
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

export interface ModulAjarStructure {
  identitas: {
    mataPelajaran: string;
    faseKelas: string;
    semester: string;
    alokasiWaktu: string;
    tahunAjaran: string;
    targetPesertaDidik: string;
    modelPembelajaran: string;
    satuanPendidikan: string;
  };
  profilPelajarPancasila: {
    dimensi: string;
    deskripsi: string;
  }[];
  kompetensiAwal: string[];
  saranaPrasarana: string[];
  capaianPembelajaran: string;
  tujuanPembelajaran: {
    nomor: string;
    teks: string;
    posTerkait: string;
  }[];
  pemahamanBermakna: string;
  pertanyaanPemantik: string[];
  kegiatanPembelajaran: {
    pertemuan: number;
    posId: string;
    posName: string;
    topik: string;
    alokasi: string;
    pendahuluan: string[];
    intiInquiry: string[];
    penutup: string[];
  }[];
  diferensiasi: {
    konten: string;
    proses: string;
    produk: string;
  };
  asesmenRencana: {
    diagnostik: string;
    formatif: string;
    sumatif: string;
  };
  refleksi: {
    guru: string[];
    pesertaDidik: string[];
  };
  daftarPustaka: string[];
}

export const SOCIOLOGY_MODUL_AJAR: ModulAjarStructure = {
  identitas: {
    mataPelajaran: 'Sosiologi',
    faseKelas: 'Fase E / Kelas X (Sepuluh) SMA/MA',
    semester: 'Semester 1 (Ganjil)',
    alokasiWaktu: '5 Pertemuan (10 JP @ 45 Menit)',
    tahunAjaran: '2026 / 2027',
    targetPesertaDidik: 'Peserta Didik Reguler / Tipikal (32–36 Siswa)',
    modelPembelajaran: 'Station-Based Contextual Inquiry (Outdoor QR Learning)',
    satuanPendidikan: 'Sekolah Menengah Atas (SMA / MA)',
  },
  profilPelajarPancasila: [
    {
      dimensi: 'Bernalar Kritis',
      deskripsi: 'Peserta didik menganalisis dinamika perubahan sosial, membedah hubungan sebab-akibat Revolusi Industri dan Prancis, serta membandingkan teori sosiologi klasik secara objektif.',
    },
    {
      dimensi: 'Gotong Royong',
      deskripsi: 'Peserta didik berkolaborasi aktif dalam regu investigasi lapangan di 5 pos sekolah, berdiskusi memecahkan teka-teki, dan berbagi tugas pencatatan literasi.',
    },
    {
      dimensi: 'Mandiri',
      deskripsi: 'Peserta didik menyimak artikel di setiap pos secara cermat, mencatat intisari materi penting di buku catatan pribadi, dan menyelesaikan kuis mandiri dengan penuh tanggung jawab.',
    },
    {
      dimensi: 'Berkebinekaan Global',
      deskripsi: 'Peserta didik menelaah sejarah peradaban global di Eropa abad ke-18 dan mengontekstualisasikannya dengan keanekaragaman kearifan sosiologis bangsa Indonesia.',
    },
  ],
  kompetensiAwal: [
    'Peserta didik telah memahami konsep dasar interaksi sosial antarpribadi dan kelompok pada jenjang SMP/MTs.',
    'Peserta didik memiliki kepekaan mengamati fenomena kehidupan sosial di lingkungan sekolah dan sekitarnya.',
  ],
  saranaPrasarana: [
    '5 Pos Lingkungan Sekolah: Pos 1 (Kantin), Pos 2 (Ruang Laboratorium), Pos 3 (Perpustakaan), Pos 4 (Ruang Kelas), dan Pos 5 (Meja Guru Wali).',
    'Perangkat Smartphone / Tablet berkamera untuk memindai QR Code di setiap pos.',
    'Kartu QR Code Cetak laminasi (SOSIOLOGI-POS-1 s/d SOSIOLOGI-POS-5).',
    'Buku tulis catatan literasi sosiologi dan alat tulis masing-masing siswa.',
    'Lembar Kerja Peserta Didik (LKPD) Outdoor Station Inquiry.',
  ],
  capaianPembelajaran:
    'Pada akhir Fase E, peserta didik mampu memahami fungsi sosiologi sebagai ilmu yang mengkaji masyarakat yang memberikan landasan berpikir kritis, analitis, dan solutif terhadap gejala sosial; memahami sejarah perkembangan sosiologi; serta mengidentifikasi karakteristik dan peran sosiologi dalam kehidupan nyata.',
  tujuanPembelajaran: [
    {
      nomor: 'TP 1',
      teks: 'Peserta didik mampu menjelaskan guncangan sosial Revolusi Prancis (1789), dampak mekanisasi Revolusi Industri di Inggris, dan pengaruh Abad Pencerahan (Aufklärung) terhadap lahirnya sosiologi.',
      posTerkait: 'Pos 1: Kantin',
    },
    {
      nomor: 'TP 2',
      teks: 'Peserta didik mampu menganalisis peran Auguste Comte sebagai Bapak Sosiologi Dunia, konsep Fisika Sosial, paham Positivisme, dan Hukum Tiga Tahap Pemikiran Manusia.',
      posTerkait: 'Pos 2: Ruang Laboratorium',
    },
    {
      nomor: 'TP 3',
      teks: 'Peserta didik mampu membandingkan paradigma pemikiran 4 pilar tokoh klasik: Émile Durkheim (Fakta Sosial), Karl Marx (Konflik Kelas), Max Weber (Verstehen), dan Herbert Spencer (Analogi Organik).',
      posTerkait: 'Pos 3: Perpustakaan',
    },
    {
      nomor: 'TP 4',
      teks: 'Peserta didik mampu mengidentifikasi dan membuktikan 4 ciri utama sosiologi (Empiris, Teoretis, Kumulatif, Non-Etis) dalam pengamatan interaksi nyata di lingkungan sekolah.',
      posTerkait: 'Pos 4: Ruang Kelas',
    },
    {
      nomor: 'TP 5',
      teks: 'Peserta didik mampu menelusuri sejarah perkembangan sosiologi di Indonesia dari ajaran kearifan lokal Serat Wulangreh, kepemimpinan Ki Hajar Dewantara, hingga karya monumental Selo Soemardjan.',
      posTerkait: 'Pos 5: Meja Guru Wali (Final)',
    },
  ],
  pemahamanBermakna:
    'Sosiologi lahir bukan dari renungan kosong, melainkan sebagai respons ilmiah atas krisis tatanan masyarakat manusia. Dengan mempelajari sejarah perkembangan sosiologi melalui penjelajahan ruang-ruang nyata di sekolah, peserta didik terlatih memiliki "Imajinasi Sosiologis" (Sociological Imagination)—mampu melihat keterkaitan antara pengalaman personal sehari-hari dengan struktur sosial yang lebih besar secara ilmiah dan non-etis (tanpa menghakimi secara moralistik).',
  pertanyaanPemantik: [
    'Mengapa ketika tatanan masyarakat mengalami kekacauan besar (seperti perang atau revolusi), manusia justru terdorong menciptakan cabang ilmu baru bernama sosiologi?',
    'Dapatkah perilaku manusia dan masalah sosial di sekitar kita diselidiki secara objektif dan empiris selayaknya eksperimen di laboratorium sains?',
    'Mengapa dalam sosiologi kita tidak boleh bertindak sebagai hakim moral yang menentukan suatu perilaku itu "berdosa" atau "terpuji", melainkan harus bersikap Non-Etis?',
    'Bagaimana nilai kepemimpinan "Ing Ngarso Sung Tulodo" Ki Hajar Dewantara dan gagasan Selo Soemardjan membentuk sosiologi berkarakter Indonesia?',
  ],
  kegiatanPembelajaran: [
    {
      pertemuan: 1,
      posId: 'pos_1',
      posName: 'Kantin Sekolah',
      topik: 'Badai Revolusi & Kelahiran Ilmu Masyarakat (Revolusi Industri & Prancis)',
      alokasi: '2 JP (90 Menit)',
      pendahuluan: [
        'Guru membuka pembelajaran dengan salam, doa bersama, dan presensi.',
        'Apersepsi: Guru mengajak peserta didik mengamati dinamika antrean, jual beli, dan pembagian kerja pedagang di kantin sekolah.',
        'Penyampaian Tujuan Pembelajaran dan petunjuk petualangan QR Code di Pos 1.',
      ],
      intiInquiry: [
        'Peserta didik menuju area Kantin Sekolah dan memindai kartu QR Code (SOSIOLOGI-POS-1).',
        'Peserta didik membaca artikel tentang transformasi masyarakat agraris menuju masyarakat industri serta guncangan Revolusi Prancis 1789.',
        'Peserta didik mencatat intisari penting: urbanisasi, eksploitasi kaum buruh, jam kerja 16 jam, dan peran rasionalitas Abad Pencerahan.',
        'Peserta didik mengerjakan 5 butir soal pemahaman di Pos 1.',
      ],
      penutup: [
        'Regu berkumpul kembali untuk memvalidasi intisari catatan.',
        'Guru memberikan umpan balik dan penguatan konsep social order.',
        'Refleksi singkat dan pengantar menuju Pos 2.',
      ],
    },
    {
      pertemuan: 2,
      posId: 'pos_2',
      posName: 'Ruang Laboratorium',
      topik: 'Auguste Comte, Positivisme & Hukum Tiga Tahap Pemikiran Manusia',
      alokasi: '2 JP (90 Menit)',
      pendahuluan: [
        'Guru menyapa peserta didik dan mengaitkan materi krisis sosial di Pos 1 dengan kebutuhan metode ilmiah.',
        'Pertanyaan Pemantik: "Mengapa Comte awalnya menyebut sosiologi sebagai Fisika Sosial?"',
      ],
      intiInquiry: [
        'Peserta didik menuju Ruang Laboratorium dan memindai QR Code (SOSIOLOGI-POS-2).',
        'Mempelajari etimologi kata socius & logos serta buku Cours de Philosophie Positive (1838).',
        'Mendiskusikan Hukum 3 Tahap: Teologis (kekuatan gaib), Metafisik (prinsip abstrak), dan Positif (fakta empiris & hukum sebab-akibat).',
        'Membedah konsep Statika Sosial dan Dinamika Sosial serta menuntaskan 5 soal Pos 2.',
      ],
      penutup: [
        'Guru memfasilitasi tanya jawab tentang penerapan cara berpikir positif di era digital.',
        'Peserta didik merangkum bagan Hukum 3 Tahap di buku tulis catatan.',
      ],
    },
    {
      pertemuan: 3,
      posId: 'pos_3',
      posName: 'Perpustakaan Sekolah',
      topik: 'Empat Pilar Tokoh Klasik Sosiologi (Durkheim, Marx, Weber, Spencer)',
      alokasi: '2 JP (90 Menit)',
      pendahuluan: [
        'Guru mengajak peserta didik memasuki suasana hening literatur perpustakaan.',
        'Menyampaikan misi menjelajahi khazanah 4 pemikir besar sosiologi dunia.',
      ],
      intiInquiry: [
        'Peserta didik memindai QR Code di antara rak buku perpustakaan (SOSIOLOGI-POS-3).',
        'Membaca komparasi pemikiran: Durkheim (Fakta Sosial & Solidaritas Organik), Marx (Konflik Kelas Borjuis-Proletar & Alienasi), Weber (Verstehen & 4 Tindakan Sosial), dan Spencer (Analogi Organik).',
        'Mengisi lembar komparasi tokoh pada LKPD dan menjawab 5 butir soal Pos 3.',
      ],
      penutup: [
        'Diskusi pleno singkat membandingkan pendekatan Durkheim vs Weber.',
        'Pemberian apresiasi atas kerja sama tim di perpustakaan.',
      ],
    },
    {
      pertemuan: 4,
      posId: 'pos_4',
      posName: 'Ruang Kelas',
      topik: 'Ciri-Ciri Utama & Hakikat Sosiologi sebagai Ilmu Pengetahuan',
      alokasi: '2 JP (90 Menit)',
      pendahuluan: [
        'Guru membuka sesi di ruang kelas dan menanyakan: "Apakah obrolan santai tentang gosip di kelas bisa disebut kajian sosiologi?"',
      ],
      intiInquiry: [
        'Peserta didik memindai QR Code di papan tata tertib kelas (SOSIOLOGI-POS-4).',
        'Mengkaji 4 karakteristik ilmiah: Empiris (fakta observasi lapangan), Teoretis (abstraksi kausalitas), Kumulatif (perluasan teori lama), dan Non-Etis (objektif tanpa menghakimi baik/buruk).',
        'Menganalisis fenomena interaksi di kelas berdasarkan prinsip das sein (kenyataan apa adanya) vs das sollen.',
        'Menyelesaikan 5 butir soal di Pos 4.',
      ],
      penutup: [
        'Refleksi penerapan sikap non-etis saat bergaul dengan teman sebaya yang berbeda latar belakang.',
        'Pengarahan teknis menuju Babak Final di meja Guru Wali.',
      ],
    },
    {
      pertemuan: 5,
      posId: 'pos_5',
      posName: 'Meja Guru Wali Kelas',
      topik: 'Sejarah Perkembangan Sosiologi di Indonesia & Peran Selo Soemardjan',
      alokasi: '2 JP (90 Menit)',
      pendahuluan: [
        'Peserta didik mempersiapkan seluruh catatan investigasi dari Pos 1 hingga Pos 4.',
        'Penyampaian misi babak pamungkas di meja Guru Wali.',
      ],
      intiInquiry: [
        'Peserta didik menghadap meja Guru Wali Kelas dan memindai QR Code Final (SOSIOLOGI-POS-5).',
        'Mempelajari sejarah sosiologi Nusantara: Serat Wulangreh, ajaran kepemimpinan Taman Siswa Ki Hajar Dewantara, kuliah perdana bahasa Indonesia oleh Prof. Soenario Kolopaking di UGM (1948), dan Prof. Dr. Selo Soemardjan (Social Changes in Jogjakarta).',
        'Menuntaskan 5 soal sumatif terakhir dan membuka peti penghargaan harta karun ilmu.',
        'Mengumpulkan buku catatan literasi untuk diverifikasi oleh Guru Wali.',
      ],
      penutup: [
        'Evaluasi menyeluruh (Penilaian Sumatif 25 PG & Esai HOTS).',
        'Pemberian sertifikat/piagam Detektif Sosiologi Berprestasi.',
        'Doa penutup dan tindak lanjut pengayaan.',
      ],
    },
  ],
  diferensiasi: {
    konten:
      'Tersedia artikel naratif bergambar dengan kata kunci bertinta warna, glosarium istilah untuk siswa dengan hambatan kosakata, dan teks komparatif mendalam bagi siswa berpencapaian tinggi.',
    proses:
      'Urutan pos 1–4 diacak otomatis pada aplikasi siswa untuk mendukung kerja mandiri kelompok kecil; tutor sebaya dalam kelompok membantu siswa yang membutuhkan asistensi.',
    produk:
      'Peserta didik dapat menyajikan intisari literasi berupa catatan manual di buku tulis, infografis peta konsep digital, atau presentasi lisan singkat di hadapan kelas.',
  },
  asesmenRencana: {
    diagnostik:
      'Tanya jawab awal seputar pengalaman berinteraksi sosial dan observasi lingkungan sekolah saat jam istirahat.',
    formatif:
      'Catatan mandiri di buku tulis literasi setiap pos, keaktifan berdiskusi regu, dan ketepatan menjawab 5 soal latihan di setiap pos.',
    sumatif:
      'Penilaian Sumatif Akhir: Tes Pilihan Ganda (25 Soal A-E) dan Tes Uraian Analitis (4 Soal Kasus HOTS) dengan Rubrik Analitis Berstandar SMA.',
  },
  refleksi: {
    guru: [
      'Apakah metode outdoor station-based inquiry efektif meningkatkan antusiasme siswa belajar teori sosiologi?',
      'Bagian materi atau pos mana yang paling menantang bagi siswa untuk dipahami?',
      'Langkah apa yang perlu diperbaiki untuk pertemuan selanjutnya?',
    ],
    pesertaDidik: [
      'Pengetahuan baru apa yang paling membuka cara pandang saya tentang masyarakat hari ini?',
      'Bagaimana saya dapat menerapkan sikap ilmiah Non-Etis saat berinteraksi di lingkungan sosial?',
      'Apakah kerja sama kelompok saya berjalan solid dan menyenangkan?',
    ],
  },
  daftarPustaka: [
    'Soekanto, Soerjono. (2012). Sosiologi Suatu Pengantar. Jakarta: Rajawali Pers.',
    'Soemardjan, Selo & Soemardi, Soelaeman. (1964). Setangkai Bunga Sosiologi. Jakarta: Yayasan Badan Penerbit Fakultas Ekonomi UI.',
    'Ritzer, George. (2012). Teori Sosiologi Klasik sampai Perkembangan Terakhir Postmodern. Yogyakarta: Pustaka Pelajar.',
    'Giddens, Anthony. (2009). Sociology (6th Edition). Cambridge: Polity Press.',
    'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. (2022). Buku Panduan Guru dan Siswa Sosiologi untuk SMA Kelas X. Jakarta: Pusat Perbukuan.',
  ],
};
