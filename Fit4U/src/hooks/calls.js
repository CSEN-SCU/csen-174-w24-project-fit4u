import userServices from "../services/userServices";


const getMe = (setMe) => {
  const fetchPromise = userServices.getAll("api/me/");
  fetchPromise.then(response => {
    console.log(response)
    setMe(response.data)
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const calls = {
  getMe
}

export default calls;