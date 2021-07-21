const addDoc = async ({collection, data}) => {

    let document = {
        ...data,
        createAt:firebase.firestore.FieldValue.serverTimestamp(),
        updateAt:firebase.firestore.FieldValue.serverTimestamp()

    }


    let collectionRef = firebase.firestore().collection(collection);


    return collectionRef.add(document);

}



const uploadd = async ({file}) => {

    let storageRef = firebase.storage().ref().child(file.name);

    await storageRef.put(file);

    return storageRef;
  }



  
  const publish = async ({file}) => {


    let storageRef = await uploadd({file});

      return addDoc({ collection: 'file', data: {path: storageRef.fullPath}});
      
  }

  const showImage = async  (docData) => {
    

    let url = await  firebase.storage().ref(docData.path).getDownloadURL();
    
    console.log(url);
   
    
      
    
    }

  const queryImages = async () => {
      let collection = firebase.firestore().collection('file');


      collection.onSnapshot((snapshot) => {

        //console.log(snapshot.docs.doc);
        //localStorage.setItem('archivos', JSON.stringify(snapshot));
          snapshot.docChanges().forEach((change) => {
              if(change.type ==="added" ){
                  showImage(change.doc.data());
                  //console.log()
              }
          })
      })
  }


async function main(){
    
var firebaseConfig = {
    apiKey: "AIzaSyBQYGmM9swqF_SOuB8PRvrkqpymRiPscQA",
    authDomain: "cdoarchivos.firebaseapp.com",
    projectId: "cdoarchivos",
    storageBucket: "cdoarchivos.appspot.com",
    messagingSenderId: "48177786624",
    appId: "1:48177786624:web:cd73eab3f7c17c3008cde5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  queryImages();
}


      
  async function subirArchivoFir(){
      let fileInput = document.querySelector(("#fileasubir"));

      let file = fileInput.files[0];

      publish({file});
  }


main();