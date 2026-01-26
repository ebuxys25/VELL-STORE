// ==========================================
// KONFIGURASI UTAMA RBX MARKET
// ==========================================

// 1. PENGATURAN LINK DISCORD
// Untuk tombol "Join Discord" & "Beli via Discord"
const DISCORD_INVITE_LINK = "https://discord.gg/5wKzxaydh6";

// 2. PENGATURAN LINK WHATSAPP
// Untuk tombol "Beli via WhatsApp" (Format: Kode negara + Nomor, tanpa tanda +)
const WHATSAPP_PHONE_NUMBER = "6283821170532";

// 3. PENGATURAN RATE
// Rate default Robux (Otomatis terisi di kalkulator)
const DEFAULT_RATE = 80;

// 4. PENGATURAN TAMPILAN
// Ganti background. Bisa pakai nama file "background.jpg" atau link URL gambar.
const BACKGROUND_IMAGE = "background.jpg"; 

// 5. DATA PAKET ROBUX VIA LOGIN
// Edit daftar paket di sini. Format: { amount: JumlahRobux, price: HargaDalamRupiah }
const LOGIN_PACKAGES = {
  premium: [
    { amount: 450, price: 72000 },
    { amount: 1000, price: 144000 },
    { amount: 2200, price: 288000 }
  ],
  regular: [
    { amount: 80, price: 15000 },
    { amount: 160, price: 30000 },
    { amount: 240, price: 45000 },
    { amount: 320, price: 60000 },
    { amount: 500, price: 72000 },
    { amount: 1000, price: 144000 },
    { amount: 1500, price: 216000 },
    { amount: 2000, price: 288000 }
  ]
};

// ==========================================
// AKHIR KONFIGURASI
// ==========================================
