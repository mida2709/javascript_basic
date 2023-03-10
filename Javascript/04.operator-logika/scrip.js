const nilaiIPA = 70;
const nilaiMATEMATIKA = 90;
const nilaiIPS = 80;
const nilaiBAHASA = 60;

const lulus = nilaiIPA > 70 && nilaiMATEMATIKA > 70
                    && nilaiMATEMATIKA > 70 && nilaiBAHASA > 70

console.log('lulusKedokteran =', lulusKedokteran)

const lulusInformatika = nilaiIPA > 70 || nilaiIPS >70
                            || nilaiBAHASA > 70 && nilaiMATEMATIKA >80

console.log('lulusInformatika =', lulusInformatika)

const lulusSekolah = (nilaiIPA + nilaiBAHASA + nilaiMATEMATIKA ) / 4 > 70

console.log ('lulusSekolah =', lulusSekolah)

const lulusKeperawatan = !lulusKedokteran && lulusSekolah

console.log ('lulusKeperawatan =', lulusKeperawatan)

console.log((lulusKeperawatan && lulusSekolah) || (lulusSekolah && lulusKedokteran));