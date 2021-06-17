# 2021-06-btc-agile-sw-online-tutoria-02

<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/githubagilesoftware.jpg" >	
</p>

Install
```
typescript    https://www.typescriptlang.org/
Jest Runner   https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner
vscode-icons  https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons
ts-jest       https://github.com/kulshekhar/ts-jest 
auto-imports  https://marketplace.visualstudio.com/items?itemName=steoates.autoimport
```

Command line
```
npm install -g typescript
npm install --save-dev jest
npm i @types/jest

Prerequisites       npm i -D jest typescript	
Installing          npm i -D ts-jest @types/jest	
Creating config     npx ts-jest config:init	

Compile all         tsc (Compila dependencias TypeScript)
Compile file        tsc '{path}/foo.ts' (Compila/Genera fichero transpilado JS)
Run file            npx node '{path}/foo.js' (Ejecuta fichero transpilado JS)
Compile/Run (fly)   npx ts-node '{path}/foo.ts'
Running tests       npx jest	

Compile struct      npx tsc --build [tsconfig.json] -> define files [ ... ]

CI/CD | nodejs		.travis.yml 

Actualizar Fork     Git
                    git remote add upstream https://github.com/GeeksHubsAcademy/2021-06-btc-agile-sw-online-tutoria-02.git
                    git fetch upstream
                    git checkout feature
                    git rebase upstream/feature
                    git push -f origin feature
                    
                    GitHub
                    Pulsamos sobre el botón "Compare" en el repo Forkeado
                    Pulsamos sobre "switching the base"
                    Generamos PR
                    Aceptamos PR
```

Propósito
```
Se necesita instalar un sistema de pruebas en la nube para poder aceptar las PR's con feedback por adelantado
Es necesario basarse en el ejemplo de la kata1 de la primera tutoría
Los pasos a seguir son:
 - Fork del proyecto
 - Crear rama 'feature'
 - Añadir la Kata1 a la solución del proyecto actual
 - Validar en local 
 - Generar una PR a la rama master del Fork
 - Generar una PR a la rama master del repo actual
 - Añadir fichero 'SAAS' en el repo actual
 - Actualizar Fork
 - Generar una PR a la rama master del Fork
 - Generar una PR a la rama master del repo actual
 - Validar lanzamiento de Test en PR actual
```
