# tasks


## Create Symbolic links:

- Run CMD as Administrator
- Run the following commands:
- pathToProgect - example: C:\tasks

    
    mklink /D [pathToProgect]\frontend\app\node_modules\@components [pathToProgect]\frontend\app\components
    mklink /D [pathToProgect]\frontend\app\node_modules\@helpers [pathToProgect]\frontend\app\helpers
    mklink /D [pathToProgect]\frontend\app\node_modules\@store [pathToProgect]\frontend\app\store
    mklink /D [pathToProgect]\frontend\app\node_modules\@styles [pathToProgect]\frontend\app\styles
