import React from 'react';
import {
  Play,
  BookOpen,
  Trophy,
  Sparkles,
  Compass,
  ShieldCheck,
  Feather,
  Lock,
  GraduationCap,
  FileText,
  Printer,
  Award,
} from 'lucide-react';
import { sounds } from '../utils/audio';
import { GameSession } from '../types/game';

interface Props {
  onStart: () => void;
  onHowToPlay: () => void;
  onLeaderboard: () => void;
  onAdmin: () => void;
  onOpenSociologyExam: () => void;
  currentSubject: 'ipas' | 'sociology';
  onToggleSubject: (sub: 'ipas' | 'sociology') => void;
  hasActiveSession?: boolean;
  hasFailedSession?: boolean;
  activeSession?: GameSession | null;
  onResumeSession?: () => void;
}

export const StudentHome: React.FC<Props> = ({
  onStart,
  onHowToPlay,
  onLeaderboard,
  onAdmin,
  onOpenSociologyExam,
  currentSubject,
  onToggleSubject,
  hasActiveSession,
  hasFailedSession,
  activeSession,
  onResumeSession,
}) => {
  const isSociology = currentSubject === 'sociology';

  return (
    <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 text-center">
      {/* Subject Mode Selector Bar */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-1.5 shadow-sm border border-amber-200/90 flex items-center gap-1.5">
        <button
          onClick={() => {
            sounds.playClick();
            onToggleSubject('sociology');
          }}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isSociology
              ? 'bg-gradient-to-r from-indigo-700 to-purple-800 text-white shadow-md'
              : 'text-slate-600 hover:text-indigo-900 hover:bg-indigo-50'
          }`}
        >
          <GraduationCap className={`w-4 h-4 ${isSociology ? 'text-amber-300' : 'text-indigo-600'}`} />
          <span className="truncate">Sosiologi Kelas X SMA</span>
          {isSociology && (
            <span className="hidden xs:inline-block px-1.5 py-0.2 bg-amber-400 text-indigo-950 text-[10px] rounded-md font-black">
              AKTIF
            </span>
          )}
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            onToggleSubject('ipas');
          }}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            !isSociology
              ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-md'
              : 'text-slate-600 hover:text-amber-900 hover:bg-amber-50'
          }`}
        >
          <Feather className={`w-4 h-4 ${!isSociology ? 'text-yellow-200' : 'text-amber-600'}`} />
          <span className="truncate">IPAS Kelas 6 SD</span>
          {!isSociology && (
            <span className="hidden xs:inline-block px-1.5 py-0.2 bg-yellow-300 text-amber-950 text-[10px] rounded-md font-black">
              AKTIF
            </span>
          )}
        </button>
      </div>

      {/* Prominent Sociology Bank Soal & Kuis Shortcut Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 rounded-2xl sm:rounded-3xl p-4 sm:p-5 text-white shadow-lg border-2 border-indigo-400/80 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-700/80 border border-indigo-400 text-[10px] sm:text-xs font-black uppercase text-amber-300">
            <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
            <span>BANK SOAL &bull; KURIKULUM MERDEKA KELAS X</span>
          </div>
          <h2 className="text-sm sm:text-base font-black text-white leading-snug">
            Kumpulan Soal: Sejarah Perkembangan Sosiologi
          </h2>
          <p className="text-[11px] sm:text-xs text-indigo-200 font-medium">
            25 Pilihan Ganda (A-E) + 4 Soal Esai HOTS + Kunci Jawaban + Pembahasan Ilmiah + Format Cetak Ujian.
          </p>
        </div>

        <button
          onClick={() => {
            sounds.playClick();
            onOpenSociologyExam();
          }}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 text-amber-950 font-black text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
        >
          <FileText className="w-4 h-4 text-amber-900" />
          <span>Buka Bank Soal &amp; Kuis</span>
        </button>
      </div>

      {/* Dynamic Hero Card based on current active subject */}
      {isSociology ? (
        <div className="bg-gradient-to-b from-indigo-700 via-indigo-800 to-purple-900 rounded-2xl sm:rounded-3xl p-5 sm:p-10 text-white shadow-xl border-3 sm:border-4 border-indigo-300 relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-[10px] sm:text-xs font-black uppercase tracking-wider mb-2.5 border border-white/30">
            <GraduationCap className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span>SOSIOLOGI SMA / MA KELAS X &bull; SEMESTER 1</span>
          </div>

          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-amber-300 to-yellow-200 flex items-center justify-center text-4xl sm:text-6xl shadow-xl mb-3 border-3 sm:border-4 border-white/60">
            🏛️
          </div>

          <h1 className="text-2xl sm:text-5xl font-black font-display tracking-tight text-yellow-100 drop-shadow-md leading-tight">
            DETEKTIF SOSIOLOGI X
          </h1>
          <h2 className="text-base sm:text-2xl font-black font-display text-white mt-1 drop-shadow-xs">
            &ldquo;Sejarah Perkembangan Sosiologi&rdquo;
          </h2>

          <p className="text-indigo-100 text-xs sm:text-base font-semibold max-w-md mx-auto mt-2.5 leading-relaxed">
            Telusuri <strong>5 Pos Penyelidikan Sosiologi</strong> di lingkungan sekolah, baca artikel historis Revolusi Prancis hingga pemikiran Selo Soemardjan, lalu taklukkan soal-soalnya!
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 mt-4 text-[11px] sm:text-xs text-indigo-100 font-bold">
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-amber-300" /> Revolusi Industri &amp; Prancis
            </span>
            <span aria-hidden="true">&bull;</span>
            <span className="flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-amber-300" /> Comte, Durkheim, Marx, Weber
            </span>
            <span aria-hidden="true">&bull;</span>
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-300" /> Selo Soemardjan
            </span>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-b from-amber-500 via-amber-600 to-amber-700 rounded-2xl sm:rounded-3xl p-5 sm:p-10 text-white shadow-xl border-3 sm:border-4 border-yellow-300 relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-[10px] sm:text-xs font-black uppercase tracking-wider mb-2.5 border border-white/30">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-200 shrink-0" />
            <span>SD NEGERI 3 LOLOAN TIMUR</span>
          </div>

          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-yellow-300 to-amber-200 flex items-center justify-center text-4xl sm:text-6xl shadow-xl mb-3 border-3 sm:border-4 border-white/60">
            📜
          </div>

          <h1 className="text-2xl sm:text-5xl font-black font-display tracking-tight text-yellow-100 drop-shadow-md leading-tight">
            SI GUNDUL &bull; DETEKTIF IPAS
          </h1>
          <h2 className="text-base sm:text-2xl font-black font-display text-white mt-1 drop-shadow-xs">
            &ldquo;Penyebab Gangguan Pernapasan Manusia&rdquo;
          </h2>

          <p className="text-amber-100 text-xs sm:text-base font-semibold max-w-md mx-auto mt-2.5 leading-relaxed">
            Pecahkan petunjuk lokasi untuk menemukan <strong>5 Pos Rahasia</strong> di lingkungan sekolah, baca artikel sainsnya, <strong>catat intisari penting di buku tulismu</strong>, lalu taklukkan soal di setiap pos!
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 mt-4 text-[11px] sm:text-xs text-yellow-100 font-bold">
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-yellow-300" /> Baca &amp; Catat Artikel
            </span>
            <span aria-hidden="true">&bull;</span>
            <span className="flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-yellow-300" /> 5 Pos QR Sekolah
            </span>
            <span aria-hidden="true">&bull;</span>
            <span className="flex items-center gap-1">
              <Feather className="w-3.5 h-3.5 text-yellow-300" /> IPAS Kelas 6 SD
            </span>
          </div>
        </div>
      )}

      {/* Locked Alert if Group Failed in a Pos */}
      {hasFailedSession && activeSession && (
        <div className="bg-rose-50 border-3 border-rose-500 rounded-2xl sm:rounded-3xl p-4 sm:p-5 text-left space-y-3 shadow-xl animate-in fade-in">
          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-2xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Lock className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-200 text-rose-900 text-[10px] font-black uppercase tracking-wider">
                🚨 KELOMPOK GAGAL DALAM POS • APLIKASI TERKUNCI
              </span>
              <h3 className="text-sm sm:text-base font-black text-rose-950">
                {activeSession.player.playerName} ({activeSession.player.className}) — Gagal di {activeSession.failedPosCode || `POS ${activeSession.currentPosIndex + 1}`}
              </h3>
              <p className="text-xs text-rose-900 font-medium leading-relaxed">
                {activeSession.failedReason || 'Kelompok kehabisan kesempatan menjawab soal di pos ini.'} Siswa <strong>tidak dapat mereset aplikasi sendiri</strong>. Untuk mengulang permainan, <strong>hanya bisa dilakukan oleh Guru pada Panel Guru</strong>.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onAdmin();
            }}
            className="w-full py-3.5 bg-gradient-to-r from-rose-600 via-rose-700 to-rose-800 hover:from-rose-700 hover:to-rose-900 text-white font-black text-xs sm:text-sm rounded-xl shadow-md flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Buka Panel Guru (Reset Aplikasi oleh Guru)</span>
          </button>
        </div>
      )}

      {/* Resume Active Game Alert if available */}
      {hasActiveSession && !hasFailedSession && onResumeSession && (
        <div className="bg-amber-100 border-2 border-amber-400 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-md">
          <div className="text-left min-w-0">
            <div className="text-xs font-black text-amber-900 uppercase">
              Sesi Aktif: {activeSession?.player.playerName} ({activeSession?.player.className})
            </div>
            <div className="text-[11px] sm:text-xs text-amber-800 truncate">
              Lanjutkan petualangan pos yang sedang berjalan. (Reset sesi hanya melalui Panel Guru).
            </div>
          </div>
          <button
            onClick={() => {
              sounds.playClick();
              if (!sounds.isBgmPlaying) {
                sounds.startBgm();
              }
              onResumeSession();
            }}
            className="px-3.5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-xs shrink-0 cursor-pointer active:scale-95 transition-transform"
          >
            Lanjutkan &rarr;
          </button>
        </div>
      )}

      {/* Main Action Buttons */}
      <div className="space-y-2.5 sm:space-y-3.5">
        {!hasFailedSession && !hasActiveSession ? (
          <button
            onClick={() => {
              sounds.playClick();
              if (!sounds.isBgmPlaying) {
                sounds.startBgm();
              }
              onStart();
            }}
            className={`w-full py-4 sm:py-5 text-white font-black text-base sm:text-xl rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all active:scale-98 flex items-center justify-center gap-2.5 uppercase tracking-wide font-display border-2 cursor-pointer ${
              isSociology
                ? 'bg-gradient-to-r from-indigo-700 via-indigo-800 to-purple-900 hover:from-indigo-800 hover:to-purple-950 border-indigo-300'
                : 'bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-900 border-yellow-300'
            }`}
          >
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white shrink-0" />
            <span>MULAI PETUALANGAN POS QR ({isSociology ? 'SOSIOLOGI X' : 'IPAS SD'})</span>
          </button>
        ) : hasActiveSession && !hasFailedSession && onResumeSession ? (
          <button
            onClick={() => {
              sounds.playClick();
              if (!sounds.isBgmPlaying) {
                sounds.startBgm();
              }
              onResumeSession();
            }}
            className="w-full py-4 sm:py-5 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 hover:from-emerald-700 hover:to-teal-900 text-white font-black text-base sm:text-xl rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all active:scale-98 flex items-center justify-center gap-2.5 uppercase tracking-wide font-display border-2 border-emerald-300 cursor-pointer"
          >
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white shrink-0" />
            <span>LANJUTKAN POS SAAT INI</span>
          </button>
        ) : null}

        {/* 4-Column Quick Menu */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          <button
            onClick={() => {
              sounds.playClick();
              onOpenSociologyExam();
            }}
            className="py-3 px-2 bg-gradient-to-r from-indigo-50 to-purple-50 hover:bg-indigo-100 text-indigo-950 font-extrabold text-xs sm:text-sm rounded-2xl shadow-sm border-2 border-indigo-200 transition-all active:scale-95 flex flex-col items-center justify-center gap-1 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-indigo-700" />
            <span>BANK SOAL X</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onHowToPlay();
            }}
            className="py-3 px-2 bg-white hover:bg-amber-50 text-slate-800 font-extrabold text-xs sm:text-sm rounded-2xl shadow-sm border-2 border-amber-200 transition-all active:scale-95 flex flex-col items-center justify-center gap-1 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>CARA MAIN</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onLeaderboard();
            }}
            className="py-3 px-2 bg-white hover:bg-amber-50 text-slate-800 font-extrabold text-xs sm:text-sm rounded-2xl shadow-sm border-2 border-amber-200 transition-all active:scale-95 flex flex-col items-center justify-center gap-1 cursor-pointer"
          >
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>PERINGKAT</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onAdmin();
            }}
            className="py-3 px-2 bg-white hover:bg-amber-50 text-slate-800 font-extrabold text-xs sm:text-sm rounded-2xl shadow-sm border-2 border-amber-200 transition-all active:scale-95 flex flex-col items-center justify-center gap-1 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>GURU / RESET</span>
          </button>
        </div>
      </div>

      {/* Educational Topic Preview Banner */}
      {isSociology ? (
        <div className="bg-indigo-50/90 rounded-2xl p-3.5 sm:p-4 border border-indigo-200 text-xs text-indigo-950 space-y-1.5 text-left">
          <span className="font-extrabold text-indigo-900 block uppercase text-[11px] sm:text-xs">
            🏛️ 5 Pos Penyelidikan Sejarah Perkembangan Sosiologi:
          </span>
          <p className="text-[11px] sm:text-xs font-semibold text-indigo-800 leading-relaxed">
            <strong>Pos 1:</strong> Revolusi Prancis &amp; Revolusi Industri (Latar Belakang) &bull;{' '}
            <strong>Pos 2:</strong> Auguste Comte, Positivisme &amp; Hukum 3 Tahap &bull;{' '}
            <strong>Pos 3:</strong> Tokoh Klasik: Durkheim, Marx, Weber &amp; Spencer &bull;{' '}
            <strong>Pos 4:</strong> Ciri-Ciri &amp; Hakikat Sosiologi sebagai Ilmu &bull;{' '}
            <strong>Pos 5:</strong> Perkembangan Sosiologi di Nusantara (Ki Hajar Dewantara &amp; Selo Soemardjan)
          </p>
        </div>
      ) : (
        <div className="bg-white/90 rounded-2xl p-3.5 sm:p-4 border border-amber-200 text-xs text-slate-600 space-y-1.5 text-left">
          <span className="font-extrabold text-amber-900 block uppercase text-[11px] sm:text-xs">
            🫁 Materi 5 Pos Gangguan Pernapasan Manusia:
          </span>
          <p className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-relaxed">
            <strong>Pos 1:</strong> Polusi &amp; Gas CO &bull; <strong>Pos 2:</strong> Virus Flu &amp; Bakteri TBC &bull; <strong>Pos 3:</strong> Racun Asap Rokok &bull; <strong>Pos 4:</strong> Alergi, Asma &amp; Emfisema &bull; <strong>Pos 5:</strong> Pencegahan &amp; Oksigen
          </p>
        </div>
      )}
    </div>
  );
};
