var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

function dataHandling2 () {
  input.splice(1,1,"Roman Alamsyah Elsharawy")
  input.splice(2,1,"Provinsi Bandar Lampung")
  input.splice(4,1,"Pria", "SMA Internasional Metro")
  console.log(input);

  var date= input[3].split("/");

  var bulan= date[1];
  switch(bulan){
    case '01': {console.log("Januari")}; break;
    case '02': { console.log("Febuari")}; break;
    case '03': { console.log("Maret")}; break;
    case '04': { console.log("April")}; break;
    case '05': { console.log("Mei")}; break;
    case '06': { console.log("Juni")}; break;
    case '07': { console.log("Juli")}; break;
    case '08': { console.log("Agustus")}; break;
    case '09': { console.log("September")}; break;
    case '10': { console.log("Oktober")}; break;
    case '11': { console.log("November")}; break;
    case '12': { console.log("Desember")}; break;
    default: { console.log("tidak ada")} break;
  }

  var dateFormat= date;
  dateFormat.sort(function(a, b) { return b-a });
  console.log(dateFormat);

  var dateJoin=input[3].split("/").join("-");
  console.log(dateJoin);

  var nama= input[1];
  var namaBatas= nama.slice(0,15).toString();
  console.log(namaBatas);

}