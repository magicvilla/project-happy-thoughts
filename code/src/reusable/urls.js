//API URL assigened to variable
export const THOUGHTS_URL = 'https://anna-happy-thoughts.herokuapp.com/thoughts'
//To pass id to URL make a function that will inject one argument to the url string - return string with the argument in it
export const HEART_URL = (messageID) => `https://anna-happy-thoughts.herokuapp.com/thoughts/${messageID}/likes`

