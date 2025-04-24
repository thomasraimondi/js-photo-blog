console.log("Js ok");

const uri = "https://lanciweb.github.io/demo/api/pictures";

axios.get(uri).then((responce) => {
  console.log(responce.data);
});
