import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
//   Método 1 para obtener datos de fiebase.
firestore
  .collection('users')
  .doc('TpJfdvwbvj2yYT0jOC6f')
  .collection('cartItems')
  .doc('B4n26RBDXJNzrT1c5LJ9');
//   Método 2 para obtener datos de fiebase.
firestore.doc('/users/TpJfdvwbvj2yYT0jOC6f/cartItems/B4n26RBDXJNzrT1c5LJ9');
firestore.collection('/users/TpJfdvwbvj2yYT0jOC6f');