const unorderList = document.querySelector('ul');
let items = '';

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

fetch('http://localhost:3001/vote')
  .then(response => response.json())
  // .then(data => console.log(data))
  .then(data => generateList(data))


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function generateList(data) {
  let songList = data.data;
  for (let i = 0; i < songList.length; i++) {
    let playlist = songList[i];
    items += `
          <li>
            <div class="row">
                <div class="col-sm">${playlist.band} - ${playlist.title} </div> 
                <div class="col-sm"><button onclick="selectItem(${playlist.id})">vote me!</button></div>
              </div>
            <div class="row">
                <div class="col-1"> score: </div>
                <div class="col-1" id="${playlist.id}">${playlist.score}</div>
            </div>
          </li>
        `;
  }
  console.log(songList);
  console.log(songList[0].band)
  console.log(songList.length)
  unorderList.innerHTML = items;

  let currentHigh = 0;
  for (let i = songList.length - 1; i >= 0; i--) {
    if (songList[i].score > currentHigh) {
      currentHigh = songList[i].score;
      document.getElementById('mostVote').innerHTML = `${songList[i].band} - ${songList[i].title}`;
      document.getElementById('scoreMostVote').innerHTML = songList[i].score;
    } else if (songList[i].score === currentHigh) {
      document.getElementById('mostVote').innerHTML = `masih ada lagu yang imbang`;
      document.getElementById('scoreMostVote').innerHTML = '';
    }
  }
}

function selectItem(i) {
  fetch(`http://localhost:3001/vote/${i}`)
    .then(response => response.json())
    .then(data => incrementValue(data.song))

}

function incrementValue(data) {

  let band = data[0].band;
  let title = data[0].title;
  let score = data[0].score + 1;
  let someData = {
    band: `${band}`,
    title: `${title}`,
    score: `${score}`
  }
  const putMethod = {
    method: 'PUT', // Method itself
    headers: {
      'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
    },
    body: JSON.stringify(someData) // We send data in JSON format
  }

  // make the HTTP put request using fetch api
  fetch(`http://localhost:3000/vote/${data[0].id}`, putMethod)
    .then(response => response.json())
    .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    .catch(err => console.log(err)) // Do something with the error 
    .then(reloadPage())
}

function reloadPage() {
  reload = location.reload();
}

//   let band = data[0].band;
//   let title = data[0].title;
//   let score = data[0].score + 1;

//   console.log(data);
//   console.log(score);
//   console.log(title);
//   console.log(band);
//   console.log(data[0].id);
//   return fetch(`http://localhost:3001/vote/${data[0].id}`, {
//     method: 'PUT',
//      headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       'band': `${band}`,
//       'title': `${title}`,
//       'score': `${score}`
//     }),
//   })
//     .then((res) => console.log(`${band}`))
// }

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------
