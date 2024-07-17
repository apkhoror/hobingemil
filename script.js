const daftarProduk = document.querySelector(".daftar-produk");

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const results = JSON.parse(xhr.responseText);

    results.forEach((result) => {
      const produk = `<a class="produk" href="${result.link}">
              <img src="${result.img}" alt="" />
              <p>${result.nama}</p>
              <span><b>[ ${result.satuan} ]</b></span>
              <p>${result.harga} <span>${result.harga_awal}</span></p>
        </a>`;
      daftarProduk.innerHTML += produk;
    });
  }
};

xhr.open("GET", "produk.json", true);
xhr.send();
