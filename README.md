## Meu Primeiro projeto utilizando React
### Você pode acessar a aplicação neste link:
  ### - <a href="https://track-it-ruddy-nine.vercel.app/"> Track It </a>
  ### - <a href="https://www.figma.com/file/3r8MSf9dIPuFlvZHuHTZXF/TrackIt?node-id=0%3A1"> Figma </a>
  
<br><br><br>


<p align="center">
  |&nbsp;&nbsp;&nbsp<a href="#Projeto">Projeto</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Aprendizados">Aprendizados</a>&nbsp;&nbsp;&nbsp;&nbsp;
</p>
<br><br>

<div align="center">

![image](https://user-images.githubusercontent.com/105571583/230724728-2e1d9128-f534-4a01-a0b4-625234617a48.png) <br>
![image](https://user-images.githubusercontent.com/105571583/230724660-a7ff6166-a26a-4df3-bc54-b52ca4db295b.png)
![image](https://user-images.githubusercontent.com/105571583/230724672-fc53e957-9fd6-4239-865e-3076a64e980e.png)


	
</div>

<h1 id="Projeto"> 💻 Projeto</h1>

<details>
<summary>    
Tela Login (rota /)
</summary>

- [ ]  Deve ser enviado o email e senha para a API conforme documentação
- [ ]  Enquanto estiver carregando, os campos e o botão devem ser desabilitados, conforme layout
- [ ]  Para fazer a animação de loading, utilize a biblioteca `react-loader-spinner`
- [ ]  Em caso de sucesso, o usuário deve ser redirecionado para a rota `/hoje`
- [ ]  Em caso de falha, deve ser exibido um `alert` informando o erro para o usuário e os campos/botão devem ser habilitados novamente
- [ ]  Ao clicar no link para se cadastrar, o usuário deve ser redirecionado para a rota `/cadastro`

</details>
 
<details>
<summary>
Tela Cadastro (rota /cadastro)
</summary>

- [ ]  Os dados devem ser enviados para a API conforme documentação
- [ ]  Enquanto estiver carregando, os campos e o botão devem ser desabilitados, conforme layout
- [ ]  Em caso de sucesso, o usuário deve ser redirecionado para a rota `/` (rota de Login)
- [ ]  Em caso de falha, deve ser exibido um `alert` informando o erro para o usuário e os campos/botão devem ser habilitados novamente
- [ ]  Ao clicar no link para logar, o usuário deve ser redirecionado para a rota `/` (rota de Login)
 
</details>
 
<details>
<summary>
Topo e Menu
</summary>

- [ ]  Topo e menu devem ter posicionamento fixo
- [ ]  No topo deve ser exibida a foto do usuário conforme layout
- [ ]  Utilize **ContextAPI** para compartilhar o estado do usuário logado globalmente entre os componentes.
- [ ]  No menu, os 3 botões de Hábitos, Hoje e Histórico devem redirecionar o usuário para as rotas `/habitos`, `/hoje` e `/historico` respectivamente
- [ ]  O botão de Hoje deve exibir uma barra de progresso circular indicando a porcentagem de conclusão de hábitos de hoje do usuário
- [ ]  Utilize a biblioteca `react-circular-progressbar`
 
</details>

<details>
<summary>
Tela Hábitos (rota /habitos)
</summary>

- [ ]  Carregar os hábitos do usuário, mandando request pra API conforme documentação e exibindo abaixo conforme layout
- [ ]  Ao clicar para deletar um hábito, deve ser exibido um `confirm` para confirmar se o usuário gostaria realmente de apagar o hábito. Se sim, deve ser enviado um request pra API conforme documentação e os hábitos recarregados logo em seguida.
- [ ]  Caso o usuário não tenha nenhum hábito cadastrado, deve ser exibido o texto conforme layout
- [ ]  Ao clicar no botão de "+", deve-se exibir um formulário de cadastro de hábito logo abaixo do título conforme layout
- [ ]  O usuário deve inserir o nome do hábito em um campo de texto e selecionar os dias da semana que deseja realizar o hábito conforme layout
- [ ]  Ao salvar, devem ser enviados os dados para API conforme documentação
- [ ]  Enquanto estiver carregando, o campo de texto e o botão devem ser desabilitados, conforme layout. Os botões dos dias da semana devem ser desabilitados, porém não é necessária mudança visual durante o loading.
- [ ]  Em caso de sucesso, os campos devem ser limpos e reabilitados, o formulário deve ser escondido novamente e a lista de hábitos abaixo recarregada
- [ ]  Em caso de erro, os campos devem ser reabilitados e um alerta deve indicar o problema para o usuário
- [ ]  Ao Cancelar, o formulário deve ser escondido. Caso tenha dados já preenchidos, os mesmos devem ser mantidos caso o usuário reabra o formulário de criação.
 
</details>

<details>
<summary>
Tela Hoje (rota /hoje)
</summary>

- [ ]  Carregar os hábitos de hoje do usuário, mandando request pra API conforme documentação e exibindo abaixo conforme layout
- [ ]  O título da tela deve exibir o dia de hoje conforme layout
- [ ]  No subtítulo deve ser exibida a frase "Nenhum hábito concluído ainda" ou "x% dos hábitos concluídos", dependendo do progresso do usuário
- [ ]  Ao marcar ou desmarcar um hábito como concluído, deve ser enviado um request pra API conforme documentação. Não é necessário colocar loading.
- [ ]  Ao marcar um hábito como concluído, deve ser colocada em verde a contagem da **sequência atual**
- [ ]  Caso a sequência atual seja **igual ao recorde do usuário e maior que zero**, este também deve ser exibido em verde
 
</details>


<details>
<summary>
Tela Histórico (rota /historico)
</summary>

- [ ]  Nesta tela deve ser exibido um calendário, conforme layout
- [ ]  Utilize a biblioteca `react-calendar`
- [ ]  No calendário, deve ser exibido em verde os dias em que o usuário completou todos os hábitos que deveria ter completado (ex: tinha 3 hábitos para fazer e completou os 3)
- [ ]  Já os dias que o usuário tinha hábitos para completar, porém não completou todos, devem ser destacados em vermelho (ex: tinha 3 hábitos pra fazer mas só completou 2)
- [ ]  Nos dias que o usuário não tinha nenhum hábito a concluir, não devem ser destacados (continuam com o fundo branco)
 
</details>

<h1 id="Tecnologias">🚀 Tecnologias</h1>

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React 
- React Router Dom
- React Calendar
- Context API
- React Loaders
- useTheme hook

<h1 id="Aprendizados">🧠 Aprendizados</h1>

- Como compartilhar estados de forma global utilizando context API
- Persistênica de login utilizando token criptografado salvo no localStorage
- Como criar animações em React
- React Theming e o hook useTheme
- Primeiro projeto que implementei o toggle theme.
	
<details>
<summary>    
  
  
# Como executar o projeto
  
  
</summary>
  # Getting Started with Create React App

  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  ## Available Scripts

  In the project directory, you can run:

  ### `npm start`

  Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  The page will reload when you make changes.\
  You may also see any lint errors in the console.

  ### `npm test`

  Launches the test runner in the interactive watch mode.\
  See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  ### `npm run build`

  Builds the app for production to the `build` folder.\
  It correctly bundles React in production mode and optimizes the build for the best performance.

  The build is minified and the filenames include the hashes.\
  Your app is ready to be deployed!

  See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  ### `npm run eject`

  **Note: this is a one-way operation. Once you `eject`, you can't go back!**

  If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

  You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

  ## Learn More

  You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  To learn React, check out the [React documentation](https://reactjs.org/).

  ### Code Splitting

  This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

  ### Analyzing the Bundle Size

  This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

  ### Making a Progressive Web App

  This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

  ### Advanced Configuration

  This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

  ### Deployment

  This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

  ### `npm run build` fails to minify

  This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
</details>
