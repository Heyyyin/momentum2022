const images=["pexels-emiliano-arano-1298684.jpg", "pexels-flo-maderebner-869258.jpg", "pexels-james-wheeler-1519088.jpg", "pexels-pixabay-36478.jpg", "pexels-pixabay-36717.jpg", "pexels-pixabay-64219.jpg", "pexels-pixabay-417173.jpg", "pexels-pok-rie-1655166.jpg", "pexels-quang-nguyen-vinh-2131841.jpg", "pexels-stein-egil-liland-1933317.jpg", "pexels-suomi-photography-2024881.jpg","pexels-couleur-2317904.jpg","pexels-couleur-2317904.jpg","pexels-felix-mittermeier-4644813.jpg","pexels-george-desipris-792381.jpg","pexels-kelvin-valerio-617278.jpg","pexels-naushil-asari-638738.jpg","pexels-pixabay-50577.jpg","pexels-pixabay-68669.jpg","pexels-pixabay-144234.jpg","pexels-pixabay-247502.jpg"];

const chosenImage= images[Math.floor(Math.random()*images.length)];


const bgImage=document.createElement("img");
bgImage.classList.add("background");

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);

