const tglNow = new Date().getDate();
tglRam = tglNow + 7;
toSyawal = 24-tglNow;

$('#quote').text(`${tglRam}  Ramadhan. Lebaran ${toSyawal} hari lagi.`);