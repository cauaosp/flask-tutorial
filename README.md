# task list

Este é um projeto de servidor remoto utilizando o framework Flask e o banco de dados Supabase.

website: https://lista-de-tarefas-5ece0f6d1ed7.herokuapp.com/

**Instalação e Configuração**
- Clone o repositório
- Instale as dependências: pip install -r requirements.txt
- Abra um shell interativo Python e execute os seguintes comandos: 
  * Python
  * from app import app, db
  * with app.app_context():
  * &nbsp;&nbsp;&nbsp;&nbsp;db.create_all()

Isso criará o banco de dados SQLite local para teste.

**Execução**
- Rode o arquivo app.py: python app.py
- Acesse o servidor no endereço IP e porta especificados (ex: http://localhost:5000)

**Observações**
- Se você estiver querendo testar localmente, certifique-se de que o arquivo test.db foi criado após a execução dos comandos acima.
