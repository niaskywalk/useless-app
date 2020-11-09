export const addList = (listID, title, description) => {
  return window.firebase.database().ref("lists/" + listID).set({id: listID, title, description});
}
