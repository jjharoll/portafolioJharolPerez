import React from 'react'

export const IntroCard = (props)=>{
  return (
    <div className={"introCard"+props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}><span className="cm-keyword">const</span> <span className="cm-def">person</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">primerNombre</span>: <span className="cm-string">"Jharol"</span>, &nbsp; </span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">apellidos</span>: <span className="cm-string">"Perez Ozuna"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">edad</span>: <span className="cm-string">"29 años"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Sexo</span>: <span className="cm-string">"Maculino"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">PasaTiempo</span>: [<span className="cm-string">"Calistenia"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-string">"Programar"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-string">"Estar en familia"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-string">"Viajar"</span>],</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Pais</span>: <span className="cm-string">"Colombia"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Departamento</span>: <span className="cm-string">"Bello"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{"}"}</span></pre>
      </div>
    </div>
  )
}

export const LangCard = (props)=>{
  return (
    <div className={"introCard"+props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}><span className="cm-keyword">const</span> <span className="cm-def">Habilidades</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Python</span> : <span className="cm-string">"Experto"</span>, &nbsp; &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">React</span>: <span className="cm-string">"Experto"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">NodeJs</span>: <span className="cm-string">"Experto"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Javascript</span>: <span className="cm-string">"Experto"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">CSS</span>: <span className="cm-string">"Intermedio"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Git</span>: <span className="cm-string">"Experto"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">PHP</span>: <span className="cm-string">"Experto"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Kubernetess</span>: <span className="cm-string">"Intermedio"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">SQL</span>: <span className="cm-string">"Experto"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Angular</span>: <span className="cm-string">"Principiante"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Dockers</span>: <span className="cm-string">"Intermedio"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{"}"}</span></pre>
      </div>
    </div>
  )
}

export const SocialCard = (props)=>{
  const stoprop = (e)=>{
    e.stopPropagation();
  }

  return (
    <div className={"introCard"+props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}><span className="cm-keyword">const</span> <span className="cm-def">redesSociales</span> <span className="cm-operator">=</span> {"{"}</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">github</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://github.com/blueedgetechno"
            target="_blank">"github.com/jjharoll"</a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">twitter</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://twitter.com/blueedgetechno"
            target="_blank">"twitter.com/jharolperez"
          </a>
          </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">hotmail</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://codeforces.com/profile/blueedge"
            target="_blank">"jharol_andres24@hotmail.com"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">gmail</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="mailto:blueedgetechno@gmail.com"
            target="_blank">jharol.perezoz@amigo.edu.co"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">spotify</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://open.spotify.com/user/62axxw0etmycj09el078cock0"
            target="_blank">"../user/62axxw0etmycj09el078cock0"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">behance</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://behance.net/blueedgetechno"
            target="_blank">"behance.net/blueedgetechno"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">codepen</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://codepen.io/blueedgetechno"
            target="_blank">"codepen.io/blueedgetechno"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">dev</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://dev.to/blueedgetechno"
            target="_blank">"dev.to/blueedgetechno"
          </a>
        </span></span>,</pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">stackoverflow</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://stackoverflow.com/users/12115721/blue-edge"
            target="_blank">"../users/12115721/blue-edge"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">discord</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://discord.com/app"
            target="_blank">"@blueedgetechno"
          </a>
        </span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">youtube</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://www.youtube.com/channel/UCozhS3MxzCGrPTffh0mqArw"
            target="_blank">"../channel/JHAROLANDRESPEREZOZUNA"
          </a>
        </span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{"}"}</span></pre>
      </div>
    </div>
  )
}

export const ProjectCard = (props)=>{
  return (
    <div className={"introCard"+props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}><span className="cm-keyword">const</span> <span className="cm-def">projects</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">BlueBlogs</span>: <span className="cm-string">"A social blogging platform for nerds"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-operator">+</span><span className="cm-string">"made in flask"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">TheINTELLECTS</span>: <span className="cm-string">"A platform meant for engineering"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{" "}<span className="cm-tab" role="presentation"Cm-text="	">{" "}</span><span className="cm-tab" role="presentation"Cm-text="	">{"   "}</span> <span className="cm-operator">+</span><span className="cm-string">"pupils made in expressJs, ejs &amp; mongoDB"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">codeblue</span>:<span className="cm-string">"Atom package to help during codeforces"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{" "}<span className="cm-tab" role="presentation"Cm-text="	">{" "}</span><span className="cm-tab" role="presentation"Cm-text="	">{"   "}</span> &nbsp; <span className="cm-operator">+</span><span className="cm-string">"contest, made in ReactJs and Less.js"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">BlueChats</span>: <span className="cm-string">"A desktop messaging application"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{" "}<span className="cm-tab" role="presentation"Cm-text="	">{" "}</span><span className="cm-tab" role="presentation"Cm-text="	">{"   "}</span> &nbsp;<span className="cm-operator">+</span><span className="cm-string">"made in Electron, expressJs &amp; MongoDB"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{"}"} <span className="cm-comment">// And that's just the tip of the iceberg</span></span></pre>
      </div>
    </div>
  )
}
