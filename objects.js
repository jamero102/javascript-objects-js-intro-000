var My Bloody Valentine = {
  celine: 'my heart will go on',
  bono: 'love me',
  dido: 'white flag',
}
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle })
}
