export const records = [
    { name: 'Led Zeppelin II', condition: 'good', genre: 'rock', vinyl: '180 gram', image: './assets/led-zep.jpg' },
    { name: 'Breakfast in America', condition: 'poor', genre: 'rock', vinyl: '120 gram', image: '.assets/breakfast.jpg' },



];

export function renderAlbum(record) {
    const div = document.createElement('div');
    div.classList.add('record');
    const p = document.createElement('p');
    p.textContent = `${record.name} is in ${record.condition} condition, is a ${record.vinyl} vinyl record, and is a ${record.genre} album.`;
    const image = document.createElement('img');
    image.src = record.image;
    div.append(p);
    div.append(image);
    return div;
}