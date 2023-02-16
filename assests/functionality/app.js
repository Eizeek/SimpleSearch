const names = [
    {name: "Aziz"},
    {name: "Imran"},
    {name: "Eltac"},
    {name: "Zarangul"},
    {name: "Zamir"},
    {name: "Eshgin"},
    {name: "Farid"},
    {name: "Shahlar"},
    {name: "Monica"},
    {name: "Vusal"},
    {name: "Goodrat"},
    {name: "Coshgoon"}
  ];
  
  function searchNames() {
    const searchInput = document.getElementById("searchInput");
    const namesList = document.getElementById("namesList");
  
    const filteredNames = names.filter(name => {
      return name.name.toLowerCase().includes(searchInput.value.toLowerCase());
    });
  
    namesList.innerHTML = "";
    filteredNames.forEach(name => {
      const li = document.createElement("li");
      li.textContent = name.name;
      namesList.appendChild(li);
    });
  }
  