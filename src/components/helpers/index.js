export const formatDate = (date) => {
    const formatDate = new Date(date ? date.seconds * 1000 : '');
    let hours = formatDate.getHours() % 12;
    hours = hours === 0 ? 12 : hours; 
    const minutes = formatDate.getMinutes() < 10 ? '0' + formatDate.getMinutes() : formatDate.getMinutes();
    const ampm = formatDate.getHours() < 12 ? 'AM' : 'PM';
    const time = `${hours}:${minutes} ${ampm}`;
    const options = { month: 'long', day: 'numeric' };
    const newDate = formatDate.toLocaleDateString('es-ES', options);
    
    return date ?  `${newDate} - ${time}` : '...';
}

