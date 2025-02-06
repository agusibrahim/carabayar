// Payment Instruction Library
class PaymentInstruction {
  constructor() {
    this.data = null;
    this.modalContainer = null;
    this.init();
  }

  async init() {
    try {
      this.data = [{"title":"Pembayaran dengan BCA Virtual Account","description":"Kamu dapat melakukan pembayaran dengan metode pembayaran BCA Virtual Account dengan mengikuti langkah - langkah berikut :","sections":[{"subtitle":"Pembayaran BCA Virtual Account dengan ATM BCA","contents":["Masukkan Kartu ATM BCA & PIN.","Pilih menu Transaksi Lainnya > Transfer > ke Rekening BCA Virtual Account.","Masukkan nomor Virtual Account yang tertera pada detail transaksi kamu.","Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti No VA, Nama, Perus/Produk dan Total Tagihan.","Pastikan nama kamu dan Total Tagihannya benar.","Jika sudah benar, klik Ya.","Simpan struk transaksi sebagai bukti pembayaran."]},{"subtitle":"Pembayaran BCA Virtual Account dengan mobile banking BCA (m-BCA)","contents":["Lakukan log in pada aplikasi BCA Mobile.","Pilih menu m-BCA, kemudian masukkan kode akses m-BCA.","Pilih m-Transfer > BCA Virtual Account.","Pilih dari Daftar Transfer, atau masukan nomor Virtual Account yang tertera pada detail transaksi kamu.","Pastikan nama kamu dan Total Tagihannya sudah benar.","Kemudian klik Ok dan masukkan pin m-BCA.","Pembayaran selesai. Simpan notifikasi yang muncul sebagai bukti pembayaran."]},{"subtitle":"Pembayaran BCA Virtual Account dengan KlikBCA Individual","contents":["Lakukan log in pada aplikasi KlikBCA Individual (https://ibank.klikbca.com/).","Masukkan User ID dan PIN.","Pilih Transfer Dana > Transfer ke BCA Virtual Account.","Masukkan nomor Virtual Account yang tertera pada detail transaksi kamu.","Kalau sudah benar, klik Lanjutkan.","Cetak nomor referensi sebagai bukti transaksinya."]},{"subtitle":"Pembayaran BCA Virtual Account di Kantor Bank BCA","contents":["Ambil nomor antrian transaksi Teller dan isi slip setoran.","Serahkan slip dan jumlah setoran kepada Teller BCA.","Teller BCA akan melakukan validasi transaksi.","Simpan slip setoran hasil validasi sebagai bukti pembayaran."]}],"note":"Pembayaran BCA Virtual Account tidak bisa dilakukan dari M-banking bank lain, hanya bisa dilakukan melalui M-banking BCA saja.","id":"bca"},{"title":"Pembayaran dengan BNI Virtual Account","description":"Anda dapat melakukan pembayaran dengan metode pembayaran BNI Virtual Account dengan mengikuti langkah - langkah berikut :","sections":[{"subtitle":"Pembayaran BNI Virtual Account dengan ATM BNI","contents":["Masukkan Kartu Anda","Pilih Bahasa","Masukkan PIN ATM Anda","Kemudian, pilih Menu Lainnya","Pilih Transfer dan pilih Jenis rekening yang akan Anda gunakan (Contoh: \"Dari Rekening Tabungan\")","Pilih Virtual Account Billing. Masukkan nomor Virtual Account Anda (Contoh: 1234400005678)","Tagihan yang harus dibayarkan akan muncul pada layar konfirmasi","Konfirmasi, apabila telah sesuai, lanjutkan transaksi","Transaksi Anda telah selesai"]},{"subtitle":"Pembayaran BNI Virtual Account dengan Mobile Banking BNI","contents":["Akses BNI Mobile Banking melalui handphone","Masukkan User ID dan password","Pilih menu Transfer","Pilih menu Virtual Account Billing, lalu pilih rekening debet","Masukkan nomor Virtual Account Anda (Contoh: 1234400005678) pada menu Input Baru","Tagihan yang harus dibayarkan akan muncul pada layar konfirmasi","Konfirmasi transaksi dan masukkan Password Transaksi","Pembayaran Anda Telah Berhasil"]},{"subtitle":"Pembayaran BNI Virtual Account dengan iBank Personal","contents":["Akses ibank.bni.co.id kemudian klik Enter","Masukkan User ID dan password","Klik menu Transfer, lalu pilih Virtual Account Billing","Kemudian, masukan nomor Virtual Account Anda (Contoh: 1234400005678) yang akan dibayarkan","Lalu pilih rekening debet yang akan digunakan. Kemudian tekan Lanjut","Tagihan yang harus dibayarkan akan muncul pada layar konfirmasi","Masukkan Kode Otentikasi Token","Anda akan menerima notifikasi bahwa transaksi berhasil"]},{"subtitle":"Pembayaran BNI Virtual Account dengan SMS Banking","contents":["Buka aplikasi SMS Banking BNI","Pilih menu Transfer","Pilih menu Transfer rekening BNI","Masukkan nomor rekening tujuan dengan 16 digit Nomor Virtual Account (Contoh: 1234400005678)","Masukkan nominal transfer sesuai tagihan. Nominal yang berbeda tidak dapat diproses","Pilih Proses, kemudian Setuju","Balas sms dengan mengetik pin sesuai dengan instruksi BNI. Anda akan menerima notif bahwa transaksi berhasil","Atau dapat juga langsung mengetik sms dengan format: TRF[SPASI]NomorVA[SPASI]NOMINAL dan kemudian kirim ke 3346. Contoh: TRF 1234400005678 44000"]},{"subtitle":"Pembayaran BNI Virtual Account dari Cabang atau Outlet BNI (Teller)","contents":["Kunjungi Kantor Cabang/Outlet BNI terdekat","Informasikan kepada Teller, bahwa Anda ingin melakukan pembayaran Virtual Account Billing","Serahkan nomor Virtual Account Anda kepada Teller","Teller akan melakukan konfirmasi kepada Anda dan akan memproses Transaksi","Apabila transaksi Sukses, Anda akan menerima bukti pembayaran dari Teller tersebut"]},{"subtitle":"Pembayaran BNI Virtual Account dari Agen46","contents":["Kunjungi Agen46 terdekat (warung/took/kios dengan tulisan Agen46)","Informasikan kepada Agen46, bahwa ingin melakukan pembayaran Virtual","Serahkan nomor Virtual Account Anda kepada Agen46","Agen46 akan melakukan konfirmasi kepada Anda","Selanjutnya, transaksi akan diproses","Apabila transaksi dinyatakan sukses, Anda akan menerima bukti pembayaran dari Agen46"]},{"subtitle":"Pembayaran BNI Virtual Account dengan ATM Bank lain","contents":["Pilih menu Transfer antar bank atau Transfer online antar bank","Masukkan kode bank BNI (009) atau pilih bank yang dituju yaitu BNI","Masukan 16 Digit Nomor Virtual Account pada kolom rekening tujuan (Contoh: 1234400005678)","Masukkan nominal transfer sesuai tagihan Anda. Nominal yang berbeda tidak dapat diproses","Masukkan jumlah pembayaran. (Contoh: 44000)","Konfirmasi rincian Anda akan tampil pada layar","Jika sudah sesuai, klik Ya untuk melanjutkan","Transaksi Anda telah berhasil"]},{"subtitle":"Pembayaran BNI Virtual Account dari OVO","contents":["Buka aplikasi OVO","Pilih menu Transfer","Pilih Rekening Bank","Masukkan kode bank BNI (009) atau pilih bank yang dituju yaitu BNI","Masukan 16 Digit Nomor Virtual Account pada kolom rekening tujuan (Contoh: 1234400005678)","Masukkan nominal transfer sesuai tagihan Anda. Pilih Transfer","Konfirmasi rincian Anda akan tampil di layar","Jika sudah sesuai, klik Konfirmasi untuk melanjutkan","Transaksi Anda telah berhasil"]}],"id":"bni"},{"title":"Cara Bayar dengan BRI Virtual Account","description":"Anda dapat melakukan pembayaran dengan menggunakan BRI Virtual Account dengan mengikuti langkah - langkah berikut :","sections":[{"subtitle":"Pembayaran BRIVA dengan ATM BRI","contents":["Lakukan pembayaran melalui ATM Bank BRI","Pilih menu Transaksi Lain","Pilih menu Pembayaran","Pilih menu Lainnya","Pilih menu BRIVA","Masukkan Nomor Virtual Account sesuai yang tertera pada detail transaksi kamu","Pilih Ya untuk memproses pembayaran"]},{"subtitle":"Pembayaran BRIVA dengan mobile banking BRI","contents":["Masuk ke aplikasi BRI Mobile dan pilih Mobile Banking BRI","Pilih menu Info","Pilih menu BRIVA","Masukkan Nomor Virtual Account sesuai yang tertera pada detail transaksi kamu dan masukkan jumlah pembayaran","Masukkan PIN Mobile/SMS Banking BRI","Anda akan mendapatkan notifikasi pembayaran melalui SMS"]},{"subtitle":"Pembayaran BRIVA dengan internet banking BRI","contents":["Login pada halaman Internet Banking BRI","Pilih menu Pembayaran","Pilih menu BRIVA","Masukkan Nomor Virtual Account sesuai yang tertera pada detail transaksi kamu","Masukkan password Internet Banking BRI","Masukkan mToken Internet Banking BRI","Anda akan mendapatkan notifikasi pembayaran"]},{"subtitle":"Pembayaran BRIVA melalui teller BRI","contents":["Ambil nomor antrian transaksi Teller dan isi slip setoran","Serahkan slip dan jumlah setoran kepada Teller BRI","Teller BRI akan melakukan validasi transaksi","Simpan slip setoran hasil validasi sebagai bukti pembayaran"]},{"subtitle":"Pembayaran BRIVA dengan mini ATM BRI","contents":["Pilih menu Mini ATM","Pilih menu Pembayaran","Pilih menu BRIVA","Swipe kartu ATM","Masukkan Nomor Virtual Account sesuai yang tertera pada detail transaksi kamu","Masukkan pin ATM","Klik Lanjut untuk memproses pembayaran","Klik Ya untuk mencetak struk"]},{"subtitle":"Pembayaran BRIVA dengan ATM bank lain","contents":["Setelah memasukkan kartu ATM dan nomor PIN, pilih menu Transaksi Lainnya","Pilih menu Transfer","Pilih menu Ke Rek Bank Lain","Masukkan Kode Bank Tujuan: BRI (Kode Bank: 002). Lalu klik Benar","Masukkan jumlah pembayaran sesuai tagihan. Klik Benar","Masukkan Nomor Virtual Account sesuai yang tertera pada detail transaksi kamu. Klik Benar","Pilih dari rekening apa pembayaran akan di-debet","Sistem akan memverifikasi data yang dimasukkan. Pilih Benar untuk memproses pembayaran"]},{"subtitle":"Pembayaran BRIVA melalui teller bank lain","contents":["Lakukan pembayaran melalui Teller Bank dengan mengisi slip pemindah bukuan (Transfer)","Masukkan nama bank tujuan BRI","Masukkan Nomor Virtual Account sesuai yang tertera pada detail transaksi kamu","Masukkan jumlah pembayaran","Anda akan mendapatkan copy slip sebagai bukti pembayaran"]}],"id":"bri"},{"title":"Cara Bayar dengan CIMB Virtual Account","description":"Gaess saat ini kamu sudah dapat melakukan pembayaran dengan menggunakan CIMB Virtual Account dengan mengikuti langkah - langkah berikut :","sections":[{"subtitle":"Pembayaran CIMB Virtual Account dengan ATM CIMB","contents":["Masukkan Kartu ATM dan PIN CIMB","Pilih menu Pembayaran > Lanjut > Virtual Account","Masukkan nomor virtual account 6449-081234567890","Pilih rekening debit","Nomor, nama virtual account dan jumlah billing ditampilkan pada layar","Pilih OK untuk melakukan pembayaran","Konfirmasi pembayaran ditampilkan pada layar"]},{"subtitle":"Pembayaran CIMB Virtual Account dengan CIMB Clicks","contents":["Login ke CIMB clicks","Pilih menu Bayar Tagihan / Pay Bills","Pilih Rekening Sumber / Source Account dan Jenis Pembayaran / Payment Type > Virtual Account","Masukkan nomor virtual account kamu","Nomor, nama virtual account dan jumlah billing ditampilkan pada layar","Masukkan 6 digit mPIN dan tekan tombol Submit","Konfirmasi pembayaran ditampilkan pada layar"]},{"subtitle":"Pembayaran CIMB Virtual Account dengan Internet Banking Bank Lain","contents":["Login ke internet banking","Pilih menu transfer ke Bank Lain Online","Pilih bank tujuan Bank CIMB Niaga (kode bank: 022)","Masukkan nomor virtual account kamu","Masukkan jumlah pembayaran sesuai tagihan","Nomor, nama virtual account dan jumlah billing ditampilkan pada layar","Ikuti instruksi untuk menyelesaikan transaksi","Konfirmasi pembayaran ditampilkan pada layar"]},{"subtitle":"Pembayaran CIMB Virtual Account dengan Go Mobile CIMB Niaga","contents":["Login ke Go Mobile","Pilih menu TRANSFER","Pilih Transfer to Other CIMB Niaga Account","Pilih rekening sumber Anda: CASA atau Rekening Ponsel","Pilih CASA dan masukkan nomor virtual account kamu","Masukkan jumlah pembayaran sesuai tagihan","Masukkan Mobile Banking PIN","Konfirmasi pembayaran ditampilkan pada layar"]}],"id":"cimb"},{"title":"Pembayaran dengan Danamon Virtual Account","description":"Guys, kamu dapat melakukan pembayaran dengan menggunakan Danamon Virtual Account dengan mengikuti langkah - langkah berikut :","sections":[{"subtitle":"Pembayaran Danamon Virtual Account dengan ATM Danamon","contents":["Masukkan Kartu ATM Danamon & PIN.","Pilih menu Pembayaran > menu Lainnya > menu Virtual Account.","Masukkan Nomor Virtual Account sesuai yang tertera pada detail transaksi kamu","Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti No VA, Nama, Institusi, dan Total Tagihan.","Pilih 'Ya' untuk memproses transaksi.","Simpan struk transaksi sebagai bukti pembayaran."]},{"subtitle":"Pembayaran Danamon Virtual Account dengan ATM bank lain","contents":["Masuk ke menu Transfer.","Pilih Transfer ke bank lain dengan tujuan rekening Bank Danamon.","Masukkan Nomor Virtual Account sesuai yang tertera pada detail transaksi kamu","Masukkan jumlah pembayaran sesuai tagihan.","Akan muncul rincian pembayaran. Jika sudah benar, klik 'Ya' untuk melanjutkan."]},{"subtitle":"Pembayaran Danamon Virtual Account dengan online transfer dari bank lain","contents":["Pilih menu Transfer ke Bank Lain.","Pilih Bank Danamon sebagai bank tujuan.","Masukkan nomor Virtual Account kamu.","Masukkan nominal transfer sesuai tagihan.","Ikuti instruksi untuk menyelesaikan transaksi."]}],"id":"danamon"},{"title":"Pembayaran dengan Mandiri Virtual Account","description":"Kamu dapat melakukan pembayaran dengan menggunakan Mandiri Virtual Account dengan mengikuti langkah - langkah berikut:","sections":[{"subtitle":"Pembayaran Mandiri Virtual Account dengan ATM bank Mandiri","contents":["Masukkan kartu ATM dan Pin.","Pilih Menu Bayar/Beli.","Pilih menu Lainnya, hingga menemukan menu Multipayment.","Masukkan kode biller, lalu pilih Benar.","Masukkan Nomor Virtual Account sesuai yang tertera pada transaksi kamu, lalu pilih tombol Benar.","Masukkan Angka 1 untuk memilih tagihan, lalu pilih tombol Ya.","Akan muncul konfirmasi pembayaran, lalu pilih tombol Ya.","Simpan struk sebagai bukti pembayaran Anda."]},{"subtitle":"Pembayaran Mandiri Virtual Account dengan Internet Banking atau Mandiri Online","contents":["Login Mandiri Online dengan memasukkan username dan password.","Pilih menu Pembayaran.","Pilih menu Multipayment.","Pilih penyedia jasa \"PrismaLink\".","Masukkan Nomor Virtual Account dan Nominal yang akan dibabayarkan, lalu pilih Lanjut.","Setelah muncul tagihan, pilih Konfirmasi.","Masukkan PIN/ challange code token.","Transaksi selesai, simpan bukti bayar kamu."]}],"id":"mandiri"},{"title":"Cara Bayar Virtual Account Permata Bank","description":"Gaess, berikut cara bayar Virtual Account Permata Bank.","sections":[{"subtitle":"Pembayaran melalui ATM Permata","contents":["Pada menu utama, pilih \"Transaksi Lainnya\"","Pilih menu Pembayaran","Pilih Pembayaran Lainnya","Pilih Virtual Account","Masukkan nomor Virtual Account kamu","Jumlah yang harus dibayar dan nomor rekening akan muncul pada halaman konfirmasi pembayaran. Jika informasi sudah benar, pilih Benar"]},{"subtitle":"Pembayaran melalui Permata Mobile X","contents":["Buka aplikasi PermataMobile X","Masukan Password","Pilih Bayar Tagihan","Pilih Virtual Account","Masukkan Nomor Virtual Account","Pilih rekening","Masukkan nominal pembayaran","Muncul konfirmasi pembayaran","Masukan Mobile PIN","Transaksi selesai"]},{"subtitle":"Pembayaran melalui PermataNet","contents":["Buka webitse PermataNet","Masukan User ID & Password","Pilih Pembayaran Tagihan","Pilih Virtual Account","Masukkan nomor Virtual Account kamu","Masukkan nominal pembayaran","Muncul konfirmasi pembayaran","Masukan Mobil PIN","Transaksi selesai"]}],"id":"permata"}]

    } catch (error) {
      console.error('Error loading payment instructions:', error);
    }
  }

  createModal() {
    const modal = document.createElement('div');
    modal.className = 'payment-instruction-modal';
    modal.innerHTML = `
      <div class="payment-instruction-content">
        <div class="payment-instruction-header">
          <h2></h2>
          <button class="close-button">&times;</button>
        </div>
        <div class="payment-instruction-body">
          <p class="description"></p>
          <div class="sections"></div>
        </div>
      </div>
    `;

    modal.querySelector('.close-button').addEventListener('click', () => {
      this.hideModal();
    });

    document.body.appendChild(modal);
    this.modalContainer = modal;
  }

  showModal(bankId) {
    if (!this.modalContainer) {
      this.createModal();
    }

    const instruction = this.data.find(item => item.id === bankId);
    if (!instruction) {
      console.error('Payment instruction not found for:', bankId);
      return;
    }

    const modal = this.modalContainer;
    modal.querySelector('h2').textContent = instruction.title;
    modal.querySelector('.description').textContent = instruction.description;

    const sectionsContainer = modal.querySelector('.sections');
    sectionsContainer.innerHTML = '';

    instruction.sections.forEach(section => {
      const sectionElement = document.createElement('div');
      sectionElement.className = 'css-qtfaqv';
      sectionElement.innerHTML = `
        <h3>${section.subtitle}</h3>
        <ol>
          ${section.contents.map(step => `<li>${step}</li>`).join('')}
        </ol>
      `;
      sectionsContainer.appendChild(sectionElement);
    });

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  hideModal() {
    if (this.modalContainer) {
      this.modalContainer.classList.remove('show');
      document.body.style.overflow = '';
    }
  }
}

// Initialize the library
const paymentInstruction = new PaymentInstruction();

// Global function to show payment instructions
window.showPaymentInstruction = (bankId) => {
  paymentInstruction.showModal(bankId);
};