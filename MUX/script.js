// sessionStorage.clear();

// localStorage.clear();

// landing page functions
if (sessionStorage.user) {
    const user = JSON.parse(sessionStorage.user);
    document.getElementById("log-in").innerHTML =
        '<a class="ui-link" href="#profile" data-transition="pop"><div class="ui-circle"><img class="ui-image" src="images/noun_profile_232455 2.png"></div><div class="ui-text">Profile</div></a>';
    document.getElementById("sign-up").innerHTML =
        '<a class="ui-link" href="#cart" data-transition="pop"><div class="ui-circle"><img class="ui-image" src="images/sup 1.png"></div><div class="ui-text">Cart</div></a>';
    document.getElementById("user_name").innerHTML = user.name;
    document.getElementById("nav_user_name").innerHTML = user.name;
    document.getElementById("nav_user_email").innerHTML = user.email;
    document.getElementById("checkout_user_name").innerHTML = user.name;
    document.getElementById("checkout_user_no").innerHTML = user.phonenumber;
    // displayPoints();
}

// login form functions
function lform() {
    let email = document.getElementById("lemail").value;
    let password = document.getElementById("lpassword").value;
    // Get user list from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Check if user exists
    const user = users.find(
        (user) => user.email === email && user.password === password
    );
    if (!user) {
        alert("Incorrect email or password");
        return;
    }
    // Set user in session storage
    sessionStorage.setItem("user", JSON.stringify(user));
    // Update html element
    document.getElementById("user_name").innerHTML = user.name;
    document.getElementById("nav_user_name").innerHTML = user.name;
    document.getElementById("nav_user_email").innerHTML = user.email;
    document.getElementById("log-in").innerHTML =
        '<a class="ui-link" href="#profile" data-transition="pop"><div class="ui-circle"><img class="ui-image" src="images/noun_profile_232455 2.png"></div><div class="ui-text">Profile</div></a>';
    document.getElementById("sign-up").innerHTML =
        '<a class="ui-link" href="#cart" data-transition="pop"><div class="ui-circle"><img class="ui-image" src="images/sup 1.png"></div><div class="ui-text">Cart</div></a>';
    document.getElementById("checkout_user_name").innerHTML = user.name;
    document.getElementById("checkout_user_no").innerHTML = user.phonenumber;
    // Redirect to landing page
    window.location.href = "#landing";
    // Update customer points
    displayPoints();
}

// register form functions
function rform() {
    let name = document.getElementById("rname").value;
    let email = document.getElementById("remail").value;
    let phonenumber = document.getElementById("rphonenumber").value;
    let password = document.getElementById("rpassword").value;
    let cpassword = document.getElementById("rcpassword").value;
    // Check if all fields are filled
    if (!name || !email || !phonenumber || !password || !cpassword) {
        return;
    }
    // Check if passwords match
    if (password !== cpassword) {
        alert("Passwords do not match");
        return;
    }
    // Get user list from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Check if user email already exists
    const userExist = users.some((user) => user.email === email);
    if (userExist) {
        alert("User with this email already exists");
        return;
    }
    // Add user to local storage
    const userData = {
        name,
        email,
        phonenumber,
        password,
    };
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "#login";
}

// wishlist functions
$(document).on('pagecontainerbeforehide', 'body', function (event, ui) {
    // add to list
    if (ui.nextPage.attr('id') == "wishlist") {
        $("#wishlist-products").html("");
        var retrievedDatas = localStorage.getItem("list");
        var retrievedData = JSON.parse(retrievedDatas);
        if (retrievedData) {
            var list = retrievedData;
        } else {
            var list = [];
        }
        console.log(list);
        if ($("#wishlist1").is(":checked")) {
            if (list.includes("tomatoe")) {
                // nothing
            } else {
                list.push("tomatoe");
                console.log(list);
                localStorage.setItem("list", JSON.stringify(list));
            }
            $("#wishlist-products").append('<div class="wishlist-product-content"><div class="wishlist-product-img"><img src="images/PngItem_1112946 1.png"><div class="wishlist-icon"><img onclick="addtocart(1); pop();" id="pop1" src="images/cart.png"></div></div><div class="wishlist-product-name">Tomatoes</div><div class="wishlist-product-price">LKR 100</div></div>');
            
        }
        if ($("#wishlist2").is(":checked")) {
            if (list.includes("coca cola")) {
                // nothing
            } else {
                list.push("coca cola");
                console.log(list);
                localStorage.setItem("list", JSON.stringify(list));
            }
            $("#wishlist-products").append('<div class="wishlist-product-content"><div class="wishlist-product-img"><img src="images/coca 1.png"><div class="wishlist-icon"><img onclick="addtocart(2)" id="pop" src="images/cart.png"></div></div><div class="wishlist-product-name">Coca cola</div><div class="wishlist-product-price">LKR 150</div></div>');
        }
        if ($("#wishlist3").is(":checked")) {
            if (list.includes("hawaian cookies")) {
                // nothing
            } else {
                list.push("hawaian cookies");
                console.log(list);
                localStorage.setItem("list", JSON.stringify(list));
            }
            $("#wishlist-products").append('<div class="wishlist-product-content"><div class="wishlist-product-img"><img src="images/hawaian 1.png"><div class="wishlist-icon"><img onclick="addtocart(3)" id="pop" src="images/cart.png"></div></div><div class="wishlist-product-name">Hawaian cookies</div><div class="wishlist-product-price">LKR 200</div></div>');
        }
    }
});
function pop(){
    document.querySelector("#pop1").addEventListener("click", () => {
        document.getElementById("waddtocartpop").style.display = "block";
    });
    document.querySelector(".waddtocartok").addEventListener("click", () => {
        document.getElementById("waddtocartpop").style.display = "none";
    });
    document.querySelector("#pop2").addEventListener("click", () => {
        document.getElementById("waddtocartpop").style.display = "block";
    });
    document.querySelector(".waddtocartok").addEventListener("click", () => {
        document.getElementById("waddtocartpop").style.display = "none";
    });
    document.querySelector("#pop3").addEventListener("click", () => {
        document.getElementById("waddtocartpop").style.display = "block";
    });
    document.querySelector(".waddtocartok").addEventListener("click", () => {
        document.getElementById("waddtocartpop").style.display = "none";
    });
}

// email
function email(){
    var retrievedDatas = sessionStorage.getItem("user");
    var retrievedData = JSON.parse(retrievedDatas);
    if (retrievedData) {
        var email = retrievedData.email;
        console.log(email);
        var retrievedlists = localStorage.getItem("list");
        var retrievedlist = JSON.parse(retrievedlists);
        if (retrievedlist) {
            var body= "";
            for (let i = 0; i < retrievedlist.length; i++) {
                console.log(retrievedlist);
                body = body + retrievedlist[i]+'<br>';
            }
            console.log(body);
        }
    }
    (function() {
        emailjs.init("user_fLBMCu6TQ5iMBRkJtKJc7");
    })();
    //set the parameter as per you template parameter[https://dashboard.emailjs.com/templates]
  var templateParams = {
    to_name: email,
    from_name: "Freshway",
    message_html: body
  };

  emailjs.send('service_xencckf', 'template_u1ziytz', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert("Email sent");
    }, function(error) {
      console.log('FAILED...', error);
      alert("Email failed");
    });
}
// function email() {
//     var retrievedDatas = sessionStorage.getItem("user");
//     var retrievedData = JSON.parse(retrievedDatas);
//     if (retrievedData) {
//         var email = retrievedData.email;
//         console.log(email);
//         var retrievedlists = localStorage.getItem("list");
//         var retrievedlist = JSON.parse(retrievedlists);
//         if (retrievedlist) {
//             var body = "your list ";
//             for (let i = 0; i < retrievedlist.length; i++) {
//                 console.log(retrievedlist);
//                 var body = body + " " + retrievedlist[i];
//             }
//             console.log(body);
//         }
//     }
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "harithroo.2018531@gmail.com",
//         Password: "Onepiece2018531",
//         To: "harithroo10@gmail.com",
//         From: "harithroo.2018531@gmail.com",
//         Subject: "Sending Email using javascript",
//         Body: "Well that was easy!!",
//     })
//         .then(function (message) {
//             alert("mail sent successfully")
//         });
// }
// item page functions
// item page plus minus
var amount = 1;
function product_plus(a) {
    amount = amount + 1;
    // document.getElementById("single-product-amount"+a+"").innerHTML = amount;
    document.getElementById("single-product-amount" + a + "").value = amount;
}
function product_minus(a) {
    if (amount > 1) {
        amount = amount - 1; e
        // document.getElementById("single-product-amount"+a+"").innerHTML = amount;
        document.getElementById("single-product-amount" + a + "").value = amount;
    }
}

// add to cart
function addtocart(p) {
    var retrievedDatas = localStorage.getItem("products");
    var retrievedData = JSON.parse(retrievedDatas);
    if (retrievedData) {
        cart = retrievedData;
        let tomatoe = cart[0];
        console.log(cart[0]);
        let cocacola = cart[1];
        console.log(cart[1]);
        let hawaiancookies = cart[2];
        console.log(cart[2]);
        if (p == 1) {
            amount = document.getElementById("single-product-amount" + p + "").value;
            amount = Number(amount);
            tomatoe.amount = amount;
        }
        if (p == 2) {
            amount = document.getElementById("single-product-amount" + p + "").value;
            amount = Number(amount);
            cocacola.amount = amount;
        }
        if (p == 3) {
            amount = document.getElementById("single-product-amount" + p + "").value;
            amount = Number(amount);
            hawaiancookies.amount = amount;
        }
        let products = [tomatoe, cocacola, hawaiancookies]
        localStorage.setItem("products", JSON.stringify(products));
    } else {
        if (p == 1) {
            let tomatoe =
            {
                name: 'tomatoe',
                price: 100,
                image: 'PngItem_1112946 1.png',
                amount: 1
            }
            let cocacola =
            {
                name: 'cocacola',
                price: 150,
                image: 'coca 1.png',
                amount: 0
            }
            let hawaiancookies =
            {
                name: 'hawaiancookies',
                price: 200,
                image: 'hawaian 1.png',
                amount: 0
            }
            let products = [tomatoe, cocacola, hawaiancookies];
            localStorage.setItem("products", JSON.stringify(products));
        }
        if (p == 2) {
            let tomatoe =
            {
                name: 'tomatoe',
                price: 100,
                image: 'PngItem_1112946 1.png',
                amount: 0
            }
            let cocacola =
            {
                name: 'cocacola',
                price: 100,
                image: 'coca 1.png',
                amount: 1
            }
            let hawaiancookies =
            {
                name: 'hawaiancookies',
                price: 200,
                image: 'hawaian 1.png',
                amount: 0
            }
            let products = [tomatoe, cocacola, hawaiancookies];
            localStorage.setItem("products", JSON.stringify(products));
        }
        if (p == 3) {
            let tomatoe =
            {
                name: 'tomatoe',
                price: 100,
                image: 'PngItem_1112946 1.png',
                amount: 0
            }
            let cocacola =
            {
                name: 'cocacola',
                price: 100,
                image: 'coca 1.png',
                amount: 0
            }
            let hawaiancookies =
            {
                name: 'hawaiancookies',
                price: 100,
                image: 'hawaian 1.png',
                amount: 1
            }
            let products = [tomatoe, cocacola, hawaiancookies];
            localStorage.setItem("products", JSON.stringify(products));
        }

    }
}
document.querySelector("#addtocart1").addEventListener("click", () => {
    document.getElementById("addtocartpop1").style.display = "block";
});
document.querySelector(".addtocartok1").addEventListener("click", () => {
    document.getElementById("addtocartpop1").style.display = "none";
});
document.querySelector("#addtocart2").addEventListener("click", () => {
    document.getElementById("addtocartpop2").style.display = "block";
});
document.querySelector(".addtocartok2").addEventListener("click", () => {
    document.getElementById("addtocartpop2").style.display = "none";
});
document.querySelector("#addtocart3").addEventListener("click", () => {
    document.getElementById("addtocartpop3").style.display = "block";
});
document.querySelector(".addtocartok3").addEventListener("click", () => {
    document.getElementById("addtocartpop3").style.display = "none";
});
// add to wishlist
document.querySelector(".wishlistok1").addEventListener("click", () => {
    document.getElementById("wishlistpop1").style.display = "none";
});
$('input[name=wishlist1]').change(function() {
    if ($(this).is(':checked')) {
        document.getElementById("wishlistpop1").style.display = "block";
    } else {
        document.getElementById("wishlistpop1").style.display = "none";
    }
});
document.querySelector(".wishlistok2").addEventListener("click", () => {
    document.getElementById("wishlistpop2").style.display = "none";
});
$('input[name=wishlist2]').change(function() {
    if ($(this).is(':checked')) {
        document.getElementById("wishlistpop2").style.display = "block";
    } else {
        document.getElementById("wishlistpop2").style.display = "none";
    }
});
document.querySelector(".wishlistok3").addEventListener("click", () => {
    document.getElementById("wishlistpop3").style.display = "none";
});
$('input[name=wishlist3]').change(function() {
    if ($(this).is(':checked')) {
        document.getElementById("wishlistpop3").style.display = "block";
    } else {
        document.getElementById("wishlistpop3").style.display = "none";
    }
});

// cart page functions
$(document).on('pagecontainerbeforehide', 'body', function (event, ui) {
    //do something
    if (ui.nextPage.attr('id') == "cart") {
        var total = 0;
        var retrievedDatas = localStorage.getItem("products");
        var retrievedData = JSON.parse(retrievedDatas);
        console.log(retrievedData);
        if (retrievedData) {
            $("#cart-list").html("");
            for (let i = 0; i < retrievedData.length; i++) {
                if (retrievedData[i].amount > 0) {
                    $("#cart-list").append('<div id="'+i+'" class="cart-product-content"><div class="cart-product-remove"><img onclick="remove('+i+')" src="images/noun_Trash_4376064 6.png"></div><div class="cart-product-img"><img src="images/' + retrievedData[i].image + '"></div><div class="details"><div class="cart-product-name">' + retrievedData[i].name + '</div><div class="cart-product-price">LKR ' + retrievedData[i].price + '</div></div><div class="cart-amount"><div class="amount-button"><button id="plus" class=" ui-btn ui-shadow ui-corner-all" onclick="plus(' + i + ')">+</button></div><div class="cart-product-amount" id="cart-product-amount' + i + '">' + retrievedData[i].amount + '</div><div class="amount-button"><button id="minus" class=" ui-btn ui-shadow ui-corner-all" onclick="minus(' + i + ')">-</button></div></div></div>');
                    var total = total + (retrievedData[i].amount) * (retrievedData[i].price);
                    localStorage.setItem("total", JSON.stringify(total));
                }
            }
        }
        document.getElementById("total").innerHTML = total;
    }
});
function remove(p){
    var retrievedDatas = localStorage.getItem("products");
    var retrievedData = JSON.parse(retrievedDatas);
    if (retrievedData) {
        cart = retrievedData;
        let tomatoe = cart[0];
        let cocacola = cart[1];
        let hawaiancookies = cart[2];
        if (p == 0) {
            amount = 0;
            amount = Number(amount);
            tomatoe.amount = amount;
            let products = [tomatoe, cocacola, hawaiancookies]
            localStorage.setItem("products", JSON.stringify(products));
        }
        if (p == 1) {
            amount = 0;
            amount = Number(amount);
            cocacola.amount = amount;
            let products = [tomatoe, cocacola, hawaiancookies]
            localStorage.setItem("products", JSON.stringify(products));
        }
        if (p == 2) {
            amount = 0;
            amount = Number(amount);
            hawaiancookies.amount = amount;
            let products = [tomatoe, cocacola, hawaiancookies]
            localStorage.setItem("products", JSON.stringify(products));
        }
        document.getElementById(p).innerHTML = "";
    }
}
// cart page plus minus
function minus(a) {
    var total = 0;
    var retrievedDatas = localStorage.getItem("products");
    var retrievedData = JSON.parse(retrievedDatas);
    retrievedData[a].amount = retrievedData[a].amount - 1;
    for (let i = 0; i < retrievedData.length; i++) {
        if (retrievedData[i].amount > 0) {
            var total = total + (retrievedData[i].amount) * (retrievedData[i].price);
        }
    }
    localStorage.setItem("products", JSON.stringify(retrievedData));
    localStorage.setItem("total", JSON.stringify(total));
    document.getElementById("total").innerHTML = total;
    document.getElementById("cart-product-amount" + a + "").innerHTML = retrievedData[a].amount;
}
function plus(a) {
    var total = 0;
    var retrievedDatas = localStorage.getItem("products");
    var retrievedData = JSON.parse(retrievedDatas);
    retrievedData[a].amount = retrievedData[a].amount + 1;
    for (let i = 0; i < retrievedData.length; i++) {
        if (retrievedData[i].amount > 0) {
            var total = total + (retrievedData[i].amount) * (retrievedData[i].price);
        }
    }
    localStorage.setItem("products", JSON.stringify(retrievedData));
    localStorage.setItem("total", JSON.stringify(total));
    document.getElementById("total").innerHTML = total;
    document.getElementById("cart-product-amount" + a + "").innerHTML = retrievedData[a].amount;
}
// checkout page functions
$(document).on('pagecontainerbeforehide', 'body', function (event, ui) {
    //set subtotal
    if (ui.nextPage.attr('id') == "checkout-page") {
        var total = 0;
        var shipping = 500;
        var points = 0
        var subtotal = 0;
        var retrievedDatas = localStorage.getItem("harithroopoints");
        var retrievedpoints = JSON.parse(retrievedDatas);
        if (retrievedpoints) {
            points = retrievedpoints[0].points;
        }
        document.getElementById("points-available").innerHTML = points;
        document.getElementById("point-input").innerHTML = '<input type="number" id="input-points" value="0" min="0" max="' + points + '" onchange="changevalue()">';
        var retrievedDatas = localStorage.getItem("total");
        var retrievedData = JSON.parse(retrievedDatas);
        if (retrievedData) {
            var total = retrievedData;
            var subtotal = total + shipping;
            localStorage.setItem("subtotal", JSON.stringify(subtotal));
        }
        document.getElementById("retailtotal").innerHTML = total;
        document.getElementById("points-available").innerHTML = points;
        document.getElementById("subtotal1").innerHTML = subtotal;
        document.getElementById("subtotal2").innerHTML = subtotal;
    }
});
// discount points
function changevalue() {
    var retrievedDatas = localStorage.getItem("harithroopoints");
    var retrievedpoints = JSON.parse(retrievedDatas);
    if (retrievedpoints) {
        points = retrievedpoints[0].points;
    }
    var x = document.getElementById("input-points");
    if (points < x.value) {
        x.value = points;
    }

    var points = document.getElementById("input-points").value;
    var retrievedDatas = localStorage.getItem("subtotal");
    var retrievedData = JSON.parse(retrievedDatas);
    if (retrievedData) {
        var subtotal = retrievedData;
        var subtotal = subtotal - points;
        document.getElementById("discount").innerHTML = "-" + points;
        document.getElementById("subtotal1").innerHTML = subtotal;
        document.getElementById("subtotal2").innerHTML = subtotal;
    }
}
// dropdowns
document.querySelector(".vouchers-title").addEventListener("click", () => {
    document.getElementById("vouchers").style.display = "block";
});
document.querySelector(".vclose").addEventListener("click", () => {
    document.getElementById("vouchers").style.display = "none";
});
document.querySelector(".points-title").addEventListener("click", () => {
    document.getElementById("points").style.display = "block";
});
document.querySelector(".pclose").addEventListener("click", () => {
    document.getElementById("points").style.display = "none";
});
// payment
document.querySelector("#closebtn").addEventListener("click", () => {
    document.getElementById("thankyouPayment").style.display = "none";
});
jQuery(function ($) {
    var $form = $('#frmBooking');
    var handler = StripeCheckout.configure({
        key: 'pk_test_cp21BcECf4kMMUbSlRlZlsMo',
        token: function (token) {
            // Use the token to create the charge with a server-side script.
            // You can access the token ID with `token.id`

            //This will be printed when the transaction is successful. To charge, server side scripting is required.
            if (token.id) {
                $("#thankyouPayment").css("display", "block");
                // $("#thankyouPayment").html("Your Order has been placed.<br><a href='#home'><button onclick='close()' id='closebtn'>OK</button></a>");

                //You can also use the following code to re-submit the form content to another file for further processing.
                //Don't forget to add action to your form
                //$form.get(0).submit();

                //Or save form data locally, using local storage.
            }
        }
    });


    $('#checkout-button2').on('click', function (e) {
        var retrievedDatas = localStorage.getItem("subtotal");
        var retrievedData = JSON.parse(retrievedDatas);
        if (retrievedData) {
            var subtotal = retrievedData;
        }
        // Code Section B  Open Checkout with further options
        handler.open({
            name: 'Freshway',
            currency: 'LKR',
            description: $('#item_name').val(),
            amount: subtotal * 100
        });
        e.preventDefault();
    });

    // Code Section C  Close Checkout on page navigation
    $(window).on('popstate', function () {
        handler.close();
    });
});

//---Star rating---

// --Display rating--

const displayRating = (item) => {
    let ratings = JSON.parse(localStorage.getItem("ratings"));
    if (!ratings) return;

    // Set average rating of item

    const average =
        ratings[item].reduce((acc, curr) => acc + curr.rating, 0) /
        ratings[item].length;
    if (average == ratings[item].reduce((acc, curr) => acc + curr.rating, 0) / ratings[item].length) {
        document.querySelector(`#${item} #rating-amount`).innerHTML = average;
    } else {
        document.querySelector(`#${item} #rating-amount`).innerHTML = 0;
    }

    // Set product star rating
    const userFromSessionStorage = sessionStorage.getItem("user");
    if (!userFromSessionStorage) return;

    const user = JSON.parse(userFromSessionStorage);

    // Get user rating of item
    const userRating = ratings[item].find((rating) => rating.user === user.email);

    if (!userRating) return;

    // Add active class to rating stars
    for (let i = 1; i <= userRating.rating; i++) {
        document.querySelector(`#${item} .star-${i}`).classList.add("activestar");
    }
};

// --Add event listeners to run displayRating() on page load--
document
    .querySelector("#item1")
    .addEventListener("load", displayRating("item1"));
document
    .querySelector("#item2")
    .addEventListener("load", displayRating("item2"));
document
    .querySelector("#item3")
    .addEventListener("load", displayRating("item3"));

// --Add rating--
const addRating = (item, rating) => {
    let ratings = JSON.parse(localStorage.getItem("ratings"));

    // Create new ratings object if it doesn't exist
    if (!ratings) {
        ratings = {
            item1: [],
            item2: [],
            item3: [],
        };
    }

    const userFromSessionStorage = sessionStorage.getItem("user");
    if (!userFromSessionStorage) return;

    // Get current user details
    const user = JSON.parse(userFromSessionStorage);

    // Add rating to ratings object
    ratings[item].findIndex((r) => r.user === user.email) === -1
        ? ratings[item].push({ user: user.email, rating: rating })
        : (ratings[item].find((r) => r.user === user.email).rating = rating);

    localStorage.setItem("ratings", JSON.stringify(ratings));

    // Update displayed rating
    displayRating(item);
};

// nav functions
// $(document).on('pagecontainerbeforehide', 'body', function (event, ui) {
// document.body.classList.remove("preload");
// });
window.addEventListener("load", () => {
    document.body.classList.remove("preload");
});
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
    // opening
    document.querySelector("#btnNavhome").addEventListener("click", () => {
        nav.classList.add("nav--open");
    });
    document.querySelector("#btnNavitem1").addEventListener("click", () => {
        nav.classList.add("nav--open");
    });
    document.querySelector("#btnNavitem2").addEventListener("click", () => {
        nav.classList.add("nav--open");
    });
    document.querySelector("#btnNavitem3").addEventListener("click", () => {
        nav.classList.add("nav--open");
    });
    document.querySelector("#btnNavwishlist").addEventListener("click", () => {
        nav.classList.add("nav--open");
    });
    document.querySelector("#btnNavcart").addEventListener("click", () => {
        nav.classList.add("nav--open");
    });
    document.querySelector("#btnNavcheckout").addEventListener("click", () => {
        nav.classList.add("nav--open");
    });
    document.querySelector("#btnNavpoints").addEventListener("click", () => {
        nav.classList.add("nav--open");
    });
    document.querySelector("#btnNavprofile").addEventListener("click", () => {
        nav.classList.add("nav--open");
    });
    document.querySelector("#btnNavproducts").addEventListener("click", () => {
        nav.classList.add("nav--open");
    });
    // closing
    document.querySelector("#nav-content").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });
    document.querySelector(".nav-pro-button").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });
    document.querySelector(".nav-pro-details").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });
    document.querySelector(".nav-header-image").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });
    document.querySelector(".nav__overlay").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });
});

// ---Points---
// --Display Points--
const displayPoints = () => {
    // Time constants
    const ONE_SECOND = 1000;
    const ONE_MINUTE = 1000 * 60;
    const ONE_DAY = 1000 * 60 * 60 * 24;
  
    // Remove active class from all circles
    for (let i = 1; i <= 7; i++) {
      document.querySelector(`#daycircle${i}`).classList.remove("activecircle");
    }
  
    // Get user data from session storage
    const userFromSessionStorage = sessionStorage.getItem("user");
    if (!userFromSessionStorage) return;
    const user = JSON.parse(userFromSessionStorage);
  
    const points = JSON.parse(localStorage.getItem("points"));
    if (!points) return;
    if (!points[user.email]) return;
  
    // Disable checkin button if user has already checked in today
    if (new Date() - new Date(points[user.email].lastCheckedIn) < 5 * ONE_SECOND)
      document.querySelector("#checkinbutton").disabled = true;
  
    // Set total points
    document.querySelector("#totalpointsamount b").innerHTML =
      points[user.email].points;
  
    // Prevent updating day circle styling if user has missed consecutive days (Adjust the if condition with the required time period)
    if (new Date() - new Date(points[user.email].lastCheckedIn) > 20 * ONE_SECOND)
      return;
  
    // Update day circle styling
    for (let i = 0; i <= (points[user.email].day - 1) % 7; i++) {
      document.querySelector(`#daycircle${i + 1}`).classList.add("activecircle");
    }
  };
  // Add event listener to diplay points on load
  document
    .querySelector("#points-page")
    .addEventListener("load", displayPoints());
  
  // --Update points--
  const checkIn = () => {
    let points = JSON.parse(localStorage.getItem("points")) || {};
  
    // Get user data from session storage
    const userFromSessionStorage = sessionStorage.getItem("user");
    if (!userFromSessionStorage) return;
    const user = JSON.parse(userFromSessionStorage);
  
    // Create new points object if it doesn't exist
    if (!points[user.email]) {
      points[user.email] = {
        points: 1,
        day: 1,
        lastCheckedIn: new Date(),
      };
  
      console.log(`First check in:`);
      console.log(points[user.email]);
      localStorage.setItem("points", JSON.stringify(points));
      displayPoints();
      return;
    }
  
    // Time constants
    const ONE_SECOND = 1000;
    const ONE_MINUTE = 1000 * 60;
    const ONE_DAY = 1000 * 60 * 60 * 24;
  
    // If user has missed consecutive days, reset (Adjust the if condition with the required time period)
    if (
      new Date() - new Date(points[user.email].lastCheckedIn) >
      20 * ONE_SECOND
    ) {
      points[user.email] = {
        ...points[user.email],
        points: ++points[user.email].points,
        day: 1,
        lastCheckedIn: new Date(),
      };
      console.log(`Missed consecutive days:`);
      console.log(points[user.email]);
      localStorage.setItem("points", JSON.stringify(points));
      displayPoints();
      return;
    }
  
    // Points to be added
    const pointsToAdd = [1, 3, 5, 5, 10, 15, 20];
  
    // If user if within consecutive days, add points (Adjust the if condition with the required time period)
    if (
      new Date() - new Date(points[user.email].lastCheckedIn) >
      5 * ONE_SECOND
    ) {
      points[user.email] = {
        ...points[user.email],
        points:
          points[user.email].points + pointsToAdd[points[user.email].day % 7],
        day: ++points[user.email].day,
        lastCheckedIn: new Date(),
      };
      console.log(`Checked in successfully:`);
      console.log(points[user.email]);
      localStorage.setItem("points", JSON.stringify(points));
      displayPoints();
      return;
    }
  };
  
  // ---Product page Filters---
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Handle Product filtering
  const filterProducts = (filterOption) => {
    // Complete product list.
    const productList = [
      {
        name: "Jack Daniels",
        price: 12500,
        img: "jd 1.png",
        link: "#item1",
        featured: false,
      },
      {
        name: "Chivas Regal",
        price: 16000,
        img: "chivas.png",
        link: "#item2",
        featured: true,
      },
      {
        name: "Blacklabel",
        price: 18000,
        img: "blacklabel.png",
        link: "#item3",
        featured: true,
      },
    ];
  
    // Sort and filter products based on the filter option and display them
    switch (filterOption) {
      case `name-ascending`:
        document.querySelector("#productDisplay").innerHTML = productList
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(
            (product) => `
              <div class="featured-vlist">
                  <div class="featured-items">
                      <a class="ui-link" href="${product.link}">
                          <div class="featured-img">
                              <img src="images/${product.img}">
                          </div>
                      </a>
                      <div class="featured-name">${
                        product.name
                      }<br><b>Rs.${product.price.toLocaleString()}</b></div>
                  </div>
              </div>
        `
          )
          .join("");
        // Close dropdown menu
        myFunction();
        return;
      case `name-descending`:
        document.querySelector("#productDisplay").innerHTML = productList
          .sort((a, b) => b.name.localeCompare(a.name))
          .map(
            (product) => `
            <div class="featured-vlist">
                <div class="featured-items">
                    <a class="ui-link" href="${product.link}">
                        <div class="featured-img">
                            <img src="images/${product.img}">
                        </div>
                    </a>
                    <div class="featured-name">${
                      product.name
                    }<br><b>Rs.${product.price.toLocaleString()}</b></div>
                </div>
            </div>
      `
          )
          .join("");
        // Close dropdown menu
        myFunction();
        return;
      case `price-lth`:
        document.querySelector("#productDisplay").innerHTML = productList
          .sort((a, b) => a.price - b.price)
          .map(
            (product) => `
          <div class="featured-vlist">
              <div class="featured-items">
                  <a class="ui-link" href="${product.link}">
                      <div class="featured-img">
                          <img src="images/${product.img}">
                      </div>
                  </a>
                  <div class="featured-name">${
                    product.name
                  }<br><b>Rs.${product.price.toLocaleString()}</b></div>
              </div>
          </div>
    `
          )
          .join("");
        // Close dropdown menu
        myFunction();
        return;
      case `price-htl`:
        document.querySelector("#productDisplay").innerHTML = productList
          .sort((a, b) => b.price - a.price)
          .map(
            (product) => `
          <div class="featured-vlist">
              <div class="featured-items">
                  <a class="ui-link" href="${product.link}">
                      <div class="featured-img">
                          <img src="images/${product.img}">
                      </div>
                  </a>
                  <div class="featured-name">${
                    product.name
                  }<br><b>Rs.${product.price.toLocaleString()}</b></div>
              </div>
          </div>
    `
          )
          .join("");
        // Close dropdown menu
        myFunction();
        return;
      case `featured`:
        document.querySelector("#productDisplay").innerHTML = productList
          .filter((product) => product.featured)
          .map(
            (product) => `
          <div class="featured-vlist">
              <div class="featured-items">
                  <a class="ui-link" href="${product.link}">
                      <div class="featured-img">
                          <img src="images/${product.img}">
                      </div>
                  </a>
                  <div class="featured-name">${
                    product.name
                  }<br><b>Rs.${product.price.toLocaleString()}</b></div>
              </div>
          </div>
    `
          )
          .join("");
        // Close dropdown menu
        myFunction();
        return;
      default:
        document.querySelector("#productDisplay").innerHTML = productList
          .map(
            (product) => `
        <div class="featured-vlist">
            <div class="featured-items">
                <a class="ui-link" href="${product.link}">
                    <div class="featured-img">
                        <img src="images/${product.img}">
                    </div>
                </a>
                <div class="featured-name">${
                  product.name
                }<br><b>Rs.${product.price.toLocaleString()}</b></div>
            </div>
        </div>
  `
          )
          .join("");
        return;
    }
  };
  
  // Run function on product page load
  document
    .querySelector("#product-page")
    .addEventListener("load", filterProducts());