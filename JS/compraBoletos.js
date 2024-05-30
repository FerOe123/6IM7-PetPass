document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', event => {
        if (!seat.classList.contains('seat-booked')) {
            const seatId = seat.getAttribute('data-seat-id');
            const seatPrice = seat.getAttribute('data-seat-price');
            document.getElementById('seatInfo').innerText = `Asiento ${seatId} - $${seatPrice}`;
        } else {
            alert('Este asiento ya está reservado.');
        }
    });
});