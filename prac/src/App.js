import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function Header(props) {
  return <header>
    <h1><a href="/" onClick={(event) => {
      event.preventDefault(); // 새로고침 막는 함수
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}
function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Create(props) {
  return <article>
    <h2>Create</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title" /></p>
      <p><textarea name="body" placeholder='body' /></p>
      <p><input type="submit" value="Create" /></p>
    </form>
  </article>
}
function Update(props) {
  const[title, setTitle] = useState(props.title);
  const[body, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title" value={title} onChange={event=>{
        console.log(event.target.value);
        setTitle(event.target.value);
      }}/></p>
      <p><textarea name="body" placeholder='body' value={body} onChange={evnet=>{
        setBody(evnet.target.value)
      }}/></p>
      <p><input type="submit" value="Update" /></p>
    </form>
  </article>
}
function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  // 위에 세줄을 간단하게 쓰면
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  // console.log('_mode',_mode)
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'css is...' },
    { id: 3, title: 'js', body: 'js is...' }
  ]);
  let content = null;
  let contextControl = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB" />
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
      contextControl = <><li><a href={"/update/" + id} onClick={event => {
        event.preventDefault();
        setMode('UPDATE')
      }}>Update</a></li>
      <li><input type="button" value="Delete" onClick={()=>{
        const newTopics = []
        for(let i=0; i<topics.length;i++){
          if(topics[i].id !== id){
            newTopics.push(topics[i])
            setMode('WELCOME')
          }
        }
        setTopics(newTopics)
      }}/></li>
      </>
    }
    content = <Article title={title} body={body} />
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = { id: nextId, title: _title, body: _body }
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }} />
  } else if (mode === 'UPDATE') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body) =>{
      const newTopic = [...topics]
      const updateTopic = {id:id, title:title, body:body}
      for(let i=0;i<newTopic.length;i++){
        if(newTopic[i].id === id) {
          newTopic[i] = updateTopic;
          break;
        }
      }
      setTopics(newTopic)
    }} />
  }
  return (
    <div className="App">
      <Header title="WEB" onChangeMode={() => {
        setMode('WELCOME');
      }} />
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id);
      }} />
      {content}
      <ul>
        <li><a href="/create" onClick={event => {
          event.preventDefault();
          setMode('CREATE')
        }}>Create</a></li>
        {/* <li><a href="/update" onClick={event => {
          event.preventDefault();
          setMode('UPDATE')
        }}>update</a></li> */}
        {contextControl}
      </ul>
    </div>
  );
}

export default App;