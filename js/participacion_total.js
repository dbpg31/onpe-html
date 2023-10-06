
 
const getDepartamentos = async () => {
    const data = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/Nacional`)
    
    if(data.status == 200){
        const Departamentos =await (data.json());
        let html =
        `
           <tr class="titulo_tabla">
              <td>DEPARTAMENTO</td>
              <td>TOTAL ASISTENTES</td>
              <td>% TOTAL ASISTENTES</td>
              <td>TOTAL AUSENTES</td>
              <td>% TOTAL AUSENTES</td>
              <td>ELECTORES HÁBILES</td>
            </tr>
                    `
        Departamentos.forEach (Departamento => {
          
          html +=
                       ` <tr onclick="location.href='./participacion_total.html?id=nacional,AMAZONAS'" onmouseover="this.style.cursor = &quot;pointer&quot;; this.style.color = &quot;grey&quot;" onmouseout="this.style.color = &quot;black&quot;" style="cursor: pointer; color: black;">
                          <td>${Departamento.DPD}</td>
                          <td>${Departamento.TV}</td>
                          <td>${Departamento.PIV}</td>
                          <td>${Departamento.TA}</td>
                          <td>${Departamento.PTA}</td>
                          <td>${Departamento.EH}</td>
                        </tr>
                        
                        `

        });

        html += 
            `             <tr>
                          <td>TOTALES</td>
                          <td>17,953,367</td>
                          <td>81.543%</td>
                          <td>4,063,663</td>
                          <td>18.457%</td>
                          <td>22,017,030</td>
                        </tr>
            `


        document.getElementById('resultados').innerHTML = html ;

    }
}


getDepartamentos();





/* const getDepartamentos = async() =>{

    const onpe = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/Nacional`)

    /*

    const amazonas = await fetch(`https://oaemonpe_sweb_php/participacion/Nacional/AMAZONAS`)

    const ancash = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/Nacional/ANCASH`)

    const apurimac = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/Nacional/APURIMAC`)

    */
/*
    if(onpe.status == 200 ){

      const Departamentos = await (onpe.json());

      let html =  

      `

      <tr class="titulo_tabla">

          <td>DEPARTAMENTO</td>

          <td>TOTAL ASISTENTES</td>

          <td>% TOTAL ASISTENTES</td>

          <td>TOTAL AUSENTES</td>

          <td>% TOTAL AUSENTES</td>

          <td>ELECTORES HÁBILES</td>

      </tr>

      `

      Departamentos.forEach (Departamento =>{

          html +=

          `

          <tr onclick="location.href='./participacion_total.html?id=nacional,AMAZONAS'" onmouseover="this.style.cursor = &quot;pointer&quot;; this.style.color = &quot;grey&quot;" onmouseout="this.style.color = &quot;black&quot;" style="cursor: pointer; color: black;">

              <td>${Departamento.DPD}</td>

              <td>${Departamento.TV}</td>

              <td>${Departamento.PTV}</td>

              <td>${Departamento.TA}</td>

              <td>${Departamento.PTA}</td>

              <td>${Departamento.EH}</td>

          <tr/>

          `

      });

      html +=

      `

      <tr>

          <td>TOTALES</td>

          <td>17,953,367</td>

          <td>81.543%</td>

          <td>4,063,663</td>

          <td>18.457%</td>

          <td>22,017,030</td>

      </tr>

      `

      document.getElementById('resultados').innerHTML = html

  }

};

getDepartamentos() */