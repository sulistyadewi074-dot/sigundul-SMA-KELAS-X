import React, { useState, useMemo } from 'react';
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
  GraduationCap,
  Play,
  Eye,
  EyeOff,
  SlidersHorizontal,
} from 'lucide-react';
import { SOCIOLOGY_QUESTIONS, SOCIOLOGY_ESSAY_QUESTIONS, SOCIOLOGY_LOCATIONS } from '../data/sociologyData';
import { Question } from '../types/game';
import { sounds } from '../utils/audio';

interface Props {
  onBack: () => void;
  onActivateSociologyAdventure?: () => void;
  isSociologyAdventureActive?: boolean;
}

type TabType = 'bank' | 'quiz' | 'essay' | 'print';

export const SociologyExamView: React.FC<Props> = ({
  onBack,
  onActivateSociologyAdventure,
  isSociologyAdventureActive = false,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('bank');

  // Bank Soal states
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
  const [quizTimeLeft, setQuizTimeLeft] = useState<number>(600); // 10 mins
  const [instantFeedback, setInstantFeedback] = useState(true);

  // Subtopics mapping
  const subtopicMap: Record<string, string> = {
    pos_1: 'Pos 1: Revolusi Prancis & Industri (Latar Belakang)',
    pos_2: 'Pos 2: Auguste Comte & Positivisme (Hukum 3 Tahap)',
    pos_3: 'Pos 3: Tokoh Klasik (Durkheim, Marx, Weber, Spencer)',
    pos_4: 'Pos 4: Ciri-Ciri & Hakikat Sosiologi',
    pos_5: 'Pos 5: Sosiologi di Indonesia (Selo Soemardjan)',
  };

  // Filtered questions in Bank Soal
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
    setQuizTimeLeft(quizQuestionCount * 90); // 1.5 min per question
    setQuizStarted(true);
  };

  // Answer a question in quiz
  const handleSelectQuizAnswer = (questionId: string, answer: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
    sounds.playClick();
  };

  // Finish quiz
  const handleFinishQuiz = () => {
    sounds.playTreasureChest();
    setQuizFinished(true);
  };

  // Calculate score
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

  // Copy full question sheet to clipboard
  const handleCopyQuestions = () => {
    let text = `SOAL PENILAIAN SUMATIF SOSIOLOGI KELAS X SMA - SEMESTER 1\n`;
    text += `Materi: Sejarah Perkembangan Sosiologi\n`;
    text += `Tahun Ajaran: 2026/2027 | Jenjang: SMA/MA Fase E\n`;
    text += `===========================================================\n\n`;
    text += `A. SOAL PILIHAN GANDA (Pilihlah salah satu jawaban A, B, C, D, atau E yang paling tepat!)\n\n`;

    SOCIOLOGY_QUESTIONS.forEach((q, idx) => {
      text += `${idx + 1}. ${q.question}\n`;
      q.options?.forEach((opt, optIdx) => {
        const letter = String.fromCharCode(65 + optIdx);
        text += `   ${letter}. ${opt}\n`;
      });
      text += `\n`;
    });

    text += `\nB. SOAL URAIAN / ESAI ANALITIS\n\n`;
    SOCIOLOGY_ESSAY_QUESTIONS.forEach((e) => {
      text += `${e.number}. Stimulus:\n${e.stimulus}\n`;
      text += `Pertanyaan: ${e.question}\n\n`;
    });

    text += `\n===========================================================\n`;
    text += `KUNCI JAWABAN & PEMBAHASAN LENGKAP:\n`;
    SOCIOLOGY_QUESTIONS.forEach((q, idx) => {
      const correctIdx = q.options?.indexOf(q.correctAnswer) ?? -1;
      const letter = correctIdx >= 0 ? String.fromCharCode(65 + correctIdx) : '-';
      text += `${idx + 1}. Jawaban: ${letter} (${q.correctAnswer})\n   Pembahasan: ${q.explanation}\n\n`;
    });

    navigator.clipboard.writeText(text);
    setCopiedNotice('Soal & Kunci berhasil disalin ke clipboard!');
    setTimeout(() => setCopiedNotice(null), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-5 pb-12 select-none print:max-w-none print:m-0 print:p-0">
      {/* Top Header Card */}
      <div className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-purple-900 rounded-3xl p-5 sm:p-7 text-white shadow-xl border-3 border-indigo-300 relative overflow-hidden print:hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-black uppercase tracking-wider text-indigo-100 border border-white/30">
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>SOSIOLOGI KELAS X SMA &bull; SEMESTER 1</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight drop-shadow-sm">
              Bank Soal &amp; Modul Sejarah Perkembangan Sosiologi
            </h1>
            <p className="text-indigo-200 text-xs sm:text-sm font-medium max-w-2xl leading-relaxed">
              Kompilasi lengkap soal Pilihan Ganda (A-E) Kurikulum Merdeka Fase E, Soal Esai Analitis (HOTS), Kunci Jawaban, Pembahasan Ilmiah, Simulator Ujian Interaktif, serta Format Cetak Guru.
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
                title="Aktifkan petualangan 5 Pos QR Code materi Sosiologi di sekolah"
              >
                <Sparkles className="w-4 h-4" />
                <span>
                  {isSociologyAdventureActive
                    ? 'Petualangan Sosiologi Aktif'
                    : 'Aktifkan Petualangan 5 Pos Sosiologi'}
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

        {/* Decorative badge stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-4 border-t border-white/20 text-center">
          <div className="bg-black/20 rounded-xl p-2">
            <div className="text-lg font-black text-amber-300">25 Soal</div>
            <div className="text-[10px] text-indigo-200 font-semibold">Pilihan Ganda (A-E)</div>
          </div>
          <div className="bg-black/20 rounded-xl p-2">
            <div className="text-lg font-black text-emerald-300">4 Soal HOTS</div>
            <div className="text-[10px] text-indigo-200 font-semibold">Esai Studi Kasus</div>
          </div>
          <div className="bg-black/20 rounded-xl p-2">
            <div className="text-lg font-black text-sky-300">5 Submateri</div>
            <div className="text-[10px] text-indigo-200 font-semibold">Pos 1 s/d Pos 5</div>
          </div>
          <div className="bg-black/20 rounded-xl p-2">
            <div className="text-lg font-black text-pink-300">100% Valid</div>
            <div className="text-[10px] text-indigo-200 font-semibold">Kunci &amp; Pembahasan</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 bg-white rounded-2xl p-1.5 shadow-sm border border-slate-200 overflow-x-auto print:hidden">
        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('bank');
          }}
          className={`flex-1 min-w-[120px] py-2 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'bank'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Bank Soal PG (25)</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('quiz');
          }}
          className={`flex-1 min-w-[120px] py-2 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'quiz'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-100'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Simulasi Kuis / Ujian</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('essay');
          }}
          className={`flex-1 min-w-[120px] py-2 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'essay'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Soal Esai &amp; Rubrik</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('print');
          }}
          className={`flex-1 min-w-[120px] py-2 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'print'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-100'
          }`}
        >
          <Printer className="w-4 h-4" />
          <span>Cetak / Ekspor Lembar Soal</span>
        </button>
      </div>

      {/* Notice Toast */}
      {copiedNotice && (
        <div className="bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm font-bold animate-in fade-in print:hidden">
          <CheckCircle2 className="w-4 h-4" />
          <span>{copiedNotice}</span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 1: BANK SOAL PILIHAN GANDA DENGAN KUNCI & PEMBAHASAN */}
      {/* ========================================================================= */}
      {activeTab === 'bank' && (
        <div className="space-y-4 print:hidden">
          {/* Filter Bar */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari kata kunci soal (misal: Comte, Durkheim, Weber, Empiris, Selo)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-indigo-500 focus:bg-white"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowAnswerKeys(!showAnswerKeys)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
                    showAnswerKeys
                      ? 'bg-indigo-50 text-indigo-900 border-indigo-200'
                      : 'bg-slate-100 text-slate-700 border-slate-300'
                  }`}
                >
                  {showAnswerKeys ? <Eye className="w-4 h-4 text-indigo-600" /> : <EyeOff className="w-4 h-4 text-slate-500" />}
                  <span>{showAnswerKeys ? 'Sembunyikan Kunci' : 'Tampilkan Kunci & Pembahasan'}</span>
                </button>

                <button
                  onClick={handleCopyQuestions}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  title="Salin seluruh soal & kunci ke clipboard untuk ditempel di MS Word atau Google Form"
                >
                  <Copy className="w-4 h-4 text-amber-300" />
                  <span className="hidden sm:inline">Salin Semua</span>
                </button>
              </div>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
              <div className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Submateri:</span>
              </div>
              <button
                onClick={() => setSelectedSubtopic('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  selectedSubtopic === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Semua Pos (25)
              </button>
              {Object.entries(subtopicMap).map(([posId, title]) => (
                <button
                  key={posId}
                  onClick={() => setSelectedSubtopic(posId)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                    selectedSubtopic === posId
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {posId.toUpperCase()}
                </button>
              ))}

              <div className="ml-auto flex items-center gap-1">
                <span className="text-xs font-bold text-slate-500">Tingkat:</span>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg text-xs py-1 px-2 text-slate-700 font-semibold"
                >
                  <option value="all">Semua Kesukaran</option>
                  <option value="mudah">Mudah (LOTS)</option>
                  <option value="sedang">Sedang (MOTS)</option>
                  <option value="sulit">Sulit (HOTS)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-4">
            {filteredQuestions.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500">
                <HelpCircle className="w-10 h-10 mx-auto text-slate-300 mb-2" />
                <p className="font-bold text-sm">Tidak ada soal yang sesuai dengan filter pencarian.</p>
                <p className="text-xs text-slate-400 mt-1">Coba bersihkan kata kunci atau pilih semua submateri.</p>
              </div>
            ) : (
              filteredQuestions.map((q, index) => {
                const subtopicTitle = subtopicMap[q.locationId] || q.locationId;
                return (
                  <div
                    key={q.id}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/90 hover:border-indigo-300 transition-all space-y-3.5"
                  >
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                          {index + 1}
                        </span>
                        <span className="text-xs font-black text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded-lg border border-indigo-200">
                          {subtopicTitle}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] font-bold">
                        <span
                          className={`px-2 py-0.5 rounded-md uppercase tracking-wider ${
                            q.difficulty === 'sulit'
                              ? 'bg-rose-100 text-rose-800'
                              : q.difficulty === 'sedang'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {q.difficulty}
                        </span>
                        <span className="text-slate-400">&bull;</span>
                        <span className="text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                          Literasi: {q.literacyCategory?.replace('_', ' ')}
                        </span>
                      </div>
                    </div>

                    {/* Question text */}
                    <p className="text-slate-900 font-bold text-sm sm:text-base leading-relaxed">
                      {q.question}
                    </p>

                    {/* Options A - E */}
                    <div className="grid grid-cols-1 gap-2 pl-1">
                      {q.options?.map((opt, optIdx) => {
                        const letter = String.fromCharCode(65 + optIdx);
                        const isCorrect = opt === q.correctAnswer;
                        return (
                          <div
                            key={optIdx}
                            className={`p-2.5 rounded-xl border text-xs sm:text-sm font-medium flex items-start gap-2.5 transition-colors ${
                              showAnswerKeys && isCorrect
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                                : 'bg-slate-50/70 border-slate-200 text-slate-800 hover:bg-slate-100'
                            }`}
                          >
                            <span
                              className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
                                showAnswerKeys && isCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-white text-slate-700 border border-slate-300'
                              }`}
                            >
                              {letter}
                            </span>
                            <span className="pt-0.5 leading-snug">{opt}</span>
                            {showAnswerKeys && isCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 ml-auto shrink-0 mt-0.5" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation Box */}
                    {showAnswerKeys && (
                      <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 text-xs text-amber-950 space-y-1">
                        <div className="font-black text-amber-900 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Kunci Jawaban: {q.correctAnswer}</span>
                        </div>
                        <p className="leading-relaxed text-slate-700 pl-5">
                          <strong>Pembahasan:</strong> {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: SIMULASI KUIS / UJIAN INTERAKTIF */}
      {/* ========================================================================= */}
      {activeTab === 'quiz' && (
        <div className="space-y-4 print:hidden">
          {!quizStarted ? (
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200 text-center space-y-5 max-w-xl mx-auto">
              <div className="w-20 h-20 rounded-3xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-4xl mx-auto shadow-inner">
                🎓
              </div>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                  Simulasi Ujian Sosiologi Kelas X
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Uji pemahamanmu tentang Sejarah Perkembangan Sosiologi (Revolusi Prancis, Revolusi Industri, Auguste Comte, Émile Durkheim, Karl Marx, Max Weber, Herbert Spencer, Ciri Ilmu Sosiologi, dan Selo Soemardjan).
                </p>
              </div>

              {/* Quiz Configuration */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Jumlah Soal Acak:</span>
                  <div className="flex gap-2">
                    {[5, 10, 15, 25].map((count) => (
                      <button
                        key={count}
                        onClick={() => setQuizQuestionCount(count)}
                        className={`px-3 py-1 rounded-xl text-xs font-black cursor-pointer transition-all ${
                          quizQuestionCount === count
                            ? 'bg-indigo-600 text-white shadow-xs'
                            : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {count} Soal
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-700">Tampilkan Pembahasan Langsung:</span>
                  <button
                    onClick={() => setInstantFeedback(!instantFeedback)}
                    className={`px-3 py-1 rounded-xl text-xs font-bold cursor-pointer ${
                      instantFeedback ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {instantFeedback ? 'Aktif (Mode Latihan)' : 'Mati (Mode Ujian Nyata)'}
                  </button>
                </div>
              </div>

              <button
                onClick={handleStartQuiz}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black text-sm sm:text-base shadow-lg shadow-indigo-300 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>Mulai Simulasi Kuis Sekarang</span>
              </button>
            </div>
          ) : !quizFinished ? (
            /* Active Quiz In-Progress */
            <div className="space-y-4">
              {/* Progress and status header */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-indigo-900 bg-indigo-50 px-2.5 py-1 rounded-xl border border-indigo-200">
                    Soal {currentQuizIndex + 1} dari {quizQuestions.length}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold hidden sm:inline">
                    Terjawab: {Object.keys(userAnswers).length}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleFinishQuiz}
                    className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black transition-all cursor-pointer"
                  >
                    Selesaikan Ujian
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-indigo-600 h-2 transition-all duration-300"
                  style={{
                    width: `${((currentQuizIndex + 1) / quizQuestions.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question Card */}
              {(() => {
                const currentQ = quizQuestions[currentQuizIndex];
                if (!currentQ) return null;
                const answered = userAnswers[currentQ.id];
                const isCorrect = answered === currentQ.correctAnswer;

                return (
                  <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-md border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                      <span className="text-indigo-600 uppercase tracking-wide">
                        {subtopicMap[currentQ.locationId] || 'Sosiologi'}
                      </span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded-md">
                        Tingkat: {currentQ.difficulty}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                      {currentQ.question}
                    </h3>

                    {/* Options list */}
                    <div className="space-y-2 pt-2">
                      {currentQ.options?.map((opt, optIdx) => {
                        const letter = String.fromCharCode(65 + optIdx);
                        const isSelected = answered === opt;
                        const showCorrectHighlight = instantFeedback && answered && opt === currentQ.correctAnswer;
                        const showWrongHighlight = instantFeedback && isSelected && !isCorrect;

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectQuizAnswer(currentQ.id, opt)}
                            className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm font-medium flex items-start gap-3 transition-all cursor-pointer ${
                              showCorrectHighlight
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold'
                                : showWrongHighlight
                                ? 'bg-rose-50 border-rose-500 text-rose-950'
                                : isSelected
                                ? 'bg-indigo-50 border-indigo-500 text-indigo-950 font-bold ring-2 ring-indigo-300'
                                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                            }`}
                          >
                            <span
                              className={`w-7 h-7 rounded-xl text-xs font-black flex items-center justify-center shrink-0 ${
                                showCorrectHighlight
                                  ? 'bg-emerald-600 text-white'
                                  : showWrongHighlight
                                  ? 'bg-rose-600 text-white'
                                  : isSelected
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-white text-slate-700 border border-slate-300'
                              }`}
                            >
                              {letter}
                            </span>
                            <span className="pt-1 flex-1 leading-snug">{opt}</span>
                            {showCorrectHighlight && (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                            )}
                            {showWrongHighlight && (
                              <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Instant Feedback Explanation if enabled */}
                    {instantFeedback && answered && (
                      <div
                        className={`rounded-2xl p-4 text-xs space-y-1.5 animate-in fade-in ${
                          isCorrect
                            ? 'bg-emerald-50 border border-emerald-300 text-emerald-950'
                            : 'bg-rose-50 border border-rose-300 text-rose-950'
                        }`}
                      >
                        <div className="font-black flex items-center gap-1.5 text-sm">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span className="text-emerald-800">Jawabanmu Benar!</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4 text-rose-600" />
                              <span className="text-rose-800">Jawaban Kurang Tepat</span>
                            </>
                          )}
                        </div>
                        <p className="text-slate-700 leading-relaxed font-medium">
                          <strong>Kunci:</strong> {currentQ.correctAnswer}
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                          <strong>Pembahasan:</strong> {currentQ.explanation}
                        </p>
                      </div>
                    )}

                    {/* Navigation buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <button
                        disabled={currentQuizIndex === 0}
                        onClick={() => {
                          sounds.playClick();
                          setCurrentQuizIndex((prev) => Math.max(0, prev - 1));
                        }}
                        className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                      >
                        Soal Sebelumnya
                      </button>

                      {currentQuizIndex < quizQuestions.length - 1 ? (
                        <button
                          onClick={() => {
                            sounds.playClick();
                            setCurrentQuizIndex((prev) => prev + 1);
                          }}
                          className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1 shadow-sm transition-all cursor-pointer"
                        >
                          <span>Soal Selanjutnya</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={handleFinishQuiz}
                          className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-md transition-all cursor-pointer"
                        >
                          Lihat Skor Akhir
                        </button>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          ) : (
            /* Quiz Result Screen */
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200 text-center space-y-6 max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-amber-950 flex items-center justify-center text-4xl mx-auto shadow-md">
                🏆
              </div>

              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-indigo-600">
                  Hasil Simulasi Ujian Sosiologi
                </span>
                <h2 className="text-3xl font-black font-display text-slate-900">
                  Skor Akhir: {quizScore} / 100
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-semibold">
                  Kamu menjawab benar{' '}
                  <span className="text-emerald-600 font-black">
                    {quizQuestions.filter((q) => userAnswers[q.id] === q.correctAnswer).length}
                  </span>{' '}
                  dari {quizQuestions.length} soal.
                </p>
              </div>

              {/* Status Grade */}
              <div
                className={`p-4 rounded-2xl border text-sm font-bold ${
                  quizScore >= 80
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : quizScore >= 60
                    ? 'bg-amber-50 border-amber-300 text-amber-900'
                    : 'bg-rose-50 border-rose-300 text-rose-900'
                }`}
              >
                {quizScore >= 85
                  ? '🌟 Luar Biasa! Pemahamanmu terhadap Sejarah Sosiologi sangat matang dan siap menghadapi Penilaian Sumatif SMA!'
                  : quizScore >= 65
                  ? '👍 Bagus! Kamu sudah memahami konsep dasar para tokoh sosiologi, tingkatkan lagi pendalaman pada ciri ilmu dan konteks sejarah.'
                  : '💪 Terus Semangat! Baca kembali rangkuman di Pos 1 s/d Pos 5 dan coba ulangi kuis untuk hasil maksimal!'}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleStartQuiz}
                  className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Ulangi Simulasi Kuis</span>
                </button>

                <button
                  onClick={() => setActiveTab('bank')}
                  className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all cursor-pointer"
                >
                  Pelajari Bank Soal Lengkap
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: SOAL ESAI / URAIAN ANALITIS & RUBRIK PENILAIAN */}
      {/* ========================================================================= */}
      {activeTab === 'essay' && (
        <div className="space-y-4 print:hidden">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-950 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-amber-900">
                Panduan Soal Esai HOTS (Higher Order Thinking Skills):
              </p>
              <p className="text-slate-700 mt-0.5 leading-relaxed">
                Soal esai berikut dilengkapi stimulus kasus kontekstual, indikator pencapaian, tingkat kognitif (C4 Analisis &amp; C5 Evaluasi), model jawaban ideal, serta rubrik penskoran analitis (maksimum 25 poin per soal, total 100 poin).
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {SOCIOLOGY_ESSAY_QUESTIONS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200 space-y-4"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-purple-700 text-white font-black text-sm flex items-center justify-center shadow-xs">
                      {item.number}
                    </span>
                    <div>
                      <span className="text-xs font-black text-purple-900 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                        Level: {item.cognitiveLevel}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 max-w-md text-right">
                    {item.indicator}
                  </span>
                </div>

                {/* Stimulus Box */}
                {item.stimulus && (
                  <div className="bg-slate-50 border-l-4 border-purple-600 rounded-r-xl p-3.5 text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    <strong className="not-italic text-purple-900 font-bold block mb-1">
                      Stimulus Kasus:
                    </strong>
                    &ldquo;{item.stimulus}&rdquo;
                  </div>
                )}

                {/* Question */}
                <div className="text-slate-900 font-bold text-sm sm:text-base leading-relaxed">
                  <span className="text-purple-700 font-black mr-1">Pertanyaan:</span>
                  {item.question}
                </div>

                {/* Sample Answer */}
                <div className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 space-y-2">
                  <div className="font-black text-indigo-950 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>Model Kunci Jawaban Lengkap:</span>
                  </div>
                  <div className="text-slate-700 whitespace-pre-line leading-relaxed text-xs sm:text-sm">
                    {item.sampleAnswer}
                  </div>
                </div>

                {/* Scoring Rubric */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-2 text-xs">
                  <div className="font-bold text-slate-800 flex items-center justify-between">
                    <span>Rubrik Penskoran Analitis (Skor Maksimal: {item.scoringRubric.maxScore} Poin):</span>
                  </div>
                  <div className="space-y-1.5">
                    {item.scoringRubric.criteria.map((c, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-2 bg-white p-2 rounded-lg border border-slate-200 text-slate-700"
                      >
                        <span className="w-9 px-1 py-0.5 rounded bg-purple-100 text-purple-900 font-black text-[11px] text-center shrink-0">
                          {c.points} pt
                        </span>
                        <span className="leading-snug">{c.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: FORMAT CETAK LEMBAR UJIAN RESMI SMA (PRINT / COPY TO WORD / LMS) */}
      {/* ========================================================================= */}
      {activeTab === 'print' && (
        <div className="space-y-4">
          {/* Action Bar (hidden when printing) */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Format Lembar Ujian Siap Cetak (A4 / PDF)</h3>
              <p className="text-xs text-slate-500">
                Lengkap dengan Kop Ujian, identitas peserta didik, 25 soal pilihan ganda A-E, dan 4 soal uraian HOTS.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak / Simpan PDF</span>
              </button>

              <button
                onClick={handleCopyQuestions}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Copy className="w-4 h-4 text-amber-300" />
                <span>Salin Teks ke Word</span>
              </button>
            </div>
          </div>

          {/* PRINTABLE PAPER LAYOUT */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-300 text-slate-900 space-y-6 print:border-none print:shadow-none print:p-0 print:rounded-none">
            {/* Kop Ujian Standar SMA */}
            <div className="border-b-2 border-slate-900 pb-3 text-center space-y-1">
              <h2 className="text-base sm:text-lg font-black uppercase tracking-wider">
                PENILAIAN SUMATIF TENGAH / AKHIR SEMESTER 1
              </h2>
              <h3 className="text-sm sm:text-base font-bold text-slate-800 uppercase">
                MATA PELAJARAN: SOSIOLOGI &bull; KELAS X SMA / MA (FASE E)
              </h3>
              <p className="text-xs text-slate-600">
                Lingkup Materi: <strong>Sejarah Perkembangan Sosiologi &amp; Tokoh-Tokoh Klasik</strong>
              </p>
            </div>

            {/* Identitas Siswa */}
            <div className="grid grid-cols-2 gap-2 text-xs border border-slate-300 rounded-xl p-3 bg-slate-50/50 print:bg-transparent">
              <div>
                <p>
                  <strong>Nama Siswa:</strong> ....................................................
                </p>
                <p className="mt-1">
                  <strong>Kelas / No. Absen:</strong> ....................................................
                </p>
              </div>
              <div>
                <p>
                  <strong>Hari / Tanggal:</strong> ....................................................
                </p>
                <p className="mt-1">
                  <strong>Waktu Pengerjaan:</strong> 90 Menit
                </p>
              </div>
            </div>

            {/* Petunjuk Umum */}
            <div className="text-[11px] text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200 space-y-0.5 print:bg-transparent">
              <p className="font-bold text-slate-900">PETUNJUK UMUM:</p>
              <ol className="list-decimal pl-4 space-y-0.5">
                <li>Berdoalah sebelum mengerjakan soal ujian.</li>
                <li>Tuliskan nama, nomor absen, dan kelas pada lembar jawaban yang telah disediakan.</li>
                <li>Periksa dan bacalah setiap butir soal dengan teliti sebelum Anda menjawabnya.</li>
                <li>Pilihlah salah satu jawaban A, B, C, D, atau E yang paling tepat untuk Bagian A.</li>
                <li>Jawablah pertanyaan Bagian B (Esai) dengan analisis kritis, runtut, dan jelas.</li>
              </ol>
            </div>

            {/* BAGIAN A: SOAL PILIHAN GANDA */}
            <div className="space-y-4 pt-2">
              <div className="font-black text-sm uppercase tracking-wide bg-slate-100 p-2 rounded-lg border border-slate-300 print:bg-transparent print:border-b print:rounded-none">
                A. SOAL PILIHAN GANDA (Pilihlah salah satu jawaban yang paling tepat!)
              </div>

              <div className="space-y-5">
                {SOCIOLOGY_QUESTIONS.map((q, idx) => (
                  <div key={q.id} className="space-y-1.5 text-xs sm:text-sm break-inside-avoid">
                    <p className="font-bold leading-relaxed">
                      {idx + 1}. {q.question}
                    </p>
                    <div className="grid grid-cols-1 gap-1 pl-4">
                      {q.options?.map((opt, optIdx) => {
                        const letter = String.fromCharCode(65 + optIdx);
                        return (
                          <div key={optIdx} className="flex items-start gap-2">
                            <span className="font-bold">{letter}.</span>
                            <span>{opt}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BAGIAN B: SOAL URAIAN / ESAI */}
            <div className="space-y-4 pt-4 border-t-2 border-slate-300">
              <div className="font-black text-sm uppercase tracking-wide bg-slate-100 p-2 rounded-lg border border-slate-300 print:bg-transparent print:border-b print:rounded-none">
                B. SOAL URAIAN / ESAI ANALITIS (Jawablah dengan analisis kritis dan lengkap!)
              </div>

              <div className="space-y-6">
                {SOCIOLOGY_ESSAY_QUESTIONS.map((e) => (
                  <div key={e.id} className="space-y-2 text-xs sm:text-sm break-inside-avoid">
                    <p className="font-bold text-indigo-950">
                      Soal Nomor {e.number} (Skor Maksimal: 25 Poin)
                    </p>
                    {e.stimulus && (
                      <div className="bg-slate-50 border-l-3 border-slate-400 p-2 text-xs italic text-slate-700 leading-relaxed print:bg-transparent">
                        &ldquo;{e.stimulus}&rdquo;
                      </div>
                    )}
                    <p className="font-semibold text-slate-900 leading-relaxed">
                      {e.question}
                    </p>
                    {/* Blank line for written answer in paper */}
                    <div className="pt-2 pb-6 border-b border-dashed border-slate-300 text-slate-400 text-[10px] print:block">
                      Lembar jawaban siswa:
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
