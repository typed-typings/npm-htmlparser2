/// <reference path="bundle.d.ts" />
/// <reference path="typings/index.d.ts" />

import htmlparser2 = require('htmlparser2');
import assert = require('assert');

assert.equal(typeof htmlparser2.Parser, 'function');
