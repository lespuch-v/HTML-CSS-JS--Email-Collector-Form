const form = document.getElementById("myFormDatas")
const container = document.querySelector(".myFormContainer")
const exitButton = document.querySelector("#bntClose")


form.addEventListener("submit", event => {
    event.preventDefault()

    let formData = new FormData(form)
    let userName = formData.get("userName")
    let userEmail = formData.get("email")

    let updatedPage = 
    `
    <div class="myFormContainer jsContainer">
    <h1>Congratulations <span class="userName">${userName}!</span> We are thrilled to have you on our newsletter fed.</h1>
    <p>Check your INBOX ${userEmail} for forther instruction!</p>
    <button class=" btnSubmit" id="bntClose" onclick="exit()">Exit</button>
    </div>
    `




    container.innerHTML = updatedPage
    
})
let oldPage = 
`
            <form id="myFormDatas" action="#">
                <img class="justAnImage" src="images/money.png" alt="my awesome image"><br>
                <label class="item" for="name">Your <span class="textDecor">Name:<span></label><br>
                <input class="item" type="text" id="name" name="userName"><br>
                <label class="item" for="email"><span class="textDecor">Your</span> Email:</label><br>
                <input class="item" type="text" id="email" name="email"><br>
                <input class="item btnSubmit" type="submit" value="Submit">
            </form>
`




function exit(){
    container.innerHTML = oldPage
    console.log("test")
}