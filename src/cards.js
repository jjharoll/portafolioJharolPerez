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
          <a className="sociolink" onClick={stoprop} href="mailto:jharol.perezoz@amigo.edu.co"
            target="_blank">jharol.perezoz@amigo.edu.co"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">instagram</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://instagram/jharolperez"
            target="_blank">"instagram/jharolperez"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Linkeind</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://www.linkedin.com/in/jharol-andres-perez-ozuna/"
            target="_blank">"linkedin.com/jharol-andres-perez-ozuna"
          </a>
        </span>,</span></pre>
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
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}><span className="cm-keyword">const</span> <span className="cm-def">Proyectos</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">OCR</span>: <span className="cm-string">"reconocimiento de caracteres en imagenes y procesamiento de los datos"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Firma Electronica</span>: <span className="cm-string">"implementacion de firma electronica con dispositivos externos"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">ecommerce</span>:<span className="cm-string">"2 clientes con pasarela electronica de pagos"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Seguridad Informatica</span>: <span className="cm-string">"Escaneo de vulnerabilidades a diferentes clientes"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{"}"} <span className="cm-comment">// Y eso es solo la punta del iceberg</span></span></pre>
      </div>
    </div>
  )
}
