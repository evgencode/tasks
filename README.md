# How to Install

    git clone https://github.com/evgencode/tasks.git

Create Symbolic links:

- Create node_modules folder in [pathToProgect]\app
(pathToProgect - example: C:\tasks)
- Run CMD as Administrator
- Run the following commands:

    
    mklink /D [pathToProgect]\app\node_modules\\@app [pathToProgect]\app

## Next

    npm install or yarn install
    npm run build-dev
    npm run serve-frontend
