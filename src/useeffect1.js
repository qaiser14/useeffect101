import React, {useState, useEffect} from 'react'


// useeffect
const Useeffect1 = () => {

    const [button, setButton] = useState("");

    const [blogPosts, setBlogPosts] = useState([
        { title: "Learn to use useState Hook", id:1},
        { title: "Learn to use useEffect Hook", id:2},
    ]);

    useEffect(() => {
        console.log("useEffect has been called by Qaiser!", button);    
    }, [button]);

    useEffect(() => {
        console.log("useEffect has been called by Qaiser!!", blogPosts);
    }, [blogPosts]);

    const onYesPress = () =>{
        setButton("Yes");
    }

    const onNoPress = () =>{
        setButton("No");
    }

    const onAddPosts = () =>{
        setBlogPosts([...blogPosts, {title: "My useeffect Hook practise", id: 3}]);
    }

    return(
        <div>
            <button onClick={onYesPress}>YES</button>
            <button onClick={onNoPress}>NO</button>

            <ul>
                {blogPosts.map(blogPost => {
                    return <li>{blogPost.title}</li>;
                })}
            </ul>
            
            <button onClick={onAddPosts}>Add Posts</button>
        </div>
    )
}

export default Useeffect1