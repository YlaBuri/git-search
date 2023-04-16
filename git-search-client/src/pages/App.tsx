import axios from 'axios';
import React, { useState } from 'react';
import Buscar from '../components/buscar';
import Cabecalho from '../components/cabecalho';
import Repositorio from '../components/repositorio';
import Usuario from '../components/usuario';
import { IRepo } from '../types/IRepo';
import "./App.css";

function App() {

  /* const user: IUser = {
    login: "YlaBuri",
    id: 31744347,
    node_id: "MDQ6VXNlcjMxNzQ0MzQ3",
    avatar_url: "https://avatars.githubusercontent.com/u/31744347?v=4",
    gravatar_id: "",
    type: "User",
    site_admin: false,
    name: "Yla Buri",
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 39,
    public_gists: 0,
    followers: 5,
    following: 3,
    created_at: "2017-09-07T19:17:10Z",
    updated_at: "2023-03-27T11:49:43Z"
}; */

/* const repos: IRepo[] = [
  {
    id: 1,
    node_id: '12345',
    name: 'repo1',
    full_name: 'user/repo1',
    private: false,
    owner: {
      login: 'username',
      id: 456,
      node_id: 'def',
      avatar_url: 'https://example.com/avatar.png',
      url: 'https://example.com/username',
      html_url: 'https://example.com/username',
      type: 'User',
    },
    html_url: 'https://github.com/user/repo1',
    description: 'This is the first repo',
    fork: false,
    created_at: '2022-01-01T00:00:00Z',
    updated_at: '2022-01-02T00:00:00Z',
    pushed_at: '2022-01-03T00:00:00Z',
    git_url: 'git://github.com/user/repo1.git',
    ssh_url: 'git@github.com:user/repo1.git',
    clone_url: 'https://github.com/user/repo1.git',
    svn_url: 'https://github.com/user/repo1',
    size: 100,
    mirror_url:"",
    stargazers_count: 10,
    watchers_count: 20,
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 5,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['typescript', 'github'],
    visibility: 'public',
    forks: 5,
    open_issues: 2,
    watchers: 20,
    default_branch: 'main',
  },
  {
    id: 2,
    node_id: '2345',
    name: 'repo2',
    full_name: 'user/repo-2',
    private: true,
    owner: {
      login: 'username',
      id: 456,
      node_id: 'def',
      avatar_url: 'https://example.com/avatar.png',
      url: 'https://example.com/username',
      html_url: 'https://example.com/username',
      type: 'User',
    },
    html_url: 'https://github.com/user/repo-2',
    description: 'This is the second repo',
    fork: false,
    created_at: '2022-02-01T00:00:00Z',
    updated_at: '2022-02-02T00:00:00Z',
    pushed_at: '2022-02-03T00:00:00Z',
    git_url: 'git://github.com/user/repo-2.git',
    ssh_url: 'git@github.com:user/repo-2.git',
    clone_url: 'https://github.com/user/repo-2.git',
    svn_url: 'https://github.com/user/repo-2',
    size: 20,
    mirror_url:"",
    stargazers_count: 10,
    watchers_count: 5,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    archived: false,
    disabled: false,
    open_issues_count: 5,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['typescript', 'github'],
    visibility: 'public',
    forks: 5,
    open_issues: 2,
    watchers: 20,
    default_branch: 'main',
    }
  ] */
  
  const [user, setUser] = useState(null);

  const [repos, setRepo] = useState<IRepo[]>([]);

  const pesquisar = (inputValor: string) => {
    console.log('O valor do input é:', inputValor);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    
      //pegar usuario
      axios.get(`http://localhost:8080/api/user/${inputValor}`)
      .then(resposta =>{
        //console.log(resposta)
        setUser(resposta.data)
      })

      axios.get(`http://localhost:8080/api/user/${inputValor}/repos`)
      .then(resposta =>{
        //console.log(resposta)
        setRepo(resposta.data)
      })
  }

  return (
    <div className="App">

      <Cabecalho/>
      <div className='content'>

        <div className="pesquisa">
          <Buscar onSubmit={pesquisar}/>
        </div>

        
        <div className="card">
          {repos.length === 0 ? (
        <p>Nenhum resultado encontrado.</p>
        ) :(
          <React.Fragment>
          <div className="user">
            {user && <Usuario user={user} />}
          </div>
          <hr className='vertical'></hr>
          <div className="repos">
            {repos.map((item, index) => (
              <Repositorio key={index} repo={item}/>
            ))}
          </div></React.Fragment>)}
        </div>



      </div>


    </div>
  );
}

export default App;
