import React,{useState,useEffect} from 'react'
import Useeffect1 from './useeffect1';

const App = () => {


  const [name,setName] = useState("")

  // useEffect(()=>{
  //   // setName("zohaib")
  //   console.log("helllo from useEffect");
  // },[name])

  // const handleClick = ()=>{
  //   setName("zohaib")
  // }
  // console.log("hello from render",name);


  // const [button,setButton]=useState("")
    
  // //useEffect hook
  // useEffect(() => {
  //   console.log("useEffect has been called!", button);
  // });

  // const onYesPress = () => {
  //   setButton("Yes");
  // };

  // const onNoPress = () => {
  //   setButton("No");
  // };


  const [button, setButton] = useState("");
  const [blogPosts, setBlogPosts] = useState([
    { title: "Learn useState Hook", id: 1 },
    { title: "Learn useEffect Hook", id: 2 }
  ]);
  useEffect(() => {
    console.log("useEffect has been called!", button);
  }, [button]);
  useEffect(() => {
    console.log("useEffect has been called!", blogPosts);
  }, [blogPosts]);
  const onYesPress = () => {
    setButton("Yes");
  };
  const onNoPress = () => {
    setButton("No");
  };
  
  const onAddPosts = () => {
    setBlogPosts([...blogPosts, { title: "My new post", id: 3 }]);
  };


  return (
    <div>

        <button onClick={onYesPress}>Yes</button>
        <button onClick={onNoPress}>No</button>  

      <ul>
        {blogPosts.map(blogPost => {
          return <li>{blogPost.title}</li>;
        })}
      </ul>
      <button onClick={onAddPosts}>Add Posts</button>

        <Useeffect1 />
    </div>

  )
}

export default App
