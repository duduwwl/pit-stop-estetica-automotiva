const bookingForm = document.querySelector('#booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(bookingForm);
    const dateValue = data.get('date');
    const formattedDate = dateValue ? new Intl.DateTimeFormat('pt-BR').format(new Date(`${dateValue}T12:00:00`)) : 'a combinar';
    const message = [
      'Olá, Pit Stop! Quero solicitar um atendimento.',
      '',
      `Nome: ${data.get('name')}`,
      `WhatsApp: ${data.get('phone')}`,
      data.get('email') ? `E-mail: ${data.get('email')}` : '',
      `Carro: ${data.get('vehicle')}${data.get('year') ? `, ano ${data.get('year')}` : ''}`,
      `Serviço: ${data.get('service')}`,
      `Data preferida: ${formattedDate}`,
      `Horário preferido: ${data.get('time')}`,
      data.get('notes') ? `Observações: ${data.get('notes')}` : '',
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/5535988313993?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
}
