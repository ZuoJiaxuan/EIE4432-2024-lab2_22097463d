function calculatePrice() {
    let price = 0;
    const selectedDrink = document.getElementById('drink').value;
    const selectedSize = document.querySelector('input[name="size"]:checked');

    if (selectedDrink !== "") {
        if (selectedDrink === "Bubble Milktea") {
            if (selectedSize) {
                if (selectedSize.id === "Small") {
                    price += 12;
                } else if (selectedSize.id === "Medium") {
                    price += 18;
                } else if (selectedSize.id === "Large") {
                    price += 24;
                }
            }
        } else if (selectedDrink === "Iced Latte") {
            if (selectedSize) {
                if (selectedSize.id === "Small") {
                    price += 15;
                } else if (selectedSize.id === "Medium") {
                    price += 20;
                } else if (selectedSize.id === "Large") {
                    price += 25;
                }
            }
        } else if (selectedDrink === "Cola") {
            if (selectedSize) {
                if (selectedSize.id === "Small") {
                    price += 11;
                } else if (selectedSize.id === "Medium") {
                    price += 14;
                } else if (selectedSize.id === "Large") {
                    price += 17;
                }
            }
        }

        document.getElementById('price').textContent = price;
    } else {
        alert("Please select a drink.");
        document.querySelectorAll('input[name="size"]').forEach(radio => radio.checked = false);
        document.querySelectorAll('input[name="ice"]').forEach(radio => radio.checked = false);
        document.querySelectorAll('input[name="sweetness"]').forEach(radio => radio.checked = false);
    }
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const drink = document.getElementById("drink").value;
    const size = document.querySelector('input[name="size"]:checked');
    const ice = document.querySelector('input[name="ice"]:checked');
    const sweetness = document.querySelector('input[name="sweetness"]:checked');

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (!drink) {
        alert("Please select a drink first.");
        return false;
    }

    if (!size) {
        alert("Please select a size.");
        return false;
    }

    if (!ice) {
        alert("Please select an ice preference.");
        return false;
    }

    if (!sweetness) {
        alert("Please select a sweetness level.");
        return false;
    }

    return true;
}

function placeOrder(event) {
    event.preventDefault();
    
    if (validateForm()) {
        const name = document.getElementById("name").value.trim();
        const drink = document.getElementById("drink").value;
        const size = document.querySelector('input[name="size"]:checked');
        const ice = document.querySelector('input[name="ice"]:checked');
        const sweetness = document.querySelector('input[name="sweetness"]:checked');

        const orderData = [name, drink, size.id, ice.id, sweetness.id];
        localStorage.setItem("orders", JSON.stringify(orderData));

        alert("Order placed successfully! Thank you for your order.");
    }
}

function resetForm() {
        document.getElementById("order-form").reset();

        document.getElementById('price').textContent = "0";
}