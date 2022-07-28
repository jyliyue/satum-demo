import { register, start } from '@satumjs/core';

register([
    {
        name: 'app-1',
        entry: 'http://127.0.0.1:9020/',
        rules: 
            {
                rule: '/index',
                container: '#mountNode'
            }
        
    },
    {
        name: 'common',
        entry: 'http://127.0.0.1:9010/',
        rules: 
            {
                rule: '/',
                container: '#layout',
                layout: '/index'
            }
        
    },
])

start()