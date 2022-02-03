import { db, storage } from "./firebase";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore"; 
import { getDownloadURL, ref } from "firebase/storage";


// Function to write a document  
async function document (   ID   )
{
  console.log("Writing to firebase ...");
  
  await setDoc(doc(db, "users", ID), {
    id: ID,
  });
}

// Function to update a document
async function update (  ID , newData )
{
  console.log("Updating firebase ...");
  
  await updateDoc(doc(db, "users", ID), newData);
}

async function getDocument ( ID, collection = 'users' )
{
  let docRef = doc(db, collection, ID);
  let docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    let data = docSnap.data();
    return data;
    
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

// Function to write a document  
async function documentTask (   ID  , data  )
{
  console.log("Writing to firebase ...");
  
  await setDoc(doc(db, "tasks", ID), data);
}

async function getURL ( path )
{
  await getDownloadURL(ref(storage, path)).then(url => {
    console.log(url);
  })
}


export { document , update , getDocument, documentTask, getURL};

