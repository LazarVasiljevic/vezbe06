let godine:number=25;
let ime:string="majmun";
let studira:boolean=true;



let predmeti:string[]=["EPOS","Cloud"];
let ocene:number[]=[10,9,8];


let tuple:[string,number]=["Lazar", 50];



enum Modul{
    TehnologijeEP,
    Softversko,
    InformacioniSistemi
}

let modul:Modul=Modul.TehnologijeEP;



let student:{ime:string,godine:number,studira:boolean}={
    ime:"Danica",
    godine:21,
    studira:true
}

let brojIliString:number | string=10;


let biloSta:any="Moze bilo koji tip";

function cap():void{
    console.log("cao");
}

let n:null=null;
let u:undefined=undefined;


let nekaVrednost:any="Neki sting";
let duzinaStringa:number=(nekaVrednost as String).length;


console.log(godine,ime,studira);
console.log(predmeti,ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n,u);
console.log(duzinaStringa);
