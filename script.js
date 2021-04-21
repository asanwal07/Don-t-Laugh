const jokeel = document.getElementById("joke")
const jokebtn = document.getElementById("jokebtn")

jokebtn.addEventListener('click',gener_joke)

gener_joke()

function gener_joke()
{
      config ={
            headers: {
                  'Accept' : 'application/json'
            }
      }
      fetch("https://icanhazdadjoke.com/", config)
      .then((res) => res.json())
      .then((data)=>{
            jokeel.innerHTML=data.joke
      })
}