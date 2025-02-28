# Usa imagem oficial do Node.js
FROM node:18

# Cria diretório de trabalho
WORKDIR /app

# Copia package.json e instala dependências
COPY package.json .
RUN npm install

# Copia os arquivos do projeto
COPY . .

# Expor porta da API
EXPOSE 3000

# Comando padrão
CMD ["npm", "start"]
