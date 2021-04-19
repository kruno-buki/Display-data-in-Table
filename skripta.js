// HARDKODIRANI PODACI
const korisnici = [{
        id: 12,
        name: "Marko",
        surname: "Blazicko",
        godine: 20
    },
    {
        id: 22,
        name: "Ana",
        surname: "Anic",
        godine: 23
    },
    {
        id: 34,
        name: "Pero",
        surname: "Perica",
        godine: 13
    },
    {
        id: 678,
        name: "Gusar",
        surname: "Husar",
        godine: 14
    },
    {
        id: 1212,
        name: "Tomy",
        surname: "Tomic",
        godine: 10
    },
    {
        id: 11112,
        name: "Suzana",
        surname: "Suzuki",
        godine: 50
    },
    {
        id: 1998,
        name: "Sebastijan",
        surname: "Horvat",
        godine: 19
    },

];
const tablicaEl = document.querySelector('table');
const headersTable = document.querySelector('#headersTable');
const btnKreiraj = document.getElementById('kreiraj');


// !--------------------------------------------------------
// ! refresh TABLICE SA ONIM ŠTO IMAM...inicijalno punjenje
function refreshTablica() {

    for (let i = 0; i < korisnici.length; ++i) {

        // ? kreiranje retka
        let tr = document.createElement('tr');
        //dodajem  'table row' klasu naziva KL
        tr.classList.add("KL");

        // ? UMETANJE podataka u svaku ćeliju
        //for id
        let td1 = document.createElement('td');
        td1.textContent = korisnici[i].id; //add text content from array of objects
        tr.append(td1); //append ćelije na red

        // for names
        let td2 = document.createElement('td');
        td2.textContent = korisnici[i].name;
        tr.append(td2);

        //for surname
        let td3 = document.createElement('td')
        td3.textContent = korisnici[i].surname;
        tr.append(td3);

        //for age
        let td4 = document.createElement('td');
        td4.textContent = korisnici[i].godine;
        tr.append(td4);


        //? na kraju append red na tablicu
        tablicaEl.append(tr);

    }
}
//in a start ...call function to create and to fulfill table in browser
refreshTablica(); 

// !--------------------------------------------------------

// !SEARCH TABLE - pretraga po  tablici
const myInputID = document.getElementById('searchID');
const myInputName = document.getElementById('searchName');
const myInputSurname = document.getElementById('searchSurname');
const myInputYears = document.getElementById('searchYears');

//! for ID
myInputID.addEventListener('keyup', () => {
    // varijable
    let input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("searchID");
    filter = input.value.toUpperCase(); // unos pretvori u velika slova
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr"); //collection of the tags 

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];

        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = ""; // normal view
            } else {
                tr[i].style.display = "none"; // disappear
            }
        }
    }
})
//!name
myInputName.addEventListener('keyup', () => {
    // varijable
    let input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("searchName");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];

        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }

    }

})
//!surname
myInputSurname.addEventListener('keyup', () => {
    // varijable
    let input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("searchSurname");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];


        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }

    }

})
//!Years
myInputYears.addEventListener('keyup', () => {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("searchYears");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];


        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }

    }

})
// !--------------------------------------------------------

//! SORTIRANJE / SORTING 

const th = document.querySelectorAll('th'); 
// console.log(th[0]); //<th> (#ID)
const sort_id = document.getElementById('sort_id');
const sort_name = document.getElementById('sort_name');
const sort_surname = document.getElementById('sort_surname');
const sort_years = document.getElementById('sort_years');

//? IDEA: -sort a array of objects; - delete table in the browser; - refresh table 

// th[0] ...ako želiš sortirati klikom na header
sort_id.addEventListener("click", () => {

    korisnici.sort((a, b) => a.id - b.id);
    deletetTableRows();
    refreshTablica();


})
//th[1] ...klik na header
sort_name.addEventListener("click", () => {

    korisnici.sort((a, b) => a.name.localeCompare(b.name));
    deletetTableRows();
    refreshTablica();


})
// th[2] sort_surname ...klik na header
sort_surname.addEventListener("click", () => {

    korisnici.sort((a, b) => a.surname.localeCompare(b.surname));
    deletetTableRows();
    refreshTablica();


})
// th[3]...klik na header
sort_years.addEventListener("click", () => {

    korisnici.sort((a, b) => a.godine - b.godine);
    deletetTableRows();
    refreshTablica();
})

// ! brisanje TABLICE (- after sorting, you need refresh table)
function deletetTableRows() {

    tr = document.getElementsByClassName('KL');
    // console.log(tr.length);

    for (let i = 0; i < tr.length; i++) {

        tr[i].textContent = '';
    }
    // empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr

}

// !--------------------------------------------------------
// ! ADDING A NEW MEMBER
//? klik button-kreacija
btnKreiraj.addEventListener('click', () => {
    let createId = parseInt(document.getElementById('id').value);
    let createName = document.getElementById('ime').value;
    let createSurname = document.getElementById('prezime').value;
    let createGodine = parseInt(document.getElementById('godine').value);

    //check fields
    provjeraPolja(createId, createName, createSurname, createGodine);

    deletetTableRows();
    refreshTablica();

})
//! PROVJERA SVIH UNOSA U POLJA
function provjeraPolja(createId, createName, createSurname, createGodine) {
    let flagBlizanac = false;

    //? provjera ID
    for (let i = 0; i < korisnici.length; ++i) {
        if (korisnici[i].id === createId) {
            flagBlizanac = true;
            console.log(korisnici[i].id);
        }
    }
    //? provjera praznih polja
    if (!createId || !createName || !createSurname || !createGodine) {
        alert("Moraš unijeti sva polja!");
        return;
    }
    if (flagBlizanac) {
        alert("Postoji korisnik sa istim ID!");
        return;
    } else {
        korisnici.push({
            id: createId,
            name: createName,
            surname: createSurname,
            godine: createGodine
        })
    }
    //field emptying
    id.value='';
    ime.value= '';
    prezime.value = '';
    godine.value = '';
}