import Layout from "./Layout/Layout"
import Navbar from "./Navbar/Navbar";
import QuestsList from "./QuestsList/QuestsList"
import Container from "./Container/Container";
import ToDoEditor from "./ToDoEditor/ToDoEditor";
import LogIn from "./LogIn/LogIn";
import Counter from "./Counter/Counter";
import ArticleList from "./Articles/ArticleList";


export default function App() {
    return(
        <Layout>
        <Navbar/>
        <Container><QuestsList todos={todo}/><ToDoEditor/></Container>
        <LogIn/>
        <Counter/>
        <ArticleList/>
        </Layout>
    )
}


let todo = [
    {id:'i1', checker:true, text:'Create this site', priority:'low'},
    {id:'i2', checker:false, text:'Create Roblox game', priority:'low'},
    {id:'i3', checker:false, text:'Cook solyanka for my teacher', priority:'medium'},
    {id:'i4', checker:true, text:'Kill Pityn', priority:'high'}
]