var godine = 25;
var ime = "majmun";
var studira = true;
var predmeti = ["EPOS", "Cloud"];
var ocene = [10, 9, 8];
var tuple = ["Lazar", 50];
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeEP"] = 0] = "TehnologijeEP";
    Modul[Modul["Softversko"] = 1] = "Softversko";
    Modul[Modul["InformacioniSistemi"] = 2] = "InformacioniSistemi";
})(Modul || (Modul = {}));
var modul = Modul.TehnologijeEP;
var student = {
    ime: "Danica",
    godine: 21,
    studira: true
};
var brojIliString = 10;
var biloSta = "Moze bilo koji tip";
function cap() {
    console.log("cao");
}
var n = null;
var u = undefined;
var nekaVrednost = "Neki sting";
var duzinaStringa = nekaVrednost.length;
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n, u);
console.log(duzinaStringa);
