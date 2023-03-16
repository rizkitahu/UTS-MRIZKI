class kuda {
    constructor(namaArg, makanArg, skilArg, kekuranganArg, hargaArg) {
        this.nama = namaArg;
        this.makan = makanArg;
        this.skil = skilArg;
        this.kekurangan = kekuranganArg;
        this.harga = hargaArg;
    }
    carimakan(tempat) {
        return " kuda " + this.nama + " sedang makan di " + tempat
    }
    jalan(tempat) {
        return " kuda " + this.nama + " pergi ke " + tempat
    }
}

var kudaNehan = new kuda('nehan', 'rumput', 'lari cepat', 'staminanya dikit', 10000000);
console.log(kudaNehan.nama);
console.log(kudaNehan.makan);
console.log(kudaNehan.skil);
console.log(kudaNehan.kekurangan);
console.log(kudaNehan.harga);

console.log(kudaNehan.carimakan("padang rumput"))
console.log(kudaNehan.jalan("hutan"))