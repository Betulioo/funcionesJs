const baseUrl = "https://ocean-db-git-master-betulioos-projects.vercel.app/";
const button$$ = document.querySelector("button");
const input$$ = document.querySelector("input");
const p$$ = document.createElement("p");

const fetching = async () => {
  const response = await fetch(`${baseUrl}`);
  const data = await response.json();
  console.log(data);
  return data;
};

button$$.addEventListener("click", async () => {
  let value = input$$.value;
  const data = await fetching();

  p$$.textContent = data[value].name;
});

// CREATING P -------------

document.body.appendChild(p$$);
