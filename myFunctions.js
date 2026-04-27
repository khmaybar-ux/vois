function toggleDetails(btn){
    let row = $(btn).closest("tr").next();

    if(row.css("display") === "none"){
        row.css("display", "table-row");
    } else {
        row.css("display", "none");
    }
}
function checkout(){
    let meals = $(".meal:checked");

    if(meals.length === 0){
        alert(" يجب اختيار وجبة واحدة على الأقل");
        return;
    }

    $("#overlay").show();
    $("#formBox").show();
}

function closeForm(){
    $("#overlay").hide();
    $("#formBox").hide();
}

function submitOrder(){
    let name = $("#name").val();
    let national = $("#national").val();
    let birth = $("#birth").val();
    let phone = $("#phone").val();
    let email = $("#email").val();

    if(national.length !== 11){
        alert("خطأ في الإدخال");
        return;
    }

    let meals = $(".meal:checked");
    let total = 0;

    meals.each(function(){
        total += parseInt($(this).val());
    });

    let tax = total * 0.05;
    let final = total + tax;

    alert(
        "Name: " + name +
        "\nTotal: " + total +
        "\nTax: " + tax +
        "\nFinal: " + final
    );
}