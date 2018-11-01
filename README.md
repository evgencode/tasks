# How to Install

    git clone https://github.com/evgencode/tasks.git

In project uses paths such as '@app/components...' (symlinks)

or with symlinks:

    git clone -c core.symlinks=true https://github.com/evgencode/tasks.git

You can create Symbolic links manually (if were cloned without symlinks):

- Create node_modules folder in [pathToProgect]\app
- Run CMD as Administrator
- Run the following commands:
- pathToProgect - example: C:\tasks

    
    mklink /D [pathToProgect]\app\node_modules\@components [pathToProgect]\app\components
    mklink /D [pathToProgect]\app\node_modules\@helpers [pathToProgect]\app\helpers
    mklink /D [pathToProgect]\app\node_modules\@store [pathToProgect]\app\store
    mklink /D [pathToProgect]\app\node_modules\@styles [pathToProgect]\app\styles

## Next

    npm install or yarn install
    npm run build-dev
    npm run serve-frontend
