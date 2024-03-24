const baseUrl = "https://ocean-db-git-master-betulioos-projects.vercel.app/";
const button$$ = document.querySelector("button");
const input$$ = document.querySelector("input");

const fetching = async () => {
  const response = await fetch(`${baseUrl}`);
  const data = await response.json();
  console.log(data);
  return data;
};

button$$.addEventListener("click", async () => {
  let value = input$$.value;
  await fetching();
});
