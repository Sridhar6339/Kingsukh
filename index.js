
var sidenav=document.querySelector(".side-navbar")

function openNav()
{
    sidenav.style.left = "0%"
}

function closeNav()
{
    sidenav.style.left = "-75%"
}

function sendWhatsAppMessage() {

    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const adult = document.getElementById('adults').value;
    const child = document.getElementById('childs').value;
    const rooms = document.getElementById('room').value;
    const name = document.getElementById('booking-name').value;
    const number = document.getElementById('phone').value;
    const email = document.getElementById('booking-email').value;

    const whatsappMessage = `Hii \n Name: ${name} \n Contact number: ${number} \n Email: ${email}Check-in: ${checkin} \n Check-out: ${checkout} \n Number of adult: ${adult} \n Number of child: ${child} \n Number of rooms: ${rooms}`;
    const whatsappURL = `https://wa.me/919080367628?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
}   

function bookingopen(){
    window.location.href = "booknow.html";
}

