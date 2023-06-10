const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const waste = [
  {
    name: "Plastic",
    id: 1,
    icon: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Waste%20-%20Plastik.png", // ... diisi link gambar plastik dari storage.googleapis.com
    recomendation: [
      {
        id: 1,
        name: "Lentera",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaleng%20-%20Lentera.jpg", // link gambar dari storage.googleapis.com
        desc: "https://www.youtube.com/watch?v=ajVDmEGFKKc",
      },
      {
        id: 2,
        name: "Enchanted Rose",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Plastik%20-%20Enchanted%20Rose.jpg",
        desc: "https://www.youtube.com/watch?v=cGJdhgCA9JE",
      },
      {
        id: 3,
        name: "Vas Bunga Pararel",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Plastik%20-%20Vas%20Bunga%20Pararel.jpg",
        desc: "https://youtu.be/hYDkLNW4deU",
      },
      {
        id: 4,
        name: "Vas Bunga",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Vas%20Bunga.jpg",
        desc: "https://youtu.be/MTZnGNrePXY",
      },
      {
        id: 5,
        name: "Wadah Serbaguna",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Plastik%20-%20Wadah%20Serbaguna.jpg",
        desc: "https://youtu.be/W-0svOtUc-U",
      },
      {
        id: 6,
        name: "Rak Gantung",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kotak%20Minum%20-%20Rak%20Gantung.jpg",
        desc: "https://youtu.be/wTeeAr2HEKM",
      },
      {
        id: 7,
        name: "Rak Sudut",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Plastik%20-%20Rak%20Sudut.jpg",
        desc: "https://youtu.be/-l7rjLYDlhA",
      },
      {
        id: 8,
        name: "Pen Holder",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Plastik%20-%20Pen%20Holder.jpg",
        desc: "https://youtu.be/ebvbcGuWXZ4",
      },
      {
        id: 9,
        name: "Keranjang",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Keranjang%20Kecil.jpg",
        desc: "https://youtu.be/WpGynk87f7o",
      },
      {
        id: 10,
        name: "Dekorasi Selamat Datang",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Plastik%20-%20Dekorasi%20Selamat%20Datang.jpg",
        desc: "https://youtu.be/EPoDzLTlmyY",
      },
      {
        id: 11,
        name: "Dompet",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kotak%20Minum%20-%20Dompet.jpg",
        desc: "https://youtu.be/qhvMipgRDMc",
      },
      {
        id: 12,
        name: "Dekorasi Dinding",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Dekorasi%20Dinding.jpg",
        desc: "https://youtu.be/f4V0yEtXtH4",
      },
    ],
  },
  {
    name: "Paper and Cardboard",
    id: 2,
    icon: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Waste%20-%20Kertas.jpg", // link gambar kertas
    recomendation: [
      {
        id: 1,
        name: "Dekorasi Ruangan",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Dekorasi%20Ruangan.jpg",
        desc: "https://youtu.be/qFJooNxEaD8",
      },
      {
        id: 2,
        name: "Pop Up Book",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Pop%20Up%20Book.jpg",
        desc: "https://www.youtube.com/watch?v=5vZD2cBr0w8",
      },
      {
        id: 3,
        name: "Keranjang Kecil",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Keranjang%20Kecil.jpg",
        desc: "https://youtu.be/-WPRaZ_SO9E",
      },
      {
        id: 4,
        name: "Kalender Meja",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Kalender%20Meja.jpg",
        desc: "https://youtu.be/CrngKvTJagk",
      },
      {
        id: 5,
        name: "Kartu Ucapan",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Kartu%20Ucapan.jpg",
        desc: "https://youtu.be/wW2TdxMkA5o",
      },
      {
        id: 6,
        name: "Bunga",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Bunga.jpg",
        desc: "https://youtu.be/vjdLvsOq7rg",
      },
      {
        id: 7,
        name: "Tempat Sampah Injak",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Tempat%20Sampah%20Injak.jpg",
        desc: "https://youtu.be/1ee2jKR7oy0",
      },
      {
        id: 8,
        name: "Dekorasi Dinding",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Dekorasi%20Dinding.jpg",
        desc: "https://youtu.be/qQKl7UinVzQ",
      },
      {
        id: 9,
        name: "Hiasan Dinding",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Hiasan%20Dinding.jpg",
        desc: "https://youtu.be/f8grIBOugBg",
      },
      {
        id: 10,
        name: "Vas Bunga",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Vas%20Bunga.jpg",
        desc: "https://youtu.be/vJJAylwDjEk",
      },
      {
        id: 11,
        name: "Deskop Organizer",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Desktop%20Organizer.jpg",
        desc: "https://youtu.be/GC7xMulhq7c",
      },
      {
        id: 12,
        name: "Amplop",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Amplop.jpg",
        desc: "https://youtu.be/eQBTqrDJCFA",
      },
      {
        id: 13,
        name: "Keranjang",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Keranjang%20Kecil.jpg",
        desc: "https://youtu.be/4GM75v093lE",
      },
      {
        id: 14,
        name: "Dekorasi Monstera",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Dekorasi%20Monstera.jpg",
        desc: "https://youtu.be/uAczR4F0tsI",
      },
      {
        id: 15,
        name: "Kotak Penyimpanan Kecil",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Kotak%20Penyimpanan%20Kecil.jpg",
        desc: "https://youtube.com/shorts/mslEOruYWNI?feature=share",
      },
      {
        id: 16,
        name: "Kertas Daur Ulang",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Kertas%20Daur%20Ulang.jpg",
        desc: "https://youtu.be/Q9s81oDL5Lk",
      },
      {
        id: 17,
        name: "Kotak Tisu",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Kotak%20Tissue.jpg",
        desc: "https://youtu.be/FrkLmydlKwQ",
      },
      {
        id: 18,
        name: "Tempat Sampah Mini",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Tempat%20Sampah%20Mini.jpg",
        desc: "https://youtu.be/-fvlyHqSbZQ",
      },
      {
        id: 19,
        name: "Frame Foto",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Frame%20Foto.jpg",
        desc: "https://youtu.be/E04Ts7-XxU8",
      },
      {
        id: 20,
        name: "Scrapbook",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kertas%20-%20Scrapbook.jpg",
        desc: "https://youtu.be/Gbxa6yWZZyI",
      },
    ],
  },
  {
    name: "Glass",
    id: 3,
    icon: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Waste%20-%20Kaca.jpg", // LINK GAMBAR GELAS
    recomendation: [
      {
        id: 1,
        name: "Lampu Hias",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaca%20-%20Lampu%20Hias.jpg",
        desc: "https://youtu.be/Z7uNDey426Q",
      },
      {
        id: 2,
        name: "Lampu Gelembung",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaca%20-%20Lampu%20Bergelembung.jpg",
        desc: "https://youtu.be/-rynmhR9Au4",
      },
      {
        id: 3,
        name: "Lampu Tidur",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaca%20-%20Lampu%20Bergelembung.jpg",
        desc: "https://youtu.be/yiV-_ZE57eM",
      },
      {
        id: 4,
        name: "Trophy",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaca%20-%20Trophy.jpg",
        desc: "https://youtu.be/yj2pQuN3vYo",
      },
      {
        id: 5,
        name: "Lukisan",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaca%20-%20Lukisan.jpg",
        desc: "https://youtu.be/ChGn2RPZ6l4",
      },
      {
        id: 6,
        name: "Souvenir",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaca%20-%20Souvenir.jpg",
        desc: "https://youtu.be/VZ1KCUkZI3k",
      },
      {
        id: 7,
        name: "Asbak",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaca%20-%20Asbak.jpg",
        desc: "https://youtu.be/IL5oV61hmO0",
      },
      {
        id: 8,
        name: "Bingkai Foto",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaca%20-%20Bingkai%20Foto.jpg",
        desc: "https://youtu.be/cywgStaoW0s",
      },
      {
        id: 9,
        name: "Aquarium Mini",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaca%20-%20Aquarium%20Mini.jpg",
        desc: "https://youtu.be/dYjdwRlslnI",
      },
      {
        id: 10,
        name: "Kaligrafi",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaca%20-%20Kaligrafi.jpg",
        desc: "https://youtu.be/mhdLPVxHdZQ",
      },
    ],
  },
  {
    name: "Aluminium",
    id: 4,
    icon: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Waste%20-%20Kaleng.jpg", // link gambar kaleng atau panci
    recomendation: [
      {
        id: 1,
        name: "Tempat Pensil",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaleng%20-%20Tempat%20Pensil.jpg", // link gambar
        desc: "https://youtu.be/hIzjUFDMOac",
      },
      {
        id: 2,
        name: "Souvenir Nama",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaleng%20-%20Souvenir%20Nama.jpg",
        desc: "https://youtu.be/-r9fIZ3f7fI",
      },
      {
        id: 3,
        name: "Teko",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaleng%20-%20Teko.jpg",
        desc: "https://youtu.be/nOEGsG1Oc7E",
      },
      {
        id: 4,
        name: "Kap Lampu Tidur",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaleng%20-%20Kap%20Lampu%20Tidur.jpg",
        desc: "https://youtu.be/5HFS5rxwuus",
      },
      {
        id: 5,
        name: "Room Dekor",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaleng%20-%20Room%20Dekor.jpg",
        desc: "https://youtu.be/ficFQIrZHd8",
      },
      {
        id: 6,
        name: "Pot Bunga",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaleng%20-%20Pot%20Bunga.jpg",
        desc: "https://youtu.be/vU-f_cI1FjE",
      },
      {
        id: 7,
        name: "Lentera Alumunium",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaleng%20-%20Lentera.jpg",
        desc: "https://youtu.be/EkYRd5J0ws0",
      },
      {
        id: 8,
        name: "Tempat Tisu",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kaleng%20-%20Tempat%20Tissue.jpg",
        desc: "https://youtu.be/9LMnHCYBq3g",
      },
    ],
  },
  {
    name: "Textiles",
    id: 5,
    icon: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Waste%20-%20Kain.jpg", // link gambar tekstil
    recomendation: [
      {
        id: 1,
        name: "Hiasan Ruangan",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kain%20-%20Room%20Dekor.jpg", // link gambar
        desc: "https://youtu.be/bBeHHhfxXJI",
      },
      {
        id: 2,
        name: "Taplak Meja Motif",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kain%20-%20Taplak%20Meja%20Motif.jpg",
        desc: "https://youtu.be/Sgue4azjgoU",
      },
      {
        id: 3,
        name: "Keset",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kain%20-%20Keset.jpg",
        desc: "https://youtu.be/H8KW1pfy95g",
      },
      {
        id: 4,
        name: "Tas Serut",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kain%20-%20Tas%20Serut.jpg",
        desc: "https://youtu.be/BvzcW3363FI",
      },
      {
        id: 5,
        name: "Ikat Rambut",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kain%20-%20Ikat%20Rambut.jpg",
        desc: "https://youtu.be/pOe2tXUnwxw",
      },
      {
        id: 6,
        name: "Tempat Pensil Kain",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kain%20-%20Tempat%20Pensil.jpg",
        desc: "https://youtu.be/LKFYQALRhMc",
      },
      {
        id: 7,
        name: "Bunga Kain",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kain%20-%20Bunga.jpg",
        desc: "https://youtu.be/8jdsKR3MOpM",
      },
      {
        id: 8,
        name: "Tempat Tisu Kain",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kain%20-%20Tempat%20Tissue.jpg",
        desc: "https://youtu.be/knmHT5nOm3o",
      },
    ],
  },
  {
    name: "Carton",
    id: 6,
    icon: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Waste%20-%20Kotak%20Minuman.jpg", // link gambar kotak susu
    recomendation: [
      {
        id: 1,
        name: "Dompet",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kotak%20Minum%20-%20Dompet.jpg", // link gambar
        desc: "https://www.youtube.com/watch?v=vlgmtESTGMs",
      },
      {
        id: 2,
        name: "Penyimpan Pensil",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kotak%20Minum%20-%20Tempat%20Pensil.jpg",
        desc: "https://www.youtube.com/watch?v=RcDCr0ggZZo",
      },
      {
        id: 3,
        name: "Rak Gantung",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kotak%20Minum%20-%20Rak%20Gantung.jpg",
        desc: "https://www.youtube.com/watch?v=buNP-2QGSUs",
      },
      {
        id: 4,
        name: "Phone Case",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kotak%20Minum%20-%20Phone%20case.jpg",
        desc: "https://www.youtube.com/watch?v=3L3rTnYUklE",
      },
      {
        id: 5,
        name: "Dompet Koin",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kotak%20Minum%20-%20Dompet%20Koin.jpg",
        desc: "https://www.youtube.com/watch?v=J3_fEY95Kqs",
      },
      {
        id: 6,
        name: "Vas Bunga",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Kotak%20Minum%20-%20Vas%20Bunga.jpg",
        desc: "https://www.youtube.com/watch?v=gYu3SHCj8C4",
      },
    ],
  },
  {
    name: "Styrofoam",
    id: 7,
    icon: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Waste%20-%20Styrofoam.jpg", // link gambar kotak susu
    recomendation: [
      {
        id: 1,
        name: "Hiasan Dinding",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Styrofoam%20-%20Hiasan%20Dinding.jpg", // link gambar
        desc: "https://www.youtube.com/watch?v=XPB_W33iA1g",
      },
      {
        id: 2,
        name: "Bonsai Sakura",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Styrofoam%20-%20Bonsai%20Sakura.jpg",
        desc: "https://www.youtube.com/watch?v=IoHXIlzpUYg",
      },
      {
        id: 3,
        name: "Hiasan Dinding Styrofoam",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Styrofoam%20-%20Hiasan%20Dinding2.jpg",
        desc: "https://www.youtube.com/watch?v=NF6iwWe_f0Y",
      },
      {
        id: 4,
        name: "Lampu Hias",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Styrofoam%20-%20Lampu%20Hias.jpg",
        desc: "https://www.youtube.com/watch?v=d9obx_ylB3c",
      },
    ],
  },
  {
    name: "Organic Waste",
    id: 8,
    icon: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Waste%20-%20Organic.jpg", // link gambar kotak susu
    recomendation: [
      {
        id: 1,
        name: "Tempat Sampah Organik",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Organik%20-%20tempat%20sampah.jpg", // link gambar
        // desc: "", tidak ada direct link nya
      },
      {
        id: 2,
        name: "Eco Enzyme dari Sayur dan Buah",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Organik%20-%20Eco%20Enzyme.jpg",
        desc: "http://cybex.pertanian.go.id/artikel/100494/pembuatan-eco-enzym-untuk-pertanian/",
      },
      {
        id: 3,
        name: "Pupuk Organik dari Nasi",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Organik%20-%20Pupuk%20Cair%20dari%20Nasi.jpg",
        desc: "https://www.youtube.com/watch?v=5yNldnmFNz4",
      },
      {
        id: 4,
        name: "Pupuk Organik dari Daun",
        image: "https://storage.googleapis.com/cycleme-pictures/Gambar%20Produk/Organik%20-%20Pupuk%20dari%20Daun.jpg",
        desc: "http://cybex.pertanian.go.id/mobile/artikel/87753/Cara-Membuat-Pupuk-Organik-Dari-Daun/",
      },
    ],
  },
];

app.get("/", (req, res) => {
  res.status(200).send(waste);
});

app.post("/", (req, res) => {
  const category = req.body.category;
  if (!category) {
    res.status(401).send({ message: "category tidak boleh kosong" });
    return;
  }

  const result = waste.find((item) => item.name === category);
  if (!result) {
    res.status(404).send({ message: "category tidak ditemukan" });
    return;
  }

  res.status(200).send(result.recomendation);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});