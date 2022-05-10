// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { records } from '../records-data.js';
import { renderAlbum } from '../records-data.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('render function', (expect) => {
    // eslint-disable-next-line no-useless-escape
    const expected = `<div class="record"><p>Led Zeppelin II is in good condition, is a 180 gram vinyl record, and is a rock album.</p><img src=\"./assets/led-zep.jpg\"></div>`;
    const actual = renderAlbum(records[0]);

    expect.equal(actual.outerHTML, expected);
});



