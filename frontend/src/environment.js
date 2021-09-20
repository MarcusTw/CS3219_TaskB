const PROD_API = "https://random-asian-user-api.herokuapp.com/api/users";
const DEFAULT_PICTURE = "https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg";
const IMAGE_ONERROR = (ev) => {
    ev.target.onerror = null;
    ev.target.src = DEFAULT_PICTURE;
  }

export {PROD_API, DEFAULT_PICTURE, IMAGE_ONERROR};