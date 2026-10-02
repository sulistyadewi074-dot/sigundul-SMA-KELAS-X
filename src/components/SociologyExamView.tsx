import React, { useState, useMemo, useEffect } from 'react';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  Printer,
  Copy,
  Check,
  Search,
  Filter,
  Sparkles,
  Award,
  RotateCcw,
  FileText,
  Bookmark,
  Share2,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Play,
  Eye,
  EyeOff,
  SlidersHorizontal,
  Compass,
  MapPin,
  UtensilsCrossed,
  FlaskConical,
  School,
  QrCode,
  Download,
  Info,
  X,
  Layers,
  Calendar,
  UserCheck,
  Target,
  Lightbulb,
  CheckSquare,
  Users,
  Feather,
  ExternalLink,
  BookMarked,
  History,
  AlignLeft,
} from 'lucide-react';
import {
  SOCIOLOGY_QUESTIONS,
  SOCIOLOGY_ESSAY_QUESTIONS,
  SOCIOLOGY_LOCATIONS,
  SOCIOLOGY_POS_CATEGORIES,
  SociologyPosCategory,
} from '../data/sociologyData';
import { Question } from '../types/game';
import { sounds } from '../utils/audio';
import { generateQrDataUrl, downloadQrImage } from '../utils/qr';

interface Props {
  onBack: () => void;
  onActivateSociologyAdventure?: () => void;
  isSociologyAdventureActive?: boolean;
}

type TabType = 'materi' | 'peta_konsep' | 'latihan_soal' | 'panduan_pos' | 'cetak';

export const SociologyExamView: React.FC<Props> = ({
  onBack,
  onActivateSociologyAdventure,
  isSociologyAdventureActive = false,
}) => {
  // Main Tab State - Defaults directly to 'materi' (Materi Pelajaran)
  const [activeTab, setActiveTab] = useState<TabType>('materi');

  // Active Chapter in Materi Pelajaran (1 to 5)
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);

  // Quick check answers state inside the chapter view
  const [quickAnswers, setQuickAnswers] = useState<Record<string, string>>({});
  const [showQuickExplanations, setShowQuickExplanations] = useState<Record<string, boolean>>({});

  // Latihan Soal / Evaluasi Tab States
  const [evalSubTab, setEvalSubTab] = useState<'pg' | 'esai' | 'kuis'>('pg');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [showAnswerKeys, setShowAnswerKeys] = useState(true);
  const [copiedNotice, setCopiedNotice] = useState<string | null>(null);

  // Quiz state
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestionCount, setQuizQuestionCount] = useState<number>(10);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [instantFeedback, setInstantFeedback] = useState(true);

  // Print mode
  const [printDocType, setPrintDocType] = useState<'materi_buku' | 'lembar_soal' | 'qr_cards'>('materi_buku');
  const [qrImages, setQrImages] = useState<Record<string, string>>({});

  // Subtopics mapping
  const subtopicMap: Record<string, string> = {
    pos_1: 'Bab 1: Badai Revolusi Prancis & Industri (Kantin)',
    pos_2: 'Bab 2: Auguste Comte & Positivisme (Ruang Lab)',
    pos_3: 'Bab 3: 4 Pilar Tokoh Klasik Sosiologi (Perpustakaan)',
    pos_4: 'Bab 4: Ciri & Hakikat Ilmu Sosiologi (Ruang Kelas)',
    pos_5: 'Bab 5: Sejarah Sosiologi di Indonesia (Guru Wali)',
  };

  // Generate QR images on mount
  useEffect(() => {
    const generateAllQrs = async () => {
      const urls: Record<string, string> = {};
      for (const cat of SOCIOLOGY_POS_CATEGORIES) {
        urls[cat.posId] = await generateQrDataUrl(cat.qrCode, { width: 280 });
      }
      setQrImages(urls);
    };
    generateAllQrs();
  }, []);

  // Filtered questions in Latihan Soal
  const filteredQuestions = useMemo(() => {
    return SOCIOLOGY_QUESTIONS.filter((q) => {
      const matchTopic = selectedSubtopic === 'all' || q.locationId === selectedSubtopic;
      const matchDiff = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
      const matchQuery =
        searchQuery.trim() === '' ||
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.options?.some((opt) => opt.toLowerCase().includes(searchQuery.toLowerCase())) ||
        q.explanation.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTopic && matchDiff && matchQuery;
    });
  }, [selectedSubtopic, selectedDifficulty, searchQuery]);

  // Handle start quiz
  const handleStartQuiz = () => {
    sounds.playClick();
    const shuffled = [...SOCIOLOGY_QUESTIONS].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(quizQuestionCount, SOCIOLOGY_QUESTIONS.length));
    setQuizQuestions(selected);
    setCurrentQuizIndex(0);
    setUserAnswers({});
    setQuizFinished(false);
    setQuizStarted(true);
  };

  const handleSelectQuizAnswer = (questionId: string, answer: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
    sounds.playClick();
  };

  const handleFinishQuiz = () => {
    sounds.playTreasureChest();
    setQuizFinished(true);
  };

  const quizScore = useMemo(() => {
    if (!quizQuestions.length) return 0;
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quizQuestions.length) * 100);
  }, [quizQuestions, userAnswers]);

  // Answer quick check question in the chapter view
  const handleSelectQuickAnswer = (qId: string, opt: string) => {
    sounds.playClick();
    setQuickAnswers((prev) => ({ ...prev, [qId]: opt }));
    setShowQuickExplanations((prev) => ({ ...prev, [qId]: true }));
  };

  // Copy full question sheet to clipboard
  const handleCopyQuestions = () => {
    let text = `SOAL EVALUASI PEMBELAJARAN SOSIOLOGI KELAS X SMA - SEMESTER 1\n`;
    text += `Materi: Sejarah Perkembangan Sosiologi\n`;
    text += `===========================================================\n\n`;
    text += `A. SOAL PILIHAN GANDA (A-E)\n\n`;
    SOCIOLOGY_QUESTIONS.forEach((q, idx) => {
      text += `${idx + 1}. ${q.question}\n`;
      q.options?.forEach((opt, optIdx) => {
        text += `   ${String.fromCharCode(65 + optIdx)}. ${opt}\n`;
      });
      text += `   Kunci: ${q.correctAnswer}\n   Pembahasan: ${q.explanation}\n\n`;
    });
    navigator.clipboard.writeText(text);
    setCopiedNotice('Soal evaluasi berhasil disalin ke clipboard!');
    setTimeout(() => setCopiedNotice(null), 3000);
  };

  const handleCopyMateriText = () => {
    let text = `MATERI PELAJARAN SOSIOLOGI KELAS X SMA - SEMESTER 1\n`;
    text += `Topik: SEJARAH PERKEMBANGAN SOSIOLOGI\n`;
    text += `===========================================================\n\n`;
    SOCIOLOGY_LOCATIONS.forEach((loc, idx) => {
      if (!loc.story) return;
      text += `BAB ${idx + 1}: ${loc.story.title.toUpperCase()}\n`;
      text += `Subtopik: ${loc.story.subtitle}\n\n`;
      loc.story.paragraphs.forEach((p, pIdx) => {
        text += `Paragraf ${pIdx + 1}:\n${p}\n\n`;
      });
      text += `Rangkuman Intisari:\n${loc.story.summaryClue}\n\n`;
      text += `-----------------------------------------------------------\n\n`;
    });
    navigator.clipboard.writeText(text);
    setCopiedNotice('Seluruh teks materi 5 Bab berhasil disalin ke clipboard!');
    setTimeout(() => setCopiedNotice(null), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const currentChapterLoc = SOCIOLOGY_LOCATIONS[activeChapterIndex] || SOCIOLOGY_LOCATIONS[0];
  const currentChapterStory = currentChapterLoc?.story;
  const currentChapterCat = SOCIOLOGY_POS_CATEGORIES[activeChapterIndex] || SOCIOLOGY_POS_CATEGORIES[0];
  const currentChapterQuestions = SOCIOLOGY_QUESTIONS.filter((q) => q.locationId === currentChapterLoc?.id);

  return (
    <div className="max-w-4xl mx-auto space-y-5 pb-12 select-none print:max-w-none print:m-0 print:p-0">
      {/* Top Hero Banner - Materi Pelajaran Sosiologi */}
      <div className="bg-gradient-to-r from-indigo-800 via-indigo-900 to-purple-950 rounded-3xl p-5 sm:p-7 text-white shadow-xl border-3 border-indigo-300 relative overflow-hidden print:hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-black uppercase tracking-wider text-amber-300 border border-white/30">
                <BookOpen className="w-4 h-4 text-amber-300" />
                MATERI PELAJARAN SOSIOLOGI
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-indigo-500/40 text-[11px] font-bold text-indigo-100 border border-indigo-300/30">
                KELAS X SMA &bull; SEMESTER 1 &bull; FASE E
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight leading-snug drop-shadow-sm">
              Sejarah Perkembangan Sosiologi
            </h1>

            <p className="text-indigo-200 text-xs sm:text-sm font-medium max-w-2xl leading-relaxed">
              Buku teks dan materi pelajaran interaktif: Mengungkap bagaimana guncangan <strong>Revolusi Industri di Inggris</strong> dan <strong>Revolusi Prancis (1789)</strong> membidani ilmu sosiologi di Eropa, pemikiran para tokoh klasik, ciri-ciri keilmuan, hingga jejak perkembangannya di Indonesia.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {onActivateSociologyAdventure && (
              <button
                onClick={() => {
                  sounds.playClick();
                  onActivateSociologyAdventure();
                }}
                className={`px-3.5 py-2 rounded-2xl text-xs font-black shadow-md transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSociologyAdventureActive
                    ? 'bg-emerald-500 text-white border-2 border-emerald-300'
                    : 'bg-amber-400 hover:bg-amber-300 text-amber-950 border-2 border-yellow-200 hover:scale-105'
                }`}
                title="Mulai petualangan interaktif 5 Pos QR Code di sekolah"
              >
                <Sparkles className="w-4 h-4" />
                <span>
                  {isSociologyAdventureActive
                    ? 'Petualangan Pos Aktif'
                    : 'Mulai Petualangan 5 Pos'}
                </span>
              </button>
            )}

            <button
              onClick={() => {
                sounds.playClick();
                onBack();
              }}
              className="px-3 py-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali</span>
            </button>
          </div>
        </div>

        {/* 5 Quick Chapter Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-5 pt-4 border-t border-white/20 text-left">
          {SOCIOLOGY_LOCATIONS.map((loc, idx) => (
            <button
              key={loc.id}
              onClick={() => {
                sounds.playClick();
                setActiveChapterIndex(idx);
                setActiveTab('materi');
              }}
              className={`p-2 rounded-xl border text-xs transition-all cursor-pointer text-left ${
                activeChapterIndex === idx && activeTab === 'materi'
                  ? 'bg-amber-400 text-amber-950 border-amber-300 font-black shadow-md scale-102'
                  : 'bg-white/10 hover:bg-white/20 border-white/20 text-indigo-100'
              }`}
            >
              <div className="text-[10px] uppercase font-black opacity-80">{loc.code} &bull; {loc.name}</div>
              <div className="font-bold text-[11px] truncate mt-0.5">
                {idx === 0 && 'Badai Revolusi'}
                {idx === 1 && 'Auguste Comte'}
                {idx === 2 && '4 Tokoh Klasik'}
                {idx === 3 && 'Ciri Sosiologi'}
                {idx === 4 && 'Sosiologi RI'}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <div className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-2xl p-1.5 shadow-sm border border-slate-200 overflow-x-auto print:hidden">
        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('materi');
          }}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'materi'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Materi 5 Bab</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('peta_konsep');
          }}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'peta_konsep'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-100'
          }`}
        >
          <History className="w-4 h-4" />
          <span>Peta Konsep &amp; Teori</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('latihan_soal');
          }}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'latihan_soal'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-100'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Evaluasi Soal (25 PG)</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('panduan_pos');
          }}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'panduan_pos'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-100'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Panduan 5 Pos QR</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('cetak');
          }}
          className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'cetak'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-100'
          }`}
        >
          <Printer className="w-4 h-4" />
          <span>Cetak Materi &amp; QR</span>
        </button>
      </div>

      {/* Copy Alert Toast */}
      {copiedNotice && (
        <div className="bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm font-bold animate-in fade-in print:hidden">
          <CheckCircle2 className="w-4 h-4" />
          <span>{copiedNotice}</span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 1: TEKS MATERI PELAJARAN LENGKAP (5 BAB PEMBELAJARAN) */}
      {/* ========================================================================= */}
      {activeTab === 'materi' && currentChapterStory && (
        <div className="space-y-5 print:hidden animate-in fade-in">
          {/* Chapter Navigation Header Bar */}
          <div className="bg-white rounded-2xl p-3 shadow-sm border border-slate-200 flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {SOCIOLOGY_LOCATIONS.map((loc, idx) => (
                <button
                  key={loc.id}
                  onClick={() => {
                    sounds.playClick();
                    setActiveChapterIndex(idx);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                    activeChapterIndex === idx
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Bab {idx + 1}: {loc.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyMateriText}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                title="Salin seluruh teks materi pelajaran ke clipboard"
              >
                <Copy className="w-3.5 h-3.5 text-amber-300" />
                <span className="hidden sm:inline">Salin Teks</span>
              </button>
            </div>
          </div>

          {/* MAIN ARTICLE / CHAPTER READING CONTAINER */}
          <div className="bg-white rounded-3xl p-6 sm:p-9 shadow-md border border-slate-200 space-y-6">
            {/* Chapter Heading */}
            <div className="space-y-2 border-b border-slate-100 pb-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-indigo-100 text-indigo-900 font-black text-xs uppercase tracking-wider">
                  BAB {activeChapterIndex + 1} &bull; {currentChapterLoc.name.toUpperCase()}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 font-bold text-xs">
                  Kode QR: {currentChapterLoc.qrCode}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display leading-tight">
                {currentChapterStory.title}
              </h2>

              <p className="text-xs sm:text-sm font-semibold text-indigo-700 leading-relaxed">
                {currentChapterStory.subtitle}
              </p>
            </div>

            {/* Hubungan Lokasi Sekolah dengan Materi Sosiologi */}
            <div className="bg-indigo-50/70 p-4 rounded-2xl border border-indigo-200 space-y-1.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-black text-indigo-950 text-xs uppercase tracking-wider">
                <Compass className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Koneksi Kontekstual Lokasi: Mengapa di {currentChapterLoc.name}?</span>
              </div>
              <p className="text-slate-700 leading-relaxed text-justify">
                {currentChapterCat.locationDescription}
              </p>
            </div>

            {/* Visual Highlights Box */}
            {currentChapterStory.visualHighlights && (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <span className="font-black text-slate-800 uppercase tracking-wider text-[11px] block">
                  Poin-Poin Kunci yang Harus Dikuasai:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                  {currentChapterStory.visualHighlights.map((hl, hlIdx) => (
                    <div key={hlIdx} className="flex items-start gap-2 bg-white p-2 rounded-xl border border-slate-200">
                      <span className="text-indigo-600 font-bold">&bull;</span>
                      <span className="leading-snug">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FULL CHAPTER READING TEXT PARAGRAPHS */}
            <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed text-justify">
              {currentChapterStory.paragraphs.map((para, pIdx) => (
                <div key={pIdx} className="space-y-1">
                  <p className="first-letter:text-2xl first-letter:font-black first-letter:text-indigo-700">
                    {para}
                  </p>
                </div>
              ))}
            </div>

            {/* Rangkuman Intisari Bab */}
            {currentChapterStory.summaryClue && (
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 sm:p-5 rounded-2xl border-2 border-amber-300 text-xs sm:text-sm text-amber-950 space-y-1">
                <span className="font-black text-amber-900 uppercase text-xs block flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Rangkuman Intisari Bab {activeChapterIndex + 1}:
                </span>
                <p className="font-semibold leading-relaxed text-slate-800">
                  {currentChapterStory.summaryClue}
                </p>
              </div>
            )}

            {/* Glosarium Istilah Ilmiah Bab Ini */}
            {currentChapterStory.glossary && (
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <span className="font-black text-slate-800 uppercase tracking-wider text-xs block flex items-center gap-1.5">
                  <BookMarked className="w-4 h-4 text-indigo-600" />
                  Glosarium Istilah Sosiologi (Bab {activeChapterIndex + 1}):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentChapterStory.glossary.map((g, gIdx) => (
                    <div key={gIdx} className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-0.5">
                      <strong className="text-indigo-900 block text-xs">{g.word}</strong>
                      <p className="text-slate-600 text-[11px] leading-snug">{g.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CEK PEMAHAMAN CEPAT (5 SOAL LATIHAN LANGSUNG DI BAWAH MATERI) */}
            <div className="pt-6 border-t-2 border-dashed border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-black text-base text-slate-900 flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-emerald-600" />
                    <span>Cek Pemahaman Materi Bab {activeChapterIndex + 1} (5 Soal Latihan)</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Uji pemahaman langsung setelah membaca materi di atas. Klik opsi untuk memeriksa jawaban!
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-900 font-bold text-xs rounded-lg">
                  Latihan Mandiri
                </span>
              </div>

              <div className="space-y-3.5">
                {currentChapterQuestions.map((q, qIdx) => {
                  const selectedOpt = quickAnswers[q.id];
                  const isAnswered = !!selectedOpt;
                  const isCorrect = selectedOpt === q.correctAnswer;
                  const showExplanation = showQuickExplanations[q.id];

                  return (
                    <div
                      key={q.id}
                      className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200 text-xs sm:text-sm space-y-2.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-black text-indigo-900 bg-white px-2 py-0.5 rounded-md border border-slate-200 text-xs">
                          Pertanyaan {qIdx + 1}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500 capitalize">
                          Tingkat: {q.difficulty}
                        </span>
                      </div>

                      <p className="font-bold text-slate-900 leading-relaxed">
                        {q.question}
                      </p>

                      <div className="grid grid-cols-1 gap-1.5 pl-1">
                        {q.options?.map((opt, optIdx) => {
                          const letter = String.fromCharCode(65 + optIdx);
                          const isThisSelected = selectedOpt === opt;
                          const isThisCorrect = opt === q.correctAnswer;

                          let btnClass = 'bg-white hover:bg-indigo-50/50 border-slate-200 text-slate-800';
                          if (isAnswered) {
                            if (isThisCorrect) {
                              btnClass = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                            } else if (isThisSelected && !isThisCorrect) {
                              btnClass = 'bg-rose-100 border-rose-400 text-rose-950 font-bold';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectQuickAnswer(q.id, opt)}
                              className={`p-2.5 rounded-xl border text-left flex items-start gap-2.5 transition-all cursor-pointer ${btnClass}`}
                            >
                              <span className="font-black shrink-0">{letter}.</span>
                              <span className="flex-1 leading-snug">{opt}</span>
                              {isAnswered && isThisCorrect && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 ml-auto shrink-0" />
                              )}
                              {isAnswered && isThisSelected && !isThisCorrect && (
                                <XCircle className="w-4 h-4 text-rose-600 ml-auto shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {showExplanation && (
                        <div
                          className={`p-3 rounded-xl border text-xs leading-relaxed animate-in fade-in ${
                            isCorrect
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                              : 'bg-rose-50 border-rose-300 text-rose-950'
                          }`}
                        >
                          <div className="font-bold mb-0.5">
                            {isCorrect ? '✅ Jawaban Anda Tepat!' : `❌ Kurang Tepat! Kunci Jawaban: ${q.correctAnswer}`}
                          </div>
                          <p className="text-slate-700">
                            <strong>Pembahasan: </strong>
                            {q.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Chapter Switcher Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <button
                onClick={() => {
                  sounds.playClick();
                  setActiveChapterIndex((prev) => Math.max(0, prev - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                disabled={activeChapterIndex === 0}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 disabled:opacity-30 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Bab Sebelumnya</span>
              </button>

              <span className="text-xs font-bold text-slate-500">
                Bab {activeChapterIndex + 1} dari 5
              </span>

              <button
                onClick={() => {
                  sounds.playClick();
                  if (activeChapterIndex < SOCIOLOGY_LOCATIONS.length - 1) {
                    setActiveChapterIndex((prev) => prev + 1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    setActiveTab('latihan_soal');
                  }
                }}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              >
                <span>{activeChapterIndex < SOCIOLOGY_LOCATIONS.length - 1 ? 'Bab Selanjutnya' : 'Ke Evaluasi Soal'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: PETA KONSEP & GARIS WAKTU TEORI SOSIOLOGI */}
      {/* ========================================================================= */}
      {activeTab === 'peta_konsep' && (
        <div className="space-y-5 print:hidden animate-in fade-in">
          {/* Header */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <History className="w-5 h-5 text-indigo-600" />
              <span>Peta Konsep &amp; Garis Waktu Kronologis Sejarah Sosiologi</span>
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              Ringkasan komprehensif alur evolusi pemikiran sosiologi dari masa Revolusi Eropa hingga perkembangannya di Indonesia.
            </p>
          </div>

          {/* Garis Waktu Sejarah */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200 space-y-5">
            <h3 className="text-sm sm:text-base font-black text-slate-900 border-b pb-2">
              📅 Garis Waktu Titik Balik Kelahiran Sosiologi Dunia
            </h3>

            <div className="space-y-4 pl-3 border-l-2 border-indigo-400">
              <div className="relative pl-5">
                <span className="w-3.5 h-3.5 rounded-full bg-amber-500 absolute -left-[23px] top-1 border-2 border-white ring-2 ring-amber-300"></span>
                <span className="text-[11px] font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                  Abad ke-18 &bull; 1789
                </span>
                <h4 className="font-black text-slate-900 text-sm mt-1">
                  Revolusi Prancis &amp; Revolusi Industri di Inggris
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                  Runtuhnya monarki absolut Prancis dan pergeseran masyarakat agraris menuju pabrik uap melahirkan krisis tatanan sosial, urbanisasi ekstrem, dan pemerasan buruh.
                </p>
              </div>

              <div className="relative pl-5">
                <span className="w-3.5 h-3.5 rounded-full bg-indigo-600 absolute -left-[23px] top-1 border-2 border-white ring-2 ring-indigo-300"></span>
                <span className="text-[11px] font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                  Tahun 1838
                </span>
                <h4 className="font-black text-slate-900 text-sm mt-1">
                  Auguste Comte Mencetuskan Istilah &ldquo;Sosiologi&rdquo;
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                  Dalam Cours de Philosophie Positive jilid ke-4, Comte merumuskan Positivisme dan Hukum Tiga Tahap: Teologis, Metafisik, dan Positif/Ilmiah.
                </p>
              </div>

              <div className="relative pl-5">
                <span className="w-3.5 h-3.5 rounded-full bg-purple-600 absolute -left-[23px] top-1 border-2 border-white ring-2 ring-purple-300"></span>
                <span className="text-[11px] font-black text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                  Akhir Abad ke-19 s/d Awal Abad ke-20
                </span>
                <h4 className="font-black text-slate-900 text-sm mt-1">
                  Matangnya 4 Pilar Teori Sosiologi Klasik
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                  Émile Durkheim memformalkan Fakta Sosial, Karl Marx merumuskan Konflik Kelas, Max Weber memperkenalkan Metode Verstehen, dan Herbert Spencer mengembangkan Evolusi Sosial.
                </p>
              </div>

              <div className="relative pl-5">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 absolute -left-[23px] top-1 border-2 border-white ring-2 ring-emerald-300"></span>
                <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  Tahun 1948 s/d 1962 (Indonesia)
                </span>
                <h4 className="font-black text-slate-900 text-sm mt-1">
                  Kelahiran Sosiologi Indonesia &amp; Prof. Dr. Selo Soemardjan
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                  Kuliah pertama bahasa Indonesia oleh Prof. Soenario Kolopaking di UGM (1948), disusul mahakarya Selo Soemardjan &ldquo;Social Changes in Jogjakarta&rdquo; (1962).
                </p>
              </div>
            </div>
          </div>

          {/* Matriks Perbandingan 4 Tokoh Klasik */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200 space-y-4">
            <h3 className="text-sm sm:text-base font-black text-slate-900 border-b pb-2">
              🏛️ Matriks Perbandingan 4 Pilar Tokoh Klasik Sosiologi Dunia
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-slate-200 border-collapse">
                <thead>
                  <tr className="bg-indigo-50/80 text-indigo-950 font-bold border-b border-slate-200">
                    <th className="p-2.5">Tokoh</th>
                    <th className="p-2.5">Fokus Kajian Utama</th>
                    <th className="p-2.5">Konsep Sentral</th>
                    <th className="p-2.5">Pendekatan / Metode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-2.5 font-bold text-slate-900">Émile Durkheim</td>
                    <td className="p-2.5">Struktur Makro &amp; Keteraturan Sosial</td>
                    <td className="p-2.5">Fakta Sosial, Solidaritas Mekanik vs Organik, Studi Bunuh Diri</td>
                    <td className="p-2.5">Kuantitatif Positivistik (Fakta sosial diperlakukan sebagai barang/benda)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-slate-900">Karl Marx</td>
                    <td className="p-2.5">Struktur Ekonomi &amp; Pertentangan Kelas</td>
                    <td className="p-2.5">Borjuis vs Proletar, Alienasi Kaum Buruh, Materialisme Historis</td>
                    <td className="p-2.5">Dialektika Kritis &amp; Konflik Sosial</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-slate-900">Max Weber</td>
                    <td className="p-2.5">Makna Subjektif Tindakan Individu</td>
                    <td className="p-2.5">4 Tipe Tindakan Sosial, Etika Protestan &amp; Spirit Kapitalisme</td>
                    <td className="p-2.5">Kualitatif Interpretatif (&ldquo;Verstehen&rdquo; pemahaman bermakna)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-slate-900">Herbert Spencer</td>
                    <td className="p-2.5">Evolusi dan Perubahan Masyarakat</td>
                    <td className="p-2.5">Analogi Organik, Survival of the Fittest</td>
                    <td className="p-2.5">Evolusioner Biologis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 4 Karakteristik Ilmu Sosiologi */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200 space-y-4">
            <h3 className="text-sm sm:text-base font-black text-slate-900 border-b pb-2">
              ⚖️ 4 Ciri Karakteristik Utama Sosiologi sebagai Ilmu
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                <strong className="text-amber-950 font-black text-sm block">1. EMPIRIS</strong>
                <p className="text-slate-700 leading-relaxed">
                  Didasarkan pada hasil observasi kenyataan lapangan dan akal sehat, bukan hasil spekulasi atau ramalan takhayul.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-1">
                <strong className="text-blue-950 font-black text-sm block">2. TEORETIS</strong>
                <p className="text-slate-700 leading-relaxed">
                  Menyusun abstraksi kerangka logis hubungan sebab-akibat (kausalitas) dari data observasi yang dikumpulkan.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-1">
                <strong className="text-purple-950 font-black text-sm block">3. KUMULATIF</strong>
                <p className="text-slate-700 leading-relaxed">
                  Teori dibangun, diperluas, dan disempurnakan berdasarkan teori-teori terdahulu agar relevan dengan zaman.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                <strong className="text-emerald-950 font-black text-sm block">4. NON-ETIS</strong>
                <p className="text-slate-700 leading-relaxed">
                  Tidak menghakimi baik-buruk atau benar-salahnya fakta sosial, melainkan membedah faktor penyebabnya secara objektif (das sein).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: EVALUASI PEMAHAMAN & BANK SOAL (25 PG + 4 ESAI HOTS) */}
      {/* ========================================================================= */}
      {activeTab === 'latihan_soal' && (
        <div className="space-y-4 print:hidden animate-in fade-in">
          {/* Sub Navigation Bar */}
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setEvalSubTab('pg')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  evalSubTab === 'pg'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                1. Soal Pilihan Ganda (25)
              </button>
              <button
                onClick={() => setEvalSubTab('esai')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  evalSubTab === 'esai'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                2. Soal Esai HOTS (4)
              </button>
              <button
                onClick={() => setEvalSubTab('kuis')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  evalSubTab === 'kuis'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                3. Uji Mandiri / Kuis
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowAnswerKeys(!showAnswerKeys)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
                  showAnswerKeys
                    ? 'bg-indigo-50 text-indigo-900 border-indigo-200'
                    : 'bg-slate-100 text-slate-700 border-slate-300'
                }`}
              >
                {showAnswerKeys ? <Eye className="w-3.5 h-3.5 text-indigo-600" /> : <EyeOff className="w-3.5 h-3.5 text-slate-500" />}
                <span>{showAnswerKeys ? 'Sembunyikan Kunci' : 'Tampilkan Kunci'}</span>
              </button>

              <button
                onClick={handleCopyQuestions}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5 text-amber-300" />
                <span>Salin Soal</span>
              </button>
            </div>
          </div>

          {/* EVALUASI SUB-TAB 1: PILIHAN GANDA (25 SOAL) */}
          {evalSubTab === 'pg' && (
            <div className="space-y-4">
              {/* Filter */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 space-y-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Cari kata kunci soal (misal: Comte, Durkheim, Weber, Empiris, Selo, Kantin)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-indigo-500 focus:bg-white"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-500">Filter Bab:</span>
                  <button
                    onClick={() => setSelectedSubtopic('all')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      selectedSubtopic === 'all'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Semua Bab (25)
                  </button>
                  {['pos_1', 'pos_2', 'pos_3', 'pos_4', 'pos_5'].map((pid, idx) => (
                    <button
                      key={pid}
                      onClick={() => setSelectedSubtopic(pid)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                        selectedSubtopic === pid
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      Bab {idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Questions list */}
              <div className="space-y-4">
                {filteredQuestions.map((q, idx) => (
                  <div
                    key={q.id}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:border-indigo-300 transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-black text-xs flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-black text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded-lg border border-indigo-200">
                          {subtopicMap[q.locationId] || q.locationId}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase">
                        Tingkat: {q.difficulty}
                      </span>
                    </div>

                    <p className="text-slate-900 font-bold text-xs sm:text-sm leading-relaxed">
                      {q.question}
                    </p>

                    <div className="grid grid-cols-1 gap-1.5 pl-1">
                      {q.options?.map((opt, optIdx) => {
                        const letter = String.fromCharCode(65 + optIdx);
                        const isCorrect = opt === q.correctAnswer;
                        return (
                          <div
                            key={optIdx}
                            className={`p-2 rounded-xl flex items-start gap-2 text-xs border ${
                              showAnswerKeys && isCorrect
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                                : 'bg-slate-50 border-slate-200 text-slate-800'
                            }`}
                          >
                            <span className="font-bold shrink-0">{letter}.</span>
                            <span className="flex-1">{opt}</span>
                            {showAnswerKeys && isCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {showAnswerKeys && (
                      <div className="bg-indigo-50/70 p-2.5 rounded-xl border border-indigo-200 text-xs text-indigo-950 space-y-0.5">
                        <span className="font-bold text-indigo-900">Pembahasan: </span>
                        <span>{q.explanation}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EVALUASI SUB-TAB 2: SOAL ESAI HOTS */}
          {evalSubTab === 'esai' && (
            <div className="space-y-4">
              {SOCIOLOGY_ESSAY_QUESTIONS.map((e) => (
                <div
                  key={e.id}
                  className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200 space-y-3.5"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-black text-sm text-purple-950">
                      Soal Uraian Studi Kasus #{e.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 font-bold text-xs">
                      {e.cognitiveLevel}
                    </span>
                  </div>

                  {e.stimulus && (
                    <div className="bg-amber-50/70 p-3 rounded-xl border-l-4 border-amber-500 text-xs text-amber-950 italic">
                      &ldquo;{e.stimulus}&rdquo;
                    </div>
                  )}

                  <p className="font-bold text-slate-900 text-xs sm:text-sm leading-relaxed">
                    {e.question}
                  </p>

                  <div className="bg-indigo-50/70 p-3.5 rounded-2xl border border-indigo-200 text-xs space-y-1">
                    <strong className="text-indigo-950 block uppercase text-[10px] tracking-wider">
                      Model Kunci Jawaban Lengkap:
                    </strong>
                    <div className="text-slate-700 whitespace-pre-line leading-relaxed">
                      {e.sampleAnswer}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs space-y-1.5">
                    <strong className="text-slate-800 text-[11px] block">
                      Rubrik Penskoran Analitis (Skor Maksimal: {e.scoringRubric.maxScore} Poin):
                    </strong>
                    {e.scoringRubric.criteria.map((c, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 bg-white p-1.5 rounded-lg border border-slate-200 text-slate-700">
                        <span className="w-8 py-0.5 text-center bg-purple-100 text-purple-900 font-bold text-[10px] rounded shrink-0">
                          {c.points} pt
                        </span>
                        <span className="leading-snug">{c.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EVALUASI SUB-TAB 3: SIMULATOR KUIS */}
          {evalSubTab === 'kuis' && (
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 text-center space-y-4">
              {!quizStarted ? (
                <div className="space-y-4 max-w-md mx-auto py-4">
                  <div className="w-16 h-16 mx-auto rounded-3xl bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center text-indigo-600">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">Uji Mandiri Pemahaman Sosiologi</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Kerjakan simulasi kuis interaktif dengan umpan balik instan untuk menguji kesiapan Anda.
                    </p>
                  </div>
                  <div className="flex justify-center gap-2">
                    {[5, 10, 25].map((cnt) => (
                      <button
                        key={cnt}
                        onClick={() => setQuizQuestionCount(cnt)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${
                          quizQuestionCount === cnt
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {cnt} Soal
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleStartQuiz}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Mulai Kuis Sekarang</span>
                  </button>
                </div>
              ) : !quizFinished ? (
                <div className="text-left space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="text-xs font-black text-indigo-900 bg-indigo-50 px-2.5 py-1 rounded-lg">
                      Soal {currentQuizIndex + 1} dari {quizQuestions.length}
                    </span>
                    <button
                      onClick={handleFinishQuiz}
                      className="text-xs font-bold text-rose-600 hover:underline cursor-pointer"
                    >
                      Selesai
                    </button>
                  </div>

                  {quizQuestions[currentQuizIndex] && (
                    <div className="space-y-4">
                      <p className="font-bold text-sm sm:text-base text-slate-900">
                        {quizQuestions[currentQuizIndex].question}
                      </p>
                      <div className="space-y-2">
                        {quizQuestions[currentQuizIndex].options?.map((opt, optIdx) => {
                          const letter = String.fromCharCode(65 + optIdx);
                          const isSelected = userAnswers[quizQuestions[currentQuizIndex].id] === opt;
                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectQuizAnswer(quizQuestions[currentQuizIndex].id, opt)}
                              className={`w-full p-2.5 rounded-xl text-xs sm:text-sm text-left flex items-start gap-2.5 border cursor-pointer ${
                                isSelected
                                  ? 'bg-indigo-600 text-white font-bold border-indigo-700 shadow-sm'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                              }`}
                            >
                              <span className="font-bold shrink-0">{letter}.</span>
                              <span className="flex-1">{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex justify-between pt-3 border-t">
                        <button
                          onClick={() => setCurrentQuizIndex((p) => Math.max(0, p - 1))}
                          disabled={currentQuizIndex === 0}
                          className="px-3 py-1.5 border rounded-lg text-xs font-bold disabled:opacity-30 cursor-pointer"
                        >
                          Sebelumnya
                        </button>
                        {currentQuizIndex < quizQuestions.length - 1 ? (
                          <button
                            onClick={() => setCurrentQuizIndex((p) => p + 1)}
                            className="px-4 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold cursor-pointer"
                          >
                            Selanjutnya
                          </button>
                        ) : (
                          <button
                            onClick={handleFinishQuiz}
                            className="px-4 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-black cursor-pointer"
                          >
                            Nilai Kuis
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-3 py-4">
                  <div className="text-4xl">🏆</div>
                  <h3 className="text-2xl font-black text-slate-900">Nilai Akhir: {quizScore} / 100</h3>
                  <button
                    onClick={() => setQuizStarted(false)}
                    className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl text-xs cursor-pointer"
                  >
                    Ulangi Kuis
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: PANDUAN 5 POS QR SEKOLAH (INQUIRY BERBASIS LOKASI) */}
      {/* ========================================================================= */}
      {activeTab === 'panduan_pos' && (
        <div className="space-y-4 print:hidden animate-in fade-in">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-indigo-200 shadow-sm flex items-center justify-between gap-3">
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-indigo-600" />
                <span>Panduan Penyelidikan 5 Pos Sekolah</span>
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Petunjuk praktis bagi siswa untuk menemukan kartu QR Code di lingkungan sekolah dan membaca materi.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {SOCIOLOGY_POS_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.posId}
                className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 space-y-3"
              >
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <div>
                      <strong className="text-sm font-black text-slate-900">{cat.categoryName}</strong>
                      <span className="text-xs text-slate-500 block">Lokasi: {cat.locationName}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
                    {cat.qrCode}
                  </span>
                </div>

                <div className="text-xs space-y-1 bg-amber-50/70 p-3 rounded-xl border border-amber-200">
                  <span className="font-extrabold text-amber-950 uppercase text-[10px] block">
                    Petunjuk Teka-Teki Lapangan:
                  </span>
                  <p className="italic text-slate-700">&ldquo;{cat.riddleHint}&rdquo;</p>
                </div>

                <div className="flex justify-end gap-2 pt-1">
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setActiveChapterIndex(idx);
                      setActiveTab('materi');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-900 border border-indigo-200 text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Baca Materi Bab {idx + 1}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: PUSAT CETAK MATERI BUKU & KARTU QR */}
      {/* ========================================================================= */}
      {activeTab === 'cetak' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Pusat Cetak Buku Materi &amp; Kartu QR</h3>
              <p className="text-xs text-slate-500">Pilih format dokumen untuk dicetak atau disimpan ke PDF.</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
                <button
                  onClick={() => setPrintDocType('materi_buku')}
                  className={`px-3 py-1.5 rounded-lg cursor-pointer ${
                    printDocType === 'materi_buku' ? 'bg-white text-indigo-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Buku Materi 5 Bab
                </button>
                <button
                  onClick={() => setPrintDocType('lembar_soal')}
                  className={`px-3 py-1.5 rounded-lg cursor-pointer ${
                    printDocType === 'lembar_soal' ? 'bg-white text-indigo-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Lembar Soal Ujian
                </button>
                <button
                  onClick={() => setPrintDocType('qr_cards')}
                  className={`px-3 py-1.5 rounded-lg cursor-pointer ${
                    printDocType === 'qr_cards' ? 'bg-white text-indigo-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Kartu QR 5 Pos
                </button>
              </div>

              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak / PDF</span>
              </button>
            </div>
          </div>

          {/* DOKUMEN CETAK 1: BUKU MATERI PELAJARAN 5 BAB LENGKAP */}
          {printDocType === 'materi_buku' && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-slate-300 text-slate-900 space-y-8 print:border-none print:shadow-none print:p-0 print:rounded-none">
              <div className="border-b-3 border-slate-900 pb-4 text-center space-y-1">
                <h1 className="text-xl sm:text-2xl font-black uppercase tracking-wider">
                  BUKU MATERI PELAJARAN SOSIOLOGI
                </h1>
                <h2 className="text-base sm:text-lg font-bold text-slate-800 uppercase">
                  KELAS X SMA/MA &bull; SEMESTER 1 (FASE E)
                </h2>
                <p className="text-xs text-slate-600 font-semibold">
                  Materi: <strong>Sejarah Perkembangan Sosiologi &amp; Tokoh-Tokoh Klasik</strong>
                </p>
              </div>

              <div className="space-y-8">
                {SOCIOLOGY_LOCATIONS.map((loc, idx) => {
                  if (!loc.story) return null;
                  return (
                    <div key={loc.id} className="space-y-3 break-inside-avoid border-b pb-6 border-slate-200">
                      <div className="space-y-1">
                        <span className="text-xs font-black uppercase text-indigo-900 bg-slate-100 px-2.5 py-0.5 rounded">
                          BAB {idx + 1} &bull; LOKASI: {loc.name.toUpperCase()}
                        </span>
                        <h3 className="text-lg font-black text-slate-900">
                          {loc.story.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-600 italic">
                          {loc.story.subtitle}
                        </p>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-800 leading-relaxed text-justify">
                        {loc.story.paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>

                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
                        <strong>Rangkuman Intisari Bab {idx + 1}: </strong>
                        <span>{loc.story.summaryClue}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* DOKUMEN CETAK 2: LEMBAR SOAL UJIAN */}
          {printDocType === 'lembar_soal' && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-slate-300 text-slate-900 space-y-6 print:border-none print:shadow-none print:p-0 print:rounded-none">
              <div className="border-b-2 border-slate-900 pb-3 text-center space-y-1">
                <h2 className="text-base sm:text-lg font-black uppercase">
                  LEMBAR EVALUASI PEMBELAJARAN SOSIOLOGI KELAS X
                </h2>
                <p className="text-xs text-slate-600">
                  Materi: <strong>Sejarah Perkembangan Sosiologi (25 PG &amp; 4 Esai HOTS)</strong>
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="font-bold border-b pb-1">A. PILIHAN GANDA</div>
                {SOCIOLOGY_QUESTIONS.map((q, idx) => (
                  <div key={q.id} className="space-y-1 break-inside-avoid">
                    <p className="font-bold">{idx + 1}. {q.question}</p>
                    <div className="grid grid-cols-1 gap-0.5 pl-4">
                      {q.options?.map((opt, optIdx) => (
                        <div key={optIdx} className="flex items-start gap-2">
                          <span className="font-bold">{String.fromCharCode(65 + optIdx)}.</span>
                          <span>{opt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="font-bold border-b pb-1 pt-4">B. URAIAN / ESAI ANALITIS</div>
                {SOCIOLOGY_ESSAY_QUESTIONS.map((e) => (
                  <div key={e.id} className="space-y-1.5 break-inside-avoid">
                    <p className="font-bold">Soal Nomor {e.number}:</p>
                    {e.stimulus && <p className="italic text-slate-600 bg-slate-50 p-2 rounded">&ldquo;{e.stimulus}&rdquo;</p>}
                    <p className="font-semibold">{e.question}</p>
                    <div className="h-16 border-b border-dashed border-slate-300 text-[10px] text-slate-400 pt-2">
                      Lembar Jawaban Siswa:
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DOKUMEN CETAK 3: KARTU QR 5 POS */}
          {printDocType === 'qr_cards' && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-300 text-slate-900 space-y-6 print:border-none print:shadow-none print:p-0 print:rounded-none">
              <div className="text-center space-y-1 pb-4 border-b-2 border-slate-800 print:hidden">
                <h2 className="text-lg font-black uppercase">
                  LEMBAR CETAK KARTU QR CODE &bull; 5 POS PENYELIDIKAN SEKOLAH
                </h2>
                <p className="text-xs text-slate-600">
                  Gunting kartu di sepanjang garis putus-putus, lalu tempelkan masing-masing kartu di 5 lokasi sekolah (Kantin, Lab, Perpustakaan, Ruang Kelas, Meja Guru Wali).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4">
                {SOCIOLOGY_POS_CATEGORIES.map((cat) => (
                  <div
                    key={cat.posId}
                    className="border-2 border-dashed border-slate-400 rounded-3xl p-5 space-y-3 bg-white text-slate-900 break-inside-avoid print:p-4 print:border-slate-800"
                  >
                    <div className="flex items-center justify-between border-b pb-2 border-slate-200">
                      <div>
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-indigo-100 text-indigo-900">
                          {cat.code}
                        </span>
                        <h4 className="text-base font-black text-slate-900 mt-1">
                          {cat.categoryName}
                        </h4>
                      </div>
                      <span className="text-xs font-bold text-slate-500">
                        Tempel di: <strong>{cat.locationName}</strong>
                      </span>
                    </div>

                    <div className="text-center py-2 bg-slate-50 rounded-2xl border border-slate-200 print:bg-transparent">
                      {qrImages[cat.posId] ? (
                        <img
                          src={qrImages[cat.posId]}
                          alt={`${cat.categoryName} QR`}
                          className="w-40 h-40 mx-auto object-contain"
                        />
                      ) : (
                        <div className="w-40 h-40 mx-auto bg-slate-200 flex items-center justify-center font-bold text-xs">
                          Membuat QR...
                        </div>
                      )}
                      <div className="font-mono text-xs font-bold text-slate-700 mt-1">
                        {cat.qrCode}
                      </div>
                    </div>

                    <div className="text-xs space-y-1">
                      <div className="font-bold text-indigo-900">Submateri: {cat.subtopicTitle}</div>
                      <p className="text-[11px] text-slate-600 italic">
                        Petunjuk Siswa: &ldquo;{cat.riddleHint}&rdquo;
                      </p>
                    </div>

                    <div className="text-[9px] text-slate-400 border-t pt-1 flex justify-between">
                      <span>Materi Pelajaran Sosiologi Kelas X SMA</span>
                      <span>Scan dengan Kamera Smartphone</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
