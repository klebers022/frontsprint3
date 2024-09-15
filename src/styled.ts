import styled from 'styled-components';



export const Cabecalho1 = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  color: #333;
  height: 60px;
  position: relative;

  img {
    width: 40px;
    height: 40px;
  }

  h1 {
    margin: 0;
    cursor: pointer;
    transition: all 0.3s;
  }

  h1:hover {
    color: #34B5DF;
  }

  nav {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    position: relative;
  }

  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    margin: 0 10px;
  }

  nav ul li a {
    color: #333;
    text-decoration: none;
    transition: all 0.3s;
  }

  nav ul li a:hover {
    color: #34B5DF;
  }

  button {
    background-color: #34B5DF;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
  }

  button:hover {
    background-color: #fff;
    color: #003060;
    border: #003060 solid 1px;
    cursor: pointer;
  }

  .menu-toggle {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: auto;

    .menu-toggle {
      display: flex;
     margin: auto;
      background: none;
      border: none;
      cursor: pointer;
      width: 60px;
      font-size: 24px;
      color: #333;
      transition: all 0.3s;
      
    }

    .menu-toggle:hover {
      color: #34B5DF;
    }

    img {
      margin-left: 10px;
      display: none;
    }
    h1{
        display: none;
    }

    nav {
      width: 100%;
      justify-content: space-between;
      position: relative;
    }

    nav ul {
      display: none;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      background-color: #fff;
      padding: 0;
      margin: 0;
      position: absolute;
      top: 0;
      left: 0;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      overflow: hidden;
     
    }

    nav ul.active {
      display: flex;
      z-index: 1;
    }

    nav ul li {
      margin: 20px 0;
      text-align: center;
      font-size: 24px;
    }



    button {
      margin-top: 10px;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 0 10px;

  

    button {
      padding: 13px 16px;
    }
  }
`;




export const Rodape1 = styled.footer`
    background-color: #003060;
  color: white;
  padding: 20px;
  text-align: center;
  width: 100%;

   
   
    
    p {
        margin: 10px 0;
        }
        `

export const Calendario1 = styled.div`
    /* Estilização do Agendamento */
.agendamento-container {
  background-color: #003060;
  padding: 20px;
  border-radius: 10px;
  color: white;
  width: 100%;
  max-width: 400px;
  margin:  auto;
}

h2 {
  color: #34B5DF;
  text-align: center;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  color: #34B5DF;
}

select, .react-datepicker__input-container input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #34B5DF;
  background-color: #003060;
  color: white;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #34B5DF;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #028cbe;
}

`