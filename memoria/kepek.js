const kepek = [
    "h1.png.jpg",
    "h2.png.jpg",
    "h3.png.jpg",
    "h4.png.jpg",
    "h5.png.jpg",
    "k1.png.jpg",
    "k10.png.jpg",
    "k2.png.jpg",
    "k3.png.jpg",
    "k4.png.jpg",
    "k5.png.jpg",
    "k6.png.jpg",
    "k7.png.jpg",
    "k8.png.jpg",
    "k9.png.jpg",
    "kh1.png.jpg",
    "khm1.png.jpg",
    "khm2.png.jpg",
    "mk1.png.jpg",
    "mk2.png.jpg"]
    
    
    
const kepDarab=24;
let pakli=[];

    function init()
    {
    let seged=0 ;
    for(let i=0; i<kepdb;i++)
    {
        let temp=document.createElement("div");
        temp.classList.add("kartya");
        //temp.style.backgroundImage="url("+kepek[seged]+")";
        //temp.style.backgroundImage=`url(${kepek[i]})`;
        temp.style.backgroundImage="url("+kepek[Math.floor(i/2)]+")";


        pakli.push(temp);
        //document.getElementById("asztal").appendChild(temp);

        seged++;
        if(seged>=kepdb/2)
        {
            seged=0;
        }
    }
    
    
    pakli=shuffleArray(pakli);
    for (let i=0; i<pakli.length; i++)
    {
        document.getElementById("asztal").appendChild(pakli[i]);
    }


}

function shuffleArray(array) 
{
    for (let i = array.length - 1; i >= 1; i--) 
    {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;

}