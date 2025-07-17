function enviarWhatsApp(event){
    event.preventDefault()

    const nome = document.getElementById("inome").value
    const msg = document.getElementById("imensagem").value
    const telefone = "244949566947"

    const texto = `Olá! Meu nome é ${nome}. ${msg}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    console.log(url)

    window.open(url, "_blank")

}

const pt = document.getElementById("pt")
const en = document.getElementById("en")
const contactButton = document.querySelector("#contato a")
const menuAboutMe = document.querySelector("#menuAboutMe")
const homeH2 = document.getElementById("homeH2")
const homeP = document.getElementById("homeP")
const contactButton2 = document.querySelector("a#btn")
const projetosH1 = document.getElementById("projetosH1")
const seeSiteLink = document.querySelectorAll(".goSite")
const BostonStoreP = document.getElementById("BostonStoreP")
const BostonLandScapesP = document.getElementById("BostonLandScapesP")
const CafenaP = document.getElementById("CafenaP")
const RefriAnimationsP = document.getElementById("RefriAnimationsP")
const BostonInvestP = document.getElementById("BostonInvestP")
const BoomyP = document.getElementById("BoomyP")
const BostonBurguerP = document.getElementById("BostonBurguerP")
const AgeVerifyH2 = document.getElementById("AgeVerifyH2")
const AgeVerifyP = document.getElementById("AgeVerifyP")
const toDoListH2 = document.getElementById("toDoListH2")
const toDoListP = document.getElementById("toDoListP")
const telaLoginH2 = document.getElementById("telaLoginH2")
const telaLoginP = document.getElementById("telaLoginP")
const BostonFinanceP = document.getElementById("BostonFinanceP")
const BostonCoinP = document.getElementById("BostonCoinP")
const BostonDeliveryP = document.getElementById("BostonDeliveryP")
const BostonHealthP = document.getElementById("BostonHealthP")
const meH1 = document.getElementById("meH1")
const meInfoH11 = document.getElementById("meInfoH11")
const meInfoH12 = document.getElementById("meInfoH12")
const meInfoP1 = document.getElementById("meInfoP1")
const meInfoP2 = document.getElementById("meInfoP2")
const meMotivation = document.getElementById("meMotivation")
const tecH1 = document.getElementById("tecH1")
const tecH2 = document.getElementById("tecH2")
const otherTecH2 = document.getElementById("otherTecH2")
const ContactMeH1 = document.getElementById("ContactMeH1")
const inome = document.getElementById("inome")
const imensagem = document.getElementById("imensagem")
const iSubmit = document.getElementById("iSubmit")
const copyP = document.getElementById("copyP")

function changeLanguage(item){

    document.querySelector(".ativo").classList.remove("ativo")

    if(item === "pt"){
        pt.classList.add("ativo")
        contactButton.textContent = "Fale comigo"
        menuAboutMe.textContent = "Sobre mim"
        homeH2.textContent = "Desenvolvedor FullStack"
        homeP.textContent = "Permita-me tirar as suas ideias do papel direto para a tela do seu computador."
        contactButton2.textContent = "Fale comigo"
        projetosH1.textContent = "MEUS PROJECTOS"
        BostonStoreP.textContent = "É uma loja virtual focada na comercialização de artigos eletrónicos, com um design moderno e bem tecnológico."
        seeSiteLink.forEach(el => {
            el.textContent = "Ver site"
          })
        BostonLandScapesP.textContent = "É um site de viagens, construído com foco no design e imersão. Se permita viajar em seus pensamentos!"
        CafenaP.textContent = "É um site para cafeteria que pode ser adaptado para restaurantes, com foco apenas no layout."
        RefriAnimationsP.textContent = "É um site simples e moderno, construído com foco nas animações."
        BostonInvestP.textContent = "É um gestor de projetos de investimentos, com categorização de projetos e gestão simples de orçamento."
        BoomyP.textContent = "É uma rede social com funcionalidades simples, como criação deposts, autenticação e chat em tempo real entre usuário conectados."
        BostonBurguerP.textContent = "É um site para restaurante, com todas as funcionalidades básicas necessárias para atender os seus clientes online."
        AgeVerifyH2.textContent = "Verificador de Idade"
        AgeVerifyP.textContent = "É um projeto bem básico, que nos permite ver a imagem principal alterando consoante a idade e gênero selecionado."
        toDoListH2.textContent = "Gestor de Tarefas"
        toDoListP.textContent = "É um gestor de tarefas que nos dá a possibilidade de marcar as tarefas concluídas e ver a descrição da tarefa em uma outra aba."
        telaLoginH2.textContent = "Tela de Login"
        telaLoginP.textContent = "É uma tela de login comum, no entanto foi a primeira que desenvolvi no começo dos meus estudos sobre Programação."
        BostonFinanceP.textContent = "É um aplicativo de controle de finanças pessoais, mas pode ser adaptado para atender um fluxo maior."
        BostonCoinP.textContent = "É um aplicativo mobile que monitora as flutuações do Bitcoin."
        BostonDeliveryP.textContent = "É um app de entregas com foco principal no layout."
        BostonHealthP.textContent = "É um aplicativo simples que calcula o índice de massa corporal."
        meH1.textContent = "QUEM SOU EU?"
        meInfoH11.textContent = "MUITO PRAZER."
        meInfoH12.innerHTML = "EU SOU O <strong>LUCIANO BOSTON</strong></h1>"
        meInfoP1.innerHTML = "Eu sou um Desenvolvedor FullStack angolano. Sou muito apaixonado por tecnologia, tão apaixonado que mesmo fazendo o ensino médio de <strong>Finanças</strong>, eu ainda arranjo tempo na rotina para trabalhar na Área de TI. E aproveitando as bases sólidas que tenho nas duas áreas, <strong>posso criar sistemas que dinamizam boa parte do nosso trabalho</strong>, ou seja, criando um software que economize tempo e faça com precisão a gestão do seu negócio."
        meInfoP2.innerHTML = "<strong>Sou um excelente comunicador</strong>, deixando de ser apenas um bom desenvolvedor, mas também um grande parceiro de equipa. Desde os trabalhos escolares, que levo tudo com muita <strong>responsabilidade e comprometimento absoluto</strong>. Eu acredito que sou como um <strong>médico</strong>, mas ao em vez de entregar uma cura, eu entrego uma realidade onde já não existem dores."
        meMotivation.innerHTML = "<i>Não deixes que a rotina te roube os sonhos.</i>"
        tecH1.textContent = "TECNOLOGIAS"
        tecH2.textContent = "Linguagens e Banco de Dados"
        otherTecH2.textContent = "Outras Tecnologias"
        ContactMeH1.textContent = "FALE COMIGO"
        inome.placeholder = "Digite o seu nome"
        imensagem.placeholder = "Digite a sua mensagem"
        iSubmit.value = "Enviar para o WhatsApp"
        copyP.innerHTML = "Site desenvolvido por <strong>Luciano Boston</strong>"
    }


    else if(item === "en"){
        en.classList.add("ativo")
        contactButton.textContent = "Talk to me"
        menuAboutMe.textContent = "About me"
        homeH2.textContent = "FullStack Developer"
        homeP.textContent = "Let me take your ideas from paper to your computer screen."
        contactButton2.textContent = "Talk to me"
        projetosH1.textContent = "MY PROJECTS"
        BostonStoreP.textContent = "It's an online store focused on selling electronic items, with a modern, high-tech design."
        seeSiteLink.forEach(el => {
            el.textContent = "See website"
          })
        BostonLandScapesP.textContent = "It's a travel site built with a focus on design and immersion. Let yourself travel in your thoughts!"
        CafenaP.textContent = "It's a coffee shop website that can be adapted for restaurants, focusing only on the layout."
        RefriAnimationsP.textContent = "It's a simple and modern website, built with a focus on animations."
        BostonInvestP.textContent = "It is an investment project manager, with project categorization and simple budget management."
        BoomyP.textContent = "It is a social network with simple features, such as creating posts, authentication and real-time chat between connected users."
        BostonBurguerP.textContent = "It's a restaurant website with all the basic features you need to serve your customers online."
        AgeVerifyH2.textContent = "Age Checker"
        AgeVerifyP.textContent = "It's a very basic project, which allows us to see the main image changing according to the age and gender selected."
        toDoListH2.textContent = "To-Do List"
        toDoListP.textContent = "It's a task manager that gives us the ability to mark completed tasks and see the task description in another tab."
        telaLoginH2.textContent = "Login Screen"
        telaLoginP.textContent = "It's a common login screen, however it was the first one I developed at the beginning of my Programming studies."
        BostonFinanceP.textContent = "It's a personal finance management app, but it can be adapted to handle larger flows."
        BostonCoinP.textContent = "It's a mobile app that monitors Bitcoin fluctuations."
        BostonDeliveryP.textContent = "It's a delivery app with a primary focus on layout."
        BostonHealthP.textContent = "It's a simple app that calculates your body mass index."
        meH1.textContent = "WHO AM I?"
        meInfoH11.textContent = "GREAT PLEASURE."
        meInfoH12.innerHTML = "I AM <strong>LUCIANO BOSTON</strong></h1>"
        meInfoP1.innerHTML = "I'm an Angolan FullStack Developer. I'm passionate about technology, so passionate that even though I'm studying <strong>Finance</strong> in high school, I still find time to work in IT. And by leveraging the solid foundations I have in both areas, <strong>I can create systems that streamline much of our work</strong>, that is, creating software that saves time and accurately manages your business."
        meInfoP2.innerHTML = "<strong>I am an excellent communicator</strong>, no longer just a good developer, but also a great team player. Since my schoolwork, I've taken everything with great <strong>responsibility and absolute commitment</strong>. I believe I'm like a <strong>doctor</strong>, but instead of delivering a cure, I deliver a reality where pain no longer exists."
        meMotivation.innerHTML = "<i>Don't let routine steal your dreams.</i>"
        tecH1.textContent = "TECHNOLOGIES"
        tecH2.textContent = "Languages and Databases"
        otherTecH2.textContent = "Other Technologies"
        ContactMeH1.textContent = "TALK TO ME"
        inome.placeholder = "Enter your name"
        imensagem.placeholder = "Type your message"
        iSubmit.value = "Send to WhatsApp"
        copyP.innerHTML = "Website developed by <strong>Luciano Boston</strong>"
    }

    
}

pt.addEventListener("click", function(){

    changeLanguage("pt")
})

en.addEventListener("click", function(){

    changeLanguage("en")
})