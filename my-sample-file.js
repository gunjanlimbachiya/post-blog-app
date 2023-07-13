server.get('/api/products', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'products.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading JSON file:', err);
        return res.status(500).json({ error: 'Error reading JSON file' });
      }
      try {
        const products = JSON.parse(data);
        res.json(products);
      } catch (error) {
        console.error('Error parsing JSON data:', error);
        res.status(500).json({ error: 'Error parsing JSON data' });
      }
    });
  });


PS C:\optum\optima-ui-console> npm i @azure/keyvault-secrets
npm WARN ERESOLVE overriding peer dependency
npm WARN While resolving: optima-ui@0.1.1   
npm WARN Found: next@undefined
npm WARN node_modules/next
npm WARN   next@"12.2.5" from the root project
npm WARN
npm WARN Could not resolve dependency:
npm WARN peer next@"^11.0.0" from @optum-techinnovators/optima-esso-react-hoc@1.0.19
npm WARN node_modules/@optum-techinnovators/optima-esso-react-hoc
npm WARN   @optum-techinnovators/optima-esso-react-hoc@"^1.0.19" from the root project
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: @skyline/eslint-plugin-optum@0.6.3
npm ERR! Found: prettier@2.8.8
npm ERR! node_modules/prettier
npm ERR!   dev prettier@"^2.2.1" from the root project
npm ERR!   peer prettier@">=1.13.0" from eslint-plugin-prettier@3.4.1
npm ERR!   node_modules/eslint-plugin-prettier
npm ERR!     peer eslint-plugin-prettier@"^3.3.1" from @skyline/eslint-plugin-optum@0.6.3
npm ERR!     node_modules/@skyline/eslint-plugin-optum
npm ERR!       dev @skyline/eslint-plugin-optum@"^0.6.1" from the root project
npm ERR!     dev eslint-plugin-prettier@"^3.3.1" from the root project
npm ERR!   1 more (@skyline/prettier)
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer prettier@"^1.18.2" from @skyline/eslint-plugin-optum@0.6.3
npm ERR! node_modules/@skyline/eslint-plugin-optum
npm ERR!   dev @skyline/eslint-plugin-optum@"^0.6.1" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: prettier@1.19.1
npm ERR! node_modules/prettier
npm ERR!   peer prettier@"^1.18.2" from @skyline/eslint-plugin-optum@0.6.3
npm ERR!   node_modules/@skyline/eslint-plugin-optum
npm ERR!     dev @skyline/eslint-plugin-optum@"^0.6.1" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See C:\Users\lpramodb\AppData\Local\npm-cache\eresolve-report.txt for a full report.

 

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\lpramodb\AppData\Local\npm-cache\_logs\2023-07-13T14_43_55_991Z-debug-0.log
