# How to Install

    git clone https://github.com/evgencode/tasks.git

Create Symbolic links:

- Create node_modules folder in [pathToProgect]\app
(pathToProgect - example: C:\tasks)
- Run CMD as Administrator
- Run the following commands:

    
    mklink /D [pathToProgect]\app\node_modules\\@components [pathToProgect]\app\components
    
    mklink /D [pathToProgect]\app\node_modules\\@helpers [pathToProgect]\app\helpers
    
    mklink /D [pathToProgect]\app\node_modules\\@store [pathToProgect]\app\store
    
    mklink /D [pathToProgect]\app\node_modules\\@styles [pathToProgect]\app\styles

## Next

    npm install or yarn install
    npm run build-dev
    npm run serve-frontend
