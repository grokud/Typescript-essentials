const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

function addArms(face) {
  return `👋 ${face} 👋`;
}

function attachBody(face, body) {
  return `
            ${face}
　　　　　${body.repeat(3)}
         ${Array(3).fill(body).join(' ')}
       👇🏽${body.repeat(2)}  👇🏽
          ${Array(2).fill(body).join('  ')}
          ${Array(2).fill(body).join('  ')}
　　　　  👢　👢
  `
}

faces.map(face => attachBody(face, '🍟')).forEach(body => console.log(body))
