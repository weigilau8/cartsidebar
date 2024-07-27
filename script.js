let runningTotal = 0;
let selectedItems = [];

function openSidebar(event) {
    // Stop the event from bubbling up the DOM hierarchy
    event.stopPropagation();

    // Get the name and price elements from the clicked item
    const itemNameElement = event.currentTarget.parentElement.querySelector('h2');
    const itemPriceElement = event.currentTarget.parentElement.querySelector('.price'); // Assuming a class 'price' for the price element

    // Extract the item name and price as text
    const itemName = itemNameElement.innerText;
    const itemPriceText = itemPriceElement.innerText;

    // Parse the item price as a float
    const itemPrice = parseFloat(itemPriceText.slice(1));

    // Add the item to the selected items list
    selectedItems.push({ name: itemName, price: itemPrice });

    // Display the selected items on the sidebar
    displaySelectedItems();

    // Add the price to the running total
    runningTotal += itemPrice;

    // Display the updated total on the sidebar
    document.getElementById("totalDisplay").innerText = "Total: $" + runningTotal;

    // Code to open the sidebar
    document.getElementById("sidebar").style.width = "180px";
    document.getElementById("main").style.marginRight = "250px";
}

// Add an event listener to each "Add to Cart" button
document.querySelectorAll('.card button').forEach(button => {
    button.addEventListener('click', openSidebar);
});

function closeSidebar() {
    // Code to close the sidebar
    document.getElementById("sidebar").style.width = "0";
    // Adjust the following line if "main" is not an element in your HTML
    document.getElementById("main").style.marginRight = "0";

    // Reset the selected items list and total when the sidebar is closed
    selectedItems = [];
    runningTotal = 0;

    // Clear the displayed items and total on the sidebar
    document.getElementById("selectedItem").innerText = "Selected Items:";
    document.getElementById("totalDisplay").innerText = "Total: $0";
}

function displaySelectedItems() {
    // Display the selected items on the sidebar
    const selectedItemElement = document.getElementById("selectedItem");
    selectedItemElement.innerText = "Selected Items:";

    selectedItems.forEach(item => {
        const itemDisplay = document.createElement('p');
        itemDisplay.innerText = item.name + ' - $' + item.price;
        selectedItemElement.appendChild(itemDisplay);
    });
}
