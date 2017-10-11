# React Redux Boilerplate

![Alt Text](./react_redux.png?raw=true "React Redux Diagram")
*Photo Cred: medium.freecodecamp.org/learn-how-to-build-astronomy-picture-of-the-day-app-with-nasa-api-and-react-redux-part-ii-83f15970d0e3*

Notes 

**/src/components** - Use Components when you need to display something without accessing state in your application. Components are sometimes referred as "dumb/presentational" components as they do not need to deal with any logic. 

**/src/containers** - Similar to components, but access state data in Redux. Can be used to fetch state and display on components. State is accessed through component props.

**src/actions** - Actions flow to reducers with the action type and some sort of data. Actions can be called by User Events (Click, Form Submit, etc.) Create your Axios calls here and send the response as the payload. 

Example: 
```
// Some component 
loadPosts() {
        this.props.fetchPosts();
}

<button onclick="loadPosts()">
  Load All Posts
</button>

//Some actions
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}
```

 **src/reducers** - Reducers take in actions and update application state. Combine all reducers into a single object before sending to Store (Entire Application State in one JavaScript Object). 

 Always return something in your reducer, even if its empty. 


**src/styles** - Style your application your SASS.