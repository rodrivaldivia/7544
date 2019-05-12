class AuthTokenProvider {
    
  getToken(){
    // Retrieves the user token from localStorage
    return "Bearer " + localStorage.getItem("id_token");
  }

  setToken(idToken){
    console.log('Saving Token: ', idToken);
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  }
}
module.exports = new AuthTokenProvider();