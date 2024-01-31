document.addEventListener("DOMContentLoaded", function () {
  var headerBottomSide = document.querySelector(".header-bottom-side");
  var dataSets = [
    {
      title: "Transforme seu trabalho com estilo!",
      description:
        "O sucesso nem sempre está relacionado à grandiosidade. Está relacionado à consistência. Consistência no trabalho árduo. Consistência em aprimorar sua habilidade.",
      buttonText: "Ver agora ➡",
      imageUrl: "assets/img/gaming-msi-header.png",
    },
    {
      title: "Notebook Asus VivoBook X543UA-DM3457T",
      description: "Desempenho excepcional e design inovador.",
      buttonText: "Ver agora ➡",
      imageUrl: "assets/img/products/product-1.png",
    },
    {
      title: "Notebook Dell Inspiron 5567",
      description: "Potência e portabilidade em perfeita harmonia.",
      buttonText: "Ver agora ➡",
      imageUrl: "assets/img/products/product-2.png",
    },
    {
      title: "Notebook Gamer Dell Nitro 5",
      description: "Desempenho e portabilidade em perfeita harmonia.",
      buttonText: "Ver agora ➡",
      imageUrl: "assets/img/products/product-3.png",
    },
    // Adicione mais conjuntos de dados conforme necessário
  ];

  var currentIndex = 0;

  function updateHeaderContent() {
    var currentDataSet = dataSets[currentIndex];
    var leftSide = headerBottomSide.querySelector(".header-bottom-side-left");
    var rightSide = headerBottomSide.querySelector(".header-bottom-side-right");

    leftSide.querySelector("h2").textContent = currentDataSet.title;
    leftSide.querySelector("p").textContent = currentDataSet.description;
    leftSide.querySelector("button").textContent = currentDataSet.buttonText;
    rightSide.querySelector("img").src = currentDataSet.imageUrl;
  }

  function nextDataSet() {
    currentIndex = (currentIndex + 1) % dataSets.length;
    updateHeaderContent();
  }

  // Atualize o conteúdo inicial
  updateHeaderContent();

  // Configure a mudança automática a cada 5 segundos (5000 milissegundos)
  setInterval(nextDataSet, 5000);
});
