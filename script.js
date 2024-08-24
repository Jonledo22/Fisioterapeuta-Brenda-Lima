document.getElementById('whatsapp-link').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link

    const message = encodeURIComponent("Olá, gostaria de mais informações sobre a consulta.");
    const phone = "+5511966715060";
    const addressInput = document.getElementById('address-input');

    window.open(`https://wa.me/${phone}?text=${message} Endereço: ${encodeURIComponent(addressInput.value)}`, "_blank");
});
