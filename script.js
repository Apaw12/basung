// Dictionary data
var dictionary = [
    { english: "Apple", indonesian: "Apel" },
    { english: "Book", indonesian: "Buku" },
    { english: "Car", indonesian: "Mobil" },
    { english: "House", indonesian: "Rumah" },
    { english: "Computer", indonesian: "Komputer" }
];

// Function to populate the dictionary list
function populateDictionary() {
    var ul = document.getElementById('dictionaryList');
    ul.innerHTML = ''; // Clear previous content

    // Loop through the dictionary data and create list items
    dictionary.forEach(function(item) {
        var li = document.createElement('li');
        li.innerHTML = '<strong>' + item.english + '</strong> - ' + item.indonesian;
        ul.appendChild(li);
    });
}

// Call the function to populate the dictionary list initially
populateDictionary();

// Function to search the dictionary
function searchDictionary() {
    var input, filter, ul, li, strong, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('dictionaryList');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        strong = li[i].getElementsByTagName('strong')[0];
        txtValue = strong.textContent || strong.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
