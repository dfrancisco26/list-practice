export const records = [
    { id: 1, name: 'Led Zeppelin II', condition: 'good', genre: 'rock', artist: 'Led Zeppelin', image: './assets/led-zep.jpg' },
    { id: 2, name: 'Breakfast in America', condition: 'poor', genre: 'rock', artist: 'Supertramp', image: '.assets/breakfast.jpg' },
    { id: 3, name: 'Songs in the Key of Life', condition: 'good', genre: 'R&B', artist: 'Stevie Wonder', image: './assets/key-of-life.jpg' },
    { id: 4, name: 'The Trials of Van Occupanther', condition: 'like new', genre: 'folk-rock', artist: 'Midlake', image: './assets/trials.png'},
    { id: 5, name: 'Worlds', condition: 'like new', genre: 'synth-pop/electronic', artist: 'Porter Robinson', image: './assets/worlds.png' }
];

export function renderAlbum(record) {
    const div = document.createElement('div');
    div.classList.add('record');
    const p = document.createElement('p');
    const a = document.createElement(a);
    a.href = `./records/?id=${record.id}`;
    p.textContent = `${record.name} is in ${record.condition} condition, is a ${record.vinyl} vinyl record, and is a ${record.genre} album.`;
    const image = document.createElement('img');
    image.src = record.image;
    a.append (p, image, div);
    div.append(p);
    div.append(image);
    return div;
}