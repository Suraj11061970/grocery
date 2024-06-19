document.addEventListener("DOMContentLoaded", function() {
    const addItemButton = document.getElementById("addItemButton");
    const itemInput = document.getElementById("itemInput");
    const shoppingList = document.getElementById("shoppingList");
  
    addItemButton.addEventListener("click", function() {
      const itemText = itemInput.value.trim();
      if (itemText !== "") {
        addItemToList(itemText);
        itemInput.value = "";
        itemInput.focus();
      }
    });
  
    itemInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        addItemButton.click();
      }
    });
  
    function addItemToList(itemText) {
      const li = document.createElement("li");
      li.textContent = itemText;
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-button");
      removeButton.addEventListener("click", function() {
        shoppingList.removeChild(li);
      });
  
      li.appendChild(removeButton);
      shoppingList.appendChild(li);
    }
  });
  