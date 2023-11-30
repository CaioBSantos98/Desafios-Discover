var colorList = ["white","red","blue","yellow","gray","orange","pink","purple","green", "#0E1218"];

var count = 0;

var bg = document.getElementById("bg-card-container");

function changeBg () {
  if (count >= colorList.length) {
    count = 0;  
  }
  bg.style.backgroundColor = colorList[count];
  count += 1;
}

/*---------------------------------------------*/

let userData;

const token = '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';
const userName = 'CaioBSantos98';

const apiUrl = `https://api.github.com/users/${userName}`;

const headers = new Headers({
  'Authorization': `Bearer ${token}`
});

const options = {
  method: 'GET',
  headers: headers,
  mode: 'cors',
  cache: 'default'
};

fetch(apiUrl, options)
  .then(response => response.json())
  .then(data => {
    // Manipula os dados recebidos da API
    userData = data;
    document.getElementById("github-name").innerHTML = userData.login;
    document.getElementById("followers").innerHTML += "<p>" + userData.followers + " Seguidores</p>";
    document.getElementById("following").innerHTML += "<p>" + userData.following + " Seguindo</p>";
    document.getElementById("repositories").innerHTML += "<p>" + userData.public_repos + " Repositórios</p>";
    document.getElementById("company").innerHTML += "<p>" + userData.company + "</p>";
    document.getElementById("location").innerHTML += "<p>" + userData.location + " </p>";
    document.getElementById("frame").innerHTML += "<img src='"+userData.avatar_url+"' alt='Foto de perfil'>";
  })
  .catch(error => console.error('Erro na requisição:', error));

function downloadCard() {
      const card = document.getElementById('bg-card-container');
      
      // Usando html2canvas para converter a div em uma imagem
      html2canvas(card).then(canvas => {
        const link = document.createElement('a');
        
        // Adicionando a imagem diretamente no link
        const imgDataUrl = canvas.toDataURL('image/png');
        link.href = imgDataUrl;
        console.log('URL da imagem:', imgDataUrl);

        // Definindo o nome do arquivo baixado
        link.download = 'cartao.png';

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
      });
    }
