"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    $("#subtotal").focus();

    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearFields);
    $("#subtotal").addEventListener("click", () => $("#subtotal").value = "");
    $("#tax_rate").addEventListener("click", () => $("#tax_rate").value = "");
});

function processEntries() {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#tax_rate").value);

    // Validation
    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert("Subtotal must be greater than 0 and less than 10,000");
        $("#subtotal").focus();
        return;
    }
    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert("Tax rate must be greater than 0 and less than 12");
        $("#tax_rate").focus();
        return;
    }

    // Calculations
    const salesTax = parseFloat((subtotal * (taxRate / 100)).toFixed(2));
    const invoiceTotal = parseFloat((subtotal + salesTax).toFixed(2));

    // Display results
    $("#sales_tax").value = salesTax;
    $("#total").value = invoiceTotal;

    $("#subtotal").focus();
}

function clearFields() {
    $("#subtotal").value = "";
    $("#tax_rate").value = "";
    $("#sales_tax").value = "";
    $("#total").value = "";
    $("#subtotal").focus();
}
