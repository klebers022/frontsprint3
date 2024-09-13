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

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        height: auto;

        nav {
            width: 100%;
        }

        nav ul {
            display: none;
            flex-direction: column;
            width: 100%;
            background-color: #fff;
            padding: 10px 0;
            position: absolute;
            top: 60px;
            left: 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        nav ul.active {
            display: flex;
        }

        nav ul li {
            margin: 10px 0;
            text-align: center;
        }

        button {
            margin-top: 10px;
            width: 100%;
        }

        .menu-toggle {
            display: flex;
            width: 50%;
            justify-content: flex-end;
            float: left;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 24px;
            color: #333;
            transition: all 0.3s;
        }

      

        .menu-toggle:hover {
            color: #34B5DF;
        }
    }

    @media (max-width: 480px) {
        padding: 0 10px;

        img {
            width: 30px;
            height: 30px;
        }

        h1 {
            font-size: 18px;
        }

        button {
            padding: 8px 16px;
        }
    }
`;



export const Rodape1 = styled.footer`
    background-color: #003060;
    color: white;
    padding: 20px;
    text-align: center;

   
   
    
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