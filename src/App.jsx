import { useState } from 'react'
import './App.css'
import Login from './Login/Login'
import Header from './Header/Header'
import List from './List/List'
import Projects from './Projects/Projects'
import './firebaseConfig';
import {getFirestore, addDoc, collection} from 'firebase/firestore';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Initialize the Firebase database with the provided configuration
    const database = getDatabase(cong);
    
    // Reference to the specific collection in the database
    const collectionRef = ref(database, "hours");

    // Function to fetch data from the database
    const fetchData = () => {
      // Listen for changes in the collection
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();

        // Check if dataItem exists
        if (dataItem) {
          // Convert the object values into an array
          const displayItem = Object.values(dataItem);
          setData(displayItem);
        }
      });
    };

    // Fetch data when the component mounts
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from database:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

}

export default App
