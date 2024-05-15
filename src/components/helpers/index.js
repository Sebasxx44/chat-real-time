
export const formatDate = (date) => {

    const formatDate = new Date(date ? date.seconds * 1000 : '')
    const time = `${formatDate.getHours()}:${formatDate.getMinutes()}`
    const options = {  month: 'long', day: 'numeric' }
    const newDate = formatDate.toLocaleDateString('es-ES', options)
    return date ?  `${newDate} - ${time}` : ''
}