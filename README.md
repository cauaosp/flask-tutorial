# flask-tutorial

Este é um projeto de servidor remoto utilizando o framework Flask e o banco de dados SQLite com Flask-SQLAlchemy.

**Requisitos**
- Python 3.x instalado
- Flask e Flask-SQLAlchemy instalados (pip install flask flask-sqlalchemy)

**Instalação e Configuração**
- Clone o repositório
- Instale as dependências: pip install -r requirements.txt (opcional)
- Abra um shell interativo Python e execute os seguintes comandos: 
  * Python
  * from app import app, db
  * with app.app_context():
  * &nbsp;&nbsp;&nbsp;&nbsp;db.create_all()

Isso criará o banco de dados SQLite (test.db) e as tabelas necessárias.

**Execução**
- Rode o arquivo app.py: python app.py
- Acesse o servidor em http://localhost:5000 (ou o endereço IP e porta especificados)

**Observações**
- Certifique-se de que o arquivo test.db foi criado após a execução dos comandos acima.
- Se você encontrar algum erro, verifique a documentação do Flask e do Flask-SQLAlchemy para obter mais informações.
