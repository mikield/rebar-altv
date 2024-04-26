import * as alt from 'alt-client';
import '../translate/index.js';

// Load all other files after translate
import './controllers/index.js';
import './screen/index.js';
import './system/index.js';
import './virtualEntities/index.js';

async function start() {
    // Load Plugins
    alt.log(':: Loading Client Plugins');
    import('./plugins.js');
    alt.log(':: Loaded Client Plugins');
}

start();
