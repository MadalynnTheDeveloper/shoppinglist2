window.onload = function () {
    initShoppingList();
};

function initShoppingList() {
    let form = document.getElementById("item-form")

    form.addEventListener("submit", (event) => {
        handleItemForm(e, form);
    });
}

function handleItemForm(event, formRef) {
    if(e.preventDefault) {
        e.preventDefault();
    }

    addItemToShoppingList();
    formRef.reset();
    console.log(demo);

    return false;
}
function addItemToShoppingList() {
    let itemName = document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount");
    let id = getRandomInt (0, 1000000);

    // Creates list item html and appends tp page.
    let itemHtml = createListItemHtml(itemName.value, itemAmount.value);
    console.log("Item HTML:", itemHtml);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml) ;

    setDeleteButtonEvent(id);
}

function setDeleteButtonEvent(id) {
    let deleteButton = document.getElementById("button" +id);
    deleteButton.addEventListener("click", () => {
        removalListItem(id);
    });
}

function createListItemHtml(itemName, itemAmount) {
    return '<li> id="item${id}">
                 ${itemName} - ${itemAmount}
                  <button id="button${}">Delete Item</button>
            </li>';id
}
function removeListItem(id) {
    let listItem = document.getElementById("item" +id);
    listItem.parentNode.removeChild(listItem);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) +min; //The maximum is exact
}