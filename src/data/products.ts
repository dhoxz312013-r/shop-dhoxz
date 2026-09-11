import { JokiPackage, OrderStep, ProductItem } from '../types';

export const ADMIN_PHONE_DISPLAY = '0851-2974-6314';
export const ADMIN_PHONE_NUMBER = '6285129746314';

/**
 * Builds a direct WhatsApp link with encoded message
 */
export function createWhatsAppUrl(message: string): string {
  const cleanPhone = ADMIN_PHONE_NUMBER.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * WhatsApp message templates strictly conforming to user instructions
 */
export function getJokiKontakMessage(packageDuration: string, price: string): string {
  return `Halo Admin DHOXZ-UT 👋\n\nSaya ingin order Joki Kontak.\n\nPaket: ${packageDuration}\nHarga: ${price}\n\nMohon info untuk proses pembayaran.`;
}

export function getSlotOwnerMessage(): string {
  return `Halo Admin DHOXZ-UT 👋\n\nSaya ingin order Slot Owner.\n\nHarga: 5K\n\nMohon info untuk proses pembayaran.`;
}

export const GENERAL_ORDER_MESSAGE = `Halo Admin DHOXZ-UT 👋\n\nSaya ingin order layanan jasa digital.\n\nMohon info daftar produk & proses pemesanan.`;
export const CHAT_ADMIN_MESSAGE = `Halo Admin DHOXZ-UT 👋 Saya ingin bertanya mengenai produk yang tersedia.`;
export const PRICE_INQUIRY_MESSAGE = `Halo Admin DHOXZ-UT 👋\n\nSaya ingin menanyakan informasi harga terbaru untuk layanan digital.`;

export const JOKI_PACKAGES: JokiPackage[] = [
  { id: '1-hari', duration: '1 HARI', price: '2K' },
  { id: '3-hari', duration: '3 HARI', price: '5K', highlight: true },
  { id: '5-hari', duration: '5 HARI', price: '8K' },
  { id: '12-hari', duration: '12 HARI', price: '10K', highlight: true },
];

export const ORDER_STEPS: OrderStep[] = [
  {
    number: '01',
    title: 'PILIH PRODUK',
    description: 'Pilih produk atau layanan yang kamu inginkan.',
    iconName: 'LayoutGrid',
  },
  {
    number: '02',
    title: 'PILIH PAKET',
    description: 'Jika produk memiliki beberapa paket, pilih paket sesuai kebutuhan.',
    iconName: 'PackageCheck',
  },
  {
    number: '03',
    title: 'CHAT ADMIN',
    description: 'Klik tombol Beli Sekarang dan kamu akan diarahkan ke WhatsApp Admin.',
    iconName: 'MessageSquareShare',
  },
  {
    number: '04',
    title: 'PEMBAYARAN',
    description: 'Admin akan memberikan informasi mengenai metode pembayaran.',
    iconName: 'WalletCards',
  },
  {
    number: '05',
    title: 'PESANAN DIPROSES',
    description: 'Setelah pembayaran dikonfirmasi, pesanan akan diproses.',
    iconName: 'Sparkles',
  },
];
